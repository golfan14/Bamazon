var mysql = require("myspl");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "127.0.0.1",
    port: 8889,
    username: "root",
    password: "root",
    database: "bamazon_db"
});

