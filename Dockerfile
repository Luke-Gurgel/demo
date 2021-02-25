FROM node:15-alpine

ENV NODE_ENV production

WORKDIR /usr/src/demo

COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]

RUN npm install --production --silent && mv node_modules ../

COPY . . 

EXPOSE 3000

ENTRYPOINT [ "npm", "run", "dev" ]