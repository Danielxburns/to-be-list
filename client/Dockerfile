FROM node:alpine as builder 
WORKDIR /client
COPY package.json .
RUN npm install
COPY . .
# I might be able to put this in the .env file I created earlier. Find out how they talk to each other NOTE 
ENV REACT_APPbaseAPIURL=<backend-app-service-ip>:<port>
RUN npm run build

FROM nginx 
EXPOSE 80
COPY --from=builder client/build /usr/share/nginx/html
