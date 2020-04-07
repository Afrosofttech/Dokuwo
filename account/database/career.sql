-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 04, 2020 at 08:15 AM
-- Server version: 10.1.40-MariaDB
-- PHP Version: 7.3.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `career`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `admin_id` int(11) NOT NULL,
  `admin_email` varchar(50) NOT NULL,
  `admin_pwd` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `application`
--

CREATE TABLE `application` (
  `app_id` int(11) NOT NULL,
  `job_id` int(11) NOT NULL,
  `jobseeker_id` int(11) NOT NULL,
  `company_id` int(11) NOT NULL,
  `app_date` date NOT NULL,
  `app_status` varchar(15) NOT NULL,
  `decision_date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `company`
--

CREATE TABLE `company` (
  `company_id` int(11) NOT NULL,
  `login_id` int(11) NOT NULL,
  `company_name` varchar(50) NOT NULL,
  `company_email` varchar(50) NOT NULL,
  `company_phone` varchar(20) DEFAULT NULL,
  `company_address` varchar(255) DEFAULT NULL,
  `postal_code` int(5) DEFAULT NULL,
  `country` varchar(25) DEFAULT NULL,
  `currency` varchar(10) DEFAULT NULL,
  `logo` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `company`
--

INSERT INTO `company` (`company_id`, `login_id`, `company_name`, `company_email`, `company_phone`, `company_address`, `postal_code`, `country`, `currency`, `logo`) VALUES
(1, 2, 'Afrika software Technologies', 'contact@afrosofttech.com', '2336171', 'Bundung', 0, 'Gambia', 'GMD', NULL),
(2, 3, 'Insist global', 'insist@gmail.com', '234545778', 'Kairaba', 0, 'Gambia', 'GMD', NULL),
(3, 12, 'Faalen Technologies', 'faalen@gmail.com', '6985632', 'Sukuta', 0, 'The gambia', 'GMD', NULL),
(4, 13, 'Safe Integrated Technologies', 'safe@gmail.com', '7885632', 'Banjul', 0, 'The gambia', 'GMD', NULL),
(5, 14, 'United Nations Humans Rights Council', 'hrc@un.com', '9832632', 'Serrekunda', 0, 'The gambia', 'GMD', NULL),
(24, 20, 'asjfoodtrading', 'asjfoodtrading@gmail.com', '09873875532', 'International Students House', 110007, 'Gambia', 'GMD', '770191400dpiLogo.jpg'),
(25, 20, 'asjfoodtrading', 'asjfoodtrading@gmail.com', '09873875532', 'International Students House', 110007, 'Gambia', 'GMD', '197038400dpiLogo.jpg'),
(26, 20, 'asjfoodtrading', 'asjfoodtrading@gmail.com', '09873875532', 'International Students House', 110007, 'Gambia', 'GMD', '618246400dpiLogo.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `job`
--

CREATE TABLE `job` (
  `job_id` int(11) NOT NULL,
  `company_id` int(11) NOT NULL,
  `job_name` varchar(25) NOT NULL,
  `job_requirements` text NOT NULL,
  `job_type` varchar(15) NOT NULL,
  `job_cat` varchar(25) NOT NULL,
  `requirements` text,
  `job_location` varchar(50) NOT NULL,
  `date_posted` date NOT NULL,
  `job_contact_email` varchar(50) DEFAULT NULL,
  `job_contact_phone` varchar(30) DEFAULT NULL,
  `salary` float DEFAULT NULL,
  `status` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `job`
--

INSERT INTO `job` (`job_id`, `company_id`, `job_name`, `job_requirements`, `job_type`, `job_cat`, `requirements`, `job_location`, `date_posted`, `job_contact_email`, `job_contact_phone`, `salary`, `status`) VALUES
(1, 1, 'graphics designer', 'You will be dealing with mostly adobe Ps and Ai.', 'Full Time', 'I.T/graphics', '3 years experience, can use PS and Ai', 'Serrekunda', '2020-01-05', 'contact@afrosofttech.com', '8965686', 18000, 0),
(2, 1, 'product engineer', 'come up with designs and ideas for new products', 'Full Time', 'I.T', '2+ years experience, can use PS and Ai, able to work in team', 'Serrekunda', '2020-01-06', 'asj.sarjo@gmail.com', '5336171', 15000, 0),
(3, 1, 'software Engineer', 'Laravel,php,7+ years experience,Mysql, html, css', 'Full Time', 'I.T', 'knows php,jquery, laravel', 'Serrekunda', '2020-01-10', 'contact@afrosofttech.com', '2336171', 25000, 0),
(4, 2, 'product engineer', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis tristique nulla.', 'Full Time', 'I.T', '2+ years experience, can use PS and Ai, able to work in team', 'Serrekunda', '2020-01-05', 'insist@gmail.com', '8965686', 18, 0);

-- --------------------------------------------------------

--
-- Table structure for table `job_seeker`
--

CREATE TABLE `job_seeker` (
  `jobseeker_id` int(11) NOT NULL,
  `login_id` int(11) NOT NULL,
  `fname` varchar(25) NOT NULL,
  `lname` varchar(25) NOT NULL,
  `fullName` varchar(60) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `category` varchar(60) NOT NULL,
  `skills` text,
  `tag_line` varchar(30) NOT NULL,
  `education_level` varchar(30) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `country` varchar(30) DEFAULT NULL,
  `image` varchar(50) DEFAULT NULL,
  `CV` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `job_seeker`
--

INSERT INTO `job_seeker` (`jobseeker_id`, `login_id`, `fname`, `lname`, `fullName`, `email`, `phone`, `category`, `skills`, `tag_line`, `education_level`, `address`, `dob`, `country`, `image`, `CV`) VALUES
(1, 1, 'John', 'Doe', 'John Doe', 'jdoe@gmail.com', '78965425', 'Graphic designers', 'graphic designer, php', 'Graphic designer', 'B.sc.', 'serrekunda', '1996-07-27', 'Gambia', 'johndoe.jpeg', 'myCurrentCV.pdf'),
(2, 4, 'Jane', 'Doe', 'Jane Doe', 'janedoe@gmail.com', '65985312', 'Software Engineers', 'wordpress, bootstrap, python,Html,Css', 'Programmer', 'B.sc.', 'kotu', '1998-06-12', 'Gambia', 'janedoe.jpeg', 'myCurrentCV.pdf'),
(3, 5, 'Najatu Garba', 'Ahmed', 'Najatu Garba Ahmed', 'naja@gmail.com', '6987163', 'Graphic designers', 'Graphics design, UI/UX Designer', 'Graphic designer', 'M.sc.', 'Bundung', '1996-07-27', 'Gambia', 'naja.jpeg', 'myCurrentCV.pdf'),
(4, 6, 'Amadou Sarjo', 'Jallow', 'Amadou Sarjo Jallow', 'amadou@gmail.com', '5333163', 'Software Engineers', 'UI/UX Designer, php, html, css, javascript, jquery,angular,wordpress,bootstrap,AI', 'Programmer', 'B.sc.', 'Bundung jola-kunda, Serrekunda', '1996-07-27', 'Gambia', '', ''),
(5, 7, 'Sauda', 'Kabeer', 'Sauda kabeer', 'sauda@gmail.com', '3697163', 'Health', 'Psycologist, leadership, motivational speaker', 'Clinical Psycologist', 'M.sc.', 'Banjul', '1995-03-27', 'Gambia', 'sauda.jpeg', 'myCurrentCV.pdf'),
(6, 8, 'Jamaal', 'Cham', 'Jamaal Cham', 'jamaal@gmail.com', '427163', 'Software Engineers', 'php, html, css, javascript, jquery, angular, wordpress', 'Programmer', 'B.sc.', 'Kotu', '1993-03-27', 'Gambia', 'jamaal.jpeg', 'myCurrentCV.pdf'),
(7, 9, 'Biran', 'Jobe', 'Biran Jobe', 'biranjobe@gmail.com', '789163', 'Software Engineers', 'php, html, css, javascript, jquery, angular, wordpress', 'Programmer', 'B.sc.', 'Sukuta', '1997-03-13', 'Gambia', 'biran.jpeg', 'myCurrentCV.pdf'),
(8, 10, 'Abubacarr', 'Drammeh', 'Abubacarr Drammeh', 'abubacarr@gmail.com', '652163', 'Health', 'Pharmacist, leadership, volunteer', 'Lab Technician', 'B.sc.', 'Farato', '1996-03-13', 'Gambia', 'adrammeh.jpeg', 'myCurrentCV.pdf'),
(9, 11, 'Fatu', 'Njie', 'Fatu Njie', 'fatunjie@gmail.com', '312163', 'Finance', 'accounting, Business Management, ACCA, CAT', 'accountant', 'B.sc.', 'tallinding', '1994-03-13', 'Gambia', 'fatu.jpeg', 'myCurrentCV.pdf'),
(10, 22, 'Aji fatu', 'gaye', 'Aji fatu gaye', 'aji@gmail.com', '6985328', 'Law', 'Leadership, volunteer, law, team work', 'Lawyer', 'B.sc.', 'Serrekunda', '1998-09-19', 'Gambia', 'aji.jpeg', 'myCurrentCV.pdf');

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `login_id` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `user_type` varchar(15) NOT NULL,
  `hash` varchar(60) NOT NULL,
  `status` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`login_id`, `email`, `password`, `user_type`, `hash`, `status`) VALUES
(1, 'jdoe@gmail.com', '123@asj', 'jobseeker', 'rfegd4756rgfrtf', 0),
(2, 'contact@afrosofttech.com', '123@afrosofttech', 'company', '6125521rgfrf525r1g5', 0),
(3, 'insist@gmail.com', '123@in', 'company', '2554wef345f51d6t94', 0),
(4, 'janedoe@gmail.com', '123@jane', 'jobseeker', '4435646njhy65jn56', 0),
(5, 'naja@gmail.com', '123@naja', 'jobseeker', '36565fg226df26ddg2g6', 0),
(6, 'amadou@gmail.com', '123@amadou', 'jobseeker', '36565fg226df2dddv5523vd6', 0),
(7, 'sauda@gmail.com', '123@sauda', 'jobseeker', '896dfsfg226df26ddg2g6', 0),
(8, 'jamaal@gmail.com', '123@jamaal', 'jobseeker', '36565fg5535dfs96sd5', 0),
(9, 'biranjobe@gmail.com', '123@jobe', 'jobseeker', '85d55sdf2zxdf26ddg2g6', 0),
(10, 'abubacarr@gmail.com', '123@abuba', 'jobseeker', '6532fcc66ddg2g6', 0),
(11, 'fatunjie@gmail.com', '123@fatu', 'jobseeker', '85d5586fdsac66v', 0),
(12, 'faalen@gmail.com', '123@faalen', 'company', '535cx6hl6jk96j6d5', 0),
(13, 'safe@gmail.com', '123@safe', 'company', '6221cv3256b3dg2g6', 0),
(14, 'hrc@un.com', '123@hrc', 'company', '5243813ef521d562xc2', 0),
(16, 'ams@gmail.com', '$2y$10$vQS7tdDs', 'company', '70efdf2ec9b086079795c442636b55', 0),
(18, 'afri@gmail.com', '$2y$10$DyBJ5l2m', '', '816b112c6105b3ebd537828a39af48', 0),
(20, 'asjfoodtrading@gmail.com', '$2y$10$kPfHMJ4iQl8nrCbbepf/bONZqU6lGn6ovjdi5ROi27KAvKMIZtn.y', 'company', 'cc1aa436277138f61cda703991069eaf', 0),
(21, 'alf@gmail.com', '$2y$10$vPDHHwqiBu1Y5cvPtyVdY.yyhTMWBlO/oMNhLzZ9VOhqXWDXNbB6a', 'jobseeker', 'a4300b002bcfb71f291dac175d52df94', 0),
(22, 'aji@gmail.com', 'aji@123', 'jobseeker', '955d945d51fdvc9df5df29s85f5', 0);

-- --------------------------------------------------------

--
-- Table structure for table `message`
--

CREATE TABLE `message` (
  `message_id` int(11) NOT NULL,
  `creator_id` int(11) NOT NULL,
  `creator_name` varchar(60) NOT NULL,
  `subject` varchar(100) NOT NULL,
  `message_body` text NOT NULL,
  `create_date` date NOT NULL,
  `parent_message_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `message`
--

INSERT INTO `message` (`message_id`, `creator_id`, `creator_name`, `subject`, `message_body`, `create_date`, `parent_message_id`) VALUES
(1, 1, 'John Doe', 'Software Engineer Position', '<p>Hello,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis tristique nulla. Morbi euismod imperdiet nisl, in posuere orci dignissim sit amet. Pellentesque id ex et tortor tincidunt pretium. Donec leo augue, euismod sit amet eros non, dapibus maximus dolor. Cras semper ligula in turpis congue, sit amet condimentum elit pellentesque. Quisque nec libero pellentesque, laoreet elit ut, imperdiet mauris. Proin sem eros, porta quis sodales sit amet, finibus tincidunt velit. Donec vehicula at nulla a mattis. Integer eget felis sodales, euismod nisl nec, rhoncus lorem. Vivamus hendrerit tristique ipsum a ullamcorper. Morbi euismod pellentesque purus vitae finibus. Donec eget orci consectetur lectus facilisis euismod.</p><p>Thanks</p>', '2020-01-01', NULL),
(2, 1, 'John Doe', 'Graphics Designer Position', '<p>Hello,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis tristique nulla. Morbi euismod imperdiet nisl, in posuere orci dignissim sit amet. Pellentesque id ex et tortor tincidunt pretium. Donec leo augue, euismod sit amet eros non, dapibus maximus dolor. Cras semper ligula in turpis congue, sit amet condimentum elit pellentesque. Quisque nec libero pellentesque, laoreet elit ut, imperdiet mauris. Proin sem eros, porta quis sodales sit amet, finibus tincidunt velit. Donec vehicula at nulla a mattis. Integer eget felis sodales, euismod nisl nec, rhoncus lorem. Vivamus hendrerit tristique ipsum a ullamcorper. Morbi euismod pellentesque purus vitae finibus. Donec eget orci consectetur lectus facilisis euismod.</p><p>Thanks</p>', '2020-01-01', NULL),
(3, 2, 'Afrika Software Technologies', 'Graphics Designer Position', '<p>Hello,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis tristique nulla. Morbi euismod imperdiet nisl, in posuere orci dignissim sit amet. Pellentesque id ex et tortor tincidunt pretium. Donec leo augue, euismod sit amet eros non, dapibus maximus dolor. Cras semper ligula in turpis congue, sit amet condimentum elit pellentesque. Quisque nec libero pellentesque, laoreet elit ut, imperdiet mauris. Proin sem eros, porta quis sodales sit amet, finibus tincidunt velit. Donec vehicula at nulla a mattis. Integer eget felis sodales, euismod nisl nec, rhoncus lorem. Vivamus hendrerit tristique ipsum a ullamcorper. Morbi euismod pellentesque purus vitae finibus. Donec eget orci consectetur lectus facilisis euismod.</p><p>Thanks</p>', '2020-01-05', 2),
(4, 1, 'John Doe', 'Graphics Designer Position', '<p>Hello,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis tristique nulla. Morbi euismod imperdiet nisl, in posuere orci dignissim sit amet. Pellentesque id ex et tortor tincidunt pretium. Donec leo augue, euismod sit amet eros non, dapibus maximus dolor. Cras semper ligula in turpis congue, sit amet condimentum elit pellentesque. Quisque nec libero pellentesque, laoreet elit ut, imperdiet mauris. Proin sem eros, porta quis sodales sit amet, finibus tincidunt velit. Donec vehicula at nulla a mattis. Integer eget felis sodales, euismod nisl nec, rhoncus lorem. Vivamus hendrerit tristique ipsum a ullamcorper. Morbi euismod pellentesque purus vitae finibus. Donec eget orci consectetur lectus facilisis euismod.</p><p>Thanks</p>', '2020-01-01', 3),
(5, 6, 'Amadou', 'Product Engineer job', '<p>Hello,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis tristique nulla. Morbi euismod imperdiet nisl, in posuere orci dignissim sit amet. Pellentesque id ex et tortor tincidunt pretium. Donec leo augue, euismod sit amet eros non, dapibus maximus dolor. Cras semper ligula in turpis congue, sit amet condimentum elit pellentesque. Quisque nec libero pellentesque, laoreet elit ut, imperdiet mauris. Proin sem eros, porta quis sodales sit amet, finibus tincidunt velit. Donec vehicula at nulla a mattis. Integer eget felis sodales, euismod nisl nec, rhoncus lorem. Vivamus hendrerit tristique ipsum a ullamcorper. Morbi euismod pellentesque purus vitae finibus. Donec eget orci consectetur lectus facilisis euismod.</p><p>Thanks</p>', '2020-01-01', NULL),
(6, 2, 'Afrika Software Technologies', 'Product Engineer job', '<p>Hello,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis tristique nulla. Morbi euismod imperdiet nisl, in posuere orci dignissim sit amet. Pellentesque id ex et tortor tincidunt pretium. Donec leo augue, euismod sit amet eros non, dapibus maximus dolor. Cras semper ligula in turpis congue, sit amet condimentum elit pellentesque. Quisque nec libero pellentesque, laoreet elit ut, imperdiet mauris. Proin sem eros, porta quis sodales sit amet, finibus tincidunt velit. Donec vehicula at nulla a mattis. Integer eget felis sodales, euismod nisl nec, rhoncus lorem. Vivamus hendrerit tristique ipsum a ullamcorper. Morbi euismod pellentesque purus vitae finibus. Donec eget orci consectetur lectus facilisis euismod.</p><p>Thanks</p>', '2020-01-02', 5),
(7, 6, 'Amadou', 'Product Engineer job', '<p>Hello,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis tristique nulla. Morbi euismod imperdiet nisl, in posuere orci dignissim sit amet. Pellentesque id ex et tortor tincidunt pretium. Donec leo augue, euismod sit amet eros non, dapibus maximus dolor. Cras semper ligula in turpis congue, sit amet condimentum elit pellentesque. Quisque nec libero pellentesque, laoreet elit ut, imperdiet mauris. Proin sem eros, porta quis sodales sit amet, finibus tincidunt velit. Donec vehicula at nulla a mattis. Integer eget felis sodales, euismod nisl nec, rhoncus lorem. Vivamus hendrerit tristique ipsum a ullamcorper. Morbi euismod pellentesque purus vitae finibus. Donec eget orci consectetur lectus facilisis euismod.</p><p>Thanks</p>', '2020-01-02', 6),
(8, 7, 'Saudah', 'Status of the job', '<p>Hello,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis tristique nulla. Morbi euismod imperdiet nisl, in posuere orci dignissim sit amet. Pellentesque id ex et tortor tincidunt pretium. Donec leo augue, euismod sit amet eros non, dapibus maximus dolor. Cras semper ligula in turpis congue, sit amet condimentum elit pellentesque. Quisque nec libero pellentesque, laoreet elit ut, imperdiet mauris. Proin sem eros, porta quis sodales sit amet, finibus tincidunt velit. Donec vehicula at nulla a mattis. Integer eget felis sodales, euismod nisl nec, rhoncus lorem. Vivamus hendrerit tristique ipsum a ullamcorper. Morbi euismod pellentesque purus vitae finibus. Donec eget orci consectetur lectus facilisis euismod.</p><p>Thanks</p>', '2020-01-04', NULL),
(9, 8, 'Jamaal', 'Engineer Engineer job', '<p>Hello,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis tristique nulla. Morbi euismod imperdiet nisl, in posuere orci dignissim sit amet. Pellentesque id ex et tortor tincidunt pretium. Donec leo augue, euismod sit amet eros non, dapibus maximus dolor. Cras semper ligula in turpis congue, sit amet condimentum elit pellentesque. Quisque nec libero pellentesque, laoreet elit ut, imperdiet mauris. Proin sem eros, porta quis sodales sit amet, finibus tincidunt velit. Donec vehicula at nulla a mattis. Integer eget felis sodales, euismod nisl nec, rhoncus lorem. Vivamus hendrerit tristique ipsum a ullamcorper. Morbi euismod pellentesque purus vitae finibus. Donec eget orci consectetur lectus facilisis euismod.</p><p>Thanks</p>', '2020-01-07', NULL),
(10, 9, 'Biran', 'Product Engineer job', '<p>Hello,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis tristique nulla. Morbi euismod imperdiet nisl, in posuere orci dignissim sit amet. Pellentesque id ex et tortor tincidunt pretium. Donec leo augue, euismod sit amet eros non, dapibus maximus dolor. Cras semper ligula in turpis congue, sit amet condimentum elit pellentesque. Quisque nec libero pellentesque, laoreet elit ut, imperdiet mauris. Proin sem eros, porta quis sodales sit amet, finibus tincidunt velit. Donec vehicula at nulla a mattis. Integer eget felis sodales, euismod nisl nec, rhoncus lorem. Vivamus hendrerit tristique ipsum a ullamcorper. Morbi euismod pellentesque purus vitae finibus. Donec eget orci consectetur lectus facilisis euismod.</p><p>Thanks</p>', '2020-01-10', NULL),
(11, 10, 'Abubacarr', 'Graphics Designer Position', '<p>Hello,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis tristique nulla. Morbi euismod imperdiet nisl, in posuere orci dignissim sit amet. Pellentesque id ex et tortor tincidunt pretium. Donec leo augue, euismod sit amet eros non, dapibus maximus dolor. Cras semper ligula in turpis congue, sit amet condimentum elit pellentesque. Quisque nec libero pellentesque, laoreet elit ut, imperdiet mauris. Proin sem eros, porta quis sodales sit amet, finibus tincidunt velit. Donec vehicula at nulla a mattis. Integer eget felis sodales, euismod nisl nec, rhoncus lorem. Vivamus hendrerit tristique ipsum a ullamcorper. Morbi euismod pellentesque purus vitae finibus. Donec eget orci consectetur lectus facilisis euismod.</p><p>Thanks</p>', '2020-01-12', NULL),
(12, 11, 'Fatu', 'Product Engineer job', '<p>Hello,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis tristique nulla. Morbi euismod imperdiet nisl, in posuere orci dignissim sit amet. Pellentesque id ex et tortor tincidunt pretium. Donec leo augue, euismod sit amet eros non, dapibus maximus dolor. Cras semper ligula in turpis congue, sit amet condimentum elit pellentesque. Quisque nec libero pellentesque, laoreet elit ut, imperdiet mauris. Proin sem eros, porta quis sodales sit amet, finibus tincidunt velit. Donec vehicula at nulla a mattis. Integer eget felis sodales, euismod nisl nec, rhoncus lorem. Vivamus hendrerit tristique ipsum a ullamcorper. Morbi euismod pellentesque purus vitae finibus. Donec eget orci consectetur lectus facilisis euismod.</p><p>Thanks</p>', '2020-01-20', NULL),
(13, 5, 'Najatu Garba Ahmed', 'love and Clarification', '<p>Hello,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis tristique nulla. Morbi euismod imperdiet nisl, in posuere orci dignissim sit amet. Pellentesque id ex et tortor tincidunt pretium. Donec leo augue, euismod sit amet eros non, dapibus maximus dolor. Cras semper ligula in turpis congue, sit amet condimentum elit pellentesque. Quisque nec libero pellentesque, laoreet elit ut, imperdiet mauris. Proin sem eros, porta quis sodales sit amet, finibus tincidunt velit. Donec vehicula at nulla a mattis. Integer eget felis sodales, euismod nisl nec, rhoncus lorem. Vivamus hendrerit tristique ipsum a ullamcorper. Morbi euismod pellentesque purus vitae finibus. Donec eget orci consectetur lectus facilisis euismod.</p><p>Thanks</p>', '2020-01-25', NULL),
(49, 2, 'Afrika Software Technologies', 'Hand out CV', '<p>Hello,</p><p>Bitch I dont really know why you need my cv but i just want to tell you that&nbsp; i really dont like sharing my information.</p><p>Thanks</p>', '2020-01-16', NULL),
(50, 2, 'Afrika Software Technologies', 'paco', '<p>hello,</p><p>no def</p><p>thanks</p>', '2020-01-17', NULL),
(51, 2, 'Afrika Software Technologies', 'Baby', '<p>Hello,</p><p>How are you? long time no see.</p><p>Regards,</p><p>Naja baby</p>', '2020-01-17', NULL),
(52, 2, 'Afrika Software Technologies', 'love and Clarification', '<p>Hello,</p><p>I still have those feelings. I guess they are mutual. I will contact you later.</p><p>Bye</p><p>Naja</p>', '2020-01-17', 13),
(53, 2, 'Afrika Software Technologies', 'Product Engineer job', '<p>hello,</p><p>the job is available.</p><p>thanks</p>', '2020-01-17', 12),
(54, 2, 'Afrika Software Technologies', 'Hand out CV', '<p>Hello,</p><p>Bitch I dont really know why you need my cv but i just want to tell you thatÂ  i really dont like sharing my information.</p><p>Thanks</p>', '2020-01-18', NULL),
(57, 2, 'Afrika Software Technologies', 'yes man', '<p>hello,</p><p>how are you doing?</p><p>thanks.</p>', '2020-01-18', NULL),
(58, 2, 'Afrika Software Technologies', 'Engineer Engineer job', '<p>hello jamaal,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non quam mollis, semper massa aliquet, fermentum ante. Praesent blandit posuere efficitur. Pellentesque ac justo vel ante scelerisque viverra. Etiam sit amet tempor leo. Morbi a nibh congue, tempor nulla in, egestas lectus. Quisque dictum pellentesque felis a auctor. Donec tempus ligula ut dui tempor, nec vehicula nulla scelerisque. Mauris tristique erat dui, in iaculis magna accumsan eget. Mauris cursus lectus sed lacus mattis posuere. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer fermentum eros auctor velit interdum, eget dapibus enim varius. Morbi non felis ut dolor lacinia fringilla ut eu elit. Nullam et nulla sit amet augue hendrerit aliquam. Proin iaculis urna diam, non laoreet sapien vulputate nec. Donec sed vulputate urna.</p><p>Thanks.</p>', '2020-01-26', 9),
(60, 2, 'Afrika Software Technologies', 'LOVE and HATE', '<p>Hello naja,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non quam mollis, semper massa aliquet, fermentum ante. Praesent blandit posuere efficitur. Pellentesque ac justo vel ante scelerisque viverra. Etiam sit amet tempor leo. Morbi a nibh congue, tempor nulla in, egestas lectus. Quisque dictum pellentesque felis a auctor. Donec tempus ligula ut dui tempor, nec vehicula nulla scelerisque. Mauris tristique erat dui, in iaculis magna accumsan eget. Mauris cursus lectus sed lacus mattis posuere. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer fermentum eros auctor velit interdum, eget dapibus enim varius. Morbi non felis ut dolor lacinia fringilla ut eu elit. Nullam et nulla sit amet augue hendrerit aliquam. Proin iaculis urna diam, non laoreet sapien vulputate nec. Donec sed vulputate urna.</p><p>Bye darling.</p>', '2020-01-26', NULL),
(63, 2, 'Afrika Software Technologies', 'CV updation', '<p>Hello hr,</p><p>Proin viverra ornare ultricies. Sed luctus nibh et dictum tincidunt. Morbi porttitor sem nisi, ornare volutpat odio ullamcorper non. Sed aliquet malesuada turpis vel euismod. Pellentesque mattis convallis consequat. Nulla tincidunt dui pulvinar, ultricies neque et, ultrices magna. Mauris lobortis, sapien id egestas bibendum, sapien erat convallis sem, et tristique lacus mauris in turpis. Proin a bibendum diam. Donec iaculis nisi diam, quis porta orci pharetra in. Proin dolor ante, pretium eget sapien ut, suscipit ullamcorper diam. Vestibulum porttitor, magna vel tempus pellentesque, elit dolor dignissim ex, ut pulvinar lorem ex ut nulla. Curabitur ultrices arcu orci, a dictum massa euismod quis. Phasellus tempus nec massa pretium maximus.</p><p>Regards,</p><p>Amadou.</p>', '2020-01-26', NULL),
(64, 2, 'Afrika Software Technologies', 'love and Clarification', '<p>Hello,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis tristique nulla. Morbi euismod imperdiet nisl, in posuere orci dignissim sit amet. Pellentesque id ex et tortor tincidunt pretium. Donec leo augue, euismod sit amet eros non, dapibus maximus dolor. Cras semper ligula in turpis congue, sit amet condimentum elit pellentesque. Quisque nec libero pellentesque, laoreet elit ut, imperdiet mauris. Proin sem eros, porta quis sodales sit amet, finibus tincidunt velit. Donec vehicula at nulla a mattis. Integer eget felis sodales, euismod nisl nec, rhoncus lorem. Vivamus hendrerit tristique ipsum a ullamcorper. Morbi euismod pellentesque purus vitae finibus. Donec eget orci consectetur lectus facilisis euismod.</p><p>Thanks</p>', '2020-01-27', NULL),
(65, 2, 'Afrika Software Technologies', 'love and Clarification', '<p>Hello,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis tristique nulla. Morbi euismod imperdiet nisl, in posuere orci dignissim sit amet. Pellentesque id ex et tortor tincidunt pretium. Donec leo augue, euismod sit amet eros non, dapibus maximus dolor. Cras semper ligula in turpis congue, sit amet condimentum elit pellentesque. Quisque nec libero pellentesque, laoreet elit ut, imperdiet mauris. Proin sem eros, porta quis sodales sit amet, finibus tincidunt velit. Donec vehicula at nulla a mattis. Integer eget felis sodales, euismod nisl nec, rhoncus lorem. Vivamus hendrerit tristique ipsum a ullamcorper. Morbi euismod pellentesque purus vitae finibus. Donec eget orci consectetur lectus facilisis euismod.</p><p>Thanks</p>', '2020-01-27', NULL),
(66, 2, 'Afrika Software Technologies', 'Graphics Designer Position', '<p>Hello,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis tristique nulla. Morbi euismod imperdiet nisl, in posuere orci dignissim sit amet. Pellentesque id ex et tortor tincidunt pretium. Donec leo augue, euismod sit amet eros non, dapibus maximus dolor. Cras semper ligula in turpis congue, sit amet condimentum elit pellentesque. Quisque nec libero pellentesque, laoreet elit ut, imperdiet mauris. Proin sem eros, porta quis sodales sit amet, finibus tincidunt velit. Donec vehicula at nulla a mattis. Integer eget felis sodales, euismod nisl nec, rhoncus lorem. Vivamus hendrerit tristique ipsum a ullamcorper. Morbi euismod pellentesque purus vitae finibus. Donec eget orci consectetur lectus facilisis euismod.</p><p>Thanks</p>', '2020-01-28', NULL),
(67, 2, 'Afrika Software Technologies', 'Dismissal', '<p>Hello,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin orci elit, congue sit amet tortor at, gravida efficitur augue. Maecenas placerat lacus vitae neque mattis consectetur. Aliquam cursus, nibh id cursus suscipit, tortor ligula aliquet felis, sed fringilla urna dui ac erat. Nam a viverra enim. Cras efficitur elementum placerat. Aenean ac dui sem. Ut libero sem, lobortis non convallis ac, venenatis non arcu. Sed eleifend molestie vehicula. Curabitur iaculis semper arcu, sit amet gravida enim porttitor sit amet. Nam ac pellentesque metus, sit amet rutrum nibh. Nullam id felis non nibh tincidunt pellentesque. Nullam nec mattis nunc. Ut aliquam augue lectus, at aliquam arcu posuere ac. Aliquam erat volutpat. Praesent tincidunt ipsum velit. Phasellus ut metus a est posuere fermentum.\r</p><p>Proin aliquam efficitur neque, luctus malesuada turpis vehicula vitae. Aliquam erat volutpat. Integer finibus ipsum quis tristique vehicula. Etiam tempus sit amet erat iaculis iaculis. Donec quam justo, vestibulum vitae suscipit et, tempus vitae tortor. Aliquam placerat odio eget lacinia mattis. Proin magna nisl, pretium a orci vitae, fermentum mollis quam. Morbi vitae eros tortor. Suspendisse varius, dolor ornare feugiat eleifend, dui nisi congue eros, eu facilisis ipsum ipsum consequat velit. Phasellus a posuere quam, vel fringilla dui. Etiam posuere magna quam, vel faucibus ipsum dapibus non. Fusce sodales massa in urna pellentesque tristique.\r</p><p>Curabitur nec ultricies neque. Vivamus non iaculis enim, eget pulvinar metus. Vestibulum tincidunt pulvinar eros, vitae facilisis orci aliquam vehicula. Suspendisse elit libero, accumsan in efficitur fringilla, dapibus ut leo. Proin nec commodo nibh, ut blandit lacus. Morbi sit amet tortor imperdiet, faucibus augue sit amet, tristique ante. Phasellus finibus, mi eu rutrum sollicitudin, neque massa cursus mi, in sagittis metus magna quis sapien. Nam in accumsan odio, nec iaculis ex. Nam sagittis nisi vitae ligula dapibus, eget tristique est porta. Maecenas consectetur arcu sed pharetra molestie.</p><p>Good luck.</p>', '2020-01-28', NULL),
(68, 2, 'Afrika Software Technologies', 'Dismiss', '<p>hello,</p><p>Proin aliquam efficitur neque, luctus malesuada turpis vehicula vitae. Aliquam erat volutpat. Integer finibus ipsum quis tristique vehicula. Etiam tempus sit amet erat iaculis iaculis. Donec quam justo, vestibulum vitae suscipit et, tempus vitae tortor. Aliquam placerat odio eget lacinia mattis. Proin magna nisl, pretium a orci vitae, fermentum mollis quam. Morbi vitae eros tortor. Suspendisse varius, dolor ornare feugiat eleifend, dui nisi congue eros, eu facilisis ipsum ipsum consequat velit. Phasellus a posuere quam, vel fringilla dui. Etiam posuere magna quam, vel faucibus ipsum dapibus non. Fusce sodales massa in urna pellentesque tristique.</p><p>Bye.</p>', '2020-01-28', NULL),
(69, 2, 'Afrika Software Technologies', 'REVIEW', '<p>Hello,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin orci elit, congue sit amet tortor at, gravida efficitur augue. Maecenas placerat lacus vitae neque mattis consectetur. Aliquam cursus, nibh id cursus suscipit, tortor ligula aliquet felis, sed fringilla urna dui ac erat. Nam a viverra enim. Cras efficitur elementum placerat. Aenean ac dui sem. Ut libero sem, lobortis non convallis ac, venenatis non arcu. Sed eleifend molestie vehicula. Curabitur iaculis semper arcu, sit amet gravida enim porttitor sit amet. Nam ac pellentesque metus, sit amet rutrum nibh. Nullam id felis non nibh tincidunt pellentesque. Nullam nec mattis nunc. Ut aliquam augue lectus, at aliquam arcu posuere ac. Aliquam erat volutpat. Praesent tincidunt ipsum velit. Phasellus ut metus a est posuere fermentum.\r</p><p>Proin aliquam efficitur neque, luctus malesuada turpis vehicula vitae. Aliquam erat volutpat. Integer finibus ipsum quis tristique vehicula. Etiam tempus sit amet erat iaculis iaculis. Donec quam justo, vestibulum vitae suscipit et, tempus vitae tortor. Aliquam placerat odio eget lacinia mattis. Proin magna nisl, pretium a orci vitae, fermentum mollis quam. Morbi vitae eros tortor. Suspendisse varius, dolor ornare feugiat eleifend, dui nisi congue eros, eu facilisis ipsum ipsum consequat velit. Phasellus a posuere quam, vel fringilla dui. Etiam posuere magna quam, vel faucibus ipsum dapibus non. Fusce sodales massa in urna pellentesque tristique.</p><p>Bye.</p>', '2020-01-28', NULL),
(70, 2, 'Afrika Software Technologies', 'SUCKER', '<p>hello,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin orci elit, congue sit amet tortor at, gravida efficitur augue. Maecenas placerat lacus vitae neque mattis consectetur. Aliquam cursus, nibh id cursus suscipit, tortor ligula aliquet felis, sed fringilla urna dui ac erat. Nam a viverra enim. Cras efficitur elementum placerat. Aenean ac dui sem. Ut libero sem, lobortis non convallis ac, venenatis non arcu. Sed eleifend molestie vehicula. Curabitur iaculis semper arcu, sit amet gravida enim porttitor sit amet. Nam ac pellentesque metus, sit amet rutrum nibh. Nullam id felis non nibh tincidunt pellentesque. Nullam nec mattis nunc. Ut aliquam augue lectus, at aliquam arcu posuere ac. Aliquam erat volutpat. Praesent tincidunt ipsum velit. Phasellus ut metus a est posuere fermentum.\r</p><p>\r</p><p>Proin aliquam efficitur neque, luctus malesuada turpis vehicula vitae. Aliquam erat volutpat. Integer finibus ipsum quis tristique vehicula. Etiam tempus sit amet erat iaculis iaculis. Donec quam justo, vestibulum vitae suscipit et, tempus vitae tortor. Aliquam placerat odio eget lacinia mattis. Proin magna nisl, pretium a orci vitae, fermentum mollis quam. Morbi vitae eros tortor. Suspendisse varius, dolor ornare feugiat eleifend, dui nisi congue eros, eu facilisis ipsum ipsum consequat velit. Phasellus a posuere quam, vel fringilla dui. Etiam posuere magna quam, vel faucibus ipsum dapibus non. Fusce sodales massa in urna pellentesque tristique.</p><p>Bye.</p>', '2020-01-28', NULL),
(71, 2, 'Afrika Software Technologies', 'Product Engineer job', '<p>Hello,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis tristique nulla. Morbi euismod imperdiet nisl, in posuere orci dignissim sit amet. Pellentesque id ex et tortor tincidunt pretium. Donec leo augue, euismod sit amet eros non, dapibus maximus dolor. Cras semper ligula in turpis congue, sit amet condimentum elit pellentesque. Quisque nec libero pellentesque, laoreet elit ut, imperdiet mauris. Proin sem eros, porta quis sodales sit amet, finibus tincidunt velit. Donec vehicula at nulla a mattis. Integer eget felis sodales, euismod nisl nec, rhoncus lorem. Vivamus hendrerit tristique ipsum a ullamcorper. Morbi euismod pellentesque purus vitae finibus. Donec eget orci consectetur lectus facilisis euismod.</p><p>Thanks</p>', '2020-01-30', NULL),
(72, 2, 'Afrika Software Technologies', 'I miss you', '<p>Hello naja,</p><p>i really wanted to contact you today but i then realised that you will probably ask me a lot of questions, so i have decided not to contact you at all.</p><p>Thanks.</p>', '2020-02-02', NULL),
(73, 2, 'Afrika Software Technologies', 'bestie', '<p>hello saudah,</p><p>how is your day today.</p><p>thanks.</p>', '2020-02-02', NULL),
(74, 2, 'Afrika Software Technologies', 'Graphics Designer Position', '<p>Hello,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis tristique nulla. Morbi euismod imperdiet nisl, in posuere orci dignissim sit amet. Pellentesque id ex et tortor tincidunt pretium. Donec leo augue, euismod sit amet eros non, dapibus maximus dolor. Cras semper ligula in turpis congue, sit amet condimentum elit pellentesque. Quisque nec libero pellentesque, laoreet elit ut, imperdiet mauris. Proin sem eros, porta quis sodales sit amet, finibus tincidunt velit. Donec vehicula at nulla a mattis. Integer eget felis sodales, euismod nisl nec, rhoncus lorem. Vivamus hendrerit tristique ipsum a ullamcorper. Morbi euismod pellentesque purus vitae finibus. Donec eget orci consectetur lectus facilisis euismod.</p><p>Thanks</p>', '2020-02-02', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `message_recipient`
--

CREATE TABLE `message_recipient` (
  `mess_rec_id` int(11) NOT NULL,
  `recipient_id` int(11) DEFAULT NULL,
  `message_id` int(11) NOT NULL,
  `is_read` int(1) NOT NULL,
  `delete_request` varchar(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `message_recipient`
--

INSERT INTO `message_recipient` (`mess_rec_id`, `recipient_id`, `message_id`, `is_read`, `delete_request`) VALUES
(1, 2, 1, 0, '0'),
(2, 2, 2, 0, '0'),
(3, 1, 3, 0, '0'),
(4, 2, 4, 0, '0'),
(5, 2, 5, 0, '0'),
(6, 6, 6, 0, '0'),
(7, 2, 7, 1, '0'),
(8, 2, 8, 1, '0'),
(9, 2, 9, 1, '1'),
(10, 2, 10, 1, '0'),
(11, 2, 11, 1, '0'),
(12, 2, 12, 1, '0'),
(13, 2, 13, 1, '0'),
(18, 11, 49, 0, '0'),
(19, 6, 50, 0, '0'),
(20, 5, 51, 0, '0'),
(21, 5, 52, 0, '0'),
(22, 11, 53, 0, '0'),
(23, 10, 54, 1, '0'),
(26, 8, 57, 0, '0'),
(27, 8, 58, 1, '0'),
(29, 5, 60, 1, '0'),
(32, 11, 63, 0, '0'),
(33, 4, 64, 1, '0'),
(34, 5, 64, 1, '0'),
(35, 5, 66, 1, '0'),
(36, 8, 67, 0, '0'),
(37, 8, 68, 1, '0'),
(38, 9, 69, 0, '0'),
(39, 8, 70, 0, '0'),
(40, 1, 71, 0, '0'),
(41, 5, 72, 1, '0'),
(42, 7, 73, 1, '0'),
(43, 8, 74, 0, '0');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`admin_id`);

--
-- Indexes for table `application`
--
ALTER TABLE `application`
  ADD PRIMARY KEY (`app_id`),
  ADD KEY `job_id` (`job_id`),
  ADD KEY `joobseeker_id` (`jobseeker_id`),
  ADD KEY `company_id` (`company_id`);

--
-- Indexes for table `company`
--
ALTER TABLE `company`
  ADD PRIMARY KEY (`company_id`),
  ADD KEY `company_fk_1` (`login_id`);

--
-- Indexes for table `job`
--
ALTER TABLE `job`
  ADD PRIMARY KEY (`job_id`),
  ADD KEY `company_id` (`company_id`);

--
-- Indexes for table `job_seeker`
--
ALTER TABLE `job_seeker`
  ADD PRIMARY KEY (`jobseeker_id`),
  ADD KEY `login_id` (`login_id`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`login_id`);

--
-- Indexes for table `message`
--
ALTER TABLE `message`
  ADD PRIMARY KEY (`message_id`),
  ADD KEY `parent_message_id` (`parent_message_id`),
  ADD KEY `creator_id` (`creator_id`);

--
-- Indexes for table `message_recipient`
--
ALTER TABLE `message_recipient`
  ADD PRIMARY KEY (`mess_rec_id`),
  ADD KEY `recipient_id` (`recipient_id`),
  ADD KEY `message_id` (`message_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `admin_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `application`
--
ALTER TABLE `application`
  MODIFY `app_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `company`
--
ALTER TABLE `company`
  MODIFY `company_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `job`
--
ALTER TABLE `job`
  MODIFY `job_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `job_seeker`
--
ALTER TABLE `job_seeker`
  MODIFY `jobseeker_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `login_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `message`
--
ALTER TABLE `message`
  MODIFY `message_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=75;

--
-- AUTO_INCREMENT for table `message_recipient`
--
ALTER TABLE `message_recipient`
  MODIFY `mess_rec_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `application`
--
ALTER TABLE `application`
  ADD CONSTRAINT `app_company_fk` FOREIGN KEY (`company_id`) REFERENCES `company` (`company_id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `app_job_fk` FOREIGN KEY (`job_id`) REFERENCES `job` (`job_id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `app_jobseeker_fk` FOREIGN KEY (`jobseeker_id`) REFERENCES `job_seeker` (`jobseeker_id`) ON UPDATE CASCADE;

--
-- Constraints for table `company`
--
ALTER TABLE `company`
  ADD CONSTRAINT `company_fk_1` FOREIGN KEY (`login_id`) REFERENCES `login` (`login_id`) ON UPDATE CASCADE;

--
-- Constraints for table `job`
--
ALTER TABLE `job`
  ADD CONSTRAINT `job_fk` FOREIGN KEY (`company_id`) REFERENCES `company` (`company_id`) ON UPDATE CASCADE;

--
-- Constraints for table `job_seeker`
--
ALTER TABLE `job_seeker`
  ADD CONSTRAINT `jobseeker_fk` FOREIGN KEY (`login_id`) REFERENCES `login` (`login_id`) ON UPDATE CASCADE;

--
-- Constraints for table `message`
--
ALTER TABLE `message`
  ADD CONSTRAINT `creator_fk` FOREIGN KEY (`creator_id`) REFERENCES `login` (`login_id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `parent_message_fk` FOREIGN KEY (`parent_message_id`) REFERENCES `message` (`message_id`) ON UPDATE CASCADE;

--
-- Constraints for table `message_recipient`
--
ALTER TABLE `message_recipient`
  ADD CONSTRAINT `message_fk` FOREIGN KEY (`message_id`) REFERENCES `message` (`message_id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `recipient_fk` FOREIGN KEY (`recipient_id`) REFERENCES `login` (`login_id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
