//MySQL connection
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "zy4wtsaw3sjejnud.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "n3n2dih5laawmlfu",
    password: "bvc1z25rlujzda5i",
    database: "duvgchk826h2cyzq"
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