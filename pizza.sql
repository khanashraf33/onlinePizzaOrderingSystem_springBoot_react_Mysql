-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: latestpizza
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `address`
--

DROP TABLE IF EXISTS `address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `address` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `city` varchar(25) DEFAULT NULL,
  `country` varchar(25) DEFAULT NULL,
  `house_no` varchar(10) DEFAULT NULL,
  `pincode` varchar(10) DEFAULT NULL,
  `state` varchar(25) DEFAULT NULL,
  `street` varchar(50) DEFAULT NULL,
  `user_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK6i66ijb8twgcqtetl8eeeed6` (`user_id`),
  CONSTRAINT `FK6i66ijb8twgcqtetl8eeeed6` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `FK6i66ijb8twgcqtetl8eeeed6v` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `address`
--

LOCK TABLES `address` WRITE;
/*!40000 ALTER TABLE `address` DISABLE KEYS */;
INSERT INTO `address` VALUES (1,'mumbai','india','10','400072','maharashtra','KA road',2),(2,'mumbai','India','12','400072','maharashtra','9 santacruz',1),(3,'mumbai','India','12','400072','maharashtra','9 santacruz',1),(4,'mumbai','India','12','400072','maharashtra','9 santacruz',1),(5,'mumbai','India','12','400072','maharashtra','9 santacruz',1),(6,'mumbai','India','12','400072','maharashtra','9 santacruz',1),(7,'mumbai','India','12','400072','maharashtra','9 santacruz',1),(8,'mumbai','India','12','400072','maharashtra','9 santacruz',1),(9,'mumbai','India','12','400072','maharashtra','9 santacruz',1),(10,'mumbai','India','12','400072','maharashtra','9 santacruz',1),(11,'mumbai','India','12','400072','maharashtra','9 santacruz',1),(12,'mumbai','India','12','400072','maharashtra','9 santacruz',1),(13,'mumbai','India','12','400072','maharashtra','9 santacruz',1),(14,'mumbai','India','12','400072','maharashtra','9 santacruz',1),(15,'mumbai','India','12','400072','maharashtra','9 santacruz',1),(16,'mumbai','India','12','400072','maharashtra','9 santacruz',1),(17,'mumbai','India','12','400072','maharashtra','9 santacruz',1),(18,'mumbai','India','12','400072','maharashtra','9 santacruz',1),(19,'mumbai','India','12','400072','maharashtra','9 santacruz',1),(20,'mumbai','India','12','400072','maharashtra','9 santacruz',1),(21,'mumbai','India','12','400072','maharashtra','9 santacruz',1),(22,'mumbai','India','12','400072','maharashtra','9 santacruz',1),(23,'mumbai','India','12','400072','maharashtra','9 santacruz',1),(24,'mumbai','India','12','400072','maharashtra','9 santacruz',1),(25,'mumbai','India','12','400072','maharashtra','9 santacruz',1),(26,'mumbai','India','10','400072','maharashtra','9 santacruz',1),(27,'mumbai','India','10','400072','maharashtra','9 santacruz',1),(28,'mumbai','maharashtra','10','400072','maharashtra','KA road',1),(29,'mumbai','India','10','400072','maharashtra','9 santacruz',1),(30,'mumbai','India','10','400072','maharashtra','9 santacruz',1),(31,'mumbai','India','10','400072','maharashtra','9 santacruz',1),(32,'mumbai','India','45','400072','maharashtra','9 santacruz',2),(33,'indore','india','420','471717','madhya pradesh','local',2),(34,'mumbai','India','450','400072','maharashtra','9 santacruz',2),(35,'mumbai','India','78945','400072','maharashtra','9 santacruz',3),(36,'mumbai','India','789','400072','maharashtra','9 santacruz',10),(37,'mumbai','India','456','400072','maharashtra','9 santacruz',10),(38,'mumbai','india','1234','400072','maharashtra','local',12),(39,'mumbai','India','7854','400072','maharashtra','9 santacruz',12),(40,'pune','india','745','789456','maharashtra','local',13),(41,'mumbai','India','78941','400072','maharashtra','9 santacruz',10),(42,'mumbai','India','541','400072','maharashtra','9 santacruz',10);
/*!40000 ALTER TABLE `address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart_items`
--

DROP TABLE IF EXISTS `cart_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart_items` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `quantity` int NOT NULL,
  `total_price` double DEFAULT NULL,
  `cart_id` bigint NOT NULL,
  `pizza_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKpcttvuq4mxppo8sxggjtn5i2c` (`cart_id`),
  KEY `FKtpfpsic9qls0e4lry0cwg05sy` (`pizza_id`),
  CONSTRAINT `FKpcttvuq4mxppo8sxggjtn5i2c` FOREIGN KEY (`cart_id`) REFERENCES `carts` (`id`),
  CONSTRAINT `FKtpfpsic9qls0e4lry0cwg05sy` FOREIGN KEY (`pizza_id`) REFERENCES `pizzas` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart_items`
--

LOCK TABLES `cart_items` WRITE;
/*!40000 ALTER TABLE `cart_items` DISABLE KEYS */;
INSERT INTO `cart_items` VALUES (15,2,1798,4,8),(30,1,899,3,8),(32,1,50,5,12),(35,1,1294,9,5),(37,1,899,10,8),(38,1,899,1,8),(40,1,1294,1,5);
/*!40000 ALTER TABLE `cart_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `carts`
--

DROP TABLE IF EXISTS `carts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carts` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `created_on` date DEFAULT NULL,
  `last_updated_on` date DEFAULT NULL,
  `total_cart_price` double DEFAULT NULL,
  `total_items` int DEFAULT NULL,
  `user_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKb5o626f86h46m4s7ms6ginnop` (`user_id`),
  CONSTRAINT `FKb5o626f86h46m4s7ms6ginnop` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carts`
--

LOCK TABLES `carts` WRITE;
/*!40000 ALTER TABLE `carts` DISABLE KEYS */;
INSERT INTO `carts` VALUES (1,'2023-05-21','2023-05-24',2193,2,1),(2,'2023-05-21','2023-05-24',0,0,2),(3,'2023-05-22','2023-05-23',899,1,3),(4,'2023-05-22','2023-05-22',1798,1,4),(5,'2023-05-23','2023-05-23',50,1,5),(6,'2023-05-23','2023-05-23',0,0,9),(7,'2023-05-23','2023-05-24',0,0,10),(8,'2023-05-24','2023-05-24',0,0,11),(9,'2023-05-24','2023-05-24',1294,1,12),(10,'2023-05-24','2023-05-24',899,1,13);
/*!40000 ALTER TABLE `carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `category_name` varchar(30) DEFAULT NULL,
  `description` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_41g4n0emuvcm3qyf1f6cn43c0` (`category_name`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'pizza','top quality'),(4,'coke','drinking stuff'),(5,'sandwitch','crush');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `offers`
--

DROP TABLE IF EXISTS `offers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `offers` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `code` varchar(50) DEFAULT NULL,
  `discount` int NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `terms_conditions` varchar(1000) DEFAULT NULL,
  `valid_from` datetime(6) DEFAULT NULL,
  `valid_upto` datetime(6) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_4l5ela8l289hpo39s7f3fe7k4` (`code`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `offers`
--

LOCK TABLES `offers` WRITE;
/*!40000 ALTER TABLE `offers` DISABLE KEYS */;
INSERT INTO `offers` VALUES (1,'123456',60,'big bumper','for female only','2023-05-31 05:30:00.000000','2023-05-22 05:30:00.000000'),(2,'adsfg',123,'asdda','adsfgf','2023-05-31 05:30:00.000000','2023-05-24 05:30:00.000000');
/*!40000 ALTER TABLE `offers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_items`
--

DROP TABLE IF EXISTS `order_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_items` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `quantity` int NOT NULL,
  `total_price` double DEFAULT NULL,
  `order_id` bigint NOT NULL,
  `pizza_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKbioxgbv59vetrxe0ejfubep1w` (`order_id`),
  KEY `FKgam9c7d0dd120965bwkse8meb` (`pizza_id`),
  CONSTRAINT `FKbioxgbv59vetrxe0ejfubep1w` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`),
  CONSTRAINT `FKgam9c7d0dd120965bwkse8meb` FOREIGN KEY (`pizza_id`) REFERENCES `pizzas` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_items`
--

LOCK TABLES `order_items` WRITE;
/*!40000 ALTER TABLE `order_items` DISABLE KEYS */;
INSERT INTO `order_items` VALUES (1,2,1798,1,8),(2,3,2397,1,9),(3,3,150,2,11),(4,1,50,3,12),(5,1,1294,3,5),(9,1,1294,5,5),(10,4,3596,6,8),(11,2,2588,6,5),(12,1,1294,7,5),(13,1,1294,8,5),(14,1,1294,9,5),(15,1,799,10,9),(16,1,899,10,8),(17,1,1294,11,5),(18,1,899,11,8),(19,1,899,12,8),(20,1,799,13,9);
/*!40000 ALTER TABLE `order_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `cart_price` double DEFAULT NULL,
  `delivery_price` double DEFAULT NULL,
  `discount` double NOT NULL,
  `created_on` date DEFAULT NULL,
  `payment_type` varchar(255) DEFAULT NULL,
  `placed_on` date DEFAULT NULL,
  `delivery_status` varchar(255) DEFAULT NULL,
  `tax_amount` double DEFAULT NULL,
  `total_items` int DEFAULT NULL,
  `total_cart_price` double DEFAULT NULL,
  `address_id` bigint DEFAULT NULL,
  `user_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKf5464gxwc32ongdvka2rtvw96` (`address_id`),
  KEY `FK32ql8ubntj5uh44ph9659tiih` (`user_id`),
  CONSTRAINT `FK32ql8ubntj5uh44ph9659tiih` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `FKf5464gxwc32ongdvka2rtvw96` FOREIGN KEY (`address_id`) REFERENCES `address` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,4195,0,0,'2023-05-22','COD','2023-05-22','PLACED',0,2,4195,1,2),(2,150,50,0,'2023-05-22','COD','2023-05-22','PLACED',0,1,200,1,2),(3,1344,0,0,'2023-05-22','COD','2023-05-22','PLACED',0,2,1344,1,2),(5,1294,0,0,'2023-05-23','COD','2023-05-23','PLACED',0,1,1294,31,1),(6,6184,0,0,'2023-05-23','COD','2023-05-23','PLACED',0,2,6184,32,2),(7,1294,0,0,'2023-05-23','COD','2023-05-23','PLACED',0,1,1294,33,2),(8,1294,0,0,'2023-05-23','COD','2023-05-23','PLACED',0,1,1294,33,3),(9,1294,0,0,'2023-05-24','COD','2023-05-24','PLACED',0,1,1294,38,12),(10,1698,0,0,'2023-05-24','COD','2023-05-24','PLACED',0,2,1698,16,1),(11,2193,0,0,'2023-05-24','COD','2023-05-24','PLACED',0,2,2193,16,2),(12,899,0,0,'2023-05-24','COD','2023-05-24','PLACED',0,1,899,42,10),(13,799,0,0,'2023-05-24','COD','2023-05-24','PLACED',0,1,799,42,10);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pizzas`
--

DROP TABLE IF EXISTS `pizzas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pizzas` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `avg_rating` float NOT NULL,
  `image_path` varchar(255) DEFAULT NULL,
  `in_stock` bit(1) DEFAULT NULL,
  `is_veg` bit(1) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` double NOT NULL,
  `summary` varchar(255) DEFAULT NULL,
  `category_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK7m2dm9v1vf7o9epldho2ds57r` (`category_id`),
  CONSTRAINT `FK7m2dm9v1vf7o9epldho2ds57r` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pizzas`
--

LOCK TABLES `pizzas` WRITE;
/*!40000 ALTER TABLE `pizzas` DISABLE KEYS */;
INSERT INTO `pizzas` VALUES (5,9,'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2014%2F07%2F10%2Fpepperoni-pizza-ck-x.jpg&q=60',_binary '',_binary '\0','Pepperoni Pizza',1294,'There’s a reason this is one of the most popular types of pizza. Who doesn’t love biting into a crispy, salty round of pepperoni?',1),(8,9,'https://www.vegrecipesofindia.com/wp-content/uploads/2020/12/margherita-pizza-recipe-1-500x500.jpg',_binary '',_binary '\0','Margherita Pizza',899,'The toppings contain, basil, fresh mozzarella cheese, a drizzle of olive oil, and fresh tomato sauce.',1),(9,8,'https://theorangecuisinehome.files.wordpress.com/2019/05/9j925zalp4o01.jpg',_binary '',_binary '\0','Chicken Sausage Pizza',799,'It comes with a variety of ingredients like sliced chicken sausages, grated mozzarella cheese, and pizza sauce.',1),(11,6,'https://www.mishry.com/wp-content/uploads/2019/11/coca-cola-147x300.jpg',_binary '',_binary '\0','Coca-Cola',50,'100% recyclable packaging, Refreshing, original cola taste.',4),(12,5,'https://www.mishry.com/wp-content/uploads/2019/11/pepsi-155x300.jpg',_binary '',_binary '\0','Pepsi',50,'This is a cola-flavored beverage. It tastes best ice cold.',4),(13,9,'https://www.mishry.com/wp-content/uploads/2019/11/thums-up-166x300.jpg',_binary '',_binary '\0','Thums Up',45,'This is a set of eight individual bottles. Per 100 ml, it offers 42 Kcal.',4),(15,9,'https://www.eatthis.com/wp-content/uploads/sites/4/media/images/ext/500495026/grilled-cheese.jpg?resize=640,468&quality=82&strip=all',_binary '',_binary '\0','Grilled Cheese',85,'The ultimate comfort food, grilled cheese won the hearts of 79% of YouGov respondents',5),(16,9,'https://www.eatthis.com/wp-content/uploads/sites/4/2019/04/plated-grilled-chicken-sandwich.jpg?resize=640,468&quality=82&strip=all',_binary '',_binary '\0','Grilled Chicken',120,'It\'s healthier than crispy chicken, but just as delicious.',5),(17,9,'https://www.eatthis.com/wp-content/uploads/sites/4/2018/04/turkey-sandwich.jpg?resize=640,468&quality=82&strip=all',_binary '',_binary '\0','Turkey',150,'The meat is delicious served warm or cold, and it goes with just about any type of cheese.',5);
/*!40000 ALTER TABLE `pizzas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reviews`
--

DROP TABLE IF EXISTS `reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reviews` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `posted_on` date DEFAULT NULL,
  `rating` float NOT NULL,
  `review` varchar(1000) DEFAULT NULL,
  `pizza_id` bigint NOT NULL,
  `user_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKhg0id372x90o1hydu5l9iu5ea` (`pizza_id`),
  KEY `FKcgy7qjc1r99dp117y9en6lxye` (`user_id`),
  CONSTRAINT `FKcgy7qjc1r99dp117y9en6lxye` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `FKhg0id372x90o1hydu5l9iu5ea` FOREIGN KEY (`pizza_id`) REFERENCES `pizzas` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reviews`
--

LOCK TABLES `reviews` WRITE;
/*!40000 ALTER TABLE `reviews` DISABLE KEYS */;
/*!40000 ALTER TABLE `reviews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `email` varchar(50) DEFAULT NULL,
  `first_name` varchar(20) DEFAULT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  `mobile_no` varchar(10) DEFAULT NULL,
  `password` varchar(50) NOT NULL,
  `user_role` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_6dotkott2kjsp8vw4d0m25fb7` (`email`),
  UNIQUE KEY `UK_p0ph17e6328j6uu1cr2tyd8vb` (`mobile_no`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'khan_ashraf33@yahoo.in','khan','ashraf','9619920275','123','ADMIN'),(2,'kratimahajan890@gmail.com','krati','mahajan','9876543210','123','CUSTOMER'),(3,'MrudullaBore@gmail.com','mrudulla','bore','7894561237','123','CUSTOMER'),(4,'ronaldo@gmail.com','ronaldo','ahmad','1234567886','123','CUSTOMER'),(5,'namdev@gmail.com','namdev','kadam','4564564567','123','CUSTOMER'),(9,'dhanaji@gmail.com','dhanaji','kam','9517531237','7894561230','CUSTOMER'),(10,'dhan111@gmail.com','dan111','kam111','9998887771','123','CUSTOMER'),(11,'ani@gmail.com','aniqwe','manso','1593571235','123','CUSTOMER'),(12,'nikkita@gmail.com','nikkita','mansori','7894561235','123','CUSTOMER'),(13,'kavita@gmail.com','kavita','yadav','7894564562','123','CUSTOMER');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-28  3:36:57
