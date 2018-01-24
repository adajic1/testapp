var mysql = require('mysql');

var con = mysql.createConnection({
  host     : 'sql11.freemysqlhosting.net',
  user     : 'sql11217492',
  password : 'PZkBft2yzM',
  database : 'sql11217492',
  port     : 3306
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});