const debug = require('debug')('dhis2:api');
const shortid = require('shortid');
const http = require('../lib/http');

const LoggerProxy = {
  get(target, method, receiver) {
    const uid = shortid();
    const fn = Reflect.get(target, method);

    return async (...args) => {
      try {
        debug(`(${uid}) (${Date.now()}) - ${this.name}.${method}.`);
        const result = await fn.apply(receiver, args);
        debug(`(${uid}) (${Date.now()}) - ${this.name}.${method}.`);
        return result;
      } catch (error) {
        debug(`(${uid}) (${Date.now()}) - ERROR ${this.name}.${method}.`);
        throw error;
      }
    };
  },
};

/**
 * @class BaseAPI
 *
 * @description
 * The base of all API routes that has the p
 *
 *
 */
class BaseAPI {
  constructor() {
    this.http = new Proxy(http, LoggerProxy);
  }
}

module.exports = BaseAPI;
