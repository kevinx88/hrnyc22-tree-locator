DROP DATABASE IF EXISTS trees;

CREATE DATABASE trees;

USE trees;

CREATE TABLE items (
  id int NOT NULL AUTO_INCREMENT,
  address varchar(50) NOT NULL,
  latitude varchar(50) NOT NULL,
  longitude varchar(50) NOT NULL,
  spc_common varchar(50) NOT NULL,
  zip_city varchar(50) NOT NULL,
  zipcode varchar (50) NOT NULL,
  PRIMARY KEY (ID)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
