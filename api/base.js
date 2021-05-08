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

  /**
   * @method getHttpParams
   *
   * @description
   * A handy way to get HTTP parameters by merging the class params
   * with custom parameters.
   *
   * @return {Object} the http parameters
   */
  getHttpParams(options = {}) {
    return { ...this.params, ...options };
  }
}

module.exports = BaseAPI;
