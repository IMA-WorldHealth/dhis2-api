const { client } = require('../lib/http');

/**
 * @class BaseAPI
 *
 * @description
 * The base of all API routes that binds the HTTP module
 * to the API.
 */
class BaseAPI {
  constructor() {
    this.http = client;
  }
}

module.exports = BaseAPI;
