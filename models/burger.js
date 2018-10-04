//Import the ORM object to create database calls
var orm = require("../config/orm.js");


//create burger object ot interact with the orm.js file
var burger = {
    
    //used to pull all current burgers in the database
    all: function(callback) {
        //method inputs are column(s), table, and response callback
        orm.selectAll("*", "burgers", function(result) {
            callback(result);//this outputs the database result
        });
    },

    //used to update the status of the burger, devoured or not devoured
    update: function(condition, newValue, callback) {
        //method inputs are column, table, condition, callback
        orm.updateOne("devoured", "burgers", newValue, condition, function(result) {
            callback(result); //this outputs the database result
        });
    },

    //used to create a new burger
    create: function(burgerName, callback) {
        orm.insertOne("burger_name", "burgers", burgerName, function(result) {
            callback(result);
        });

    }
}


//Export the burger database data to the burger controller
module.exports = burger;