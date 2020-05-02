
::create the env vars:
::no needed yet
set PRODUCTION=false
set NODE_PORT=1000

::start the backend on node
start nodemon ./server.js

::start the frontend
yarn start 


