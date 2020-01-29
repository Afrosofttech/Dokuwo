<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Authentication</title>
<script src="https://code.jquery.com/jquery-3.3.1.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
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
								<form id="login-form" action="post.php/authentication/user_login" method="post" role="form" style="display: block;" autocomplete="off">
									<div class="form-group">
										<input type="email" name="email" id="email" tabindex="1" class="form-control" placeholder="Enter Email">
									</div>
									<div class="form-group">
										<input type="password" name="password" id="password" tabindex="2" class="form-control" placeholder="Enter Password">
									</div>
									
									<div class="form-group">
										<div class="row">
											<div class="col-sm-6 col-sm-offset-3">
												<input type="submit" name="login-submit" id="login-submit" tabindex="4" class="form-control btn btn-login" value="Log In" placeholder="Log In">
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
								</form>
								<form id="jobseeker-form" action="post.php/authentication/create_jobseeker_account" method="post" role="form" style="display: none;" autocomplete="off">
									<div class="form-group">
										<input type="email" name="email" id="job_email" tabindex="1" class="form-control" placeholder="Enter Email Address" value="">
									</div>
									<div class="form-group">
										<input type="password" name="password" id="job_password" tabindex="2" class="form-control" placeholder="Enter Password">
									</div>
									<div class="form-group">
										<input type="hidden" name="jobseeker" id="jobseeker" tabindex="2" class="form-control" value="jobseeker">
									</div>
									<div class="form-group">
										<div class="row">
											<div class="col-sm-6 col-sm-offset-3">
												<input type="submit" name="register-submit" id="register-submit" tabindex="4" class="form-control btn btn-register" value="Register Now" placeholder="Register Now">
											</div>
										</div>
									</div>
								</form>
                                <form id="company-form" action="post.php/authentication/create_company_account" method="post" role="form" style="display: none;" autocomplete="off">
									
									<div class="form-group">
										<input type="email" name="email" id="comp_email" tabindex="1" class="form-control" placeholder="Enter Email Address" value="">
									</div>
									<div class="form-group">
										<input type="password" name="password" id="comp_password" tabindex="2" class="form-control" placeholder="Password">
									</div>
									<div class="form-group">
										<input type="hidden" name="company" id="company" tabindex="2" class="form-control" value="company">
									</div>
									<div class="form-group">
										<div class="row">
											<div class="col-sm-6 col-sm-offset-3">
												<input type="submit" name="company-submit" id="company-submit" tabindex="4" class="form-control btn btn-register" value="Register Now" placeholder="Register Now">
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
    <script src="js/notify.min.js"></script>
    <script src="js/auth.js"></script>
    <script>
    $(function() {

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

});
    </script>
</body>
</html>