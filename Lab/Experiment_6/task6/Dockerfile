# STAGE 1: Builder
FROM node:18-alpine AS builder
WORKDIR /app
COPY package.json .
RUN npm install --only=production && mkdir -p /app/node_modules

# STAGE 2: Runtime
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY app.js .
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser
EXPOSE 3000
CMD ["node", "app.js"]
