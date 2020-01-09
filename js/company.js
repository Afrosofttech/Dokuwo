$(document).ready(function(){
//
})
function sideBar(){
        return '<ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">'+
        
          '<a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">'+
            '<div class="sidebar-brand-icon rotate-n-15">'+
              '<i class="fas fa-laugh-wink"></i>'+
            '</div>'+
            '<div class="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>'+
          '</a>'+
        
          '<hr class="sidebar-divider my-0">'+
        
          '<li class="nav-item active">'+
            '<a class="nav-link" href="index.php">'+
              '<i class="fas fa-fw fa-tachometer-alt"></i>'+
              '<span>Dashboard</span></a>'+
          '</li>'+
        
          '<li class="nav-item">'+
            '<a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">'+
              '<i class="fas fa-fw fa-briefcase"></i>'+
              '<span>Jobs</span>'+
            '</a>'+
            '<div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">'+
              '<div class="bg-white py-2 collapse-inner rounded">'+
                '<a class="collapse-item" href="">Jobs</a>'+
                '<a class="collapse-item" href="">Create a new Job</a>'+
              '</div>'+
            '</div>'+
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
              '<i class="fas fa-fw fa-cog""></i>'+
              '<span>Settings</span></a>'+
          '</li>'+

          '<hr class="sidebar-divider d-none d-md-block">'+
        
          '<div class="text-center d-none d-md-inline">'+
            '<button class="rounded-circle border-0" id="sidebarToggle" onclick="sidebarToggle(this)"></button>'+
          '</div>'+

        '</ul>';
        }
function topBar(){
    return '<nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">'+

      '<button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">'+
        '<i class="fa fa-bars"></i>'+
      '</button>'+

      '<form class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">'+
        '<div class="input-group">'+
          '<input type="text" class="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2">'+
          '<div class="input-group-append">'+
            '<button class="btn btn-primary" type="button">'+
              '<i class="fas fa-search fa-sm"></i>'+
            '</button>'+
          '</div>'+
        '</div>'+
      '</form>'+

      '<ul class="navbar-nav ml-auto">'+

        '<li class="nav-item dropdown no-arrow d-sm-none">'+
          '<a class="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">'+
            '<i class="fas fa-search fa-fw"></i>'+
          '</a>'+

          '<div class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in" aria-labelledby="searchDropdown">'+
            '<form class="form-inline mr-auto w-100 navbar-search">'+
              '<div class="input-group">'+
                '<input type="text" class="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2">'+
                '<div class="input-group-append">'+
                  '<button class="btn btn-primary" type="button">'+
                    '<i class="fas fa-search fa-sm"></i>'+
                  '</button>'+
                '</div>'+
              '</div>'+
            '</form>'+
          '</div>'+
        '</li>'+

        '<li class="nav-item dropdown no-arrow mx-1">'+
          '<a class="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">'+
            '<i class="fas fa-bell fa-fw"></i>'+

            '<span class="badge badge-danger badge-counter">3+</span>'+
          '</a>'+

          '<div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="alertsDropdown">'+
            '<h6 class="dropdown-header">'+
              'Alerts Center'+
            '</h6>'+
            '<a class="dropdown-item d-flex align-items-center" href="#">'+
              '<div class="mr-3">'+
                '<div class="icon-circle bg-primary">'+
                  '<i class="fas fa-file-alt text-white"></i>'+
                '</div>'+
              '</div>'+
              '<div>'+
                '<div class="small text-gray-500">December 12, 2019</div>'+
                '<span class="font-weight-bold">A new monthly report is ready to download!</span>'+
              '</div>'+
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
              '</div>'+
              '<div>'+
                '<div class="small text-gray-500">December 2, 2019</div>'+
                  'Spending Alert: We\'ve noticed unusually high spending for your account.'+
              '</div>'+
            '</a>'+
            '<a class="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>'+
          '</div>'+
        '</li>'+

        '<li class="nav-item dropdown no-arrow mx-1">'+
          '<a class="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">'+
            '<i class="fas fa-envelope fa-fw"></i>'+
            '<!-- Counter - Messages -->'+
            '<span class="badge badge-danger badge-counter">7</span>'+
          '</a>'+
  
          '<div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="messagesDropdown">'+
            '<h6 class="dropdown-header">'+
              'Message Center'+
            '</h6>'+
            '<a class="dropdown-item d-flex align-items-center" href="#">'+
              '<div class="dropdown-list-image mr-3">'+
                '<img class="rounded-circle" src="https://source.unsplash.com/fn_BT9fwg_E/60x60" alt="">'+
                '<div class="status-indicator bg-success"></div>'+
              '</div>'+
              '<div class="font-weight-bold">'+
                '<div class="text-truncate">Hi there! I am wondering if you can help me with a problem I\'ve been having.</div>'+
                '<div class="small text-gray-500">Emily Fowler · 58m</div>'+
              '</div>'+
            '</a>'+
            '<a class="dropdown-item d-flex align-items-center" href="#">'+
              '<div class="dropdown-list-image mr-3">'+
                '<img class="rounded-circle" src="https://source.unsplash.com/AU4VPcFN4LE/60x60" alt="">'+
                '<div class="status-indicator"></div>'+
              '</div>'+
              '<div>'+
                '<div class="text-truncate">I have the photos that you ordered last month, how would you like them sent to you?</div>'+
                '<div class="small text-gray-500">Jae Chun · 1d</div>'+
              '</div>'+
            '</a>'+
            '<a class="dropdown-item d-flex align-items-center" href="#">'+
              '<div class="dropdown-list-image mr-3">'+
                '<img class="rounded-circle" src="https://source.unsplash.com/CS2uCrpNzJY/60x60" alt="">'+
                '<div class="status-indicator bg-warning"></div>'+
              '</div>'+
              '<div>'+
                '<div class="text-truncate">Last month\'s report looks great, I am very happy with the progress so far, keep up the good work!</div>'+
                '<div class="small text-gray-500">Morgan Alvarez · 2d</div>'+
              '</div>'+
            '</a>'+
            '<a class="dropdown-item d-flex align-items-center" href="#">'+
              '<div class="dropdown-list-image mr-3">'+
                '<img class="rounded-circle" src="https://source.unsplash.com/Mv9hjnEUHR4/60x60" alt="">'+
                '<div class="status-indicator bg-success"></div>'+
              '</div>'+
              '<div>'+
                '<div class="text-truncate">Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even if they aren\'t good...</div>'+
                '<div class="small text-gray-500">Chicken the Dog · 2w</div>'+
              '</div>'+
            '</a>'+
            '<a class="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>'+
          '</div>'+ 
        '</li>'+

        '<div class="topbar-divider d-none d-sm-block"></div>'+

        '<li class="nav-item dropdown no-arrow">'+
          '<a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">'+
            '<span class="mr-2 d-none d-lg-inline text-gray-600 small">Valerie Luna</span>'+
            '<img class="img-profile rounded-circle" src="https://source.unsplash.com/QAB-WJcbgJk/60x60">'+
          '</a>'+

          '<div class="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">'+
            '<a class="dropdown-item" href="#">'+
              '<i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>'+
              'Profile'+
            '</a>'+
            '<a class="dropdown-item" href="#">'+
              '<i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>'+
              'Settings'+
            '</a>'+
            '<a class="dropdown-item" href="#">'+
              '<i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>'+
              'Activity Log'+
            '</a>'+
            '<div class="dropdown-divider"></div>'+
            '<a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal" onclick="logout();">'+
              '<i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>'+
              'Logout'+
            '</a>'+
          '</div>'+
        '</li>'+

      '</ul>'+

    '</nav>'; 
}
function dashBoardContentheader(){
 return '<div class="container-fluid">'+

  '<div class="row">'+

    '<div class="col-xl-4 col-md-6 mb-4">'+
      '<div class="card border-left-primary shadow h-100 py-2">'+
        '<div class="card-body">'+
          '<div class="row no-gutters align-items-center">'+
            '<div class="col mr-2">'+
              '<div class="text-xs font-weight-bold text-primary text-uppercase mb-1">Jobs Published</div>'+
              '<div class="h5 mb-0 font-weight-bold text-gray-800" id="jobsPublished">loading...<script>number_of_jobs("jobsPublished")</script></div>'+
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
                  '<div class="h5 mb-0 mr-3 font-weight-bold text-gray-800" id="profileVal">loading..</div>'+
                '</div>'+
                '<div class="col">'+
                  '<div class="progress progress-sm mr-2">'+
                    '<div class="progress-bar bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" id="profileBar"></div>'+
                  '</div>'+
                '</div>'+
                '<script>'+
                'profile_completion("profileVal","profileBar")'+
                '</script>'+
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

'</div>';

}
function loadCompanyDashboard(){
 
  let sidebar = sideBar();
   let topbar = topBar();
   let dbcontentHeader = dashBoardContentheader();
   let foot = footer();
  
  $('#wrapper').prepend(sidebar);
  $('#content-wrapper').prepend(topbar);
  $('#content').append(dbcontentHeader);
  $('#content-wrapper').append(foot);
  
  $.notify("Welcome back", 'success');
  dashBoardContent();
}

function number_of_jobs(e){
   $.ajax({
     method: "GET",
     url: "get.php/company/no_of_jobs_published",
     data: {"login_id" : session_id},
     success: function(data){
      $('#'+e ).html(data);
    },
    error: function(err){
     //to be included soon
    }
   });

}
function profile_completion(id1,id2){
  $.ajax({
    method: "GET",
    url: "get.php/company/is_profile_complete",
    data: {"login_id" : session_id},
    success: function(data){
     $('#'+id1 ).html(data+"%");
     $('#'+id2).css('width',''+data+'%');
   },
   error: function(err){
    //to be included soon
   }
  });

}
function dashBoardContent(){

  let temp ='<div class="container-fluid"><div class="row dbInner"></div></div>';

  $('#content').append(temp);
  dashboardProfile();
}

function dashboardProfile(){

let profile = '';
  $.ajax({
    method: "GET",
    dataType: "json",
    url: "get.php/company/profile",
    data: {"login_id" : session_id},
    success: function(data){
 
    profile += '<div class="col-xl-6 col-lg-7">'+
     '<div class="card shadow mb-4">'+
       '<div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">'+
         '<h6 class="m-0 font-weight-bold text-primary">Profile</h6>'+
       '</div>'+
       '<div class="card-body">'+
         '<div class="container">'+
         '<div class="row justify-content-md-center mb-4">'+
           '<div class="col col-lg-2">'+
           '</div>'+
           '<div class="col-md-auto">'+
             '<img src="uploads/fb-cover.png" class="card-img-top rounded-circle img-thumbnail" alt="Jone Doe" style="width: 12rem; height: 12rem;">'+
           '</div>'+
           '<div class="col col-lg-2">'+
           '</div>'+
         '</div>'+
         '<div class="row justify-content-md-center mb-2">'+
           '<h3 class="card-title font-weight-bolder text-primary">'+data.company_name+'</h3>'+
         '</div>'+
         '<div class="row">'+
           '<div class="col col-lg-6">'+
             '<i class="fas fa-home"> '+data.company_address+'</i><br>'+
             '<i class="fas fa-map-marker"> '+data.country+'</i>'+
           '</div>'+
           '<div class="col col-lg-6">'+
             '<i class="fas fa-envelope"> '+data.company_email+'</i><br>'+
             '<i class="fas fa-phone"> '+data.company_phone+'</i><br>'+
           '</div>'+
         '</div>'+
       '</div>'+
       '</div>'+
     '</div>'+
   '</div>';

   $('.dbInner').append(profile);
    jobStatistics();

   },
   error: function(err){
    //to be included soon
   }
  });

}
function jobStatistics(){
  let job_statistics =  '<div class="col-xl-6 col-lg-5">'+
    
  '<div class="card shadow mb-4">'+

    '<div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">'+
      '<h6 class="m-0 font-weight-bold text-primary">Jobs Statistics</h6>'+
     '<div class="dropdown no-arrow">'+
        '<a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">'+
          '<i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>'+
        '</a>'+
        '<div class="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink">'+
          '<div class="dropdown-header">Dropdown Header:</div>'+
          '<a class="dropdown-item" href="#">Action</a>'+
          '<a class="dropdown-item" href="#">Another action</a>'+
          '<div class="dropdown-divider"></div>'+
          '<a class="dropdown-item" href="#">Something else here</a>'+
        '</div>'+
     '</div>'+
    '</div>'+

    '<div class="card-body">'+
      '<div class="chart-pie pt-4 pb-2">'+
        '<canvas id="myPieChart"></canvas>'+
      '</div>'+
      '<div class="mt-4 text-center small">'+
        '<span class="mr-2">'+
          '<i class="fas fa-circle text-primary"></i> Direct'+
        '</span>'+
        '<span class="mr-2">'+
          '<i class="fas fa-circle text-success"></i> Social'+
        '</span>'+
        '<span class="mr-2">'+
          '<i class="fas fa-circle text-info"></i> Referral'+
        '</span>'+
      '</div>'+
    '</div>'+
  '</div>'+
'</div>';
$('.dbInner').append(job_statistics);
}
