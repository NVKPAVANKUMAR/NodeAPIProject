FROM node:4.6
WORKDIR /app
ADD . /app
RUN npm install
EXPOSE 5000
CMD npm start