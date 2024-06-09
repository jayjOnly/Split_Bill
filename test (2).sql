-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 09, 2024 at 11:57 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test`
--

-- --------------------------------------------------------

--
-- Table structure for table `activityhistory`
--

CREATE TABLE `activityhistory` (
  `Nama` varchar(50) NOT NULL,
  `Nominal` int(11) NOT NULL,
  `Tanggal` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `activityhistory`
--

INSERT INTO `activityhistory` (`Nama`, `Nominal`, `Tanggal`) VALUES
('Andrew', 20000, '2023-10-10'),
('Udin', 50000, '2023-10-20'),
('Fernando', 25000, '2023-11-19'),
('Jacky', 30000, '2023-12-12');

-- --------------------------------------------------------

--
-- Table structure for table `activitylist`
--

CREATE TABLE `activitylist` (
  `activityID` char(5) NOT NULL,
  `groupID` char(5) DEFAULT NULL,
  `assignID` int(11) DEFAULT NULL,
  `userID` int(11) DEFAULT NULL,
  `itemName` varchar(255) DEFAULT NULL,
  `itemPrice` float DEFAULT NULL,
  `activityDate` date DEFAULT NULL,
  `activityStatus` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `activitylist`
--

INSERT INTO `activitylist` (`activityID`, `groupID`, `assignID`, `userID`, `itemName`, `itemPrice`, `activityDate`, `activityStatus`) VALUES
('AC051', 'GC274', 3, 1, 'BAGI RATA', 14500, '2024-06-08', 0),
('AC055', 'GC704', 3, 4, 'Choco Croissant', 10500, '2024-06-08', 0),
('AC103', 'GC704', 3, 5, 'TAX', 1450, '2024-06-08', 0),
('AC194', 'GC274', 3, 3, 'BAGI RATA', 14500, '2024-06-08', 0),
('AC240', 'GC704', 3, 3, 'TAX', 1450, '2024-06-08', 0),
('AC241', 'GC704', 3, 4, 'Cream Bruille', 7000, '2024-06-08', 0),
('AC249', 'GC274', 3, 1, 'TAX', 1450, '2024-06-08', 0),
('AC473', 'GC274', 3, 2, 'BAGI RATA', 14500, '2024-06-08', 0),
('AC515', 'GC704', 3, 3, 'Bread Butter Pudding', 11500, '2024-06-08', 0),
('AC580', 'GC274', 3, 3, 'TAX', 1450, '2024-06-08', 0),
('AC662', 'GC704', 3, 3, 'Cream Bruille', 7000, '2024-06-08', 0),
('AC726', 'GC704', 3, 5, 'Bank Of Chocolat', 7500, '2024-06-08', 0),
('AC868', 'GC704', 3, 4, 'TAX', 1450, '2024-06-08', 0),
('AC947', 'GC274', 3, 2, 'TAX', 1450, '2024-06-08', 0);

-- --------------------------------------------------------

--
-- Table structure for table `friendlist`
--

CREATE TABLE `friendlist` (
  `friendID` char(5) NOT NULL,
  `user1` int(11) DEFAULT NULL,
  `user2` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `friendlist`
--

INSERT INTO `friendlist` (`friendID`, `user1`, `user2`) VALUES
('FR001', 3, 1),
('FR002', 3, 2),
('FR003', 3, 4),
('FR004', 3, 5),
('FR005', 3, 11),
('FR006', 3, 12),
('FR007', 3, 13),
('FR008', 1, 2),
('FR009', 1, 3),
('FR010', 2, 1),
('FR011', 2, 3),
('FR012', 4, 3),
('FR013', 5, 3),
('FR014', 11, 3),
('FR015', 12, 3),
('FR016', 13, 3),
('FR017', 11, 12),
('FR018', 12, 11),
('FR019', 4, 5),
('FR020', 5, 4),
('FR021', 1, 4),
('FR022', 4, 1),
('FR023', 1, 5),
('FR024', 5, 1),
('FR676', 3, 15),
('FR754', 3, 14);

-- --------------------------------------------------------

--
-- Table structure for table `usertable`
--

CREATE TABLE `usertable` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phoneNumber` varchar(14) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `usertable`
--

INSERT INTO `usertable` (`id`, `username`, `email`, `password`, `phoneNumber`) VALUES
(1, 'Admin', 'admin@gmail.com', 'admin123', '0812 3456 7890'),
(2, 'Police', 'test@gmail.com', 'test123', '911'),
(3, 'Jacky The Great', 'jacky@gmail.com', 'jacky1', '0851 5567 7568'),
(4, 'Andrew', 'andrew@gmail.com', 'andrew1', '0821 3382 3668'),
(5, 'Fernando', 'fernando@gmail.com', 'mori1', '0821 2562 2031'),
(11, 'John Doe', 'john@gmail.com', 'john1', '0812-3456-7890'),
(12, 'Jane Smith', 'jane@gmail.com', 'jane1', '0811-1111-1111'),
(13, 'Michael Brown', 'mich@gmail.com', 'mich1', '0808 0808 0808'),
(14, 'TestADD1', 'test1@gmail.com', 'testaja', '0811 2525 2255'),
(15, 'TestADD2', 'test2@gmail.com', 'testaja', '0812 2525 2255'),
(16, 'TestADD3', 'test3@gmail.com', 'testaja', '0813 2525 2255');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `activitylist`
--
ALTER TABLE `activitylist`
  ADD PRIMARY KEY (`activityID`),
  ADD KEY `FK_assignID` (`assignID`),
  ADD KEY `FK_userID` (`userID`);

--
-- Indexes for table `friendlist`
--
ALTER TABLE `friendlist`
  ADD PRIMARY KEY (`friendID`),
  ADD KEY `FK_user1` (`user1`),
  ADD KEY `FK_user2` (`user2`);

--
-- Indexes for table `usertable`
--
ALTER TABLE `usertable`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `usertable`
--
ALTER TABLE `usertable`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `activitylist`
--
ALTER TABLE `activitylist`
  ADD CONSTRAINT `FK_assignID` FOREIGN KEY (`assignID`) REFERENCES `usertable` (`id`),
  ADD CONSTRAINT `FK_userID` FOREIGN KEY (`userID`) REFERENCES `usertable` (`id`);

--
-- Constraints for table `friendlist`
--
ALTER TABLE `friendlist`
  ADD CONSTRAINT `FK_user1` FOREIGN KEY (`user1`) REFERENCES `usertable` (`id`),
  ADD CONSTRAINT `FK_user2` FOREIGN KEY (`user2`) REFERENCES `usertable` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
