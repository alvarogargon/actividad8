CREATE DATABASE IF NOT EXISTS blog_api;
USE blog_api;

CREATE TABLE autores (
id INT AUTO_INCREMENT PRIMARY KEY,
nombre varchar(255) NOT NULL,
email varchar (255) NOT NULL UNIQUE,
imagen VARCHAR(255)
);

CREATE TABLE posts (
id INT AUTO_INCREMENT PRIMARY KEY,
titulo varchar(255) NOT NULL,
descripcion TEXT,
fecha_creacion DATETIME DEFAULT CURRENT_TIMESTAMP,
categoria VARCHAR(100),
autor_id INT,
FOREIGN KEY (autor_id) REFERENCES autores(id)
);
