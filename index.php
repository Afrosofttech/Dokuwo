<?php 
  session_start();
  // var_dump($_SESSION);
  if(isset($_SESSION['usertype']) && $_SESSION['usertype'] === 'jobseeker'){
    session_unset();
	  session_destroy();
  }
  else if(isset($_SESSION['usertype']) && $_SESSION['usertype'] === 'company'){
    header('Location: account/index.php');
  }
  // var_dump($_SESSION);
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="keywords" content="Bootstrap, Landing page, Template, Registration, Landing">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <meta name="author" content="Grayrids">
    <title>Dokuwo - Landing</title>

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="assets/css/bootstrap.min.css">
    <link href="account/vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="assets/css/line-icons.css">
    <link rel="stylesheet" href="assets/css/owl.carousel.min.css">
    <link rel="stylesheet" href="assets/css/owl.theme.default.css">
    <link rel="stylesheet" href="assets/css/slicknav.min.css">
    <link rel="stylesheet" href="assets/css/animate.css">
    <link rel="stylesheet" href="assets/css/main.css">    
    <link rel="stylesheet" href="assets/css/responsive.css">
    <link rel="stylesheet" href="assets/css/custom_landing.css">
    <link rel="stylesheet" href="assets/css/lightbox.min.css">

    <script type="text/javascript">
//@ams->to be moved to career.js-urgent
  let cookie_usertype = '<?php if(isset($_COOKIE['cookie_usertype'])) echo  $_COOKIE['cookie_usertype']; ?>';
  let cookie_user_id ='<?php if(isset($_COOKIE['cookie_user_id'])) echo $_COOKIE['cookie_user_id'];?>';
</script>

  </head>
  
  <body>
    <div class="content-section"></div>
    <!-- Go To Top Link -->
    <a href="#" class="back-to-top">
      <i class="lni-arrow-up"></i>
    </a> 

    <!-- Preloader -->
    <div id="preloader">
      <div class="loader" id="loader-1"></div>
    </div>
    <!-- End Preloader -->

    <!-- jQuery first, then Tether, then Bootstrap JS. -->
    <!-- <script src="assets/js/jquery-3.4.1.min.js"></script> -->
    <script src="assets/js/jquery-min.js"></script>
    <script src="assets/js/popper.min.js"></script>
    <script src="assets/js/bootstrap.min.js"></script>
    <script src="assets/js/color-switcher.js"></script>
    <script src="assets/js/owl.carousel.min.js"></script>     
    <script src="assets/js/jquery.slicknav.js"></script>     
    <script src="assets/js/jquery.counterup.min.js"></script>      
    <script src="assets/js/waypoints.min.js"></script>     
    <script src="assets/js/form-validator.min.js"></script>
    <script src="assets/js/contact-form-script.js"></script>
    <script src="assets/js/main.js"></script>
    <!-- SweetAlert2 -->
    <script src="account/js/plugins/rater.js" charset="utf-8"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9"></script>
    <script src="assets/js/lightbox.min.js"></script>
    <script src="account/js/core/functions.js"></script>
    <script src="account/js/common.js"></script>
    <script src="account/js/core/jobseeker_categories.js"></script>
    <script src="account/js/plugins/notify.min.js"></script>
    <script src="landing.js"></script>
   
    <!-- Go to www.addthis.com/dashboard to customize your tools -->
<!-- <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5e718e145d83e594"></script> -->
<!-- <script type="text/javascript" src="//downloads.mailchimp.com/js/signup-forms/popup/unique-methods/embed.js" data-dojo-config="usePlainJson: true, isDebug: false"></script><script type="text/javascript">window.dojoRequire(["mojo/signup-forms/Loader"], function(L) { L.start({"baseUrl":"mc.us19.list-manage.com","uuid":"61d27d5e3d6a0a6152dbdb0bb","lid":"6c448a745b","uniqueMethods":true}) })</script> -->

  </body>
</html>