CREATE database Bamazon;

USE Bamazon;

CREATE TABLE products (
	item_id INTEGER(100),
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(100) NOT NULL,
    price DECIMAL(10, 4) NULL,
    stock_quantity INTEGER(100)
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1, "product one", "clothes", 12.50, 400);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (2, "product two", "electronics", 250, 50);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1, "product three", "food", 20, 5000);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1, "product four", "tools", 50, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1, "product five", "furntiure", 700, 12);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1, "product six", "games", 60, 1500);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1, "product seven", "books", 10, 500);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1, "product eight", "books", 5, 600);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1, "product nine", "clothes", 32, 200);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1, "product ten", "clothes", 45, 95);
    