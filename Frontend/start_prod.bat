
::create the env vars:
::no needed yet
set PRODUCTION=true
set NODE_PORT=8080


::this format is needed to pass env vars to react 
set REACT_APP_PRODUCTION=true
set REACT_APP_NODE_PORT=1000

::start the backend on node
call yarn build
node ./server.js


