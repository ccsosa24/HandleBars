var connection = require("./connection");

var orm = {
    selectAll: function(callback){
         connection.query('SELECT * FROM burgers', function(err, results){
            if (err){
            throw err;
        }
        callback(results);
        
        
        });

    },
    insertOne: function(burger_name, callback) {
       connection.query('INSERT INTO burgers SET ?', {
           burger_name: burger_name,
           devoured: false,          
       },
       function (err, results) {
           if (err){
           throw err;
           }
           callback(resutls);
       });
    },

    updateOne: function(burgerID, callback) {
        connection.query('UPDATE burgers SET ? WHERE ?', [{devoured: true}, {id: burgerID}], function (err, results) {
            if (err){
            throw err;
            }
            callback(resutls);
    
    });
      
}
};



module.exports = orm;