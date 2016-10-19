const express = require('express'),
  bodyParser = require('body-parser'),
  request = require('request');

const app = express();

app.use(bodyParser.json());

const getImgUrl = (id, size) => {
  if (!id) return 'http://placekitten.com/640/640';
  const resolution = size === 'sm' ? '160x160' : '640x640';
  return `https://resources.wimpmusic.com/images/${id.replace(/-/g, '/')}/${resolution}.jpg`;
};

const mapTrack = (track) => {
  const {
    id,
    artistName: artist,
    name: requestedBy,
    trackData: {
      title,
      album: { cover }
    }
  } = track;

  const coverSm = getImgUrl(cover, 'sm');
  const coverLg = getImgUrl(cover);

  return {
    id,
    requestedBy,
    artist,
    title,
    coverSm,
    coverLg
  };
};

const mapBody = function (body) {
  return {
    queue: body.queue.map(mapTrack),
    nowPlaying: mapTrack(body.track),
    currentCategory: body.currentCategory,
    time: {
      duration: body.track.duration,
      start: body.trackStartTime
    }
  };
};

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/playing', (req, res) => {
  request('http://jukebox.leighton.com/api/jukebox/playing', (error, response, body) => {
    if (!error && response.statusCode === 200) {
      var sendBody = mapBody(JSON.parse(body));
      return res.send(sendBody);
    } else {
      res.status(response.statusCode || 500).send();
    }
  });
});

app.post('/search', ({ body }, res) => {

  const opts = {
    uri: 'http://jukebox.leighton.com/api/jukebox/search',
    method: 'POST',
    json: body
  };

  request(opts, (error, response, resBody) => {
    if (!error && response.statusCode == 200) {
      res.send(resBody);
    } else {
      res.status(400).send();
    }
  });
});

app.post('/categories', ({ body }, res) => {

  var opts = {
    uri: 'http://jukebox.leighton.com/api/jukebox/categories',
    method: 'POST',
    json: body
  };

  request(opts, (error, response, body) => {
    if (!error && response.statusCode == 200) {
      res.send(body);
    } else {
      res.status(400).send();
    }
  });
});

app.listen(3001, () => console.log('Reverse Proxy Listening on 3001'));
