import express = require("express");

const server = express();
const portNumber = 8080;

function requestListener(request: express.Request, response: express.Response) {
  response.send(`You requested ${ request.query.firstname } ${ request.query.lastname }`);
}

server.get("/", requestListener);

server.listen(portNumber, () => {
  console.log(`Listening on localhost:${ portNumber }`);
});
