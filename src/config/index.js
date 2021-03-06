// If running on localhost (the jukebox itself) change the API server url
export const SERVER_URL = location.hostname === 'localhost' || location.hostname === '127.0.0.1'
  ? 'http://jukebox.leighton.com/api/jukebox'
  : 'http://localhost:9000/api/jukebox';
export const CONTENT_TYPE = 'application/json';

