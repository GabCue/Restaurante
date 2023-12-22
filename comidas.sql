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
INSERT INTO brands (name) VALUES ('Coca Cola'),('Quilmes'),('Brahma'),('Pepsi'),('Villa del sur') ,('Cepita') ,('Heineken'),('Stella Artois'),('Extra');

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
 
('Cheddar al aro', 1, 2500, 'Hamburguesa con doble carne,queso cheddar,panceta frita y aros de cebolla crujientes,acompañada con una ración de papas fritas.', NULL, 'imagen1.jpg'),
('Hamburguesa Super completa', 1, 1790, 'Hamburguesa de carne, jamon, cheddar, lechuga, tomate,cebolla morada y bacon.', NULL, 'imagen2.jpg'),
('Hamburguesa Simple', 1, 950, 'Hamburguesa de carne con papas fritas', NULL, 'imagen3.jpg'),
('Muzzarella', 1, 4100, 'Salsa de tomate, muzzarella y aceitunas verdes.', NULL, 'imagen4.jpg'),
('Pizza Jamón', 1, 4000, 'Salsa de tomate, muzzarella, jamón y aceitunas verdes.', NULL, 'imagen4.jpg'),
('PIzza Calabresa', 1, 5000, 'Salsa de tomate, muzzarella, longaniza, ají molido y aceitunas negras.', NULL, 'imagen4.jpg'),
('Pizza de Huevo y Jamón', 1, 5500, 'Salsa de tomate, muzzarella, huevo duro, jamón y aceitunas verdes.', NULL, 'imagen4.jpg'),
('Fugazzeta', 1, 5540, 'Fugazza rellena con muzzarella y jamón.', NULL, 'imagen4.jpg'),
('Especial Jamón y morrones', 1, 4100, 'Salsa de tomate, muzzarella, jamón, morrón y aceitunas verdes.', NULL, 'imagen4.jpg'),
('Flan casero', 3, 500, 'Flan con dulce de leche.', NULL, 'imagen4.jpg'),
('Budín de Pan', 3, 500, 'Un muy rico budin ', NULL, 'imagen4.jpg'),
('Alfajor Dulce de leche', 3, 460, 'Alfajor helado', NULL, 'imagen4.jpg'),
('Bombón Escoces', 3, 440, 'Salsa de tomate, muzzarella y aceitunas verdes.', NULL, 'imagen4.jpg'),
('Gaseosa Lima Limon Vintage 7UP', 2, 1540, 'Gaseosa de 1,5Lt.', 4, 'imagen4.jpg'),
('Gaseosa Coca-Cola', 2, 1080, 'Gaseosa de 1,5Lt.', 1, 'imagen4.jpg'),
('Gaseosa Coca-Cola sabor original ', 2, 380, 'Gaseosa de 500Ml.', 1, 'imagen4.jpg'),
('Sprite Zero Lima-Limón ', 2, 380, 'Gaseosa de 500Ml', 1, 'imagen4.jpg'),
('Agua saborizada Aquarius ', 2, 4100, 'Agua de sabor Manzana,Pomelo o Naranja en botella de 500Ml.', 3, 'imagen4.jpg'),
('Lata Brahma', 2, 530, 'Lata de 473Ml.', 3, 'imagen4.jpg'),
('Lata Heineken', 2, 530, 'Lata de 473Ml.', 7, 'imagen4.jpg'),
('Lata Quilmes', 2, 530, 'Lata de 473Ml.', 2, 'imagen4.jpg'),
('Botella Brahma', 2, 900, 'Botella de 1Ll.', 3, 'imagen4.jpg'),
('Botella  Quilmes', 2, 900, 'Botella de 1Ll.', 2, 'imagen4.jpg'),
('Vino Malbec Benjamin Nieto Senetiner ', 2, 2170, 'Botella de 750Ml.', 9, 'imagen4.jpg'),
('Vino Malbec Wampa ', 2, 2170, 'Botella de 750Ml.', 9, 'imagen4.jpg'),
('Vino tinto Malbec Origen Trappiche ', 2, 2170, 'Botella de 750Ml.', 9, 'imagen4.jpg'),
('Agua mineral villa del sur', 2, 500, 'Botella de 750Ml.', 5, 'imagen4.jpg'),
('Vino Malbec', 2, 2170, 'Botella de 750Ml.', 9, 'imagen4.jpg'),
('Gran Promo', 4, 5000, '1/2 Jamon y Morrones + 1/2 Napolitana + 2 porc. Faina + Gaseosa de 1,5 L a elección.', NULL, 'imagen4.jpg'),
('Super Promo', 4, 2700, 'Hamburguesa Super Completa + Papas +  agua saborizada chica.', NULL, 'imagen4.jpg');