var orm = require("../config/orm");

var burgers = {
    selectAll: function(callback){
        console.log("YOUR in SELECT ALL")
        orm.selectAll(callback,function(results){
            callback(results);
        });
    },

    insertOne: function(burger_name, callback){
        orm.insertOne("burgers_name", function(results){
            callback(results);
        });
    },

    updateOne: function(burger_name, callback){
        orm.updateOne("burgers", function(results){
            callback(results);
        });
    }





};


module.exports = burgers;



