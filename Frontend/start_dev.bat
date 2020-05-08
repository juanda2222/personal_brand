
::create the env vars:
::no needed yet
set PRODUCTION=false
set NODE_PORT=8080
set PORT=3000

::this format is needed to pass env vars to react 
set REACT_APP_PRODUCTION=false
set REACT_APP_NODE_PORT=8080

::start the backend on node
start nodemon ./server.js

::start the frontend
yarn start 


