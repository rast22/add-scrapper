FROM node:16.13 as build
WORKDIR /dist/src/app
RUN npm cache clean --force
COPY . .
RUN npm install
RUN npm run build

FROM nginx:1.17.1-alpine
COPY --from=build /dist/src/app/dist/add-scrapper /usr/share/nginx/html
COPY /nginx.conf  /etc/nginx/nginx.conf
