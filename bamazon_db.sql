DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
  id INTEGER(11) AUTO_INCREMENT NOT NULL,

  product_name VARCHAR(30) NOT NULL,

  department_name VARCHAR(30) NOT NULL,

  price INTEGER(10),

  stock_quantity INTEGER(10),
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("T-shirt", "Men's Clothing", "12", 50);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Baseball Cap", "Accessories", "15", 50);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Mattress", "Furniture", "400", 49);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bath Rug", "Bath", "35", 25);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Headphones", "Electronics", "350", 74);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Wine", "Food & Grocery", "14", 100);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Philips Toothbrush", "Personal Care", "200", 48);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Duffle Bag", "Luggage", "79.99", 49);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("BenQ Monitor", "Electronics", "169.99", 69);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Kitchen Table", "Furniture", "125", 35);

