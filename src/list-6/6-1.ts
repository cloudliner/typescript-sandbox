import http = require("http");

const portNumber = "8080";

function requestListener(request: http.ServerRequest, response: http.ServerResponse) {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.write("Response Text Here");
  response.end();
}

http.createServer(requestListener).listen(portNumber);

console.log(`Listening on localhost:${ portNumber }`);
