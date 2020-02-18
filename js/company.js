$(document).ready(function(){
//
})
function sideBar(){
        return '<ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">'+
        
          '<a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.php">'+
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
          '<a class="nav-link" style="cursor: pointer;" onclick="ShowJobsInfo();">'+
            '<i class="fas fa-fw fa-briefcase"></i>'+
            '<span>Jobs</span></a>'+
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
            '<a class="nav-link" style="cursor: pointer;" onclick="settings()">'+
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
              '<i class="fas fa-users fa-2x text-gray-300"></i>'+
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
     '<div class="card shadow mb-4" style="border-top: 3px solid #007bff;">'+
       '<div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">'+
         '<h6 class="m-0 font-weight-bold text-primary">Profile</h6>'+
       '</div>'+
       '<div class="card-body">'+
         '<div class="container">'+
         '<div class="row justify-content-md-center mb-4">'+
           '<div class="col col-lg-2">'+
           '</div>'+
           '<div class="col-md-auto">'+
             '<img src="uploads/'+data.logo+'" class="card-img-top rounded-circle img-thumbnail" alt="Jone Doe" style="width: 12rem; height: 12rem;">'+
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
    
  '<div class="card shadow mb-4" style="border-top: 3px solid #007bff;">'+

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
        '<div class="card-body p-1">'+
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
            "sLengthMenu": "Display _MENU_ messages",
            "sEmptyTable":     "No message available"
          },
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
       $.notify(err.responseText,'error');
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
        '<div class="card-body p-1">'+
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
                let img = (val.image == null)?"uploads/default.jpg": "uploads/"+val.image;
                conMessage+= '<tr id="test101" style="cursor: pointer;" onclick="forwardMsgTo(\''+val.login_id+'\',\''+val.fullName+'\',\''+msg_subject+'\',\''+msg_body+'\');">'+
                            '<td>'+
                                '<input type="hidden" value="" id="'+val.login_id+'">'+
                            '</td>'+
                            '<td class="img-link"><img class=" rounded-circle" src="'+img+'" style="height: auto;width: 5rem;" alt=""/>'+
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
            "sLengthMenu": "Display _MENU_ job seekers",
            "sEmptyTable":     "No message available"
          },
          fnDrawCallback: function() {
            $("#mySelector thead").remove();
          }
        });
        });

      },
      error: function(err){
       //console.log(err.responseText);
       $.notify(err.responseText,'error');
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
            $.notify('Message has been successfully forwarded','success'); 
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
        '<div class="card-body p-1">'+
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
            let img = (val.image == null)?"uploads/default.jpg": "uploads/"+val.image;

                conMessage+= '<tr id="test101" style="cursor: pointer;" onclick="composeNewMessage(\''+val.login_id+'\',\''+val.fullName+'\');">'+
                            '<td>'+
                                '<input type="hidden" value="" id="'+val.login_id+'">'+
                            '</td>'+
                            '<td class="img-link"><img class="rounded-circle img-thumbnail" src="'+img+'" style="height: auto;width: 5rem;" alt=""/>'+
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
            "sLengthMenu": "Display _MENU_ job seekers",
            "sEmptyTable":     "No message available"
          },
          fnDrawCallback: function() {
            $("#mySelector thead").remove();
          }
        });
        });

      },
      error: function(err){
       //console.log(err.responseText);
       $.notify(err.responseText,'error');
      }
     });
}
function composeNewMessage(login_id,fullName,divToClear){
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
      '<input class="form-control" id="theSubject" placeholder="Subject:" value="">'+
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
    '<button type="reset" class="btn btn-default" onclick="'+((divToClear == undefined)?"selectAJobseekerToMsg()": "discardMsg(\'"+divToClear+"\')")+'"><i class="fas fa-times"></i> Discard</button>'+
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
    let temp = '';
    $.ajax({
      method: "GET",
      dataType: 'json',
      url: "get.php/company/all_sent_messages",
      data: {"login_id" : session_id},
      success: function(data){
        temp +=  '<div class="card card-primary card-outline shadow mb-4" style="border-top: 3px solid #007bff;">'+
        '<div class="card-header py-1 d-flex flex-row align-items-center justify-content-between">'+
          '<h4 class="card-title">Sent Messages</h4>'+

        '</div>'+
        '<!-- /.card-header -->'+
        '<div class="card-body p-1">'+
          '<div class="table-responsive mailbox-messages">'+
            '<table class="table table-hover" id="myt">'+
            '<thead>'+
            ' <th></th>'+
            ' <th></th>'+
            ' <th></th>'+
            ' <th></th>'+
            '</thead>'+
              '<tbody>';
  
                $.each(data, function( i, val ) {
                  let checkId = val.message_id+"checkbox";
                  //@ams-> am filtering the message body to get rid of all <p> tags
                   var filteredMsgBody = val.message_body.replace(/<[^>]+>/g, '');
         temp += '<tr id="'+val.message_id+'" style="cursor: pointer;" onclick="viewMessage(\''+val.message_id+'\',\''+val.creator_id+'\',\''+val.creator_name+'\',\''+val.subject+'\',\''+val.message_body+'\',\''+val.create_date+'\',\''+val.parent_message_id+'\',\''+val.fullName+'\',\''+val.recipient_id+'\');">'+
                       '<td>'+
                         '<div class="icheck-primary">'+
                           '<input type="checkbox" value="" id="'+checkId+'">'+
                           '<label for="check1"></label>'+
                         '</div>'+
                       '</td>'+
                       // '<td class="mailbox-star"><a href="#"><i class="fas fa-star text-warning"></i></a></td>'+
                       '<td class="mailbox-name">'+val.fullName+'</td>'+
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
                "sEmptyTable":     "No message available"
                },
                "bDestroy": true,
                fnDrawCallback: function() {
                $("#myt thead").remove();
                }
              });
            });
        },
        error: function(err){
         //console.log(err.responseText);
         $.notify(err.responseText,'error');
        }
       });
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
    $.notify(err.responseText,'error');
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
      $.notify(err.responseText,'error');
    }
  });
}

//@ams->company_jobseekers
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
    $.notify(err.responseText,'error');
  }
});
}
function viewpeople(category,start,finish){
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
    $.notify(err.responseText,'error');
  }
});

}
function viewProfile(profile_id,profile_log_id,profile_fname,profile_lname,profile_fullname,profile_email,profile_phone,profile_skills, profile_tag_line,profile_edu_level,profile_address,profile_dob,profile_country,profile_image,profile_cv,category){
let temp ='<div class="container-fluid"><div class="row"><div class="col-xl-6 col-lg-7 profileInner"></div><div class="col-xl-6 col-lg-5 contentMessage"></div></div></div>';

$('#content').empty().append(temp);
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
        '<a href="#" class="btn btn-sm bg-teal btn-primary mx-1" data-toggle="tooltip" title="Send Message" onclick="composeNewMessage(\''+profile_log_id+'\',\''+profile_fullname+'\',\'contentMessage\');">'+
          '<i class="fas fa-comments"> Message</i>'+
        '</a>'+
        '<a href="'+((profile_cv == null || profile_cv == '')?'javascript:void();': 'uploads/'+profile_cv)+'"  target="_blank" class="btn btn-sm btn-info" data-toggle="tooltip" title="View CV">'+
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
//@ams->Company settings
function settings(){
// <!-- Content Wrapper. Contains page content -->
let temp='<div class="content-wrapper">'+
  '<!-- Content Header (Page header) -->'+

 ' <!-- Main content -->'+
  '<section class="content">'+
  
  '  <div class="container-fluid">'+
     ' <div class="row">';
     $.ajax({
      method: "GET",
      dataType: 'json',
      url: "get.php/company/company_profile",
      data: {"login_id" : session_id},
      success: function(data){
     if(data !== 400 ){
       console.log(data.postal_code);
        temp += ' <div class="col-md-4">'+
        ' <!-- Profile Image -->'+
        ' <div class="card card-primary card-outline" style="border-top: 3px solid #007bff;">'+
          ' <div class="card-body box-profile">'+
             '<div class="text-center">'+
               '<img class="img-fluid img-circle img-thumbnail" src="uploads/'+data.logo+'" style="width:100%;height:150px" alt="User profile picture">'+
             '</div>'+
              '<h4 class="profile-username text-center">'+data.company_name+'</h4>'+
             '<ul class="list-group list-group-unbordered mb-3">'+
               '<li class="list-group-item">'+
                 '<i class="fas fa-lg fa-envelope"></i><b> Email</b> <a class="float-right">'+data.email+'</a>'+
               '</li>'+
               '<li class="list-group-item">'+
                '<i class="fas fa-lg fa-phone"></i><b> Phone</b> <a class="float-right">'+data.company_phone+'</a>'+
              ' </li>'+
               '<li class="list-group-item">'+
                 '<i class="fas fa-lg fa-globe"></i><b> Country</b> <a class="float-right">'+data.country+'</a>'+
               '</li>'+
               '<li class="list-group-item">'+
               '<i class="fas fa-lg fa-building"></i><b> Address</b> <a class="float-right">'+data.company_address+'</a>'+
             '</li>'+
             '</ul>'+
             '<a href="javascript:void(0);" class="btn btn-primary btn-block"><b>Profile</b></a>'+
           '</div>'+
           '<!-- /.card-body -->'+
         '</div>'+
        ' <!-- /.card -->'+
       '</div>'+
       '<!-- /.col -->'+
       '<div class="col-md-8">'+
         '<div class="card" style="border-top: 3px solid #007bff;">'+
           '<div class="card-header p-2">'+
             '<ul class="nav nav-pills">'+
               '<li class="nav-item"><a class="nav-link active" href="#settings" data-toggle="tab">Settings</a></li>'+
               '</ul>'+
             '</div><!-- /.card-header -->'+
             '<div class="card-body">'+
              ' <div class="tab-content">'+
 
                 '<div class="active tab-pane" id="settings">'+
                   '<form class="form-horizontal" method="POST" id="editCompany" enctype="multipart/form-data" autocomplete="off">'+
                   '<div class="form-group row">'+
                      '<div class="col-sm-10">'+
                        '<input type="hidden" class="form-control" name="login_id" id="login_id" value="'+data.login_id+'">'+
                      '</div>'+
                   '</div>'+  
                   '<div class="form-group row">'+
                       '<label for="inputName" class="col-sm-2 col-form-label">Name</label>'+
                       '<div class="col-sm-10">'+
                         '<input type="text" class="form-control" name="name" id="inputName" value="'+data.company_name+'">'+
                       '</div>'+
                     '</div>'+
                     '<div class="form-group row">'+
                       '<label for="inputEmail" class="col-sm-2 col-form-label">Email</label>'+
                       '<div class="col-sm-10">'+
                         '<input type="email" class="form-control" name="email" id="inputEmail" value="'+data.email+'">'+
                       '</div>'+
                     '</div>'+
                     '<div class="form-group row">'+
                       '<label for="phone" class="col-sm-2 col-form-label">Phone</label>'+
                       '<div class="col-sm-10">'+
                         '<input type="text" placeholder="5336171" pattern="[0-9]+" class="form-control" name="phone" id="phone" value="'+data.company_phone+'">'+
                       '</div>'+
                     '</div>'+
                     '<div class="form-group row">'+
                     '<label for="country" class="col-sm-2 col-form-label">Country</label>'+
                     '<div class="col-sm-10">'+
                       '<input type="text" class="form-control" name="country" id="country">'+
                     '</div>'+
                   '</div>'+
                     '<div class="form-group row">'+
                       '<label for="address" class="col-sm-2 col-form-label">Address</label>'+
                       '<div class="col-sm-10">'+
                         '<textarea class="form-control" name="address" id="address" >'+data.company_address+'</textarea>'+
                       '</div>'+
                    ' </div>'+
                     '<div class="form-group row">'+
                       '<label for="password" class="col-sm-2 col-form-label">Password</label>'+
                      ' <div class="col-sm-10">'+
                         '<input type="password" class="form-control" name="password" id="password" placeholder="Enter new password">'+
                       '</div>'+
                     '</div>'+
                     '<div class="form-group row">'+
                     '<label for="currency" class="col-sm-2 col-form-label">Currency</label>'+
                    ' <div class="col-sm-10">'+
                    '<select class="form-control" name="currency" id="currency">'+
                      ''+countries.map((currency,index) =>  '<option value = "'+currency.value+'" id="'+currency.value+'">'+currency.name+'</option>')+''+
                       '</select>'+
                       '</div>'+
                   '</div>'+
                   '<div class="form-group row">'+
                     '<label for="code" class="col-sm-2 col-form-label">Postal Code</label>'+
                   ' <div class="col-sm-10">'+
                       '<input type="text" class="form-control" name="code" placeholder="00000" pattern="[0-9]+" maxlength="5" id="code" value="'+postalCodeFormatter(data.postal_code)+'">'+
                     '</div>'+
                   '</div>'+
                   ' <div class="form-group row">'+
                   ' <label for="exampleInputFile" class="col-sm-2 col-form-label">Logo</label>'+
                      '<div class="col-sm-10">'+
                       ' <input type="file" id="exampleInputFile" name="logo" onchange="readURL(this);">'+
                     ' </div>'+
                  '</div>'+
                     '<div class="form-group row">'+
                       '<div class="offset-sm-2 col-sm-10">'+
                         '<button type="submit" class="btn btn-success float-right">Update</button>'+
                       '</div>'+
                     '</div>'+
                   '</form>'+
                 '</div>'+
                 '<!-- /.tab-pane -->'+

               '</div>'+
              ' <!-- /.tab-content -->'+
             '</div><!-- /.card-body -->'+

           '</div>'+
           '<!-- /.nav-tabs-custom -->'+
         '</div>'+
         ' <!-- /.col -->'+
        '</div>'+
        ' <!-- /.row -->'+
        '</div><!-- /.container-fluid -->'+
  
      '</section>'+
      '<!-- /.content -->'+
  
    '</div>'+
    '<!-- /.content-wrapper -->';

    $('#content').empty().append(temp);

    $("#country").countrySelect();
    $("#country").countrySelect("setCountry",""+data.country+"");
    //@ams->countries actually refers to the currency of countries
     $.each(countries, function(index,currencyVals){
     if(currencyVals.value == data.currency){
       $("#currency option[value="+data.currency+"]").attr('selected', 'selected');
     }
    }) 
  $(document).ready(function(){
    $('#editCompany').submit(function(e) {
    e.preventDefault();
    var name = $('#inputName').val();
    var email = $('#inputEmail').val();
    var password = $('#password').val();
    var errors = [];
 
    if (email.length < 1) {
      swal('Invalid Email!','Email cannot be empty','error','Cool');
      errors.push('email_error');
      return;
    } else {
      var regEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      var validEmail = regEx.test(email);
      if (!validEmail) {
         swal('Invalid Email!','Please enter a valid email!','error','Cool');
         errors.push('email_error');
         return;
      }
    }
    if (name.length < 1) {
      swal('Invalid Name!','Name cannot be empty!','error','Cool');
      errors.push('name_error');
      return;
    }
    if(password !== '' && password.length < 8){
      swal('Invalid password!','password must at least be 8 characters!','error','Cool');
      errors.push('password_error');
      return;
    }

    if(errors.length < 1){
        $.ajax({
          method:'POST',
          url: 'post.php/company/update_company',
          data: new FormData(this),
          contentType: false,
          processData: false,
          cache:false,
          success:function(response){
            console.log(response);
            if(response == 200){
              swal('Update Successful!','Profile successfully updated','success','cool');
              settings();
            }else if( response == "Invalid"){
                swal('Invalid Image type!','You can only upload png, jpeg, or jpg','error','Cool');
            }
          },
          error: function(err){
            $.notify(err.responseText,'error');
          } 
        });
      }else{
          return;
      }
    //
    })
    });
  }else{
  $('#content').empty().append('<div>ERROR: This account doesn\'t exist. You should access here</div>');
  }

  },
  error: function(err){
    $.notify(err.responseText,'error');
  }
});
  $('#content').empty().append(temp);
}
function readURL(input) {
  if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = (e) => {
        Swal.fire({
          title: 'Your Selected picture',
          imageUrl: e.target.result,
          imageAlt: 'The uploaded picture',
        })
        $('.img-thumbnail')
              .attr('src', e.target.result)
              .addClass('img-fluid img-circle')
              .css({'width' : '100%' , 'height' : '150px'});
      };
      reader.readAsDataURL(input.files[0]);
  }
}
//@Biran->Company Job
function ShowJobsInfo(){
  let  temp = '<div class="container-fluid">'+
                  '<div class="d-sm-flex align-items-center justify-content-between mb-4">'+
                    '<div class="h3 mb-0"></div>'+
                    '<a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm" style="cursor: pointer;" onclick="CreateNewJob();"><i class="fas fa-shopping-bag fa-sm text-white-50"></i> New Job</a>'+
                  '</div>'+
              '<div class="row"><div class="col-md-7 jobsposted"></div><div class="col-md-5 appStatistics"></div></div></div>';
  $('#content').empty().append(temp);
  show_posted_jobs();
  show_application_stats();
 
}

function show_posted_jobs(){ 
  let jobsPosted = '';
  
  jobsPosted +='<div class="card card-primary card-outline shadow mb-4" style="border-top: 3px solid #007bff;">'+
  '<div class="card-header py-1 d-flex flex-row align-items-center justify-content-between">'+
    '<h4 class="card-title">Job History</h4>'+
  '</div>'+
  '<!-- /.card-header -->'+
  '<div class="card-body p-1">'+
    '<div class="table-responsive mailbox-messages">'+
      '<table class="table table-hover" id="jobsPostedTable">'+
      '<thead>'+
       ' <th>Position</th>'+
       '<th>Job Type</th>'+
      ' <th>Salary</th>'+
      ' <th>Date Posted</th>'+
      ' <th>Status</th>'+
      '</thead>'+
        '<tbody>';

  $.ajax({
    url: 'get.php/company/show_jobs_posted',
    method: 'GET',
    data: {'company_id':session_user_id},
    dataType: 'json',
    success: function(data){
    if(data !== 400){
      $.each(data, function( i, val ) {
        jobsPosted+='<tr id="'+val.job_id+'" style="cursor: pointer;" onclick="viewJob(\''+val.job_id+'\',\''+val.job_name+'\',\''+val.job_type+'\',\''+val.job_cat+'\',\''+val.requirements+'\',\''+val.job_location+'\',\''+val.date_posted+'\',\''+val.job_contact_email+'\',\''+val.job_contact_phone+'\',\''+val.salary+'\',\''+val.status+'\')">'+
                    '<td>' + val.job_name +'</td>'+
                    '<td>'+ val.job_type +'</td>'+
                    '<td>'+ session_curr+currencyFormat(val.salary) +'</td>'+
                    '<td>'+ val.date_posted +'</td>'+
                    '<td>'+ ((val.status == 0)?"Open": "Close") +'</td>'+
                  '</tr>';
      });
    }    
        jobsPosted+='</tbody>'+
      '</table>'+
      '<!-- /.table -->'+
      '</div>'+
      '<!-- /.mail-box-messages -->'+
    '</div>'+
    '<!-- /.card-body -->'+

    '</div>';
    $('.jobsposted').empty().append(jobsPosted);
    $(document).ready( function () {
      $('#jobsPostedTable').DataTable({
        "aLengthMenu": [[10,25, 50, 75, -1], [10,25, 50, 75, "All"]],
        "oLanguage": {
          "sLengthMenu": "Display _MENU_ jobs Posted",
          "sEmptyTable":     "No Jobs Posted"
        },
        
      });
      });
    },
    error: function(err){
      $.notify(err.responseText,'error');
    }
  });

  }
   
  function show_application_stats(){
    let appStats = '';
    appStats+=
    '<div class="card card-primary card-outline shadow mb-4" style="border-top: 3px solid #007bff;">'+
    '<div class="card-header py-1 d-flex flex-row align-items-center justify-content-between">'+
      '<h4 class="card-title">Appliation Statistics</h4>'+
    '</div>'+
    '<!-- /.card-header -->'+
    '<div class="card-body p-1">'+
      '<div class="table-responsive mailbox-messages">'+
        '<table class="table table-hover" id="appStatsTable">'+
        '<thead>'+
         ' <th>Position</th>'+
         '<th>Date Posted</th>'+
        ' <th>No. of Applicants</th>'+
        ' <th>Status</th>'+
        '</thead>'+
          '<tbody>';
    $.ajax({
      url: 'get.php/company/show_app_stats',
      method: 'GET',
      data: {'company_id':session_user_id},
      dataType: 'json',
      success: function(data){
        if(data !== 400){
          $.each(data, function( i, val ) {
            appStats+='<tr id="'+val.job_id+'" style="cursor: pointer;"  onclick="viewApplicantsDetails(\''+val.job_id+'\')">'+
                        '<td>' + val.job_name +'</td>'+
                        '<td>'+ val.date_posted +'</td>'+
                        '<td>'+ val.no_of_applicants +'</td>'+
                        '<td>'+((val.status == 0)?"Open": "Close")+'</td>'+
                      '</tr>';
          });
        }
        appStats+='</tbody>'+
      '</table>'+
      '<!-- /.table -->'+
      '</div>'+
      '<!-- /.mail-box-messages -->'+
    '</div>'+
    '<!-- /.card-body -->'+

    '</div>';
    $('.appStatistics').empty().append(appStats);
    $(document).ready( function () {
      $('#appStatsTable').DataTable({
        "aLengthMenu": [[10,25, 50, 75, -1], [10,25, 50, 75, "All"]],
        "oLanguage": {
          "sLengthMenu": "Display _MENU_ App Stats",
          "sEmptyTable":     "No Applications submitted"
        },
      
      });
      });
    
      },
      error:function(err){
        $.notify(err.responseText,'error');
      }
    
    });

    }

   function CreateNewJob(){
      let  temp = '<div class="container-fluid"><div class="row"><div class="col-md-12 jobsposted">'+
      '<div class="card card-primary card-outline shadow mb-4" style="border-top: 3px solid #007bff;">'+
      '<div class="card-header py-1 d-flex flex-row align-items-center justify-content-between">'+
        '<h4 class="card-title">New Job</h4>'+
      '</div>'+
      '<!-- /.card-header -->'+
      '<div class="card-body p-2">'+
      '<div class="table-responsive">'+
      '<form method="POST" id="createJob" autocomplete="off">'+
      '<div class="row p-3">'+
      '<div class="col-md-6 col-sm-4">'+
      '<div class="input-group mb-3">'+
      '<div class="input-group-prepend">'+
        '<span class="input-group-text">Position</span>'+
      '</div>'+
      '<input type="text" class="form-control" id="jobName" value="">'+
      '</div>'+
      '<div class="input-group mb-3">'+
      '<div class="input-group-prepend">'+
        '<span class="input-group-text">Location</span>'+
      '</div>'+
      '<input type="text" class="form-control" id="jobLocation" value="">'+
      '</div>'+
      '<div class="input-group mb-3">'+
      '<div class="input-group-prepend">'+
        '<span class="input-group-text">Salary</span>'+
      '</div>'+
      '<input type="number" class="form-control" id="salary" value="">'+
      '</div>'+
      '<div class="input-group mb-3">'+
      '<div class="input-group-prepend">'+
       '<span class="input-group-text">Contact Email</span>'+
      '</div>'+
      '<input type="text" class="form-control" id="contactEmail" value="">'+
      '</div>'+
      '<div class="input-group mb-3">'+
      '<div class="input-group-prepend">'+
        '<span class="input-group-text">Contact Phone</span>'+
      '</div>'+
      '<input type="text" class="form-control" id="contactPhone" value="">'+
     '</div>'+
     '<div class="input-group mb-3">'+
     '<div class="input-group-prepend">'+
       '<label class="input-group-text" for="jobType">Job Type</label>'+
      '</div>'+
        '<select class="custom-select" id="jobType">'+
          '<option selected>Choose...</option>'+
          '<option value="Full Time">Full Time</option>'+
          '<option value="Part Time">Part Time</option>'+
          '<option value="Internship">Internship</option>'+
        '</select>'+
      '</div>'+
      '</div>'+
      '<!-- /.col-md-6 col-sm-4-->'+
      '<div class="col-md-6 col-sm-4">'+
      '<div class="form-group">'+
      '<label class="input-group-text" for="summernote">Requirements</label>'+
      '<div id="summernote" class="message_body_info"></div>'+
     '</div>'+
      '</div>'+
      '<!-- /.col-md-6 col-sm-4-->'+
     ' <!-- Force next columns to break to new line at md breakpoint and up -->'+
      '<div class="w-100 d-none d-md-block"></div>'+
    
     ' <div class="col-md-6 col-sm-4">'+
     '<div class="input-group mb-3">'+
     '<div class="input-group-prepend">'+
       '<label class="input-group-text" for="jobCategory">Category</label>'+
     '</div>'+
     '<select class="custom-select" id="jobCategory">'+
       '<option selected>Choose...</option>'+
       '<option value="Finance">Finance</option>'+
       '<option value="Graphic designers">Graphic designers</option>'+
       '<option value="Health">Health</option>'+
       '<option value="Law">Law</option>'+
       '<option value="Software Engineers">Software Engineers</option>'+
       '<option value="Others">Others</option>'+
     '</select>'+
    '</div>'+
     '</div>'+
     '<!-- /.col-md-6 col-sm-4-->'+
      '<div class="col-md-6 col-sm-4 py-2 d-flex justify-content-between">'+
      '<button type="button" class="btn btn-danger" style="cursor: pointer;" onclick="ShowJobsInfo();"><i class="fas fa-lg fa-arrow-left"></i> Back</button>'+
      '<button type="submit" name="submit" id="createNewJob" class="btn btn-success" style="cursor: pointer;">Create <i class="fas fa-lg fa-arrow-right"></i></button>'+
      '</div>'+
      '<!-- /.col-md-6 col-sm-4-->'+
      '</form>'+
      '<!-- /.form-->'+
        '</div>'+
      '<!-- /.row p-2-->'+
      '</div>'+
      '<!-- /.mail-box-messages -->'+
    '</div>'+
    '<!-- /.card-body -->'+
    '</div>';
      '</div></div></div>';
    $('#content').empty().append(temp);
    $(document).ready(function(){
        $('#summernote').summernote({
          height: 200,
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
      $('#createNewJob').click(function(e){
        e.preventDefault();
        let jobName = $('#jobName').val();
        let jobLocation = $('#jobLocation').val();
        let contactEmail = $('#contactEmail').val();
        let contactPhone = $('#contactPhone').val();
        let salary = $('#salary').val();
        let jobType = $('#jobType').val();
        let jobCategory = $('#jobCategory').val();
        
        if (jobName == ''){
          swal('Invalid Job Position!','Job position cannot be empty','error','Cool');
          return;
        }
        if (jobLocation == ''){
         swal('Invalid Job Location!','Job location cannot be empty','error','Cool');
         return;
        }
        if (contactEmail.length < 1) {
         swal('Invalid Email!','Email cannot be empty','error','Cool');
         return;
        }else {
         var regEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
         var validEmail = regEx.test(contactEmail);
         if (!validEmail) {
            swal('Invalid Email!','Please enter a valid email!','error','Cool');
            return;
         }
        }
        if(contactPhone.length < 1){
         swal('Invalid Phone number!','Please enter a phone number','error','Cool');
         return;
        }else{
         var regEx = new RegExp('^[0-9]+$');
         var validPhone = regEx.test(contactPhone);
         if(!validPhone){
           swal('Invalid Phone number!','Please enter a valid phone number','error','Cool');
           return;
         }
        }
        if(salary == 0){
         swal('Invalid Salary!','Please enter the salary for the job','error','Cool');
         return;
        }else if(salary.length < 1){
         swal('Invalid Salary!','Please enter the salary for the job','error','Cool');
         return;
        }else{
         var regEx = new RegExp('^[0-9]+$');
         var validSalary = regEx.test(salary);
         if(!validSalary){
           swal('Invalid Salary!','Please enter a valid salary for the job','error','Cool');
           return;
         }
       }
       if(jobType == 'Choose...'){
        swal('Invalid Job Type!','Please select the job type','error','Cool');
        return;
       }
       if(jobCategory == 'Choose...'){
        swal('Invalid Job Category!','Please select the job category','error','Cool');
        return;
       }
       $.ajax({
        url: 'post.php/company/create_job',
        method: 'POST',
        data: {'company_id':session_user_id,'jobName': $('#jobName').val(),'jobLocation':$('#jobLocation').val(),'jobType':$('#jobType').val(),
        'jobCategory':$('#jobCategory').val(),'requirements':$('#summernote').summernote('code'),'salary':$('#salary').val(),
        'email':$('#contactEmail').val(),'phone':$('#contactPhone').val()},
        success: function(response){
          if(response == 200){
            $.notify('Job successfully created!','success');
            ShowJobsInfo();
          }
        },
        error: function(err){
          $.notify(err.responseText,'error');
        }
      });

      })

    })

    }

    function viewJob(job_id,job_name,job_type,job_cat,requirements,job_location,date_posted,job_contact_email,job_contact_phone,salary,status){
      let temp = '<div class="card card-primary card-outline shadow mb-4" style="border-top: 3px solid #007bff;">'+
      '<div class="card-header py-1 d-flex flex-row align-items-center justify-content-between">'+
        '<h4 class="card-title">Job detail</h4>'+
      '</div>'+
      '<!-- /.card-header -->'+
      '<div class="card-body p-1">'+
      '<div class="table-responsive">'+
      '<div class="row p-2">'+
        '<div class="col-md-9 col-sm-4">'+
        '<form method="POST" id="updateJob" autocomplete="off">'+
          '<div class="input-group mb-3">'+
            '<div class="input-group-prepend">'+
              '<span class="input-group-text">Position</span>'+
            '</div>'+
            '<input type="text" class="form-control" id="jobName" value="'+job_name+'">'+
          '</div>'+
          '<div class="input-group mb-3">'+
            '<div class="input-group-prepend">'+
              '<span class="input-group-text">Location</span>'+
            '</div>'+
            '<input type="text" class="form-control" id="jobLocation" value="'+job_location+'">'+
          '</div>'+
          '<div class="input-group mb-3">'+
          '<div class="input-group-prepend">'+
            '<label class="input-group-text" for="jobType">Job Type</label>'+
        '</div>'+
          '<select class="custom-select" id="jobType">'+
            '<option value="Full Time">Full Time</option>'+
            '<option value="Part Time">Part Time</option>'+
            '<option value="Internship">Internship</option>'+
          '</select>'+
        '</div>'+
        '<div class="input-group mb-3">'+
        '<div class="input-group-prepend">'+
          '<label class="input-group-text" for="jobCategory">Category</label>'+
       '</div>'+
        '<select class="custom-select" id="jobCategory">'+
          '<option value="Finance">Finance</option>'+
          '<option value="Graphic designers">Graphic designers</option>'+
          '<option value="Health">Health</option>'+
          '<option value="Law">Law</option>'+
          '<option value="Software Engineers">Software Engineers</option>'+
          '<option value="Others">Others</option>'+
        '</select>'+
       '</div>'+
          '<div class="form-group">'+
          '<label class="input-group-text" for="summernote">Requirements</label>'+
          '<div id="summernote" class="message_body_info">'+requirements+'</div>'+
         '</div>'+
        '</div>'+
        '<!-- /.col-md-9 col-sm-4 -->'+
        '<div class="col-md-3 col-sm-4"></div>'+
        '<!-- Force next columns to break to new line at md breakpoint and up -->'+
        '<div class="w-100 d-none d-md-block"></div>'+

        '<div class="col-md-9 col-sm-4">'+
       '<div class="input-group mb-3">'+
        '<div class="input-group-prepend">'+
          '<span class="input-group-text">Salary</span>'+
        '</div>'+
        '<input type="text" class="form-control" pattern="[0-9]+" id="salary" value="'+salary+'">'+
       '</div>'+
       '<div class="input-group mb-3">'+
        '<div class="input-group-prepend">'+
         '<span class="input-group-text">Contact Email</span>'+
        '</div>'+
        '<input type="email" class="form-control" id="contactEmail" value="'+job_contact_email+'">'+
       '</div>'+
       '<div class="input-group mb-3">'+
         '<div class="input-group-prepend">'+
           '<span class="input-group-text">Contact Phone</span>'+
         '</div>'+
         '<input type="text" class="form-control" placeholder="5336171" pattern="[0-9]+" id="contactPhone" value="'+job_contact_phone+'">'+
       '</div>'+
        '</div>'+
        '<!-- /.col-md-9 col-sm-4 -->'+
       '<div class="col-md-3 col-sm-4">'+
       ''+((status == 0)?('<div class="input-group mb-3">'+
       '<button type="submit" name="submit" class="btn btn-success btn-block" id="sendJobUpdate"><i class="fas fa-lg fa-arrow-right"></i> Update</button>'+
        '</div>'):('<div class="input-group mb-3">'+
        '<button type="button" class="btn btn-success btn-block disabled"><i class="fas fa-lg fa-arrow-right"></i> Update</button>'+
      '</div>'))+''+
        '</form>'+
        '<!-- /.form -->'+
        ''+((status == 0)?('<div class="input-group mb-3">'+
        '<button type="button" class="btn btn-warning btn-block" style="cursor: pointer;" onclick="closeJob(\''+job_id+'\')"><i class="fas fa-lg fa-window-close"></i> Close Job</button>'+
     '</div>'):( '<div class="input-group mb-3">'+
     '<button type="button" class="btn btn-warning btn-block disabled" style="cursor: pointer;" onclick="javascript:void(0);"><i class="fas fa-lg fa-window-close"></i> Close Job</button>'+
     '</div>'))+''+
        '<div class="input-group mb-3">'+
            '<button type="button" class="btn btn-danger btn-block" style="cursor: pointer;" onclick=" ShowJobsInfo();"><i class="fas fa-lg fa-arrow-left"></i> Back</button>'+
        '</div>'+
      '</div>'+
      '<!-- /.col-md-3 col-sm-4 -->'+
      '</div>'+
      '<!-- /.row p-2-->'+
      '</div>'+
      '<!-- /.mail-box-messages -->'+
    '</div>'+
    '<!-- /.card-body -->'+
    '</div>';
      $('.jobsposted').empty().append(temp);
      $(document).ready(function(){
        $("#jobType option[value='"+job_type+"']").attr('selected', 'selected');
        $("#jobCategory option[value='"+job_cat+"']").attr('selected', 'selected');
          $('#summernote').summernote({
            height: 100,
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
        $('#sendJobUpdate').click(function(e){
          e.preventDefault();
         let jobName = $('#jobName').val();
         let jobLocation = $('#jobLocation').val();
         let contactEmail = $('#contactEmail').val();
         let contactPhone = $('#contactPhone').val();
         let salary = $('#salary').val();
         if (jobName == ''){
           swal('Invalid Job Position!','Job position cannot be empty','error','Cool');
           return;
         }
         if (jobLocation == ''){
          swal('Invalid Job Location!','Job location cannot be empty','error','Cool');
          return;
         }
         if (contactEmail.length < 1) {
          swal('Invalid Email!','Email cannot be empty','error','Cool');
          return;
         }else {
          var regEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          var validEmail = regEx.test(contactEmail);
          if (!validEmail) {
             swal('Invalid Email!','Please enter a valid email!','error','Cool');
             return;
          }
         }
         if(contactPhone.length < 1){
          swal('Invalid Phone number!','Please enter a phone number','error','Cool');
          return;
         }else{
          var regEx = new RegExp('^[0-9]+$');
          var validPhone = regEx.test(contactPhone);
          if(!validPhone){
            swal('Invalid Phone number!','Please enter a valid phone number','error','Cool');
            return;
          }
         }
         if(salary == 0){
          swal('Invalid Salary!','Please enter the salary for the job','error','Cool');
          return;
         }else if(salary.length < 1){
          swal('Invalid Salary!','Please enter the salary for the job','error','Cool');
          return;
         }else{
          var regEx = new RegExp('^[0-9]+$');
          var validSalary = regEx.test(salary);
          if(!validSalary){
            swal('Invalid Salary!','Please enter a valid salary for the job','error','Cool');
            return;
          }
        }
         $.ajax({
          url: 'post.php/company/update_job',
          method: 'POST',
          data: {'job_id':job_id,'jobName': $('#jobName').val(),'jobLocation':$('#jobLocation').val(),'jobType':$('#jobType').val(),
          'jobCategory':$('#jobCategory').val(),'requirements':$('#summernote').summernote('code'),'salary':$('#salary').val(),
          'email':$('#contactEmail').val(),'phone':$('#contactPhone').val()},
          success: function(response){
            if(response == 200){
              $.notify('Job successfully updated!','success');
              ShowJobsInfo();
            }
          },
          error: function(err){
            $.notify(err.responseText,'error');
          }
        });

        })

      })
    }
function closeJob(job_id){
  $.ajax({
    url: 'post.php/company/close_job',
    method: 'POST',
    data: {'job_id':job_id},
    success: function(response){
      if(response == 200){
        $.notify('Job has been closed. Applicants will be notified!','success');
        ShowJobsInfo();
      }
    },
    error: function(err){
      $.notify(err.responseText,'error');
    }
  });
}
function viewApplicantsDetails(job_id){
  let  temp = '<div class="container-fluid">'+
          '<div class="d-sm-flex align-items-center justify-content-between mb-4">'+
          '<div class="h3 mb-0"></div>'+
          '<a href="#" class="d-none d-sm-inline-block btn btn-sm btn-danger shadow-sm" style="cursor: pointer;" onclick="ShowJobsInfo();"><i class="fas fa-arrow-left fa-sm text-white-50"></i> Back</a>'+
        '</div>'+
          '<div class="row"><div class="col-md-5 col-sm-3 jobdetails"></div><div class="col-md-7 col-sm-3 applicantsList"></div>'+
          '<div class="w-100"></div><div class="col-md-5 col-sm-3 singleApplicant"></div><div class="col-md-7 col-sm-3 contentMessage"></div></div>';
$('#content').empty().append(temp);

let jobdetails ='<div class="card shadow mb-4" style="border-top: 3px solid #007bff;">'+
'<div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">'+
  '<h6 class="m-0 font-weight-bold text-primary">Job details</h6>'+
'</div>'+
'<div class="card-body">'+
'<div class="container">'+
'<div class="row justify-content mb-4">';
$.ajax({
  url: 'get.php/company/job_info',
  method: 'GET',
  data: {'job_id':job_id},
  dataType: 'json',
  success: function(data){
    if(data !== 400){
      jobdetails +='<ul class="ml-4 mb-0 fa-ul text-muted">'+
          '<li class="small mb-3"><span class="fa-li"><i class="fas fa-lg fa-user"></i></span><b class="text-info">Position: </b>'+data.job_name+'</li>'+
          '<li class="small mb-3"><span class="fa-li"><i class="fas fa-lg fa-envelope"></i></span><b class="text-info">Contact Email: </b>'+data.job_contact_email+'</li>'+
          '<li class="small mb-3"><span class="fa-li"><i class="fas fa-lg fa-phone"></i></span><b class="text-info">Contact Phone: </b>'+data.job_contact_phone+'</li>'+
          '<li class="small mb-3"><span class="fa-li"><i class="fas fa-lg fa-map-marker"></i></span><b class="text-info">Location: </b>'+data.job_location+'</li>'+
          '<li class="small mb-3"><span class="fa-li"><i class="fa fa-lg fa-shopping-bag"></i></span><b class="text-info">Salary: </b>'+ session_curr+currencyFormat(data.salary)+'</li>'+
          '<li class="small mb-3"><span class="fa-li"><i class="fas fa-lg fa-wrench"></i></span><b class="text-info">Job Type: </b>'+data.job_type+'</li>'+
          '<li class="small mb-3"><span class="fa-li"><i class="fas fa-lg fa-info"></i></span><b class="text-info">Job Category: </b>'+data.job_cat+'</li>'+
          '<li class="small mb-3"><span class="fa-li"><i class="fas fa-lg fa-id-card"></i></span><b class="text-info">Job Description: </b>'+data.requirements+'</li>'+
        '</ul>';
    }
    jobdetails += '</div>'+
    '</div>'+
   '</div>'+
  '</div>';

$('.jobdetails').append(jobdetails);
  jobApplicants(job_id,data.status);
  },
  error: function(err){
    $.notify(err.responseText,'error');
  }
});
}
function jobApplicants(job_id,job_status){
  let applicants ='<div class="card card-primary card-outline shadow mb-4" style="border-top: 3px solid #007bff;">'+
  '<div class="card-header py-1 d-flex flex-row align-items-center justify-content-between">'+
    '<h4 class="card-title">Job Applicants</h4>'+
  '</div>'+
  '<!-- /.card-header -->'+
  '<div class="card-body p-1">'+
    '<div class="table-responsive mailbox-messages">'+
      '<table class="table table-hover" id="jobsApplicantsTable">'+
      '<thead>'+
       ' <th>First Name</th>'+
       '<th>Last Name</th>'+
      ' <th>Address</th>'+
      ' <th>Email</th>'+
      ' <th>Skills</th>'+
      ' <th>Status</th>'+
      '</thead>'+
        '<tbody>';
  $.ajax({
    url: 'get.php/company/job_applicatants',
    method: 'GET',
    data: {'job_id':job_id},
    dataType: 'json',
    success: function(data){
      if(data !== 400){
        $.each(data,function(index,val){
          applicants +='<tr id="'+data.login_id+'" style="cursor: pointer;"  onclick="viewApplicant(\''+job_id+'\',\''+val.login_id+'\',\''+val.app_status+'\',\''+job_status+'\')">'+
          '<td>' + val.fname +'</td>'+
          '<td>'+ val.lname +'</td>'+
          '<td>'+ val.address +'</td>'+
          '<td>'+ val.email +'</td>'+
          '<td>'+ val.skills.replace(/,/g, "/")+'</td>'+
          '<td>'+((val.app_status == 0)?"Pending": (val.app_status == 1)?"Accepted":"Rejcted")+'</td>'+
        '</tr>';

        })
      }
      applicants +='</tbody>'+
          '</table>'+
          '<!-- /.table -->'+
          '</div>'+
          '<!-- /.mail-box-messages -->'+
        '</div>'+
        '<!-- /.card-body -->'+

        '</div>';
      $('.applicantsList').empty().append(applicants);
      $(document).ready( function () {
        $('#jobsApplicantsTable').DataTable({
          "aLengthMenu": [[5,10,25, 50, 75, -1], [5,10,25, 50, 75, "All"]],
          "oLanguage": {
            "sLengthMenu": "Display _MENU_ Applicants",
            "sEmptyTable":     "No Applicants"
          },
        
        });
        });
    },
    error: function(err){
      $.notify(err.responseText,'error');
    }
  });

}
function viewApplicant(job_id,login_id,status,job_status){
console.log(job_status);
//@ams->am using the job_status to know if a job is already closed. It is the status of a job whilst status is the status of the application 
let profile_cv ='';
let applicant = '<div class="card shadow mb-4" style="border-top: 3px solid #007bff;">'+
    '<div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">'+
      '<h6 class="m-0 font-weight-bold text-primary">Profile</h6>'+
    '</div>'+
    '<div class="card-body">'+
    '<div class="container">'+
    '<div class="row justify-content mb-4">';
    $.ajax({
      url: 'get.php/company/job_applicatant',
      method: 'GET',
      data: {'login_id':login_id},
      dataType: 'json',
      success: function(data){
        if(data !== 400){
      // (data.CV == null || data.CV == '')?profile_cv = 'javascript:void();': profile_cv = 'uploads/'+data.CV;
applicant += '<div class="col col-lg-4">'+
      '<img src="uploads/'+((data.image == '' || null)?"default.jpg":data.image)+'" class="card-img-top rounded-circle img-thumbnail mb-2" alt="Jone Doe" style="width: 12rem; height: 12rem;">'+
    '</div>'+
      '<div class="col-lg-8">'+
        '<ul class="ml-4 mb-0 fa-ul text-muted">'+
          '<li class="small mb-3"><span class="fa-li"><i class="fas fa-lg fa-user"></i></span><b class="text-info">First Name: </b>'+data.fname+'</li>'+
          '<li class="small mb-3"><span class="fa-li"><i class="fas fa-lg fa-user"></i></span><b class="text-info">Last Name: </b>'+data.lname+'</li>'+
          '<li class="small mb-3"><span class="fa-li"><i class="fas fa-lg fa-envelope"></i></span><b class="text-info">Email: </b>'+data.email+'</li>'+
          '<li class="small mb-3"><span class="fa-li"><i class="fas fa-lg fa-phone"></i></span><b class="text-info">Phone #: </b>'+data.phone+'</li>'+
          '<li class="small mb-3"><span class="fa-li"><i class="fas fa-lg fa-book"></i></span><b class="text-info">Education Level: </b>'+data.education_level+'</li>'+
          '<li class="small mb-3"><span class="fa-li"><i class="fas fa-lg fa-globe"></i></span><b class="text-info">Country: </b>'+data.country+'</li>'+
          '<li class="small mb-3"><span class="fa-li"><i class="fas fa-lg fa-id-card"></i></span><b class="text-info">Date of birth: </b>'+data.dob+'</li>'+
          '<li class="small mb-3"><span class="fa-li"><i class="fas fa-lg fa-building"></i></span><b class="text-info">Address: </b>'+data.address+'</li>'+
          '<li class="small mb-3"><span class="fa-li"><i class="fas fa-lg fa-wrench"></i></span><b class="text-info">Skills: </b>'+data.skills+'</li>'+
          '<li class="small mb-3"><span class="fa-li"><i class="fas fa-lg fa-info"></i></span><b class="text-info">Tag-line: </b>'+data.tag_line+'</li>'+
        '</ul>'+
       '</div>'+
      '</div>'+
     '</div>'+
    '</div>'+
    '<div class="card-footer">'+
      '<div class="text-right">'+
      '<a href="'+((data.CV == null || data.CV == '')?'javascript:void();':'uploads/'+data.CV)+'"  target="_blank" class="btn btn-sm btn-info" data-toggle="tooltip" title="View CV">'+
      '<i class="fas fa-file-image"></i> View CV'+
      '</a>'+
      '<a href="#" class="btn btn-sm bg-teal btn-primary mx-1" data-toggle="tooltip" title="Send Message" onclick="composeNewMessage(\''+data.login_id+'\',\''+data.fullName+'\',\'contentMessage\')">'+
      '<i class="fas fa-comments"> Message</i>'+
      '</a>'+
      '<a href="#" class="btn btn-sm btn-success '+((job_status == 1)?'disabled':(status == 0)?'':'disabled')+'"  data-toggle="tooltip" title="Back" onclick="acceptApplication(\''+data.jobseeker_id+'\',\''+job_id+'\',\''+login_id+'\');">'+
        '<i class="fa fa-handshake"> Accept Application</i>'+
      '</a>'+
    '</div>';
   }
    applicant += '</div>'+
          '</div>'+
        '</div>'+
        '</div>'+
      '</div>';
    $('.singleApplicant').empty().append(applicant);
    },
    error: function(err){
      $.notify(err.responseText,'error');
    }
  });

}
function acceptApplication(jobseeker_id,job_id,login_id){
  $.ajax({
    url: 'post.php/company/accept_application',
    method: 'POST',
    data: {'jobseeker_id':jobseeker_id,'job_id':job_id},
    success: function(response){
      if(response == 200){
        $.notify('Application accepted. Applicant will be notified!','success');
        jobApplicants(job_id);
        viewApplicant(job_id,login_id,1);
      }
    },
    error: function(err){
      $.notify(err.responseText,'error');
    }
  });
}