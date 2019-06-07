FROM node
ENV APP_DIR=/app

RUN mkdir $APP_DIR

WORKDIR $APP_DIR

RUN npm install jest-cucumber --save-dev
EXPOSE 3000

EXPOSE 35729