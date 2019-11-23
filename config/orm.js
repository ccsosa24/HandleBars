var connection = require("./connection");

var orm = {
    selectAll: function(table, callback){
        var queryString = "SELECT * FROM burgers";
         connection.query(queryString, function(err, results){
            if (err){
            throw err;
        }
        console.log("BELOW IS THE CALLBACK")
        console.log(callback)
        callback("results");
        
        
        });

    },
    insertOne: function(burger, callback) {
        var queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
       connection.query(queryString, [burger], function(err, results) {
           if (err){
           throw err;
           }
           callback(results);
       });
    },

    updateOne: function(burger_id, callback) {
        var queryString = "UPDATE burgers SET devoured = true WHERE id = ?";
        connection.query(queryString,[burger_id], function (err, results) {
            if (err){
            throw err;
            }
            callback(results);
    
    });
      
}
};



module.exports = orm;