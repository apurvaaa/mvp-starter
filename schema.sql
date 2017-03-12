DROP DATABASE IF EXISTS royale;

CREATE DATABASE royale;

USE royale;

CREATE TABLE cards (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(20) NOT NULL,
  idName varchar(20) NOT NULL,
  type varchar(20) NOT NULL,
  rarity varchar(20) NOT NULL,
  description varchar(200) NOT NULL,
  elixirCost int NOT NULL,
  PRIMARY KEY (ID)
);

/*idName: 'the-log',
    rarity: 'Legendary',
    type: 'Spell',
    name: 'The Log',
    description: 'A spilt bottle of Rage turned an innocent tree trunk into "The Log". Now it seeks revenge by crushing anything in its path!',
    elixirCost: 2,*/

/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *    To login to sql :   mysql -u root -p
 *  to create the database and the tables.*/
