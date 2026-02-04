ARG BUN_VERSION=1

FROM oven/bun:${BUN_VERSION} AS base
WORKDIR /usr/src/app

# Install dependencies (cached layer)
FROM base AS install
RUN mkdir -p /temp/dev
COPY package.json bun.lock /temp/dev/
RUN cd /temp/dev && bun install --frozen-lockfile

# Build stage
FROM base AS prerelease
COPY --from=install /temp/dev/node_modules node_modules
COPY . .

# Set Bun preset for Nitro at build time
ENV NITRO_PRESET=bun
RUN bun run build

# Production image
FROM base AS release
COPY --from=prerelease /usr/src/app/.output .output
COPY --from=prerelease /usr/src/app/package.json .

EXPOSE 3000
CMD ["bun", "run", ".output/server/index.mjs"]
