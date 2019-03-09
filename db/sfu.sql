CREATE DATABASE IF NOT EXISTS SFU;

USE SFU;

CREATE TABLE IF NOT EXISTS Users(
id INT AUTO_INCREMENT NOT NULL,
username VARCHAR(255),
password VARCHAR(255),
faculty VARCHAR(255),
location VARCHAR(255),
student_id INT,
PRIMARY KEY (id)
 );

CREATE TABLE IF NOT EXISTS Messages(
id INT AUTO_INCREMENT NOT NULL,
mainchat VARCHAR(255),
user_id INT,
timestap DATETIME,
PRIMARY KEY (id),
FOREIGN KEY(user_id) REFERENCES Users(id)
 );