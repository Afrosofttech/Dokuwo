$(document).ready(function(){
$('.sidebar li').click(function(e) {

    $('.sidebar li').removeClass('active');
  
    var $this = $(this);
    if (!$this.hasClass('active')) {
        $this.addClass('active');
    }
  });
})


// @biran-> moved logout function from admin file
function logout(){
  let temp ='  <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">'+
  '<div class="modal-dialog" role="document">'+
    '<div class="modal-content">'+
      '<div class="modal-header">'+
        '<h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>'+
        '<button class="close" type="button" data-dismiss="modal" aria-label="Close">'+
          '<span aria-hidden="true">×</span>'+
        '</button>'+
      '</div>'+
      '<div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>'+
      '<div class="modal-footer">'+
        '<button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>'+
        '<a class="btn btn-primary" href="authentication.php">Logout</a>'+
      '</div>'+
    '</div>'+
  '</div>'+
'</div>';

$('#logoutModal').modal('show');
$('#wrapper').append(temp);

}

// @biran-> moved sidebarToggle function from admin file
function sidebarToggle(e){
  // Toggle the side navigation
//   $("#sidebarToggle, #sidebarToggleTop").on('click', function(e) {
$("body").toggleClass("sidebar-toggled");
$(".sidebar").toggleClass("toggled");
if ($(".sidebar").hasClass("toggled")) {
  $('.sidebar .collapse').collapse('hide');
};
//   });
}

function footer(){
  return '<footer class="sticky-footer bg-white">'+
  '<div class="container my-auto">'+
    '<div class="copyright text-center my-auto">'+
      '<span><p class="copyright">&copy;&nbsp;2020. Powered by <a class="text-primary" href="javascript:void(0)">Afrika Software Technologies</a></p></span>'+
    '</div>'+
  '</div>'+
'</footer>';
}

function gotoHomepage(){
  var now = new Date();
  var base_url = "https://www.dokuwo.com/";
  now.setTime(now.getTime() + (15 * 60 * 1000));
  var expires = "expires="+ now.toUTCString();
  document.cookie ="cookie_usertype =" + session_usertype + ";" + expires + ";path=/";
  document.cookie ="cookie_user_id =" + session_user_id + ";" + expires + ";path=/";
  window.location.replace(`${base_url}`);
}

function addNewAttachment(){
  let attachArray=[];
  $(".newAttachment input").each(function() {
    attachArray.push(this.name);
});
  $(".newAttachment").append('<div class="form-group flex-fill"><input type="file" name="attachment'+((attachArray.length == 0)?(0):((attachArray.length-1)+1))+'" class="attachmentFile" style="width: 50%;"></div>');
}

function hireFreelancer(freelancerName,freelancer_id){
  let temp=  ' <!-- Modal -->'+
  '<div class="modal fade" id="hireModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">'+
    '<div class="modal-dialog modal-dialog-centered" role="document">'+
      '<div class="modal-content">'+
        '<div class="modal-header">'+
          '<h5 class="modal-title" id="exampleModalLongTitle" style="font-size: 25px;">Hire '+ freelancerName +'</h5>'+
          '<button type="button" class="close" data-dismiss="modal" aria-label="Close">'+
            '<span aria-hidden="true">&times;</span>'+
          '</button>'+
        '</div>'+
        '<div class="modal-body">'+

            '<div class="contact-block">'+
              // '<h5 class="text-center">'+ freelancerName +'</h5>'+
              '<form id="contactForm1">'+
                '<div class="row">'+
                  '<div class="col-md-6">'+
                    '<div class="form-group">'+
                      '<input type="text" class="form-control" id="hirer_name" name="name" placeholder="Name" required data-error="Please enter your name">'+
                      '<div class="help-block with-errors"></div>'+
                    '</div>'+                                 
                  '</div>'+
                  '<div class="col-md-6">'+
                    '<div class="form-group">'+
                      '<input type="text" placeholder="Email" id="hirer_email" class="form-control" name="name" required data-error="Please enter your email">'+
                      '<div class="help-block with-errors"></div>'+
                    '</div>'+ 
                  '</div>'+
                  '<div class="col-md-12">'+
                    '<div class="form-group">'+
                      '<input type="text" placeholder="phone" id="hirer_phone_number" class="form-control" required data-error="Please enter your phone number">'+
                      '<div class="help-block with-errors"></div>'+
                    '</div>'+
                  '</div>'+
                  '<div class="col-md-12">'+
                    '<div class="form-group">'+ 
                      '<textarea class="form-control" id="task" placeholder="Task you want to be done" rows="5" data-error="Please enter a task to be done" required></textarea>'+
                      '<div class="help-block with-errors"></div>'+
                    '</div>'+
            
                 ' </div>'+
               ' </div> ' +          
              '</form>'+
            '</div>'+
      
        '</div>'+
        '<div class="modal-footer">'+
          '<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>'+
          `<button type="button" class="btn btn-primary" onclick='hire_jobseeker("${freelancer_id}","${freelancerName}");'>Hire</button>`+
        '</div>'+
      '</div>'+
    '</div>'+
  '</div>';
  $('#hireModal').modal('show');
$('.content-section').append(temp);
}