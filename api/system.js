const API = require('./base');

class System extends API {
  constructor() {
    super();
    this.name = 'system';
    this.base = '/system';
  }

  /**
   * @method info
   *
   * @description
   * Reads the data out of system/info route.
   */
  info() {
    return this.http.get(`${this.base}/info`);
  }
}

module.exports = new System();
