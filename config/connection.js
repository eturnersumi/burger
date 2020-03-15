//MySQL connection
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "F0rev3r!",
    database: "burgers_db"
});

//Make connection
connection.connect(function(err) {
    if (err) {
        console.error(`Error connecting: ${err.stack}`);
        return;
    }
    console.log(`Connected as id ${connection.threadId}`)
});

//Export connection for ORM
module.exports = connection;