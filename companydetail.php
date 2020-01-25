<?php
include 'includes/autoloader.inc.php';

$uri = $_SERVER['REQUEST_URI'];
$url_components = parse_url($uri);
parse_str($url_components['query'], $params);

if($params['email'] == '' && $params['hash'] == ''){
  header('Location: companyregister.php');
}
else{
  require_once 'model/accountmodel.php';

  $acc = new Account();
  $email = $params['email'];
  $hash =  $params['hash'];
  $get_id = $acc->get_login_id($email,$hash);
  if($get_id){
    $id = $get_id['login_id'];
  }
  else{
    header('Location: companyregister.php');
  }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>

  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">

  <title>Company Details</title>

  <!-- Custom fonts for this template-->
  <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
  <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">

  <!-- Custom styles for this template-->
  <link href="css/sb-admin-2.min.css" rel="stylesheet">
  <link rel="stylesheet" href="css/custom.css">

  <!-- Bootstrap Form Helpers -->
	<link href="css/bootstrap-formhelpers.min.css" rel="stylesheet" media="screen">
  <link rel="stylesheet" href="css/countrySelect.min.css">


</head>

<body class="bg-gradient-primary">

  <div class="container">

    <div class="card o-hidden border-0 shadow-lg my-5">
      <div class="card-body p-0">
        <!-- Nested Row within Card Body -->
        <div class="row">
          <div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
          <div class="col-lg-7">
            <div class="p-5">
              <div class="message text-center" id="message"></div>
              <div class="text-center">
                <h1 class="h4 text-gray-900 mb-4">COMPANY DETAILS</h1>
              </div>
              <form class="user" action="post.php/details/fill_company_account" method="POST" id="companydetail" enctype="multipart/form-data" autocomplete="off">
                
                <div class="form-group">
                  <input type="text" class="form-control form-control-user" name="name" id="name" placeholder="Company name">
                </div>
                <div class="form-group">
                <input type="email" class="form-control form-control-user" name="email" id="email" placeholder="Company email">
                </div>
                <div class="form-group">
                <input type="password" class="form-control form-control-user" name="password" id="password" placeholder="Password">
                </div> 
                <div class="form-group">
                <input type="text" class="form-control form-control-user" name="phone" id="phone" placeholder="Phone number...">
                </div> 
                <div class="form-group">
                <input type="text" class="form-control form-control-user" name="address" id="address" placeholder="Company Address">
                </div> 
                <div class="form-group">
                <input type="text" class="form-control form-control-user" name="postalcode" id="postalcode" placeholder="Postal Code">
                </div> 
                <div class="form-group">
                <input type="text" class="form-control form-control-user" name="country" id="country" placeholder="Country">
                </div> 
                <div class="form-group">
                  <select class="form-control bfh-currencies" data-currency="EUR" name="currency" id="currency"></select>
                </div>
                <div class="form-group">
                <input type="file" class="form-control form-control-user" name="logo" id="logo">
                </div>
                <div class="form-group">
                <input type="hidden" class="form-control form-control-user" name="id" id="id" value="<?php echo $id; ?>">
                </div> 
                <div class="text-center">
                <button class="btn btn-primary btn-user btn-block" id="submit">Submit</button>
                </div>
                
              </form>
              
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

  <!-- Bootstrap Form Helpers -->
  <script src="js/bootstrap-formhelpers.min.js"></script>

  <!-- Custom scripts -->
  <script src="js/companydetail.js"></script>
  <script src="js/notify.min.js"></script>
  <script src="js/countrySelect.min.js"></script>
  
  <script>
  $("#country").countrySelect();
</script>

</body>

</html>
