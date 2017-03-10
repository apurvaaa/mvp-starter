var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'test'
});

var selectAll = function(callback) {
  console.log('inside selectAll');
  connection.query('SELECT * FROM items', function(err, results, fields) {
    if(err) {
      console.log('inside selectAll err');
      callback(err, null);
    } else {
      console.log('inside selectAll results');
      callback(null, results);
    }
  });
};

module.exports.selectAll = selectAll;
