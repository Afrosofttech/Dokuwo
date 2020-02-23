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
      '<a class="nav-link ">'+
        '<i class="fas fa-fw fa-briefcase"></i>'+
        '<span>Jobs</span></a>'+
    '</li>'+
  
    '<li class="nav-item">'+
      '<a class="nav-link">'+
        '<i class="fas fa-fw fa-envelope"></i>'+
        '<span>Messages</span></a>'+
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
              '<a class="dropdown-item" href="#" onclick="jsettings();">'+
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
//@ams-> Settings
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
         console.log(data);
         console.log(data[0].email);
          temp += ' <div class="col-md-4">'+
          ' <!-- Profile Image -->'+
          ' <div class="card card-primary card-outline mb-3" style="border-top: 3px solid #007bff;">'+
            ' <div class="card-body box-profile">'+
               '<div class="text-center">'+
                 '<img class="img-fluid img-circle img-thumbnail" src="uploads/'+((data[0].image==null || data[0].image=='')?'default.jpg':data[0].image)+'" style="width:100%;height:150px" alt="User profile picture">'+
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
               '<a href="uploads/'+data[0].CV+'" target="_blank" class="btn btn-primary btn-block"><b>View CV</b></a>'+
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
             '<strong><i class="fas fa-map-marker-alt mr-1"></i> tag_line</strong>'+
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
                 '<li class="nav-item"><a class="nav-link active" href="#settings" data-toggle="tab">Settings</a></li>'+
                 '</ul>'+
               '</div><!-- /.card-header -->'+
               '<div class="card-body">'+
                ' <div class="tab-content">'+
                   '<div class="active tab-pane" id="settings">'+
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
                      '<div class="form-group row" name="category">'+
                      '<label class="col-sm-2 col-form-label" for="category">Category</label>'+
                      '<div class="col-sm-10">'+
                        '<select class="custom-select" id="category" name="category">'+
                        '<option value="Finance">Finance</option>'+
                        '<option value="Health">Health</option>'+
                        '<option value="Law">Law</option>'+
                        '<option value="Graphic Engineers">Graphic Engineers</option>'+
                        '<option value="Software Engineers">Software Engineers</option>'+
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
  
      $(document).ready(function(){

      $("#country").countrySelect();
      $("#country").countrySelect("setCountry",""+data[0].country+"");
      $("#edu_level option[value='"+data[0].education_level+"']").attr('selected', 'selected');
      $("#category option[value='"+data[0].category+"']").attr('selected', 'selected');

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

      $('#editJobseeker').submit(function(e) {
      e.preventDefault();
      var fName = $('#fName').val();
      var lName = $('#lName').val();
      var email = $('#inputEmail').val();
      var password = $('#password').val();
      var errors = [];
   
      if (email.length < 1) {
        swal('Invalid Email!','Email cannot be empty','error','Cool');
        errors.push('email_error');
        return;
      } else {
        if (!validEmail(email)) {
           swal('Invalid Email!','Please enter a valid email!','error','Cool');
           errors.push('email_error');
           return;
        }
      }
      if (fName.length < 1) {
        swal('Invalid Name!','First Name cannot be empty!','error','Cool');
        errors.push('name_error');
        return;
      }
      if (lName.length < 1) {
        swal('Invalid Last Name!','Last Name cannot be empty!','error','Cool');
        errors.push('name_error');
        return;
      }
      if(password !== '' && password.length < 8){
        swal('Invalid password!','password must at least be 8 characters!','error','Cool');
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
              console.log(response);
              if(response == 200){
                swal('Update Successful!','Profile successfully updated','success','cool');
                jsettings();
              }else if( response == "Invalid Image"){
                  swal('Invalid Image type!','You can only upload png, jpeg, or jpg','error','Cool');
              }else if( response == "Invalid CV"){
                swal('Invalid CV type!','You can only upload jpeg, jpg, png, pdf, doc or ppt','error','Cool');
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
