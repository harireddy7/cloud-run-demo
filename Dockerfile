FROM node:20-alpine AS builder
RUN apk add git bash python3 py3-pip zip grep

WORKDIR /app

COPY . ./

RUN yarn install --frozen-lockfile
RUN yarn build

FROM nginx:stable-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80

# ENTRYPOINT ["nginx", "-g", "daemon off;"]
CMD ["nginx", "-g", "daemon off;"]
