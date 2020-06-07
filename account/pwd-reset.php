<!DOCTYPE html>
<html lang="en">

<head>

  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="This is a job hunting platform that brings together Recruiters, Freelancers and potential employees.">
  <meta name="author" content="Afrika Software Technologies">
  <link rel="apple-touch-icon" sizes="57x57" href="img/fav/apple-icon-57x57.png">
  <link rel="apple-touch-icon" sizes="60x60" href="img/fav/apple-icon-60x60.png">
  <link rel="apple-touch-icon" sizes="72x72" href="img/fav/apple-icon-72x72.png">
  <link rel="apple-touch-icon" sizes="76x76" href="img/fav/apple-icon-76x76.png">
  <link rel="apple-touch-icon" sizes="114x114" href="img/fav/apple-icon-114x114.png">
  <link rel="apple-touch-icon" sizes="120x120" href="img/fav/apple-icon-120x120.png">
  <link rel="apple-touch-icon" sizes="144x144" href="img/fav/apple-icon-144x144.png">
  <link rel="apple-touch-icon" sizes="152x152" href="img/fav/apple-icon-152x152.png">
  <link rel="apple-touch-icon" sizes="180x180" href="img/fav/apple-icon-180x180.png">
  <link rel="icon" type="image/png" sizes="192x192"  href="img/fav/android-icon-192x192.png">
  <link rel="icon" type="image/png" sizes="32x32" href="img/fav/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="96x96" href="img/fav/favicon-96x96.png">
  <link rel="icon" type="image/png" sizes="16x16" href="img/fav/favicon-16x16.png">
  <link rel="manifest" href="img/fav/manifest.json">
  <meta name="msapplication-TileColor" content="#ffffff">
  <meta name="msapplication-TileImage" content="img/fav/ms-icon-144x144.png">
  <meta name="theme-color" content="#ffffff">

  <title>Dokuwo - Reset Password</title>

  <!-- Custom fonts for this template-->
  <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
  <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">

  <!-- Custom styles for this template-->
  <link href="css/sb-admin-2.min.css" rel="stylesheet">

</head>

<body class="bg-gradient-primary">
<div class="container" id="reset-pwd"></div>
<!-- Bootstrap core JavaScript-->
<script src="vendor/jquery/jquery.min.js"></script>
<script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
<!-- Core plugin JavaScript-->
<script src="vendor/jquery-easing/jquery.easing.min.js"></script>
<!-- Custom scripts for all pages-->
<script src="js/sb-admin-2.min.js"></script>
<!-- SweetAlert2 -->
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@9"></script>
<script src="js/core/functions.js"></script>
<script>
  var queryString = window.location.search;
  var urlParams = new URLSearchParams(queryString);
  var email = urlParams.get('email');
  var hash = urlParams.get('hash');

  if(email == null || email == '' || hash == null || hash == ''){
    window.location.replace('authentication.php?attempt=<?php echo "reset-empty"; ?>');
  }else{
    $.ajax({
      type:"POST",
      url:"post.php/authentication/verify_existence_reset_request",
      data:{"email" : email, "hash" : hash},
      success: data => {
        var entity = data;
        if(entity == 'Inexistent') window.location.replace('authentication.php?attempt=<?php echo "Inexistent-reset"; ?>');
        // if(entity == 'Success')  window.location.replace('authentication.php?attempt=<?php echo "reset-success"; ?>');
        else{
      $('#reset-pwd').html(' <!-- Outer Row -->'+
    '<div class="row justify-content-center">'+

      '<div class="col-xl-10 col-lg-12 col-md-9">'+

        '<div class="card o-hidden border-0 shadow-lg my-5">'+
          '<div class="card-body p-0">'+
            '<!-- Nested Row within Card Body -->'+
            '<div class="row">'+
              '<div class="col-lg-6 d-none d-lg-block bg-password-image"></div>'+
              '<div class="col-lg-6">'+
                '<div class="p-5">'+
                  '<div class="text-center">'+
                    '<h1 class="h4 text-gray-900 mb-2">Reset Your Password</h1>'+
                    '<p class="mb-4">Just enter your new password below and submit it!</p>'+
                  '</div>'+
                  '<form class="user" id="reset-form" role="form" class="my-form" autocomplete="off">'+
                    '<div class="form-group">'+
                      '<input type="password" class="form-control form-control-user" id="pwd" aria-describedby="emailHelp" placeholder="Enter New Password...">'+
                    '</div>'+
                    '<div class="form-group">'+
                      '<input type="password" class="form-control form-control-user" id="Cpwd" aria-describedby="emailHelp" placeholder="Confirm Password">'+
                    '</div>'+
                    '<input class="btn btn-primary btn-user btn-block" type="submit" name="reset-submit" id="reset-pwd" value="Reset Password" placeholder="Reset Password">'+
                  '</form>'+
                  '<hr>'+
                '</div>'+
              '</div>'+
            '</div>'+
          '</div>'+
        '</div>'+

      '</div>'+

    '</div>');

    $(document).ready(function(){
      $('#reset-form').submit(function(e) {
      e.preventDefault();
      $('#reset-pwd').prop('disabled', true);
      var pwd = $('#pwd').val();
      var Cpwd = $('#Cpwd').val();
      var errors = [];
      $(".error").remove();

      if (pwd.length < 1) {
      swal('Invalid password!','password cannot be empty','error','Cool');
      errors.push('pwd_error');
      return;
      } 
      if(pwd.length < 8){
        swal('Invalid Password!','password should be at least 8 characters or more','error','Cool');
        errors.push('pwd_error');
      return;
      }
      if(pwd !== Cpwd){
      swal('Password Mismatch!','The two passwords do not match','error','Cool');
      errors.push('pwd_error');
      return;
      }

      if(errors.length < 1){
          $.ajax({
            method: "POST",
            url: 'post.php/authentication/change_password',
            data: {'pwd': pwd,'login_id': entity},
            success: response => {
                $('#reset-pwd').prop('disabled', false);
              if(response == 'Success'){
                window.location.replace('authentication.php?attempt=<?php echo "Pwd-success"; ?>');
              }else{
				swal('Password Changed Failed!','Your attempt to change your passwrod was Unseccessful. Please contact support for help.','error','Cool');
              }
            },
            error: err => {
              swalNotify("Error changing password. Contact support for help.","warn");
            }
          });    
      }
      });
    });
   }
  },
  error: err => {
    swalNotify("Either a request was never made to change this password or you are accessing a wrong link. Contact support for help.","error");
  }
 })
}
</script>

</body>

</html>
