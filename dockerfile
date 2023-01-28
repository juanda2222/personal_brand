# Use the official lightweight Node.js 12 image.
# https://hub.docker.com/_/node
FROM node:12-slim

# Create and change to the app directory.
WORKDIR /usr/src/app

# set up the enviroment vars:
ENV PRODUCTION=true
ENV NODE_PORT=8080
ENV REACT_APP_PRODUCTION=true
ENV REACT_APP_NODE_PORT=8080

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure both package.json AND package-lock.json are copied.
# Copying this separately prevents re-running npm install on every code change.
COPY ./Frontend/package*.json ./Frontend/

# Install production dependencies.
RUN cd Frontend && npm install 

# Copy local code to the container image.
COPY ./Frontend ./Frontend/

RUN cd Frontend && npm run-script build

# Run the web service on container startup.
CMD [ "node", "./Frontend/server.js" ]