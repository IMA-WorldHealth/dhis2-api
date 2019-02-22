const axios = require('axios');

class Users {
  constructor(api) {
    this.http = axis.create({
      url : `${api.base}/system`,
      auth: api.auth,
    });
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
