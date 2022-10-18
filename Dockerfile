FROM node:14-alpine

WORKDIR /home/MartielloPizzeria

COPY package.json .

RUN yarn install

COPY . .