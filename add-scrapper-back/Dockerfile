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


FROM node:16.13 as build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5450
