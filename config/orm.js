var connection = require ("../config/connection.js");


// ["?", "?", "?"].toString() => "?,?,?";
function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }
  
  // Helper function to convert object key/value pairs to SQL syntax
  function objToSql(ob) {
    var arr = [];
  
    // loop through the keys - key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
    
      if (Object.hasOwnProperty.call(ob, key)) {
        
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        
        arr.push(key + "=" + value);
      }
    }
  
    
    return arr.toString();
  }

var orm = {
    selectAll: function(table, callback){
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function(error, result){
            if(error) throw error;

            callback(result);
        });
    },
    insertOne: function(table, columns, values, callback){
        var queryString = "INSERT INTO " + table;
        queryString += " (";
        queryString += columns.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(values.length);
        queryString += ") ";

        connection.query(queryString, values, function(error, result){
            if(error) throw error;

            callback(result);
        });
    },
    updateOne: function(table, objectColumnValues, condition, callback){
        var queryString = "UPDATE " + table;
        queryString += " SET ";
        queryString += objToSql(objectColumnValues);
        queryString += " WHERE ";
        queryString += condition;

        connection.query(queryString, function(error, result){
            if(error) throw error;

            callback(result);
        });
    }
};

module.exports = orm;