$(document).ready(function(){
    //loadAdminDashboard();
})
function adminSideBar(){
    return '<ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">'+
    
      '<a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">'+
        '<div class="sidebar-brand-icon rotate-n-15">'+
          '<i class="fas fa-laugh-wink"></i>'+
        '</div>'+
        '<div class="sidebar-brand-text mx-3">Dokuwo<sup></sup></div>'+
      '</a>'+
    
      '<hr class="sidebar-divider my-0">'+
    
      '<li class="nav-item active">'+
        '<a class="nav-link" href="index.html">'+
          '<i class="fas fa-fw fa-tachometer-alt"></i>'+
          '<span>Dashboard</span></a>'+
      '</li>'+
    
      '<li class="nav-item">'+
        '<a class="nav-link" href="">'+
          '<i class="fas fa-fw fa-briefcase"></i>'+
          '<span>Jobs</span></a>'+
      '</li>'+
    
      '<li class="nav-item">'+
        '<a class="nav-link" href="">'+
          '<i class="fas fa-fw fa-envelope"></i>'+
          '<span>Messages</span></a>'+
      '</li>'+
    
      '<li class="nav-item">'+
      '<a class="nav-link" href="">'+
          '<i class="fas fa-fw fa-users"></i>'+
          '<span>Job Seekers</span></a>'+
      '</li>'+

      '<li class="nav-item">'+
      '<a class="nav-link" href="">'+
          '<i class="fas fa-fw fa-users"></i>'+
          '<span>Job Providers</span></a>'+
      '</li>'+

      '<li class="nav-item">'+
      '<a class="nav-link" href="">'+
          '<i class="fas fa-fw fa-file-alt"></i>'+
          '<span>Applications</span></a>'+
      '</li>'+
    
      '<li class="nav-item">'+
        '<a class="nav-link" href="">'+
          '<i class="fas fa-fw fa-cog""></i>'+
          '<span>Settings</span></a>'+
      '</li>'+

      '<hr class="sidebar-divider d-none d-md-block">'+
    
      '<div class="text-center d-none d-md-inline">'+
        '<button class="rounded-circle border-0" id="sidebarToggle" onclick="sidebarToggle(this)"></button>'+
      '</div>'+

    '</ul>';
    }
function loadAdminDashboard(){
    let sidebar = adminSideBar();
    let topbar = topBar();
    let dbcontent = dashBoardContent();
    let foot = footer();
   
   $('#wrapper').prepend(sidebar);
   $('#content-wrapper').prepend(topbar);
   $('#content').append(dbcontent);
   $('#content-wrapper').append(foot);
}
function footer(){
    return '<footer class="sticky-footer bg-white">'+
    '<div class="container my-auto">'+
      '<div class="copyright text-center my-auto">'+
        '<span>Powered by &copy; Afrika Software Technologies</span>'+
      '</div>'+
    '</div>'+
  '</footer>';
}
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