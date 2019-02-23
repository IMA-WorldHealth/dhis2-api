const API = require('./base');

class Users extends API {
  constructor() {
    super();
    this.name = 'users';
    this.base = '/users';
  }

  /**
   * @method list
   *
   * @description
   * Reads a page of users from the DHIS2 API.
   */
  list() {
    return this.http.get('/');
  }


  /**
   * @method get
   *
   * @description
   * Loads the information of a single user.
   */
  get(id) {
    return this.http.get(`/${id}`);
  }
}

module.exports = new Users();
