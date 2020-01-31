USE burgers_db;

INSERT INTO burgers (burger_name, devoured ) VALUES ('cheese, bacon, lettuce, tomato', true);
INSERT INTO burgers (burger_name,  devoured ) VALUES ('turkey, tomato, avocado, cheese', true);
INSERT INTO burgers (burger_name,  devoured ) VALUES ('veggie patty, lettuce, red onion, tomato, cheese', false);


SELECT * FROM burgers;

