var mysql = require('mysql');

var con = mysql.createConnection({
  host     : 'db4free.net',
  user     : 'testuser9999',
  password : 'testpass9999',
  database : 'testapp9999'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
