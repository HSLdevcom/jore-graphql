FROM node:current

ENV WORK /usr/src/app

RUN mkdir -p ${WORK}
WORKDIR ${WORK}

COPY package.json ${WORK}/
COPY yarn.lock ${WORK}/

RUN yarn install
COPY . ${WORK}

EXPOSE 5000

CMD yarn start
