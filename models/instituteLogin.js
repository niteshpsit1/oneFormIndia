var bookshelf = require("../config/bookshelf");

var InstituteLogin = bookshelf.Model.extend({
  tableName: 'instituteLogin'
});

module.exports = InstituteLogin;