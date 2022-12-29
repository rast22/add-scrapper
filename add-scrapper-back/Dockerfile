FROM node:16.13 as build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true
RUN npm install --save
COPY . .
RUN npm run start
EXPOSE 5450

