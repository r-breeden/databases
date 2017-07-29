DROP DATABASE IF EXISTS `chat`;

CREATE DATABASE chat;

USE chat;

-- CREATE TABLE messages (
--   /* Describe your table here.*/

-- );

-- /* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'Messages'
-- 
-- ---

DROP TABLE IF EXISTS `Messages`;
    
CREATE TABLE `Messages` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `username` MEDIUMTEXT NULL,
  `user_id` INTEGER NULL,
  `text` MEDIUMTEXT NULL,
  `roomname` MEDIUMTEXT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Users'
-- 
-- ---

DROP TABLE IF EXISTS `Users`;
    
CREATE TABLE `Users` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `username` MEDIUMTEXT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `Messages` ADD FOREIGN KEY (user_id) REFERENCES `Users` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `Messages` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `Messages` (`id`,`username`,`user_id`,`text`,`roomname`) VALUES
-- ('','','','','');
-- INSERT INTO `Users` (`id`,`username`) VALUES
-- ('','');