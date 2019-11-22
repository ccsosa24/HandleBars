var orm = require("../config/orm");

var burger = {
    selectAll: function(callback){
        orm.selectAll("burger_name",function(results){
            callback(results);
        });
    },

    insertOne: function(burger_name, callback){
        orm.insertOne("burger_name", function(results){
            callback(results);
        });
    },

    updateOne: function(burger_name, callback){
        orm.updateOne("burger_name", function(resutls){
            callback(resutls);
        });
    }





};


module.exports = burger;



