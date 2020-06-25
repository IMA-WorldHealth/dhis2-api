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

  /**
   *
   * @method metadata
   *
   * @description
   * Gets the JSON metadata for a dashboard
   */
  metadata(id, options = {}) {
    const params = this.getHttpParams(options);
    const base = `dashboards/${id}/metadata.json`;
    return this.http.get(base, { params });
  }
}

module.exports = new Dashboards();
