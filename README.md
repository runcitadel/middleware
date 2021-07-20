# middleware

Middleware wraps [Bitcoin Core](https://github.com/bitcoin/bitcoin)'s RPC and [LND](https://github.com/lightningnetwork/lnd)'s gRPC, and exposes them via a RESTful API.

It is part of Citadel's effort to create an open source, easy to use, and secure Bitcoin full node, and also build a free libre open source backend for Umbrel.


## 🚀 Getting started

Middleware will soon be part of the full Citadel project. For now, you can install it on your own machine manually.

## 🛠 Running middleware

Make sure a [`bitcoind`](https://github.com/bitcoin/bitcoin) and [`lnd`](https://github.com/lightningnetwork/lnd) instance is running and available on the same machine.

### Step 1. Install dependencies

```sh
yarn
```

### Step 2. Set environment variables

Set the following environment variables directly or by placing them in `.env` file of project's root.

| Variable              | Description                                                                                           | Default                            |
| --------------------- | ----------------------------------------------------------------------------------------------------- | ---------------------------------- |
| `PORT`                | Port where middleware should listen for requests                                                      | `3005`                             |
| `DEVICE_HOSTS`        | Comma separated list of IPs or domain names to whitelist for CORS                                     | `http://citadel.local`              |
| `BITCOIN_HOST`        | IP or domain where `bitcoind` RPC is listening                                                        | `127.0.0.1`                        |
| `RPC_USER`            | `bitcoind` RPC username                                                                               |                                    |
| `RPC_PASSWORD`        | `bitcoind` RPC password                                                                               |                                    |
| `LND_HOST`            | IP or domain where `lnd` RPC is listening                                                             | `127.0.0.1`                        |
| `TLS_FILE`            | Path to `lnd`'s TLS certificate                                                                       | `/lnd/tls.cert`                    |
| `LND_PORT`            | Port where `lnd` RPC is listening                                                                     | `10009`                            |
| `LND_NETWORK`         | The chain `bitcoind` is running on (mainnet, testnet, regtest, simnet)                                | `mainnet`                          |
| `MACAROON_DIR`        | Path to `lnd`'s macaroon directory                                                                    | `/lnd/data/chain/bitcoin/mainnet/` |
| `JWT_PUBLIC_KEY_FILE` | Path to the JWT public key created by [`manager`](https://github.com/runcitadel/manager) | `/jwt-public-key/jwt.pem`          |

### Step 3. Run middleware

```sh
yarn start
```

You can browse through the available API endpoints [here](https://github.com/runcitadel/middleware/tree/master/routes/v1).

---

### ⚡️ Don't be too reckless

> Citadel is still in an early stage and things are expected to break every now and then. We **DO NOT** recommend running it on the mainnet with real money just yet, unless you want to be really _#reckless_.

## ❤️ Contributing

We welcome and appreciate new contributions!

If you're a developer looking to help but not sure where to begin, check out [these issues](https://github.com/runcitadel/middleware/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22) that have specifically been marked as being friendly to new contributors.

If you're looking for a bigger challenge, before opening a pull request please [create an issue](https://github.com/runcitadel/middleware/issues/new/choose) or [join our chat](https://discord.gg/QerudN9Bwe) to get feedback, discuss the best way to tackle the challenge, and to ensure that there's no duplication of work.

## 🙏 Acknowledgements

The Citadel Middleware is built upon the work done by [Casa](https://github.com/casa) on its open-source [API](https://github.com/Casa/Casa-Node-API) and Umbrel's work on [their middleware](https://github.com/getumbrel/umbrel-middleware).

---

[![License](https://img.shields.io/github/license/runcitadel/middleware?color=%235351FB)](https://github.com/runcitadel/middleware/blob/master/LICENSE)

