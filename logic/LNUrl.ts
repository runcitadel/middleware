// https://github.com/BlueWallet/BlueWallet/blob/82d387278bc3cc388cef9e2a084ee5d8db33616d/class/lnurl.js
import bech32Js from "bech32";
const { bech32 } = bech32Js;
import bolt11 from "bolt11";
import CryptoJS from "crypto-js";
import crypto from "crypto";
import fetch from "node-fetch";

type decodedInvoice = {
  destination: string | undefined;
  num_satoshis: string;
  num_millisatoshis: string;
  timestamp: string;
  fallback_addr: string;
  route_hints: string[];
  expiry?: string;
  payment_hash?: bolt11.TagData;
  description_hash?: bolt11.TagData;
  cltv_expiry?: string;
  description?: bolt11.TagData;
};

type LnURLServerReply = {
  callback: string, // The URL from LN SERVICE which will accept the pay request parameters
  maxSendable: number, // Max amount LN SERVICE is willing to receive
  minSendable:number, // Min amount LN SERVICE is willing to receive, can not be less than 1 or more than `maxSendable`
  metadata: string, // Metadata json which must be presented as raw string here, this is required to pass signature verification at a later step
  commentAllowed: number, // Optional number of characters accepted for the `comment` query parameter on subsequent callback, defaults to 0 if not provided. (no comment allowed)
  withdrawLink: string, // Optional lnurl-withdraw link (for explanation see justification.md)
  tag: "payRequest" // Type of LNURL
}

type LNUrlCallback = {
  successAction: {
    tag: string;
    description: string;
    url: string;
  }
  routes: unknown[];
  pr: string;
  disposable: boolean;
}

type parsedLnURL = {
  callback: string;
  fixed: boolean;
  min: number;
  max: number;
  domain: string;
  metadata: string;
  description?: string;
  image: string | undefined;
  amount?: number;
  commentAllowed: number;
};
/**
 * @see https://github.com/btcontract/lnurl-rfc/blob/master/lnurl-pay.md
 */
export default class Lnurl {
  static TAG_PAY_REQUEST = "payRequest"; // type of LNURL
  static TAG_WITHDRAW_REQUEST = "withdrawRequest"; // type of LNURL
  #preimage: boolean;
  #lnurl: string;
  #lnurlPayServiceBolt11Payload: false | LNUrlCallback;
  #lnurlPayServicePayload?: parsedLnURL;

  constructor(url: string) {
    this.#lnurl = url;
    this.#lnurlPayServiceBolt11Payload = false;
    this.#preimage = false;
  }

  static findlnurl(bodyOfText: string): string | null {
    const res =
      /^(?:http.*[&?]lightning=|lightning:)?(lnurl1[02-9ac-hj-np-z]+)/.exec(
        bodyOfText.toLowerCase()
      );
    if (res) {
      return res[1];
    }
    return null;
  }

  static getUrlFromLnurl(lnurlExample: string): string | false {
    const found = Lnurl.findlnurl(lnurlExample);
    if (!found) {
      if (Lnurl.isLightningAddress(lnurlExample)) {
        const username = lnurlExample.split("@")[0].trim();
        const host = lnurlExample.split("@")[1].trim();
        return `https://${host}/.well-known/lnurlp/${username}`;
      } else {
        return false;
      }
    }

    const decoded = bech32.decode(found, 10000);
    return Buffer.from(bech32.fromWords(decoded.words)).toString();
  }

  static isLnurl(url: string): boolean {
    return Lnurl.findlnurl(url) !== null;
  }

  async fetchGet<ResponseType>(url: string): Promise<ResponseType> {
    const resp = await fetch(url, { method: "GET" });
    if (resp.status >= 300) {
      throw new Error("Bad response from server");
    }
    const reply = await resp.json();
    if ((reply as {status: string}).status === "ERROR") {
      throw new Error("Reply from server: " + (reply as {reason: string}).reason);
    }
    return reply as ResponseType;
  }

  decodeInvoice(invoice: string): decodedInvoice {
    const { payeeNodeKey, tags, satoshis, millisatoshis, timestamp } =
      bolt11.decode(invoice);

    const decoded: decodedInvoice = {
      destination: payeeNodeKey,
      num_satoshis: satoshis ? satoshis.toString() : "0",
      num_millisatoshis: millisatoshis ? millisatoshis.toString() : "0",
      timestamp: (timestamp as number).toString(),
      fallback_addr: "",
      route_hints: [],
    };

    for (let i = 0; i < tags.length; i++) {
      const { tagName, data } = tags[i];
      switch (tagName) {
        case "payment_hash":
          decoded.payment_hash = data;
          break;
        case "purpose_commit_hash":
          decoded.description_hash = data;
          break;
        case "min_final_cltv_expiry":
          decoded.cltv_expiry = data.toString();
          break;
        case "expire_time":
          decoded.expiry = data.toString();
          break;
        case "description":
          decoded.description = data;
          break;
      }
    }

    if (!decoded.expiry) decoded.expiry = "3600"; // default

    if (
      parseInt(decoded.num_satoshis) === 0 &&
      parseInt(decoded.num_millisatoshis) > 0
    ) {
      decoded.num_satoshis = (
        parseInt(decoded.num_millisatoshis) / 1000
      ).toString();
    }

    return decoded;
  }

  async requestBolt11FromLnurlPayService(amountSat: number, comment = ""): Promise<LNUrlCallback> {
    if (!this.#lnurlPayServicePayload)
      throw new Error("this._lnurlPayServicePayload is not set");
    if (!this.#lnurlPayServicePayload.callback)
      throw new Error("this._lnurlPayServicePayload.callback is not set");
    if (
      amountSat < this.#lnurlPayServicePayload.min ||
      amountSat > this.#lnurlPayServicePayload.max
    )
      throw new Error(
        "The specified amount is invalid, " +
          amountSat +
          " it should be between " +
          this.#lnurlPayServicePayload.min +
          " and " +
          this.#lnurlPayServicePayload.max
      );
    const nonce = Math.floor(Math.random() * 2e16).toString(16);
    const separator =
      this.#lnurlPayServicePayload.callback.indexOf("?") === -1 ? "?" : "&";
    if (
      this.commentAllowed &&
      comment &&
      comment.length > this.commentAllowed
    ) {
      comment = comment.substr(0, this.commentAllowed);
    }
    if (comment) comment = `&comment=${encodeURIComponent(comment)}`;
    const urlToFetch =
      this.#lnurlPayServicePayload.callback +
      separator +
      "amount=" +
      Math.floor(amountSat * 1000) +
      "&nonce=" +
      nonce +
      comment;
    this.#lnurlPayServiceBolt11Payload = await this.fetchGet<LNUrlCallback>(urlToFetch);
    if ((this.#lnurlPayServiceBolt11Payload as unknown as { status: string, reason: string }).status === "ERROR")
      throw new Error(
        (this.#lnurlPayServiceBolt11Payload as unknown as { status: string, reason: string }).reason ||
          "requestBolt11FromLnurlPayService() error"
      );

    // check pr description_hash, amount etc:
    const decoded = this.decodeInvoice((this.#lnurlPayServiceBolt11Payload as LNUrlCallback).pr);
    const metadataHash = crypto
      .createHash("sha256")
      .update(this.#lnurlPayServicePayload.metadata)
      .digest("hex");
    if (metadataHash !== decoded.description_hash) {
      throw new Error(`Invoice description_hash doesn't match metadata.`);
    }
    if (parseInt(decoded.num_satoshis) !== Math.round(amountSat)) {
      throw new Error(
        `Invoice doesn't match specified amount, got ${
          decoded.num_satoshis
        }, expected ${Math.round(amountSat)}`
      );
    }

    return this.#lnurlPayServiceBolt11Payload;
  }

  async callLnurlPayService(): Promise<parsedLnURL> {
    if (!this.#lnurl) throw new Error("this._lnurl is not set");
    const url = Lnurl.getUrlFromLnurl(this.#lnurl);
    // calling the url
    const reply = await this.fetchGet<LnURLServerReply>(<string>url);

    if (reply.tag !== Lnurl.TAG_PAY_REQUEST) {
      throw new Error("lnurl-pay expected, found tag " + reply.tag);
    }

    const data = reply;

    // parse metadata and extract things from it
    let image;
    let description;
    const kvs = JSON.parse(data.metadata);
    for (let i = 0; i < kvs.length; i++) {
      const [k, v] = kvs[i];
      switch (k) {
        case "text/plain":
          description = v;
          break;
        case "image/png;base64":
        case "image/jpeg;base64":
          image = "data:" + k + "," + v;
          break;
      }
    }

    // setting the payment screen with the parameters
    const min = Math.ceil((data.minSendable || 0) / 1000);
    const max = Math.floor(data.maxSendable / 1000);

    this.#lnurlPayServicePayload = {
      callback: data.callback,
      fixed: min === max,
      min,
      max,
      // @ts-expect-error TODO
      domain: data.callback.match(/https:\/\/([^/]+)\//)[1],
      metadata: data.metadata,
      description,
      image,
      amount: min,
      commentAllowed: data.commentAllowed,
      // lnurl: uri,
    };
    return this.#lnurlPayServicePayload;
  }

  get successAction(): {
    tag: string;
    description: string;
    url: string;
} {
    return (this.#lnurlPayServiceBolt11Payload as LNUrlCallback).successAction;
  }

  get domain(): string {
    return (this.#lnurlPayServicePayload as parsedLnURL).domain;
  }

  get description(): string | undefined {
    return (this.#lnurlPayServicePayload as parsedLnURL).description;
  }

  get image(): string | undefined {
    return (this.#lnurlPayServicePayload as parsedLnURL).image;
  }

  get lnurl(): string {
    return this.#lnurl;
  }

  get disposable(): boolean {
    return (this.#lnurlPayServiceBolt11Payload as LNUrlCallback).disposable;
  }

  get preimage(): boolean {
    return this.#preimage;
  }

  static decipherAES(ciphertextBase64: string, preimageHex: string, ivBase64: string): string {
    const iv = CryptoJS.enc.Base64.parse(ivBase64);
    const key = CryptoJS.enc.Hex.parse(preimageHex);
    return CryptoJS.AES.decrypt(
      Buffer.from(ciphertextBase64, "base64").toString("hex"),
      key,
      {
        iv,
        mode: CryptoJS.mode.CBC,
        format: CryptoJS.format.Hex,
      }
    ).toString(CryptoJS.enc.Utf8);
  }

  get commentAllowed(): number | false {
    return this.#lnurlPayServicePayload?.commentAllowed
      ? parseInt(this.#lnurlPayServicePayload.commentAllowed as unknown as string)
      : false;
  }

  static isLightningAddress(address: string): boolean {
    // ensure only 1 `@` present:
    if (address.split("@").length !== 2) return false;
    const splitted = address.split("@");
    return !!splitted[0].trim() && !!splitted[1].trim();
  }
}
