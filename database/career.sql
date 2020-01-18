-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 18, 2020 at 10:05 AM
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
  `password` varchar(15) NOT NULL,
  `postal_code` int(5) DEFAULT NULL,
  `country` varchar(25) DEFAULT NULL,
  `currency` varchar(10) DEFAULT NULL,
  `logo` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `company`
--

INSERT INTO `company` (`company_id`, `login_id`, `company_name`, `company_email`, `company_phone`, `company_address`, `password`, `postal_code`, `country`, `currency`, `logo`) VALUES
(1, 2, 'Afrika software Technologies', 'contact@afrosofttech.com', '2336171', 'Bundung', '123@ast', 0, 'Gambia', 'GMD', NULL),
(2, 3, 'Insist global', 'insist@gmail.com', '234545778', 'Kairaba', '123@in', 0, 'Gambia', 'GMD', NULL),
(3, 12, 'Faalen Technologies', 'faalen@gmail.com', '6985632', 'Sukuta', '123@faalen', 0, 'The gambia', 'GMD', NULL),
(4, 13, 'Safe Integrated Technologies', 'safe@gmail.com', '7885632', 'Banjul', '123@safe', 0, 'The gambia', 'GMD', NULL),
(5, 14, 'United Nations Humans Rights Council', 'hrc@un.com', '9832632', 'Serrekunda', '123@hrc', 0, 'The gambia', 'GMD', NULL),
(6, 15, 'ASJ Foodtrading', 'asjfoodtrading@gmail.com', '2185632', 'Serrekunda', '123@asjf', 0, 'The gambia', 'GMD', NULL);

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
  `pwd` varchar(15) NOT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `skills` text,
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

INSERT INTO `job_seeker` (`jobseeker_id`, `login_id`, `fname`, `lname`, `fullName`, `email`, `pwd`, `phone`, `skills`, `education_level`, `address`, `dob`, `country`, `image`, `CV`) VALUES
(1, 1, 'John', 'Doe', 'John Doe', 'jdoe@gmail.com', '123@asj', '78965425', 'graphic designer,php', 'B.sc.', 'serrekunda', '1996-07-27', 'The Gambia', NULL, NULL),
(2, 4, 'Jane', 'Doe', 'Jane Doe', 'janedoe@gmail.com', '123@jane', '65985312', 'programmer', 'B.sc.', 'kotu', '1998-06-12', 'The Gambia', NULL, NULL),
(3, 5, 'Najatu Garba', 'Ahmed', 'Najatu Garba Ahmed', 'naja@gmail.com', '123@naja', '6987163', 'Graphics design, UI/UX Designer', 'M.sc.', 'Bundung', '1996-07-27', 'The gambia', NULL, NULL),
(4, 6, 'Amadou Sarjo', 'Jallow', 'Amadou Sarjo Jallow', 'amadou@gmail.com', '123@amadou', '5333163', 'software engineer, UI/UX Designer', 'B.sc.', 'Bundung', '1996-07-27', 'The gambia', NULL, NULL),
(5, 7, 'Sauda', 'Kabeer', 'Sauda kabeer', 'sauda@gmail.com', '123@sauda', '3697163', 'Psycologist', 'M.sc.', 'Banjul', '1995-03-27', 'The gambia', NULL, NULL),
(6, 8, 'Jamaal', 'Cham', 'Jamaal Cham', 'jamaal@gmail.com', '123@jamaal', '427163', 'Software engineer', 'B.sc.', 'Kotu', '1993-03-27', 'The gambia', NULL, NULL),
(7, 9, 'Biran', 'Jobe', 'Biran Jobe', 'biranjobe@gmail.com', '123@jobe', '789163', 'Software engineer', 'B.sc.', 'Sukuta', '1997-03-13', 'The gambia', NULL, NULL),
(8, 10, 'Abubacarr', 'Drammeh', 'Abubacarr Drammeh', 'abubacarr@gmail.com', '123@abuba', '652163', 'Pharmacist', 'B.sc.', 'Farato', '1996-03-13', 'The gambia', NULL, NULL),
(9, 11, 'Fatu', 'Njie', 'Fatu Njie', 'fatunjie@gmail.com', '123@fatu', '312163', 'Accountant', 'B.sc.', 'tallinding', '1994-03-13', 'The gambia', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `login_id` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(15) NOT NULL,
  `user_type` varchar(15) NOT NULL,
  `hash` varchar(30) NOT NULL,
  `status` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`login_id`, `email`, `password`, `user_type`, `hash`, `status`) VALUES
(1, 'jdoe@gmail.com', '123@asj', 'jobseeker', 'rfegd4756rgfrtf', 0),
(2, 'contact@afrosofttech.com', '123@ast', 'company', '6125521rgfrf525r1g5', 0),
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
(15, 'asjfoodtrading@gmail.com', '123@asjf', 'company', '99897735629\r\n23', 0);

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
(13, 5, 'Najatu Garba Ahmed', 'love and Clarification', '<p>Hello,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis tristique nulla. Morbi euismod imperdiet nisl, in posuere orci dignissim sit amet. Pellentesque id ex et tortor tincidunt pretium. Donec leo augue, euismod sit amet eros non, dapibus maximus dolor. Cras semper ligula in turpis congue, sit amet condimentum elit pellentesque. Quisque nec libero pellentesque, laoreet elit ut, imperdiet mauris. Proin sem eros, porta quis sodales sit amet, finibus tincidunt velit. Donec vehicula at nulla a mattis. Integer eget felis sodales, euismod nisl nec, rhoncus lorem. Vivamus hendrerit tristique ipsum a ullamcorper. Morbi euismod pellentesque purus vitae finibus. Donec eget orci consectetur lectus facilisis euismod.</p><p>Thanks</p>\r\nThanks', '2020-01-25', NULL),
(49, 2, 'Afrika Software Technologies', 'Hand out CV', '<p>Hello,</p><p>Bitch I dont really know why you need my cv but i just want to tell you that&nbsp; i really dont like sharing my information.</p><p>Thanks</p>', '2020-01-16', NULL),
(50, 2, 'Afrika Software Technologies', 'paco', '<p>hello,</p><p>no def</p><p>thanks</p>', '2020-01-17', NULL),
(51, 2, 'Afrika Software Technologies', 'Baby', '<p>Hello,</p><p>How are you? long time no see.</p><p>Regards,</p><p>Naja baby</p>', '2020-01-17', NULL),
(52, 2, 'Afrika Software Technologies', 'love and Clarification', '<p>Hello,</p><p>I still have those feelings. I guess they are mutual. I will contact you later.</p><p>Bye</p><p>Naja</p>', '2020-01-17', 13),
(53, 2, 'Afrika Software Technologies', 'Product Engineer job', '<p>hello,</p><p>the job is available.</p><p>thanks</p>', '2020-01-17', 12),
(54, 2, 'Afrika Software Technologies', 'Hand out CV', '<p>Hello,</p><p>Bitch I dont really know why you need my cv but i just want to tell you thatÂ  i really dont like sharing my information.</p><p>Thanks</p>', '2020-01-18', NULL),
(57, 2, 'Afrika Software Technologies', 'yes man', '<p>hello,</p><p>how are you doing?</p><p>thanks.</p>', '2020-01-18', NULL);

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
(1, 2, 1, 1, '0'),
(2, 2, 2, 0, '0'),
(3, 1, 3, 1, '0'),
(4, 2, 4, 0, '0'),
(5, 2, 5, 1, '0'),
(6, 6, 6, 1, '0'),
(7, 2, 7, 1, '0'),
(8, 2, 8, 1, '0'),
(9, 2, 9, 1, '0'),
(10, 2, 10, 1, '0'),
(11, 2, 11, 1, '0'),
(12, 2, 12, 1, '0'),
(13, 2, 13, 1, '0'),
(18, 11, 49, 1, '0'),
(19, 6, 50, 1, '0'),
(20, 5, 51, 1, '0'),
(21, 5, 52, 0, '0'),
(22, 11, 53, 1, '0'),
(23, 10, 54, 1, '0'),
(26, 8, 57, 1, '0');

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
  MODIFY `company_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `job`
--
ALTER TABLE `job`
  MODIFY `job_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `job_seeker`
--
ALTER TABLE `job_seeker`
  MODIFY `jobseeker_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `login_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `message`
--
ALTER TABLE `message`
  MODIFY `message_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;

--
-- AUTO_INCREMENT for table `message_recipient`
--
ALTER TABLE `message_recipient`
  MODIFY `mess_rec_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

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
