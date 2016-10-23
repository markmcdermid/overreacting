import { SERVER_URL, CONTENT_TYPE } from '../config';

export const apiPost = (endPoint, body, customHeaders = {}) => {
  const defaultHeaders = { 'Content-Type': CONTENT_TYPE };
  const opts = {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { ...customHeaders, ...defaultHeaders }
  };
  return fetch(`${SERVER_URL}${endPoint}`, opts);
};

export const apiGet = endPoint => fetch(`${SERVER_URL}${endPoint}`);
