Drop database if exists bamazon_db;
Create database bamazon_db;
Use database bamazon_db;

Create table products(
    item_id Int Not Null Auto_Increment,
    product_name VarChar(40) Not Null,
    department_name VarChar(40) Not Null,
    price Decimal(10,2),
    stock_quantity Int(10) Not Null,
    Primary Key(item_id)
);

Insert into products(product_name, department_name, price, stock_quantity)
Values("Golf Balls", "Sporting Goods", 24.99, 62)
    
