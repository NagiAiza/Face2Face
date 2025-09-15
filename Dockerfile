FROM node:18

COPY . /app

WORKDIR /app

RUN yarn install
RUN yarn run build

EXPOSE 3000

CMD ["yarn","dev"]
