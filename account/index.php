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
  <meta name="description" content="This is an accounting Software that aims to automate and make your accounting work simple.">
  <meta name="author" content="Afrika Software Technologies">

  <!-- jquery CDN -->
 <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  
  <!--jquery printArea -->
    <script src="js/printArea/jquery-ui-1.10.4.custom.min.js"></script>
    <script src="js/printArea/jquery.PrintArea.js" type="text/JavaScript" language="javascript"></script>
    <link type="text/css" rel="stylesheet" href="css/jquery-ui-1.10.4.custom.min.css"/>


  <!-- Datatables CDN-->
  <script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.10.15/js/jquery.dataTables.js"></script>
  <link rel="stylesheet" href="http://cdn.datatables.net/1.10.2/css/jquery.dataTables.min.css">


  <!-- include summernote css/js -->
<link href="https://cdn.jsdelivr.net/npm/summernote@0.8.15/dist/summernote.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/summernote@0.8.15/dist/summernote.min.js"></script>

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
  let package ='<?php if(isset($_SESSION['package'])) echo $_SESSION['package'];?>';
  let trial_activation ='<?php if(isset($_SESSION['trial_activation'])) echo $_SESSION['trial_activation'];?>';
</script>


  <div id="wrapper">
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content"></div>
    </div>
  </div>

  
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
  <script src="js/career.js"></script>
  <script src="js/admin.js"></script>
  <script src="js/company.js"></script>
  <script src="js/jobseeker.js"></script>
  <script src="js/plugins/notify.min.js"></script>
</body>
</html>
