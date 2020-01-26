// Put all your custom javascript functions here
$(document).ready(()=>{
  var queryString = window.location.search;
  var urlParams = new URLSearchParams(queryString);
  var email = urlParams.get('email');
  var hash = urlParams.get('hash');
  
  if(email == null && hash == null){
    window.location.replace('authentication.php');
  }
  else{
    $.ajax({
      type:"GET",
      url:"get.php/company/retrieve_login_id",
      data:{"email" : email, "hash" : hash},
      success:function(data){
          $('#id').val(data);
      },
      error:function(err){
        console.log(err);
      }
    });
  }


    $('#jobseeker').submit(function(e) {
        e.preventDefault();
        jobseekerdetail();
    });
    $('#companydetail').submit(function(e) {
        e.preventDefault();
        companydetail();
    });
});

function jobseekerdetail(){
    var fname = $('#firstname').val();
    var lname = $('#lastname').val();
    var email = $('#email').val();
    var errors = [];
 
    $(".error").remove();
 
    if (email.length < 1) {
      $('#email').after('<span class="error">This field is required</span>');
    } else {
      var regEx = /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/;
      var validEmail = regEx.test(email);
      if (!validEmail) {
        // $('#email').after('<span class="error">Enter a valid email</span>');
      }
    }
    if (fname.length < 1) {
      $('#firstname').after('<span class="error">This Field is required</span>');
      errors.push('fname_error');
    }
    if (lname.length < 1) {
      $('#lastname').after('<span class="error">This Field is required</span>');
      errors.push('lname_error');
    }

    var form = document.getElementById('jobseeker');
    var formData = new FormData(form);
    let url = $('#jobseeker').attr('action');
    let type = $('#jobseeker').attr('method');
    
    if(errors.length < 1){
        $.ajax({
          method:type,
          url: url,
          data: formData,
          contentType: false,
          processData: false,
          cache:false,
          success:function(data){
            console.log(data);
            if(data == true){
              window.location.replace('authentication.php');
            }
            else{
              console.log(data);
              $('#message').html("INVALID INPUT FIELDS. PLEASE ENTER VALID DETAILS");
              
            }
            
            
          },
          error: function(err){
            $('#message').html(err);
            console.log(err);

          }
         
        });
    }
    else{
        return;
    }
}

function companydetail(){
    var name = $('#name').val();
    var email = $('#email').val();
    var errors = [];
 
    $(".error").remove();
 
    if (email.length < 1) {
      $('#email').after('<span class="error">This field is required</span>');
      errors.push('email_error');
    } else {
      var regEx = /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/;
      var validEmail = regEx.test(email);
      if (!validEmail) {
        // $('#email').after('<span class="error">Enter a valid email</span>');
      }
    }
    if (name.length < 1) {
      $('#name').after('<span class="error">This Field is required</span>');
      errors.push('name_error');
    }
    
    var form = document.getElementById('companydetail');
    var formData = new FormData(form);
    let url = $('#companydetail').attr('action');
    let type = $('#companydetail').attr('method');


    if(errors.length < 1){
        $.ajax({
          method:type,
          url: url,
          data: formData,
          contentType: false,
          processData: false,
          cache:false,
          success:function(data){
            console.log(data);
            if(data == true){
            window.location.replace('authentication.php');
            }
            else{
              $('#message').html("INVALID INPUT FIELDS. PLEASE ENTER VALID DETAILS");
              console.log(data);
            }
            
          },
          error: function(err){
            $('#message').html(err);
            console.log(err);

          }
         
        });

    }

    else{
        return;
    }
}