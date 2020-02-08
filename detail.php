<!DOCTYPE html>
<html lang="en">

<head>

  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">

  <title>Career</title>
  <!-- Custom fonts for this template-->
  <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
  <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">
  <!-- jquery Datepicker plugin -->
  <link href= 'https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/ui-lightness/jquery-ui.css' rel='stylesheet'>
  <!-- Custom styles for this template-->
  <link href="css/sb-admin-2.min.css" rel="stylesheet">
  <link rel="stylesheet" href="css/custom.css">
  <!-- Bootstrap Form Helpers -->
	<link href="css/bootstrap-formhelpers.min.css" rel="stylesheet" media="screen">
  <link rel="stylesheet" href="css/countrySelect.min.css">
  <!-- Bootstrap tokenfield input -->
  <link rel="stylesheet" type="text/css" href="css/bootstrap-tokenfield.min.css">
  <link rel="stylesheet" type="text/css" href="css/tokenfield-typeahead.min.css">

</head>

<body class="bg-gradient-primary">

  <div class="container" id='message_body'></div>

  <!-- Bootstrap core JavaScript-->
  <script src="vendor/jquery/jquery.min.js"></script>
  <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <!-- Core plugin JavaScript-->
  <script src="vendor/jquery-easing/jquery.easing.min.js"></script>
  <!-- Custom scripts for all pages-->
  <script src="js/sb-admin-2.min.js"></script>
  <!-- jquery datepicker core js plugin -->
  <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js" ></script>
  <!-- custom currency list js -->
  <script src="js/core/currency.js"></script>
  <!-- Bootstrap tokenfield input js plugin -->
  <script src="js/plugins/bootstrap-tokenfield.min.js"></script>
  <!-- Custom scripts -->
  <script src="js/auth.js"></script>
  <script src="js/plugins/notify.min.js"></script>
  <script src="js/plugins/countrySelect.min.js"></script>
  
  <script>
  var queryString = window.location.search;
  var urlParams = new URLSearchParams(queryString);
  var email = urlParams.get('email');
  var hash = urlParams.get('hash');
  let country_curr = '';

  if(email == null || email == '' || hash == null || hash == ''){
    window.location.replace('authentication.php?attempt=<?php echo "failed"; ?>');
  }
  else{
    $.ajax({
      type:"GET",
      url:"get.php/company/retrieve_login_info",
      data:{"email" : email, "hash" : hash},
      success:function(data){
        var entity = $.parseJSON(data);
        if(entity.user_type == "company"){
      $('#message_body').html('<div class="card o-hidden border-0 shadow-lg my-5">'+
      '<div class="card-body p-0">'+
        '<div class="row">'+
          '<div class="col-lg-5 d-none d-lg-block bg-register-image"></div>'+
          '<div class="col-lg-7">'+
            '<div class="p-5">'+
              '<div class="message text-center" id="message"></div>'+
              '<div class="text-center">'+
                '<h1 class="h4 text-gray-900 mb-4" id="header-title">Complete your profile details</h1>'+
              '</div>'+
              '<div>'+
           '<form class="user" method="POST" id="companydetail" enctype="multipart/form-data" autocomplete="off">'+
                '<div class="form-group">'+
                  '<input type="text" class="form-control form-control-user" name="name" id="name" placeholder="Company name">'+
                '</div>'+
                '<div class="form-group">'+
                '<input type="email" class="form-control form-control-user" name="email" id="comp_email" placeholder="Company email">'+
                '</div>'+
                '<div class="form-group">'+
                '<input type="text" class="form-control form-control-user" name="phone" id="comp_phone" placeholder="Phone number...">'+
                '</div> '+
                '<div class="form-group">'+
                '<input type="text" class="form-control form-control-user" name="address" id="comp_address" placeholder="Company Address">'+
                '</div> '+
                '<div class="form-group">'+
                '<input type="text" class="form-control form-control-user" name="postalcode" id="postalcode" placeholder="Postal Code">'+
                '</div>'+ 
                '<div class="form-group">'+
                '<input type="text" class="form-control form-control-user" name="country" id="comp_country" placeholder="Country">'+
                '</div> '+
                '<div class="form-group">'+
                  '<select class="form-control" name="currency" id="currency">'+
                  ''+countries.map((currency,index) =>  '<option value = "'+currency.value+'" id="'+currency.value+'">'+currency.name+'</option>')+''+
                  '</select>'+
                '</div>'+
                // '<div class="form-group">'+
                // '<input type="file" class="form-control form-control-user" name="logo" id="logo">'+
                // '</div>'+
                '<div class="form-group">'+
                '<input type="hidden" class="form-control form-control-user" name="id" id="comp_id" value="'+entity.login_id+'">'+
                '</div>'+
                '<div class="text-center">'+
                '<button class="btn btn-primary btn-user btn-block" id="comp_submit">Submit</button>'+
                '</div>'+
              '</form>'+
              '</div>'+

          '</div>'+
        '</div>'+
      '</div>'+
    '</div>');

    $(document).ready(function(){
      $('#companydetail').submit(function(e) {
      e.preventDefault();

      var email = $('#comp_email').val();
      var errors = [];
      $(".error").remove();

      if (email.length < 1) {
      $('#comp_email').after('<span class="error">This field is required</span>');
      errors.push('email_error');
      } else {
      var regEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      var validEmail = regEx.test(email);
      if (!validEmail) {
          $('#email').after('<span class="error">Enter a valid email</span>');
          return;
        }
      }

      var data  = $("#companydetail :input").serializeArray();
      // var file = $('#logo')[0].files[0];
      // //@ams-> this is where you have to fix and make sure that the image is sent as a file
  
      if(errors.length < 1){
          $.ajax({
            method: "POST",
            enctype: 'multipart/form-data',
            url: 'post.php/authentication/fill_company_account',
            data: data,
            success:function(response){
              if(response == 200){
                window.location.replace('authentication.php?attempt=<?php echo "success"; ?>');
              }else{
               window.location.replace('authentication.php?attempt=<?php echo "duplicate"; ?>');
              }
            },
            error: function(err){
              $.notify("Error in creating account","warn",{position:"top center"});
            }
          });    
      }
      else{
        return;
      }
      });
    });
  }else if(entity.user_type == "jobseeker"){
      $('#message_body').html('<div class="card o-hidden border-0 shadow-lg my-5">'+
      '<div class="card-body p-0">'+
        '<div class="row">'+
          '<div class="col-lg-5 d-none d-lg-block bg-register-image"></div>'+
          '<div class="col-lg-7">'+
            '<div class="p-5">'+
              '<div class="message text-center" id="message"></div>'+
              '<div class="text-center">'+
                '<h1 class="h4 text-gray-900 mb-4" id="header-title">Complete your profile details</h1>'+
              '</div>'+
              '<div>'+
            '<form class="user" action="post.php/authentication/fill_jobseeker_account" method="POST" id="jobseeker" enctype="multipart/form-data" autocomplete="off">'+
                '<div class="form-group row">'+
                    '<div class="col-sm-6 mb-3 mb-sm-0">'+
                        '<input type="text" class="form-control form-control-user" name="firstname" id="firstname" placeholder="First name">'+
                    '</div>'+
                    '<div class="col-sm-6">'+
                        '<input type="text" class="form-control form-control-user" name="lastname" id="lastname" placeholder="Last name">'+
                    '</div>'+
                  '</div>'+
                '<div class="form-group">'+
                  '<input type="email" class="form-control form-control-user" name="email" id="email" placeholder="Email">'+
                '</div>'+
                '<div class="form-group row">'+
                  '<div class="col-sm-6 mb-3 mb-sm-0">'+
                    '<input type="text" class="form-control form-control-user" name="phone" id="phone" placeholder="Phone">'+
                  '</div>'+
                  '<div class="col-sm-6">'+
                    '<input type="text" class="form-control form-control-user" name="dateofbirth" id="dateofbirth" placeholder="Date of Birth...">'+
                  '</div>'+
                '</div>'+
                '<div class="form-group row">'+
                  '<div class="col-sm-6 mb-3 mb-sm-0">'+
                  '<input type="text" class="form-control form-control-user" name="address" id="address" placeholder="Address">'+
                  '</div>'+
                  '<div class="col-sm-6">'+
                  '<input type="text" class="form-control form-control-user" name="country" id="country">'+
                  '</div>'+
                '</div>'+
                '<div class="form-group">'+
                '<input type="text" class="form-control form-control-user" id="skills" name="skills" value="java,python" placeholder="Enter your skills here">'+
                '</div>'+
                '<div class="form-group">'+
                '<select class="form-control" id="educationlevel" name="educationlevel">'+
                  '<option value="" selected hidden>Select your most recent education level</option>'+
                  '<option value="High school diploma or equivalent">High school diploma or equivalent</option>'+
                  '<option value="Associate degree or equivalent">Associate degree or equivalent</option>'+
                  '<option value="Bachelors degree or equivalent">Bachelor\'s degree or equivalent</option>'+
                  '<option value="Masters degree or equivalent">Master\'s degree or equivalent</option>'+
                  '<option value="Doctoral degree or equivalent">Doctoral degree or equivalent</option>'+
                '</select>'+
              '</div>'+
                '<div class="form-group">'+
                '<input type="hidden" class="form-control form-control-user" name="id" id="id" value="'+entity.login_id+'" >'+
                '</div>'+
                '<div class="form-group">'+
                  '<div class="custom-file">'+
                  '<input type="file" class="form-control form-control-user custom-file-input" name="image" id="image" placeholder="image">'+
                  '<label class="custom-file-label" for="image">upload image</label>'+
                  '</div>'+
                '</div>'+
                '<div class="form-group">'+
                '<div class="custom-file">'+
                '<input type="file" class="form-control form-control-user custom-file-input" name="CV" id="CV" placeholder="CV">'+
                '<label class="custom-file-label" for="image">upload CV</label>'+
                '</div>'+
                '</div>'+
                '<div class="text-center">'+
                '<button class="btn btn-primary btn-user btn-block" id="submit">Submit</button>'+
                '</div>'+
              '</form>'+
              '</div>'+
            '</div>'+
        '</div>'+
      '</div>'+
    '</div>');

       }else{
        window.location.replace('authentication.php?attempt=<?php echo "failed"; ?>');
       }
       $("#comp_country").countrySelect({
            defaultCountry: "gm"
          });
          //@ams->I need to delete this function
          $("select#currency").change(function(){
            var selectedCountry = $(this).children("option:selected").val();
            alert("You have selected currency - " + selectedCountry);
          });
          
          $("#country").countrySelect({
            defaultCountry: "gm"
          });

          $(function() { 
                $( "#dateofbirth" ).datepicker({
                  dateFormat: "yy-mm-dd",
                  yearRange: "c-100:c+0",
                  changeMonth: true,
                  changeYear: true
                }); 
            });

          $('#skills').tokenfield({
          autocomplete: {
            source: [],
            delay: 100
          },
          showAutocompleteOnFocus: true
        });

        $('#skills').on('tokenfield:createtoken', function (event) {
            var existingTokens = $(this).tokenfield('getTokens');
            $.each(existingTokens, function(index, token) {
                if (token.value === event.attrs.value){
                  event.preventDefault();
                  $.notify('Skill cannot be repeated','error');
                }
            });
        });
      },
      error:function(err){
        console.log(err.responseText);
      }
    });
  }
</script>

</body>

</html>
