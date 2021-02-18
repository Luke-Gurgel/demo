FROM node:15

WORKDIR /usr/src/demo

# RUN npm init -y && npm i express mysql jest

# RUN npm i -D @babel/core @babel/preset-env @babel/preset-typescript @types/express @types/jest @types/mysql @types/node babel-jest nodemon ts-jest

# RUN npm i -g typescript ts-node && tsc --init --rootDir .

COPY . . 

EXPOSE 3000

ENTRYPOINT [ "npm", "run", "start" ]