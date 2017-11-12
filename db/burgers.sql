DROP DATABASE IF EXISTS `burder_db`;
CREATE DATABASE burger_db;
USE burger_db;

DROP TABLE IF EXISTS burgers;
CREATE TABLE burgers
(
id int NOT NULL AUTO_INCREMENT,
name varchar(50) NOT NULL,
devoured BOOL,
createdAt datetime,
PRIMARY KEY (id)
);

