#!/usr/bin/env bash

VERSION="${1:-master}"

echo "Downloading LND's proto files..."
# For LND 0.14.0 and above, rpc.proto has been renamed to lightning.proto
curl "https://raw.githubusercontent.com/lightningnetwork/lnd/${VERSION}/lnrpc/lightning.proto" > resources/lightning.proto
curl "https://raw.githubusercontent.com/lightningnetwork/lnd/${VERSION}/lnrpc/stateservice.proto" > resources/stateservice.proto
curl "https://raw.githubusercontent.com/lightningnetwork/lnd/${VERSION}/lnrpc/walletunlocker.proto" > resources/walletunlocker.proto
# Check if protoc is present
if ! command -v protoc >/dev/null 2>&1; then
    echo "protoc is not present, please install it and try again"
    exit 1
fi
echo "Generating TypeScript definitions..."
yarn build-types
echo "Done"
