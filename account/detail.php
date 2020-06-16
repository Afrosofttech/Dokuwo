<!DOCTYPE html>
<html lang="en">

<head>

  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
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
  <link rel="manifest" href="https://dokuwo-assets.s3.amazonaws.com/assets/img/fav/manifest.json">
  <meta name="msapplication-TileColor" content="#ffffff">
  <meta name="msapplication-TileImage" content="https://dokuwo-assets.s3.amazonaws.com/assets/img/fav/ms-icon-144x144.png">
  <meta name="theme-color" content="#ffffff">

  <title>Dokuwo - Details</title>
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
  <!-- SweetAlert2 -->
  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9"></script>
  <script src="js/core/functions.js"></script>
  <!-- Custom scripts -->
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
        if(entity == 'Inexistent') window.location.replace('authentication.php?attempt=<?php echo "Inexistent"; ?>');
        if(entity == 'Activated')  window.location.replace('authentication.php?attempt=<?php echo "Activated"; ?>');
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
                  '<input type="text" class="form-control form-control-user" name="name" id="name" placeholder="Recruiter name">'+
                '</div>'+
                '<div class="form-group">'+
                  '<input type="email" class="form-control form-control-user" name="email" id="comp_email" placeholder="Recruiter email">'+
                '</div>'+
                '<div class="form-group">'+
                  '<input type="text" class="form-control form-control-user" name="phone" id="comp_phone" placeholder="Phone number...">'+
                '</div> '+
                '<div class="form-group">'+
                '<input type="text" class="form-control form-control-user" name="address" id="comp_address" placeholder="Recruiter Address">'+
                '</div> '+
                '<div class="form-group">'+
                '<input type="text" class="form-control form-control-user" name="postalcode" id="postalcode" placeholder="Postal Code" maxlength="5">'+
                '</div>'+ 
                '<div class="form-group">'+
                '<input type="text" class="form-control form-control-user" name="country" id="comp_country" placeholder="Country">'+
                '</div> '+
                '<div class="form-group">'+
                  '<select class="form-control" name="currency" id="currency">'+
                  ''+countries.map((currency,index) =>  '<option value = "'+currency.value+'" id="'+currency.value+'">'+currency.name+'</option>')+''+
                  '</select>'+
                '</div>'+
                '<div class="form-group">'+
                   '<p>The logo is optional and can be done later.</p>'+
                '</div>'+
                '<div class="form-group">'+
                '<input type="file" class="form-control form-control-user" name="logo" id="logo">'+
                '</div>'+
                '<div class="form-group">'+
                '<input type="hidden" class="form-control form-control-user" name="id" id="comp_id" value="'+entity.login_id+'">'+
                '</div>'+
                '<div class="text-center">'+
                '<button type="submit" class="btn btn-primary btn-user btn-block" id="comp_submit">Submit</button>'+
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
      $('#comp_submit').prop('disabled', true);
      var name = $('#name').val();
      var phone = $('#comp_phone').val();
      var address = $('#comp_address').val();
      var postalcode = $('#postalcode').val();
      var email = $('#comp_email').val();
      var errors = [];
      $(".error").remove();
      
      if (name.length < 1) {
        $('#comp_submit').prop('disabled', false);
        swal('Invalid Name!','Name field cannot be empty!','error','Cool');
        errors.push('name_error');
        return;
      }
      if(name.length > 50){
        $('#comp_submit').prop('disabled', false);
        swal('Invalid Name Length!','Recruiter Name field should not exceed 50 characters','error','Cool');
        errors.push('Name');
        return;
      }
      if(phone.length > 20){
        $('#comp_submit').prop('disabled', false);
        swal('Invalid phone Length!','Phone number field should not exceed 20 numbers','error','Cool');
        errors.push('phone');
        return;
      }else{
        var reg = /^\d+$/;
        var validPhone = reg.test(phone);
        if(!validPhone){
          $('#comp_submit').prop('disabled', false);
          swal('Invalid Phone!','Phone number field should only contain numbers','error','Cool');
          return;
        }
      }
      if(address.length > 255){
        $('#comp_submit').prop('disabled', false);
        swal('Invalid Address Length!','Address field should not exceed 255 charaters','error','Cool');
        errors.push('address');
        return;
      }
      if(postalcode.length > 5){
        $('#comp_submit').prop('disabled', false);
        swal('Invalid Postal code!','Postal Code field should not exceed 5 numbers','error','Cool');
        errors.push('Postalcode');
        return;
      }else{
        var reg = /^\d+$/;
        var validPostalCode = reg.test(postalcode);
        if(!validPostalCode){
          $('#comp_submit').prop('disabled', false);
          swal('Invalid Postal code!','Postal Code field should only contain numbers','error','Cool');
          return;
        }
      }
      if (email.length < 1) {
        $('#comp_submit').prop('disabled', false);
        swal('Invalid Email!','Email field cannot be empty','error','Cool');
        errors.push('email_error');
        return;
      } else {
      var regEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      var validEmail = regEx.test(email);
      if (!validEmail) {
        $('#comp_submit').prop('disabled', false);
        swal('Invalid Email!','Please enter a valid email','error','Cool');
        return;
        }
      }

      if(errors.length < 1){
          $.ajax({
            method: "POST",
            enctype: 'multipart/form-data',
            url: 'post.php/authentication/fill_company_account',
            contentType: false,
            cache: false,
            processData: false,
            data: new FormData(this),
            success:function(response){
              $('#comp_submit').prop('disabled', false);
              if(response == 200){
                window.location.replace('authentication.php?attempt=<?php echo "success"; ?>');
              }else if( response == "Invalid"){
                $('#logo').val('');
                swal('Invalid Image type!','You can only upload png, jpeg, or jpg','error','Cool');
              }else{
               window.location.replace('authentication.php?attempt=<?php echo "duplicate"; ?>');
              }
            },
            error: function(err){
              $('#comp_submit').prop('disabled', false);
              swalNotify("Error in creating account","warn");
            }
          });    
      }
      else{
        $('#comp_submit').prop('disabled', false);
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
            '<form class="user" method="POST" id="jobseeker" enctype="multipart/form-data" autocomplete="off">'+
                '<div class="form-group row">'+
                    '<div class="col-sm-6 mb-3 mb-sm-0">'+
                        '<input type="text" class="form-control form-control-user" name="firstname" id="firstname" placeholder="First name">'+
                    '</div>'+
                    '<div class="col-sm-6">'+
                        '<input type="text" class="form-control form-control-user" name="lastname" id="lastname" placeholder="Last name">'+
                    '</div>'+
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
                '<select class="form-control" id="category" name="category">'+
                  '<option value="" selected hidden>Select your job category of interest</option>'+
                  '<option value="Finance">Finance</option>'+
                  '<option value="IT & Engineering">IT & Engineering</option>'+
                  '<option value="Education or Training">Education/Training</option>'+
                  '<option value="Art or Design">Art/Design</option>'+
                  '<option value="Sale or Marketing">Sale/Marketing</option>'+
                  '<option value="Healthcare">Healthcare</option>'+
                  '<option value="Science">Science</option>'+
                  '<option value="Events,Catering & Entertainment">Events,Catering & Entertainment</option>'+
                  '<option value="Others">Others</option>'+
                '</select>'+
              '</div>'+
              '<div class="form-group">'+
                '<select class="form-control" id="interest" name="interest">'+
                  '<option value="" selected hidden>What are you looking for?</option>'+
                  '<option value="Job">Only job</option>'+
                  '<option value="Freelance">Job and / or Freelance work</option>'+
                '</select>'+
              '</div>'+
              '<div class="form-group">'+
                '<input type="text" class="form-control form-control-user" name="tag_line" id="tag_line" value="" maxlength="30" placeholder="choose the tag to appear on your profile e.g graphic designer">'+
              '</div>'+
              '<div class="form-group">'+
                '<textarea name="description" id="description" placeholder="give a short description of 250 characters or less" class="form-control" style="width:100%;height:70px;resize:none;display:none;" maxlength="250"></textarea>'+
              '</div>'+
              '<div class="form-group">'+
                '<input type="hidden" class="form-control form-control-user" name="id" id="Jobseeker_id" value="'+entity.login_id+'" >'+
              '</div>'+
              '<div class="form-group">'+
               '<p>Image and CV are optional and can be done later.</p>'+
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
                '<button class="btn btn-primary btn-user btn-block job_submit"  type="submit" id="submit">Submit</button>'+
              '</div>'+
              '</form>'+
              '</div>'+
            '</div>'+
        '</div>'+
      '</div>'+
    '</div>');
$(document).ready(function(){
  //on change
  $('#interest').on('change', function(){
     if($('#interest').val() == 'Freelance') $("#description").css("display", "block");
     else $("#description").css("display", "none");
  })
  $('#jobseeker').submit(function(e) {
    e.preventDefault();
    $('.job_submit').prop('disabled', true);
    var fname = $('#firstname').val();
    var lname = $('#lastname').val();
    var phone = $('#phone').val();
    var address = $('#address').val();
    var dob = $('#dateofbirth').val();
    var category =$('#category').val();
    var interest = $('#interest').val();
    var tag_line =$('#tag_line').val();
    var description = $('#description').val();
    var errors = [];

    $(".error").remove();
    if (fname.length < 1) {
      $('.job_submit').prop('disabled', false);
      swal('Invalid First Name!','First name cannot be empty','error','Cool');
      errors.push('fname_error');
      return;
    }
    if(fname.length > 25){
      $('.job_submit').prop('disabled', false);
      swal('Invalid First Name!','First name field should not exceed 25 characters','error','Cool');
      errors.push('fname_error');
      return;
    }
    if (lname.length < 1) {
      $('.job_submit').prop('disabled', false);
      swal('Invalid Last Name!','Last name cannot be empty','error','Cool');
      errors.push('lname_error');
      return;
    }
    if(lname.length > 25){
      $('.job_submit').prop('disabled', false);
      swal('Invalid Last Name!','Last name field should not exceed 25 characters','error','Cool');
      errors.push('lname');
      return;
    }
    if(phone.length > 20){
        $('.job_submit').prop('disabled', false);
        swal('Invalid phone Length!','Phone number field should not exceed 20 numbers','error','Cool');
        errors.push('phone');
        return;
      }else{
        var reg = /^\d+$/;
        var validPhone = reg.test(phone);
        if(!validPhone){
          $('.job_submit').prop('disabled', false);
          swal('Invalid Phone!','Phone number field should only contain numbers','error','Cool');
          return;
        }
      }
      if(address.length > 255){
        $('.job_submit').prop('disabled', false);
        swal('Invalid Address Length!','Address field should not exceed 255 charaters','error','Cool');
        errors.push('address');
        return;
      }
    if(dob == ''){
      $('.job_submit').prop('disabled', false);
      swal('Invalid date!','Date cannot be empty','error','Cool');
      errors.push('date_error');
      return;
    }
    if(category == 'Select your job category of interest'){
      $('.job_submit').prop('disabled', false);
        swal('Invalid Job Category!','Please select a job category','error','Cool');
        return;
    }
    if(interest == 'What are you looking for?'){
        $('.job_submit').prop('disabled', false);
        swal('Invalid interest!','Please indicate what interests you on Dokuwo','error','Cool');
        return;
    }
    if(tag_line == '' || tag_line == null){
      $('.job_submit').prop('disabled', false);
      swal('Invalid tag_line!','Please select a tag_line','error','Cool');
      return;
    }
    if(tag_line.length >30){
      $('.job_submit').prop('disabled', false);
      swal('Invalid tag_line!','Tag_line cannot be more that 30 characters in length','error','Cool');
    return;
    }
    if(interest == 'Job'){
      $('#description').val('');
    }

    if(errors.length < 1){
        $.ajax({
          method:'POST',
          url: 'post.php/authentication/fill_jobseeker_account',
          data: new FormData(this),
          contentType: false,
          processData: false,
          cache:false,
          success: response => {
            $('.job_submit').prop('disabled', false);
            if(response == 200){
              window.location.replace('authentication.php?attempt=<?php echo "success"; ?>');
            }else if( response == "Invalid Image"){
                $('#image').val('');
                swal('Invalid Image type!','You can only upload png, jpeg, or jpg','error','Cool');
            }else if(response == "Invalid CV"){
              $('#CV').val('');
               swal('Invalid CV type!','You can only upload jpeg, jpg, png, pdf, doc, docx, txt, zip','error','Cool');
            }else if(response == 'duplicate'){
               window.location.replace('authentication.php?attempt=<?php echo "duplicate"; ?>');
            }
          },
          error: err => {
            $('.job_submit').prop('disabled', false);
            swalNotify(err.responseText,'error');
          } 
        });
      }else{
          $('.job_submit').prop('disabled', false);
          return;
      }
    });
  });
  }else{
        window.location.replace('authentication.php?attempt=<?php echo "failed"; ?>');
   }
       $("#comp_country").countrySelect({
            defaultCountry: "gm"
          });
          
          $("#country").countrySelect({
            defaultCountry: "gm"
          });

          $(function() { 
                $( "#dateofbirth" ).datepicker({
                  dateFormat: "yy-mm-dd",
                  yearRange: "-100:+0",
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
                  swalNotify('Skill cannot be repeated','error');
                }
            });
        });
      },
      error:function(err){
        swalNotify(err.responseText,'error');
      }
    });
  }
</script>

</body>

</html>
