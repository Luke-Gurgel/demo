FROM node:15

WORKDIR /usr/src/demo

COPY . . 

RUN npm ci 

RUN npm i -g typescript ts-node && tsc --init --rootDir .

EXPOSE 3000

ENTRYPOINT [ "npm", "run", "start" ]