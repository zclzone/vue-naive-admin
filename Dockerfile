FROM node:16

WORKDIR /app
COPY . /app

# if slow to install
# RUN npx nrm use taobao

RUN npm i -g pnpm@7.18.2
RUN npm i -g http-server

RUN pnpm i && pnpm build

EXPOSE 8080
CMD http-server ./dist
