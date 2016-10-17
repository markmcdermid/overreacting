var express = require('express');
var app = express();

var request = require('request'),
  url = 'http://jukebox.leighton.com/api/jukebox/playing';

app.use((req, res, next) => {
  console.log('this');
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  next();
});

app.get('/playing', (req, res) => {
  request(url, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      res.send(JSON.parse(body));
    } else {
      console.log(`Got an error: ${error} Status: ${response.statusCode}`);
      res.status(400).send();
    }
  });
});

app.listen(3001, function () {
  console.log('Reverse Proxy Listening on 3001');
});
