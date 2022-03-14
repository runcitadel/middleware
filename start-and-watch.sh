#!/bin/sh

set -e

# start server in watch mode
concurrently npm:build:watch nodemon --experimental-json-modules bin/www.mjs
