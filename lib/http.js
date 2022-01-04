/**
 * @module http
 *
 * @description
 * A wrapper library for HTTP that provides a base
 */
const axios = require('axios');
// const qs = require('qs');
const shortid = require('shortid');
const debug = require('debug')('dhis2-api:http');

const client = axios.create({
  withCredentials: true,
  // FIXME(@jniles) - this funcitonality exists in the github master, but isn't released
  // yet.  We'll have to wait on it.
  // ref: https://github.com/ljharb/qs/issues/299
  // paramSerializer: params => qs.stringify(params, { arrayFormat: 'comma' }),
});

const ts = (date) => `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;

client.interceptors.request.use((cfg) => {
  Object.assign(cfg, { shortid: shortid() });
  debug(`[${ts(new Date())}] (${cfg.shortid}) ${cfg.method.toUpperCase()} - ${cfg.baseURL}${cfg.url}`);
  return cfg;
}, (err) => Promise.reject(err));

client.interceptors.response.use((response) => {
  debug(`[${ts(new Date())}] (${response.config.shortid}) ${response.status} - ${response.config.url}`);
  return response;
}, (err) => Promise.reject(err));

const asBase64 = (str) => Buffer.from(str).toString('base64');
function makeBasicAuthHeader(username, password) {
  const authString = asBase64(`${username}:${password}`);
  return `Basic ${authString}`;
}

/**
 * @function configure
 *
 * @description
 * Configures the http connector with default options.  The most common
 * ones are:
 *  - url: the server url
 *  - auth: { username, password }
 *
 * @param params {object} -
 */
function configure(params = {}) {
  const url = params.url || '';
  const lastIndex = url.length - 1;
  const hasTrailingSlash = url.charAt(lastIndex) === '/';
  const baseURL = hasTrailingSlash ? url.substring(0, lastIndex) : url;

  // set the defaults that are needed for interaction with the DHIS2 API
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

exports.client = client;
exports.configure = configure;
