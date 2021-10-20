'use strict';
const http = require('http');

const server = http.createServer((req, res) => {
  let body = '';
  // header
  console.dir(req.param);
  // get main route
  if (req.method === 'POST') {
    //   res.write("hey");
    console.log('hey');

    // when there is data
    req.on('data', (data) => {
      console.log(data);
      body += data;
    });
    // end of req
    req.on('end', () => {
      console.log('Body: ' + body);
      res.writeHead(200, {'Content-Type': 'text/html'})
      res.end('post recieved');
    });
  }
});
server.listen(8080, () => {
  console.log('listening to 8080');
});
//   server.on('connection', (socket)=> {
//     console.log('new connection')
// })
//   && req.url === "/"
