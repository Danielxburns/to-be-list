FROM node:alpine as builder 
WORKDIR /client
COPY package.json .
RUN npm install
COPY . .
# replace the hard coded url with a variable TODO 
# I might be able to put this in the .env file I created earlier. Find out how they talk to each other NOTE 
# ENV REACT_APPbaseAPIURL=192.168.99.103:31678 # I could not get this to run in browser. Switched to using nginx/default.conf NOTE 
RUN npm run build

FROM nginx 
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder client/build /usr/share/nginx/html
