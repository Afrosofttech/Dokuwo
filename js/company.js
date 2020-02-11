$(document).ready(function(){
//
})
function sideBar(){
        return '<ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">'+
        
          '<a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">'+
            '<div class="sidebar-brand-icon rotate-n-15">'+
              '<i class="fas fa-laugh-wink"></i>'+
            '</div>'+
            '<div class="sidebar-brand-text mx-3">CAREER<sup></sup></div>'+ 
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
                '<a class="collapse-item" style="cursor: pointer;">Jobs</a>'+
                '<a class="collapse-item" style="cursor: pointer;">Create a new Job</a>'+
              '</div>'+
            '</div>'+
          '</li>'+
        
          '<li class="nav-item">'+
            '<a class="nav-link" style="cursor: pointer;" onclick="MessagesCenter();">'+
              '<i class="fas fa-fw fa-envelope"></i>'+
              '<span>Messages</span></a>'+
          '</li>'+
        
          '<li class="nav-item">'+
          '<a class="nav-link" style="cursor: pointer;" onclick="companyJobseekers();">'+
              '<i class="fas fa-fw fa-users"></i>'+
              '<span>Job Seekers</span></a>'+
          '</li>'+
        
          '<li class="nav-item">'+
            '<a class="nav-link" style="cursor: pointer;">'+
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

      '<ul class="navbar-nav ml-auto">'+

        '<li class="nav-item dropdown no-arrow mx-1 alertNotification">'+
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
            '<span class="badge badge-danger badge-counter NewMsgNotificationsCount">0</span>'+
          '</a>'+
       
           '<div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in NewMsgNotifications" aria-labelledby="messagesDropdown">'+
          //  '<script>newMsgNotification();</script>'+
           //   '<h6 class="dropdown-header">'+
          //     'Message Center'+
          //   '</h6>'+
          //   '<a class="dropdown-item d-flex align-items-center" href="#">'+
          //     '<div class="dropdown-list-image mr-3">'+
          //       '<img class="rounded-circle" src="https://source.unsplash.com/fn_BT9fwg_E/60x60" alt="">'+
          //       '<div class="status-indicator bg-success"></div>'+
          //     '</div>'+
          //     '<div class="font-weight-bold">'+
          //       '<div class="text-truncate">Hi there! I am wondering if you can help me with a problem I\'ve been having.</div>'+
          //       '<div class="small text-gray-500">Emily Fowler · 58m</div>'+
          //     '</div>'+
          //   '</a>'+
          //   '<a class="dropdown-item d-flex align-items-center" href="#">'+
          //     '<div class="dropdown-list-image mr-3">'+
          //       '<img class="rounded-circle" src="https://source.unsplash.com/AU4VPcFN4LE/60x60" alt="">'+
          //       '<div class="status-indicator"></div>'+
          //     '</div>'+
          //     '<div>'+
          //       '<div class="text-truncate">I have the photos that you ordered last month, how would you like them sent to you?</div>'+
          //       '<div class="small text-gray-500">Jae Chun · 1d</div>'+
          //     '</div>'+
          //   '</a>'+
          //   '<a class="dropdown-item d-flex align-items-center" href="#">'+
          //     '<div class="dropdown-list-image mr-3">'+
          //       '<img class="rounded-circle" src="https://source.unsplash.com/CS2uCrpNzJY/60x60" alt="">'+
          //       '<div class="status-indicator bg-warning"></div>'+
          //     '</div>'+
          //     '<div>'+
          //       '<div class="text-truncate">Last month\'s report looks great, I am very happy with the progress so far, keep up the good work!</div>'+
          //       '<div class="small text-gray-500">Morgan Alvarez · 2d</div>'+
          //     '</div>'+
          //   '</a>'+
          //   '<a class="dropdown-item d-flex align-items-center" href="#">'+
          //     '<div class="dropdown-list-image mr-3">'+
          //       '<img class="rounded-circle" src="https://source.unsplash.com/Mv9hjnEUHR4/60x60" alt="">'+
          //       '<div class="status-indicator bg-success"></div>'+
          //     '</div>'+
          //     '<div>'+
          //       '<div class="text-truncate">Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even if they aren\'t good...</div>'+
          //       '<div class="small text-gray-500">Chicken the Dog · 2w</div>'+
          //     '</div>'+
          //   '</a>'+
          //   '<a class="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>'+
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
function alertNotification(){
  //AMS:not being used at the moment
  return '<li class="nav-item dropdown no-arrow mx-1">'+
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
        '</li>';
}
function newMsgNotification(){
let temp = '';
  $.ajax({
    method: "GET",
    dataType: 'json',
    url: "get.php/company/new_unread_messages",
    data: {"login_id" : session_id},
    success: function(data){
      temp += '<h6 class="dropdown-header">'+
        'Message Center'+
      '</h6>';
      $.each(data, function(i,val){
        console.log(val);
        temp += '<a class="dropdown-item d-flex align-items-center" id="'+val[0].message_id+'" style="cursor: pointer;" onclick="redirectToMessageFromNotification(\''+val[0].message_id+'\',\''+val[0].creator_id+'\',\''+val[0].creator_name+'\',\''+val[0].subject+'\',\''+val[0].message_body+'\',\''+val[0].create_date+'\',\''+val[0].parent_message_id+'\');">'+
        // '<div class="dropdown-list-image mr-3">'+
        //   '<img class="rounded-circle" src="https://source.unsplash.com/fn_BT9fwg_E/60x60" alt="">'+
        //   '<div class="status-indicator bg-success"></div>'+
        // '</div>'+
        '<div class="font-weight-bold">'+
          '<div class="text-truncate">'+val[0].subject+'</div>'+
          '<div class="small text-gray-500">'+val[0].creator_name+' · unread</div>'+
        '</div>'+
      '</a>';
      })

      temp += '<a class="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>'; 
      $('.NewMsgNotificationsCount').empty().html(data.length);
      $('.NewMsgNotifications').empty().append(temp);

      }
    });
}
function profileImage(){
  //AMS:Not Being used atm
  return '<div class="topbar-divider d-none d-sm-block"></div>'+

  '<li class="nav-item dropdown no-arrow">'+
    '<a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">'+
      '<span class="mr-2 d-none d-lg-inline text-gray-600 small">Valerie Luna</span>'+
      '<img class="img-profile rounded-circle" src="https://ui-avatars.com/api/?name=Amadou+Sarjo+Jallow">'+
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
      '<div class="dropdown-divider"></div>'+
      '<a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal" onclick="logout();">'+
        '<i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>'+
        'Logout'+
      '</a>'+
    '</div>'+
  '</li>';
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
              '<div class="h5 mb-0 font-weight-bold text-gray-800" id="jobsPublished">0<script>number_of_jobs("jobsPublished")</script></div>'+
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
              '<div class="text-xs font-weight-bold text-warning text-uppercase mb-1">Job Seekers</div>'+
              '<div class="h5 mb-0 font-weight-bold text-gray-800" id="noOfJobSeekers">0</div>'+
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
   //let topbar = topBar();
   $('#wrapper').prepend(sidebar);
   let topbar = topBar();
   let dbcontentHeader = dashBoardContentheader();
   let foot = footer();

  $('#content-wrapper').prepend(topbar);
  $('#content').append(dbcontentHeader);
  $('#content-wrapper').append(foot);
  
  $.notify("Welcome back", 'success');
  
  // $.when(newMsgNotification())
  // .then(function () {
  // no_of_job_seekers();
  // });

  newMsgNotification();

  no_of_job_seekers();

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
function no_of_job_seekers(){
  $.ajax({
    method: "GET",
    dataType: 'json',
    url: "get.php/jobseeker/no_of_job_seekers",
    data: {"login_id" : session_id},
    success: function(data){
      $('#noOfJobSeekers' ).html(data);
   },
   error: function(err){
    //console.log(err.responseText);
    //$.notify(err.responseText,'error');
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
      // '<div class="chart-pie pt-4 pb-2">'+
      //   '<canvas id="myPieChart"></canvas>'+
      // '</div>'+
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
//Message center by @ams
function MessagesCenter(){
let temp = '<div class="container-fluid"><div class="row"><div class="col-md-3 sidebarMessage"></div><div class="col-md-9 contentMessage"></div></div></div>';
$('#content').empty().append(temp);

sidebarMessage();
contentMessage();

}
function sidebarMessage(){
  $.ajax({
    method: "GET",
    dataType: 'json',
    url: "get.php/company/no_of_new_messages",
    data: {"login_id" : session_id},
    success: function(data){
      // console.log(data);

      let sbMessage =  '<a style="cursor: pointer;" class="btn btn-primary btn-block mb-3 text-white" onclick="selectAJobseekerToMsg();">Compose</a>'+

      '<div class="card-body p-0 text-dark">'+
        '<ul class="nav nav-pills flex-column text-dark">'+
          '<li class="nav-item active text-dark">'+
            '<a class="nav-link" style="cursor: pointer;" onclick="contentMessage();">'+
              '<i class="fas fa-inbox text-dark"></i> Unread'+
              '<span class="badge bg-info float-right">'+data+'</span>'+
            '</a>'+
          '</li>'+
          '<li class="nav-item">'+
            '<a style="cursor: pointer;" class="nav-link" onclick="sentMessages();">'+
              '<i class="far fa-envelope"></i> Sent'+
            '</a>'+
          '</li>'+
          '<li class="nav-item">'+
          '<a href="#" class="nav-link">'+
            '<i class="far fa-file-alt"></i> Drafts'+
          '</a>'+
        '</li>'+
        '<li class="nav-item">'+
          '<a href="#" class="nav-link">'+
            '<i class="fas fa-filter"></i> Junk'+
            '<span class="badge bg-warning float-right">0</span>'+
          '</a>'+
        '</li>'+
        '<li class="nav-item">'+
          '<a href="#" class="nav-link">'+
            '<i class="far fa-trash-alt"></i> Trash'+
          '</a>'+
        '</li>'+
        '</ul>'+
      '</div>';

      $('.sidebarMessage').empty().append(sbMessage);
      // contentMessage();
   },
   error: function(err){
    //console.log(err.responseText);
    //$.notify(err.responseText,'error');
   }
  });
}
function contentMessage(){
  let conMessage ='';
  $.ajax({
    method: "GET",
    dataType: 'json',
    url: "get.php/company/all_inbox_messages",
    data: {"login_id" : session_id},
    success: function(data){

      //console.log(data);
   conMessage +=  '<div class="card card-primary card-outline shadow mb-4" style="border-top: 3px solid #007bff;">'+
        '<div class="card-header py-1 d-flex flex-row align-items-center justify-content-between">'+
          '<h4 class="card-title">Received Messages</h4>'+

        '</div>'+
        '<!-- /.card-header -->'+
        '<div class="card-body p-0">'+
          '<div class="table-responsive mailbox-messages">'+
            '<table class="table table-hover" id="myTable">'+
            '<thead>'+
            ' <th></th>'+
            ' <th></th>'+
            ' <th></th>'+
            ' <th></th>'+
            '</thead>'+
              '<tbody>';

              $.each(data, function( i, val ) {
                //console.log(val);
                let checkId = val[0].message_id+"checkbox";
                //AMS: am filtering the message body to get rid of all <p> tags
                var filteredMsgBody = val[0].message_body.replace(/<[\/]{0,1}(p)[^><]*>/ig,"");
                // onclick="viewMessage(\''+val[0].message_id+'\',\''+val[0].creator_id+'\',\''+val[0].creator_name+'\',\''+val[0].subject+'\',\''+val[0].message_body+'\',\''+val[0].create_date+'\',\''+val[0].parent_message_id+'\');"
                conMessage+= '<tr id="'+val[0].message_id+'" class="test" style="cursor: pointer;" >'+
                            '<td>'+
                              '<div class="icheck-primary">'+
                                '<input type="checkbox" value="" id="'+checkId+'">'+
                                '<label for="check1"></label>'+
                              '</div>'+
                            '</td>'+
                            '<td class="mailbox-name">'+val[0].creator_name+'</td>'+
                            '<td class="mailbox-subject"><b>'+val[0].subject+'</b> -'+filteredMsgBody.substring(0, 50)+''+
                            '</td>'+
                            '<td class="mailbox-date">'+val[0].create_date+'</td>'+
                          '</tr>';
              });
            conMessage +=  '</tbody>'+
                            '</table>'+
                            '<!-- /.table -->'+
                          '</div>'+
                          '<!-- /.mail-box-messages -->'+
                        '</div>'+
                        '<!-- /.card-body -->'+

                        '</div>'+

                      '</div>';

       $('.contentMessage').empty().append(conMessage);

       $(document).ready( function () {
        $('#myTable').DataTable({
          "aLengthMenu": [[10,25, 50, 75, -1], [10,25, 50, 75, "All"]],
          "oLanguage": {
            "sLengthMenu": "Display _MENU_ messages"
          },
          "emptyTable":     "No message available",
          fnDrawCallback: function() {
            $("#myTable thead").remove();
          }
        });

        $("#myTable").on("click", ".test", function(e){
          var id = $(this).attr('id');
          //console.log(data);
          $.each(data, function( i, val ) {
           if(val[0].message_id === id){
            viewMessage(val[0].message_id,val[0].creator_id,val[0].creator_name,val[0].subject,val[0].message_body,val[0].create_date,val[0].parent_message_id);
           }
          });
          //return false;
        });


        });

       geyOutReadMessages('myTable');
      },
      error: function(err){
       //console.log(err.responseText);
       //$.notify(err.responseText,'error');
      }
     });
}
function redirectToMessageFromNotification(message_id,creator_id,creator_name,subject,message_body,create_date,parent_message_id,fullName,login_id){
         //to be implemented
        //  MessagesCenter().promise().done(function() {
        //   console.log('======AMS=====');
        // });
        // $.when(  MessagesCenter() ).done(function() {
        //   console.log('======AMS=====');
        //   viewMessage(message_id,creator_id,creator_name,subject,message_body,create_date,parent_message_id,fullName,login_id);
        // });

        var deferred = $.Deferred();
        deferred
        .done(function(){
          MessagesCenter();
        })
        .then(function(){
          viewMessage(message_id,creator_id,creator_name,subject,message_body,create_date,parent_message_id,fullName,login_id);

        });
         
}
function viewMessage(msg_id,creator_id,creator_name,msg_subject,msg_body,created_date,parent_msg_id,jobseeker_name,jobseeker_id){
//AMS: both jobseeker_name and jobseeker_id are optional and only set when viewing sent messages

  let temp = '<div class="card card-primary shadow mb-4" style="border-top: 3px solid #007bff;">'+
    '<div class="card-header  py-1 d-flex flex-row align-items-center justify-content-between">'+
      '<h3 class="card-title">Read Message</h3>'+

      '<div class="card-tools">';
      (jobseeker_id === undefined)?temp += '<button class="btn btn-primary btn-icon-split" onclick="contentMessage();">':temp +='<button class="btn btn-primary btn-icon-split" onclick="sentMessages();">';
      
      temp +='<span class="icon text-white-50">'+
        '<i class="fas fa-arrow-left"></i>'+
      '</span>'+
      '<span class="text">Back</span>'+
    '</button>'+
      '</div>'+
    '</div>'+
    '<!-- /.card-header -->'+
    '<div class="card-body p-2 justify-content-between msgBodyViewed">'+
      '<div class="mailbox-read-info">'+
        '<h5><b>'+msg_subject+'</b></h5>'+
        '<h6><p id="'+msg_id+'">From: '+creator_name+'</p>'+
          '<span class="mailbox-read-time float-right">'+created_date+'</span></h6>'+
      '</div>'+
      '<!-- /.mailbox-read-info -->'+
      '<div class="mailbox-controls  text-center">'+
      '<hr>'+
        '<div class="btn-group">'+
          '<button type="button" class="btn btn-default btn-sm" data-toggle="tooltip" data-container="body" title="Delete" onclick="DeleteMessage(\''+msg_id+'\',\''+jobseeker_id+'\');">'+
          '<i class="far fa-trash-alt"></i></button>'+

          '<button type="button" class="btn btn-default btn-sm" data-toggle="tooltip" data-container="body" title="Reply" onclick="ReplyMsg(\''+msg_id+'\',\''+creator_id+'\',\''+creator_name+'\',\''+msg_subject+'\',\''+jobseeker_id+'\');">'+
            '<i class="fas fa-reply"></i></button>'+
          '<button type="button" class="btn btn-default btn-sm" data-toggle="tooltip" data-container="body" title="Forward" onclick="selectAJobseekerToForward(\''+msg_subject+'\',\''+msg_body+'\');">'+
            '<i class="fas fa-share"></i></button>'+
        '</div>'+
        '<!-- /.btn-group -->'+
        '<button type="button" class="btn btn-default btn-sm printbtn" data-toggle="tooltip" title="Print">'+
          '<i class="fas fa-print"></i></button>'+
      '</div>'+
      '<hr>'+
      '<!-- /.mailbox-controls -->'+
      '<div class="mailbox-read-message">'+
         '<p>'+msg_body+'</p>'+
        //'<p class="msgBodyViewed">This is a static text to be removed</p>'+
        // '<p>'+creator_name+'</p>'+
      '</div>'+
      '<!-- /.mailbox-read-message -->'+
    '</div>'+
    '<!-- /.card-footer -->'+
    '<div class="card-footer">'+
      '<div class="float-right">'+
        '<button type="button" class="btn btn-default" onclick="ReplyMsg(\''+msg_id+'\',\''+creator_id+'\',\''+creator_name+'\',\''+msg_subject+'\',\''+jobseeker_id+'\');"><i class="fas fa-reply"></i> Reply</button>'+
        '<button type="button" class="btn btn-default" onclick="selectAJobseekerToForward(\''+msg_subject+'\',\''+msg_body+'\')"><i class="fas fa-share"></i> Forward</button>'+
      '</div>'+
    '<button type="button" class="btn btn-default" onclick="DeleteMessage(\''+msg_id+'\',\''+jobseeker_id+'\');"><i class="far fa-trash-alt"></i> Delete</button>'+
    '<button type="button" class="btn btn-default printbtn"><i class="fas fa-print"></i> Print</button>'+
    '</div>'+
    '<!-- /.card-footer -->'+
  '</div>'+
  '<!-- /.card -->'+
'</div>';

$('.contentMessage').empty().append(temp);

$(document).ready(function (){
  console.log('amddddddd');
  if(jobseeker_id){
    $('#'+msg_id).html('To: '+jobseeker_name+'');
  }
  //Print a message
  $(".printbtn").click(function(){

    var mode = 'iframe'; //popup
    var close = mode == "popup";
    var options = { mode : mode, popClose : close};
    $("div.msgBodyViewed").printArea( options );

 });

  $("p").on("copy cut", function (e) {
    $.notify('copying disabled for good reasons','warning');
    e.preventDefault();
    return false;
});
$('p').mousedown(function(e) { 
  if (e.button == 2) { 
      e.preventDefault(); 
      $.notify('right-click is disabled!','warning'); 
  }
})

  $.ajax({
    method: "POST",
    dataType: 'json',
    url: "post.php/company/message_is_read",
    data: {"message_id" : msg_id},
    success: function(data){
      if(data == 200){
        sidebarMessage();
        newMsgNotification();
      }
    },
    error: function(err){
    //
    }
  })
  })

}
function selectAJobseekerToForward(msg_subject,msg_body){
  let conMessage ='';
  $.ajax({
    method: "GET",
    dataType: 'json',
    url: "get.php/company/retreive_all_jobseekers",
    success: function(data){

      // console.log(data);
   conMessage +=  '<div class="card card-primary card-outline shadow mb-4" style="border-top: 3px solid #007bff;">'+
        '<div class="card-header py-1 d-flex flex-row align-items-center justify-content-between">'+
          '<h4 class="card-title">Select a recipient</h4>'+

        '</div>'+
        '<!-- /.card-header -->'+
        '<div class="card-body p-0">'+
          '<div class="table-responsive mailbox-messages">'+
            '<table class="table table-hover" id="mySelector">'+
            '<thead>'+
             ' <th>id</th>'+
             '<th>img</th>'+
            ' <th>FullName</th>'+
            ' <th>Country</th>'+
            ' <th>Skills</th>'+
            '</thead>'+
              '<tbody>';
             if(data === 0){

             }else{

              $.each(data, function( i, val ) {
                //console.log(val);
                // let checkId = val.message_id+"checkbox";

                conMessage+= '<tr id="test101" style="cursor: pointer;" onclick="forwardMsgTo(\''+val.login_id+'\',\''+val.fullName+'\',\''+msg_subject+'\',\''+msg_body+'\');">'+
                            '<td>'+
                                '<input type="hidden" value="" id="'+val.login_id+'">'+
                            '</td>'+
                            '<td class="img-link"><img class=" rounded-circle" src="https://ui-avatars.com/api/?name=John+Doe&size=40" alt=""/>'+
                            '<div class="status-indicator bg-success"></div>'+
                            '</td>'+
                            '<td class="full-name"><b>'+val.fullName+'</b></td>'+
                            '<td class="country-name">'+val.country+'</td>'+
                            '<td class="Skills">'+val.skills.replace(',',' /')+'</td>'+
                          '</tr>';
              });
             }

            conMessage +=  '</tbody>'+
                            '</table>'+
                            '<!-- /.table -->'+
                          '</div>'+
                          '<!-- /.mail-box-messages -->'+
                        '</div>'+
                        '<!-- /.card-body -->'+

                        '</div>'+

                      '</div>';

       $('.contentMessage').empty().append(conMessage);

       $(document).ready( function () {
        $('#mySelector').DataTable({
          "aLengthMenu": [[10,25, 50, 75, -1], [10,25, 50, 75, "All"]],
          "oLanguage": {
            "sLengthMenu": "Display _MENU_ job seekers"
          },
          "emptyTable":     "No message available",
          fnDrawCallback: function() {
            $("#mySelector thead").remove();
          }
        });
        });

      },
      error: function(err){
       //console.log(err.responseText);
       //$.notify(err.responseTezxt,'error');
      }
     });
}
function forwardMsgTo(login_id,fullName,msg_subject,msg_body){
      $.ajax({
        method: "POST",
        // dataType: 'html',
        url: "post.php/company/send_msg_to_jobseeker",
        data: {"creator_id" : session_id, "fullname": session_fullname, "jobseeker_login_id" : login_id, "Name" : fullName,"parent_msg_id": null, "Subject" : msg_subject, "messageBody" : msg_body},
        success: function(data){
           if(data == 200){
            $.notify('Message has been sent successfully forwarded','success'); 
            contentMessage();
          }
        },
        error: function(err){
          //
        }
      });
}
function ReplyMsg(msg_id,recipient_id,recipient_name,msg_subject,jobseeker_id){
  //AMS: jobseeker_id is basically not necessary here. But since we are using the same function for viewing messages,
  //we are using it to differentiate btw sent and received messages as we wont support reply on sent messages

  if(jobseeker_id !== 'undefined'){
    $.notify('You can\'t reply to your own sent messages!','warning');
    return;
  }else{
    let temp =' <div class="card card-primary card-outline">'+
    '<div class="card-header">'+
      '<h3 class="card-title">Compose New Message</h3>'+
    '</div>'+
    '<!-- /.card-header -->'+
    '<div class="card-body">'+
      '<form id="ComposeNewMsg">'+
      '<div class="form-group input-group">'+
      '<span class="input-group-addon" style="padding: 6px 3px; border: 1px solid lightgrey; border-radius: 5px 0px 0px 5px">'+
      '<i class="fa fa-user"></i>'+
      '</span>'+
      '<input class="form-control" type="text" name="recipient" id="replyToName" value="'+recipient_name+'" readonly>'+
      '</div>'+
      '<div class="form-group">'+
        '<input class="form-control" id="replyToSubject" value="'+msg_subject+'">'+
      '</div>'+
      '<div class="form-group">'+
       '<div id="summernote" class="message_body_info"></div>'+
      '</div>'+
    '</div>'+
    '<!-- /.card-body -->'+
    '<div class="card-footer">'+
      '<div class="float-right">'+
        '<button type="submit" name="submit" id="newreplymsg" class="btn btn-primary"><i class="far fa-envelope"></i> Send</button>'+
      '</div>'+
      // '</form>'+
      '<button type="reset" class="btn btn-default" onclick="contentMessage();"><i class="fas fa-times"></i> Discard</button>'+
    '</div>'+
    '</form>';
  
  $('.contentMessage').empty().append(temp);
  $(document).ready(function() {
    var trap = false;
    $('#summernote').summernote({
      height: 300,
      lineHeight: 1,
      callbacks: {
        onPaste: function (e) {
            if (document.queryCommandSupported("insertText")) {
                var text = $(e.currentTarget).html();
                var bufferText = ((e.originalEvent || e).clipboardData || window.clipboardData).getData('Text');

                setTimeout(function () {
                    document.execCommand('insertText', false, bufferText);
                }, 10);
                e.preventDefault();
            } else { //IE
                var text = window.clipboardData.getData("text")
                if (trap) {
                    trap = false;
                } else {
                    trap = true;
                    setTimeout(function () {
                        document.execCommand('paste', false, text);
                    }, 10);
                    e.preventDefault();
                }
            }

        }
    }
    });

  //on submit
  $('#newreplymsg').click(function(e){
    e.preventDefault();
    if($('#replyToName').val() ===''){
      $.notify('Message receiver name cannot be empty','error');
    }else if($('#replyToSubject').val() === ''){
      $.notify('Subject field cannot be empty','error');
    }else{

    $.ajax({
      method: "POST",
      // dataType: 'json',
      url: "post.php/company/reply_jobseeker",
      data:{"creator_id": session_id,"creator_name": session_fullname,"recipient_id": recipient_id,"recipient_name": recipient_name,"parent_msg_id": msg_id,"subject": $('#replyToSubject').val(),"msg_body": $('.message_body_info').summernote('code')},
      success: function(data){
        console.log(data);
        if(data == 200){
          $.notify('Message has been sent successfully','success');
          contentMessage();
        }
      },
      error: function(err){
     //
      }
    });
  }
   });
  });
 }
}
function selectAJobseekerToMsg(){
  let conMessage ='';
  $.ajax({
    method: "GET",
    dataType: 'json',
    url: "get.php/company/retreive_all_jobseekers",
    success: function(data){
   conMessage +=  '<div class="card card-primary card-outline shadow mb-4" style="border-top: 3px solid #007bff;">'+
        '<div class="card-header py-1 d-flex flex-row align-items-center justify-content-between">'+
          '<h4 class="card-title">Select a recipient</h4>'+

        '</div>'+
        '<!-- /.card-header -->'+
        '<div class="card-body p-0">'+
          '<div class="table-responsive mailbox-messages">'+
            '<table class="table table-hover" id="mySelector">'+
            '<thead>'+
             ' <th>id</th>'+
             '<th>img</th>'+
            ' <th>FullName</th>'+
            ' <th>Country</th>'+
            ' <th>Skills</th>'+
            '</thead>'+
              '<tbody>';
             if(data === 0){

             }else{

              $.each(data, function( i, val ) {
                //console.log(val);
                // let checkId = val.message_id+"checkbox";

                conMessage+= '<tr id="test101" style="cursor: pointer;" onclick="composeNewMessage(\''+val.login_id+'\',\''+val.fullName+'\');">'+
                            '<td>'+
                                '<input type="hidden" value="" id="'+val.login_id+'">'+
                            '</td>'+
                            '<td class="img-link"><img class=" rounded-circle" src="https://ui-avatars.com/api/?name=John+Doe&size=40" alt=""/>'+
                            '<div class="status-indicator bg-success"></div>'+
                            '</td>'+
                            '<td class="full-name"><b>'+val.fullName+'</b></td>'+
                            '<td class="country-name">'+val.country+'</td>'+
                            '<td class="Skills">'+val.skills.replace(',',' /')+'</td>'+
                          '</tr>';
              });
             }

            conMessage +=  '</tbody>'+
                            '</table>'+
                            '<!-- /.table -->'+
                          '</div>'+
                          '<!-- /.mail-box-messages -->'+
                        '</div>'+
                        '<!-- /.card-body -->'+

                        '</div>'+

                      '</div>';

       $('.contentMessage').empty().append(conMessage);

       $(document).ready( function () {
        $('#mySelector').DataTable({
          "aLengthMenu": [[10,25, 50, 75, -1], [10,25, 50, 75, "All"]],
          "oLanguage": {
            "sLengthMenu": "Display _MENU_ job seekers"
          },
          "emptyTable":     "No message available",
          fnDrawCallback: function() {
            $("#mySelector thead").remove();
          }
        });
        });

      },
      error: function(err){
       //console.log(err.responseText);
       //$.notify(err.responseText,'error');
      }
     });
}
function composeNewMessage(login_id,fullName,divToClear){
   
let discard =  (divToClear == undefined)?"selectAJobseekerToMsg()": "discardMsg(\'"+divToClear+"\')";
let temp =' <div class="card card-primary card-outline shadow mb-4" style="border-top: 3px solid #007bff;">'+
// '<div class="card card-primary shadow mb-4" style="border-top: 3px solid #007bff;">'+
  '<div class="card-header py-1 d-flex flex-row align-items-center justify-content-between">'+
    '<h2 class="card-title text-primary">Compose New Message</h2>'+
  '</div>'+
  '<!-- /.card-header -->'+
  '<div class="card-body">'+
    '<form id="ComposeNewMsg">'+
    '<div class="form-group input-group">'+
    '<span class="input-group-addon" style="padding: 6px 3px; border: 1px solid lightgrey; border-radius: 5px 0px 0px 5px">'+
    '<i class="fa fa-user"></i>'+
    '</span>'+
    '<input class="form-control" type="text" name="recipient" id="thefullname" value="'+fullName+'" readonly>'+
    '</div>'+
    '<div class="form-group">'+
      '<input class="form-control" id="theSubject" placeholder="Subject:">'+
    '</div>'+
    '<div class="form-group">'+
     '<div id="summernote" class="message_info"></div>'+
    '</div>'+
  '</div>'+
  '<!-- /.card-body -->'+
  '<div class="card-footer">'+
    '<div class="float-right">'+
      '<button type="submit" name="submit" id="newmessage" class="btn btn-primary"><i class="far fa-envelope"></i> Send</button>'+
    '</div>'+
    '<button type="reset" class="btn btn-default" onclick="'+discard+'"><i class="fas fa-times"></i> Discard</button>'+
  '</div>'+
  '</form>';

  $('.contentMessage').empty().append(temp);
  $(document).ready(function() {
    $('#summernote').summernote({
      height: 300,
      lineHeight: 1,
      callbacks: {
        onPaste: function (e) {
            if (document.queryCommandSupported("insertText")) {
                var text = $(e.currentTarget).html();
                var bufferText = ((e.originalEvent || e).clipboardData || window.clipboardData).getData('Text');

                setTimeout(function () {
                    document.execCommand('insertText', false, bufferText);
                }, 10);
                e.preventDefault();
            } else { //Internet Explorer
                var text = window.clipboardData.getData("text")
                if (trap) {
                    trap = false;
                } else {
                    trap = true;
                    setTimeout(function () {
                        document.execCommand('paste', false, text);
                    }, 10);
                    e.preventDefault();
                }
            }

        }
    }
    });
  //on submit
  $('#newmessage').click(function(e){
    e.preventDefault();
    if($('#thefullname').val() ===''){
      $.notify('Message receiver name cannot be empty','error');
    }else if($('#theSubject').val() === ''){
      $.notify('Subject field cannot be empty','error');
    }else{
      $.ajax({
        method: "POST",
        // dataType: 'html',
        url: "post.php/company/send_msg_to_jobseeker",
        data: {"creator_id" : session_id, "fullname": session_fullname, "jobseeker_login_id" : login_id, "Name" : $('#thefullname').val(),"parent_msg_id": null, "Subject" : $('#theSubject').val(), "messageBody" : $('.message_info').summernote('code')},
        success: function(data){
           if(data == 200){
            $.notify('Message successfully sent','success'); 
            // if (divToClear == undefined){
            //   contentMessage();
            // }else{

            // }
            (divToClear == undefined)? contentMessage(): discardMsg(divToClear);
          }
        },
        error: function(err){
          //
        }
      });

      }

    });
});


}
function discardMsg(id){
$('.'+id).empty();
}
function sentMessages(){
    let sentMessages ={};
    let sentMessagesArray = [];
    let count = 0;
    let loopLength = '';
    let repeat = 0;
    $.ajax({
      method: "GET",
      dataType: 'json',
      url: "get.php/company/all_sent_messages",
      data: {"login_id" : session_id},
      success: function(data){
        //console.log(data);
    //     console.log(data);
    //  sentMessage +=  '<div class="card card-primary card-outline shadow mb-4" style="border-top: 3px solid #007bff;">'+
    //       '<div class="card-header py-1 d-flex flex-row align-items-center justify-content-between">'+
    //         '<h4 class="card-title">Received Messages</h4>'+
  
    //         '<div class="card-tools">'+
    //           '<div class="input-group input-group-sm">'+
    //             '<input type="text" class="form-control" placeholder="Search for a message">'+
    //             '<div class="input-group-append">'+
    //               '<div class="btn btn-primary">'+
    //                 '<i class="fas fa-search"></i>'+
    //               '</div>'+
    //             '</div>'+
    //           '</div>'+
    //         '</div>'+
    //         '<!-- /.card-tools -->'+
    //       '</div>'+
    //       '<!-- /.card-header -->'+
    //       '<div class="card-body p-0">'+
    //         '<div class="mailbox-controls">'+
    //           '<!-- Check all button -->'+
    //           '<button type="button" class="btn btn-default btn-sm checkbox-toggle"><i class="far fa-square"></i>'+
    //           '</button>'+
    //           '<div class="btn-group">'+
    //             '<button type="button" class="btn btn-default btn-sm"><i class="far fa-trash-alt"></i></button>'+
    //             '<button type="button" class="btn btn-default btn-sm"><i class="fas fa-reply"></i></button>'+
    //             '<button type="button" class="btn btn-default btn-sm"><i class="fas fa-share"></i></button>'+
    //           '</div>'+
    //           '<!-- /.btn-group -->'+
    //           '<button type="button" class="btn btn-default btn-sm" onclick="MessagesCenter();"><i class="fas fa-sync-alt"></i></button>'+
    //           '<div class="float-right">'+
    //             '1-50/200'+
    //             '<div class="btn-group">'+
    //               '<button type="button" class="btn btn-default btn-sm"><i class="fas fa-chevron-left"></i></button>'+
    //               '<button type="button" class="btn btn-default btn-sm"><i class="fas fa-chevron-right"></i></button>'+
    //             '</div>'+
    //             '<!-- /.btn-group -->'+
    //           '</div>'+
    //           '<!-- /.float-right -->'+
    //         '</div>'+
    //         '<div class="table-responsive mailbox-messages">'+
    //           '<table class="table table-hover">'+
    //             '<tbody>';
  
                $.each(data, function( i, val ) {
                  //let checkId = val.message_id+"checkbox";
                  loopLength = data.length;
                  ++count;
                  $.ajax({
                    method: "GET",
                    dataType: 'json',
                    url: "get.php/company/message_recipient",
                    data: {"message_id" : val.message_id},
                    success: function(data){

                      let login_id = data.login_id;
                      let fullName = data.fullName;
                      let message_id = val.message_id;
                      let creator_id = val.creator_id;
                      let creator_name = val.creator_name;
                      let subject = val.subject;
                      let message_body = val.message_body;
                      let create_date = val.create_date;
                      let parent_message_id = val.parent_message_id;

                      var sentMessages = {login_id,fullName,message_id,creator_id,creator_name,subject,message_body,create_date,parent_message_id};
                      sentMessagesArray.push(sentMessages);
                      
                      if(count == loopLength){
                        if(repeat == 0){
                          repeat = 1;
                          return;
                        }else{
                         sentMessagesContent(sentMessagesArray);
                        }
                     }                     
                    }
                  });
                  
                  // sentMessage+= '<tr id="'+val.message_id+'" style="cursor: pointer;" onclick="viewMessage(\''+val.message_id+'\',\''+val.creator_id+'\',\''+val.creator_name+'\',\''+val.subject+'\',\''+val.message_body+'\',\''+val.create_date+'\',\''+val.parent_message_id+'\');">'+
                  //             '<td>'+
                  //               '<div class="icheck-primary">'+
                  //                 '<input type="checkbox" value="" id="'+checkId+'">'+
                  //                 '<label for="check1"></label>'+
                  //               '</div>'+
                  //             '</td>'+
                  //             // '<td class="mailbox-star"><a href="#"><i class="fas fa-star text-warning"></i></a></td>'+
                  //             '<td class="mailbox-name">'+val.creator_name+'</td>'+
                  //             '<td class="mailbox-subject"><b>'+val.subject+'</b> -'+val.message_body.substring(0, 50)+''+
                  //             '</td>'+
                  //             // '<td class="mailbox-attachment"><i class="fas fa-paperclip"></i></td>'+
                  //             '<td class="mailbox-date">'+val.create_date+'</td>'+
                  //           '</tr>';
                });
        //       sentMessage +=  '</tbody>'+
        //                       '</table>'+
        //                       '<!-- /.table -->'+
        //                     '</div>'+
        //                     '<!-- /.mail-box-messages -->'+
        //                   '</div>'+
        //                   '<!-- /.card-body -->'+
        //                   '<div class="card-footer p-0">'+
        //                     '<div class="mailbox-controls">'+
        //                       '<!-- Check all button -->'+
        //                       '<button type="button" class="btn btn-default btn-sm checkbox-toggle"><i class="far fa-square"></i>'+
        //                       '</button>'+
        //                       '<div class="btn-group">'+
        //                         '<button type="button" class="btn btn-default btn-sm"><i class="far fa-trash-alt"></i></button>'+
        //                         '<button type="button" class="btn btn-default btn-sm"><i class="fas fa-reply"></i></button>'+
        //                         '<button type="button" class="btn btn-default btn-sm"><i class="fas fa-share"></i></button>'+
        //                       '</div>'+
        //                       '<!-- /.btn-group -->'+
        //                       '<button type="button" class="btn btn-default btn-sm" onclick="MessagesCenter();"><i class="fas fa-sync-alt"></i></button>'+
        //                       '<div class="float-right">'+
        //                         '1-50/200'+
        //                         '<div class="btn-group " id="sajojr">'+
        //                         ' <button type="button" class="btn btn-default btn-sm"><i class="fas fa-chevron-left" onclick=""></i></button>'+
        //                           '<button type="button" class="btn btn-default btn-sm"><i class="fas fa-chevron-right"></i></button>'+
        //                         '</div>'+
        //                         '<!-- /.btn-group -->'+
        //                       '</div>'+
        //                       '<!-- /.float-right -->'+
        //                     '</div>'+
        //                   '</div>'+
        //                   '</div>'+
  
        //                 '</div>';
  
        //  $('.contentMessage').empty().append(sentMessage);

        },
        error: function(err){
         //console.log(err.responseText);
         //$.notify(err.responseText,'error');
        }
       });
}
function sentMessagesContent(sentMessagesArray){
let temp = '';
       temp +=  '<div class="card card-primary card-outline shadow mb-4" style="border-top: 3px solid #007bff;">'+
          '<div class="card-header py-1 d-flex flex-row align-items-center justify-content-between">'+
            '<h4 class="card-title">Sent Messages</h4>'+

          '</div>'+
          '<!-- /.card-header -->'+
          '<div class="card-body p-0">'+
            '<div class="table-responsive mailbox-messages">'+
              '<table class="table table-hover" id="myt">'+
              '<thead>'+
              ' <th></th>'+
              ' <th></th>'+
              ' <th></th>'+
              ' <th></th>'+
              '</thead>'+
                '<tbody>';
                $.each(sentMessagesArray, function(i,val){
                  let checkId = val.message_id+"checkbox";
                 //AMS: am filtering the message body to get rid of all <p> tags
                  var filteredMsgBody = val.message_body.replace(/<[^>]+>/g, '');
        temp += '<tr id="'+val.message_id+'" style="cursor: pointer;" onclick="viewMessage(\''+val.message_id+'\',\''+val.creator_id+'\',\''+val.creator_name+'\',\''+val.subject+'\',\''+val.message_body+'\',\''+val.create_date+'\',\''+val.parent_message_id+'\',\''+val.fullName+'\',\''+val.login_id+'\');">'+
                      '<td>'+
                        '<div class="icheck-primary">'+
                          '<input type="checkbox" value="" id="'+checkId+'">'+
                          '<label for="check1"></label>'+
                        '</div>'+
                      '</td>'+
                      // '<td class="mailbox-star"><a href="#"><i class="fas fa-star text-warning"></i></a></td>'+
                      '<td class="mailbox-name">'+val.creator_name+'</td>'+
                      '<td class="mailbox-subject" id="jrcheck"><b>'+val.subject+'</b> -'+filteredMsgBody.substring(0, 50)+''+
                      '</td>'+
                      // '<td class="mailbox-attachment"><i class="fas fa-paperclip"></i></td>'+
                      '<td class="mailbox-date">'+val.create_date+'</td>'+
                    '</tr>';
                });

              temp +=  '</tbody>'+
                              '</table>'+
                              '<!-- /.table -->'+
                            '</div>'+
                            '<!-- /.mail-box-messages -->'+
                          '</div>'+
                          '<!-- /.card-body -->'+
                          '<div class="card-footer p-0">'+
                          '</div>'+
                          '</div>'+
  
                        '</div>';
  
        $('.contentMessage').empty().append(temp);


        $(document).ready( function () {
          $('#myt').DataTable({
            "aLengthMenu": [[10,25, 50, 75, -1], [10,25, 50, 75, "All"]],
            "oLanguage": {
              "sLengthMenu": "Display _MENU_ messages",
            },
            "emptyTable":     "No message available",
            "bDestroy": true,
            fnDrawCallback: function() {
              $("#myt thead").remove();
            }
          });
      } );
}
function DeleteMessage(msg_id,jobseeker_id){
  console.log('default:'+jobseeker_id);
if(jobseeker_id === 'undefined'){

$.ajax({
  method: "POST",
  dataType: 'json',
  url: "post.php/company/delete_message",
  data: {"message_id" : msg_id},
  success: function(data){
    if(data == 200){
      $.notify('message successfully deleted','success');
      contentMessage();
    }
    // else{
    //   $.notify('message has not been deleted','error');
    // }
  },
  error: function(err){
    //
  }
});
}else{
  $.notify('You can\'t delete sent messages','error');
  sentMessages();
}

}
function geyOutReadMessages(param){
  $.ajax({
    method: "GET",
    dataType: 'json',
    url: "get.php/company/read_messages",
    data: {"login_id" : session_id},
    success: function(data){
      if(data != 0){
        $.each(data, function(i,val){
          var table = $('#'+param).DataTable();
        table.$('tr#'+val.mess_rec_id).css({'background-color': 'gainsboro'});
        });
       
      }
    },
    error: function(err){
      //
    }
  });
}

//company_jobseekers by @ams
function companyJobseekers(){
let temp ='<section class="content">'+
'<div class="card card-primary card-outline shadow mb-4" style="border-top: 3px solid #007bff;">'+
'<div class="card-header py-1 d-flex flex-row align-items-center justify-content-between">'+
  '<h4 class="card-title">Categories</h4>'+
'</div>'+ 
 '<!-- Default box -->'+
 '<div class="card card-solid">'+
   '<div class="card-body pb-0">'+
     '<div class="row d-flex align-items-stretch comp_jobseekers">'+

     '</div>'+
     '</div>'+
   '</div>'+
   '<!-- /.card -->'+
   '</div>'+
  '</section>';
  $('#content').empty().append(temp);
let innertemp = '';
let subcat = '';
$.ajax({
  method: "GET",
  dataType: 'json',
  url: "get.php/company/categories_of_jobseekers",
  success: function(response){
    console.log(response);

    if(response != false){
      $.each(response, function(index,row){
        let sub = row.category;
       let  profileImage = '';
  (sub=='Finance')?subcat=Finance:(sub=='Software Engineers')?subcat=SE:(sub=='Health')?subcat=Health:(sub=='Law')?subcat=Law:subcat=''; 
   (sub=='Finance')?profileImage=FinanceImage:(sub=='Software Engineers')?profileImage=SEImage:(sub=='Health')?profileImage=HealthImage:(sub=='Law')?profileImage=LawImage:profileImage='graphic.jpeg';
        innertemp += '<div class="col-12 col-sm-6 col-md-4 d-flex align-items-stretch pb-5">'+
          '<div class="card bg-light" style="border-top: 3px solid #007bff;">'+
           '<div class="card-header text-muted border-bottom-0">'+
             '<h6 class="text-primary">'+row.category+"("+row.count+")"+'</h6>'+
           '</div>'+
           '<div class="card-body pt-0">'+
             '<div class="row">'+
               '<div class="col-6">'+
                 '<h3 class="lead"><b>Subcategories</b></h3>'+
                  '<ul class="ml-4 mb-0 fa-ul text-muted">'+
                   ''+subcat+''+
                  '</ul>'+
               '</div>'+
               '<div class="col-6 text-center">'+
                 '<img src="uploads/'+profileImage+'" alt="" class="img-fluid card-img-top rounded-circle img-thumbnail" style="width: 200px; height: 150px;">'+
               '</div>'+
             '</div>'+
           '</div>'+
           '<div class="card-footer">'+
           '<div class="text-right">'+
             '<a href="#" class="btn btn-sm btn-primary" data-toggle="tooltip" title="View" onclick="viewpeople(\''+row.category+'\')">'+
               '<i class="fas fa-users"></i> View people'+
             '</a>'+
           '</div>'+
          '</div>'+
        '</div>'+
      '</div>';
      });
    }
    $('.comp_jobseekers').append(innertemp);
  },
  error: function(err){
    //console.log(err.responseText);
  }
});
}
function viewpeople(category,start,finish){
  console.log(start);
  console.log(finish);
  let beg ='';
  let end ='';
  let numberOfItems = '';
  let totalPages = '';
  let forward = '';
  let Backward = '';
  let Prev = '';
  let Next = '';
  let temp = '<section class="content">'+
 '<!-- Default box -->'+
 '<div class="card card-solid">'+
   '<div class="card-body pb-0">'+
     '<div class="row d-flex align-items-stretch card-body-content" id="itemTemplate">'+
     '</div>'+
   '</div>'+
   '<!-- /.card-body -->'+
   '<div class="text-left">'+
   '<a href="#" class="btn btn-sm bg-teal btn-danger m-2 px-3" onclick=" companyJobseekers();">'+
     '<i class="fa fa-arrow-left"> Back </i>'+
   '</a>'+
  '</div>'+
  '<!-- / .back-btn -->'+
   '<div class="card-footer card-footer-links">'+
   '</div>';
   '<!-- /.card footer-->'+
 '</div>'+
 '<!-- /.card -->'+
'</section>';
$('#content').empty().append(temp);
if(start !== undefined && finish !== undefined){ beg = start; end = finish;}else{ beg = 0; end = 9;}
let cardbody = '';
$.ajax({
  method: "GET",
  dataType: "json",
  url: "get.php/company/jobseekers_of_this_category",
  data:{ 'category': category},
  success: function(response){
     numberOfItems = response.length;
     limitPerPage = 9;
     totalPages = Math.round(numberOfItems/limitPerPage);
    if(response != 400){

      $.each(response.slice(beg,end), function(index,individual){
        (individual.image == null || individual.image == '')?individual.image = 'default.jpg': individual.image = individual.image;
          
        cardbody +='<div class="col-12 col-sm-6 col-md-4 d-flex align-items-stretch pb-5 profileItem">'+
        '<div class="card bg-light" style="border-top: 3px solid #007bff;">'+
        '<div class="card-header text-muted border-bottom-0">'+
          ''+individual.tag_line+''+
        '</div>'+
        '<div class="card-body pt-0">'+
          '<div class="row">'+
            '<div class="col-7">'+
              '<h2 class="lead"><b>'+individual.fullName+'</b></h2>'+
                '<ul class="ml-4 mb-0 fa-ul text-muted">'+
                '<li class="small mb-2"><span class="fa-li"><i class="fas fa-lg fa-wrench"></i></span><b class="text-info">Skills: </b>'+individual.skills.replace(/,/g, "/")+'</li>'+
                '<li class="small mb-2"><span class="fa-li"><i class="fas fa-lg fa-building"></i></span><b class="text-info">Address: </b>'+individual.address+'</li>'+
                '<li class="small mb-2"><span class="fa-li"><i class="fas fa-lg fa-phone"></i></span><b class="text-info">Phone #: </b>'+individual.phone+'</li>'+
                '<li class="small mb-2"><span class="fa-li"><i class="fas fa-lg fa-envelope"></i></span><b class="text-info">Email: </b>'+individual.email+'</li>'+
              '</ul>'+
            '</div>'+
            '<div class="col-5 text-center">'+
              '<img src="uploads/'+individual.image+'" alt="" class="img-fluid card-img-top rounded-circle img-thumbnail" style="width: 1500px; height: 150px;">'+
            '</div>'+
          '</div>'+
        '</div>'+
        '<div class="card-footer">'+
          '<div class="text-right">'+
            '<a href="#" class="btn btn-sm bg-teal btn-success mx-1" data-toggle="tooltip" title="Send Message">'+
              '<i class="fas fa-comments"></i>'+
            '</a>'+
            '<a href="#" class="btn btn-sm btn-primary" data-toggle="tooltip" title="View profile" onclick="viewProfile(\''+individual.jobseeker_id+'\',\''+individual.login_id+'\',\''+individual.fname+'\',\''+individual.lname+'\',\''+individual.fullName+'\',\''+individual.email+'\',\''+individual.phone+'\',\''+individual.skills+'\',\''+individual.tag_line+'\',\''+individual.education_level+'\',\''+individual.address+'\',\''+individual.dob+'\',\''+individual.country+'\',\''+individual.image+'\',\''+individual.CV+'\',\''+category+'\');">'+
              '<i class="fas fa-user"></i> View Profile'+
            '</a>'+
          '</div>'+
        '</div>'+
        '</div>'+
        '</div>';
      });
      $('.card-body-content').append(cardbody);
    }
    let LastLast =  "viewpeople(\'"+category+"\',\'"+(limitPerPage*Math.floor(numberOfItems/limitPerPage))+"\',\'"+(numberOfItems)+"\')";
    (numberOfItems <= limitPerPage || numberOfItems == end)?(Next = 'disabled'):(numberOfItems < end+limitPerPage)? (forward = "viewpeople(\'"+category+"\',\'"+(beg+limitPerPage)+"\',\'"+numberOfItems+"\')"):(forward = "viewpeople(\'"+category+"\',\'"+(beg+limitPerPage)+"\',\'"+(end+limitPerPage)+"\')"); 
    (beg == 0 && (end == numberOfItems || end == limitPerPage))? (Prev = 'disabled',Backward = "viewpeople(\'"+category+"\',\'"+(beg)+"\',\'"+(end)+"\')"):(beg != 0 && end != numberOfItems)?(Backward = "viewpeople(\'"+category+"\',\'"+(beg-limitPerPage)+"\',\'"+(end-limitPerPage)+"\')"): (Backward = "viewpeople(\'"+category+"\',\'"+(beg-limitPerPage)+"\',\'"+(numberOfItems-(numberOfItems%limitPerPage))+"\')");
    let footerlinks ='<nav aria-label="Contacts Page Navigation">'+
      '<ul class="pagination justify-content-center m-0">'+
        '<li class="page-item First active"><a class="page-link" href="javascript:void(0)" onclick=" viewpeople(\''+category+'\',0,9)">First</a></li>'+
        '<li class="page-item '+Prev+'"><a class="page-link" href="javascript:void(0)" onclick="'+Backward+'">Prev</a></li>'+
        '<li class="page-item '+Next+'"><a class="page-link" href="javascript:void(0)" onclick="'+forward+'">Next</a></li>'+
        '<li class="page-item Last"><a class="page-link" href="javascript:void(0)" onclick="'+LastLast+'">Last</a></li>'+
      '</ul>'+
    '</nav>';
    
    $('.card-footer-links').append(footerlinks);

  },
  error: function(err){

  }
});

}
function viewProfile(profile_id,profile_log_id,profile_fname,profile_lname,profile_fullname,profile_email,profile_phone,profile_skills, profile_tag_line,profile_edu_level,profile_address,profile_dob,profile_country,profile_image,profile_cv,category){
console.log('PROFILE->');
console.log(profile_id+" "+profile_fullname);
let temp ='<div class="container-fluid"><div class="row"><div class="col-xl-6 col-lg-7 profileInner"></div><div class="col-xl-6 col-lg-5 contentMessage"></div></div></div>';

$('#content').empty().append(temp);
let divToClear = 'contentMessage';
(profile_cv == null || profile_cv == '')?profile_cv = 'javascript:void();': profile_cv = 'uploads/'+profile_cv;
let profile =
'<div class="card shadow mb-4" style="border-top: 3px solid #007bff;">'+
  '<div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">'+
    '<h6 class="m-0 font-weight-bold text-primary">Profile</h6>'+
  '</div>'+
  '<div class="card-body">'+
  '<div class="container">'+
  '<div class="row justify-content mb-4">'+
  '<div class="col col-lg-4">'+
    '<img src="uploads/'+profile_image+'" class="card-img-top rounded-circle img-thumbnail mb-2" alt="Jone Doe" style="width: 12rem; height: 12rem;">'+
  '</div>'+
    '<div class="col-lg-4">'+
      '<ul class="ml-4 mb-0 fa-ul text-muted">'+
      '<li class="small mb-3"><span class="fa-li"><i class="fas fa-lg fa-user"></i></span><b class="text-info">First Name: </b>'+profile_fname+'</li>'+
      '<li class="small mb-3"><span class="fa-li"><i class="fas fa-lg fa-envelope"></i></span><b class="text-info">Email: </b>'+profile_email+'</li>'+
      '<li class="small mb-3"><span class="fa-li"><i class="fas fa-lg fa-book"></i></span><b class="text-info">Education Level: </b>'+profile_edu_level+'</li>'+
      '<li class="small mb-3"><span class="fa-li"><i class="fas fa-lg fa-id-card"></i></span><b class="text-info">Date of birth: </b>'+profile_dob.toString()+'</li>'+
      '<li class="small mb-3"><span class="fa-li"><i class="fas fa-lg fa-wrench"></i></span><b class="text-info">Skills: </b>'+profile_skills.replace(/,/g, "/")+'</li>'+
      '<li class="small mb-3"><span class="fa-li"><i class="fas fa-lg fa-info"></i></span><b class="text-info">Tag-line: </b>'+profile_tag_line+'</li>'+
    '</ul>'+
  '</div>'+
    '<div class="col col-lg-4">'+
     '<ul class="ml-4 mb-0 fa-ul text-muted">'+
     '<li class="small mb-3"><span class="fa-li"><i class="fas fa-lg fa-user"></i></span><b class="text-info">Last Name: </b>'+profile_lname+'</li>'+
     '<li class="small mb-3"><span class="fa-li"><i class="fas fa-lg fa-phone"></i></span><b class="text-info">Phone #: </b>'+profile_phone+'</li>'+
     '<li class="small mb-3"><span class="fa-li"><i class="fas fa-lg fa-globe"></i></span><b class="text-info">Country: </b>'+profile_country+'</li>'+
     '<li class="small mb-3"><span class="fa-li"><i class="fas fa-lg fa-building"></i></span><b class="text-info">Address: </b>'+profile_address+'</li>'+
     '</ul>'+
    '</div>'+
    '</div>'+
   '</div>'+
  '</div>'+
    '<div class="card-footer">'+
      '<div class="text-right">'+
        '<a href="#" class="btn btn-sm btn-danger " data-toggle="tooltip" title="Back" onclick="viewpeople(\''+category+'\')">'+
         '<i class="fa fa-arrow-left"> Back </i>'+
        '</a>'+
        '<a href="#" class="btn btn-sm bg-teal btn-success mx-1" data-toggle="tooltip" title="Send Message" onclick="composeNewMessage(\''+profile_log_id+'\',\''+profile_fullname+'\',\''+divToClear+'\');">'+
          '<i class="fas fa-comments"> Message</i>'+
        '</a>'+
        '<a href="'+profile_cv+'"  target="_blank" class="btn btn-sm btn-info" data-toggle="tooltip" title="View CV">'+
          '<i class="fas fa-file-image"></i> View CV'+
        '</a>'+
      '</div>'+
    '</div>'+
   '</div>'+
  '</div>'+
 '</div>'+
'</div>';

  $('.profileInner').empty().append(profile);
}
