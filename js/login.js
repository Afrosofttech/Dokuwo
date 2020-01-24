$(document).ready(()=>{

    $('#login').submit(function(e){
        e.preventDefault();

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


        let url = $('#login').attr('action');
        let type = $('#login').attr('method');
        let formData  = $("#login :input").serializeArray();
   
        $.ajax({
          method:type,
          url: url,
          data: formData,
          success:function(data){
            //  console.log(data);
             if(data === "valid"){
                 window.location.replace('index.php');
                }
             else{
               $('.status').html(data);
                    console.log(data);
             }
          },
          error: function(err){
            console.log(err);

          }
         
        });
        
    
    });
});