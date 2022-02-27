# Define version & use pinned images
ARG NODE_VERSION=16

# Build on the host architecture, change this if you're building on arm64
FROM amd64/node:${NODE_VERSION}-bullseye-slim@sha256:3861f41484125c13894363623c004b5af76ac73b7889c7feafa807d1d144895a as node-builder
# Use multi-arch image for running the app
FROM node:${NODE_VERSION}-bullseye-slim@sha256:22841c8578ef743f8e517ae194bdd6688537364b4c929f61a140b37578365d6c as node-runner


# DEVELOPMENT
FROM node-builder AS development
# Create app directory
WORKDIR /app
# Copy dependency management files
COPY package.json yarn.lock ./
# Install dependencies
RUN yarn install
# Install tools globally to avoid permission errors
RUN yarn global add concurrently nodemon
# NOTE: Using project files from mounted volumes
EXPOSE 3005
CMD [ "concurrently", "npm:build:watch", "nodemon --experimental-json-modules bin/www.mjs" ]


# DEPENDENCIES (production)
FROM node-builder as dependencies
# Create app directory
WORKDIR /app
# The current working directory
COPY . .
# Install production dependencies
RUN yarn workspaces focus -A --production
# Delete TypeScript code and markdown files to further reduce image size
RUN find /app/node_modules | grep ".\.ts" | grep -v "c-lightning\.ts" | xargs rm


# BUILD (production)
FROM node-builder as builder
# Change directory to '/app'
WORKDIR /app
# The current working directory
COPY . .
# Install dependencies
RUN yarn install
# Build TS code
RUN yarn build
# Delete everyhing we don't need in the next stage
RUN rm -rf node_modules tsconfig.tsbuildinfo *.ts **/*.ts .eslint* .git* .prettier* .vscode* tsconfig.json .yarn* yarn.lock


# PRODUCTION
FROM node-runner AS production
# Copy built code from build stage to '/app' directory
COPY --from=builder /app /app
# Copy node_modules
COPY --from=dependencies /app/node_modules /app/node_modules
# Change directory to '/app'
WORKDIR /app
EXPOSE 3006
CMD [ "node", "--experimental-json-modules", "bin/www.mjs" ]
