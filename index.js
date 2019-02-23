// export configuration details to the client
const http = require('./lib/http');

exports.configure = http.configure;

// export api routes
exports.system = require('./api/system');
exports.users = require('./api/users');
exports.dashboards = require('./api/dashboards');
exports.auth = require('./api/auth');
