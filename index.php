<?php
session_start();

// if(!isset($_SESSION['password']) || $_SESSION['usertype'] == ''){
//     header("Location: login.php");
// }
//these are default values. They will will be totally removed once sign up is complete

$_SESSION['login_id'] = 2;
$_SESSION['email'] = 'contact@afrosofttech.com';
$_SESSION['password'] = '123@ast';
$_SESSION['usertype'] = 'company';
$_SESSION['status'] = 0;

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
    <!-- <script src="js/jquery.js"></script> -->

  <!-- Datatables CDN-->
  <script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.10.15/js/jquery.dataTables.js"></script>
  <link rel="stylesheet" href="http://cdn.datatables.net/1.10.2/css/jquery.dataTables.min.css">

  <!-- include summernote css/js -->
<link href="https://cdn.jsdelivr.net/npm/summernote@0.8.15/dist/summernote.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/summernote@0.8.15/dist/summernote.min.js"></script>

  <title>Career</title>

  <!-- Custom fonts for this template-->
  <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
  <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">

  <!-- Custom styles for this template-->
  <link href="css/sb-admin-2.min.css" rel="stylesheet">

</head>

<body id="page-top">

<script type="text/javascript">
//these are default values. they will be replaced with sessions coming from when someone logs in

  let session_id = '<?php echo $_SESSION['login_id']; ?>';
  let session_email = '<?php echo $_SESSION['email']; ?>';
  let session_pwd = '<?php echo $_SESSION['password']; ?>';
  let session_usertype = '<?php echo  $_SESSION['usertype']; ?>';
  let session_status = '<?php echo $_SESSION['status']; ?>';
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
 
  <!--Custom scripts-->
  <script src="js/career.js"></script>
  <script src="js/admin.js"></script>
  <script src="js/company.js"></script>
  <script src="js/jobseeker.js"></script>
  <script src="js/notify.min.js"></script>
</body>
</html>
