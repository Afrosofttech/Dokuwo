$(document).ready(()=>{

// Code to prevent default form submission

  $('#jobseeker').submit(function(e) {
    e.preventDefault();

    // let myForm = document.getElementById('jobseeker');
    // let formData = new FormData(myForm);
    // let data  = $("#jobseeker :input").serializeArray();
    // console.log(data);

    var fname = $('#firstname').val();
    var lname = $('#lastname').val();
    var email = $('#email').val();
    var passwd = $('#password').val();
 
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
    if (passwd.length < 8) {
      $('#password').after('<span class="error">Password must be at least 8 characters long</span>');
    }
    if (fname.length < 1) {
      $('#firstname').after('<span class="error">This Field is required</span>');
    }
    if (lname.length < 1) {
      $('#lastname').after('<span class="error">This Field is required</span>');
    }

    var form = document.getElementById('jobseeker');
    var formData = new FormData(form);
    let url = $('#jobseeker').attr('action');
    let type = $('#jobseeker').attr('method');
    
        $.ajax({
          method:type,
          url: url,
          data: formData,
          contentType: false,
          processData: false,
          cache:false,
          success:function(data){
            console.log(data);
            if(data == "true"){
              window.location.replace('login.php');
            }
            if(data == "false"){
              $('#message').html("INVALID INPUT FIELDS. PLEASE ENTER VALID DETAILS");
              window.location.replace('jobseekerdetail.php');
            }
            
            
          },
          error: function(err){
            $('#message').html(err);
            console.log(err);

          }
         
        });
  });




});