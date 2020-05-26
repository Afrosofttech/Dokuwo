-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 26, 2020 at 06:27 PM
-- Server version: 10.4.10-MariaDB
-- PHP Version: 7.3.12

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
-- Table structure for table `actions`
--

CREATE TABLE `actions` (
  `action_id` int(11) NOT NULL,
  `company_login_id` int(11) NOT NULL,
  `jobseeker_login_id` int(11) NOT NULL,
  `request` varchar(30) NOT NULL,
  `reason` text NOT NULL,
  `action` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `actions`
--

INSERT INTO `actions` (`action_id`, `company_login_id`, `jobseeker_login_id`, `request`, `reason`, `action`) VALUES
(1, 2, 5, 'Block', '', 'Blocked'),
(6, 2, 5, 'Report', 'she is bomb', 'warned');

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `admin_id` int(11) NOT NULL,
  `login_id` int(11) NOT NULL,
  `admin_name` varchar(60) NOT NULL,
  `role` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`admin_id`, `login_id`, `admin_name`, `role`) VALUES
(1, 38, 'Biran Jobe', 'superadmin'),
(17, 63, 'admin1', 'admin');

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

--
-- Dumping data for table `application`
--

INSERT INTO `application` (`app_id`, `job_id`, `jobseeker_id`, `company_id`, `app_date`, `app_status`, `decision_date`) VALUES
(1, 1, 1, 1, '2020-02-09', '0', NULL),
(2, 1, 2, 1, '2020-02-09', '0', NULL),
(3, 2, 6, 1, '2020-02-09', '0', NULL),
(4, 2, 25, 1, '2020-02-02', '1', NULL),
(5, 4, 25, 2, '2020-03-07', '0', NULL),
(6, 3, 25, 1, '2020-03-11', '0', NULL),
(7, 9, 25, 1, '2020-05-26', '0', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `attachments`
--

CREATE TABLE `attachments` (
  `attachment_id` int(11) NOT NULL,
  `message_id` int(11) NOT NULL,
  `attachment` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `blog`
--

CREATE TABLE `blog` (
  `blog_id` int(255) NOT NULL,
  `admin_id` int(255) NOT NULL,
  `blog_title` varchar(255) NOT NULL,
  `date_posted` date NOT NULL,
  `blog_publisher` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `tags` varchar(255) NOT NULL,
  `blog_content` text NOT NULL,
  `blog_image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `blog`
--

INSERT INTO `blog` (`blog_id`, `admin_id`, `blog_title`, `date_posted`, `blog_publisher`, `category`, `tags`, `blog_content`, `blog_image`) VALUES
(1, 1, 'Tips to get recruited Fast', '2020-03-08', 'Biran Jobe', 'Recruitment', 'Recruiter', 'There are different methods of getting recruited', 'biran.jpeg'),
(2, 1, 'Writing the best Code', '2020-03-09', 'Ahmad Sarjo jallow', 'Software Development', 'Programmer', 'Tips and tricks to write the most efficient code', 'amadou.jpeg'),
(3, 2, 'Home Cooking Recipes', '2020-03-10', 'Jane Doe', 'Other', 'Cooking,Chef', 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then', 'janedoe.jpeg'),
(4, 2, 'DIY Home Automation', '2020-03-11', 'John Doe', 'Automation', 'DIY, Automation', 'Tips and Tricks to implement an effective home automation.', 'johndoe.jpeg'),
(5, 1, 'How to convince Recruiters', '2020-03-09', 'Biran Jobe', 'Recruitment', 'Recruiter,job', 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to', 'biran.jpeg'),
(6, 0, 'Content delivery', '2020-05-19', '', 'Popular posts', 'onlineMarketing', '<p>A supporting statement should include the following points:\n</p><p>\n</p><p>--Introducing yourself\n</p><p>\n</p><p>--Talking about the organisation\n</p><p>\n</p><p>--Provide evidence of your qualities\n</p><p>\n</p><p>--Finally keep your support statement concise</p>', '2628280.jpg'),
(7, 0, 'Getting started with your career', '2020-05-19', '', 'Popular posts', 'popular', '<p>lorem ipsum dolor sit amet ksbsjbsbjsbsk.</p><p>nksbgksbksbgskbksbksabvjsbjdbjdbvksvskv.</p><p>ksbskbkskffvsjvsjfbskfsnmshvs</p>', '279766mvc-process.png'),
(8, 1, 'Coronavirus impact', '2020-05-26', 'Biran Jobe', 'Popular posts', 'corona', '<p>kbvsbvksbvksbvsbvksbvsjbvsjvbsjvbsjb sivs</p><p>vs vjs skvbskvbsvbskvsvvvvvvvvvvvsvs</p><p>vsdnbjsvvvvvvvvvvvvvvvvvvvvvjsvjsvus svb us s s</p><p>&nbsp;sb js bsjb js&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;jbsjvbsjvbsbvsuvgsiuviwvwnfhcwubc</p>', '303278black clover.png');

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
(1, 2, 'Afrika Software Technologies', 'contact@afrosofttech.com', '5336171', 'Bundung Jola-kunda', 0, 'Gambia', 'GMD', '482645fb.png'),
(2, 3, 'Insist global', 'insist@gmail.com', '234545778', 'Kairaba', 0, 'Gambia', 'GMD', NULL),
(3, 12, 'Faalen Technologies', 'faalen@gmail.com', '6985632', 'Sukuta', 0, 'Gambia', 'GMD', NULL),
(4, 13, 'Safe Integrated Technologies', 'safe@gmail.com', '7885632', 'Banjul', 0, 'Gambia', 'GMD', NULL),
(5, 14, 'United Nations Humans Rights Council', 'hrc@un.com', '9832632', 'Serrekunda', 0, 'Gambia', 'GMD', NULL),
(6, 20, 'ASJ Foodtrading', 'asjfoodtrading@gmail.com', '3953032', 'Serrekunda market, Gambia', 110007, 'Gambia', 'GMD', '344553Facebook-people-770x433.jpg'),
(7, 33, 'Gaye Njoro', 'contact@gaye.com', '2336171', 'Bundung', 0, 'Gambia', 'GMD', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `contact_id` int(11) NOT NULL,
  `contact_name` varchar(255) NOT NULL,
  `contact_email` varchar(255) NOT NULL,
  `subject` varchar(255) NOT NULL,
  `message` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`contact_id`, `contact_name`, `contact_email`, `subject`, `message`) VALUES
(1, 'Biran', 'jobism@gmail.com', 'application cant submit', 'I am trying to apply but application cant seem to submit.');

-- --------------------------------------------------------

--
-- Table structure for table `hires`
--

CREATE TABLE `hires` (
  `hire_id` int(11) NOT NULL,
  `jobseeker_id` int(11) NOT NULL,
  `name` text NOT NULL,
  `email` varchar(40) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `task` text NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `hires`
--

INSERT INTO `hires` (`hire_id`, `jobseeker_id`, `name`, `email`, `phone`, `task`, `date`) VALUES
(1, 1, 'test', 'test@gmail.com', '2952173', 'I want an ecommerce website', '2020-05-23'),
(2, 6, 'test2', 'test2@gmail.com', '6652444', 'I want a static webiste', '2020-05-23'),
(3, 3, 'test3', 'test3@gmail.com', '5427812', 'I want a wordpress blog', '2020-05-23');

-- --------------------------------------------------------

--
-- Table structure for table `job`
--

CREATE TABLE `job` (
  `job_id` int(11) NOT NULL,
  `company_id` int(11) NOT NULL,
  `job_name` varchar(25) NOT NULL,
  `job_type` varchar(15) NOT NULL,
  `job_cat` varchar(25) NOT NULL,
  `requirements` text DEFAULT NULL,
  `job_location` varchar(50) NOT NULL,
  `date_posted` date NOT NULL,
  `job_contact_email` varchar(50) DEFAULT NULL,
  `job_contact_phone` varchar(30) DEFAULT NULL,
  `salary` float DEFAULT NULL,
  `status` int(1) NOT NULL,
  `featured` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `job`
--

INSERT INTO `job` (`job_id`, `company_id`, `job_name`, `job_type`, `job_cat`, `requirements`, `job_location`, `date_posted`, `job_contact_email`, `job_contact_phone`, `salary`, `status`, `featured`) VALUES
(1, 1, 'graphics designer', 'Full Time', 'Finance', '3 years experience, can use PS and Ai', 'Serrekunda', '2020-01-05', 'contact@afrosofttech.com', '8965686', 20000, 1, 1),
(2, 1, 'product engineer', 'Full Time', 'Graphic designers', '2+ years experience, can use PS and Ai, able to work in team', 'Serrekunda', '2020-01-06', 'asj.sarjo@gmail.com', '5336171', 15000, 0, 1),
(3, 1, 'software Engineer', 'Part Time', 'IT & Engineering', 'knows php,jquery, laravel,symphony and react', 'Serrekunda', '2020-01-10', 'contact@afrosofttech.com', '5336171', 25000, 0, 1),
(4, 2, 'product engineer', 'Full Time', 'Graphic designers', '2+ years experience, can use PS and Ai, able to work in team', 'Kairaba', '2020-01-05', 'insist@gmail.com', '8965686', 18000, 0, 0),
(6, 1, 'Product Engineer', 'Internship', 'IT & Engineering', '<p>You should be good with the following Technologies</p><p>*Php,Sql,Laravel,Jquery,Javascript,Html,Css and Bootstrap 4</p>', 'Serrekunda', '2020-02-16', 'asj.sarjo@gmail.com', '5336171', 5000, 0, 1),
(7, 1, 'HR', 'Full Time', 'IT & Engineering', '<p>Good communication skills</p><p>able to work under pressure</p><p>5+ years in experience</p><p>A woman</p>', 'Serrekunda', '2020-02-16', 'contact@gmail.com', '5336171', 18000, 0, 0),
(9, 1, 'Tester', 'Full Time', 'IT & Engineering', '<ol><li><b style=\"font-size: 1rem;\">Hello world, how are you doing in these trying times</b><br></li></ol><ol><li><b>master of laravel and jquery<sub>&nbsp;ffff</sub><sup>&nbsp;fff</sup></b></li></ol><h4><ol><li style=\"text-align: center; line-height: 1.4;\"><b>lumen and <span style=\"background-color: rgb(156, 198, 239);\"><u>testing</u></span></b>dokuwo.gm</li></ol></h4>', 'bundung', '2020-04-11', 'asj.sarjo@gmail.com', '5336171', 15000, 0, 1);

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
  `phone` varchar(20) DEFAULT NULL,
  `category` varchar(60) NOT NULL,
  `interest` varchar(20) NOT NULL DEFAULT 'Job',
  `seeksJob` varchar(5) NOT NULL DEFAULT 'yes',
  `skills` text DEFAULT NULL,
  `tag_line` varchar(30) NOT NULL,
  `education_level` varchar(30) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `country` varchar(30) DEFAULT NULL,
  `image` varchar(50) DEFAULT NULL,
  `CV` varchar(50) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `featured` int(2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `job_seeker`
--

INSERT INTO `job_seeker` (`jobseeker_id`, `login_id`, `fname`, `lname`, `fullName`, `phone`, `category`, `interest`, `seeksJob`, `skills`, `tag_line`, `education_level`, `address`, `dob`, `country`, `image`, `CV`, `description`, `featured`) VALUES
(1, 1, 'John', 'Doe', 'John Doe', '78965425', 'Art/Design', 'Freelance', 'yes', 'graphic designer, php', 'Graphic designer', 'B.sc.', 'serrekunda', '1996-07-27', 'Gambia', 'johndoe.jpeg', 'myCurrentCV.pdf', '', 0),
(2, 4, 'Jane', 'Doe', 'Jane Doe', '65985312', 'IT & Engineering', 'Job', 'yes', 'wordpress, bootstrap, python,Html,Css', 'Programmer', 'B.sc.', 'kotu', '1998-06-12', 'Gambia', 'janedoe.jpeg', 'myCurrentCV.pdf', '', 0),
(3, 5, 'Najatu Garba', 'Ahmed', 'Najatu Garba Ahmed', '6987163', 'Art/Design', 'Freelance', 'yes', 'Graphics design, UI/UX Designer', 'Graphic designer', 'M.sc.', 'Bundung', '1996-07-27', 'Gambia', 'naja.jpeg', 'myCurrentCV.pdf', '', 1),
(4, 6, 'Amadou Sarjo', 'Jallow', 'Amadou Sarjo Jallow', '5333163', 'IT & Engineering', 'Job', 'yes', 'UI/UX Designer, php, html, css, javascript, jquery,angular,wordpress,bootstrap,AI', 'Software Specialist', 'B.sc.', 'Bundung jola-kunda, Serrekunda', '1996-07-27', 'Gambia', 'amadou.jpeg', '', '', 0),
(5, 7, 'Sauda', 'Kabeer', 'Sauda kabeer', '3697163', 'Healthcare', 'Freelance', 'yes', 'Psycologist, leadership, motivational speaker', 'Clinical Psycologist', 'M.sc.', 'Banjul', '1995-03-27', 'Gambia', 'sauda.jpeg', 'myCurrentCV.pdf', '', 0),
(6, 8, 'Jamaal', 'Cham', 'Jamaal Cham', '427163', 'IT & Engineering', 'Freelance', 'yes', 'php, html, css, javascript, jquery, angular, wordpress', 'Programmer', 'B.sc.', 'Kotu', '1993-03-27', 'Gambia', 'jamaal.jpeg', 'myCurrentCV.pdf', '', 0),
(7, 9, 'Biran', 'Jobe', 'Biran Jobe', '789163', 'IT & Engineering', 'Freelance', 'yes', 'php, html, css, javascript, jquery, angular, wordpress', 'Programmer', 'B.sc.', 'Sukuta', '1997-03-13', 'Gambia', 'biran.jpeg', 'myCurrentCV.pdf', '', 1),
(8, 10, 'Abubacarr', 'Drammeh', 'Abubacarr Drammeh', '652163', 'Healthcare', 'Freelance', 'yes', 'Pharmacist, leadership, volunteer', 'Lab Technician', 'B.sc.', 'Farato', '1996-03-13', 'Gambia', 'adrammeh.jpeg', 'myCurrentCV.pdf', '', 0),
(9, 11, 'Fatu', 'Njie', 'Fatu Njie', '312163', 'Finance', 'Freelance', 'yes', 'Accounting, Business Management, ACCA, CAT', 'Accountant', 'B.sc.', 'tallinding', '1994-03-13', 'Gambia', 'fatu.jpeg', 'myCurrentCV.pdf', '', 0),
(10, 22, 'Aji fatu', 'gaye', 'Aji fatu gaye', '6985328', 'Sale/Markting', 'Freelance', 'yes', 'Leadership, volunteer,team work,Social Media Marketer', 'Lawyer', 'B.sc.', 'Serrekunda', '1998-09-19', 'Gambia', 'aji.jpeg', 'myCurrentCV.pdf', '', 0),
(11, 23, 'Samba', 'Bayo', 'Samba Bayo', '9856264', 'IT & Engineering', 'Job', 'yes', 'Php, laravel, java, c++, html, Css, mysql', 'Backend Specialist', 'B.sc.', 'Lamin Village', '1992-02-26', 'Gambia', NULL, NULL, '', 0),
(12, 24, 'Alagie', 'Nget', 'Alagie Nget', '98213254', 'IT & Engineering', 'Freelance', 'yes', 'Ruby, React, RoR, Html, Css, Java, Javascript', 'Software Developer', 'B.sc.', 'Latrikunda', '1993-02-20', 'Gambia', NULL, NULL, '', 0),
(13, 25, 'Mbanyick', 'Joof', 'Mbanyick Joof', '9867539', 'IT & Engineering', 'Freelance', 'yes', 'RoR, Ruby, Mongo, Jquery, Flutter, Android, Java, C++, C, Css, Html, Bootstrap', 'Lead Software Engineer', 'B.sc.', 'Manjai', '1990-02-04', 'Gambia', NULL, NULL, '', 0),
(14, 26, 'Mariam', 'Manneh', 'Mariam Manneh', '2867539', 'IT & Engineering', 'Job', 'yes', 'RoR, Ruby, Mongo, Jquery, php, Android, Java, C++, C, Css, Html, Bootstrap', 'Software Engineer', 'B.sc.', 'Manjai', '1997-02-04', 'Gambia', NULL, NULL, '', 0),
(16, 27, 'Rohey', 'Jawara', 'Rohey Jawara', '3867539', 'IT & Engineering', 'Freelance', 'yes', 'Php, Mysql, Javascript, Flutter, Android, Java, C++, C, Css, Html, Bootstrap', 'Programmer', 'B.sc.', 'Brikama', '1996-02-04', 'Gambia', NULL, NULL, '', 0),
(17, 28, 'Khadija', 'Joof', 'Khadija Joof', '2367539', 'IT & Engineering', 'Job', 'yes', 'RoR, Ruby, Mongo, Jquery, Docker, Android, C#, C, Css, Html, Bootstrap', 'Software Engineer', 'B.sc.', 'Banjul', '1994-02-04', 'Gambia', NULL, NULL, '', 0),
(18, 29, 'Fatu', 'Bah', 'Fatu Bah', '5765539', 'IT & Engineering', 'Job', 'yes', 'php, laravel, Mongo, Jquery, Flutter, Android, Java, C++, C, Css, Html, Bootstrap', 'Lead Software Engineer', 'M.sc.', 'Serrekunda', '1998-04-04', 'Gambia', NULL, NULL, '', 0),
(19, 30, 'Maya', 'Sallah', 'Maya Sallah', '937539', 'IT & Engineering', 'Job', 'yes', 'Nodejs, Expressjs, Mongo, Jquery, Flutter, Android, Java, C++, C, Css, Html, Bootstrap', 'Software Engineer', 'B.sc.', 'Manjai', '1997-01-04', 'Gambia', NULL, NULL, '', 0),
(20, 31, 'Binta', 'Jah', 'Binta Jah', '234539', 'IT & Engineering', 'Job', 'yes', 'Nodejs, Babeljs, Nginx, Jquery, Flutter, Android, Java, C++, C, Css, Html, Jasmine, Bootstrap', 'Lead Software Engineer', 'M.sc.', 'Manjai', '1987-02-04', 'Gambia', NULL, NULL, '', 0),
(21, 32, 'Nyima', 'Jallow', 'Nyima Jallow', '9179339', 'IT & Engineering', 'Job', 'yes', 'RoR, Ruby, Mongo, Jquery, Flutter, Android, Java, C++, C, Css, Html, Bootstrap, Materialise', 'Software Engineer', 'B.sc.', 'Manjai', '1994-02-04', 'Gambia', NULL, NULL, '', 0),
(25, 35, 'Amadou Sarjo', 'Jallow', 'Amadou Sarjo Jallow', '5336171', 'IT & Engineering', 'Freelance', 'yes', 'java, python, javascript, php, Jquery, R, C++, C, Prolog, Assembly Language, React, React Native, Html, Css, Bootstrap, Adobe photoshop, Adobe XD, Css', 'Software Specialist', 'High school diploma or equival', 'Bundung', '1996-07-27', 'Gambia', '35437img_20190202_122155.jpg', '981307mrc1.jpg', '', 1);

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
(2, 'contact@afrosofttech.com', '$2y$10$zdWDFaxdBER/uShlb0FFB.D6BCD8o5I8WK5w6KS8xmbRzSTI9u0lO', 'company', 'acc3e0404646c57502b480dc052c4fe1', 1),
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
(18, 'afri@gmail.com', '$2y$10$DyBJ5l2m', 'company', '816b112c6105b3ebd537828a39af48', 0),
(20, 'asjfoodtrading@gmail.com', '$2y$10$kPfHMJ4iQl8nrCbbepf/bONZqU6lGn6ovjdi5ROi27KAvKMIZtn.y', 'company', 'cc1aa436277138f61cda703991069eaf', 1),
(21, 'alf@gmail.com', '$2y$10$vPDHHwqiBu1Y5cvPtyVdY.yyhTMWBlO/oMNhLzZ9VOhqXWDXNbB6a', 'jobseeker', 'a4300b002bcfb71f291dac175d52df94', 0),
(22, 'aji@gmail.com', 'aji@123', 'jobseeker', '955d945d51fdvc9df5df29s85f5', 0),
(23, 'sbayo@insistglobal.com', 'sbayo@123', 'jobseeker', '5451s854121sdfgtsd1gf84842154', 0),
(24, 'anget@insistglobal.com', 'anget@123', 'jobseeker', 'sdc7x4187s7847we8478d87', 0),
(25, 'mjoof@insistglobal.com', 'mjoof@123', 'jobseeker', '56454dfsf4w8efwe4we485', 0),
(26, 'manneh@gmail.com', 'manneh@123', 'jobseeker', '77s42dfdefwe4we3485', 0),
(27, 'rjawara@gmail.com', 'rjawara@123', 'jobseeker', '46556c54dfsf4w8efwe4we485', 0),
(28, 'kjoof@insistglobal.com', 'kjoof@123', 'jobseeker', '34dt3434w8efwe4we485', 0),
(29, 'fbah@gmail.com', 'fbah@123', 'jobseeker', '988f9d4dfsf4w8efwe4we485', 0),
(30, 'maya@yahoo.com', 'msallah@123', 'jobseeker', '2s3254dfsf4w8efwe4we485', 0),
(31, 'bjah@gmail.com', 'bjah@123', 'jobseeker', '23dsd48efwe4we485', 0),
(32, 'Nyima@gmail.com', 'Nyima@123', 'jobseeker', '67h78dfsf4w8efwe4we485', 0),
(33, 'contact@gaye.com', '123@gaye', 'company', '6125521rgfrf525r1g5', 0),
(35, 'asjallow@gmail.com', '$2y$10$FGsC9Gahy3zaw/iGj3sUWOxaCLOsvLjGprGqulvEwQAOJqoo8jztW', 'jobseeker', '1141938ba2c2b13f5505d7c424ebae5f', 1),
(36, 'sam@gmail.com', '$2y$10$ySIOzN0t5vIV8eEiyZ1.he7FeML/TWw1RexSGWTBmqwu1fopA/cyq', 'jobseeker', 'd64a340bcb633f536d56e51874281454', 0),
(37, 'test@gmail.com', '$2y$10$6RYkp8r/IksiEiOZFwG.KujcZBV4w6PsYGHiE7ay0XzQnro8RQ66a', 'jobseeker', 'df7f28ac89ca37bf1abd2f6c184fe1cf', 0),
(38, 'contactadmin@gmail.com', '12345678@ast', 'admin', 'fsfsfshhdhdhdddhd', 1),
(63, 'admin1@gmail.com', '$2y$10$5fn7pONFhi49vAbWwGIzouT/cjMIeNPceA.AXCzGRl55iKDDOo7X.', 'admin', 'b6edc1cd1f36e45daf6d7824d7bb2283', 1),
(64, 'jobseeker@gmail.com', '$2y$10$4B0mMvydT.0Kz/7c7QX3xuCbxUwfaqnpL56AQ/N6ic615o7Rd3Dsq', 'jobseeker', 'e56954b4f6347e897f954495eab16a88', 0),
(65, 'companyA@gmail.com', '$2y$10$wMh7HG0RVN03C9SOSpxwCew0J2pou5iWcnOfAWkXR9os7cR09JZQ2', 'company', 'ec8956637a99787bd197eacd77acce5e', 1);

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
  `parent_message_id` int(11) DEFAULT NULL,
  `sender_delete_request` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `message`
--

INSERT INTO `message` (`message_id`, `creator_id`, `creator_name`, `subject`, `message_body`, `create_date`, `parent_message_id`, `sender_delete_request`) VALUES
(1, 1, 'John Doe', 'Software Engineer Position', '<p>Hello,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis tristique nulla. Morbi euismod imperdiet nisl, in posuere orci dignissim sit amet. Pellentesque id ex et tortor tincidunt pretium. Donec leo augue, euismod sit amet eros non, dapibus maximus dolor. Cras semper ligula in turpis congue, sit amet condimentum elit pellentesque. Quisque nec libero pellentesque, laoreet elit ut, imperdiet mauris. Proin sem eros, porta quis sodales sit amet, finibus tincidunt velit. Donec vehicula at nulla a mattis. Integer eget felis sodales, euismod nisl nec, rhoncus lorem. Vivamus hendrerit tristique ipsum a ullamcorper. Morbi euismod pellentesque purus vitae finibus. Donec eget orci consectetur lectus facilisis euismod.</p><p>Thanks</p>', '2020-01-01', NULL, 0),
(2, 1, 'John Doe', 'Graphics Designer Position', '<p>Hello,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis tristique nulla. Morbi euismod imperdiet nisl, in posuere orci dignissim sit amet. Pellentesque id ex et tortor tincidunt pretium. Donec leo augue, euismod sit amet eros non, dapibus maximus dolor. Cras semper ligula in turpis congue, sit amet condimentum elit pellentesque. Quisque nec libero pellentesque, laoreet elit ut, imperdiet mauris. Proin sem eros, porta quis sodales sit amet, finibus tincidunt velit. Donec vehicula at nulla a mattis. Integer eget felis sodales, euismod nisl nec, rhoncus lorem. Vivamus hendrerit tristique ipsum a ullamcorper. Morbi euismod pellentesque purus vitae finibus. Donec eget orci consectetur lectus facilisis euismod.</p><p>Thanks</p>', '2020-01-01', NULL, 0),
(3, 2, 'Afrika Software Technologies', 'Graphics Designer Position', '<p>Hello,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis tristique nulla. Morbi euismod imperdiet nisl, in posuere orci dignissim sit amet. Pellentesque id ex et tortor tincidunt pretium. Donec leo augue, euismod sit amet eros non, dapibus maximus dolor. Cras semper ligula in turpis congue, sit amet condimentum elit pellentesque. Quisque nec libero pellentesque, laoreet elit ut, imperdiet mauris. Proin sem eros, porta quis sodales sit amet, finibus tincidunt velit. Donec vehicula at nulla a mattis. Integer eget felis sodales, euismod nisl nec, rhoncus lorem. Vivamus hendrerit tristique ipsum a ullamcorper. Morbi euismod pellentesque purus vitae finibus. Donec eget orci consectetur lectus facilisis euismod.</p><p>Thanks</p>', '2020-01-05', 2, 0),
(4, 1, 'John Doe', 'Graphics Designer Position', '<p>Hello,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis tristique nulla. Morbi euismod imperdiet nisl, in posuere orci dignissim sit amet. Pellentesque id ex et tortor tincidunt pretium. Donec leo augue, euismod sit amet eros non, dapibus maximus dolor. Cras semper ligula in turpis congue, sit amet condimentum elit pellentesque. Quisque nec libero pellentesque, laoreet elit ut, imperdiet mauris. Proin sem eros, porta quis sodales sit amet, finibus tincidunt velit. Donec vehicula at nulla a mattis. Integer eget felis sodales, euismod nisl nec, rhoncus lorem. Vivamus hendrerit tristique ipsum a ullamcorper. Morbi euismod pellentesque purus vitae finibus. Donec eget orci consectetur lectus facilisis euismod.</p><p>Thanks</p>', '2020-01-01', 3, 0),
(5, 6, 'Amadou', 'Product Engineer job', '<p>Hello,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis tristique nulla. Morbi euismod imperdiet nisl, in posuere orci dignissim sit amet. Pellentesque id ex et tortor tincidunt pretium. Donec leo augue, euismod sit amet eros non, dapibus maximus dolor. Cras semper ligula in turpis congue, sit amet condimentum elit pellentesque. Quisque nec libero pellentesque, laoreet elit ut, imperdiet mauris. Proin sem eros, porta quis sodales sit amet, finibus tincidunt velit. Donec vehicula at nulla a mattis. Integer eget felis sodales, euismod nisl nec, rhoncus lorem. Vivamus hendrerit tristique ipsum a ullamcorper. Morbi euismod pellentesque purus vitae finibus. Donec eget orci consectetur lectus facilisis euismod.</p><p>Thanks</p>', '2020-01-01', NULL, 0),
(6, 2, 'Afrika Software Technologies', 'Product Engineer job', '<p>Hello,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis tristique nulla. Morbi euismod imperdiet nisl, in posuere orci dignissim sit amet. Pellentesque id ex et tortor tincidunt pretium. Donec leo augue, euismod sit amet eros non, dapibus maximus dolor. Cras semper ligula in turpis congue, sit amet condimentum elit pellentesque. Quisque nec libero pellentesque, laoreet elit ut, imperdiet mauris. Proin sem eros, porta quis sodales sit amet, finibus tincidunt velit. Donec vehicula at nulla a mattis. Integer eget felis sodales, euismod nisl nec, rhoncus lorem. Vivamus hendrerit tristique ipsum a ullamcorper. Morbi euismod pellentesque purus vitae finibus. Donec eget orci consectetur lectus facilisis euismod.</p><p>Thanks</p>', '2020-01-02', 5, 0),
(7, 6, 'Amadou', 'Product Engineer job', '<p>Hello,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis tristique nulla. Morbi euismod imperdiet nisl, in posuere orci dignissim sit amet. Pellentesque id ex et tortor tincidunt pretium. Donec leo augue, euismod sit amet eros non, dapibus maximus dolor. Cras semper ligula in turpis congue, sit amet condimentum elit pellentesque. Quisque nec libero pellentesque, laoreet elit ut, imperdiet mauris. Proin sem eros, porta quis sodales sit amet, finibus tincidunt velit. Donec vehicula at nulla a mattis. Integer eget felis sodales, euismod nisl nec, rhoncus lorem. Vivamus hendrerit tristique ipsum a ullamcorper. Morbi euismod pellentesque purus vitae finibus. Donec eget orci consectetur lectus facilisis euismod.</p><p>Thanks</p>', '2020-01-02', 6, 0),
(8, 7, 'Saudah', 'Status of the job', '<p>Hello,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis tristique nulla. Morbi euismod imperdiet nisl, in posuere orci dignissim sit amet. Pellentesque id ex et tortor tincidunt pretium. Donec leo augue, euismod sit amet eros non, dapibus maximus dolor. Cras semper ligula in turpis congue, sit amet condimentum elit pellentesque. Quisque nec libero pellentesque, laoreet elit ut, imperdiet mauris. Proin sem eros, porta quis sodales sit amet, finibus tincidunt velit. Donec vehicula at nulla a mattis. Integer eget felis sodales, euismod nisl nec, rhoncus lorem. Vivamus hendrerit tristique ipsum a ullamcorper. Morbi euismod pellentesque purus vitae finibus. Donec eget orci consectetur lectus facilisis euismod.</p><p>Thanks</p>', '2020-01-04', NULL, 0),
(9, 8, 'Jamaal', 'Engineer Engineer job', '<p>Hello,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis tristique nulla. Morbi euismod imperdiet nisl, in posuere orci dignissim sit amet. Pellentesque id ex et tortor tincidunt pretium. Donec leo augue, euismod sit amet eros non, dapibus maximus dolor. Cras semper ligula in turpis congue, sit amet condimentum elit pellentesque. Quisque nec libero pellentesque, laoreet elit ut, imperdiet mauris. Proin sem eros, porta quis sodales sit amet, finibus tincidunt velit. Donec vehicula at nulla a mattis. Integer eget felis sodales, euismod nisl nec, rhoncus lorem. Vivamus hendrerit tristique ipsum a ullamcorper. Morbi euismod pellentesque purus vitae finibus. Donec eget orci consectetur lectus facilisis euismod.</p><p>Thanks</p>', '2020-01-07', NULL, 0),
(10, 9, 'Biran', 'Product Engineer job', '<p>Hello,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis tristique nulla. Morbi euismod imperdiet nisl, in posuere orci dignissim sit amet. Pellentesque id ex et tortor tincidunt pretium. Donec leo augue, euismod sit amet eros non, dapibus maximus dolor. Cras semper ligula in turpis congue, sit amet condimentum elit pellentesque. Quisque nec libero pellentesque, laoreet elit ut, imperdiet mauris. Proin sem eros, porta quis sodales sit amet, finibus tincidunt velit. Donec vehicula at nulla a mattis. Integer eget felis sodales, euismod nisl nec, rhoncus lorem. Vivamus hendrerit tristique ipsum a ullamcorper. Morbi euismod pellentesque purus vitae finibus. Donec eget orci consectetur lectus facilisis euismod.</p><p>Thanks</p>', '2020-01-10', NULL, 0),
(11, 10, 'Abubacarr', 'Graphics Designer Position', '<p>Hello,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis tristique nulla. Morbi euismod imperdiet nisl, in posuere orci dignissim sit amet. Pellentesque id ex et tortor tincidunt pretium. Donec leo augue, euismod sit amet eros non, dapibus maximus dolor. Cras semper ligula in turpis congue, sit amet condimentum elit pellentesque. Quisque nec libero pellentesque, laoreet elit ut, imperdiet mauris. Proin sem eros, porta quis sodales sit amet, finibus tincidunt velit. Donec vehicula at nulla a mattis. Integer eget felis sodales, euismod nisl nec, rhoncus lorem. Vivamus hendrerit tristique ipsum a ullamcorper. Morbi euismod pellentesque purus vitae finibus. Donec eget orci consectetur lectus facilisis euismod.</p><p>Thanks</p>', '2020-01-12', NULL, 0),
(12, 11, 'Fatu', 'Product Engineer job', '<p>Hello,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis tristique nulla. Morbi euismod imperdiet nisl, in posuere orci dignissim sit amet. Pellentesque id ex et tortor tincidunt pretium. Donec leo augue, euismod sit amet eros non, dapibus maximus dolor. Cras semper ligula in turpis congue, sit amet condimentum elit pellentesque. Quisque nec libero pellentesque, laoreet elit ut, imperdiet mauris. Proin sem eros, porta quis sodales sit amet, finibus tincidunt velit. Donec vehicula at nulla a mattis. Integer eget felis sodales, euismod nisl nec, rhoncus lorem. Vivamus hendrerit tristique ipsum a ullamcorper. Morbi euismod pellentesque purus vitae finibus. Donec eget orci consectetur lectus facilisis euismod.</p><p>Thanks</p>', '2020-01-20', NULL, 0),
(13, 5, 'Najatu Garba Ahmed', 'love and Clarification', '<p>Hello,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis tristique nulla. Morbi euismod imperdiet nisl, in posuere orci dignissim sit amet. Pellentesque id ex et tortor tincidunt pretium. Donec leo augue, euismod sit amet eros non, dapibus maximus dolor. Cras semper ligula in turpis congue, sit amet condimentum elit pellentesque. Quisque nec libero pellentesque, laoreet elit ut, imperdiet mauris. Proin sem eros, porta quis sodales sit amet, finibus tincidunt velit. Donec vehicula at nulla a mattis. Integer eget felis sodales, euismod nisl nec, rhoncus lorem. Vivamus hendrerit tristique ipsum a ullamcorper. Morbi euismod pellentesque purus vitae finibus. Donec eget orci consectetur lectus facilisis euismod.</p><p>Thanks</p>', '2020-01-25', NULL, 0),
(49, 2, 'Afrika Software Technologies', 'Hand out CV', '<p>Hello,</p><p>Bitch I dont really know why you need my cv but i just want to tell you that&nbsp; i really dont like sharing my information.</p><p>Thanks</p>', '2020-01-16', NULL, 0),
(50, 2, 'Afrika Software Technologies', 'paco', '<p>hello,</p><p>no def</p><p>thanks</p>', '2020-01-17', NULL, 0),
(51, 2, 'Afrika Software Technologies', 'Baby', '<p>Hello,</p><p>How are you? long time no see.</p><p>Regards,</p><p>Naja baby</p>', '2020-01-17', NULL, 0),
(52, 2, 'Afrika Software Technologies', 'love and Clarification', '<p>Hello,</p><p>I still have those feelings. I guess they are mutual. I will contact you later.</p><p>Bye</p><p>Naja</p>', '2020-01-17', 13, 0),
(53, 2, 'Afrika Software Technologies', 'Product Engineer job', '<p>hello,</p><p>the job is available.</p><p>thanks</p>', '2020-01-17', 12, 0),
(54, 2, 'Afrika Software Technologies', 'Hand out CV', '<p>Hello,</p><p>Bitch I dont really know why you need my cv but i just want to tell you thatÂ  i really dont like sharing my information.</p><p>Thanks</p>', '2020-01-18', NULL, 0),
(57, 2, 'Afrika Software Technologies', 'yes man', '<p>hello,</p><p>how are you doing?</p><p>thanks.</p>', '2020-01-18', NULL, 0),
(58, 2, 'Afrika Software Technologies', 'Engineer Engineer job', '<p>hello jamaal,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non quam mollis, semper massa aliquet, fermentum ante. Praesent blandit posuere efficitur. Pellentesque ac justo vel ante scelerisque viverra. Etiam sit amet tempor leo. Morbi a nibh congue, tempor nulla in, egestas lectus. Quisque dictum pellentesque felis a auctor. Donec tempus ligula ut dui tempor, nec vehicula nulla scelerisque. Mauris tristique erat dui, in iaculis magna accumsan eget. Mauris cursus lectus sed lacus mattis posuere. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer fermentum eros auctor velit interdum, eget dapibus enim varius. Morbi non felis ut dolor lacinia fringilla ut eu elit. Nullam et nulla sit amet augue hendrerit aliquam. Proin iaculis urna diam, non laoreet sapien vulputate nec. Donec sed vulputate urna.</p><p>Thanks.</p>', '2020-01-26', 9, 0),
(60, 2, 'Afrika Software Technologies', 'LOVE and HATE', '<p>Hello naja,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non quam mollis, semper massa aliquet, fermentum ante. Praesent blandit posuere efficitur. Pellentesque ac justo vel ante scelerisque viverra. Etiam sit amet tempor leo. Morbi a nibh congue, tempor nulla in, egestas lectus. Quisque dictum pellentesque felis a auctor. Donec tempus ligula ut dui tempor, nec vehicula nulla scelerisque. Mauris tristique erat dui, in iaculis magna accumsan eget. Mauris cursus lectus sed lacus mattis posuere. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer fermentum eros auctor velit interdum, eget dapibus enim varius. Morbi non felis ut dolor lacinia fringilla ut eu elit. Nullam et nulla sit amet augue hendrerit aliquam. Proin iaculis urna diam, non laoreet sapien vulputate nec. Donec sed vulputate urna.</p><p>Bye darling.</p>', '2020-01-26', NULL, 0),
(63, 2, 'Afrika Software Technologies', 'CV updation', '<p>Hello hr,</p><p>Proin viverra ornare ultricies. Sed luctus nibh et dictum tincidunt. Morbi porttitor sem nisi, ornare volutpat odio ullamcorper non. Sed aliquet malesuada turpis vel euismod. Pellentesque mattis convallis consequat. Nulla tincidunt dui pulvinar, ultricies neque et, ultrices magna. Mauris lobortis, sapien id egestas bibendum, sapien erat convallis sem, et tristique lacus mauris in turpis. Proin a bibendum diam. Donec iaculis nisi diam, quis porta orci pharetra in. Proin dolor ante, pretium eget sapien ut, suscipit ullamcorper diam. Vestibulum porttitor, magna vel tempus pellentesque, elit dolor dignissim ex, ut pulvinar lorem ex ut nulla. Curabitur ultrices arcu orci, a dictum massa euismod quis. Phasellus tempus nec massa pretium maximus.</p><p>Regards,</p><p>Amadou.</p>', '2020-01-26', NULL, 0),
(64, 2, 'Afrika Software Technologies', 'love and Clarification', '<p>Hello,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis tristique nulla. Morbi euismod imperdiet nisl, in posuere orci dignissim sit amet. Pellentesque id ex et tortor tincidunt pretium. Donec leo augue, euismod sit amet eros non, dapibus maximus dolor. Cras semper ligula in turpis congue, sit amet condimentum elit pellentesque. Quisque nec libero pellentesque, laoreet elit ut, imperdiet mauris. Proin sem eros, porta quis sodales sit amet, finibus tincidunt velit. Donec vehicula at nulla a mattis. Integer eget felis sodales, euismod nisl nec, rhoncus lorem. Vivamus hendrerit tristique ipsum a ullamcorper. Morbi euismod pellentesque purus vitae finibus. Donec eget orci consectetur lectus facilisis euismod.</p><p>Thanks</p>', '2020-01-27', NULL, 0),
(65, 2, 'Afrika Software Technologies', 'love and Clarification', '<p>Hello,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis tristique nulla. Morbi euismod imperdiet nisl, in posuere orci dignissim sit amet. Pellentesque id ex et tortor tincidunt pretium. Donec leo augue, euismod sit amet eros non, dapibus maximus dolor. Cras semper ligula in turpis congue, sit amet condimentum elit pellentesque. Quisque nec libero pellentesque, laoreet elit ut, imperdiet mauris. Proin sem eros, porta quis sodales sit amet, finibus tincidunt velit. Donec vehicula at nulla a mattis. Integer eget felis sodales, euismod nisl nec, rhoncus lorem. Vivamus hendrerit tristique ipsum a ullamcorper. Morbi euismod pellentesque purus vitae finibus. Donec eget orci consectetur lectus facilisis euismod.</p><p>Thanks</p>', '2020-01-27', NULL, 0),
(66, 2, 'Afrika Software Technologies', 'Graphics Designer Position', '<p>Hello,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis tristique nulla. Morbi euismod imperdiet nisl, in posuere orci dignissim sit amet. Pellentesque id ex et tortor tincidunt pretium. Donec leo augue, euismod sit amet eros non, dapibus maximus dolor. Cras semper ligula in turpis congue, sit amet condimentum elit pellentesque. Quisque nec libero pellentesque, laoreet elit ut, imperdiet mauris. Proin sem eros, porta quis sodales sit amet, finibus tincidunt velit. Donec vehicula at nulla a mattis. Integer eget felis sodales, euismod nisl nec, rhoncus lorem. Vivamus hendrerit tristique ipsum a ullamcorper. Morbi euismod pellentesque purus vitae finibus. Donec eget orci consectetur lectus facilisis euismod.</p><p>Thanks</p>', '2020-01-28', NULL, 0),
(67, 2, 'Afrika Software Technologies', 'Dismissal', '<p>Hello,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin orci elit, congue sit amet tortor at, gravida efficitur augue. Maecenas placerat lacus vitae neque mattis consectetur. Aliquam cursus, nibh id cursus suscipit, tortor ligula aliquet felis, sed fringilla urna dui ac erat. Nam a viverra enim. Cras efficitur elementum placerat. Aenean ac dui sem. Ut libero sem, lobortis non convallis ac, venenatis non arcu. Sed eleifend molestie vehicula. Curabitur iaculis semper arcu, sit amet gravida enim porttitor sit amet. Nam ac pellentesque metus, sit amet rutrum nibh. Nullam id felis non nibh tincidunt pellentesque. Nullam nec mattis nunc. Ut aliquam augue lectus, at aliquam arcu posuere ac. Aliquam erat volutpat. Praesent tincidunt ipsum velit. Phasellus ut metus a est posuere fermentum.\r</p><p>Proin aliquam efficitur neque, luctus malesuada turpis vehicula vitae. Aliquam erat volutpat. Integer finibus ipsum quis tristique vehicula. Etiam tempus sit amet erat iaculis iaculis. Donec quam justo, vestibulum vitae suscipit et, tempus vitae tortor. Aliquam placerat odio eget lacinia mattis. Proin magna nisl, pretium a orci vitae, fermentum mollis quam. Morbi vitae eros tortor. Suspendisse varius, dolor ornare feugiat eleifend, dui nisi congue eros, eu facilisis ipsum ipsum consequat velit. Phasellus a posuere quam, vel fringilla dui. Etiam posuere magna quam, vel faucibus ipsum dapibus non. Fusce sodales massa in urna pellentesque tristique.\r</p><p>Curabitur nec ultricies neque. Vivamus non iaculis enim, eget pulvinar metus. Vestibulum tincidunt pulvinar eros, vitae facilisis orci aliquam vehicula. Suspendisse elit libero, accumsan in efficitur fringilla, dapibus ut leo. Proin nec commodo nibh, ut blandit lacus. Morbi sit amet tortor imperdiet, faucibus augue sit amet, tristique ante. Phasellus finibus, mi eu rutrum sollicitudin, neque massa cursus mi, in sagittis metus magna quis sapien. Nam in accumsan odio, nec iaculis ex. Nam sagittis nisi vitae ligula dapibus, eget tristique est porta. Maecenas consectetur arcu sed pharetra molestie.</p><p>Good luck.</p>', '2020-01-28', NULL, 0),
(68, 2, 'Afrika Software Technologies', 'Dismiss', '<p>hello,</p><p>Proin aliquam efficitur neque, luctus malesuada turpis vehicula vitae. Aliquam erat volutpat. Integer finibus ipsum quis tristique vehicula. Etiam tempus sit amet erat iaculis iaculis. Donec quam justo, vestibulum vitae suscipit et, tempus vitae tortor. Aliquam placerat odio eget lacinia mattis. Proin magna nisl, pretium a orci vitae, fermentum mollis quam. Morbi vitae eros tortor. Suspendisse varius, dolor ornare feugiat eleifend, dui nisi congue eros, eu facilisis ipsum ipsum consequat velit. Phasellus a posuere quam, vel fringilla dui. Etiam posuere magna quam, vel faucibus ipsum dapibus non. Fusce sodales massa in urna pellentesque tristique.</p><p>Bye.</p>', '2020-01-28', NULL, 0),
(69, 2, 'Afrika Software Technologies', 'REVIEW', '<p>Hello,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin orci elit, congue sit amet tortor at, gravida efficitur augue. Maecenas placerat lacus vitae neque mattis consectetur. Aliquam cursus, nibh id cursus suscipit, tortor ligula aliquet felis, sed fringilla urna dui ac erat. Nam a viverra enim. Cras efficitur elementum placerat. Aenean ac dui sem. Ut libero sem, lobortis non convallis ac, venenatis non arcu. Sed eleifend molestie vehicula. Curabitur iaculis semper arcu, sit amet gravida enim porttitor sit amet. Nam ac pellentesque metus, sit amet rutrum nibh. Nullam id felis non nibh tincidunt pellentesque. Nullam nec mattis nunc. Ut aliquam augue lectus, at aliquam arcu posuere ac. Aliquam erat volutpat. Praesent tincidunt ipsum velit. Phasellus ut metus a est posuere fermentum.\r</p><p>Proin aliquam efficitur neque, luctus malesuada turpis vehicula vitae. Aliquam erat volutpat. Integer finibus ipsum quis tristique vehicula. Etiam tempus sit amet erat iaculis iaculis. Donec quam justo, vestibulum vitae suscipit et, tempus vitae tortor. Aliquam placerat odio eget lacinia mattis. Proin magna nisl, pretium a orci vitae, fermentum mollis quam. Morbi vitae eros tortor. Suspendisse varius, dolor ornare feugiat eleifend, dui nisi congue eros, eu facilisis ipsum ipsum consequat velit. Phasellus a posuere quam, vel fringilla dui. Etiam posuere magna quam, vel faucibus ipsum dapibus non. Fusce sodales massa in urna pellentesque tristique.</p><p>Bye.</p>', '2020-01-28', NULL, 0),
(70, 2, 'Afrika Software Technologies', 'SUCKER', '<p>hello,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin orci elit, congue sit amet tortor at, gravida efficitur augue. Maecenas placerat lacus vitae neque mattis consectetur. Aliquam cursus, nibh id cursus suscipit, tortor ligula aliquet felis, sed fringilla urna dui ac erat. Nam a viverra enim. Cras efficitur elementum placerat. Aenean ac dui sem. Ut libero sem, lobortis non convallis ac, venenatis non arcu. Sed eleifend molestie vehicula. Curabitur iaculis semper arcu, sit amet gravida enim porttitor sit amet. Nam ac pellentesque metus, sit amet rutrum nibh. Nullam id felis non nibh tincidunt pellentesque. Nullam nec mattis nunc. Ut aliquam augue lectus, at aliquam arcu posuere ac. Aliquam erat volutpat. Praesent tincidunt ipsum velit. Phasellus ut metus a est posuere fermentum.\r</p><p>\r</p><p>Proin aliquam efficitur neque, luctus malesuada turpis vehicula vitae. Aliquam erat volutpat. Integer finibus ipsum quis tristique vehicula. Etiam tempus sit amet erat iaculis iaculis. Donec quam justo, vestibulum vitae suscipit et, tempus vitae tortor. Aliquam placerat odio eget lacinia mattis. Proin magna nisl, pretium a orci vitae, fermentum mollis quam. Morbi vitae eros tortor. Suspendisse varius, dolor ornare feugiat eleifend, dui nisi congue eros, eu facilisis ipsum ipsum consequat velit. Phasellus a posuere quam, vel fringilla dui. Etiam posuere magna quam, vel faucibus ipsum dapibus non. Fusce sodales massa in urna pellentesque tristique.</p><p>Bye.</p>', '2020-01-28', NULL, 0),
(71, 2, 'Afrika Software Technologies', 'Product Engineer job', '<p>Hello,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis tristique nulla. Morbi euismod imperdiet nisl, in posuere orci dignissim sit amet. Pellentesque id ex et tortor tincidunt pretium. Donec leo augue, euismod sit amet eros non, dapibus maximus dolor. Cras semper ligula in turpis congue, sit amet condimentum elit pellentesque. Quisque nec libero pellentesque, laoreet elit ut, imperdiet mauris. Proin sem eros, porta quis sodales sit amet, finibus tincidunt velit. Donec vehicula at nulla a mattis. Integer eget felis sodales, euismod nisl nec, rhoncus lorem. Vivamus hendrerit tristique ipsum a ullamcorper. Morbi euismod pellentesque purus vitae finibus. Donec eget orci consectetur lectus facilisis euismod.</p><p>Thanks</p>', '2020-01-30', NULL, 0),
(72, 2, 'Afrika Software Technologies', 'I miss you', '<p>Hello naja,</p><p>i really wanted to contact you today but i then realised that you will probably ask me a lot of questions, so i have decided not to contact you at all.</p><p>Thanks.</p>', '2020-02-02', NULL, 0),
(73, 2, 'Afrika Software Technologies', 'bestie', '<p>hello saudah,</p><p>how is your day today.</p><p>thanks.</p>', '2020-02-02', NULL, 0),
(74, 2, 'Afrika Software Technologies', 'Graphics Designer Position', '<p>Hello,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis tristique nulla. Morbi euismod imperdiet nisl, in posuere orci dignissim sit amet. Pellentesque id ex et tortor tincidunt pretium. Donec leo augue, euismod sit amet eros non, dapibus maximus dolor. Cras semper ligula in turpis congue, sit amet condimentum elit pellentesque. Quisque nec libero pellentesque, laoreet elit ut, imperdiet mauris. Proin sem eros, porta quis sodales sit amet, finibus tincidunt velit. Donec vehicula at nulla a mattis. Integer eget felis sodales, euismod nisl nec, rhoncus lorem. Vivamus hendrerit tristique ipsum a ullamcorper. Morbi euismod pellentesque purus vitae finibus. Donec eget orci consectetur lectus facilisis euismod.</p><p>Thanks</p>', '2020-02-02', NULL, 0),
(75, 20, 'ASJ Foodtrading', 'Job offer', '<p>Hello john,</p><p>I have checked your CV and i really like it. I want to offer you a job in our esteem company. Hoping to hear from you soon.</p><p>Thanks,</p><p>ASJ Foodtrading.</p>', '2020-02-12', NULL, 0),
(76, 20, 'ASJ Foodtrading', 'You are fired', '<p>Hello jamaal,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at mauris enim. Maecenas rutrum elit pretium nisl scelerisque, at condimentum purus sollicitudin. Sed vulputate, velit in sagittis euismod, dolor lacus ultrices nibh, eu egestas tellus urna non lacus. Sed vestibulum congue erat non rhoncus. Aliquam vel iaculis dolor, nec tristique lectus. Nam enim nulla, placerat ut dapibus id, sagittis nec sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris auctor magna et facilisis ultrices. Vestibulum pellentesque venenatis ipsum, ut efficitur ipsum fringilla eu. Quisque dapibus, tellus vehicula interdum pharetra, nisi leo auctor augue, sit amet dapibus libero sem at nunc. Curabitur ut vestibulum nunc. Nam nec auctor enim. Sed pretium dolor a nulla condimentum facilisis. Phasellus ultricies eget lorem eu sagittis. Maecenas sollicitudin lacinia purus, nec condimentum nibh.</p><p>Goodluck,</p><p>ASJ Foodtrading.</p>', '2020-02-12', NULL, 0),
(77, 20, 'ASJ Foodtrading', 'Welcome home', '<p>Hello star,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at mauris enim. Maecenas rutrum elit pretium nisl scelerisque, at condimentum purus sollicitudin. Sed vulputate, velit in sagittis euismod, dolor lacus ultrices nibh, eu egestas tellus urna non lacus. Sed vestibulum congue erat non rhoncus. Aliquam vel iaculis dolor, nec tristique lectus. Nam enim nulla, placerat ut dapibus id, sagittis nec sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris auctor magna et facilisis ultrices. Vestibulum pellentesque venenatis ipsum, ut efficitur ipsum fringilla eu. Quisque dapibus, tellus vehicula interdum pharetra, nisi leo auctor augue, sit amet dapibus libero sem at nunc. Curabitur ut vestibulum nunc. Nam nec auctor enim. Sed pretium dolor a nulla condimentum facilisis. Phasellus ultricies eget lorem eu sagittis. Maecenas sollicitudin lacinia purus, nec condimentum nibh.</p><p>Regards,</p><p>ASJ Foodtrading.</p>', '2020-02-12', NULL, 0),
(78, 27, 'Rohey Jawara', 'Sales agent', '<p>Hello Asjfoodtrading,</p>\r\n\r\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lobortis augue vestibulum, ullamcorper diam sit amet, tincidunt eros. Nulla molestie pharetra eros nec scelerisque. Nam iaculis blandit risus id posuere. Ut fermentum nibh a orci scelerisque mattis. Praesent molestie laoreet nunc, ac fermentum mauris hendrerit a. Praesent luctus in lacus at varius. Suspendisse rhoncus lacus tortor, sit amet dapibus nunc cursus gravida.</p>\r\n\r\n<p>Regards,<p>\r\n<p>Naja.</p>', '2020-02-15', NULL, 0),
(79, 2, 'Afrika Software Technologies', 'graphic designer', '<p>Hello Doe Jane,</p><p>I really like your cv and we would like to invite you for an interview.</p><p>Regards,</p><p>Afrika Software Technologies.</p>', '2020-02-16', NULL, 0),
(80, 13, 'Safe Integrated Technologies', 'Php job offer', '<p>Hello Amadou,</p><p></p>We have reviewed your cv and we will really love to have you as part of our team. Your experience is a huge factor in us offering you this job and we hope you will really accept this offer.</p><p>Regards,</p><p>Safe Technologies.</p>', '2020-02-23', NULL, 0),
(82, 35, 'Amadou Sarjo Jallow', 'Software Engineer position', '<p>Hello hr,</p><p>with regards to the above mentioned, I write to apply for the position of a software engineer in your company which plans to recruit some the best engineers out there.</p><p>Regards,</p><p>Amadou Sarjo jallow.</p>', '2020-02-28', NULL, 0),
(90, 2, 'Afrika Software Technologies', 'Software Engineer Position', '<p>Hello,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis tristique nulla. Morbi euismod imperdiet nisl, in posuere orci dignissim sit amet. Pellentesque id ex et tortor tincidunt pretium. Donec leo augue, euismod sit amet eros non, dapibus maximus dolor. Cras semper ligula in turpis congue, sit amet condimentum elit pellentesque. Quisque nec libero pellentesque, laoreet elit ut, imperdiet mauris. Proin sem eros, porta quis sodales sit amet, finibus tincidunt velit. Donec vehicula at nulla a mattis. Integer eget felis sodales, euismod nisl nec, rhoncus lorem. Vivamus hendrerit tristique ipsum a ullamcorper. Morbi euismod pellentesque purus vitae finibus. Donec eget orci consectetur lectus facilisis euismod.</p><p>Thanks</p>', '2020-02-29', NULL, 0),
(100, 2, 'Afrika Software Technologies', 'product engineer', '<p>Hello,</p><p>You have been accepted by Afrika Software Technologies for the position of product engineer.</p><p>Regards,</p><p>Career.</p>', '2020-03-08', NULL, 0),
(101, 2, 'Afrika Software Technologies', 'software Engineer', '<p>Hello,</p><p>Congratulations! You have been accepted by Afrika Software Technologies for the position of software Engineer You will be contacted soon.</p><p>Regards,</p><p>Career.</p>', '2020-03-11', NULL, 0),
(118, 35, 'Amadou Sarjo Jallow', 'testing', '<p><span style=\"font-family: &quot;Arial Black&quot;;\">ï»¿hello Afrosofttech,</span></p><p><span style=\"font-family: &quot;Arial Black&quot;;\">Here is a list of things i want you to do for me:</span></p><ol><li><span style=\"font-family: &quot;Arial Black&quot;;\">&nbsp;am using summernote text editor in a rails app.</span></li><li><span style=\"font-family: &quot;Comic Sans MS&quot;;\">ï»¿ am using summernote text editor in a rails app.</span></li><li><span style=\"font-family: &quot;Comic Sans MS&quot;;\">&nbsp;am using summernote text editor in a rails app.</span></li><li><span style=\"font-family: Helvetica;\">ï»¿ am using summernote text editor in a rails app.</span></li></ol><p><span style=\"font-family: Helvetica;\">regards,</span></p><p><span style=\"font-family: Helvetica;\">Amadou Sarjo Jallow<br></span><span style=\"font-family: &quot;Comic Sans MS&quot;;\"><br></span><span style=\"font-family: &quot;Arial Black&quot;;\"><br></span><br></p>', '2020-04-11', NULL, 0),
(119, 35, 'Amadou Sarjo Jallow', 'testing', '<p><span style=\"font-family: &quot;Arial Black&quot;;\">ï»¿hello Afrosofttech,</span></p><p><span style=\"font-family: &quot;Arial Black&quot;;\">Here is a list of things i want you to do for me:</span></p><ol><li><span style=\"font-family: &quot;Arial Black&quot;;\">&nbsp;am using summernote text editor in a rails app.</span></li><li><span style=\"font-family: &quot;Comic Sans MS&quot;;\">ï»¿ am using summernote text editor in a rails app.</span></li><li><span style=\"font-family: &quot;Comic Sans MS&quot;;\">&nbsp;am using summernote text editor in a rails app.</span></li><li><span style=\"font-family: Helvetica;\">ï»¿ am using summernote text editor in a rails app.</span></li></ol><p><span style=\"font-family: Helvetica;\">regards,</span></p><p><span style=\"font-family: Helvetica;\">Amadou Sarjo Jallow<br></span><span style=\"font-family: &quot;Comic Sans MS&quot;;\"><br></span><span style=\"font-family: &quot;Arial Black&quot;;\"><br></span><br></p>', '2020-04-11', NULL, 0),
(120, 35, 'Amadou Sarjo Jallow', 'testing', '<p><span style=\"font-family: &quot;Arial Black&quot;;\">ï»¿hello Afrosofttech,</span></p><p><span style=\"font-family: &quot;Arial Black&quot;;\">Here is a list of things i want you to do for me:</span></p><ol><li><span style=\"font-family: &quot;Arial Black&quot;;\">&nbsp;am using summernote text editor in a rails app.</span></li><li><span style=\"font-family: &quot;Comic Sans MS&quot;;\">ï»¿ am using summernote text editor in a rails app.</span></li><li><span style=\"font-family: &quot;Comic Sans MS&quot;;\">&nbsp;am using summernote text editor in a rails app.</span></li><li><span style=\"font-family: Helvetica;\">ï»¿ am using summernote text editor in a rails app.</span></li></ol><p><span style=\"font-family: Helvetica;\">regards,</span></p><p><span style=\"font-family: Helvetica;\">Amadou Sarjo Jallow<br></span><span style=\"font-family: &quot;Comic Sans MS&quot;;\"><br></span><span style=\"font-family: &quot;Arial Black&quot;;\"><br></span><br></p>', '2020-04-11', NULL, 0),
(121, 2, 'Afrika Software Technologies', 'laravel developer', '<p><span style=\"font-family: Arial;\">ï»¿</span><span style=\"font-family: &quot;Arial Black&quot;;\">ï»¿Hello ams,</span></p><p><span style=\"font-family: Impact;\">ï»¿after reviewing your cv, i want to offer you a job as a lead engineer in my company. Below are the requirements:</span></p><ol><li><span style=\"font-family: &quot;Comic Sans MS&quot;;\">ï»¿2 years experience in laravel</span></li><li><span style=\"font-family: &quot;Comic Sans MS&quot;;\">3 years experience using slim php</span></li><li><span style=\"font-family: &quot;Comic Sans MS&quot;;\">solid foundation in js and js frameworks</span></li></ol><p><span style=\"font-family: &quot;Comic Sans MS&quot;;\">Regards,</span></p><p><font face=\"Comic Sans MS\">Afrika Software Technologies</font></p>', '2020-04-11', NULL, 0);

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
(7, 2, 7, 0, '0'),
(8, 2, 8, 0, '0'),
(9, 2, 9, 0, '0'),
(10, 2, 10, 1, '0'),
(11, 2, 11, 1, '0'),
(12, 2, 12, 1, '0'),
(13, 2, 13, 1, '0'),
(18, 11, 49, 0, '0'),
(19, 6, 50, 0, '0'),
(20, 5, 51, 0, '0'),
(21, 5, 52, 0, '0'),
(22, 11, 53, 0, '0'),
(23, 10, 54, 0, '0'),
(26, 8, 57, 0, '0'),
(27, 8, 58, 0, '0'),
(29, 5, 60, 0, '0'),
(32, 11, 63, 0, '0'),
(33, 4, 64, 0, '0'),
(34, 5, 64, 0, '0'),
(35, 5, 66, 0, '0'),
(36, 8, 67, 0, '0'),
(37, 8, 68, 0, '0'),
(38, 9, 69, 0, '0'),
(39, 8, 70, 0, '0'),
(40, 1, 71, 0, '0'),
(41, 5, 72, 0, '0'),
(42, 7, 73, 1, '0'),
(43, 8, 74, 0, '0'),
(44, 1, 75, 0, '0'),
(45, 8, 76, 0, '0'),
(46, 9, 77, 0, '0'),
(47, 20, 78, 0, '0'),
(48, 4, 79, 1, '0'),
(49, 35, 80, 1, '0'),
(51, 3, 82, 0, '0'),
(59, 29, 90, 1, '0'),
(68, 35, 100, 1, '0'),
(69, 35, 101, 1, '0'),
(84, 35, 121, 1, '0');

-- --------------------------------------------------------

--
-- Table structure for table `package`
--

CREATE TABLE `package` (
  `package_id` int(11) NOT NULL,
  `login_id` int(11) NOT NULL,
  `validFrom` date NOT NULL,
  `validUntil` date NOT NULL,
  `status` text NOT NULL,
  `type` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `package`
--

INSERT INTO `package` (`package_id`, `login_id`, `validFrom`, `validUntil`, `status`, `type`) VALUES
(3, 24, '2020-04-16', '2021-04-16', 'Active', 'Year'),
(4, 12, '2020-04-16', '2021-04-16', 'Active', 'Year'),
(5, 35, '2020-04-26', '2021-04-26', 'Inactive', 'Year'),
(6, 35, '2020-04-29', '2021-04-29', 'Active', 'Year'),
(7, 35, '2020-05-09', '2020-05-09', 'Inactive', 'Trial');

-- --------------------------------------------------------

--
-- Table structure for table `portfolio`
--

CREATE TABLE `portfolio` (
  `portfolio_id` int(11) NOT NULL,
  `jobseeker_id` int(11) NOT NULL,
  `url_link` varchar(255) NOT NULL,
  `description` varchar(20) NOT NULL,
  `type` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `portfolio`
--

INSERT INTO `portfolio` (`portfolio_id`, `jobseeker_id`, `url_link`, `description`, `type`) VALUES
(3, 25, 'www.ams-jr.org', 'my portfolio', 'Website');

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `post_id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `author` varchar(255) NOT NULL,
  `image` text NOT NULL,
  `content` text NOT NULL,
  `status` varchar(255) NOT NULL,
  `tag` varchar(300) NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `review_link`
--

CREATE TABLE `review_link` (
  `review_id` int(11) NOT NULL,
  `jobseeker_id` int(11) NOT NULL,
  `reviewer_name` varchar(255) NOT NULL,
  `reviewer_email` varchar(30) NOT NULL,
  `rating` float NOT NULL,
  `review_content` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `review_link`
--

INSERT INTO `review_link` (`review_id`, `jobseeker_id`, `reviewer_name`, `reviewer_email`, `rating`, `review_content`) VALUES
(2, 12, 'Ahmad Sarjo Jallow', 'sarjo@gmail.com', 3.5, 'He is a very good software engineer.'),
(3, 12, 'Biran Jobe', 'jobis@gmail.com', 1, 'Very good'),
(4, 25, 'Buba Jobe', 'bubajobe@gmail.com', 3, 'loewm ipaum dolor sit amet junta nana coffee.'),
(5, 12, 'Koffi Annan', 'annan@gmail.com', 2, 'lorem ipsum dolor sit amet junta nana coffee ado.'),
(6, 25, 'ous saine', 'oussaine@gmail.com', 2, 'lorem ipsum dolor sit amet junta nana coffee ado jsjvbsv.'),
(7, 25, 'test', 'test@gmail.com', 5, 'testing if this is correct'),
(8, 25, 'test2', 'test2@gmail.com', 4, 'testing for the second time if this is working.'),
(9, 25, 'test3', 'test3@gmail.com', 2, 'testing for the third time if this is working.'),
(10, 25, 'test4', 'test4@gmail.com', 1, 'lnalvn;,v\'a,a;vnavksbvskvs l'),
(11, 25, 'test4', 'test4@gmail.com', 1, 'lnalvn;,v\'a,a;vnavksbvskvs l'),
(12, 25, 'test5', 'res@gmail.com', 1, 'lsnmv;vlnbskjv svsjhvbsvjnskj'),
(13, 25, 'test6', 'test6@gmail.co', 5, 'kfjsfgsbscsvcsjsvsjcs'),
(14, 25, 'test9', 'tst@test.com', 5, 'lskbvsvnls sj sl nsk jsn sbsk');

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `service_id` int(11) NOT NULL,
  `jobseeker_id` int(11) NOT NULL,
  `name` varchar(300) NOT NULL,
  `price` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`service_id`, `jobseeker_id`, `name`, `price`) VALUES
(1, 25, 'web design(Static site)', 30000);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `actions`
--
ALTER TABLE `actions`
  ADD PRIMARY KEY (`action_id`),
  ADD KEY `action_company_fk` (`company_login_id`),
  ADD KEY `action_jobseeker_fk` (`jobseeker_login_id`);

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`admin_id`),
  ADD KEY `admin_login_fk` (`login_id`);

--
-- Indexes for table `application`
--
ALTER TABLE `application`
  ADD PRIMARY KEY (`app_id`),
  ADD KEY `job_id` (`job_id`),
  ADD KEY `joobseeker_id` (`jobseeker_id`),
  ADD KEY `company_id` (`company_id`);

--
-- Indexes for table `attachments`
--
ALTER TABLE `attachments`
  ADD PRIMARY KEY (`attachment_id`),
  ADD KEY `attach_mess_fk` (`message_id`);

--
-- Indexes for table `blog`
--
ALTER TABLE `blog`
  ADD PRIMARY KEY (`blog_id`),
  ADD KEY `fk_admin_id` (`admin_id`) USING BTREE;

--
-- Indexes for table `company`
--
ALTER TABLE `company`
  ADD PRIMARY KEY (`company_id`),
  ADD KEY `company_fk_1` (`login_id`);

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`contact_id`);

--
-- Indexes for table `hires`
--
ALTER TABLE `hires`
  ADD PRIMARY KEY (`hire_id`),
  ADD KEY `jobseeker_id` (`jobseeker_id`) USING BTREE;

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
-- Indexes for table `package`
--
ALTER TABLE `package`
  ADD PRIMARY KEY (`package_id`),
  ADD KEY `package_fk` (`login_id`);

--
-- Indexes for table `portfolio`
--
ALTER TABLE `portfolio`
  ADD PRIMARY KEY (`portfolio_id`),
  ADD KEY `portfolio_jobseeker` (`jobseeker_id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`post_id`);

--
-- Indexes for table `review_link`
--
ALTER TABLE `review_link`
  ADD PRIMARY KEY (`review_id`),
  ADD KEY `review_rating_jobseeker` (`jobseeker_id`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`service_id`),
  ADD KEY `service_jobseeker` (`jobseeker_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `actions`
--
ALTER TABLE `actions`
  MODIFY `action_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `admin_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `application`
--
ALTER TABLE `application`
  MODIFY `app_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `attachments`
--
ALTER TABLE `attachments`
  MODIFY `attachment_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `blog`
--
ALTER TABLE `blog`
  MODIFY `blog_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `company`
--
ALTER TABLE `company`
  MODIFY `company_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `contact_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `hires`
--
ALTER TABLE `hires`
  MODIFY `hire_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `job`
--
ALTER TABLE `job`
  MODIFY `job_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `job_seeker`
--
ALTER TABLE `job_seeker`
  MODIFY `jobseeker_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `login_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;

--
-- AUTO_INCREMENT for table `message`
--
ALTER TABLE `message`
  MODIFY `message_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=122;

--
-- AUTO_INCREMENT for table `message_recipient`
--
ALTER TABLE `message_recipient`
  MODIFY `mess_rec_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=85;

--
-- AUTO_INCREMENT for table `package`
--
ALTER TABLE `package`
  MODIFY `package_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `portfolio`
--
ALTER TABLE `portfolio`
  MODIFY `portfolio_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `post_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `review_link`
--
ALTER TABLE `review_link`
  MODIFY `review_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `service_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `actions`
--
ALTER TABLE `actions`
  ADD CONSTRAINT `action_company_fk` FOREIGN KEY (`company_login_id`) REFERENCES `login` (`login_id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `action_jobseeker_fk` FOREIGN KEY (`jobseeker_login_id`) REFERENCES `login` (`login_id`) ON UPDATE CASCADE;

--
-- Constraints for table `admin`
--
ALTER TABLE `admin`
  ADD CONSTRAINT `admin_login_fk` FOREIGN KEY (`login_id`) REFERENCES `login` (`login_id`) ON DELETE CASCADE ON UPDATE CASCADE;

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
-- Constraints for table `hires`
--
ALTER TABLE `hires`
  ADD CONSTRAINT `jobseeker_hire_fk` FOREIGN KEY (`jobseeker_id`) REFERENCES `job_seeker` (`jobseeker_id`) ON DELETE CASCADE ON UPDATE CASCADE;

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

--
-- Constraints for table `package`
--
ALTER TABLE `package`
  ADD CONSTRAINT `package_fk` FOREIGN KEY (`login_id`) REFERENCES `login` (`login_id`);

--
-- Constraints for table `portfolio`
--
ALTER TABLE `portfolio`
  ADD CONSTRAINT `portfolio_jobseeker` FOREIGN KEY (`jobseeker_id`) REFERENCES `job_seeker` (`jobseeker_id`) ON UPDATE CASCADE;

--
-- Constraints for table `review_link`
--
ALTER TABLE `review_link`
  ADD CONSTRAINT `review_rating_jobseeker` FOREIGN KEY (`jobseeker_id`) REFERENCES `job_seeker` (`jobseeker_id`) ON UPDATE CASCADE;

--
-- Constraints for table `services`
--
ALTER TABLE `services`
  ADD CONSTRAINT `service_jobseeker` FOREIGN KEY (`jobseeker_id`) REFERENCES `job_seeker` (`jobseeker_id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
