<?php
?>
<!DOCTYPE html>
<html lang="en">

<head>

  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="This is a job hunting platform that brings together Recruiters, Freelancers and potential employees.">
  <meta name="author" content="Afrika Software Technologies">
  <link rel="apple-touch-icon" sizes="57x57" href="assets/img/fav/apple-icon-57x57.png">
  <link rel="apple-touch-icon" sizes="60x60" href="assets/img/fav/apple-icon-60x60.png">
  <link rel="apple-touch-icon" sizes="72x72" href="assets/img/fav/apple-icon-72x72.png">
  <link rel="apple-touch-icon" sizes="76x76" href="assets/img/fav/apple-icon-76x76.png">
  <link rel="apple-touch-icon" sizes="114x114" href="assets/img/fav/apple-icon-114x114.png">
  <link rel="apple-touch-icon" sizes="120x120" href="assets/img/fav/apple-icon-120x120.png">
  <link rel="apple-touch-icon" sizes="144x144" href="assets/img/fav/apple-icon-144x144.png">
  <link rel="apple-touch-icon" sizes="152x152" href="assets/img/fav/apple-icon-152x152.png">
  <link rel="apple-touch-icon" sizes="180x180" href="assets/img/fav/apple-icon-180x180.png">
  <link rel="icon" type="image/png" sizes="192x192"  href="assets/img/fav/android-icon-192x192.png">
  <link rel="icon" type="image/png" sizes="32x32" href="assets/img/fav/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="96x96" href="assets/img/fav/favicon-96x96.png">
  <link rel="icon" type="image/png" sizes="16x16" href="assets/img/fav/favicon-16x16.png">
  <link rel="manifest" href="assets/img/fav/manifest.json">
  <meta name="msapplication-TileColor" content="#ffffff">
  <meta name="msapplication-TileImage" content="assets/img/fav/ms-icon-144x144.png">
  <meta name="theme-color" content="#ffffff">

  <title>Dokuwo - Forgot Password</title>

  <!-- Custom fonts for this template-->
  <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
  <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">

  <!-- Custom styles for this template-->
  <link href="css/sb-admin-2.min.css" rel="stylesheet">

</head>

<body class="bg-gradient-primary">

  <div class="container">

    <!-- Outer Row -->
    <div class="row justify-content-center">

      <div class="col-xl-10 col-lg-12 col-md-9">

        <div class="card o-hidden border-0 shadow-lg my-5">
          <div class="card-body p-0">
            <!-- Nested Row within Card Body -->
            <div class="row">
              <div class="col-lg-6 d-none d-lg-block bg-password-image"></div>
              <div class="col-lg-6">
                <div class="p-5">
                  <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-2">Forgot Your Password?</h1>
                    <p class="mb-4">Just enter your email address below and we'll send you a link to your email to reset your password!</p>
                  </div>
                  <form class="user" id="forgot-form" role="form" class="my-form" autocomplete="off">
                    <div class="form-group">
                      <input type="email" class="form-control form-control-user" id="InputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address...">
                    </div>
                    <input class="btn btn-primary btn-user btn-block" type="submit" name="reset-submit" id="reset-submit" value="Reset Password" placeholder="Reset Password">
                  </form>
                  <hr>
                  <div class="text-center">
                    <a class="small" href="authentication.php">Create an Account!</a>
                  </div>
                  <div class="text-center">
                    <a class="small" href="authentication.php">Already have an account? Login!</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>

  </div>

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
$('#forgot-form').submit(function(e){
    e.preventDefault();
    $('#reset-submit').prop('disabled', true);
    var email = $('#InputEmail').val();
    var errors = [];
    if (email.length < 1) {
    swal('Invalid email!','Email cannot be empty','error','Cool');
	errors.push('email_error');
	return;
    } else {
	var regEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var validEmail = regEx.test(email);
    if (!validEmail) {
		swal('Invalid Email!','Please enter a valid email','error','Cool');
		return;
    }
   }
   if(errors.length < 1){
    $.ajax({
            method:'POST',
			url: 'post.php/authentication/reset_password',
            data: {'email':email},
            success:function(response){
				$('#reset-submit').prop('disabled', false);
               if(response == 'Inexistent'){
                swal('Invalid email!','This email is not registered with this system.','error','Cool');
                window.location.replace('index.php');
               }else if(response == 'error'){
                swal('Reset link not Sent!','The link to reset your password was not sent to your email. Dokuwo has been notified. You can as well contact support and let them know about this or wait for them to reach out and fix it once they notice it. The reset link will be sent to your email, so do check your email later on. Apologies','error','Cool');
                $('#InputEmail').val('');
               }else if(response == 'Success'){
                    window.location.replace('authentication.php?attempt=<?php echo "reset-success"; ?>');
				}
            },
            error: function(err){
              swalNotify(err.responseText,'error');
            }
		  });
   }else{
    return;
   }
})
 </script>
</body>

</html>
