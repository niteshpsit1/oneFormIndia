var bookshelf = require("../config/bookshelf");

var UserLogin = bookshelf.Model.extend({
  tableName: 'userLogin'
});

module.exports = UserLogin;