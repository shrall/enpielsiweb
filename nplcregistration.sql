-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 17, 2020 at 08:34 PM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nplcregistration`
--

-- --------------------------------------------------------

--
-- Table structure for table `formresult`
--

CREATE TABLE `formresult` (
  `id` int(11) NOT NULL,
  `teamname` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `coachname` varchar(255) NOT NULL,
  `coachphone` varchar(255) NOT NULL,
  `schoolname` varchar(255) NOT NULL,
  `schoolcity` varchar(255) NOT NULL,
  `schooladdress` varchar(255) NOT NULL,
  `schoolphone` varchar(255) NOT NULL,
  `firstmembername` varchar(255) NOT NULL,
  `firstmemberemail` varchar(255) NOT NULL,
  `firstmemberaddress` varchar(255) NOT NULL,
  `firstmemberphone` varchar(255) NOT NULL,
  `firstmembergender` varchar(255) NOT NULL,
  `secondmembername` varchar(255) NOT NULL,
  `secondmemberemail` varchar(255) NOT NULL,
  `secondmemberaddress` varchar(255) NOT NULL,
  `secondmemberphone` varchar(255) NOT NULL,
  `secondmembergender` varchar(255) NOT NULL,
  `thirdmembername` varchar(255) NOT NULL,
  `thirdmemberemail` varchar(255) NOT NULL,
  `thirdmemberaddress` varchar(255) NOT NULL,
  `thirdmemberphone` varchar(255) NOT NULL,
  `thirdmembergender` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `formresult`
--
ALTER TABLE `formresult`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `formresult`
--
ALTER TABLE `formresult`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
