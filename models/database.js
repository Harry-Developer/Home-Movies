var mysql = require('mysql');

require('dotenv').config()

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : process.env.DATABASE_USER,
    password : process.env.DATABASE_PASSWORD,
    database : process.env.DATABASE_NAME,
    port     : process.env.DATABASE_PORT
});

connection.connect(function(err) {
    if(err)
        console.log("Error: " + err)
    else
        console.log("Database connected!")
});

module.exports = connection