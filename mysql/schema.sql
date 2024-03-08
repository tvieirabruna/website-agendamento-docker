CREATE DATABASE kungfu_classroom;
USE kungfu_classroom;

CREATE TABLE `students` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50),
  PRIMARY KEY (ID),
  UNIQUE KEY `unique_name` (`name`));

INSERT INTO `students` (`name`) VALUES
('Bruna'),
('Deborah'),
('Vinnicius'),
('Mesquita'),
('Diogo'),
('Mateus'),
('Lorena'),
('Yasmin'),
('Beatriz'),
('Lucas'),
('Ingrid');

CREATE TABLE `classes` (
	`id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
	`student_id` INT(10) UNSIGNED NOT NULL,
	`student_name` VARCHAR(50) NOT NULL,
	`monday_9_30` TINYINT(3) NULL DEFAULT NULL,
	`monday_19_00` TINYINT(3) NULL DEFAULT NULL,
	`tuesday_9_30` TINYINT(3) NULL DEFAULT NULL,
	`wednesday_9_30` TINYINT(3) NULL DEFAULT NULL,
	`wednesday_19_00` TINYINT(3) NULL DEFAULT NULL,
	`friday_9_30` TINYINT(3) NULL DEFAULT NULL,
	`friday_17_30` TINYINT(3) NULL DEFAULT NULL,
	`friday_19_00` TINYINT(3) NULL DEFAULT NULL,
	`saturday_9_30` TINYINT(3) NULL DEFAULT NULL,
	`saturday_11_00` TINYINT(3) NULL DEFAULT NULL,
	PRIMARY KEY (`id`) USING BTREE,
	INDEX `fk_student_name` (`student_name`) USING BTREE,
	CONSTRAINT `fk_student_name` FOREIGN KEY (`student_name`) REFERENCES `students` (`name`) ON UPDATE RESTRICT ON DELETE RESTRICT,
	UNIQUE (`student_name`)
);

INSERT INTO classes (student_id, student_name)
SELECT id, name
FROM students;

-- Create the trigger to set student_id before insert
DELIMITER //

CREATE TRIGGER before_insert_classes
BEFORE INSERT ON classes
FOR EACH ROW
BEGIN
    DECLARE student_id_val INT;

    -- Get the student_id based on the student_name
    SELECT id INTO student_id_val FROM students WHERE name = NEW.student_name;

    -- Set the student_id value for the new record
    SET NEW.student_id = student_id_val;
END;
//

DELIMITER ;