FROM node:4.6
WORKDIR /appjs
ADD . /appjs
RUN npm install --quite
EXPOSE 5000
CMD npm start