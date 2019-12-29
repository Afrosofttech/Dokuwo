$(document).ready(function(){
    //loadJobseekerDashboard();
})

function jobseekerSideBar(){
    return '<ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">'+
        
    '<a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">'+
      '<div class="sidebar-brand-icon rotate-n-15">'+
        '<i class="fas fa-laugh-wink"></i>'+
      '</div>'+
      '<div class="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>'+
    '</a>'+
  
    '<hr class="sidebar-divider my-0">'+
  
    '<li class="nav-item active">'+
      '<a class="nav-link" href="index.html">'+
        '<i class="fas fa-fw fa-tachometer-alt"></i>'+
        '<span>Dashboard</span></a>'+
    '</li>'+
  
    '<li class="nav-item">'+
      '<a class="nav-link " href="">'+
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
        '<i class="fas fa-fw fa-cog""></i>'+
        '<span>Settings</span></a>'+
    '</li>'+

    '<hr class="sidebar-divider d-none d-md-block">'+
  
    '<div class="text-center d-none d-md-inline">'+
      '<button class="rounded-circle border-0" id="sidebarToggle" onclick="sidebarToggle(this)"></button>'+
    '</div>'+

  '</ul>';
}
function jobseekerDashBoardContent(){
    return '<div class="container-fluid">'+

    '<div class="row">'+

            '<div class="col-xl-4 col-md-6 mb-4">'+
            '<div class="card border-left-primary shadow h-100 py-2">'+
                '<div class="card-body">'+
                '<div class="row no-gutters align-items-center">'+
                    '<div class="col mr-2">'+
                    '<div class="text-xs font-weight-bold text-primary text-uppercase mb-1">Jobs Available</div>'+
                    '<div class="h5 mb-0 font-weight-bold text-gray-800">0</div>'+
                    '</div>'+
                    '<div class="col-auto">'+
                    '<i class="fas fa-briefcase fa-2x text-gray-300"></i>'+
                    '</div>'+
                '</div>'+
                '</div>'+
            '</div>'+
            '</div>'+

            '<div class="col-xl-4  col-md-6 mb-4">'+
            '<div class="card border-left-info shadow h-100 py-2">'+
                '<div class="card-body">'+
                '<div class="row no-gutters align-items-center">'+
                    '<div class="col mr-2">'+
                    '<div class="text-xs font-weight-bold text-info text-uppercase mb-1">Profile(Completion)</div>'+
                    '<div class="row no-gutters align-items-center">'+
                        '<div class="col-auto">'+
                        '<div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">50%</div>'+
                        '</div>'+
                        '<div class="col">'+
                        '<div class="progress progress-sm mr-2">'+
                            '<div class="progress-bar bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>'+
                        '</div>'+
                        '</div>'+
                    '</div>'+
                    '</div>'+
                    '<div class="col-auto">'+
                    '<i class="fas fa-user fa-2x text-gray-300"></i>'+
                    '</div>'+
                '</div>'+
                '</div>'+
            '</div>'+
            '</div>'+

            '<div class="col-xl-4 col-md-6 mb-4">'+
            '<div class="card border-left-warning shadow h-100 py-2">'+
                '<div class="card-body">'+
                '<div class="row no-gutters align-items-center">'+
                    '<div class="col mr-2">'+
                    '<div class="text-xs font-weight-bold text-warning text-uppercase mb-1">Messages</div>'+
                    '<div class="h5 mb-0 font-weight-bold text-gray-800">5</div>'+
                    '</div>'+
                    '<div class="col-auto">'+
                    '<i class="fas fa-comments fa-2x text-gray-300"></i>'+
                    '</div>'+
                '</div>'+
                '</div>'+
            '</div>'+
            '</div>'+
        '</div>'+

      '</div>'+
    '</div>';
}
function loadJobseekerDashboard(){
    let sidebar = jobseekerSideBar();
    let topbar = topBar();
    let dbcontent = jobseekerDashBoardContent();
    let foot = footer();
   
   $('#wrapper').prepend(sidebar);
   $('#content-wrapper').prepend(topbar);
   $('#content').append(dbcontent);
   $('#content-wrapper').append(foot);
}



