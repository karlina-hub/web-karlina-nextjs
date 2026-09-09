FROM node:22-alpine AS base

RUN apk add --no-cache python3 make g++

FROM base AS deps
WORKDIR /app
COPY package.json ./
RUN npm install

FROM base AS prisma
WORKDIR /app
COPY package.json prisma ./
COPY --from=deps /app/node_modules ./node_modules
RUN npx prisma generate

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY --from=prisma /app/node_modules/.prisma ./node_modules/.prisma
COPY . .
RUN npm run build

FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
RUN apk add --no-cache libc6-compat
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"
CMD ["node", "server.js"]
