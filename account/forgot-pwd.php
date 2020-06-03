<?php
?>
<!DOCTYPE html>
<html lang="en">

<head>

  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="This is an accounting Software that aims to automate and make your accounting work simple.">
    <meta name="author" content="Afrika Software Technologies">

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
               }else if(response == 'Error'){
				swal('Error In Sending Link!','There was error in sending you a reset link to your email. Please contact support if urgent or we will get back to you soonest when we notice the error.','error','Cool');
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
