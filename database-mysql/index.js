var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'royale'
});

var selectAll = function(callback) {
  console.log('inside selectAll');
  connection.query('SELECT * FROM cards', function(err, results, fields) {
    if(err) {
      console.log('inside selectAll err');
      callback(err, null);
    } else {
      console.log('inside selectAll results');
      callback(null, results);
    }
  });
};

var initializeDb = function(data) {
  //data = [{} ,{} ,{}]
  //console.log('inside initializeDb. data : ', data[2]);
  connection.query('TRUNCATE TABLE cards');
  var sql = 'INSERT INTO cards (name, type, rarity, description, elixirCost) VALUES (?, ?, ?, ?, ?)';
  for (var i = 0; i < data.length; i++) {
    console.log('inside initializeDb for loop. data[i] : ', data[i].name, ' ', data[i].order);
    connection.query(sql, [data[i].name, data[i].type, data[i].rarity, data[i].description, data[i].elixirCost], function(err, results) {
      if (err) {
        console.log('error while inserting into db : ', err);
      } else {
        console.log('inserted something into cards table');
      }
    });
    
  }
};
module.exports.initializeDb = initializeDb;
module.exports.selectAll = selectAll;
