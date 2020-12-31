--items
CREATE TABLE IF NOT EXISTS `items`(`id` INTEGER UNSIGNED AUTO_INCREMENT, `description` VARCHAR(255) NOT NULL,`price` INTEGER NOT NULL, PRIMARY KEY (`id`))
--orders
CREATE TABLE IF NOT EXISTS `orders`(`id` INTEGER UNSIGNED AUTO_INCREMENT, `state` VARCHAR(60), `detail` VARCHAR(1000) NOT NULL, `total` INTEGER NOT NULL, `payment_method` VARCHAR(60) NOT NULL, `user_id` INTEGER NOT NULL, PRIMARY KEY (`id`))
--users
CREATE TABLE IF NOT EXISTS `users`(`id` INTEGER UNSIGNED AUTO_INCREMENT, `user_name` VARCHAR(60) NOT NULL, `password` VARCHAR(16) NOT NULL, `full_name` VARCHAR(60) NOT NULL, `email` VARCHAR(60) UNIQUE NOT NULL, `phone` VARCHAR(10) NOT NULL, `address` VARCHAR(60) NOT NULL, `role` VARCHAR(1) NOT NULL DEFAULT '0', PRIMARY KEY (`id`))