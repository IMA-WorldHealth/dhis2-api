/**
 * @module http
 *
 * @description
 * A wrapper library for HTTP that provides a base
 */
const axios = require('axios');
// const shortid = require('shortid');
const debug = require('debug')('dhis2-api:http');

const client = axios.create({
  withCredentials: true,
});

const asBase64 = str => Buffer.from(str).toString('base64');
function makeBasicAuthHeader(username, password) {
  const authString = asBase64(`${username}:${password}`);
  return `Basic ${authString}`;
}

function configure(params = {}) {
  const url = params.url || '';
  const lastIndex = url.length - 1;
  const hasTrailingSlash = url.charAt(lastIndex) === '/';
  const baseURL = hasTrailingSlash ? url.substring(0, lastIndex) : url;

  // set the defualts that are needed for interaction with the DHIS2 API
  client.defaults.baseURL = baseURL;

  Object.entries(([key, value]) => {
    client.defaults[key] = value;
  });

  if (params.auth) {
    const { username, password } = params.auth;
    client.defaults.headers.common.Authorization = makeBasicAuthHeader(username, password);
  }

  debug(`configured axios with ${baseURL}.`);
}

/**
 * TODO(@jniles)
 * Add interceptors that stick shortids onto headers of outgoing http request
 * so that we can log timing information to debug() calls.
 */

exports.client = client;
exports.configure = configure;
