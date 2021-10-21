'use strict';
const http = require('http');
const data = require('./db');

const server = http.createServer((req, res) => {
  let body = '';
  // header
  //   console.dir(req.param);
  // get main route
  //   if (req.method === 'GET') {
  //     console.log('help');
  //     res.writeHead(200, 'ok', {
  //       'Content-Type': 'application/json',
  //       'Access-Control-Allow-Origin': '*',
  //     });
  //     res.write(`{name: 'daniel'}`);
  //     res.end();
  //   }
  if (req.method === 'POST') {
    //   res.write("hey");
    // console.log('hey');
    // when there is data
    req.on('data', (data) => {
      // console.log(JSON.stringify(data));
      body += data;
      //   res.write(data);

      //   res.end()
    });

    // // end of req
    req.on('end', () => {
      console.log('Body: ' + body);
      res.writeHead(200, 'ok', {
        'Content-Type': 'text/html',
        'Access-Control-Allow-Origin': '*',
      });
      let validated = true;
      const info = JSON.parse(body);
      const { name, age, abilityApp } = info;
      const { nameNotEqual, minAge, maxAge, ability } = data.validStudent;
      console.log(abilityApp);
      console.log(ability);
      if (nameNotEqual.includes(name)) {
        validated = false;
      }
      if (age < minAge || age > maxAge) {
        validated = false;
      }
      if (!ability.includes(abilityApp)) {
        validated = false;
      }
      res.end(String(validated));
    });
  }
});
server.listen(8080, () => {
  console.log('listening to 8080');
});
