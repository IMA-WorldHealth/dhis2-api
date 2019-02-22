/**
 * @module http
 *
 * @description
 * A wrapper library for HTTP that provides a base
 *
 */
const axios = require('axios');

const url = process.env.URL;
const lastIndex = url.length - 1;
const hasTrailingSlash = url.charAt(lastIndex) === '/';
const baseURL = hasTrailingSlash ? url.substring(0, lastIndex) : url;

const auth = {
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
};

const http = axios.create({
  baseURL,
  withCredentials: true,
  auth,
});

module.exports = http;
