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

function promptPurchase() {
    inquirer.prompt([
        {
            type: "input",
            name: "item_id",
            message: "Please enter the ID number of the item you would like to purchase",
            filter: Number
        },
        {
            type: "input",
            name: "quantity",
            message: "How many do you need?",
            filter: Number
        }
    ]).then(function(input) {
        var item = input.item_id;
        var quantity = input.quantity;
        var queryStr = "Select * From products Where ?";

        connection.query(queryStr, {item_id: item}, function(err, data) {
            if (err) throw err;
            if (data.length === 0) {
                console.log("Error: Invalid Item ID");
                start();
            } else {
                var productData = data[0];
                if (quantity <= productData.stock_quantity) {
                    console.log("The product you requested is in stock! Order can be placed");
                    var updateQueryStr = "Update products Set stock_quantity = " + (productData.stock_quantity - quantity) + " Where item_id = " + item;
                    connection.query(updateQueryStr, function(err, data) {
                        if (err) throw err;
                        console.log("Your order has been placed! Your total cost is $" + productData.price * quantity);
                        console.log("Thank you for shopping with us!");
                        console.log("===================================================================");
                        connection.end();
                    })
                } else {
                    console.log("Sorry, there is not enough stock to complete your order");
                    console.log("Please alter your order");
                    console.log("===================================================================");

                    start();
                };
            };
        });
    });
};