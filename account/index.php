<?php
session_start();

if(!isset($_SESSION['email'])){
     header("Location: authentication.php");
}

?>
<!DOCTYPE html>
<html lang="en">

<head>

  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="This is a job hunting platform that brings together Recruiters, Freelancers and potential employees.">
  <meta name="author" content="Afrika Software Technologies">

  <!-- jquery CDN -->
 <!-- <script src="https://code.jquery.com/jquery-3.3.1.js"></script> -->
  <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script> -->
  <script src="vendor/jquery/jquery.js"></script>
  
  <!--jquery printArea -->
    <script src="js/printArea/jquery-ui-1.10.4.custom.min.js"></script>
    <script src="js/printArea/jquery.PrintArea.js" type="text/JavaScript" language="javascript"></script>
    <link type="text/css" rel="stylesheet" href="css/jquery-ui-1.10.4.custom.min.css"/>


  <!-- Datatables CDN-->
  <script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.10.15/js/jquery.dataTables.js"></script>
  <link rel="stylesheet" href="https://cdn.datatables.net/1.10.2/css/jquery.dataTables.min.css">

  <!-- include summernote css/js -->
<link href="https://cdn.jsdelivr.net/npm/summernote@0.8.15/dist/summernote.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/summernote@0.8.15/dist/summernote.min.js"></script>
<link rel="apple-touch-icon" sizes="57x57" href="https://dokuwo-assets.s3.amazonaws.com/assets/img/fav/apple-icon-57x57.png">
<link rel="apple-touch-icon" sizes="60x60" href="https://dokuwo-assets.s3.amazonaws.com/assets/img/fav/apple-icon-60x60.png">
<link rel="apple-touch-icon" sizes="72x72" href="https://dokuwo-assets.s3.amazonaws.com/assets/img/fav/apple-icon-72x72.png">
<link rel="apple-touch-icon" sizes="76x76" href="https://dokuwo-assets.s3.amazonaws.com/assets/img/fav/apple-icon-76x76.png">
<link rel="apple-touch-icon" sizes="114x114" href="https://dokuwo-assets.s3.amazonaws.com/assets/img/fav/apple-icon-114x114.png">
<link rel="apple-touch-icon" sizes="120x120" href="https://dokuwo-assets.s3.amazonaws.com/assets/img/fav/apple-icon-120x120.png">
<link rel="apple-touch-icon" sizes="144x144" href="https://dokuwo-assets.s3.amazonaws.com/assets/img/fav/apple-icon-144x144.png">
<link rel="apple-touch-icon" sizes="152x152" href="https://dokuwo-assets.s3.amazonaws.com/assets/img/fav/apple-icon-152x152.png">
<link rel="apple-touch-icon" sizes="180x180" href="https://dokuwo-assets.s3.amazonaws.com/assets/img/fav/apple-icon-180x180.png">
<link rel="icon" type="image/png" sizes="192x192"  href="https://dokuwo-assets.s3.amazonaws.com/assets/img/fav/android-icon-192x192.png">
<link rel="icon" type="image/png" sizes="32x32" href="https://dokuwo-assets.s3.amazonaws.com/assets/img/fav/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="96x96" href="https://dokuwo-assets.s3.amazonaws.com/assets/img/fav/favicon-96x96.png">
<link rel="icon" type="image/png" sizes="16x16" href="https://dokuwo-assets.s3.amazonaws.com/assets/img/fav/favicon-16x16.png">
<link rel="manifest" href="https://dokuwo-assets.s3.amazonaws.com/assets/img/fav/manifest.json">
<meta name="msapplication-TileColor" content="#ffffff">
<meta name="msapplication-TileImage" content="https://dokuwo-assets.s3.amazonaws.com/assets/img/fav/ms-icon-144x144.png">
<meta name="theme-color" content="#ffffff">

  <title>Dokuwo</title>

<!-- Custom fonts for this template-->
<link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
<link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">

<!-- Custom styles for this template-->
<link href="css/sb-admin-2.min.css" rel="stylesheet">
<!-- jquery Datepicker plugin -->
<link href= 'https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/ui-lightness/jquery-ui.css' rel='stylesheet'>
<!-- Bootstrap Form Helpers -->
<link href="css/bootstrap-formhelpers.min.css" rel="stylesheet" media="screen">
<link rel="stylesheet" href="css/countrySelect.min.css">
<!-- Bootstrap tokenfield input -->
<link rel="stylesheet" type="text/css" href="css/bootstrap-tokenfield.min.css">
<link rel="stylesheet" type="text/css" href="css/tokenfield-typeahead.min.css">
<link rel="stylesheet" type="text/css" href="css/jobseeker_jobs.css">
<link rel="stylesheet" type="text/css" href="css/loader.css">
</head>

<body id="page-top">

<script type="text/javascript">
//@ams->to be moved to career.js-urgent
  let session_id = '<?php if(isset($_SESSION['login_id'])) echo $_SESSION['login_id']; ?>';
  let session_email = '<?php if(isset($_SESSION['email'])) echo $_SESSION['email']; ?>';
  let session_usertype = '<?php if(isset($_SESSION['usertype'])) echo  $_SESSION['usertype']; ?>';
  let session_status = '<?php if(isset($_SESSION['status'])) echo $_SESSION['status']; ?>';
  let session_fullname ='<?php if(isset($_SESSION['name'])) echo $_SESSION['name']; ?>';
  let session_user_id ='<?php if(isset($_SESSION['_id'])) echo $_SESSION['_id'];?>';
  let session_curr ='<?php if(isset($_SESSION['Currency'])) echo $_SESSION['Currency'];?>';
  let session_adminType ='<?php if(isset($_SESSION['role'])) echo $_SESSION['role'];?>';
  let package ='<?php if(isset($_SESSION['package'])) echo $_SESSION['package'];?>';
  let trial_activation ='<?php if(isset($_SESSION['trial_activation'])) echo $_SESSION['trial_activation'];?>';
</script>


  <div id="wrapper">
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content"></div>
    </div>
  </div>

  <!-- Preloader -->
  <div id="preloader">
     <div class="loader" id="loader-1"></div>
  </div>
  <!-- End Preloader -->

  <!-- Scroll to Top Button-->
  <a class="scroll-to-top rounded" href="#page-top">
    <i class="fas fa-angle-up"></i>
  </a>

  <!-- Bootstrap core JavaScript-->
  <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

  <!-- Custom scripts for all pages-->
  <script src="js/sb-admin-2.min.js"></script>
  <!-- currency list -->
  <script src="js/core/currency.js"></script>
  <!-- Bootstrap tokenfield input js plugin -->
  <script src="js/plugins/bootstrap-tokenfield.min.js"></script>
  <!-- SweetAlert2 -->
  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9"></script>
  <script src="js/core/functions.js"></script>
  <!-- SweetAlert2 -->
  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9"></script>
  <script src="js/core/functions.js"></script>
  <!-- country select -->
  <script src="js/plugins/countrySelect.min.js"></script>
  <!--Custom scripts-->
  <script src="js/core/jobseeker_categories.js"></script>
  <!--Custom scripts-->
  <script src="js/core/loader.js"></script>
  <!--Momentjs script-->
  <script src="js/plugins/moment.min.js"></script>
  <script src="js/career.js"></script>
  <script src="js/common.js"></script>
  <script src="js/admin.js"></script>
  <script src="js/company.js"></script>
  <script src="js/jobseeker.js"></script>
  <script src="js/plugins/notify.min.js"></script>
</body>
</html>
