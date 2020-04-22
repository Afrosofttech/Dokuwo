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
      '<span>Proudly Powered by &copy; Afrika Software Technologies</span>'+
    '</div>'+
  '</div>'+
'</footer>';
}