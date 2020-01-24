$(document).ready(()=>{
    // Code to prevent default form submission
  
    $('#register').submit(function(e) {
      e.preventDefault();
    });
   
  
  //  Code to submit form using ajax after clicking submit button
  
    $('#submit').click(function(){
      sendData();
      clearInput();
    
    });
  
  
    // function to clear form input fields after submission
  
    function clearInput() {
      $("#register :input").each( function() {
         $(this).val('');
      });
    }
  
    // Function to validate form data on client side before submission
  
    function validate(){
      var comp_email = $('#email').val();
      var comp_passwd = $('#password').val();
   
      $(".error").remove();
   
      if (comp_email.length < 1) {
        $('#email').after('<span class="error">This field is required</span>');
      } else {
        var regEx = /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/;
        var validEmail = regEx.test(comp_email);
        if (!validEmail) {
          // $('#email').after('<span class="error">Enter a valid email</span>');
        }
      }
      if (comp_passwd.length < 8) {
        $('#password').after('<span class="error">Password must be at least 8 characters long</span>');
      }
    }
  
    //  Function to send form data to the server using ajax
  
    function sendData(){
      let url = $('#register').attr('action');
      let type = $('#register').attr('method');
      let data  = $("#register :input").serializeArray();
      var comp_email = $('#email').val();
      var comp_passwd = $('#password').val();
  
      if(comp_email !== '' || comp_passwd !== ''){
        // alert(comp_email+ ' ' +comp_passwd + ' ' + usertype);
  
          validate();
  
          $.ajax({
            method:type,
            url: url,
            data: data,
            success:function(data){
              console.log(data);
              $.notify(data,"success");
              
            },
            error: function(err){
              $.notify("Error in creating account","warn");
              console.log(err);
  
            }
           
          });
          
      }
      else{
          $.notify("All fields are required","warn");
      }
           
    }
  
  
    });