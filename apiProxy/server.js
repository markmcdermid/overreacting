const express = require('express'),
  bodyParser = require('body-parser'),
  request = require('request');

const app = express();

app.use(bodyParser.json());

const getImgUrl = (id, size) => {
  const res = size === 'sm' ? '160' : '640';
  if (!id) return `http://placekitten.com/${res}/${res}`;
  return `https://resources.wimpmusic.com/images/${id.replace(/-/g, '/')}/${res}x${res}.jpg`;
};

const mapSearchItem = (item) => {
  const cover = item.album.cover;
  const obj = {
    coverSm: getImgUrl(cover, 'sm'),
    coverLg: getImgUrl(cover),
    id: item.id,
    title: item.title,
    artist: item.artists[0].name
  };

  return obj;
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
      duration: body.track.trackData.duration,
      start: new Date(body.trackStartTime).getTime()
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
    if (!response) {
      return res.status(500).send();
    }
    if (!error && response.statusCode === 200) {
      const sendBody = mapBody(JSON.parse(body));
      return res.send(sendBody);
    }
    return res.status(response.statusCode || 500).send();
  });
});

app.post('/search', ({ body }, res) => {
  const opts = {
    uri: 'http://jukebox.leighton.com/api/jukebox/search',
    method: 'POST',
    json: body
  };

  request(opts, (error, response, resBody) => {
    if (!error && response.statusCode === 200) {
      var items = resBody.tracks.items;
      console.log(items);
      res.send(resBody);
    } else {
      res.status(400).send();
    }
  });
});

app.get('/categories', (req, res) => {
  request('http://jukebox.leighton.com/api/jukebox/categories', (err, apiRes) => {
    return (!err && apiRes.statusCode === 200) ? res.send(apiRes.body) : res.status(400).send();
  });
});

app.post('/add', ({ body }, res) => {
  const opts = {
    uri: 'http://jukebox.leighton.com/api/jukebox/add',
    method: 'POST',
    json: body
  };

  request(opts, (error, apiRes) =>
    (!error && apiRes.statusCode === 200) ? res.send(apiRes.body) : res.status(400).send());
});

app.post('/categories', ({ body }, res) => {
  const opts = {
    uri: 'http://jukebox.leighton.com/api/jukebox/categories',
    method: 'POST',
    json: body
  };

  request(opts, (error, apiRes) =>
    (!error && apiRes.statusCode === 200) ? res.send(apiRes.body) : res.status(400).send());
});

app.listen(3001, () => console.log('Reverse Proxy Listening on 3001'));
