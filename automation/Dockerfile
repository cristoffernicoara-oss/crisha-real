FROM node:22-bookworm-slim

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY tsconfig.json ./
COPY src ./src
COPY samples ./samples

RUN mkdir -p data/imports logs

ENV NODE_ENV=production
ENV TIMEZONE=Europe/Stockholm

# Persist SQLite + token cache via a volume mounted at /app/data
VOLUME ["/app/data"]

CMD ["npx", "tsx", "src/cli.ts", "cloud:start"]
