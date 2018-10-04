// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "uqe1z72bcls7brai",
  password: "	xq85rxhd91nhwuk1",
  database: "burgers_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for the ORM to use.
module.exports = connection;