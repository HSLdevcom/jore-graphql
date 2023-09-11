FROM node:18-alpine

ENV NODE_ENV production
ENV WORK /usr/src/app

RUN mkdir -p ${WORK}
WORKDIR ${WORK}

COPY package.json yarn.lock ${WORK}/
RUN yarn install && yarn cache clean

COPY . ${WORK}

CMD yarn start:production
