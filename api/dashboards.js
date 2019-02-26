const API = require('./base');

class Dashboards extends API {
  constructor() {
    super();
    this.name = 'dashboards';
    this.base = '/dashboards.json';
    this.params = { paging: false };
  }

  /**
   * @method dashboards
   *
   * @description
   * Reads the data out of dashboards route.
   */
  list(options = {}) {
    const params = this.getHttpParams(options);
    return this.http.get(this.base, { params });
  }
}

module.exports = new Dashboards();
