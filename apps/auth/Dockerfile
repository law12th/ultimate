FROM node:alpine

WORKDIR /usr/app
COPY ./package.json ./
RUN npm install
RUN npm install pm2 -g
COPY ./ ./

CMD ["npm", "run", "start"]
