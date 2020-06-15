<?php
    session_start();
	session_unset();
	session_destroy();
	include 'includes/functions.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<meta name="description" content="This is a job hunting platform that brings together Recruiters, Freelancers and potential employees.">
	<meta name="author" content="Afrika Software Technologies">
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
	<!-- <link rel="manifest" href="https://dokuwo-assets.s3.amazonaws.com/assets/img/fav/manifest.json"> -->
	<meta name="msapplication-TileColor" content="#ffffff">
	<meta name="msapplication-TileImage" content="https://dokuwo-assets.s3.amazonaws.com/assets/img/fav/ms-icon-144x144.png">
	<meta name="theme-color" content="#ffffff">
    <title>Dokuwo - Authentication</title>
	<!-- <script src="js/plugins/jquery.js"></script> -->
	<script src="https://code.jquery.com/jquery-3.3.1.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
	<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
	<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
	<!-- SweetAlert2 -->
	<script src="https://cdn.jsdelivr.net/npm/sweetalert2@9"></script>
	<script src="js/core/functions.js"></script>
	<link rel="stylesheet" href="css/custom.css" type="text/css">

</head>
<body>
<div class="container">
    	<div class="row">
			<div class="col-md-6 col-md-offset-3">
				<div class="panel panel-login">

					<div class="panel-heading">
						<div class="row" id="xp-link-header">

							<!-- <div class="col-xs-4">
								<a href="#" class="active" id="login-form-link">Login</a>
							</div>
							<div class="col-xs-4">
								<a href="#" id="jobseeker-form-link">Jobseeker/Freelancer</a>
							</div>
                            <div class="col-xs-4">
								<a href="#" id="company-form-link">Recruiter</a>
							</div> -->

						</div>
						<hr>
					</div>

					<div class="panel-body">
						<div class="row">
							<div class="col-lg-12" id="xp-body">

								<!-- <form id="login-form" role="form" style="display: block;" class="my-form" autocomplete="off">
									<div class="form-group">
										<input type="email" name="email" id="login_email" tabindex="1" class="form-control email" placeholder="Enter Email">
									</div>
									<div class="form-group">
										<input type="password" name="password" id="login_pwd" tabindex="2" class="form-control password" placeholder="Enter Password">
									</div>
									<div class="form-group">
										<div class="row">
											<div class="col-sm-6 col-sm-offset-3">
												<input type="submit" name="login-submit" id="login-submit" tabindex="4" class="form-control btn btn-login btn-submit-request" value="Log In" placeholder="Log In">
											</div>
										</div>
									</div>
									<div class="form-group">
										<div class="row">
											<div class="col-lg-12">
												<div class="text-center">
													<a href="forgot-pwd.php" tabindex="5" class="forgot-password">Forgot Password?</a>
												</div>
											</div>
										</div>
									</div>
									<div class="form-group">
										<div class="row">
											<div class="col-lg-12">
												<div class="text-center">
													<a href="../" tabindex="5" class="forgot-password">Back to homepage</a>
												</div>
											</div>
										</div>
									</div>
								</form>

								<form id="jobseeker-form" role="form" style="display: none;" class="my-form" autocomplete="off">
									<div class="form-group">
										<input type="email" name="email" id="jobseeker_email" tabindex="1" class="form-control email" placeholder="Enter Email Address" value="">
									</div>
									<div class="form-group">
										<input type="password" name="password" id="jobseeker_pwd" tabindex="2" class="form-control password" placeholder="Enter Password">
									</div>
									<div class="form-group">
										<div class="row">
											<div class="col-sm-6 col-sm-offset-3">
												<input type="submit" name="register-submit" id="register-submit" tabindex="4" class="form-control btn btn-register btn-submit-request" value="Register Now" placeholder="Register Now">
											</div>
										</div>
									</div>
								</form>

                                <form id="company-form" role="form" style="display: none;" class="my-form" autocomplete="off">
									<div class="form-group">
										<input type="email" name="email" id="company_email" tabindex="1" class="form-control email" placeholder="Enter Email Address" value="">
									</div>
									<div class="form-group">
										<input type="password" name="password" id="company_pwd" tabindex="2" class="form-control password" placeholder="Password">
									</div>
									<div class="form-group">
										<div class="row">
											<div class="col-sm-6 col-sm-offset-3">
												<input type="submit" name="company-submit" id="company-submit" tabindex="4" class="form-control btn btn-register btn-submit-request" value="Register Now" placeholder="Register Now">
											</div>
										</div>
									</div>
								</form> -->

							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
	</div>
    <script src="js/plugins/notify.min.js"></script>
    <script>
$(function() {
		let xp = '<?php if(isset($_REQUEST['xp'])){echo $_REQUEST['xp'];}else{ echo '';}  ?>';
	if(xp == 'recruiter'){
	$('#xp-link-header').html(
		` <div class="col-xs-4">
		<a href="#" id="company-form-link">Recruiter</a>
		</div>`);
	$('#xp-body').html(
		`
		<form id="company-form" role="form" style="display: block;" class="my-form" autocomplete="off">
			<div class="form-group">
				<input type="email" name="email" id="company_email" tabindex="1" class="form-control email" placeholder="Enter Email Address" value="">
			</div>
			<div class="form-group">
				<input type="password" name="password" id="company_pwd" tabindex="2" class="form-control password" placeholder="Password">
			</div>
			<div class="form-group">
				<div class="row">
					<div class="col-sm-6 col-sm-offset-3">
						<input type="submit" name="company-submit" id="company-submit" tabindex="4" class="form-control btn btn-register btn-submit-request" value="Register Now" placeholder="Register Now">
					</div>
				</div>
			</div>
			<div class="form-group">
				<div class="row">
					<div class="col-lg-12">
						<div class="text-center">
							<a href="../" tabindex="5" class="forgot-password">Back to homepage</a>
						</div>
					</div>
				</div>
			</div>
		</form>`);
	}else if(xp == 'jf'){
		$('#xp-link-header').html(
		`<div class="col-xs-4">
			<a href="#" id="jobseeker-form-link">Jobseeker/Freelancer</a>
		</div>`);
		$('#xp-body').html(
			`
			<form id="jobseeker-form" role="form" style="display: block;" class="my-form" autocomplete="off">
				<div class="form-group">
					<input type="email" name="email" id="jobseeker_email" tabindex="1" class="form-control email" placeholder="Enter Email Address" value="">
				</div>
				<div class="form-group">
					<input type="password" name="password" id="jobseeker_pwd" tabindex="2" class="form-control password" placeholder="Enter Password">
				</div>
				<div class="form-group">
					<div class="row">
						<div class="col-sm-6 col-sm-offset-3">
							<input type="submit" name="register-submit" id="register-submit" tabindex="4" class="form-control btn btn-register btn-submit-request" value="Register Now" placeholder="Register Now">
						</div>
					</div>
				</div>
				<div class="form-group">
					<div class="row">
						<div class="col-lg-12">
							<div class="text-center">
								<a href="../" tabindex="5" class="forgot-password">Back to homepage</a>
							</div>
						</div>
					</div>
			    </div>
			</form>`);
	}else{
		$('#xp-link-header').html(
		`<div class="col-xs-4">
			<a href="#" class="active" id="login-form-link">Login</a>
		 </div>`);
		$('#xp-body').html(
		`
		<form id="login-form" role="form" style="display: block;" class="my-form" autocomplete="off">
			<div class="form-group">
				<input type="email" name="email" id="login_email" tabindex="1" class="form-control email" placeholder="Enter Email">
			</div>
			<div class="form-group">
				<input type="password" name="password" id="login_pwd" tabindex="2" class="form-control password" placeholder="Enter Password">
			</div>
			<div class="form-group">
				<div class="row">
					<div class="col-sm-6 col-sm-offset-3">
						<input type="submit" name="login-submit" id="login-submit" tabindex="4" class="form-control btn btn-login btn-submit-request" value="Log In" placeholder="Log In">
					</div>
				</div>
			</div>
		<div class="d-flex justify-content-around flex-wrap">

			<div class="form-group">
				<div class="row">
					<div class="col-lg-6">
						<div class="text-center">
							<a href="forgot-pwd.php" tabindex="5" class="forgot-password">Forgot Password?</a>
						</div>
					</div>
				</div>
			</div>
			<div class="form-group">
				<div class="row">
					<div class="col-lg-6">
						<div class="text-center">
							<a href="../" tabindex="5" class="forgot-password">Back to homepage</a>
						</div>
					</div>
				</div>
			</div>

          </div>
		</form>`);
	}
	
	let attempt = '<?php if(isset($_REQUEST['attempt'])){echo $_REQUEST['attempt'];}else{ echo '';}  ?>';
	(attempt == 'success')? swal('Profile creation complete!','Please login to continue','success','Cool'):
	(attempt == 'failed')?swal('Profile creation failed!','You need to create an account first','error','Cool'):
	(attempt == 'Inexistent')?swal('Inexistent account!','This account doesn\'t exist in this system. Create an account or Contact support for help.','error','Cool'):
	(attempt == 'Activated')?swal('Account activated!','Account already activated. Log in or Contact support for help.','error','Cool'):
	(attempt == 'reset-success')?swal('Link sent!','A reset link has been sent to your email to reset your password.','success','Cool'):
	(attempt == 'reset-empty')?swal('Empty field','Both email and hash fields cannot be empty. Contact support for help.','error','Cool'):
	(attempt == 'Inexistent-reset')?swal('Inexistent reset!','This reset does not exist. If you playing smart, go get a life else Contact support for help.','error','Cool'):
	(attempt == 'Pwd-success')?swal('Password Successfully Changed!','Log in to your account using your new password.','success','Cool'):
	(attempt == 'duplicate')?swal('account already exist!','Please login to continue','warning','Cool'): null;

	$('#login-form-link').click(function(e) {
		$("#login-form").delay(100).fadeIn(100);
		$("#jobseeker-form").fadeOut(100);
		$("#company-form").fadeOut(100);
		$('#jobseeker-form-link').removeClass('active');
		$('#company-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});
	$('#jobseeker-form-link').click(function(e) {
		$("#jobseeker-form").delay(100).fadeIn(100);
		$("#login-form").fadeOut(100);
		$("#company-form").fadeOut(100);
		$('#login-form-link').removeClass('active');
		$('#company-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});
	$('#company-form-link').click(function(e) {
		$("#company-form").delay(100).fadeIn(100);
		$("#login-form").fadeOut(100);
		$("#jobseeker-form").fadeOut(100);
		$('#login-form-link').removeClass('active');
		$('#jobseeker-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});

	$('#login-submit').click(function(e){
		e.preventDefault();
		auth('login_email','login_pwd','login');
	})
	$('#register-submit').click(function(e){
		e.preventDefault();
		auth('jobseeker_email','jobseeker_pwd','jobseeker');
	})
	$('#company-submit').click(function(e){
		e.preventDefault('','');
		auth('company_email','company_pwd','company');
	})

	function auth(mail,pwd,tag_val){
	$('.btn-submit-request').prop('disabled', true);
	var email = $('#'+mail).val();
	var passwd = $('#'+pwd).val();
	var tag = tag_val;
    var errors = [];
    $(".error").remove();
    if (email.length < 1) {
		$('.btn-submit-request').prop('disabled', false);
		swal('Invalid email!','Email cannot be empty','error','Cool');
		errors.push('email_error');
		return;
    } else {
	var regEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var validEmail = regEx.test(email);
    if (!validEmail) {
		$('.btn-submit-request').prop('disabled', false);
		swal('Invalid Email!','Please enter a valid email','error','Cool');
		return;
    }
    }
    if (passwd.length < 8) {
		$('.btn-submit-request').prop('disabled', false);
		swal('Short password!','Password must be at least 8 characters long','error','Cool');
		errors.push('password_error');
		return;
	}
	
    if(errors.length < 1){
        $.ajax({
            method:'POST',
			url: (tag == 'login')?'post.php/authentication/user_login':(tag == 'company')? 'post.php/authentication/create_company_account':
			(tag == 'jobseeker')?'post.php/authentication/create_jobseeker_account':null,
            data: {'email':email,'password': passwd,'tag':tag},
            success:function(response){
				$('.btn-submit-request').prop('disabled', false);
               if(response == 200){
                  window.location.replace('index.php');
                }else if(response == 400){
					swal('Invalid account access!','Activate your account if you have already created an account','warning','Cool');
				}else if(response == 'success'){
					swal('Account creation complete!','A link has been sent to your email to activate your account. NOTE: DO CHECK ALL MAILS OR PROMOTIONAL EMAILS IF YOU DO NOT SEE THE LINK IN YOUR PRIMARY EMAILS.','success','Cool');
					$('.email').val('');
					$('.password').val('');
				}else if(response == 'error'){
                    swal('Activation link not Sent!','The activation link was not sent to your email. Dokuwo has been notified. You can as well contact support and let them know about this or wait for them to reach out and fix it once they notice it. The activation link will be sent to your email, so do check your email later on. Apologies','error','Cool');
					$('.email').val('');
					$('.password').val('');
				}else if(response == 'duplicate'){
                    swal('Account already exist!','Please login to continue or create a different account','warning','Cool');
				}else{
				    swal('Account does not exist!','You need to create an account first','warning','Cool');
               }
            },
            error: function(err){
			  $('.btn-submit-request').prop('disabled', false);
              swalNotify(err.responseText,'error');
      
            }
           
		  });
    }
    else{
		$('.btn-submit-request').prop('disabled', false);
        return;
	}
	}
});
    </script>
</body>
</html>
