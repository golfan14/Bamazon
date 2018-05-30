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
Values("Golf Balls", "Sporting Goods", 24.99, 62),
    ("Golf Gloves", "Sporting Goods", 19.99, 74),
    ("Tire Shine", "Automotive", 8.99, 36),
    ("Socket Wrench", "Automotive", 29.99, 28),
    ("Headphones", "Electronics", 14.99, 57),
    ("USB Drive", "Electronics", 27.99, 23),
    ("Coffee Maker", "Appliances", 89.99, 17),
    ("Toaster", "Appliances", 22.99, 38),
    ("Bath Towel", "Housewares", 12.99, 48),
    ("Shower Curtain", "Housewares", 7.99, 18);
    
