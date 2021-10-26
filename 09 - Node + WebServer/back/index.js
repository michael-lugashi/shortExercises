'use strict';
const http = require('http');
const data = require('./db');

const server = http.createServer((req, res) => {
  let body = '';
  if (req.method === 'GET') {
      console.log('recieved')
      res.write('got')
      res.end()
  }
  if (req.method === 'POST') {
    req.on('data', (data) => {
      body += data;
    });
    // // end of req
    req.on('end', () => {
      console.log('Body: ' + body);
      res.writeHead(200, 'ok', {
        'Content-Type': 'text/html',
        'Access-Control-Allow-Origin': '*',
      });
      res.end(checkValidation(JSON.parse(body)));
    });
  }
});
server.listen(8080, () => {
  console.log('listening to 8080');
});

function checkValidation(info) {
  let validated = true;
  const { name, age, abilityApp } = info;
  const { nameNotEqual, minAge, maxAge, ability } = data.validStudent;
  if (nameNotEqual.includes(name)) {
    validated = false;
  }
  if (age < minAge || age > maxAge) {
    validated = false;
  }
  if (!ability.includes(abilityApp)) {
    validated = false;
  }
  return String(validated);
}
