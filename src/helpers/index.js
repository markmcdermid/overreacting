import { SERVER_URL, CONTENT_TYPE } from '../config';

export const fetchPost = (endPoint, body) => {
  const opts = {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { 'Content-Type': CONTENT_TYPE }
  };
  return fetch(`${SERVER_URL}${endPoint}`, opts);
};

export const fetchGet = endPoint => fetch(`${SERVER_URL}${endPoint}`);
