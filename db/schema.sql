CREATE DATABASE burgers_db;
Use burgers_db;

CREATE TABLE burgers(
    burger_id INTEGER AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR (50) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (burger_id)

);