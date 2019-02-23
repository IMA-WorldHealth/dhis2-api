require('dotenv').config();

exports.system = require('./api/system');
exports.users = require('./api/users');
exports.dashboards = require('./api/dashboards');
exports.auth = require('./api/auth');
