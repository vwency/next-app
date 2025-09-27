FROM node:alpine AS base
RUN apk add --no-cache libc6-compat rsync
RUN npm install -g pnpm@10.15.1
WORKDIR /app

FROM base AS deps
COPY pnpm-workspace.yaml package.json pnpm-lock.yaml ./
COPY app/package.json ./app/
COPY packages ./packages
RUN pnpm install --frozen-lockfile

FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/packages ./packages
COPY --from=deps /app/package.json ./app/
COPY pnpm-workspace.yaml package.json pnpm-lock.yaml ./
COPY app ./app
COPY tsconfig.base.json ./
RUN pnpm install
RUN pnpm build

FROM base AS runner
WORKDIR /app
RUN addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 nextjs
COPY --from=builder --chown=nextjs:nodejs /app/app ./
USER nextjs
CMD ["pnpm", "start"]
