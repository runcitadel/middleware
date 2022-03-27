# Define version & use pinned images
ARG NODE_VERSION=16

# Build on the host architecture, change this if you're building on arm64
FROM amd64/node:${NODE_VERSION}-alpine@sha256:425c81a04546a543da824e67c91d4a603af16fbc3d875ee2f276acf8ec2b1577 as node-builder
# Use multi-arch image for running the app
FROM node:${NODE_VERSION}-alpine@sha256:2c6c59cf4d34d4f937ddfcf33bab9d8bbad8658d1b9de7b97622566a52167f2b as node-runner


# DEVELOPMENT
FROM node-builder AS development
# Create app directory
WORKDIR /app
# Install tools globally to avoid permission errors
RUN yarn global add concurrently nodemon
# NOTE: Using project files from mounted volumes
EXPOSE 3005
# NOTE: Using command from docker-compose.yml


# DEPENDENCIES (production)
FROM node-builder as dependencies
# Create app directory
WORKDIR /app
# The current working directory
COPY . .
# Install production dependencies
RUN yarn workspaces focus -A --production
# Delete TypeScript code and markdown files to further reduce image size
RUN find /app/node_modules | grep ".\.ts" ".\.md" | grep -v "c-lightning\.ts" | xargs rm


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
RUN rm -rf node_modules tsconfig.tsbuildinfo *.ts .eslint* .git* .prettier* .vscode* tsconfig.json .yarn* yarn.lock start-and-watch.sh generate-rpc-definitions.sh
# Delete TypeScript code
RUN find /app | grep ".\.ts" ".\.md" | xargs rm

# PRODUCTION
FROM node-runner AS production
# Change directory to '/app'
WORKDIR /app
# Copy built code from build stage to '/app' directory
COPY --from=builder --chown=node:node /app /app
# Copy node_modules
COPY --from=dependencies --chown=node:node /app/node_modules /app/node_modules
EXPOSE 3006
USER node
# NOTE: Using command from docker-compose.yml
