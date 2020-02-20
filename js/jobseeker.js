$(document).ready(function(){
    //loadJobseekerDashboard();
})

function jobseekerSideBar(){
    return '<ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">'+
        
    '<a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.php">'+
      '<div class="sidebar-brand-icon rotate-n-15">'+
        '<i class="fas fa-laugh-wink"></i>'+
      '</div>'+
      '<div class="sidebar-brand-text mx-3">Career</div>'+
    '</a>'+
  
    '<hr class="sidebar-divider my-0">'+
  
    '<li class="nav-item active">'+
      '<a class="nav-link" href="index.php">'+
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
    let topbar = jtopBar();
    let dbcontent = jobseekerDashBoardContent();
    let foot = footer();
   
   $('#wrapper').prepend(sidebar);
   $('#content-wrapper').prepend(topbar);
   $('#content').append(dbcontent);
   $('#content-wrapper').append(foot);
}
function jtopBar(){
  return '<nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">'+
        '<ul class="navbar-nav ml-auto">'+
        '<!-- Nav Item - Alerts -->'+
        '<li class="nav-item dropdown no-arrow mx-1">'+
          '<a class="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">'+
            '<i class="fas fa-bell fa-fw"></i>'+
            '<!-- Counter - Alerts -->'+
           ' <span class="badge badge-danger badge-counter">3+</span>'+
          '</a>'+
          '<!-- Dropdown - Alerts -->'+
         ' <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="alertsDropdown">'+
            '<h6 class="dropdown-header">'+
             ' Alerts Center'+
            '</h6>'+
            '<a class="dropdown-item d-flex align-items-center" href="#">'+
              '<div class="mr-3">'+
               ' <div class="icon-circle bg-primary">'+
                  '<i class="fas fa-file-alt text-white"></i>'+
                '</div>'+
              '</div>'+
              '<div>'+
               ' <div class="small text-gray-500">December 12, 2019</div>'+
                '<span class="font-weight-bold">A new monthly report is ready to download!</span>'+
             ' </div>'+
            '</a>'+
            '<a class="dropdown-item d-flex align-items-center" href="#">'+
              '<div class="mr-3">'+
                '<div class="icon-circle bg-success">'+
                  '<i class="fas fa-donate text-white"></i>'+
                '</div>'+
              '</div>'+
              '<div>'+
                '<div class="small text-gray-500">December 7, 2019</div>'+
                '$290.29 has been deposited into your account!'+
              '</div>'+
            '</a>'+
            '<a class="dropdown-item d-flex align-items-center" href="#">'+
              '<div class="mr-3">'+
                '<div class="icon-circle bg-warning">'+
                  '<i class="fas fa-exclamation-triangle text-white"></i>'+
                '</div>'+
             ' </div>'+
              '<div>'+
                '<div class="small text-gray-500">December 2, 2019</div>'+
               ' Spending Alert: We\'ve noticed unusually high spending for your account.'+
              '</div>'+
           ' </a>'+
            '<a class="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>'+
          '</div>'+
       ' </li>'+
          '<li class="nav-item dropdown no-arrow mx-1">'+
            '<a class="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">'+
              '<i class="fas fa-envelope fa-fw"></i>'+
              '<!-- Counter - Messages -->'+
              '<span class="badge badge-danger badge-counter NewMsgNotificationsCount">0</span>'+
            '</a>'+
             '<div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in NewMsgNotifications" aria-labelledby="messagesDropdown">'+
              //add messages here@ams-target this div
              '<h6 class="dropdown-header">'+
              'Message Center'+
            '</h6>'+
            '<a class="dropdown-item d-flex align-items-center" id="" style="cursor: pointer;" onclick="">'+
            '<div class="font-weight-bold">'+
              '<div class="text-truncate">subject</div>'+
              '<div class="small text-gray-500">Amadou Sarjo · unread</div>'+
            '</div>'+
          '</a>'+
          '<a class="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>'+
            '</div>'+ 
          '</li>'+
          '<div class="topbar-divider d-none d-sm-block"></div>'+
          '<li class="nav-item dropdown no-arrow userProfile">'+
          //user Profile
          '<a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">'+
              '<span class="mr-2 d-none d-lg-inline text-gray-600 small">Amadou Sarjo jallow</span>'+
              '<img class="img-profile rounded-circle" src="uploads/default.jpg">'+
            '</a>'+
  
            '<div class="dropdown-menu dropdown-menu-right shadow animated--grow-in userProfile" aria-labelledby="userDropdown">'+
              '<a class="dropdown-item" href="#" onclick="settings();">'+
                '<i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>'+
                'Settings'+
              '</a>'+
              '<div class="dropdown-divider"></div>'+
              '<a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal" onclick="logout();">'+
                '<i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>'+
                'Logout'+
              '</a>'+
            '</div>'
          '</li>'+
        '</ul>'+
      '</nav>'; 
  }

