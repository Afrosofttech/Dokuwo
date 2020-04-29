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
    <title>Authentication</title>
	<script src="js/plugins/jquery.js"></script>
<!-- <script src="https://code.jquery.com/jquery-3.3.1.js"></script> -->
<!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script> -->
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
						<div class="row">
							<div class="col-xs-4">
								<a href="#" class="active" id="login-form-link">Login</a>
							</div>
							<div class="col-xs-4">
								<a href="#" id="jobseeker-form-link">Jobseeker</a>
							</div>
                            <div class="col-xs-4">
								<a href="#" id="company-form-link">Company</a>
							</div>
						</div>
						<hr>
					</div>
					<div class="panel-body">
						<div class="row">
							<div class="col-lg-12">
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
									<div class="form-group">
										<div class="row">
											<div class="col-lg-12">
												<div class="text-center">
													<a href="#" tabindex="5" class="forgot-password">Forgot Password?</a>
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
										<input type="email" name="email" id="jobseeker_email" tabindex="1" class="form-control password" placeholder="Enter Email Address" value="">
									</div>
									<div class="form-group">
										<input type="password" name="password" id="jobseeker_pwd" tabindex="2" class="form-control" placeholder="Enter Password">
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
										<input type="email" name="email" id="company_email" tabindex="1" class="form-control" placeholder="Enter Email Address" value="">
									</div>
									<div class="form-group">
										<input type="password" name="password" id="company_pwd" tabindex="2" class="form-control" placeholder="Password">
									</div>
									<div class="form-group">
										<div class="row">
											<div class="col-sm-6 col-sm-offset-3">
												<input type="submit" name="company-submit" id="company-submit" tabindex="4" class="form-control btn btn-register btn-submit-request" value="Register Now" placeholder="Register Now">
											</div>
										</div>
									</div>
								</form>
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
	let attempt = '<?php if(isset($_REQUEST['attempt'])){echo $_REQUEST['attempt'];}else{ echo '';}  ?>';
	(attempt == 'success')? swal('Profile creation complete!','Please login to continue','success','Cool'):
	(attempt == 'failed')?swal('Profile creation failed!','You need to create an account first','error','Cool'):
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
	var email = $('#'+mail).val();
	var passwd = $('#'+pwd).val();
	var tag = tag_val;
    var errors = [];
    $(".error").remove();
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
    if (passwd.length < 8) {
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
               if(response == 200){
                  window.location.replace('index.php');
                }else if(response == 400){
					swal('Invalid account access!','Activate your account if you have already created an account','warning','Cool');
				}else if(response == 'success'){
					swal('account creation complete!','A link has been sent to your email to activate your account','success','Cool');
				}else if(response == 'duplicate'){
                    swal('account already exist!','Please login to continue or create a different account','warning','Cool');
				}else{
				    swal('account does not exist!','You need to create an account first','warning','Cool');
               }
            },
            error: function(err){
              console.log(err);
      
            }
           
		  });
    }
    else{
        return;
	}
	}
});
    </script>
</body>
</html>