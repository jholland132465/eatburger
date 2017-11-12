CREATE DATABASE burger_db;
USE burger_db;

-- Create the table tasks.
CREATE TABLE burgers
(
id int NOT NULL AUTO_INCREMENT,
name varchar(50) NOT NULL,
PRIMARY KEY (id)
);

-- Insert a set of records.
INSERT INTO burgers (task) VALUES ('This is the name of a burger');
INSERT INTO burgers (task) VALUES ('This is another orig burger name.');
INSERT INTO burgers (task) VALUES ('All burgers are basically the same.');