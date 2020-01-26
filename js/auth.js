$(document).ready(()=>{

    // Login form submission
    $('#login-form').submit(function(e){
        e.preventDefault();
        login();
    });

     // jobseeker registration form submission
     $('#jobseeker-form').submit(function(e){
        e.preventDefault();
        jobseeker();
    });

     // company registration form submission
     $('#company-form').submit(function(e){
        e.preventDefault();
        company();
    });
});

function login(){
    var email = $('#email').val();
    var passwd = $('#password').val();
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
    if (passwd.length < 8) {
    $('#password').after('<span class="error">Password must be at least 8 characters long</span>');
    errors.push('password_error');
    }
    let url = $('#login-form').attr('action');
    let type = $('#login-form').attr('method');
    let formData  = $("#login-form :input").serializeArray();
    if(errors.length < 1){
        $.ajax({
            method:type,
            url: url,
            data: formData,
            success:function(data){
               if(data == true){
                  window.location.replace('index.php');
                  }
               else{
                $.notify('Account does not exist','warn');
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

function jobseeker(){
    var email = $('#job_email').val();
    var passwd = $('#job_password').val();
    var errors = [];
    $(".error").remove();

    if (email.length < 1) {
    $('#job_email').after('<span class="error">This field is required</span>');
    errors.push('email_error');
    } else {
    var regEx = /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/;
    var validEmail = regEx.test(email);
    if (!validEmail) {
        // $('#email').after('<span class="error">Enter a valid email</span>');
    }
    }
    if (passwd.length < 8) {
    $('#job_password').after('<span class="error">Password must be at least 8 characters long</span>');
    errors.push('password_error');
    }
    let url = $('#jobseeker-form').attr('action');
    let type = $('#jobseeker-form').attr('method');
    let data  = $("#jobseeker-form :input").serializeArray();
    
    if(errors.length < 1){
        $.ajax({
            method:type,
            url: url,
            data: data,
            success:function(data){
              console.log(data);
              $.notify(data,"success",{position:"top center"});
              $("#jobseeker-form :input").each( function() {
                $(this).val('');
             });
              
            },
            error: function(err){
              $.notify("Error in creating account","warn",{position:"top center"});
              console.log(err);
  
            }
           
          });

    }
    else{
        return;
    }
      
        
}

function company(){
    var email = $('#comp_email').val();
    var passwd = $('#comp_password').val();
    var errors = [];
    $(".error").remove();

    if (email.length < 1) {
    $('#comp_email').after('<span class="error">This field is required</span>');
    errors.push('email_error');
    } else {
    var regEx = /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/;
    var validEmail = regEx.test(email);
    if (!validEmail) {
        // $('#email').after('<span class="error">Enter a valid email</span>');
    }
    }
    if (passwd.length < 8) {
    $('#comp_password').after('<span class="error">Password must be at least 8 characters long</span>');
    errors.push('password_error');
    }

    let url = $('#company-form').attr('action');
    let type = $('#company-form').attr('method');
    let data  = $("#company-form :input").serializeArray();
 
    if(errors.length < 1){

        $.ajax({
          method:type,
          url: url,
          data: data,
          success:function(data){
            console.log(data);
            $.notify(data,"success",{position:"top center"});
            $("#company-form :input").each( function() {
                $(this).val('');
             });
            
          },
          error: function(err){
            $.notify("Error in creating account","warn",{position:"top center"});
            console.log(err);

          }
         
        });
        
    }
    else{
       return;
    }
}
