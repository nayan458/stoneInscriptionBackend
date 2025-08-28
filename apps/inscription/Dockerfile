#base
ARG NODE_VERSION=22.14.0
FROM node:${NODE_VERSION}-slim AS base

WORKDIR /workspace

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

#build
FROM base As build

# root packages
COPY eslint.config.mjs ./

COPY jest.config.ts ./
COPY jest.preset.js ./

COPY nx.json ./

COPY package*.json ./
COPY pnpm-lock.yaml ./
COPY pnpm-workspace.yaml ./

COPY tsconfig*.json ./


# app source code
COPY apps/auth ./apps/auth

# library source code
# COPY libs/grpc ./libs/grpc
COPY lib/nestjs-config ./lib/nestjs-config

# install packages
RUN pnpm install --frozen-lockfile

# install protobuf compiler to compile proto files
# RUN apt-get update && apt-get install -y protobuf-compiler
# RUN apk add --no-cache protobuf-compiler

# create build 
RUN pnpm dlx nx build auth

# Production
FROM base as prod

# production environment
ENV NODE_ENV production

# openssl for prisma
# RUN apt-get update && apt-get install -y openssl

WORKDIR /app

# Copying the package.json files form builder
# root packages
COPY --from=build /workspace/package.json ./
COPY --from=build /workspace/pnpm-lock.yaml ./
COPY --from=build /workspace/pnpm-workspace.yaml ./

# app packages
COPY --from=build /workspace/apps/auth/package.json ./apps/auth/package.json

# lib packages
# COPY --from=build /workspace/libs/grpc/package.json ./libs/grpc/package.json
COPY --from=build /workspace/lib/nestjs-config/package.json ./lib/nestjs-config/package.json

RUN pnpm install --prod --frozen-lockfile

# COPY --from=build /workspace/node_modules/@prisma-client/auth/ ./node_modules/@prisma-client/auth/
COPY --from=build /workspace/dist ./dist

# Run the application as a non-root user.
RUN chown -R node:node /app
USER node

CMD ["node", "dist/apps/auth/main"]