FROM node:12.20.2
WORKDIR /usr/src/clean-node-api
COPY ./package.json .
RUN npm install --only=prod
