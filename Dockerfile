FROM node:12.19.0-slim

RUN mkdir /app
WORKDIR /app

COPY Gemfile* ./app/

RUN bundle install

COPY package.json* ./app/

RUN yarn install
