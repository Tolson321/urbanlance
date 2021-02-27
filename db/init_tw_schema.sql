SELECT 'Creating DB Schema and Tables...' as '';
DROP SCHEMA IF EXISTS `time_watcher`;
CREATE SCHEMA `time_watcher` DEFAULT CHARACTER SET utf8;
USE `time_watcher`;

DROP TABLE IF EXISTS `time_watcher`.`projects` ;
CREATE TABLE IF NOT EXISTS `time_watcher`.`projects` (
  `id` INT AUTO_INCREMENT,
  `name` VARCHAR(96) NULL DEFAULT NULL,
  `pm` VARCHAR(96) UNIQUE NOT NULL,
  `designation` VARCHAR(128) DEFAULT '',
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

DROP TABLE IF EXISTS `time_watcher`.`users` ;
CREATE TABLE IF NOT EXISTS `time_watcher`.`users` (
  `id` INT AUTO_INCREMENT,
  `name` VARCHAR(255) NULL DEFAULT NULL,
  `email` VARCHAR(255) UNIQUE NOT NULL,
  `password` VARCHAR(64),
  `role` VARCHAR(64) DEFAULT '',
  `date_hired` DATE NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

DROP TABLE IF EXISTS `time_watcher`.`timekeeping` ;
CREATE TABLE IF NOT EXISTS `time_watcher`.`timekeeping` (
  `date` DATE NOT NULL,
  `date_of_work` DATE NOT NULL,
  `date_modified` DATE NOT NULL,
  `week_ending_date` DATE NOT NULL,
  `hours` INT DEFAULT 0,
  `user_id` INT NOT NULL,
  `project_id` INT NOT NULL,
  CONSTRAINT `tw_user_id` FOREIGN KEY (`user_id`) REFERENCES `time_watcher`.`users` (`id`),
  CONSTRAINT `tw_project_id` FOREIGN KEY (`project_id`) REFERENCES `time_watcher`.`projects` (`id`))
ENGINE = InnoDB;

DROP TABLE IF EXISTS `time_watcher`.`col_mapping` ;
CREATE TABLE IF NOT EXISTS `time_watcher`.`col_mapping` (
  `id` INT AUTO_INCREMENT,
  `xls_name` VARCHAR(96) NULL DEFAULT NULL,
  `api_name` VARCHAR(96) NULL DEFAULT NULL,
  `col_name` VARCHAR(96) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SELECT 'Setting up and configuring DB user tw_db_user... ' as '';
drop user if exists 'tw_db_user'@'localhost';
create user 'tw_db_user'@'localhost' identified by 'myBeautifulPassword';
grant all privileges on *.* to 'tw_db_user'@'localhost';
alter user 'tw_db_user'@'localhost' identified by 'myBeautifulPassword';
alter user 'tw_db_user'@'localhost' identified with mysql_native_password by 'myBeautifulPassword';
flush privileges;
