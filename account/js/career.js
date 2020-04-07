$(document).ready(function(){
  if(session_usertype =='company'){
    loadCompanyDashboard();
  } else if(session_usertype =='jobseeker'){
    loadJobseekerDashboard();
  }else if(session_usertype =='admin'){
    loadAdminDashboard();
  } else{
      //user is not logged in
  }
  })