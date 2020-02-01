DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers(
id int NOT NULL auto_increment,
burgerType VARCHAR(100) NOT NULL,
burgerToppings VARCHAR(100) NOT NULL,
devoured BOOLEAN,
PRIMARY KEY (id)
);

SELECT * FROM burgers;