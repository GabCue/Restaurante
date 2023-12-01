DROP DATABASE IF EXISTS comidas_db;
CREATE DATABASE comidas_db;

USE comidas_db;

CREATE TABLE categories (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);
INSERT INTO categories (name) VALUES ('Principal'),('Bebidas'),('Postres'),('Promociones');

CREATE TABLE brands (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);
INSERT INTO brands (name) VALUES ('Coca Cola'),('Quilmes'),('Brahma'),('Pepsi'),('Levite');

CREATE TABLE products (
    id INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    category_id INT UNSIGNED NOT NULL, 
    price INT NOT NULL,
    description VARCHAR(255) NOT NULL,
    brand_id INT UNSIGNED NULL,
    image_filename VARCHAR(255) DEFAULT NULL,

    FOREIGN KEY (category_id) REFERENCES categories (id),
    FOREIGN KEY (brand_id) REFERENCES brands (id)
);
INSERT INTO products (name, category_id, price, description, brand_id, image_filename) VALUES 
 
('Mr cheddar', 1, 2500, 'Dos medallones de carne con fetas de cheddar y pan de papa.', NULL, 'imagen1.jpg'),
('Coca cola', 2, 500, 'Botella de 500ml', 1, 'imagen2.jpg'),
('Plato 3', 3, 100, 'Descripción 3', NULL, 'imagen3.jpg'),
('Don Muzza', 1, 4500, 'Pizza grande con jamon y abundante muzzarela.', NULL, 'imagen4.jpg');