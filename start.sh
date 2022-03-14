#!/bin/sh

set -e

# start server
node --experimental-json-modules /app/bin/www.mjs
