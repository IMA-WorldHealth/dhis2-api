const API = require('./base');

class UserGroups extends API {
  constructor() {
    super();
    this.name = 'userGroups';
    this.base = '/userGroups';
    this.params = { paging: false };
  }

  /**
   * @method list
   *
   * @description
   * Reads a page of user groups from the DHIS2 API.
   */
  list(options = {}) {
    const params = this.getHttpParams(options);
    return this.http.get(this.base, { params });
  }


  /**
   * @method get
   *
   * @description
   * Loads the information of a single user group.
   */
  get(id) {
    return this.http.get(`${this.base}/${id}`);
  }
}

module.exports = new UserGroups();
