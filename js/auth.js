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

    // Jobseeker detail form submission
    $('#jobseeker').submit(function(e) {
        e.preventDefault();
        jobseekerdetail();
    });

    // Company detail form submission
    $('#companydetail').submit(function(e) {
        e.preventDefault();
        companydetail();
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
                var response = $.parseJSON(data);
               if(response === true)
               {
                  window.location.replace('index.php');
                }
               if(response === false)
               {
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
    var email = $('#comp_email').val();
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
