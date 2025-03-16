const http = require('http');

const { createServer } = require('./createServer');

createServer().listen(5700, () => {
  // eslint-disable-next-line no-console
  console.log('Server started! 🚀');
});

const req = http.request('http://localhost:5700/?toCase=CAMEL', (res) => {
  res.setEncoding('utf8');

  res.on('data', (data) => {
    console.log(data);
  });
});

req.on('error', (error) => {
  console.log(error);
});

req.end();
