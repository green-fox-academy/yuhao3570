CREATE DATABASE todos;

USE todos;

CREATE TABLE IF NOT EXISTS todolist(
  id INT AUTO_INCREMENT PRIMARY KEY,
  item VARCHAR(255),
  deadline DATE,
  stauts VARCHAR(20) DEFAULT "UNDONE"
);

INSERT INTO todolist(item, deadline)
values
("Eat", "2019-10-28"),
("Drink", "2019-10-28"),
("Code", "2019-10-29"),
("Sleep", "2019-10-29"),
("Shower", "2019-10-29"),
("Groom", "2019-10-30"),
("Wash", "2019-10-30"),
("Cook", "2019-10-30");

SELECT * FROM todolist;

UPDATE todolist SET item="Eat More" WHERE id=1;

DELETE FROM todolist WHERE id=1;