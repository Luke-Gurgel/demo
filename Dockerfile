FROM node:15-alpine

WORKDIR /usr/src/demo

COPY ./package.json ./package-lock.json ./

RUN npm ci

RUN npm i -g typescript ts-node

COPY . . 

EXPOSE 3000

ENTRYPOINT [ "npm", "run", "start" ]