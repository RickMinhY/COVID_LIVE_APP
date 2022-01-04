# pull the base image
FROM node:alpine

# set the working direction
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY ["package.json", "package-lock.json*", "./"]



RUN apk update && apk add --no-cache --virtual .gyp python2 make g++

RUN npm install --production

# add app
COPY . ./

# start app
CMD ["npm", "start"]