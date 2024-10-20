FROM registry.cn-shanghai.aliyuncs.com/lgn/node:lts-alpine AS builder

RUN apk update
RUN npm config set registry https://registry.npmmirror.com/
RUN npm install -g pnpm


WORKDIR /app
COPY . .

RUN pnpm install && pnpm run generate

FROM registry.cn-shanghai.aliyuncs.com/lgn/nginx:latest
COPY --from=builder /app/.output/public /usr/share/nginx/html
EXPOSE 80
