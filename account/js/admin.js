$(document).ready(function(){
    //loadAdminDashboard();
})
function adminSideBar(){
  let aSidebar = '';
    aSidebar += '<ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">'+
    
      '<a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.php">'+
        '<div class="sidebar-brand-icon rotate-n-15">'+
        '<i><img src="assets/img/icon.png" class="rounded-circle" alt="Dokuwo" style="width: 50%; height: auto;"></i>'+
        '</div>'+
        '<div class="sidebar-brand-text mx-3">Dokuwo<sup></sup></div>'+
      '</a>'+
    
      '<hr class="sidebar-divider my-0">'+
    
      '<li class="nav-item active">'+
        '<a class="nav-link" href="index.php">'+
          '<i class="fas fa-fw fa-tachometer-alt"></i>'+
          '<span>Dashboard</span></a>'+
      '</li>'+
    
      '<li class="nav-item" onclick="getBlog();" style="cursor: pointer;">'+
        '<a class="nav-link">'+
          '<i class="fas fa-fw fa-blog"></i>'+
          '<span>Blog</span></a>'+
      '</li>'+
    
      '<li class="nav-item" >'+
        '<a class="nav-link" style="cursor: pointer;" onclick="AdminMessagesCenter();">'+
          '<i class="fas fa-fw fa-envelope"></i>'+
          '<span>Messages</span></a>'+
      '</li>';
      if(session_adminType == "superadmin"){
        aSidebar +='<li class="nav-item">'+
          '<a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseAccounts" aria-expanded="true" aria-controls="collapseAccounts">'+
          '<i class="fas fa-fw fa-users"></i>'+
          '<span>Accounts</span></a>'+
          '<div id="collapseAccounts" class="collapse" aria-labelledby="headingAccounts" data-parent="#accordionSidebar">'+
          '<div class="bg-white py-2 collapse-inner rounded">'+
            '<a class="collapse-item" onclick="getRecruiterAccounts();" style="cursor: pointer;">Recruiters</a>'+
            '<a class="collapse-item" onclick="getJobseekerAccounts();" style="cursor: pointer;">Jobseekers</a>'+
            '<a class="collapse-item" onclick="getAdminAccounts();" style="cursor: pointer;">Admins</a>'+
          '</div>'+
        '</div>'+
      '</li>';
      }
      
      aSidebar +='<li class="nav-item" onclick="adminSettings();" style="cursor: pointer;">'+
      '<a class="nav-link">'+
        '<i class="fas fa-fw fa-user-edit""></i>'+
        '<span>Settings</span></a>'+
    '</li>'+
      
      '<hr class="sidebar-divider d-none d-md-block">'+
    
      '<div class="text-center d-none d-md-inline">'+
        '<button class="rounded-circle border-0" id="sidebarToggle" onclick="sidebarToggle(this)"></button>'+
      '</div>'+

    '</ul>';
    
    return aSidebar;
    }

    function admintopBar(){
      let topbar = '<nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">'+
            '<ul class="navbar-nav ml-auto">'+
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

              '<a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">'+
              '<span class="mr-2 d-none d-lg-inline text-gray-600 small">'+session_fullname+'</span>'+
              '<img class="img-profile rounded-circle" src="'+"https://ui-avatars.com/api/?name="+session_fullname.replace(/ /g, '+')+'">'+
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
            '</div>'+

              '</li>'+
            '</ul>'+
          '</nav>'; 
          $('#content-wrapper').prepend(topbar);
          let temp = '';
          $.ajax({
            method: "GET",
            dataType: 'json',
            url: "get.php/company/new_unread_messages",
            data: {"login_id" : session_id},
            success: function(data){
              if(data != 400){
              temp += '<h6 class="dropdown-header">'+
                'Message Center'+
              '</h6>';
              $.each(data, function(i,val){
                temp += '<a class="dropdown-item d-flex align-items-center" id="'+val.message_id+'" style="cursor: pointer;" onclick="AdminMessagesCenter(\''+val.message_id+'\');">'+
                '<div class="font-weight-bold">'+
                  '<div class="text-truncate">'+val.subject+'</div>'+
                  '<div class="small text-gray-500">'+val.creator_name+' · unread</div>'+
                '</div>'+
              '</a>';
              })
        
              temp += '<a class="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>'; 
              $('.NewMsgNotificationsCount').empty().html(data.length);
              $('.NewMsgNotifications').empty().append(temp);
              }
      
             },
             error: function(err){
              $.notify(err.responseText,'error');
           }
          });
      }
function loadAdminDashboard(){
    let sidebar = adminSideBar();
    let topbar = admintopBar();
    // let dbcontent = dashBoardContent();
    let foot = footer();
   
   $('#wrapper').prepend(sidebar);
   $('#content-wrapper').prepend(topbar);
  //  $('#content').append(dbcontent);
   $('#content-wrapper').append(foot);
}


function getBlog(){
  let url = '';
  if(session_adminType == "superadmin"){url = "get.php/company/retrieve_all_blogs";}
  else {url = "get.php/company/manage_blogs";}
  $.ajax({
    method: "GET",
    url: url,
    data:{'admin_id':session_user_id},
    dataType: "json",
    success: function(data){
      if(data != 400){
        manageBlog(data);
      }
      },
      error: function(err){
        $.notify(err.responseText,'error');
      }
     });
}
function manageBlog(data){
  let temp= '<!-- Page Header Start -->'+
  '<div class="container">'+
  '<div class="d-sm-flex align-items-center justify-content-between mb-4">'+
       '<div class="h3 mb-0"></div>'+
       '<a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm" style="cursor: pointer;" onclick="CreateNewBlog();"><i class="fas fa-blog fa-sm text-white-50"></i> Create Blog</a>'+
     '</div>'+  
    '<div class="row text-center">'+      
      '<div class="col-lg-12">'+
        '<div class="inner-header">'+
          '<h3>Published Blogs</h3>'+
      ' </div>'+
      '</div>'+
    '</div>'+
  '</div>'+
'<!-- Page Header End --> '+

'<!-- Job Browse Section Start -->'+  
'<section class="job-browse section">'+
  '<div class="container">'+
    '<div class="row">'+
      '<div class="col-lg-12 col-md-12 col-xs-12">'+
        '<div class="wrap-search-filter row">'+
         '<form class="col-lg-12 col-md-12 col-xs-12 d-flex content-space-between" method="POST" id="editJobseeker" autocomplete="off">'+
          '<div class="col-lg-5 col-md-5 col-xs-12">'+
            '<input type="text" class="form-control" name="title" id="title" placeholder="Keyword: Blog title">'+
          '</div>'+
          '<div class="col-lg-5 col-md-5 col-xs-12">'+
            '<input type="text" class="form-control" id="category" name="category" placeholder="Category: blog category">'+
          '</div>'+
          '<div class="col-lg-2 col-md-2 col-xs-12">'+
            '<button type="submit" name="filter" id="filter" class="btn btn-common btn-success btn-block float-right">Filter</button>'+
          '</div>'+
         '</form>'+
        '</div>'+
      '</div>'+
      '<div class="col-lg-12 col-md-12 col-xs-12 jobsContentArea">';
       $.each(data,function(index,val){
        temp += '<a class="job-listings" style="cursor: pointer;" onclick="viewBlog(\''+val.blog_id+'\')">'+
        '<div class="row">'+
          '<div class="col-lg-4 col-md-4 col-xs-12">'+
            '<div class="job-company-logo">'+
              '<img class="rounded-circle img-thumbnail" src="'+((val.blog_image == null)?"https://ui-avatars.com/api/?name="+val.blog_title.replace(/ /g, '+'):'uploads/'+val.blog_image)+'" style="height: 5rem;width: 5rem;" alt="'+val.company_name+'">'+
            '</div>'+
            '<div class="job-details">'+
              '<h3>'+val.blog_title+'</h3>'+
              '<span class="company-neme">'+
                ''+val.blog_publisher+''+
              '</span>'+
            '</div>'+
          '</div>'+
          '<div class="col-lg-2 col-md-2 col-xs-12 text-center">'+
            '<span class="btn-open text-xs">'+
             ''+val.date_posted+''+
            '</span>'+
          '</div>'+
          '<div class="col-lg-2 col-md-2 col-xs-12 text-right">'+
           '<div class="location">'+
             '<i class="lni-map-marker"></i> '+val.tags+''+
           '</div>'+
          '</div>'+
          '<div class="col-lg-2 col-md-2 col-xs-12 text-right">'+
            '<span class="btn-full-time">'+val.category+'</span>'+
          '</div>'+
          '<div class="col-lg-2 col-md-2 col-xs-12 text-right">'+
            '<span class="btn-apply" style="cursor: pointer;">VIEW</span>'+
          '</div>'+
        '</div>'+
      '</a>';
       })

       temp += '<!-- Start Pagination -->'+
        '<ul class="j-pagination" id="pagin">' +             

        '</ul>'+
        '<!-- End Pagination -->'+

      '</div> '+
   ' </div>'+
  '</div>'+
'</section>'+
'<!-- Job Browse Section End -->';
 

  $('#content').empty().append(temp);
  $(document).ready(function(e){
    limitPerPage = 3;
    numberOfItems = data.length;
    let totalPages = Math.round(numberOfItems/limitPerPage);
    let temp ='<li class="active"><a class="btn-prev btn-link  disabled"><i class="lni-angle-left"></i> prev</a></li>';

   for(i=0; i<totalPages; i++){
     temp +='<li><a href="#" class="'+((i==0)?'current':'')+'"><i class="lni-angle-left"></i> '+(i+1)+'</a></li>';
   }
   temp +=' <li class="active"><a class="btn-next  btn-link  disabled">Next <i class="lni-angle-right"></i></a></li>';
  $('.j-pagination').append(temp);
    
  showPage = function(page) {
      $(".job-listings").hide();
      $(".job-listings").each(function(n) {
          if (n >= limitPerPage * (page - 1) && n < limitPerPage * page)
              $(this).show();
      });        
  }
      
  showPage(1);

  $("#pagin li a").click(function() {
      $("#pagin li a").removeClass("current");
      $(this).addClass("current");
      showPage(parseInt($(this).text())) 
  });

$('#filter').click(function(e){
e.preventDefault();
if($('#title').val() ==='' && $('#category').val() ===''){
  $.notify('There is nothing to search for','error');
}else{
  $.ajax({
    method: "GET",
    dataType: 'json',
    url: "get.php/jobseeker/search_blogs",
    data: {"title" : $('#title').val(), "category": $('#category').val()},
    success: function(data){
      if(data.length > 0){
        manageBlog(data);
      }else{
        $.notify('search result doesn\'t exist','error');
      }
    },
    error: function(err){
      $.notify(err.responseText,'error');
    }

    })
   }
 })
})
}

function CreateNewBlog(){
  let  temp = '<div class="container-fluid"><div class="row"><div class="col-md-12 jobsposted">'+
      '<div class="card card-primary card-outline shadow mb-4" style="border-top: 3px solid #007bff;">'+
      '<div class="card-header py-1 d-flex flex-row align-items-center justify-content-between">'+
        '<h4 class="card-title text-center">Create Blog</h4>'+
      '</div>'+
      '<!-- /.card-header -->'+
      '<div class="card-body p-2">'+
      '<div class="table-responsive">'+
      '<form method="POST" id="createBlog" autocomplete="off">'+
      '<div class="row p-3">'+
      '<div class="col-md-6 col-sm-4">'+
      '<div class="input-group mb-3">'+
      '<div class="input-group-prepend">'+
        '<span class="input-group-text">Title</span>'+
      '</div>'+
      '<input type="text" class="form-control" id="blogTitle" name="blogTitle" value="">'+
      '</div>'+
      '<div class="input-group mb-3">'+
      '<div class="input-group-prepend">'+
        '<span class="input-group-text">Category</span>'+
      '</div>'+
      '<input type="text" class="form-control" id="blogCategory" name="blogCategory" value="">'+
      '</div>'+
      '<div class="input-group mb-3">'+
      '<div class="input-group-prepend">'+
        '<span class="input-group-text">Tags</span>'+
      '</div>'+
      '<input type="text" class="form-control" id="tags" name="tags" value="">'+
      '</div>'+
      '<div class="input-group mb-3">'+
      '<div class="input-group-prepend">'+
        '<span class="input-group-text">Image</span>'+
      '</div>'+
      '<input type="file" class="form-control" id="blogImage" name="blogImage" onchange="readURL(this);" value="">'+
      '</div>'+
      '</div>'+
      '<!-- /.col-md-6 col-sm-4-->'+
      '<div class="col-md-6 col-sm-4">'+
      '<div class="form-group">'+
      '<label class="input-group-text" for="summernote">Blog Content</label>'+
      '<div id="summernote" class="message_body_info"></div>'+
     '</div>'+
      '</div>'+
      '<!-- /.col-md-6 col-sm-4-->'+
     ' <!-- Force next columns to break to new line at md breakpoint and up -->'+
      '<div class="w-100 d-none d-md-block"></div>'+
    
     '<!-- /.col-md-6 col-sm-4-->'+
      '<div class="col-md-6 col-sm-4 py-2 d-flex justify-content-between">'+
      '<button type="button" class="btn btn-danger" style="cursor: pointer;" onclick="getBlog();"><i class="fas fa-lg fa-arrow-left"></i> Back</button>'+
      '<button type="submit" name="submit" id="CreateNewBlog" class="btn btn-success" style="cursor: pointer;">Create <i class="fas fa-lg fa-arrow-right"></i></button>'+
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
          toolbar: [
            [ 'style', [ 'style' ] ],
            [ 'font', [ 'bold', 'italic', 'underline', 'strikethrough', 'clear'] ],
            [ 'fontname', [ 'fontname' ] ],
            [ 'fontsize', [ 'fontsize' ] ],
            [ 'color', [ 'color' ] ],
            [ 'para', [ 'ol', 'ul', 'height' ] ],
            [ 'insert', [ 'link'] ],
            [ 'view', [ 'undo', 'redo', 'fullscreen', 'codeview', 'help' ] ]
        ],
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
      $('#CreateNewBlog').click(function(e){
        e.preventDefault();
        let title = $('#blogTitle').val();
        let category = $('#blogCategory').val();
        var errors = [];
        
        if (title == ''){
          swal('Invalid Title!','Blog title cannot be empty','error','Cool');
          errors.push('title_error');
          return;
        }
        if (category == ''){
         swal('Invalid Category!','Blog Category cannot be empty','error','Cool');
         errors.push('category_error');
         return;
        }
        if(errors.length < 1){
          var form = document.getElementById('createBlog')
          var formData = new FormData(form);
          formData.append("publisher", session_fullname);
          formData.append("admin_id", session_user_id);
          formData.append("blog_content", $('#summernote').summernote('code'));
          $.ajax({
            method: 'POST',
            url: 'post.php/company/create_blog',
            data:formData,
            contentType: false,
            processData: false,
            cache:false,
            success: function(response){
              if(response == 200){
                $.notify('Blog successfully created!','success');
                getBlog();
              }else if( response == "Invalid Image"){
                swal('Invalid Image type!','You can only upload png, jpeg, or jpg','error','Cool');
                return;
            }
            },
            error: function(err){
              $.notify(err.responseText,'error');
            }
          });
        }else{
          return;
        }

      })

    })
}

function viewBlog(blog_id){
  let temp = '<div class="container-fluid manageBlog"></div>';

  $('#content').empty().append(temp);
  blog_details(blog_id);
}

function blog_details(blog_id){
  let temp = '';
  $.ajax({
    method: "POST",
    url: "get.php/company/get_blog_details",
    dataType: "json",
    data: {'blog_id':blog_id},
    success: function(data){
      if(data != 400){
        temp +=
          '<div class="row">'+
            '<!-- Start Blog Posts -->'+
          '<div class="col-lg-5 col-md-5 col-xs-12 post-section">'+
            '<div class="blog-post">'+
            '<!-- Post thumb -->'+
            '<div class="post-thumb">'+
              '<a href="#"><img class="img-fulid" src="uploads/'+((data[0].blog_image == "" || data[0].blog_image == null)?"default.jpg":data[0].blog_image)+'" alt="" style="width: 400px; height: 344px;"></a>'+
              '<div class="hover-wrap">'+
              '</div>'+
            '</div>'+
            '<!-- End Post post-thumb -->'+
        
          '</div>'+
          '<!-- End Post --></div>'+
          // update blog
          '<!-- /.col -->'+
        '<div class="col-lg-7 col-md-7 col-xs-12">'+
          '<div class="card" style="border-top: 3px solid #007bff;">'+
            '<div class="card-header p-2">'+
              // '<ul class="nav nav-pills">'+
              //   '<li class="nav-item"><a class="nav-link active" href="#profile" data-toggle="tab">Profile</a></li>'+
              //   // '<li class="nav-item"><a class="nav-link" href="#settings" data-toggle="tab">Settings</a></li>'+
              //   '</ul>'+
              '</div><!-- /.card-header -->'+
              '<div class="card-body">'+
              ' <div class="tab-content">'+
                '<!-- tab-pane-->'+
                  '<div id="updateBlog">'+
                    '<form class="form-horizontal" method="POST" id="editBlog" enctype="multipart/form-data" autocomplete="off">'+
                    '<div class="form-group row">'+
                      '<div class="col-sm-10">'+
                        '<input type="hidden" class="form-control" name="sblog_id" id="sblog_id" value="'+data[0].blog_id+'">'+
                      '</div>'+
                    '</div>'+
                    '<div class="form-group row">'+
                        '<label for="sblogTitle" class="col-sm-2 col-form-label">Title</label>'+
                        '<div class="col-sm-10">'+
                          '<input type="text" class="form-control" name="sblogTitle" id="sblogTitle" value="'+data[0].blog_title+'">'+
                        '</div>'+
                      '</div>'+
                      '<div class="form-group row">'+
                      '<label for="sblogCategory" class="col-sm-2 col-form-label">Category</label>'+
                      '<div class="col-sm-10">'+
                        '<input type="text" class="form-control" name="sblogCategory" id="sblogCategory" value="'+data[0].category+'">'+
                      '</div>'+
                    '</div>'+
                    '<div class="form-group row">'+
                    '<label for="sTags" class="col-sm-2 col-form-label">Tags</label>'+
                    '<div class="col-sm-10">'+
                      '<input type="text" class="form-control" name="sTags" id="sTags" value="'+data[0].tags+'">'+
                    '</div>'+
                    '</div>'+
                    
                    '<div class="form-group">'+
                    '<label class="input-group-text" for="summernote">Blog Content</label>'+
                    '<div id="summernote" class="message_body_info">'+ data[0].blog_content+'</div>'+
                   '</div>'+
                  
                  ' <div class="form-group row">'+
                  ' <label for="sblogImage" class="col-sm-2 col-form-label">Featured Image</label>'+
                      '<div class="col-sm-10">'+
                      ' <input type="file" id="sblogImage" name="sblogImage" onchange="readURL(this);">'+
                    ' </div>'+
                  '</div>'+
                      '<div class="form-group row">'+
                        '<div class="offset-sm-2 col-sm-10">'+
                        '<button type="button" class="btn btn-danger float-left" style="cursor: pointer;" onclick="getBlog();"><i class="fas fa-lg fa-arrow-left"></i> Back</button>'+
                          '<button type="submit" class="btn btn-success float-right">Update</button>'+
                        '</div>'+
                      '</div>'+
                    '</form>'+
                  '</div>'+
                  
                '</div>'+
              ' <!-- /.tab-content -->'+
              '</div><!-- /.card-body -->'+
            '</div>'+
            '<!-- /.nav-tabs-custom -->'+
          '</div>'+
          ' <!-- /.col -->'+
      '</div>'+
      '<!-- End Content -->';       
      }
      $('.manageBlog').append(temp);
      $('#summernote').summernote({
        height: 200,
        lineHeight: 1,
        toolbar: [
          [ 'style', [ 'style' ] ],
          [ 'font', [ 'bold', 'italic', 'underline', 'strikethrough', 'clear'] ],
          [ 'fontname', [ 'fontname' ] ],
          [ 'fontsize', [ 'fontsize' ] ],
          [ 'color', [ 'color' ] ],
          [ 'para', [ 'ol', 'ul', 'height' ] ],
          [ 'insert', [ 'link'] ],
          [ 'view', [ 'undo', 'redo', 'fullscreen', 'codeview', 'help' ] ]
      ],
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
           $('#editBlog').submit(function(e){
            e.preventDefault();
            let title = $('#sblogTitle').val();
            let category = $('#sblogCategory').val();
            var errors = [];
            
            if (title == ''){
              swal('Invalid Title!','Blog title cannot be empty','error','Cool');
              errors.push('title_error');
              return;
            }
            if (category == ''){
             swal('Invalid Category!','Blog Category cannot be empty','error','Cool');
             errors.push('category_error');
             return;
            }
            if(errors.length < 1){
              var formData = new FormData($('#editBlog'));
              formData.append("sblogContent", $('#summernote').summernote('code'));
              $.ajax({
                method: 'POST',
                url: 'post.php/company/update_blog',
                data:formData,
                contentType: false,
                processData: false,
                cache:false,
                success: function(response){
                  if(response == 200){
                    $.notify('Blog successfully updated!','success');
                    viewBlog(blog_id);
                  }else if( response == "Invalid Image"){
                    swal('Invalid Image type!','You can only upload png, jpeg, or jpg','error','Cool');
                    return;
                }
                },
                error: function(err){
                  $.notify(err.responseText,'error');
                }
              });
            }else{
              return;
            }
    
          })
    },
    error: function(err){
      $.notify(err.responseText,'error');
    }
  });
}

function deleteBlog(blog_id){
  $.ajax({
    method: 'POST',
    url: 'post.php/company/delete_blog',
    data:{'blog_id':blog_id},
    success: function(response){
      if(response == 200){
        $.notify('Blog successfully deleted!','success');
        getBlog();
      }else{
        swal('Could not delete blog!','Blog could not be deleted','error','Cool');
        return;
    }
    },
    error: function(err){
      $.notify(err.responseText,'error');
    }
  });
}

  
function getRecruiterAccounts(){
  let temp = "";
  temp +='<!-- tab-pane-->'+
  '<div class="active tab-pane" id="recruiters">';
  $.ajax({
    method: "GET",
    dataType: "json",
    url: "get.php/company/retrieve_recruiter_accounts",
    success: function(data){
    if(data !== 400 ){
    // recruiters account pane
    temp +='<!-- Page Heading -->'+
    '<!-- DataTales Example -->'+
    '<div class="card shadow mb-4">'+
      '<div class="card-header py-3">'+
        '<h6 class="m-0 font-weight-bold text-primary">Manage Recruiters</h6>'+
      '</div>'+
      '<div class="card-body">'+
        ' <div class="table-responsive">'+
          '<table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">'+
            '<thead>'+
              '<tr>'+
                '<th>Company Name</th>'+
                '<th>Email</th>'+
                '<th>Account</th>'+
                '<th>Package</th>'+
              '</tr>'+
            '</thead>'+
            '<tbody>';
                $.each(data.accounts, function(i,val){
                  
                  let status = (val.status == "0")?"Deactivated":"Activated";
                  temp += '<tr>'+
                        '<td>'+val.company_name+'</td>'+
                        '<td>'+val.email+'</td>';
                          temp +=(status == "Deactivated")?'<td><a class="btn btn-success btn-block btn-sm" href="#" style="cursor: pointer;" onclick="activate(\''+val.login_id+'\');">'+
                          '<i class="fas fa-user-check">'+
                          '</i>'+
                          ' Activate'+
                          '</a></td>':
                          '<td><a class="btn btn-danger btn-block btn-sm" href="#" style="cursor: pointer;" onclick="deactivate(\''+val.login_id+'\');">'+
                          '<i class="fas fa-user-lock">'+
                          '</i>'+
                          ' Deactivate'+
                          '</a></td>';
                          temp += (val.package == "Pending")?`<td><a class="btn btn-success btn-block btn-sm" href="#" style="cursor: pointer;" onclick="activatePackage(${val.login_id},'recruiter');">`+
                          '<i class="fas fa-check">'+
                          '</i>'+
                          ' Activate'+
                          '</a></td>':'<td>'+val.package+'</td>'+
                          '</tr>';
                });

                        temp+='</tbody>'+
                        '</table>'+
                      '</div>'+
                      '</div>'+
                      '</div>'+
                    // end recruiters account table
                      '</div>'+
                    '<!-- /.tab-pane -->';
                    $('#content').empty().append(temp);
                    $(document).ready(function() {
                      $('#dataTable').DataTable();
                      
                    });
                }
  },
  error: function(err){
    $.notify(err.responseText,'error');
  }
});
}


function getJobseekerAccounts(){
  let temp = "";
  temp +='<div class="tab-pane" id="jobseekers">';
  // jobseekers account pane
  $.ajax({
    method: "GET",
    dataType: "json",
    url: "get.php/company/retrieve_jobseeker_accounts",
    success: function(data){
    if(data !== 400 ){
    temp +='<!-- Page Heading -->'+
    '<!-- DataTales Example -->'+
    '<div class="card shadow mb-4">'+
      '<div class="card-header py-3">'+
        '<h6 class="m-0 font-weight-bold text-primary">Manage Jobseekers</h6>'+
      '</div>'+
      '<div class="card-body">'+
        ' <div class="table-responsive">'+
          '<table class="table table-striped" id="dataTable" width="100%" cellspacing="0">'+
            '<thead>'+
              '<tr>'+
                '<th>Full Name</th>'+
                '<th>Email</th>'+
                '<th>Package</th>'+
                '<th>Actions</th>'+
              '</tr>'+
            '</thead>'+
            '<tbody>';
                $.each(data.accounts, function(i,val){
                
                  temp += '<tr>'+
                  '<td>'+val.fullName+'</td>'+
                  '<td>'+val.email+'</td>';
                  temp += (val.package == "Pending")?`<td><a class="btn btn-success btn-sm" href="#" style="cursor: pointer;" onclick="activatePackage(${val.login_id},'jobseeker');">`+
                          '<i class="fas fa-check">'+
                          '</i>'+
                          ' Activate'+
                          '</a></td>':'<td>'+val.package+'</td>';
                  temp += (val.actions != "None")?(val.actions[0].totalWarnings < 3)?(val.actions[0].totalPending >= 1)?`<td><a class="btn btn-success btn-block btn-sm" href="#" style="cursor: pointer;" onclick='manageJobseekerActions(${JSON.stringify(val.actions)},${val.login_id});'>`+
                          '<i class="fas fa-info">'+
                          '</i>'+
                          ' View Actions'+
                          '</a></td>':'<td>Warned</td>'
                          :`<td><a class="btn btn-danger btn-block btn-sm" href="#" style="cursor: pointer;" onclick='warnOrBlockJobseeker(${val.login_id},block);'>`+
                          '<i class="fas fa-trash">'+
                          '</i>'+
                          ' Block'+
                          '</a></td>':'<td></td>'+
                          '</tr>';
                  
                  
                });
                 
                      temp+='</tbody>'+
                      '</table>'+
                      '</div>'+
                      '</div>'+
                    '</div>'+
                    // end jobseekers account pane
                  '</div>'+
                  '<!-- /.tab-pane -->';
                
                    $('#content').empty().append(temp);
                    $(document).ready(function() {
                      $('#dataTable').DataTable();
                      
                    });
                }
               
       
            },
            error: function(err){
              $.notify(err.responseText,'error');
            }
          });
}

function getAdminAccounts(){
  let temp = "";
  '<div class="tab-pane" id="admins">'+
  // admins account pane
  $.ajax({
    method: "GET",
    dataType: "json",
    url: "get.php/company/retrieve_admin_accounts",
    success: function(data){
    if(data !== 400 ){
    temp +='<!-- Page Heading -->'+
    '<!-- DataTales Example -->'+
    '<div class="card shadow mb-4">'+
    '<div class="d-sm-flex align-items-center justify-content-between mb-4">'+
      '<div class="h3 mb-0"></div>'+
    '</div>'+
      '<div class="card-header py-3 d-flex justify-content-around">'+
        '<h6 class="m-0 font-weight-bold text-primary mr-auto">Manage Administrators</h6>'+
        '<a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm ml-auto" style="cursor: pointer;" onclick="CreateAdmin();"><i class="fas fa-user-plus fa-sm text-white-50"></i> Add Admin</a>'+
      '</div>'+
      '<div class="card-body">'+
        ' <div class="table-responsive">'+
          '<table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">'+
            '<thead>'+
              '<tr>'+
                '<th>Admin Name</th>'+
                '<th>Email</th>'+
                '<th>Account</th>'+
                '<th></th>'+
              '</tr>'+
            '</thead>'+
            '<tbody>';
                $.each(data, function(i,val){
                  let status = (val.status == "0")?"Deactivated":"Activated";
                  temp += '<tr>'+
                  '<td>'+val.admin_name+'</td>'+
                  '<td>'+val.email+'</td>'+
                  '<td>';
                    if(status == "Deactivated"){
                      temp +='<a class="btn btn-success btn-block btn-sm" href="#" style="cursor: pointer;" onclick="activateAccount(\''+val.login_id+'\');">'+
                      '<i class="fas fa-user-check">'+
                      '</i>'+
                      ' Activate'+
                      '</a>';
                    }
                    else{
                      temp +='<a class="btn btn-danger btn-block btn-sm" href="#" style="cursor: pointer;" onclick="deactivateAccount(\''+val.login_id+'\');">'+
                      '<i class="fas fa-user-lock">'+
                      '</i>'+
                      ' Deactivate'+
                      '</a>';
                    }
                    temp +='<td class="text-right"><a class="btn btn-danger btn-block btn-sm" href="#" style="cursor: pointer;" onclick="delAccount(\''+val.login_id+'\');">'+
                  '<i class="fas fa-user-minus">'+
                  '</i>'+
                  ' Remove'+
                  '</a></td>'+
                '</tr>';
                });
                }
                  temp += '</tbody>'+
                '</table>'+
              '</div>'+
            '</div>'+
          '</div>'+
          // end admins account pane
        '</div>'+
        '<!-- /.tab-pane -->';
          $('#content').empty().append(temp);
          $(document).ready(function() {
            $('#dataTable').DataTable();
            
          });
        },
        error: function(err){
          $.notify(err.responseText,'error');
        }
      });
}

function manageJobseekerActions(actions,jobseeker_login_id){
  
  let temp = '';
  temp +='<!-- DataTales Example -->'+
  '<div class="card shadow mb-4">'+
    '<div class="card-header py-3">'+
      '<h6 class="m-0 font-weight-bold text-primary text-center">Action Center</h6>'+
    '</div>'+
    '<div class="card-body">'+
      ' <div class="table-responsive">'+
        '<table class="table table-striped" id="dataTable" width="100%" cellspacing="0">'+
          '<thead>'+
            '<tr>'+
              '<th>Request</th>'+
              '<th>Reason</th>'+
              '<th>Action</th>'+
              '<th></th>'+
              '<th></th>'+
            '</tr>'+
          '</thead>'+
          '<tbody>';
              $.each(actions, function(i,val){
                
                temp += '<tr>'+
                '<td>'+val.request+'</td>'+
                '<td>'+val.reason+'</td>';
                temp +=(val.action == "Pending")?`<td><a class="btn btn-warning btn-sm" href="#" style="cursor: pointer;" onclick='warnOrBlockJobseeker(${jobseeker_login_id},"warning");'>`+
                        '<i class="fas fa-exclamation-triangle">'+
                        '</i>'+
                        ' Warn'+
                        `</a></td><td><a class="btn btn-danger btn-sm" href="#" style="cursor: pointer;" onclick="deleteReport(${val.action_id});">`+
                        '<i class="fas fa-trash">'+
                        '</i>'+
                        ' Cancel'+
                        '</a></td>':
                        '<td>'+ val.action+
                        '</td><td></td>';
                        '</tr>';
                
              });
               
                    temp+='</tbody>'+
                    '</table>'+
                    '</div>'+
                    '</div>'+
                    '<div class="offset-sm-2 col-sm-10 d-flex justify-content-center mb-2">'+
                      '<button type="button" class="btn btn-danger" style="cursor: pointer;" onclick="getJobseekerAccounts();"><i class="fas fa-lg fa-arrow-left"></i> Back</button>'+
                    '</div>'+
                  '</div>';
                  $('#content').empty().append(temp);
}

function warnOrBlockJobseeker(jobseeker_login_id,request){
  $.ajax({
    method: 'POST',
    url: 'post.php/jobseeker/warn_jobseeker',
    data:{'login_id':jobseeker_login_id,'request':request},
    success: function(response){
      if(request == "warning"){
        if(response == 200){
          $.notify('Warning successfully sent!','success');
          getJobseekerAccounts();
        }else{
          swal('Could not send warning!','Warning could not be send to jobseeker!','error','Cool');
          return;
      }
    }
      else{
        if(response == 200){
          $.notify('This account has successfully been blocked!','success');
          getJobseekerAccounts();
        }else{
          swal('Could not block Jobseeker!','This account could not be blocked!','error','Cool');
          return;
      }
      }
      
    },
    error: function(err){
      $.notify(err.responseText,'error');
    }
  });
}


function activatePackage(login_id,caller){
      $.ajax({
        method: 'POST',
        url: 'post.php/company/activate_package',
        data:{'login_id':login_id},
        success: function(response){
          if(response == 200){
            if(caller == "recruiter"){
              $.notify('Package successfully Activated!','success');
              getRecruiterAccounts();
            }
            else{
              $.notify('Package successfully Activated!','success');
              getJobseekerAccounts();
            }
          }else{
            swal('Could not activate Package!','Package could not be activated','error','Cool');
            return;
        }
        },
        error: function(err){
          $.notify(err.responseText,'error');
        }
      });
}

function activateAccount(login_id){
        $.ajax({
          method: 'POST',
          url: 'post.php/company/activateAccount',
          data:{'login_id':login_id},
          success: function(response){
            if(response == 200){
              $.notify('Account successfully Activated!','success');
              getJobseekerAccounts();
            }else{
              swal('Could not activate blog!','Account could not be activated','error','Cool');
              return;
          }
          },
          error: function(err){
            $.notify(err.responseText,'error');
          }
        });
}

function deactivateAccount(login_id){
        $.ajax({
          method: 'POST',
          url: 'post.php/company/deactivateAccount',
          data:{'login_id':login_id},
          success: function(response){
            if(response == 200){
              $.notify('Account successfully Deactivated!','success');
              getJobseekerAccounts();
            }else{
              swal('Could not deactivate account!','Account could not be deactivated','error','Cool');
              return;
          }
          },
          error: function(err){
            $.notify(err.responseText,'error');
          }
        });
}

function deleteReport(action_id){
  $.ajax({
    method: 'POST',
    url: 'post.php/company/delete_report',
    data:{'action_id':action_id},
    success: function(response){
      if(response == 200){
        $.notify('Report successfully deleted!','success');
        getJobseekerAccounts();
      }else{
        swal('Could not delete report!','report could not be deleted','error','Cool');
        return;
    }
    },
    error: function(err){
      $.notify(err.responseText,'error');
    }
  });
}

function CreateAdmin(){
  let  temp = '<div class="container-fluid"><div class="row"><div class="col-md-12 jobsposted">'+
      '<div class="card card-primary card-outline shadow mb-4" style="border-top: 3px solid #007bff;">'+
      '<div class="card-header py-1 d-flex flex-row align-items-center justify-content-between">'+
        '<h4 class="card-title text-center">Add Admin</h4>'+
      '</div>'+
      '<!-- /.card-header -->'+
      '<div class="card-body p-2">'+
      '<div class="table-responsive">'+
      '<form method="POST" id="createAdmin" autocomplete="off">'+
      '<div class="row p-3">'+
      '<div class="col-md-6 col-sm-4">'+
      '<div class="input-group mb-3">'+
      '<div class="input-group-prepend">'+
        '<span class="input-group-text">Name</span>'+
      '</div>'+
      '<input type="text" class="form-control" id="adminName" name="adminName" value="">'+
      '</div>'+
      '<div class="input-group mb-3">'+
      '<div class="input-group-prepend">'+
        '<span class="input-group-text">Email</span>'+
      '</div>'+
      '<input type="text" class="form-control" id="adminEmail" name="email" value="">'+
      '</div>'+
      '<div class="input-group mb-3">'+
      '<div class="input-group-prepend">'+
        '<span class="input-group-text">Password</span>'+
      '</div>'+
      '<input type="password" class="form-control" id="adminPasswd" name="password" value="">'+
      '</div>'+
     ' <!-- Force next columns to break to new line at md breakpoint and up -->'+
      '<div class="w-100 d-none d-md-block"></div>'+
    
     '<!-- /.col-md-6 col-sm-4-->'+
      '<div class="col-md-6 col-sm-4 py-2 d-flex justify-content-between">'+
      '<button type="button" class="btn btn-danger" style="cursor: pointer;" onclick="getAdminAccounts();"><i class="fas fa-lg fa-arrow-left"></i> Back</button>'+
      '<button type="submit" name="submit" id="addAdmin" class="btn btn-success" style="cursor: pointer;">Create <i class="fas fa-lg fa-arrow-right"></i></button>'+
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
        //on submit
      $('#addAdmin').click(function(e){
        e.preventDefault();
        let email = $('#adminEmail').val();
        let passwd = $('#adminPasswd').val();
        var errors = [];
        
        if (email.length < 1) {
          swal('Invalid Email!','Email cannot be empty','error','Cool');
          return;
         }else {
          if (!validEmail(email)) {
             swal('Invalid Email!','Please enter a valid email!','error','Cool');
             return;
          }
         }

         if (passwd.length < 8) {
          swal('Short password!','Password must be at least 8 characters long','error','Cool');
          errors.push('password_error');
          return;
          }

        if(errors.length < 1){
          
          $.ajax({
            method: 'POST',
            url: 'post.php/authentication/create_admin_account',
            data:{'adminName':$('#adminName').val(),'email':email,'password':passwd},
            success: function(response){
              if(response == 200){
                $.notify('Account successfully created!','success');
                getAdminAccounts();
              }else {
                $.notify('Error creating account!','error');
                // swal('Error creating account!','Account could not be created','error','Cool');
                return;
            }
            },
            error: function(err){
              $.notify(err.responseText,'error');
            }
          });

        }else{
          return;
        }

      })

    })
}

function delAccount(login_id){
  $.ajax({
    method: 'POST',
    url: 'post.php/company/delete_account',
    data:{'login_id':login_id},
    success: function(response){
      if(response == 200){
        $.notify('Account successfully deleted!','success');
        getAdminAccounts();
      }else{
        swal('Could not delete Account!','Account could not be deleted','error','Cool');
        return;
    }
    },
    error: function(err){
      $.notify(err.responseText,'error');
    }
  });
}

function adminSettings(){
  let temp = '';
  $.ajax({
    method: 'GET',
    url: 'get.php/company/admin_profile',
    data:{'login_id':session_id},
    dataType:'json',
    success: function(response){
      if(response != 400){
        let  temp = '<div class="container-fluid"><div class="row"><div class="col-md-12 jobsposted">'+
        '<div class="card card-primary card-outline shadow mb-4" style="border-top: 3px solid #007bff;">'+
        '<div class="card-header py-1 d-flex flex-row align-items-center justify-content-between">'+
          '<h4 class="card-title text-center">Settings</h4>'+
        '</div>'+
        '<!-- /.card-header -->'+
        '<div class="card-body p-2">'+
        '<div class="table-responsive">'+
        '<form method="POST" id="updateAdmin" autocomplete="off">'+
        '<div class="row p-3">'+
        '<div class="col-md-6 col-sm-4">'+
        '<div class="input-group mb-3">'+
        '<div class="input-group-prepend">'+
          '<span class="input-group-text">Full Name</span>'+
        '</div>'+
        `<input type="text" class="form-control" id="adminName" name="adminName" value='${response.admin_name}'>`+
        '</div>'+
        '<div class="input-group mb-3">'+
        '<div class="input-group-prepend">'+
          '<span class="input-group-text">Email</span>'+
        '</div>'+
        `<input type="text" class="form-control" id="adminEmail" name="adminEmail" value='${response.email}'>`+
        '</div>'+
        '<div class="input-group mb-3">'+
        '<div class="input-group-prepend">'+
          '<span class="input-group-text">Password</span>'+
        '</div>'+
        '<input type="password" class="form-control" id="adminPasswd" name="adminPasswd" value="">'+
        '</div>'+
       
        '</div>'+
        
       ' <!-- Force next columns to break to new line at md breakpoint and up -->'+
        '<div class="w-100 d-none d-md-block"></div>'+
      
       '<!-- /.col-md-6 col-sm-4-->'+
        '<div class="col-md-6 col-sm-4 py-2 d-flex justify-content-start">'+
        '<button type="submit" name="submit" class="btn btn-success" style="cursor: pointer;">Update <i class="fas fa-lg fa-arrow-right"></i></button>'+
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

        // document loaded
        $(document).ready(function(){
          //on submit
        $('#updateAdmin').submit(function(e){
          e.preventDefault();
          let name = $('#adminName').val();
          let email = $('#adminEmail').val();
          let passwd = $('#adminPasswd').val();
          var errors = [];
            $.ajax({
              method: 'POST',
              url: 'post.php/company/update_admin_info',
              data:{'name':name,'email':email,'password':passwd,'login_id':session_id},
              success: function(response){
                if(response == 200){
                  $.notify('Account successfully updated!','success');
                  adminSettings();
                }else{
                  swal('Account update unsuccessfull!','Your account could not be updated','error','Cool');
                  return;
              }
              },
              error: function(err){
                $.notify(err.responseText,'error');
              }
            });
    
  
        })
  
      })
        // document load done
      }
    },
    error: function(err){
      $.notify(err.responseText,'error');
    }
  });
}
/** 
 * @param message_id -> {am passing message_id here just to know if this is a call from the topbar i.e
 * Knowing if the user tried to view a message from the notification bar}
 */
function AdminMessagesCenter(message_id){
  let temp = '<div class="container-fluid"><div class="row"><div class="col-md-3 sidebarMessage"></div><div class="col-md-9 contentMessage"></div></div></div>';
  $('#content').empty().append(temp);
  
    adminSidebarMessage();
    adminContentMessage(message_id);
  
  }
  function adminSidebarMessage(){
  $.ajax({
    method: "GET",
    dataType: 'json',
    url: "get.php/admin/no_of_new_messages",
    data: {"login_id" : session_id},
    success: data => {
  
      let sbMessage =  '<a style="cursor: pointer;" class="btn btn-primary btn-block mb-3 text-white" onclick="selectAUserToMsgOrForward(\'null\',\'compose\');">Compose</a>'+
  
      '<div class="card-body p-0 text-dark">'+
        '<ul class="nav nav-pills flex-column text-dark">'+
          '<li class="nav-item active text-dark">'+
            '<a class="nav-link" style="cursor: pointer;" onclick="adminContentMessage();">'+
              '<i class="fas fa-inbox text-dark"></i> Unread'+
              '<span class="badge bg-info float-right">'+data+'</span>'+
            '</a>'+
          '</li>'+
          '<li class="nav-item">'+
            '<a style="cursor: pointer;" class="nav-link" onclick="adminSentMessages();">'+
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
        //contentMessage();
    },
    error: err => {
    $.notify(err.responseText,'error');
    }
  });
  
  }
  /**
   * @param message_id -> {check messagesCenter to know why i passed message_id}
   */
  function adminContentMessage(message_id){
  let conMessage ='';
  $.ajax({
    method: "GET",
    dataType: 'json',
    url: "get.php/admin/all_inbox_messages",
    data: {"login_id" : session_id},
    success: data => {
  
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
              $.each(data, ( i, val ) => {
                let checkId =  val.message_id+"checkbox";
                //ams-> am filtering the message body to get rid of all tags
                var filteredMsgBody = $("<div>").html(val.message_body).text();
                conMessage+= '<tr id="'+val.message_id+'" class="test" style="cursor: pointer;" >'+
                            '<td>'+
                              '<div class="icheck-primary">'+
                                '<input type="checkbox" value="" id="'+checkId+'">'+
                                '<label for="check1"></label>'+
                              '</div>'+
                            '</td>'+
                            '<td class="mailbox-name">'+val.creator_name+'</td>'+
                            '<td class="mailbox-subject"><b>'+val.subject+'</b> -'+filteredMsgBody.substring(0, 50)+''+
                            '</td>'+
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
          $.each(data, ( i, val ) => {
            if(val.message_id === id){
            viewMessageByAdmin(val.message_id);
            }
          });
          //return false;
        });
  
        });
  
        greyOutReadMessagesByAdmin('myTable',message_id);
      },
      error: err => {
        $.notify(err.responseText,'error');
      }
      });
}
/**
 * @param param 
 * @param message_id -> {check messagesCenter to know why i passed message_id}
 */
function greyOutReadMessagesByAdmin(param,message_id){
    $.ajax({
      method: "GET",
      dataType: 'json',
      url: "get.php/admin/read_messages",
      data: {"login_id" : session_id},
      success: data => {
        if(data != 0){
          $.each(data, (i,val) => {
            var table = $('#'+param).DataTable();
          table.$('tr#'+val.message_id).css({'background-color': 'gainsboro'});
          });
        if(message_id !== undefined) viewMessageByAdmin(message_id);
        }
      },
      error: err => {
        $.notify(err.responseText,'error');
      }
    });
}
/**
 * @param msg_id 
 * @param user_name -> {optional and only set when viewing sent messages}
 * @param user_id -> {optional and only set when viewing sent messages}
 */
function viewMessageByAdmin(msg_id,user_name,user_id){
  $.ajax({
   method: "GET",
   dataType: 'json',
   url: "get.php/admin/get_message",
   data: {"msg_id" : msg_id},
   success: data => {
     let temp = '<div class="card card-primary shadow mb-4" style="border-top: 3px solid #007bff;">'+
       '<div class="card-header  py-1 d-flex flex-row align-items-center justify-content-between">'+
         '<h3 class="card-title">Read Message</h3>'+
 
         '<div class="card-tools">';
         (user_id === undefined)?temp += '<button class="btn btn-primary btn-icon-split" onclick="adminContentMessage();">':temp +='<button class="btn btn-primary btn-icon-split" onclick="adminSentMessages();">';

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
             '<button type="button" class="btn btn-default btn-sm" data-toggle="tooltip" data-container="body" title="Delete" onclick="aDeleteMessage(\''+msg_id+'\',\''+user_id+'\');">'+
             '<i class="far fa-trash-alt"></i></button>'+
 
             '<button type="button" class="btn btn-default btn-sm" data-toggle="tooltip" data-container="body" title="Reply" onclick="aReplyMsg(\''+msg_id+'\',\''+data.creator_id+'\',\''+data.creator_name+'\',\''+data.subject+'\',\''+user_id+'\');">'+
               '<i class="fas fa-reply"></i></button>'+
             '<button type="button" class="btn btn-default btn-sm" data-toggle="tooltip" data-container="body" title="Forward" onclick="selectAUserToMsgOrForward(\''+msg_id+'\',\'forward\');">'+
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
       '<!-- /.card-footer -->'+
       '<div class="card-footer">'+
         '<div class="float-right">'+
           '<button type="button" class="btn btn-default" onclick="aReplyMsg(\''+msg_id+'\',\''+data.creator_id+'\',\''+data.creator_name+'\',\''+data.subject+'\',\''+user_id+'\');"><i class="fas fa-reply"></i> Reply</button>'+
           '<button type="button" class="btn btn-default" onclick="selectAUserToMsgOrForward(\''+msg_id+'\',\'forward\')"><i class="fas fa-share"></i> Forward</button>'+
         '</div>'+
       '<button type="button" class="btn btn-default" onclick="aDeleteMessage(\''+data.message_id+'\',\''+user_id+'\');"><i class="far fa-trash-alt"></i> Delete</button>'+
       '<button type="button" class="btn btn-default printbtn"><i class="fas fa-print"></i> Print</button>'+
       '</div>'+
       '<!-- /.card-footer -->'+
     '</div>'+
     '<!-- /.card -->'+
   '</div>';
 
 $('.contentMessage').empty().append(temp);
 
 $(document).ready(function (){
 if(user_id){
   $('#'+msg_id).html('To: '+user_name+'');
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
 
 if(user_id === undefined){
   $.ajax({
     method: "POST",
     dataType: 'json',
     url: "post.php/admin/message_is_read",
     data: {"message_id" : msg_id},
     success: data => {
       if(data == 200){
        adminSidebarMessage();
         //$('.NewMsgNotificationsCount').empty().html(5);
          adminNewMsgNotification();
       }
     },
     error: err => {
     //
     }
    })
   }
  })
 
   },
   error: err => {
     $.notify(err.responseText,'error');
    }
   });
 }
 /**
  *@function adminNewMsgNotification -> {updates the topBar message center notification}
  */
 function adminNewMsgNotification(){  
  let temp = '';
  $.ajax({
    method: "GET",
    dataType: 'json',
    url: "get.php/admin/new_unread_messages",
    data: {"login_id" : session_id},
    success: data => {
      if(data != 400){
      temp += '<h6 class="dropdown-header">'+
        'Message Center'+
      '</h6>';
      $.each(data, (i,val) => {
        temp += '<a class="dropdown-item d-flex align-items-center" id="'+val.message_id+'" style="cursor: pointer;" onclick="AdminMessagesCenter(\''+val.message_id+'\');">'+
        '<div class="font-weight-bold">'+
          '<div class="text-truncate">'+val.subject+'</div>'+
          '<div class="small text-gray-500">'+val.creator_name+' · unread</div>'+
        '</div>'+
      '</a>';
      })

      temp += '<a class="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>'; 
      $('.NewMsgNotificationsCount').empty().html(data.length);
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
    error: err => {
      $.notify(err.responseText,'error');
    }
  });
}
/**
 * @function adminSentMessages -> {}
 */
function adminSentMessages(){
  let temp = '';
  $.ajax({
    method: "GET",
    dataType: 'json',
    url: "get.php/admin/all_sent_messages",
    data: {"login_id" : session_id},
    success: data => {
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

              $.each(data, ( i, val ) => {
                let checkId = val.message_id+"checkbox";
                // console.log(val.message_body);
                //ams-> am filtering the message body to get rid of all <p> tags
                var filteredMsgBody = $("<div>").html(val.message_body).text();
        temp += '<tr id="'+val.message_id+'" style="cursor: pointer;" onclick="viewMessageByAdmin(\''+val.message_id+'\',\''+val.recipient_name+'\',\''+val.recipient_id+'\');">'+
                      '<td>'+
                        '<div class="icheck-primary">'+
                          '<input type="checkbox" value="" id="'+checkId+'">'+
                          '<label for="check1"></label>'+
                        '</div>'+
                      '</td>'+
                      // '<td class="mailbox-star"><a href="#"><i class="fas fa-star text-warning"></i></a></td>'+
                      '<td class="mailbox-name">'+val.recipient_name+'</td>'+
                      '<td class="mailbox-subject" id="jrcheck"><b>'+val.subject+'</b> -'+filteredMsgBody.substring(0, 35).concat('...')+''+
                      '</td>'+
                      // '<td class="mailbox-attachment"><i class="fas fa-paperclip"></i></td>'+
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
      error: err => {
        $.notify(err.responseText,'error');
      }
      });
}
/**
 * 
 * @param msg_id 
 * @param jobseeker_id 
 */
function aDeleteMessage(msg_id,jobseeker_id){
  $.ajax({
    method: "POST",
    dataType: 'json',
    url: (jobseeker_id === 'undefined')? "post.php/admin/delete_message":"post.php/admin/delete_sent_message",
    data: {"message_id" : msg_id},
    success: data => {
      if(data == 200){
        $.notify('message successfully deleted','success');
        (jobseeker_id === 'undefined')?adminContentMessage():adminSentMessages();
      }else{
        $.notify('message has not been deleted','error');
      }
    },
    error: err => {
      $.notify(err.responseText,'error');
    }
  });
}
/**
 * 
 * @param msg_id 
 * @param recipient_id 
 * @param recipient_name 
 * @param msg_subject 
 * @param user_id -> {user_id is basically not necessary here. But since we are using the same function for viewing messages,
 *                       we are using it to differentiate btw sent and received messages as we wont support reply on sent messages}
 */
function aReplyMsg(msg_id,recipient_id,recipient_name,msg_subject,user_id){
  if(user_id !== 'undefined'){
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
      '<button type="reset" class="btn btn-default" onclick="adminContentMessage();"><i class="fas fa-times"></i> Discard</button>'+
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
    dataType: 'json',
    url: "post.php/admin/reply_user",
    data:{"creator_id": session_id,"creator_name": session_fullname,"recipient_id": recipient_id,"recipient_name": recipient_name,"parent_msg_id": msg_id,"subject": $('#replyToSubject').val(),"msg_body": $('.message_body_info').summernote('code')},
    success: data => {
        $.notify(data.message,'success');
        adminContentMessage();
    },
    error: err => {
      $.notify(err.responseText,'error');
    }
  });
}
  });
});
}
}
/**
 * 
 * @param login_id 
 * @param name 
 */
function acomposeNewMessage(login_id,name){
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
      '<input class="form-control" type="text" name="recipient" id="thefullname" value="'+name+'" readonly>'+
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
      '<button type="reset" class="btn btn-default" onclick="selectAUserToMsgOrForward(\'null\',\'compose\')"><i class="fas fa-times"></i> Discard</button>'+
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
          dataType: 'json',
          url: "post.php/admin/send_msg_to_user",
          data: {"creator_id" : session_id, "creator_name": session_fullname, "recipient_id" : login_id, "recipient_name" : $('#thefullname').val(),"parent_msg_id": null, "Subject" : $('#theSubject').val(), "messageBody" : $('.message_info').summernote('code')},
          success: function(data){
              $.notify(data.message,'success'); 
              adminContentMessage();
          },
          error: function(err){
            //
          }
        });
  
        }
  
      });
  });  
}
/**
 * @function selectAUserToMsgORForward -> {handles retrieving users for both composing a new message and sharing a message}
 * @param msg_id
 * @param type -> {either compose|forward} 
 */
function selectAUserToMsgOrForward(msg_id,type){
  let conMessage ='';
  $.ajax({
    method: "GET",
    dataType: 'json',
    url: "get.php/admin/retreive_all_users",
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
              '<th>FullName</th>'+
              '<th>Country</th>'+
              '<th>Address</th>'+
            '</thead>'+
              '<tbody>';
              if(data === 0){
  
              }else{
  
              $.each(data, ( i, val ) => {
                conMessage+= '<tr id="test101" style="cursor: pointer;" onclick="'+((type == 'compose')?"acomposeNewMessage(\'"+val.login_id+"\',\'"+val.name+"\')":"aforwardMsgTo(\'"+val.login_id+"\',\'"+val.name+"\',\'"+msg_id+"\')")+'">'+
                            '<td>'+
                                '<input type="hidden" value="" id="'+val.login_id+'">'+
                            '</td>'+
                            '<td class="img-link"><img class=" rounded-circle" src="'+((val.image == null)?"https://ui-avatars.com/api/?name="+val.name.replace(/ /g, '+'):'uploads/'+val.image)+'" style="height: auto;width: 5rem;" alt="'+val.name+'"/>'+
                            '<div class="status-indicator bg-success"></div>'+
                            '</td>'+
                            '<td class="full-name"><b>'+val.name+'</b></td>'+
                            '<td class="country-name">'+val.country+'</td>'+
                            '<td class="Skills">'+val.address+'</td>'+
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
      error: err => {
        $.notify(err.responseText,'error');
      }
      });
  }
  function aforwardMsgTo(login_id,name,msg_id){
      $.ajax({
        method: "POST",
        dataType: 'json',
        url: "post.php/company/forward_msg_to_user",
        data: {"creator_id" : session_id, "fullname": session_fullname, "recipient_id" : login_id, "recipient_name" : name,"message_id": msg_id},
        success: function(data){
            $.notify(data.message,'success'); 
            adminContentMessage();
        },
        error: function(err){
          $.notify(err.responseText,'error');
        }
      });
  }