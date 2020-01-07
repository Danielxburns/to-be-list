FROM node:alpine as builder 
WORKDIR /client
COPY package.json .
RUN npm install
COPY . .
#EXPOSE 3000
RUN npm run build

FROM nginx 
EXPOSE 3000
COPY --from=builder client/build /usr/share/nginx/html
