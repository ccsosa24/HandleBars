var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL){
    connection =mysql.createConnection(process.env.JAWSDB_URL);
}
else{
connection = mysql.createConnection({
    port: 3306,
    host: "127.0.0.1",
    user: "root",
    password: "Zxcvbnm24!",
    database: "burgers_db"

});

}

connection.connect(function(err){
    if (err) {
        console.log(error);
    }
    return;
    
console.log("connect as id " + connection.threadID);

});


module.exports = connection;