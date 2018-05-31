var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "127.0.0.1",
    port: 8889,
    user: "root",
    password: "root",
    database: "bamazon_db"
});

connection.connect(function (err) {
    if (err) throw err;
    start();
});

function start() {
    connection.query("Select * From products", function (err, results) {
        if (err) throw error;
        var inventory = "";
        for ( var i = 0; i < results.length; i++) {
            inventory = "";
            inventory += "Item ID: " + results[i].item_id + " // ";
            inventory += "Product Name: " + results[i].product_name + " // ";
            inventory += "Price: " + results[i].price + " // ";
            inventory += "Stock Quantity: " + results[i].stock_quantity;

            console.log(inventory);
        };
        
        console.log("==================================================================================");
        
        promptPurchase();
    
    });
};

