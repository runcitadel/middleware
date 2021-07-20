#!/usr/bin/env bash

VERSION="${1:-master}"

echo "Downloading LND's proto files..."
curl "https://raw.githubusercontent.com/lightningnetwork/lnd/${VERSION}/lnrpc/rpc.proto" > resources/rpc.proto
curl "https://raw.githubusercontent.com/lightningnetwork/lnd/${VERSION}/lnrpc/stateservice.proto" > resources/stateservice.proto
curl "https://raw.githubusercontent.com/lightningnetwork/lnd/${VERSION}/lnrpc/walletunlocker.proto" > resources/walletunlocker.proto
echo "Generating TypeScript definitions..."
yarn build-types
echo "Done"
