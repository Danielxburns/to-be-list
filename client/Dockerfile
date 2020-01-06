FROM node:alpine as builder 
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN ["npm", "run", "build"]

FROM nginx 
EXPOSE 2001
COPY --from=builder app/build /usr/share/nginx/html
