//Set up MySQL connection

var mysql = require('mysql');


//connection config for JAWS DB or a local database
var connection;
//JAWS
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
//Local
} else { 
    connection = mysql.createConnection({
    host: "localhost",
    port: 8889, //Port number may not work with 8889 if run locally. If running locally the database connection is not working, try port 3336;
    user: "root",
    password: "root",
    database: "burgers_db"
});
};

//create connection
connection.connect(function(err) {
    if (err) {
        console.error("error connecting to database: " + err.stack);
        return;
    }
    console.log("connected as ID " + connection.threadId);
});


//export connection for use in ORM
module.exports = connection;