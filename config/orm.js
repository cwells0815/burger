//Bring in MySQL connection
var connection = require("../config/connection.js")

//Create ORM (object relational mapping) object below with calls to the MySQL database
var orm = {
//route to get all of the burgers in the database
selectAll: function (column, table, callback) {
    var queryString = "SELECT " + column + " FROM " + table + ";";
    connection.query(queryString, function (err, result){
        if(err) {
            throw err;
        }
        callback(result);
    });
},
//route to update burgers table
    updateOne: function(column, table, newValue, condition, callback) {
        var queryString = ("UPDATE " + table + " SET " + column + " = " + newValue + " WHERE " + condition + ";");
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    },
    //route to add a burger to the table
    insertOne: function(column, table, newValue, callback) {
        var queryString = "INSERT INTO " + table + " (" + column + ") VALUES ('" + newValue + "');";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    }
};


//Export the ORM for use in controller files
module.exports = orm;