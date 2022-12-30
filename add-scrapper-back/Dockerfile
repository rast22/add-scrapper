#
#
#FROM node:16.13 as build
#RUN apt-get update
#RUN apt-get install -y chromium \
#        fonts-ipafont-gothic fonts-wqy-zenhei fonts-thai-tlwg fonts-kacst fonts-freefont-ttf libxss1 \
#        --no-install-recommends \
#WORKDIR /usr/src/app
#COPY package.json package-lock.json ./
#ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true
#ENV PUPPETEER_EXECUTABLE_PATH /usr/share/bin/chromium
#RUN npm install
#COPY . .
#
#
#EXPOSE 5450

#FROM node:16.13 as build
#RUN apt-get update
#RUN apt-get install -y chromium \
#        fonts-ipafont-gothic fonts-wqy-zenhei fonts-thai-tlwg fonts-kacst fonts-freefont-ttf libxss1 \
#        --no-install-recommends
#USER node
#WORKDIR /usr/src/app
#COPY package.json package-lock.json ./
#COPY --chown=node package.json .
#COPY --chown=node package-lock.json .
#ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true
#ENV PUPPETEER_EXECUTABLE_PATH /usr/bin/chromium
#RUN npm install
#COPY --chown=node . /app
#COPY . .
#EXPOSE 5450


#FROM node:16.13 as build
#RUN mkdir -p /usr/src/app
#COPY package.json /usr/src/app/
#COPY package-lock.json /usr/src/app/
#WORKDIR /usr/src/app
#ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true
#
##ADD package.json package-lock.json ./
##ADD package*.json ./
#RUN npm install
#COPY . /usr/src/app
#EXPOSE 5450
#CMD ["node", "index.js"]

FROM node:16


WORKDIR /usr/src/app
#ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true
RUN apt-get update && apt-get install -y libnss3 libnspr4 libatk1.0-0 libatk-bridge2.0-0 libcups2 libdrm2 libxkbcommon0 libxcomposite1 libxdamage1 libxfixes3 libxrandr2 libgbm1 libasound2

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080
CMD [ "node", "index.js" ]
