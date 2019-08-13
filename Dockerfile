FROM node:12

ENV WORK /usr/src/app

RUN mkdir -p ${WORK}
WORKDIR ${WORK}

COPY package.json ${WORK}/
COPY yarn.lock ${WORK}/

COPY . ${WORK}
RUN yarn install

CMD yarn start
