$(document).ready(function(){
    //loadJobseekerDashboard();
    $('.sidebar li').click(function(e) {

      $('.sidebar li').removeClass('active');
    
      var $this = $(this);
      if (!$this.hasClass('active')) {
          $this.addClass('active');
      }
      
    });
})

function jobseekerSideBar(){
  return '<ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">'+
      
  '<a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.php">'+
    '<div class="sidebar-brand-icon rotate-n-15">'+
      '<i><img src="assets/img/icon.png" class="rounded-circle" alt="Dokuwo" style="width: 50%; height: auto;"></i>'+
    '</div>'+
    '<div class="sidebar-brand-text mr-3">Dokuwo</div>'+
  '</a>'+

  '<hr class="sidebar-divider my-0">'+

  '<li class="nav-item active">'+
    '<a class="nav-link" href="index.php">'+
      '<i class="fas fa-fw fa-tachometer-alt"></i>'+
      '<span>Dashboard</span></a>'+
  '</li>'+

  '<li class="nav-item">'+
    '<a class="nav-link" style="cursor: pointer;" onclick="jobs();">'+
      '<i class="fas fa-fw fa-briefcase"></i>'+
      '<span>Jobs</span></a>'+
  '</li>'+

  '<li class="nav-item">'+
    '<a class="nav-link" style="cursor: pointer;" onclick="jMessagesCenter();">'+
      '<i class="fas fa-fw fa-envelope"></i>'+
      '<span>Messages</span></a>'+
  '</li>'+
  
  '<li class="nav-item">'+
  '<a class="nav-link" style="cursor: pointer;" onclick="doesFreelance();">'+
    '<i class="fas fa-fw fa-briefcase"></i>'+
    '<span>Hires</span></a>'+
  '</li>'+

  '<li class="nav-item">'+
  '<a class="nav-link" style="cursor: pointer;" onclick="portfolio();">'+
    '<i class="fas fa-fw fa-id-badge"></i>'+
    '<span>Portfolio/Services</span></a>'+
  '</li>'+

  '<li class="nav-item">'+
    '<a class="nav-link" style="cursor: pointer;" onclick="jsettings();">'+
      '<i class="fas fa-fw fa-cog""></i>'+
      '<span>Settings</span></a>'+
  '</li>'+

  '<hr class="sidebar-divider d-none d-md-block">'+

  '<div class="text-center d-none d-md-inline">'+
    '<button class="rounded-circle border-0" id="sidebarToggle" onclick="sidebarToggle(this)"></button>'+
  '</div>'+

'</ul>';
}
function jobseekerDashBoardheader(){
 let header = '<div class="container-fluid">'+
  '<div class="row">'+
          '<div class="col-xl-4 col-md-6 mb-4">'+
          '<div class="card border-left-primary shadow h-100 py-2">'+
              '<div class="card-body">'+
              '<div class="row no-gutters align-items-center">'+
                  '<div class="col mr-2">'+
                  '<div class="text-xs font-weight-bold text-primary text-uppercase mb-1">Jobs Available</div>'+
                  '<div class="h5 mb-0 font-weight-bold text-gray-800" id="jobsAvailable">0</div>'+
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
                      '<div class="h5 mb-0 mr-3 font-weight-bold text-gray-800" id="profileVal">50%</div>'+
                      '</div>'+
                      '<div class="col">'+
                      '<div class="progress progress-sm mr-2">'+
                          '<div class="progress-bar bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" id="profileBar"></div>'+
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
                  '<div class="text-xs font-weight-bold text-warning text-uppercase mb-1">companies</div>'+
                  '<div class="h5 mb-0 font-weight-bold text-gray-800" id="noOfCompanies">5</div>'+
                  '</div>'+
                  '<div class="col-auto">'+
                  '<i class="fas fa-building fa-2x text-gray-300"></i>'+
                  '</div>'+
              '</div>'+
              '</div>'+
          '</div>'+
          '</div>'+
      '</div>'+

    '</div>'+
  '</div>';
  $('#content').empty().append(header);
  $.ajax({
    method: "GET",
    url: "get.php/jobseeker/dashboard_header_info",
    data: {"login_id" : session_id},
    dataType: 'json',
    success: function(data){
      package = data.package;
      trial_activation = data.trial_activation;
      $('#jobsAvailable' ).html(data.noOfJobsAvailable);
      $('#profileVal').html(data.isProfileComplete+"%");
      $('#profileBar').css('width',''+data.isProfileComplete+'%');
      $('#noOfCompanies' ).html(data.noOfCompanies);
    //@ams->now calling the dashboard content
    jdashBoardContent();
  },
  error: function(err){
    swalNotify(err.responseText,'error');
  }
  });
}
function loadJobseekerDashboard(){
  let sidebar = jobseekerSideBar();
  let foot = footer();
  jtopBar();
  //let dbcontent = jobseekerDashBoardheader();
  $('#wrapper').prepend(sidebar);
  $('#content-wrapper').append(foot);
}
 function jtopBar(){
 let jtopBar = '<nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">'+
      '<ul class="navbar-nav ml-auto">'+
      '<!-- Nav Item - Alerts -->'+
      // '<li class="nav-item dropdown no-arrow mx-1">'+
      //   '<a class="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">'+
      //     '<i class="fas fa-bell fa-fw"></i>'+
      //     '<!-- Counter - Alerts -->'+
      //     ' <span class="badge badge-danger badge-counter">3+</span>'+
      //   '</a>'+
      //   '<!-- Dropdown - Alerts -->'+
      //   ' <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="alertsDropdown">'+
      //     '<h6 class="dropdown-header">'+
      //       ' Alerts Center'+
      //     '</h6>'+
      //     '<a class="dropdown-item d-flex align-items-center" href="#">'+
      //       '<div class="mr-3">'+
      //         ' <div class="icon-circle bg-primary">'+
      //           '<i class="fas fa-file-alt text-white"></i>'+
      //         '</div>'+
      //       '</div>'+
      //       '<div>'+
      //         ' <div class="small text-gray-500">December 12, 2019</div>'+
      //         '<span class="font-weight-bold">A new monthly report is ready to download!</span>'+
      //       ' </div>'+
      //     '</a>'+
      //     '<a class="dropdown-item d-flex align-items-center" href="#">'+
      //       '<div class="mr-3">'+
      //         '<div class="icon-circle bg-success">'+
      //           '<i class="fas fa-donate text-white"></i>'+
      //         '</div>'+
      //       '</div>'+
      //       '<div>'+
      //         '<div class="small text-gray-500">December 7, 2019</div>'+
      //         '$290.29 has been deposited into your account!'+
      //       '</div>'+
      //     '</a>'+
      //     '<a class="dropdown-item d-flex align-items-center" href="#">'+
      //       '<div class="mr-3">'+
      //         '<div class="icon-circle bg-warning">'+
      //           '<i class="fas fa-exclamation-triangle text-white"></i>'+
      //         '</div>'+
      //       ' </div>'+
      //       '<div>'+
      //         '<div class="small text-gray-500">December 2, 2019</div>'+
      //         ' Spending Alert: We\'ve noticed unusually high spending for your account.'+
      //       '</div>'+
      //     ' </a>'+
      //     '<a class="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>'+
      //   '</div>'+
      // ' </li>'+
        '<li class="nav-item dropdown no-arrow mx-1">'+
          '<a class="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">'+
            '<i class="fas fa-envelope fa-fw"></i>'+
            '<!-- Counter - Messages -->'+
            '<span class="badge badge-danger badge-counter NewMsgNotificationsCount">0</span>'+
          '</a>'+
            '<div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in NewMsgNotifications" aria-labelledby="messagesDropdown">'+
            //add messages here@ams-target this div
          '</div>'+ 
        '</li>'+
        '<div class="topbar-divider d-none d-sm-block"></div>'+
        '<li class="nav-item dropdown no-arrow userProfile">'+
        //user Profile
          '</li>'+
      '</ul>'+
    '</nav>'; 
    $('#content-wrapper').prepend(jtopBar);
    let temp = '';
    $.ajax({
      method: "GET",
      dataType: 'json',
      url: "get.php/jobseeker/new_unread_messages",
      data: {"login_id" : session_id},
      success: function(data){
        if(data != 400){
        temp += '<h6 class="dropdown-header">'+
          'Message Center'+
        '</h6>';
        $.each(data, function(i,val){
          temp += '<a class="dropdown-item d-flex align-items-center" id="'+val.message_id+'" style="cursor: pointer;" onclick="jMessagesCenter(\''+val.message_id+'\');">'+
          '<div class="font-weight-bold">'+
            '<div class="text-truncate">'+val.subject+'</div>'+
            '<div class="small text-gray-500">'+val.creator_name+' · '+moment(val.create_date).fromNow()+'</div>'+
          '</div>'+
        '</a>';
        })
  
        temp += '<a class="dropdown-item text-center small text-gray-500" style="cursor: pointer;" onclick="jMessagesCenter();">Read More Messages</a>'; 
        $('.NewMsgNotificationsCount').empty().html((data.length > 0)?data[0].count:0);
        $('.NewMsgNotifications').empty().append(temp);
        }
        let profile = '';
        $.ajax({
          method: "GET",
          dataType: "JSON",
          url: "get.php/jobseeker/jobseeker_profile",
          data: {"login_id" : session_id},
          success: function(data){
            if(data != 400){
            profile += '<a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">'+
            '<span class="mr-2 d-none d-lg-inline text-gray-600 small">'+data[0].fullName+'</span>'+
            '<img class="img-profile rounded-circle" src="https://dokuwo-uploads.s3.amazonaws.com/'+((data[0].image==null || data[0].image=='')?'default.jpg':data[0].image)+'">'+
          '</a>'+

          '<div class="dropdown-menu dropdown-menu-right shadow animated--grow-in userProfile" aria-labelledby="userDropdown">'+
            '<a class="dropdown-item" href="#" onclick="gotoHomepage();">'+
                '<i class="fas fa-home fa-sm fa-fw mr-2 text-gray-400"></i>'+
                'Homepage'+
              '</a>'+
              '<div class="dropdown-divider"></div>'+
            '<a class="dropdown-item" href="#" onclick="jsettings();">'+
              '<i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>'+
              'Settings'+
            '</a>'+
            '<div class="dropdown-divider"></div>'+
            '<a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal" onclick="logout();">'+
              '<i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>'+
              'Logout'+
            '</a>'+
          '</div>';
            $('.userProfile').append(profile);
            jobseekerDashBoardheader();
            }

          },
          error: function(err){
                swalNotify(err.responseText,'error');
          }
          })

        },
        error: function(err){
        swalNotify(err.responseText,'error');
      }
    });
  }
function  jdashBoardContent(){
  let temp ='<div class="container-fluid"><div class="row dbInner"></div></div>';

  $('#content').append(temp);
  jdashboardProfile();
}
function jdashboardProfile(){
  
let profile = '';
$.ajax({
  method: "GET",
  dataType: "json",
  url: "get.php/jobseeker/jobseeker_profile",
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
       '<div class="col col-lg-4">'+
       '<img src="https://dokuwo-uploads.s3.amazonaws.com/'+((data[0].image == "" || data[0].image == null)?"default.jpg":data[0].image)+'" class="card-img-top rounded-circle img-thumbnail mb-2" alt="Jone Doe" style="width: 12rem; height: 12rem;">'+
     '</div>'+
       '<div class="col-lg-4">'+
         '<ul class="ml-4 mb-0 fa-ul text-muted">'+
         '<li class="small mb-3"><span class="fa-li"><i class="fas fa-lg fa-user"></i></span><b class="text-primary">First Name: </b>'+((data[0].fname =="" || data[0].fname ==null)?"NA":data[0].fname)+'</li>'+
         '<li class="small mb-3"><span class="fa-li"><i class="fas fa-lg fa-id-card"></i></span><b class="text-primary">Date of birth: </b>'+((data[0].dob=="" || data[0].dob==null)?"NA":data[0].dob.toString())+'</li>'+
         '<li class="small mb-3"><span class="fa-li"><i class="fas fa-lg fa-wrench"></i></span><b class="text-primary">Skills: </b>'+((data[0].skills=="" || data[0].skills==null)?"NA":data[0].skills.replace(/,/g, "/"))+'</li>'+
         '<li class="small mb-3"><span class="fa-li"><i class="fas fa-lg fa-info"></i></span><b class="text-primary">Tag-line: </b>'+((data[0].tag_line=="" || data[0].tag_line==null)?"NA":data[0].tag_line)+'</li>'+
       '</ul>'+
     '</div>'+
       '<div class="col col-lg-4">'+
        '<ul class="ml-4 mb-0 fa-ul text-muted">'+
        '<li class="small mb-3"><span class="fa-li"><i class="fas fa-lg fa-user"></i></span><b class="text-primary">Last Name: </b>'+((data[0].lname=="" || data[0].lname==null)?"NA":data[0].lname)+'</li>'+
        '<li class="small mb-3"><span class="fa-li"><i class="fas fa-lg fa-phone"></i></span><b class="text-primary">Phone #: </b>'+((data[0].phone=="" || data[0].phone==null)?"NA":data[0].phone)+'</li>'+
        '<li class="small mb-3"><span class="fa-li"><i class="fas fa-lg fa-globe"></i></span><b class="text-primary">Country: </b>'+((data[0].country=="" || data[0].country==null)?"NA":data[0].country)+'</li>'+
        '<li class="small mb-3"><span class="fa-li"><i class="fas fa-lg fa-building"></i></span><b class="text-primary">Address: </b>'+((data[0].address=="" || data[0].address==null)?"NA":data[0].address)+'</li>'+
        '</ul>'+
       '</div>'+
     '</div>'+
     '</div>'+
   '</div>'+
 '</div>';

 $('.dbInner').append(profile);
  jJobStatistics();

 },
 error: function(err){
  swalNotify(err.responseText,'error');
 }
});

}
function jJobStatistics(){
  let job_statistics =  '<div class="col-xl-6 col-lg-5">'+
    
  '<div class="card shadow mb-4" style="border-top: 3px solid #007bff;">'+

    '<div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">'+
      '<h6 class="m-0 font-weight-bold text-primary">Application Statistics</h6>'+
     '<div class="dropdown no-arrow">'+
        '<a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">'+
          '<i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>'+
        '</a>'+
        // '<div class="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink">'+
        //   '<div class="dropdown-header">Dropdown Header:</div>'+
        //   '<a class="dropdown-item" href="#">Action</a>'+
        //   '<a class="dropdown-item" href="#">Another action</a>'+
        //   '<div class="dropdown-divider"></div>'+
        //   '<a class="dropdown-item" href="#">Something else here</a>'+
        // '</div>'+
     '</div>'+
    '</div>'+

    '<div class="card-body">'+
      // '<div class="chart-pie pt-4 pb-2">'+
      //   '<canvas id="myPieChart"></canvas>'+
      // '</div>'+
    '</div>'+
  '</div>'+
'</div>';
$('.dbInner').append(job_statistics);
}
function jobs(start,finish){
  let job = '';
  let beg ='';
  let end ='';
  let numberOfItems = '';
  let totalPages = '';
  let forward = '';
  let Backward = '';
  let Prev = '';
  let Next = '';
  let temp = '';
  
  if(start != undefined && finish != undefined){ beg = start; end = finish;}else{ beg = 0; end = 4;}
  $.ajax({
    method: "GET",
    url: "get.php/jobseeker/retreive_jobs",
    data: {'beg':beg,'end':end},
    dataType: "json",
    success: data => {
      if(beg == 0){
        job = data[0];
        if(localStorage.getItem('totaljobs') == null || localStorage.getItem('totaljobs') == undefined || localStorage.getItem('totaljobs') == '')
        {
          localStorage.setItem('totaljobs',parseInt(data[1]));
        }
      }
      else{ job = data};
      numberOfItems = localStorage.getItem('totaljobs');
      limitPerPage = 4;
      totalPages = Math.round(numberOfItems/limitPerPage);
      if(job != 400){
        temp +='<!-- Page Header Start -->'+
        '<div class="page-header">'+
          '<div class="container">'+
            '<div class="row">'+        
              '<div class="col-lg-12">'+
                '<div class="inner-header">'+
                  '<h3>Browse Jobs</h3>'+
                '</div>'+
              '</div>'+
            '</div>'+
          '</div>'+
        '</div>'+
        '<!-- Page Header End -->'+       
  
        '<!-- Job Browse Section Start -->'+  
        '<section class="job-browse section">'+
          '<div class="container">'+
            '<div class="row">'+
              '<div class="col-lg-12 col-md-12 col-xs-12">'+
                '<div class="wrap-search-filter row">'+
                  '<div class="col-lg-5 col-md-5 col-xs-12">'+
                    '<input type="text" class="form-control" id="job" placeholder="Job Name">'+
                  '</div>'+
                  '<div class="col-lg-5 col-md-5 col-xs-12">'+
                    '<input type="text" class="form-control" id="location" placeholder="location">'+
                  '</div>'+
                  '<div class="col-lg-2 col-md-2 col-xs-12">'+
                    '<button type="submit" class="btn btn-common btn-success btn-block float-right" id="filter" onclick="filterJobs();">Filter</button>'+
                  '</div>'+
                '</div>'+
              '</div>'+
              '<div class="col-lg-12 col-md-12 col-xs-12 jobs">';
              $.each(job,function(i,val){
                temp +='<a class="job-listings" onclick="applyNow(\''+val.job_id+'\',\''+val.company_name+'\',\''+val.currency+'\',\''+val.logo+'\',\''+val.company_id+'\');" style="cursor: pointer;">'+
                '<div class="row">'+
                  '<div class="col-lg-4 col-md-4 col-xs-12">'+
                    '<div class="job-company-logo">'+
                      '<img class="rounded-circle img-thumbnail" src="'+((val.logo == null)?"https://ui-avatars.com/api/?name="+val.company_name.replace(/ /g, '+'):'https://dokuwo-uploads.s3.amazonaws.com/'+val.logo)+'" style="height: 5rem;width: 5rem;" alt="'+val.company_name+'">'+
                    '</div>'+
                    '<div class="job-details">'+
                      '<h3>'+val.job_name+'</h3>'+
                      '<span class="company-neme">'+
                        val.company_name+
                      '</span>'+
                    '</div>'+
                  '</div>'+
                  '<div class="col-lg-2 col-md-2 col-xs-12 text-center">'+
                    '<span class="btn-open text-xs">'+
                     val.currency+currencyFormat(val.salary) +
                    '</span>'+
                  '</div>'+
                  '<div class="col-lg-2 col-md-2 col-xs-12 text-left">'+
                  '<div class="location">'+
                    '<i class="lni-map-marker"></i>'+ val.job_location +
                  '</div>'+
                  '</div>'+
                  '<div class="col-lg-2 col-md-2 col-xs-12 text-right">'+
                    '<span class="btn-full-time" style="color:#007bff;">'+val.job_type+'</span>'+
                  '</div>'+
                  '<div class="col-lg-2 col-md-2 col-xs-12 text-right">'+
                    '<span class="btn-apply" style="cursor: pointer;">Apply Now</span>'+
                  '</div>'+
                '</div>'+
              '</a>';
              
              });
              
        let begin = parseInt(beg);
        let ending = parseInt(end);
        let LastLast =  "jobs(\'"+(limitPerPage*Math.floor(numberOfItems/limitPerPage))+"\',\'"+(numberOfItems)+"\')";
        (numberOfItems <= limitPerPage || numberOfItems == ending)?(Next = 'disabled'):(numberOfItems < ending+limitPerPage)? (forward = "jobs(\'"+(begin+limitPerPage)+"\',\'"+numberOfItems+"\')"):(forward = "jobs(\'"+(begin+limitPerPage)+"\',\'"+(ending+limitPerPage)+"\')"); 
        (begin == 0 && (ending == numberOfItems || ending == limitPerPage))? (Prev = 'disabled',Backward = "jobs(\'"+(begin)+"\',\'"+(ending)+"\')"):(begin != 0 && ending != numberOfItems)?(Backward = "jobs(\'"+(begin-limitPerPage)+"\',\'"+(ending-limitPerPage)+"\')"): (Backward = "jobs(\'"+(begin-limitPerPage)+"\',\'"+(numberOfItems-(numberOfItems%limitPerPage))+"\')");
                  temp +='<!-- Start Pagination -->'+
                    '<ul class=" j-pagination">' +             
                    ' <li class="active"><a href="javascript:void(0)" class="btn-prev" onclick=" jobs(0,4)"><i class="lni-angle-left"></i> First</a></li>'+
                      '<li class="active"><a href="javascript:void(0)" class="btn-next" onclick="'+Backward+'">Prev <i class="lni-angle-right"></i></a></li>'+
                      '<li class="active"><a href="javascript:void(0)" class="btn-next" onclick="'+forward+'">Next <i class="lni-angle-right"></i></a></li>'+
                      '<li class="active"><a href="javascript:void(0)" class="btn-next" onclick="'+LastLast+'">Last <i class="lni-angle-right"></i></a></li>'+
                    '</ul>'+
                    '<!-- End Pagination -->'+
                
            ' </div>'+
            '</div>'+
          '</div>'+
        '</section>'+
        '<!-- Job Browse Section End -->'; 
      }
      $(document).ready(()=>{
        $('#content').empty().append(temp);
      });
    
    },
    error: err => {
      swalNotify(err.responseText,'error');
    }
   });
    
  }

  function filterJobs(start,finish,filterParams){
    let job = $('#job').val();
    let location = $('#location').val();
    let filterData = (filterParams == null)?{'job_name':job,'job_location':location}:filterParams;
    let beg ='';
    let end ='';
    let numberOfItems = '';
    let totalPages = '';
    let forward = '';
    let Backward = '';
    let Prev = '';
    let Next = '';
    let temp = '';
    let jobs = '';
    if(typeof filterData == "string"){
      JSON.parse(filterData);
    }
    if(filterData.job_name == '' && filterData.job_location == ''){
      swalNotify('There is nothing to search for','error');
    }else{
      if(start != undefined && finish != undefined){ beg = start; end = finish;}else{ beg = 0; end = 4;}
      $.ajax({
        method: "GET",
        dataType: 'json',
        url: "get.php/jobseeker/search_jobs",
        data: {"job" : filterData.job_name, "location": filterData.job_location,'beg':beg,'end':end},
        success: data => {
          if(beg == 0){
            jobs = data[0];
            if(localStorage.getItem('totalfilteredjobs') == null || localStorage.getItem('totalfilteredjobs') == undefined || localStorage.getItem('totalfilteredjobs') == '')
            {
              localStorage.setItem('totalfilteredjobs',parseInt(data[1]));
            }
          }
          else{ jobs = data};
          numberOfItems = localStorage.getItem('totalfilteredjobs');
          limitPerPage = 4;
          totalPages = Math.round(numberOfItems/limitPerPage);
          if(jobs != 400){
            temp +='<!-- Page Header Start -->'+
            '<div class="page-header">'+
              '<div class="container">'+
                '<div class="row">'+        
                  '<div class="col-lg-12">'+
                    '<div class="inner-header">'+
                      '<h3>Browse Jobs</h3>'+
                    '</div>'+
                  '</div>'+
                '</div>'+
              '</div>'+
            '</div>'+
            '<!-- Page Header End -->'+       
      
            '<!-- Job Browse Section Start -->'+  
            '<section class="job-browse section">'+
              '<div class="container">'+
                '<div class="row">'+
                  '<div class="col-lg-12 col-md-12 col-xs-12">'+
                    '<div class="wrap-search-filter row">'+
                        '<div class="col-lg-12 col-md-12 col-xs-12 d-flex justify-content-center">'+
                          '<a href="#" class="float-right" onclick="jobs();">Exit search mode <i class="fa fa-angle-double-right"></i></a>'+
                        '</div>'+
                      '<div class="col-lg-5 col-md-5 col-xs-12">'+
                        '<input type="text" class="form-control" id="job" placeholder="Job Name">'+
                      '</div>'+
                      '<div class="col-lg-5 col-md-5 col-xs-12">'+
                        '<input type="text" class="form-control" id="location" placeholder="location">'+
                      '</div>'+
                      '<div class="col-lg-2 col-md-2 col-xs-12">'+
                        '<button type="submit" class="btn btn-common btn-success btn-block float-right" id="filter" onclick="filterJobs();">Filter</button>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                  '<div class="col-lg-12 col-md-12 col-xs-12 jobs">';
                  $.each(jobs,function(i,val){
                    temp +='<a class="job-listings" onclick="applyNow(\''+val.job_id+'\',\''+val.company_name+'\',\''+val.currency+'\',\''+val.logo+'\',\''+val.company_id+'\');" style="cursor: pointer;">'+
                    '<div class="row">'+
                      '<div class="col-lg-4 col-md-4 col-xs-12">'+
                        '<div class="job-company-logo">'+
                          '<img class="rounded-circle img-thumbnail" src="'+((val.logo == null)?"https://ui-avatars.com/api/?name="+val.company_name.replace(/ /g, '+'):'https://dokuwo-uploads.s3.amazonaws.com/'+val.logo)+'" style="height: 5rem;width: 5rem;" alt="'+val.company_name+'">'+
                        '</div>'+
                        '<div class="job-details">'+
                          '<h3>'+val.job_name+'</h3>'+
                          '<span class="company-neme">'+
                            val.company_name+
                          '</span>'+
                        '</div>'+
                      '</div>'+
                      '<div class="col-lg-2 col-md-2 col-xs-12 text-center">'+
                        '<span class="btn-open text-xs">'+
                         val.currency+currencyFormat(val.salary) +
                        '</span>'+
                      '</div>'+
                      '<div class="col-lg-2 col-md-2 col-xs-12 text-left">'+
                      '<div class="location">'+
                        '<i class="lni-map-marker"></i>'+ val.job_location +
                      '</div>'+
                      '</div>'+
                      '<div class="col-lg-2 col-md-2 col-xs-12 text-right">'+
                        '<span class="btn-full-time" style="color:#007bff;">'+val.job_type+'</span>'+
                      '</div>'+
                      '<div class="col-lg-2 col-md-2 col-xs-12 text-right">'+
                        '<span class="btn-apply" style="cursor: pointer;">Apply Now</span>'+
                      '</div>'+
                    '</div>'+
                  '</a>';
                  
                  });
                  
                  let begin = parseInt(beg);
                  let ending = parseInt(end);
                  let LastLast = `filterJobs(${(limitPerPage*Math.floor(numberOfItems/limitPerPage))},${(numberOfItems)},${JSON.stringify(filterData)})`;
                  (numberOfItems <= limitPerPage || numberOfItems == ending)?(Next = 'disabled'):(numberOfItems < ending+limitPerPage)? (forward = `filterJobs(${(begin+limitPerPage)},${numberOfItems},${JSON.stringify(filterData)})`):(forward = `filterJobs(${(begin+limitPerPage)},${(ending+limitPerPage)},${JSON.stringify(filterData)})`); 
                  (begin == 0 && (ending == numberOfItems || ending == limitPerPage))? (Prev = 'disabled',Backward = `filterJobs(${(begin)},${(ending)},${JSON.stringify(filterData)})`):(begin != 0 && ending != numberOfItems)?(Backward = `filterJobs(${(begin-limitPerPage)},${(ending-limitPerPage)},${JSON.stringify(filterData)})`): (Backward = `filterJobs(${(begin-limitPerPage)},${(numberOfItems-(numberOfItems%limitPerPage))},${JSON.stringify(filterData)})`);
                 temp +='<!-- Start Pagination -->'+
                '<ul class="j-pagination">' +             
                 `<li class="active"><a href="javascript:void(0)" class="btn-prev" onclick='filterJobs(0,4,${JSON.stringify(filterData)})'><i class="lni-angle-left"></i> First</a></li>`+
                  `<li class="active"><a href="javascript:void(0)" class="btn-next" onclick='${Backward}'>Prev <i class="lni-angle-right"></i></a></li>`+
                  `<li class="active"><a href="javascript:void(0)" class="btn-next" onclick='${forward}'>Next <i class="lni-angle-right"></i></a></li>`+
                  `<li class="active"><a href="javascript:void(0)" class="btn-next" onclick='${LastLast}'>Last <i class="lni-angle-right"></i></a></li>`+
                '</ul>'+
                '<!-- End Pagination -->'+
                    
                ' </div>'+
                '</div>'+
              '</div>'+
            '</section>'+
            '<!-- Job Browse Section End -->';
            $(document).ready(()=>{
              $('#content').empty().append(temp);
            });

          }else{
            swalNotify('search result doesn\'t exist','error');
            jobs();
          }
        },
        error: err => {
          swalNotify(err.responseText,'error');
        }
    
        })

       }
  }
function applyNow(job_id){
let apply = '';
$.ajax({
  method: "GET",
  dataType: 'json',
  url: "get.php/company/get_job_details",
  data: {'job_id':job_id},
  success: data => {
    apply = '<!-- Job Detail Section Start -->'  +
    '<section class="job-detail section">'+
      '<div class="container">'+
        '<div class="row justify-con+tent-between">'+
          '<div class="col-lg-8 col-md-12 col-xs-12">'+
          '<div class="content-area">  '+
    
              '<div class="breadcrumb-wrapper">'+
             ' <div class="img-wrapper">'+
                '<img src="'+((data.logo == 'null')?"https://ui-avatars.com/api/?name="+data.company_name.replace(/ /g, '+'):'https://dokuwo-uploads.s3.amazonaws.com/'+data.logo)+'" style="height: 5rem;width: 5rem;" alt="'+data.company_name+'">'+
              '</div>'+
              '<div class="content">'+
                '<h3 class="product-title font-weight-bold">Hiring '+data.job_name+'</h3>'+
                '<p class="brand">'+data.company_name+'</p>'+
                '<div class="tags">'+  
                  '<span><i class="fa fa-map-marker mr-1"></i>'+data.job_location+'</span>  '+
                  '<span><i class="fa fa-calendar mr-1"></i> Posted '+data.date_posted+'</span>'+ 
                  '<div class="year">Monthly</div>'+
                  '<span class="price">'+data.currency+currencyFormat(data.salary)+'</span>'+
                  '<div class="year">'+data.job_type+'</div>'+ 
                '</div>'+
              '</div>'+
            '</div>'+
    
              '<h4 class="font-weight-bold">Job Requirements</h4>'+
              ''+data.requirements+''+
              '<h5 class="font-weight-bold">Contact details</h5>'+
              '<ul>'+
                '<li><i class="fas fa-envelope mr-1"></i>- '+data.job_contact_email+'</li>'+
                '<li><i class="fas fa-phone mr-1"></i>- '+data.job_contact_phone+'</li>'+
              '</ul>'+
              '<div class="d-flex justify-content-between">'+
              '<a href="#" class="btn btn-success" style="cursor: pointer;" onclick="sendApp(\''+job_id+'\',\''+data.company_id+'\');">Apply job</a> '+
              '<a href="#" class="btn btn-danger" style="cursor: pointer;" onclick="jobs();"><i class="fa fa-arrow-left"> Back </i></a>'
              '</div>'
            '</div>'
          '</div>'+
    
        '</div>'+
      '</div>'+
    '</section>'+
    '<!-- Job Detail Section End -->';
      $('#content').empty().append(apply);
  },
  error: function(err){
    swalNotify(err.responseText,'error');
  }
 });
}
function sendApp(job_id,company_id){  
  $.ajax({
    method: "POST",
    dataType: 'json',
    url: "post.php/jobseeker/send_application",
    data: {"jobseeker_id" : session_user_id,"job_id": job_id,"company_id": company_id},
    success: function(response){
    if(response == 200 ){
      swalNotify('job application successfully sent','success');
    }else if(response == 'You already applied!'){
      swalNotify('You have already applied for this job. The company will get back to you','error');
    }else{
      swalNotify('application not sent. Please try again','error');
    }
    },
    error: function(err){
      swalNotify(err.responseText,'error');
    }
 })
}
function jMessagesCenter(message_id){
//ams: am passing message_id here just to know if this is a call from the topbar i.e
//Knowing if the user tried to view a message from the notification bar
let temp = '<div class="container-fluid"><div class="row"><div class="col-md-3 sidebarMessage"></div><div class="col-md-9 contentMessage"></div></div></div>';
$('#content').empty().append(temp);

jsidebarMessage();
jcontentMessage(message_id);
}
function jsidebarMessage(){
  $.ajax({
    method: "GET",
    dataType: 'json',
    url: "get.php/jobseeker/no_of_new_messages",
    data: {"login_id" : session_id},
    success: function(data){
      let sbMessage =  '<a style="cursor: pointer;" class="btn btn-primary btn-block mb-3 text-white" onclick="selectACompanyToMsg();">Compose</a>'+

      '<div class="card-body p-0 text-dark">'+
        '<ul class="nav nav-pills flex-column text-dark">'+
          '<li class="nav-item active text-dark">'+
            '<a class="nav-link" style="cursor: pointer;" onclick="jcontentMessage();">'+
              '<i class="fas fa-inbox text-dark"></i> Unread'+
              '<span class="badge bg-info float-right">'+data+'</span>'+
            '</a>'+
          '</li>'+
          '<li class="nav-item text-dark">'+
            '<a style="cursor: pointer;" class="nav-link" onclick="jsentMessages();">'+
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
       //jcontentMessage();
   },
   error: function(err){
    swalNotify(err.responseText,'error');
   }
  });
}
function jcontentMessage(message_id){
//ams:check messagesCenter to know why i passed message_id
let conMessage ='';
$.ajax({
  method: "GET",
  dataType: 'json',
  url: "get.php/jobseeker/all_inbox_messages",
  data: {"login_id" : session_id},
  success: function(data){
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
          ' <th></th>'+
          '</thead>'+
            '<tbody>';

            $.each(data, function( i, val ) {
              let checkId = val.message_id+"checkbox";
              //AMS-> am filtering the message body to get rid of all tags
              var filteredMsgBody = $("<div>").html(val.message_body).text();
              conMessage+= '<tr id="'+val.message_id+'" class="test" style="cursor: pointer;" >'+
                          '<td>'+
                            '<div class="icheck-primary">'+
                              '<input type="checkbox" value="" id="'+checkId+'">'+
                              '<label for="check1"></label>'+
                            '</div>'+
                          '</td>'+
                          '<td class="mailbox-name">'+val.creator_name+'</td>'+
                          '<td class="mailbox-subject"><b>'+val.subject+'</b> -'+filteredMsgBody.substring(0, 35).concat('...')+''+
                          '</td>'+
                          '<td class="mailbox-attachment">'+((val.attachment)?"<i class='fas fa-paperclip'></i>":"")+'</td>'+
                          '<td class="mailbox-date">'+moment(val.create_date).fromNow()+'</td>'+
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
        $.each(data, function( i, val ) {
          if(val.message_id === id){
          jviewMessage(val.message_id);
          }
        });
        //return false;
      });


      });

      jgeyOutReadMessages('myTable',message_id);
    },
    error: function(err){
      swalNotify(err.responseText,'error');
    }
    });
}
function jgeyOutReadMessages(param,message_id){
$.ajax({
  method: "GET",
  dataType: 'json',
  url: "get.php/jobseeker/read_messages",
  data: {"login_id" : session_id},
  success: function(data){
    if(data != 0){
      $.each(data, function(i,val){
        var table = $('#'+param).DataTable();
      table.$('tr#'+val.message_id).css({'background-color': 'gainsboro'});
      });
      if(message_id !== undefined)  jviewMessage(message_id); //ams:check messagesCenter to know why i passed message_id
    }
  },
  error: function(err){
    swalNotify(err.responseText,'error');
  }
})
}
function selectACompanyToMsg(){
  let conMessage ='';
  $.ajax({
    method: "GET",
    dataType: 'json',
    url: "get.php/jobseeker/retreive_all_companies",
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

                conMessage+= '<tr id="test101" style="cursor: pointer;" onclick="jcomposeNewMessage(\''+val.login_id+'\',\''+val.company_name+'\');">'+
                            '<td>'+
                                '<input type="hidden" value="" id="'+val.login_id+'">'+
                            '</td>'+
                            '<td class="img-link"><img class="rounded-circle img-thumbnail" src="'+((val.logo == null)?"https://ui-avatars.com/api/?name="+val.company_name.replace(/ /g, '+'):'https://dokuwo-uploads.s3.amazonaws.com/'+val.logo)+'" style="height: 5rem;width: 5rem;" alt=""/>'+
                            '<div class="status-indicator bg-success"></div>'+
                            '</td>'+
                            '<td class="full-name"><b>'+val.company_name+'</b></td>'+
                            '<td class="country-name">'+val.country+'</td>'+
                            '<td class="Skills">'+val.company_address+'</td>'+
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
       swalNotify(err.responseText,'error');
      }
     });
}
function jcomposeNewMessage(login_id,cName,divToClear){
let temp =' <div class="card card-primary card-outline shadow mb-4" style="border-top: 3px solid #007bff;">'+
// '<div class="card card-primary shadow mb-4" style="border-top: 3px solid #007bff;">'+
  '<div class="card-header py-1 d-flex flex-row align-items-center justify-content-between">'+
    '<h2 class="card-title text-primary">Compose New Message</h2>'+
  '</div>'+
  '<!-- /.card-header -->'+
  '<div class="card-body">'+
    '<form id="jComposeNewMsg" class="jobseekerComposeMessage" method="POST" enctype="multipart/form-data" autocomplete="off">'+
    '<div class="form-group input-group">'+
    '<span class="input-group-addon" style="padding: 6px 3px; border: 1px solid lightgrey; border-radius: 5px 0px 0px 5px">'+
    '<i class="fa fa-user"></i>'+
    '</span>'+
    '<input class="form-control" type="text" name="recipient" id="thefullname" value="'+cName+'" readonly>'+
    '</div>'+
    '<div class="form-group">'+
      '<input class="form-control" id="theSubject" placeholder="Subject:" value="">'+
    '</div>'+
    '<div class="form-group">'+
      '<div id="summernote" class="message_info"></div>'+
    '</div>'+
    '<div class="newAttachment d-flex flex-wrap justify-content-between">'+
  '</div>'+
  '</div>'+
  '<!-- /.card-body -->'+
  '<div class="card-footer">'+
    '<div class="float-right">'+
      '<button type="submit" name="submit" id="newmessage" form="jComposeNewMsg" class="btn btn-primary"><i class="far fa-envelope"></i> Send</button>'+
    '</div>'+
    '<button type="reset" class="btn btn-default" onclick="'+((divToClear == undefined)?"selectACompanyToMsg()": "discardMsg(\'"+divToClear+"\')")+'"><i class="fas fa-times"></i> Discard</button>'+
    '<button class="btn btn-default" id="addAttachment"><i class="fas fa-paperclip" style="cursor: pointer;">Attachment</i></button>'+
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
    //add a new file attachment
    $("#addAttachment").click(function(e){

      e.preventDefault();
      addNewAttachment();
    });
  //on submit
  $('#jComposeNewMsg').submit(function(e){
    e.preventDefault();
    $('#newmessage').prop('disabled', true);
    if($('#thefullname').val() ===''){
      $('#newmessage').prop('disabled', false);
      swalNotify('Message receiver field name cannot be empty','error');
    }else if($('#theSubject').val() === ''){
      $('#newmessage').prop('disabled', false);
      swalNotify('Subject field cannot be empty','error');
    }else if($('#theSubject').val() > 100){
      $('#newmessage').prop('disabled', false);
      swalNotify('Subject field cannot exceed 100 characters','error');
    }else{
      var formData = new FormData(this);
      formData.append("creator_id", session_id);
      formData.append("creator_name", session_fullname);
      formData.append("recipient_id", login_id);
      formData.append("recipient_name", $('#thefullname').val());
      formData.append("parent_msg_id", null);
      formData.append("subject", $('#theSubject').val());
      formData.append("msg_body", $('.message_info').summernote('code'));

      $.ajax({
        method: "POST",
        dataType: 'json',
        url: "post.php/jobseeker/send_msg_to_company",
        data: formData,
        contentType: false,
        processData: false,
        cache:false,
        success: data => {
          $('#newmessage').prop('disabled', false);
          if(data.status == 'success'){
            swalNotify(data.message,'success'); 
            (divToClear == undefined)? jcontentMessage(): discardMsg(divToClear);
          }
          if(data.status == 'error'){
            swalNotify(data.message,'error'); 
          }

        },
        error: err => {
          $('#newmessage').prop('disabled', false);
          swalNotify(err.responseText,'error');
        }
      });

      }

    });
});  
}
/**
 * @param msg_id 
 * @param jobseeker_name -> {optional and only set when viewing sent messages}
 * @param jobseeker_id -> {optional and only set when viewing sent messages}
 */
function jviewMessage(msg_id,company_name,company_id){
$.ajax({
  method: "GET",
  dataType: 'json',
  url: "get.php/jobseeker/get_message",
  data: {"msg_id" : msg_id},
  success: function(data){
  let temp = '<div class="card card-primary shadow mb-4" style="border-top: 3px solid #007bff;">'+
    '<div class="card-header  py-1 d-flex flex-row align-items-center justify-content-between">'+
      '<h3 class="card-title">Read Message</h3>'+

      '<div class="card-tools">';
      (company_id === undefined)?temp += '<button class="btn btn-primary btn-icon-split" onclick="jcontentMessage();">':temp +='<button class="btn btn-primary btn-icon-split" onclick="jsentMessages();">';
      
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
        '<h5><b>'+data.subject+'</b></h5>'+
        '<h6><p id="'+data.message_id+'">From: '+data.creator_name+'</p>'+
          '<span class="mailbox-read-time float-right">'+data.create_date+'</span></h6>'+
      '</div>'+
      '<!-- /.mailbox-read-info -->'+
      '<div class="mailbox-controls  text-center">'+
      '<hr>'+
        '<div class="btn-group">'+
          '<button type="button" class="btn btn-default btn-sm" data-toggle="tooltip" data-container="body" title="Delete" onclick="jDeleteMessage(\''+msg_id+'\',\''+company_id+'\');">'+
          '<i class="far fa-trash-alt"></i></button>'+

          '<button type="button" class="btn btn-default btn-sm" data-toggle="tooltip" data-container="body" title="Reply" onclick="jReplyMsg(\''+msg_id+'\',\''+data.creator_id+'\',\''+data.creator_name+'\',\''+data.message_subject+'\',\''+company_id+'\');">'+
            '<i class="fas fa-reply"></i></button>'+
          '<button type="button" class="btn btn-default btn-sm" data-toggle="tooltip" data-container="body" title="Forward" onclick="selectACompanyToForward(\''+msg_id+'\');">'+
            '<i class="fas fa-share"></i></button>'+
        '</div>'+
        '<!-- /.btn-group -->'+
        '<button type="button" class="btn btn-default btn-sm printbtn" data-toggle="tooltip" title="Print">'+
          '<i class="fas fa-print"></i></button>'+
      '</div>'+
      '<hr>'+
      '<!-- /.mailbox-controls -->'+
      '<div class="mailbox-read-message">'+
          '<p>'+data.message_body+'</p>'+
        //'<p class="msgBodyViewed">This is a static text to be removed</p>'+
        // '<p>'+creator_name+'</p>'+
      '</div>'+
      '<!-- /.mailbox-read-message -->'+
    '</div>'+
    '<!-- /.card-body -->'+
    '<div class="card-footer bg-white">'+
    '<ul class="mailbox-attachments d-flex flex-wrap justify-content-between align-items-stretch clearfix">';
    $.each(data.attachments, (i, val) => {
      let extension = val.attachment.substr( (val.attachment.lastIndexOf('.') +1) );
      let images = ['jpeg', 'jpg', 'png'];
    temp += '<li>'+
              '<div class="mailbox-attachment-info">'+
                '<a href="https://dokuwo-uploads.s3.amazonaws.com/'+val.attachment+'" target="_blank" class="mailbox-attachment-name"><i class="'+(images.includes(extension)?'fas fa-camera':'fas fa-paperclip')+'"></i> '+val.attachment.replace(/[0-9]{6}/g, '')+'</a>'+
                    '<span class="mailbox-attachment-size clearfix mt-1">'+
                      '<a href="https://dokuwo-uploads.s3.amazonaws.com/'+val.attachment+'" target="_blank" class="btn btn-default btn-sm float-right"><i class="fas fa-cloud-download-alt"></i></a>'+
                    '</span>'+
              '</div>'+
            '</li>';
    })

temp += '</ul>'+
  '</div>'+
  '<!-- /.card-footer -->'+
    '<div class="card-footer">'+
      '<div class="float-right">'+
        '<button type="button" class="btn btn-default" onclick="jReplyMsg(\''+msg_id+'\',\''+data.creator_id+'\',\''+data.creator_name+'\',\''+data.subject+'\',\''+company_id+'\');"><i class="fas fa-reply"></i> Reply</button>'+
        '<button type="button" class="btn btn-default" onclick="selectACompanyToForward(\''+msg_id+'\')"><i class="fas fa-share"></i> Forward</button>'+
      '</div>'+
    '<button type="button" class="btn btn-default" onclick="jDeleteMessage(\''+msg_id+'\',\''+company_id+'\');"><i class="far fa-trash-alt"></i> Delete</button>'+
    '<button type="button" class="btn btn-default printbtn"><i class="fas fa-print"></i> Print</button>'+
    '</div>'+
    '<!-- /.card-footer -->'+
  '</div>'+
  '<!-- /.card -->'+
'</div>';

$('.contentMessage').empty().append(temp);

$(document).ready(function (){
  if(company_id){
    $('#'+msg_id).html('To: '+company_name+'');
  }
  //Print a message
  $(".printbtn").click(function(){

    var mode = 'iframe'; //popup
    var close = mode == "popup";
    var options = { mode : mode, popClose : close};
    $("div.msgBodyViewed").printArea( options );

  });

  $("p").on("copy cut", function (e) {
    swalNotify('copying disabled for good reasons','warning');
    e.preventDefault();
    return false;
});
$('p').mousedown(function(e) { 
  if (e.button == 2) { 
      e.preventDefault(); 
      swalNotify('right-click is disabled!','warning'); 
  }
})
if(company_id === undefined){
  $.ajax({
    method: "POST",
    dataType: 'json',
    url: "post.php/jobseeker/message_is_read",
    data: {"message_id" : msg_id},
    success: function(data){
      if(data == 200){
        jsidebarMessage();
        jnewMsgNotification();
      }
    },
    error: function(err){
    //
    }
   })
   }
  })
  },
  error: function(err){
    swalNotify(err.responseText,'error');
  }
  });
}
function jDeleteMessage(msg_id,company_id){
  $.ajax({
    method: "POST",
    dataType: 'json',
    url: (company_id === 'undefined')?"post.php/jobseeker/delete_message":"post.php/jobseeker/delete_sent_message",
    data: {"message_id" : msg_id},
    success: function(data){
      if(data == 200){
        swalNotify('message successfully deleted','success');
        (company_id === 'undefined')?jcontentMessage():jsentMessages();
      }else {
        swalNotify('message has not been deleted','error');
      }
    },
    error: function(err){
      swalNotify(err.responseText,'error');
    }
  });
}
/**
 * 
 * @param msg_id 
 * @param recipient_id 
 * @param recipient_name 
 * @param msg_subject 
 * @param company_id -> {company_id is basically not necessary here. But since we are using the same function for viewing messages,
 *                       we are using it to differentiate btw sent and received messages as we wont support reply on sent messages}
 */
function jReplyMsg(msg_id,recipient_id,recipient_name,msg_subject,company_id){
  if(company_id !== 'undefined'){
    swalNotify('You can\'t reply to your own sent messages!','warning');
    return;
  }else{
    let temp =' <div class="card card-primary card-outline">'+
    '<div class="card-header">'+
      '<h3 class="card-title">Compose New Message</h3>'+
    '</div>'+
    '<!-- /.card-header -->'+
    '<div class="card-body">'+
      '<form id="jComposeNewMsg" class="jobseekerComposeMessage" method="POST" enctype="multipart/form-data" autocomplete="off">'+
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
      '<div class="newAttachment flex-wrap justify-content-between">'+
      '</div>'+
    '</div>'+
    '<!-- /.card-body -->'+
    '<div class="card-footer">'+
      '<div class="float-right">'+
        '<button type="submit" name="submit" id="newreplymsg" form="jComposeNewMsg" class="btn btn-primary"><i class="far fa-envelope"></i> Send</button>'+
      '</div>'+
      '<button type="reset" class="btn btn-default" onclick="jcontentMessage();"><i class="fas fa-times"></i> Discard</button>'+
      '<button class="btn btn-default" id="addAttachment"><i class="fas fa-paperclip" style="cursor: pointer;">Attachment</i></button>'+
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
  //on attachment add
$("#addAttachment").click(function(e){

  e.preventDefault();
  addNewAttachment();
});

  //on submit
$('#jComposeNewMsg').submit(function(e){
  e.preventDefault();
  if($('#replyToName').val() ===''){
    swalNotify('Message receiver name cannot be empty','error');
  }else if($('#replyToSubject').val() === ''){
    swalNotify('Subject field cannot be empty','error');
  }else{

    var formData = new FormData(this);
    formData.append("creator_id", session_id);
    formData.append("creator_name", session_fullname);
    formData.append("recipient_id", recipient_id);
    formData.append("recipient_name", recipient_name);
    formData.append("parent_msg_id", msg_id);
    formData.append("subject", $('#replyToSubject').val());
    formData.append("msg_body", $('.message_body_info').summernote('code'));
  $.ajax({
    method: "POST",
    dataType: 'json',
    url: "post.php/jobseeker/reply_company",
    data: formData,
    contentType: false,
    processData: false,
    cache:false,
    success: data => {
      if(data.status == 'success'){
        swalNotify(data.message,'success');
        jcontentMessage();
      }
      if(data.status == 'error'){
        swalNotify(data.message,'error'); 
      }
    },
    error: err => {
        swalNotify(err.responseText,'error');
    }
  });
}
  });
});
}
}
function selectACompanyToForward(msg_id){
let conMessage ='';
$.ajax({
  method: "GET",
  dataType: 'json',
  url: "get.php/jobseeker/retreive_all_companies",
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
          ' <th>Address</th>'+
          ' <th>Country</th>'+
          '</thead>'+
            '<tbody>';
            if(data === 0){
            //
            }else{
            $.each(data, function( i, val ) {
              conMessage+= '<tr id="test101" style="cursor: pointer;" onclick="jforwardMsgTo(\''+val.login_id+'\',\''+val.company_name+'\',\''+msg_id+'\');">'+
                          '<td>'+
                              '<input type="hidden" value="" id="'+val.login_id+'">'+
                          '</td>'+
                          '<td class="img-link"><img class="rounded-circle img-thumbnail" src="'+((val.logo == null)?"https://ui-avatars.com/api/?name="+val.company_name.replace(/ /g, '+'):'https://dokuwo-uploads.s3.amazonaws.com/'+val.logo)+'" style="height: 5rem;width: 5rem;" alt="'+val.company_name+'"/>'+
                          '<div class="status-indicator bg-success"></div>'+
                          '</td>'+
                          '<td class="full-name"><b>'+val.company_name+'</b></td>'+
                          '<td class="country-name">'+val.company_address+'</td>'+
                          '<td class="Skills">'+val.country+'</td>'+
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
      swalNotify(err.responseText,'error');
    }
    });
}
function jforwardMsgTo(login_id,company_name,msg_id){
$.ajax({
  method: "POST",
  dataType: 'json',
  url: "post.php/jobseeker/forward_msg_to_company",
  data: {"creator_id" : session_id, "cName": session_fullname, "company_login_id" : login_id, "Name" : company_name,"message_id": msg_id},
  success: function(data){
      swalNotify(data.message,'success'); 
      jcontentMessage();
  },
  error: function(err){
    swalNotify(err.responseText,'error');
  }
});
}
/**
 * {am using this func to update the topBar message center notification}
 */
function jnewMsgNotification(){  
  let temp = '';
  $.ajax({
    method: "GET",
    dataType: 'json',
    url: "get.php/jobseeker/new_unread_messages",
    data: {"login_id" : session_id},
    success: function(data){
      if(data != 400){
      temp += '<h6 class="dropdown-header">'+
        'Message Center'+
      '</h6>';
      $.each(data, function(i,val){
        temp += '<a class="dropdown-item d-flex align-items-center" id="'+val.message_id+'" style="cursor: pointer;" onclick="redirectToMessageFromNotification(\''+val.message_id+'\',\''+val.creator_id+'\',\''+val.creator_name+'\',\''+val.subject+'\',\''+val.message_body+'\',\''+val.create_date+'\',\''+val.parent_message_id+'\');">'+
        '<div class="font-weight-bold">'+
          '<div class="text-truncate">'+val.subject+'</div>'+
          '<div class="small text-gray-500">'+val.creator_name+' · '+moment(val.create_date).fromNow()+'</div>'+
        '</div>'+
      '</a>';
      })

      temp += '<a class="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>'; 
      $('.NewMsgNotificationsCount').empty().html((data.length > 0)?data[0].count:0);
      $('.NewMsgNotifications').empty().append(temp);
      }else{
        temp += '<h6 class="dropdown-header">'+
        'Message Center'+
      '</h6>'+
      '<a class="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>'; 
      $('.NewMsgNotificationsCount').empty().html(0);
      $('.NewMsgNotifications').empty().append(temp);
      }
    },
    error: function(err){
      swalNotify(err.responseText,'error');
    }
  });
}
function jsentMessages(){
let temp = '';
$.ajax({
  method: "GET",
  dataType: 'json',
  url: "get.php/jobseeker/all_sent_messages",
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
        ' <th></th>'+
        '</thead>'+
          '<tbody>';

            $.each(data, function( i, val ) {
              let checkId = val.message_id+"checkbox";
              //ams-> am filtering the message body to get rid of all tags
              var filteredMsgBody = $("<div>").html(val.message_body).text();
      temp += '<tr id="'+val.message_id+'" style="cursor: pointer;" onclick="jviewMessage(\''+val.message_id+'\',\''+val.company_name+'\',\''+val.recipient_id+'\');">'+
                    '<td>'+
                      '<div class="icheck-primary">'+
                        '<input type="checkbox" value="" id="'+checkId+'">'+
                        '<label for="check1"></label>'+
                      '</div>'+
                    '</td>'+
                    // '<td class="mailbox-star"><a href="#"><i class="fas fa-star text-warning"></i></a></td>'+
                    '<td class="mailbox-name">'+val.company_name+'</td>'+
                    '<td class="mailbox-subject" id="jrcheck"><b>'+val.subject+'</b> -'+filteredMsgBody.substring(0, 35).concat("...")+''+
                    '</td>'+
                    '<td class="mailbox-attachment">'+((val.attachment)?"<i class='fas fa-paperclip'></i>":"")+'</td>'+
                    '<td class="mailbox-date">'+moment(val.create_date).fromNow()+'</td>'+
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
  swalNotify(err.responseText,'error');
}
});
}
 function hires($res){
   if($res){
    let temp =      ' <!-- Begin Page Content -->'+
    '<div class="container-fluid">'+

    '<!-- Page Heading -->'+
    '<!-- DataTales Example -->'+
    '<div class="card shadow mb-4">'+
      '<div class="card-header py-3">'+
        '<h6 class="m-0 font-weight-bold text-primary">Hires</h6>'+
      '</div>'+
      '<div class="card-body">'+
        ' <div class="table-responsive">'+
          '<table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">'+
            '<thead>'+
              '<tr>'+
                '<th>Name</th>'+
                '<th>Email</th>'+
                '<th>Phone</th>'+
                '<th style="width: 30%">Task description</th>'+
                '<th>Date</th>'+
                '<th></th>'+
              '</tr>'+
            '</thead>'+
            ' <tfoot>'+
              '<tr>'+
                '<th>Name</th>'+
                '<th>Email</th>'+
                '<th>Phone</th>'+
                '<th style="width: 30%">Task description</th>'+
                '<th>Date</th>'+
                '<th></th>'+
              '</tr>'+
            '</tfoot>'+
            '<tbody>';
            $.ajax({
              method: "GET",
              dataType: 'json',
              url: "get.php/jobseeker/all_hires",
              data: {"jobseeker_id" : session_user_id},
              success: function(data){
                if(data != 400){
                $.each(data, function(i,val){
                  temp += '<tr>'+
                  '<td>'+val.name+'</td>'+
                  '<td>'+val.email+'</td>'+
                  '<td>'+val.phone+'</td>'+
                  '<td>'+val.task+'</td>'+
                  '<td>'+val.date+'</td>'+
                  '<td class="text-right"><a class="btn btn-danger btn-block btn-sm" href="#" style="cursor: pointer;" onclick="delHire(\''+val.hire_id+'\');">'+
                  '<i class="fas fa-trash">'+
                  '</i>'+
                  'Delete'+
                  '</a></td>'+
                '</tr>';
                })
                }
                temp += '</tbody>'+
          '</table>'+
        '</div>'+
      '</div>'+
    '</div>'+

    '</div>'+
    '<!-- /.container-fluid -->';
    $('#content').empty().append(temp);
    $(document).ready( function () {
      $('#dataTable').DataTable({
        "aLengthMenu": [[10,25, 50, 75, -1], [10,25, 50, 75, "All"]],
        "oLanguage": {
          //"sLengthMenu": "Display _MENU_ messages",
          "sEmptyTable":     "No hires available"
        },
      });
    });
    },
    error: function(err){
      swalNotify(err.responseText,'error');
    }
  });
  }else{
    let temp = '<div class="container-fluid">'+
      '<div class="card shadow mb-4 card-outline" style="border-top: 3px solid #007bff;"">'+
        '<div class="card-header py-3">'+
          '<h6 class="m-0 font-weight-bold text-primary text-center">Ooops!</h6>'+
        '</div>'+
        '<div class="card-body">'+
        '<div>You need to indicate interest in doing <strong>freelance work</strong> so as to be <strong>hired</strong>. Click on <strong>Settings</strong> on the sidebar  and whilst on the <strong>Profile</strong> tab, change the <strong>interest</strong> field from <strong>"Only job"</strong> to <strong>"Job and / or Freelance work"</strong> and then click <strong>update</strong>.</div>'+
        '</div>'+
      '</div>'+
     '</div>';
    $('#content').empty().append(temp);
  }
 }
 function doesFreelance(){
  $.ajax({
    method: "GET",
    dataType: 'json',
    url: "get.php/jobseeker/doing_freelance",
    data: {"jobseeker_id" : session_user_id},
    success: function(response){
      hires(response);
    },
    error: function(err){
      swalNotify(err.responseText,'error');
    }
  })
 }
 function delHire(hire_id){  
    $.ajax({
      method: "POST",
      dataType: 'json',
      url: "post.php/jobseeker/delete_hire",
      data: {"hire_id" : hire_id},
      success: function(response){
        swalNotify('Deleted','success');
        hires();
      },
      error: function(err){
        swalNotify(err.responseText,'error');
      }
    });
 }
 function portfolio(){
if(package != 'None'){
  let  temp = '<div class="container-fluid">'+
  '<div class="d-sm-flex align-items-center justify-content-between mb-4">'+
  '<div class="h3 mb-0"></div>'+
 '<div class="dropdown">'+
  '<button class=" dropdown-toggle d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">'+
    'add new'+
  '</button>'+
  '<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">'+
    '<a class="dropdown-item" onclick="addService();" style="cursor: pointer;">Service</a>'+
    '<a class="dropdown-item" onclick="addPortfolio();" style="cursor: pointer;">Portfolio</a>'+
  '</div>'+
 '</div>'+
'</div>'+
'<div class="row"><div class="col-md-6 services"></div><div class="col-md-6 portfolio"></div></div></div>';
$('#content').empty().append(temp);
services();
my_portfolio();
}else{
  let temp = '<div class="container-fluid">'+
  '<div class="card shadow mb-4 card-outline" style="border-top: 3px solid #007bff;"">'+
    '<div class="card-header py-3">'+
      '<h6 class="m-0 font-weight-bold text-primary text-center">Ooops!</h6>'+
    '</div>'+
    '<div class="card-body">'+
    '<div>You need to subscribe to a <strong>package</strong> so as to be able to add or edit your <strong>services</strong> and <strong>portfolio</strong>. Click on <strong>Settings</strong> on the sidebar and then click on the <strong>Settings</strong> tab, choose a  <strong>package</strong> and then click <strong>update</strong>.</div>'+
    '</div>'+
  '</div>'+
 '</div>';
$('#content').empty().append(temp);
}
 }
 function services(){ 
  let services = '';
  services+=
  '<div class="card card-primary card-outline shadow mb-4" style="border-top: 3px solid #007bff;">'+
  '<div class="card-header py-1 d-flex flex-row align-items-center justify-content-between">'+
    '<h4 class="card-title">Services</h4>'+
  '</div>'+
  '<!-- /.card-header -->'+
  '<div class="card-body p-1">'+
  '<table class="table table-striped projects">'+
  '<thead>'+
      '<tr>'+
          '<th style="width: 40%">Name</th>'+
          '<th style="width: 30%">Price</th>'+
          '<th></th>'+
      '</tr>'+
  '</thead>'+
  '<tbody>';
  $.ajax({
    url: 'get.php/jobseeker/freelancer_services',
    method: 'GET',
    dataType: 'json',
    data: {'jobseeker_id':session_user_id},
    success: function(data){
    if(data !== 400){
      $.each(data, function( i, val ) {
        services +='<tr>'+
        '<td>'+val.name.substring(0, 25)+'</td>'+
        '<td>GMD'+currencyFormat(val.price)+'</td>'+
        '<td class="project-actions text-right text-white">'+
            '<a class="btn btn-info btn-sm" onclick="editService(\''+val.service_id+'\')">'+
                '<i class="fas fa-pencil-alt"></i>Edit'+
            '</a>'+
            '<a class="btn btn-danger btn-sm" onclick="deleteService(\''+val.service_id+'\')">'+
                '<i class="fas fa-trash"></i>Delete'+
           ' </a>'+
        '</td>'+
    '</tr>';
      });
    }
      '</tbody>'+
      '</table>'+
    '</div>'+
  '<!-- /.card-body -->'+
  '</div>'+
  '<!-- /.card -->';
  $('.services').empty().append(services);

    },
    error: function(err){
      swalNotify(err.responseText,'error');
    }
  });

  }
   
  function my_portfolio(){
    let portfolio = '';
    portfolio+=
    '<div class="card card-primary card-outline shadow mb-4" style="border-top: 3px solid #007bff;">'+
    '<div class="card-header py-1 d-flex flex-row align-items-center justify-content-between">'+
      '<h4 class="card-title">Portfolio</h4>'+
    '</div>'+
    '<!-- /.card-header -->'+
    '<div class="card-body p-1">'+
    '<table class="table table-striped projects">'+
    '<thead>'+
        '<tr>'+
            '<th style="width: 40%">Work/portfolio Desc.</th>'+
            '<th style="width: 30%">Url</th>'+
            '<th></th>'+
        '</tr>'+
    '</thead>'+
    '<tbody>';
    $.ajax({
      method: 'GET',
      url: 'get.php/jobseeker/freelancer_portfolio',
      dataType: 'json',
      data: {'jobseeker_id':session_user_id},
      success: function(data){
      if(data !== 400){
        $.each(data, function( i, val ) {
          portfolio +='<tr>'+
            '<td>'+val.description+'</td>'+
            '<td>'+val.url_link.substring(0, 20)+'</td>'+
            '<td class="project-actions text-right text-white">'+
                '<a class="btn btn-info btn-sm" onclick="editPortfolio(\''+val.portfolio_id+'\')">'+
                    '<i class="fas fa-pencil-alt"></i>Edit'+
                '</a>'+
                '<a class="btn btn-danger btn-sm" onclick="deletePortfolio(\''+val.portfolio_id+'\')">'+
                    '<i class="fas fa-trash"></i>Delete'+
               ' </a>'+
            '</td>'+
        '</tr>';
      });
    }
  portfolio += '</tbody>'+
      '</table>'+
    '</div>'+
  '<!-- /.card-body -->'+
  '</div>'+
  '<!-- /.card -->';
  $('.portfolio').empty().append(portfolio);
  },
  error: function(err){
    swalNotify(err.responseText,'error');
  }
  });
}
function addService(){
  let  temp = '<div class="container-fluid"><div class="row"><div class="col-md-12 jobsposted">'+
  '<div class="card card-primary card-outline shadow mb-4" style="border-top: 3px solid #007bff;">'+
  '<div class="card-header py-1 d-flex flex-row align-items-center justify-content-between">'+
    '<h4 class="card-title">New Service</h4>'+
  '</div>'+
  '<!-- /.card-header -->'+
  '<div class="card-body p-2">'+
  '<div class="table-responsive">'+
  '<form method="POST" id="createService" autocomplete="off">'+
  '<div class="row p-3">'+
  '<div class="col-md-12 col-sm-6">'+
  '<div class="input-group mb-3">'+
  '<div class="input-group-prepend">'+
    '<span class="input-group-text">Name</span>'+
  '</div>'+
  '<input type="text" class="form-control" id="serviceName" value="" placeholder="eg. web design">'+
  '</div>'+
  '<div class="input-group mb-3">'+
  '<div class="input-group-prepend">'+
    '<span class="input-group-text">Price</span>'+
  '</div>'+
  '<input type="number" class="form-control" id="Price" value="">'+
  '</div>'+
  '</div>'+
  '<!-- /.col-md-6 col-sm-4-->'+
 ' <!-- Force next columns to break to new line at md breakpoint and up -->'+
  '<div class="w-100 d-none d-md-block"></div>'+
  '<div class="col-md-6 col-sm-4 py-2 d-flex justify-content-between">'+
  '<button type="button" class="btn btn-danger" style="cursor: pointer;" onclick="portfolio();"><i class="fas fa-lg fa-arrow-left"></i> Cancel</button>'+
  '<button type="submit" name="submit" id="addNewService" class="btn btn-success" style="cursor: pointer;">Create <i class="fas fa-lg fa-arrow-right"></i></button>'+
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
  $('.services').empty().append(temp);
  $(document).ready(function(){
    $('#addNewService').click(function(e){
      e.preventDefault();
      let serviceName = $('#serviceName').val();
      let Price = $('#Price').val();

      if (serviceName == ''){
        swal('Invalid !','Name field cannot be empty','error','Cool');
        return;
      }
      if (Price == ''){
       swal('Invalid!','Price field cannot be empty','error','Cool');
       return;
      }

      if(Price == 0){
        swal('Invalid Price!','Please enter the price for the service','error','Cool');
        return;
       }else if(Price.length < 1){
        swal('Invalid Price!','Please enter the price for the service','error','Cool');
        return;
       }else{
        var regEx = new RegExp('^[0-9]+$');
        var validPrice = regEx.test(Price);
        if(!validPrice){
          swal('Invalid Price!','Please enter a valid price for the service','error','Cool');
          return;
        }
      }

      $.ajax({
        method: "POST",
        dataType: 'json',
        url: "post.php/jobseeker/add_service",
        data: {"jobseeker_id": session_user_id,"price" : Price,"name": serviceName},
        success: function(response){
          swal('Success!',response.message,'success','Cool');
          portfolio();
        },
        error: function(err){
          swalNotify(err.responseText,'error');
        }
      })
  });
});
}
function editService(service_id){
  let  temp = '<div class="container-fluid"><div class="row"><div class="col-md-12 jobsposted">'+
  '<div class="card card-primary card-outline shadow mb-4" style="border-top: 3px solid #007bff;">'+
  '<div class="card-header py-1 d-flex flex-row align-items-center justify-content-between">'+
    '<h4 class="card-title">Edit Service</h4>'+
  '</div>'+
  '<!-- /.card-header -->'+
  '<div class="card-body p-2">'+
  '<div class="table-responsive">';
  $.ajax({
    method: "GET",
    dataType: 'json',
    url: "get.php/jobseeker/get_service",
    data: {"service_id": service_id,},
    success: function(response){
      if(response != 400){
         temp +=   '<form method="POST" id="createService" autocomplete="off">'+
         '<div class="row p-3">'+
         '<div class="col-md-12 col-sm-6">'+
         '<div class="input-group mb-3">'+
         '<div class="input-group-prepend">'+
           '<span class="input-group-text">Name</span>'+
         '</div>'+
         '<input type="text" class="form-control" id="serviceName" value="'+response.name+'">'+
         '</div>'+
         '<div class="input-group mb-3">'+
         '<div class="input-group-prepend">'+
           '<span class="input-group-text">Price</span>'+
         '</div>'+
         '<input type="number" class="form-control" id="Price" value="'+response.price+'">'+
         '</div>'+
         '</div>'+
         '<!-- /.col-md-6 col-sm-4-->'+
        ' <!-- Force next columns to break to new line at md breakpoint and up -->'+
         '<div class="w-100 d-none d-md-block"></div>'+
         '<div class="col-md-6 col-sm-4 py-2 d-flex justify-content-between">'+
         '<button type="button" class="btn btn-danger" style="cursor: pointer;" onclick="portfolio();"><i class="fas fa-lg fa-arrow-left"></i> Cancel</button>'+
         '<button type="submit" name="submit" id="updateService" class="btn btn-success" style="cursor: pointer;">Update <i class="fas fa-lg fa-arrow-up"></i></button>'+
         '</div>'+
         '<!-- /.col-md-6 col-sm-4-->'+
         '</form>';
      }

  temp+='<!-- /.form-->'+
    '</div>'+
  '<!-- /.row p-2-->'+
  '</div>'+
  '<!-- /.mail-box-messages -->'+
'</div>'+
'<!-- /.card-body -->'+
'</div>';
  '</div></div></div>';
  $('.services').empty().append(temp);

  $(document).ready(function(){
    $('#updateService').click(function(e){
      e.preventDefault();
      let serviceName = $('#serviceName').val();
      let Price = $('#Price').val();

      if (serviceName == ''){
        swal('Invalid !','Name field cannot be empty','error','Cool');
        return;
      }
      if (Price == ''){
       swal('Invalid!','Price field cannot be empty','error','Cool');
       return;
      }

      if(Price == 0){
        swal('Invalid Price!','Please enter the price for the service','error','Cool');
        return;
       }else if(Price.length < 1){
        swal('Invalid Price!','Please enter the price for the service','error','Cool');
        return;
       }else{
        var regEx = new RegExp('^[0-9]+$');
        var validPrice = regEx.test(Price);
        if(!validPrice){
          swal('Invalid Price!','Please enter a valid price for the service','error','Cool');
          return;
        }
      }
        $.ajax({
        method: "POST",
        dataType: 'json',
        url: "post.php/jobseeker/update_service",
        data: {"service_id": service_id,"price" : Price,"name": serviceName},
        success: function(response){
          swal('Success!',response.message,'success','Cool');
          portfolio();
        },
        error: function(err){
          swalNotify(err.responseText,'error');
        }
      })
    });
  });
},
error: function(err){
  swalNotify(err.responseText,'error');
}
})

}
function deleteService(service_id){
  $.ajax({
    method: "POST",
    dataType: 'json',
    url: "post.php/jobseeker/delete_service",
    data: {"service_id" : service_id},
    success: function(response){
      swal('Success!',response.message,'success','Cool');
      portfolio();
    },
    error: function(err){
      swalNotify(err.responseText,'error');
    }
  })
}
function addPortfolio(){
  let  temp = '<div class="container-fluid"><div class="row"><div class="col-md-12 jobsposted">'+
  '<div class="card card-primary card-outline shadow mb-4" style="border-top: 3px solid #007bff;">'+
  '<div class="card-header py-1 d-flex flex-row align-items-center justify-content-between">'+
    '<h4 class="card-title">New Portfolio</h4>'+
  '</div>'+
  '<!-- /.card-header -->'+
  '<div class="card-body p-2">'+
  '<div class="table-responsive">'+
  '<form method="POST" id="createPortfolio" autocomplete="off">'+
  '<div class="row p-3">'+
  '<div class="col-md-12 col-sm-6">'+
  '<div class="input-group mb-3">'+
  '<div class="input-group-prepend">'+
    '<span class="input-group-text">Url link</span>'+
  '</div>'+
  '<input type="text" class="form-control" id="url" value="">'+
  '</div>'+
  '<div class="input-group mb-3">'+
  '<div class="input-group-prepend">'+
    '<span class="input-group-text">Description</span>'+
  '</div>'+
  '<input type="text" class="form-control" id="description" value="" placeholder="eg. aayfo logo">'+
  '</div>'+
 '<div class="input-group mb-3">'+
 '<div class="input-group-prepend">'+
   '<label class="input-group-text" for="Type">Type</label>'+
  '</div>'+
    '<select class="custom-select" id="Type">'+
      '<option selected>Choose...</option>'+
      '<option value="Work">Work</option>'+
      '<option value="Website">Personal Website</option>'+
    '</select>'+
  '</div>'+
  '</div>'+
  '<!-- /.col-md-6 col-sm-4-->'+
 ' <!-- Force next columns to break to new line at md breakpoint and up -->'+
  '<div class="w-100 d-none d-md-block"></div>'+
  '<div class="col-md-6 col-sm-4 py-2 d-flex justify-content-between">'+
  '<button type="button" class="btn btn-danger" style="cursor: pointer;" onclick="portfolio();"><i class="fas fa-lg fa-arrow-left"></i> Cancel</button>'+
  '<button type="submit" name="submit" id="addNewPortfolio" class="btn btn-success" style="cursor: pointer;">Create <i class="fas fa-lg fa-arrow-right"></i></button>'+
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
  $('.portfolio').empty().append(temp);
  $(document).ready(function(){
    $('#addNewPortfolio').click(function(e){
      e.preventDefault();
      let url = $('#url').val();
      let description = $('#description').val();
      let Type = $('#Type').val();
      if (url == ''){
        swal('Invalid !','URL field cannot be empty','error','Cool');
        return;
      }
      if (description == ''){
       swal('Invalid!','Description field cannot be empty','error','Cool');
       return;
      }
      if (description.length > 20){
        swal('Invalid!','Description Should be short and precise','error','Cool');
        return;
       }
      if (Type == 'Choose...'){
        swal('Invalid!','Type field must be selected','error','Cool');
        return;
       }

      $.ajax({
        method: "POST",
        dataType: 'json',
        url: "post.php/jobseeker/add_portfolio",
        data: {"jobseeker_id": session_user_id,"url_link" : url,"description": description,"type": Type},
        success: function(response){
          swal('Success!',response.message,'success','Cool');
          portfolio();
        },
        error: function(err){
          swalNotify(err.responseText,'error');
        }
      })
  });
});
}
function editPortfolio(portfolio_id){
  let  temp = '<div class="container-fluid"><div class="row"><div class="col-md-12 jobsposted">'+
  '<div class="card card-primary card-outline shadow mb-4" style="border-top: 3px solid #007bff;">'+
  '<div class="card-header py-1 d-flex flex-row align-items-center justify-content-between">'+
    '<h4 class="card-title">Edit Portfolio</h4>'+
  '</div>'+
  '<!-- /.card-header -->'+
  '<div class="card-body p-2">'+
  '<div class="table-responsive">';
  $.ajax({
    method: "GET",
    dataType: 'json',
    url: "get.php/jobseeker/get_portfolio",
    data: {"portfolio_id": portfolio_id,},
    success: function(response){
      if(response != 400){
         temp += '<form method="POST" id="formPortfolio" autocomplete="off">'+
         '<div class="row p-3">'+
         '<div class="col-md-12 col-sm-6">'+
         '<div class="input-group mb-3">'+
         '<div class="input-group-prepend">'+
           '<span class="input-group-text">Url link</span>'+
         '</div>'+
         '<input type="text" class="form-control" id="url" value="'+response.url_link+'">'+
         '</div>'+
         '<div class="input-group mb-3">'+
         '<div class="input-group-prepend">'+
           '<span class="input-group-text">Description</span>'+
         '</div>'+
         '<input type="text" class="form-control" id="description" value="'+response.description+'">'+
         '</div>'+
        '<div class="input-group mb-3">'+
        '<div class="input-group-prepend">'+
          '<label class="input-group-text" for="Type">Type</label>'+
         '</div>'+
           '<select class="custom-select" id="Type">'+
             '<option selected>Choose...</option>'+
             '<option value="Work">Work</option>'+
             '<option value="Website">Personal Website</option>'+
           '</select>'+
         '</div>'+
         '</div>'+
         '<!-- /.col-md-6 col-sm-4-->'+
        ' <!-- Force next columns to break to new line at md breakpoint and up -->'+
         '<div class="w-100 d-none d-md-block"></div>'+
         '<div class="col-md-6 col-sm-4 py-2 d-flex justify-content-between">'+
         '<button type="button" class="btn btn-danger" style="cursor: pointer;" onclick="portfolio();"><i class="fas fa-lg fa-arrow-left"></i> Cancel</button>'+
         '<button type="submit" name="submit" id="updatePortfolio" class="btn btn-success" style="cursor: pointer;">Update <i class="fas fa-lg fa-arrow-up"></i></button>'+
         '</div>'+
         '<!-- /.col-md-6 col-sm-4-->'+
         '</form>';
      }

  temp+='<!-- /.form-->'+
    '</div>'+
  '<!-- /.row p-2-->'+
  '</div>'+
  '<!-- /.mail-box-messages -->'+
'</div>'+
'<!-- /.card-body -->'+
'</div>';
  '</div></div></div>';
  $('.portfolio').empty().append(temp);

  $(document).ready(function(){
    $("#Type option[value='"+response.type+"']").attr('selected', 'selected');
    $('#updatePortfolio').click(function(e){
      e.preventDefault();
      let url = $('#url').val();
      let description = $('#description').val();
      let Type = $('#Type').val();
      if (url == ''){
        swal('Invalid !','URL field cannot be empty','error','Cool');
        return;
      }
      if (description == ''){
       swal('Invalid!','Description field cannot be empty','error','Cool');
       return;
      }
      if (description.length > 20){
        swal('Invalid!','Description Should be short and precise','error','Cool');
        return;
       }
      if (Type == 'Choose...'){
        swal('Invalid!','Type field must be selected','error','Cool');
        return;
       }
        $.ajax({
        method: "POST",
        dataType: 'json',
        url: "post.php/jobseeker/update_portfolio",
        data: {"portfolio_id": portfolio_id,"url_link" : url,"description": description,"type": Type},
        success: function(response){
          swal('Success!',response.message,'success','Cool');
          portfolio();
        },
        error: function(err){
          swalNotify(err.responseText,'error');
        }
      })
    });
  });
},
error: function(err){
  swalNotify(err.responseText,'error');
}
})

}
function deletePortfolio(portfolio_id){
  $.ajax({
    method: "POST",
    dataType: 'json',
    url: "post.php/jobseeker/delete_portfolio",
    data: {"portfolio_id" : portfolio_id},
    success: function(response){
      swal('Success!',response.message,'success','Cool');
      portfolio();
    },
    error: function(err){
      swalNotify(err.responseText,'error');
    }
  })
}
//ams-> Settings
function jsettings(){
// <!-- Content Wrapper. Contains page content -->
let temp='<div class="content-wrapper">'+
  '<!-- Content Header (Page header) -->'+

  ' <!-- Main content -->'+
  '<section class="content">'+
  
  '  <div class="container-fluid">'+
      ' <div class="row">';
      $.ajax({
      method: "GET",
      dataType: "json",
      url: "get.php/jobseeker/jobseeker_profile",
      data: {"login_id" : session_id},
      success: function(data){
      if(data !== 400 ){
        temp += ' <div class="col-md-4">'+
        ' <!-- Profile Image -->'+
        ' <div class="card card-primary card-outline mb-3" style="border-top: 3px solid #007bff;">'+
          ' <div class="card-body box-profile">'+
              '<div class="text-center">'+
                '<img class="img-fluid img-circle img-thumbnail" src="https://dokuwo-uploads.s3.amazonaws.com/'+((data[0].image==null || data[0].image=='')?'default.jpg':data[0].image)+'" style="width:100%;height:150px" alt="User profile picture">'+
              '</div>'+
              '<h4 class="profile-username text-center">'+data[0].fullName+'</h4>'+
              '<ul class="list-group list-group-unbordered mb-3">'+
                '<li class="list-group-item">'+
                  '<i class="fas fa-lg fa-envelope"></i><b> Email</b> <a class="float-right">'+data[0].email+'</a>'+
                '</li>'+
                '<li class="list-group-item">'+
                '<i class="fas fa-lg fa-phone"></i><b> Phone</b> <a class="float-right">'+data[0].phone+'</a>'+
              ' </li>'+
                '<li class="list-group-item">'+
                  '<i class="fas fa-lg fa-globe"></i><b> Country</b> <a class="float-right">'+data[0].country+'</a>'+
                '</li>'+
                '<li class="list-group-item">'+
                '<i class="fas fa-lg fa-building"></i><b> Address</b> <a class="float-right">'+data[0].address+'</a>'+
              '</li>'+
              '</ul>'+
              '<a href="'+((data[0].CV == null || data[0].CV == 'null' || data[0].CV == '')?'javascript:void();':'https://dokuwo-uploads.s3.amazonaws.com/'+data[0].CV)+'" target="_blank" class="btn btn-primary btn-block"><b>View CV</b></a>'+
            '</div>'+
            '<!-- /.card-body -->'+
          '</div>'+
        ' <!-- /.card -->'+
        ' <!-- About Me Box -->'+
          '<div class="card card-primary">'+
          ' <div class="card-header bg-primary">'+
              '<h3 class="card-title text-white">About Me</h3>'+
            '</div>'+
            '<!-- /.card-header -->'+
            '<div class="card-body">'+
            '<strong><i class="fas fa-info mr-1"></i> tag_line</strong>'+
            '<p class="text-muted">'+data[0].tag_line+'</p>'+
            '<hr>'+
            '<strong><i class="fas fa-book mr-1"></i> Education</strong>'+
            '<p class="text-muted">'+
            ''+data[0].education_level+''+
            '</p>'+
            '<hr>'+
              '<strong><i class="fas fa-pencil-alt mr-1"></i> Skills</strong>'+
              '<p class="text-muted">'+
                '<span class="tag tag-danger">'+data[0].skills+'</span>'+
              '</p>'+
              '<hr>'+
              '<strong><i class="far fa-file-alt mr-1"></i> Date of Birth</strong>'+
              '<p class="text-muted">'+data[0].dob+'</p>'+
            '</div>'+
            '<!-- /.card-body -->'+
          '</div>'+
          '<!-- /.card -->'+
        '</div>'+
        '<!-- /.col -->'+
        '<div class="col-md-8">'+
          '<div class="card" style="border-top: 3px solid #007bff;">'+
            '<div class="card-header p-2">'+
              '<ul class="nav nav-pills">'+
                '<li class="nav-item"><a class="nav-link active" href="#profile" data-toggle="tab">Profile</a></li>'+
                '<li class="nav-item"><a class="nav-link" href="#settings" data-toggle="tab">Settings</a></li>'+
                '</ul>'+
              '</div><!-- /.card-header -->'+
              '<div class="card-body">'+
              ' <div class="tab-content">'+
                '<!-- tab-pane-->'+
                  '<div class="active tab-pane" id="profile">'+
                    '<form class="form-horizontal" method="POST" id="editJobseeker" enctype="multipart/form-data" autocomplete="off">'+
                    '<div class="form-group row">'+
                      '<div class="col-sm-10">'+
                        '<input type="hidden" class="form-control" name="login_id" id="login_id" value="'+data[0].login_id+'">'+
                      '</div>'+
                    '</div>'+  
                    '<div class="form-group row">'+
                        '<label for="fName" class="col-sm-2 col-form-label">First Name</label>'+
                        '<div class="col-sm-10">'+
                          '<input type="text" class="form-control" name="fName" id="fName" value="'+data[0].fname+'">'+
                        '</div>'+
                      '</div>'+
                      '<div class="form-group row">'+
                      '<label for="lName" class="col-sm-2 col-form-label">Last Name</label>'+
                      '<div class="col-sm-10">'+
                        '<input type="text" class="form-control" name="lName" id="lName" value="'+data[0].lname+'">'+
                      '</div>'+
                    '</div>'+
                    '<div class="form-group row">'+
                    '<label for="tag_line" class="col-sm-2 col-form-label">tag_line</label>'+
                    '<div class="col-sm-10">'+
                      '<input type="text" class="form-control" name="tag_line" id="tag_line" value="'+data[0].tag_line+'">'+
                    '</div>'+
                    '</div>'+
                    '<div class="form-group row">'+
                    '<label for="skills" class="col-sm-2 col-form-label">skills</label>'+
                    '<div class="col-sm-10">'+
                      '<input type="text" class="form-control" name="skills" id="skills" value="'+data[0].skills+'">'+
                    '</div>'+
                    '</div>'+
                      '<div class="form-group row">'+
                        '<label for="inputEmail" class="col-sm-2 col-form-label">Email</label>'+
                        '<div class="col-sm-10">'+
                          '<input type="email" class="form-control" name="email" id="inputEmail" value="'+data[0].email+'">'+
                        '</div>'+
                      '</div>'+
                      '<div class="form-group row">'+
                        '<label for="phone" class="col-sm-2 col-form-label">Phone</label>'+
                        '<div class="col-sm-10">'+
                          '<input type="text" placeholder="5336171" pattern="[0-9]+" class="form-control" name="phone" id="phone" value="'+data[0].phone+'">'+
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
                          '<textarea class="form-control" name="address" id="address" >'+data[0].address+'</textarea>'+
                        '</div>'+
                    ' </div>'+
                    '<div class="form-group row">'+
                      '<label for="dateofbirth" class="col-sm-2 col-form-label">Date of Birth</label>'+
                      '<div class="col-sm-10">'+
                      '<input type="text" class="form-control form-control-user" name="dateofbirth" id="dateofbirth" placeholder="Date of Birth..." value="'+data[0].dob+'">'+
                    '</div>'+
                  '</div>'+
                  '<div class="form-group row" name="interest">'+
                  '<label class="col-sm-2 col-form-label" for="interest">Interest</label>'+
                  '<div class="col-sm-10">'+
                    '<select class="custom-select" id="interest" name="interest">'+
                    '<option value="Job">Only job</option>'+
                    '<option value="Freelance">Job and / or Freelance work</option>'+
                    '</select>'+
                    '</div>'+
                  '</div>'+
                  '<div class="form-group row" name="seeksJob">'+
                  '<label class="col-sm-2 col-form-label" for="seeksJob">Seeking Job</label>'+
                  '<div class="col-sm-10">'+
                    '<select class="custom-select" id="seeksJob" name="seeksJob">'+
                    '<option value="yes">YES</option>'+
                    '<option value="no">NO</option>'+
                    '</select>'+
                    '</div>'+
                  '</div>'+
                  '<div class="form-group row desc_klass" style="display:none;">'+
                     '<label for="description" class="col-sm-2 col-form-label">Description</label>'+
                     '<div class="col-sm-10">'+
                       '<textarea name="description" id="description" placeholder="give a short description of 250 characters or less" class="form-control" style="width:100%;height:70px;resize:none;" maxlength="250">'+data[0].description+'</textarea>'+
                     '</div>'+
                    '</div>'+
                    '<div class="form-group row" name="category">'+
                    '<label class="col-sm-2 col-form-label" for="category">Category</label>'+
                    '<div class="col-sm-10">'+
                      '<select class="custom-select" id="category" name="category">'+
                      '<option value="Finance">Finance</option>'+
                      '<option value="IT & Engineering">IT & Engineering</option>'+
                      '<option value="Education or Training">Education/Training</option>'+
                      '<option value="Art or Design">Art/Design</option>'+
                      '<option value="Sale or Markting">Sale/Markting</option>'+
                      '<option value="Healthcare">Healthcare</option>'+
                      '<option value="Science">Science</option>'+
                      '<option value="Events,Catering & Entertainment">Events,Catering & Entertainment</option>'+
                      '<option value="Others">Others</option>'+
                      '</select>'+
                      '</div>'+
                    '</div>'+
                    '<div class="form-group row">'+
                      '<label class="col-sm-2 col-form-label" for="edu_level">Education Level</label>'+
                      '<div class="col-sm-10">'+
                        '<select class="custom-select" id="edu_level" name="education_level">'+
                        '<option value="High school diploma or equivalent">High school diploma or equivalent</option>'+
                        '<option value="Associate degree or equivalent">Associate degree or equivalent</option>'+
                        '<option value="Bachelors degree or equivalent">Bachelor\'s degree or equivalent</option>'+
                        '<option value="Masters degree or equivalent">Master\'s degree or equivalent</option>'+
                        '<option value="Doctoral degree or equivalent">Doctoral degree or equivalent</option>'+
                        '</select>'+
                        '</div>'+
                      '</div>'+
                      '<div class="form-group row">'+
                        '<label for="password" class="col-sm-2 col-form-label">Password</label>'+
                      ' <div class="col-sm-10">'+
                          '<input type="password" class="form-control" name="password" id="password" placeholder="Enter new password">'+
                        '</div>'+
                      '</div>'+
                    ' <div class="form-group row">'+
                    ' <label for="Image" class="col-sm-2 col-form-label">Image</label>'+
                      '<div class="col-sm-10">'+
                        ' <input type="file" id="Image" name="Imgage" onchange="readURL(this);">'+
                      ' </div>'+
                  '</div>'+
                  ' <div class="form-group row">'+
                  ' <label for="CV" class="col-sm-2 col-form-label">CV</label>'+
                      '<div class="col-sm-10">'+
                      ' <input type="file" id="CV" name="CV">'+
                    ' </div>'+
                  '</div>'+
                      '<div class="form-group row">'+
                        '<div class="offset-sm-2 col-sm-10">'+
                          '<button type="submit" id="update-details" class="btn btn-success float-right">Update</button>'+
                        '</div>'+
                      '</div>'+
                    '</form>'+
                  '</div>'+
                  '<!-- /.tab-pane -->'+
                  '<div class="tab-pane" id="settings">'+
                  '<form class="form-horizontal" method="POST" id="selectPackage">'+
                    '<div class="form-group row">'+
                      '<label for="package" class="col-sm-2 col-form-label">Package</label>'+
                      '<div class="col-sm-10">'+
                      '<select class="custom-select" id="package" name="package">'+
                      '<option value="None">None</option>'+
                      '<option value="Month">Monthly @D100</option>'+
                      '<option value="Year">Annual @D1000</option>'+
                      '</select>'+
                      '</div>'+
                    '</div>'+
                    '<div class="form-group row">'+
                      '<div class="offset-sm-2 col-sm-10">'+
                        '<div class="">'+
                          '<label>'+
                            '<p> Select a Freelancer package and it will be activated within 24hrs. Below are the means of payment we currently support.</p>'+
                          '</label>'+
                        '</div>'+
                      '</div>'+
                    '</div>'+
                    '<div class="form-group row">'+
                    '<div class="offset-sm-2 col-sm-10">'+                      
                      '<div class="card">'+
                       '<img src="https://dokuwo-assets.s3.amazonaws.com/assets/img/payment.jpg" class="card-img-top" alt="...">'+
                      '</div>'+
                     '</div>'+
                    '</div>'+
                    '<div class="form-group row">'+
                    '<div class="offset-sm-2 col-sm-10 col-form-label d-flex justify-content-center flex-wrap">'+
                      '<div class="p-2 bd-highlight">'+
                        '<div class="card" style="width: 12rem;">'+
                          '<div class="card-body">'+
                            '<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consequat convallis magna.</p>'+
                          '</div>'+
                        '</div>'+
                      '</div>'+
                      '<div class="p-2 bd-highlight">'+
                        '<div class="card" style="width: 12rem;">'+
                          '<div class="card-body">'+
                            '<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consequat convallis magna.</p>'+
                          '</div>'+
                       '</div>'+
                      '</div>'+
                      '<div class="p-2 bd-highlight">'+
                        '<div class="card" style="width: 12rem;">'+
                          '<div class="card-body">'+
                            '<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consequat convallis magna.</p>'+
                          '</div>'+
                        '</div>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                    '<div class="form-group row">'+
                      '<div class="offset-sm-2 col-sm-10">'+
                        '<button  type="submit" id="activate-pack" class="btn btn-success">Activate</button>'+
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

    $(document).ready(function(){
    $("#country").countrySelect();
    $("#country").countrySelect("setCountry",""+data[0].country+"");
    $("#edu_level option[value='"+data[0].education_level+"']").attr('selected', 'selected');
    $("#category option[value='"+data[0].category+"']").attr('selected', 'selected');
    $("#interest option[value='"+data[0].interest+"']").attr('selected', 'selected');
    $("#seeksJob option[value='"+data[0].seeksJob+"']").attr('selected', 'selected');
    $("#package option[value='"+package+"']").attr('selected', 'selected');

    $('#skills').tokenfield({
      autocomplete: {
        source: [],
        delay: 100
      },
      showAutocompleteOnFocus: true
    });
    $(function() { 
      $( "#dateofbirth" ).datepicker({
        dateFormat: "yy-mm-dd",
        yearRange: "-100:+0",
        changeMonth: true,
        changeYear: true,
      }); 
    });   
     //default description display
     if($('#interest').val() == 'Freelance') $(".desc_klass").css("display", "");
      //on change
    $('#interest').on('change', function(){
        if($('#interest').val() == 'Freelance') $(".desc_klass").css("display", "");
        else $(".desc_klass").css("display", "none");
    })
    $('#editJobseeker').submit(function(e) {
    e.preventDefault();
    $('#update-details').prop('disabled', true);
    var fName = $('#fName').val();
    var lName = $('#lName').val();
    var email = $('#inputEmail').val();
    var password = $('#password').val();
    var errors = [];
  
    if (email.length < 1) {
      swal('Invalid Email!','Email field cannot be empty','error','Cool');
      $('#update-details').prop('disabled', false);
      errors.push('email_error');
      return;
    } else {
      if (!validEmail(email)) {
          swal('Invalid Email!','Please enter a valid email!','error','Cool');
          $('#update-details').prop('disabled', false);
          errors.push('email_error');
          return;
      }
    }
    if (fName.length < 1) {
      swal('Invalid Name!','First Name field cannot be empty!','error','Cool');
      $('#update-details').prop('disabled', false);
      errors.push('name_error');
      return;
    }
    if (lName.length < 1) {
      swal('Invalid Last Name!','Last Name field cannot be empty!','error','Cool');
      $('#update-details').prop('disabled', false);
      errors.push('name_error');
      return;
    }
    if(password !== '' && password.length < 8){
      swal('Invalid password!','password field must be at least 8 characters!','error','Cool');
      $('#update-details').prop('disabled', false);
      errors.push('password_error');
      return;
    }

    if(errors.length < 1){
      var formData = new FormData(this);
      formData.append("category", $("#category").val());
      formData.append("education_level", $("#edu_level").val());
        $.ajax({
          method:'POST',
          url: 'post.php/jobseeker/update_jobseeker',
          data: formData,
          contentType: false,
          processData: false,
          cache:false,
          success:function(response){
            $('#update-details').prop('disabled', false);
            if(response == 200){
              swal('Update Successful!','Profile successfully updated','success','cool');
              jsettings();
            }else if( response == "Invalid Image"){
                swal('Invalid Image type!','You can only upload png, jpeg, or jpg','error','Cool');
            }else if( response == "Invalid CV"){
              swal('Invalid CV type!','You can only upload jpeg, jpg, png, pdf, doc, docx, txt or zip','error','Cool');
          }
          },
          error: function(err){
            $('#update-details').prop('disabled', false);
            swalNotify(err.responseText,'error');
          } 
        });
      }else{
          $('#update-details').prop('disabled', false);
          return;
      }
    //
    })

    // subscribe to a package
    $('#selectPackage').submit(function(e) {
      e.preventDefault();
      $('#activate-pack').prop('disabled', true);
      let package = $('#package').val();
      if(package == 'None'){
        swal('Invalid package!','You can\'t select none!','error','Cool');
        $('#activate-pack').prop('disabled', false);
        return;
      }
      $.ajax({
        method:'POST',
        dataType:'json',
        url: 'post.php/jobseeker/request_to_activate_package',
        data: {'login_id':session_id,'package':package},
        success:function(response){
            $('#activate-pack').prop('disabled', false);
            swal('package!',response.message,'success','cool');
            jsettings();
        },
        error: function(err){
          $('#activate-pack').prop('disabled', false);
          swalNotify(err.responseText,'error');
        } 
      });
  
    });
    // ./subscribe to a package
    });
  }else{
  $('#content').empty().append('<div>error: This account doesn\'t exist. You should access here</div>');
  }

  },
  error: function(err){
    swalNotify(err.responseText,'error');
  }
});
  $('#content').empty().append(temp);
}