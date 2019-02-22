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
  dashboards() {
    return this.http.get(this.base, { params: this.params });
  }
}

module.exports = new Dashboards();
