var mysql = require("mysql");
var connection;


connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "Zxcvbnm24!",
    database: "burgers_db"

});


module.exports = connection;