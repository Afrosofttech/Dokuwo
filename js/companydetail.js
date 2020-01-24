$(document).ready(()=>{

  
  // Code to prevent default form submission

    $('#companydetail').submit(function(e) {
      e.preventDefault();
      
      // var data  = $("#companydetail :input").serializeArray();
      // data.push({"name":'"logo"',"value":fileName});
      
      var name = $('#name').val();
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
      if (name.length < 1) {
        $('#name').after('<span class="error">This Field is required</span>');
      }
      
      var form = document.getElementById('companydetail');
      var formData = new FormData(form);
      let url = $('#companydetail').attr('action');
      let type = $('#companydetail').attr('method');
      
          $.ajax({
            method:type,
            url: url,
            data: formData,
            contentType: false,
            processData: false,
            cache:false,
            success:function(data){
              console.log(data);
              $('#message').html(data);
              // window.location.replace('login.php');
              
            },
            error: function(err){
              $('#message').html(err);
              console.log(err);
  
            }
           
          });
      
    });

  
  
  });