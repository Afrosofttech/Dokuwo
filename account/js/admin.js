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
    
      '<li class="nav-item">'+
        '<a class="nav-link" href="">'+
          '<i class="fas fa-fw fa-envelope"></i>'+
          '<span>Messages</span></a>'+
      '</li>';
      if(session_adminType == "superadmin"){
        aSidebar +='<li class="nav-item" style="cursor: pointer;" onclick="getAccounts();">'+
          '<a class="nav-link" href="">'+
          '<i class="fas fa-fw fa-users"></i>'+
          '<span>Accounts</span></a>'+
      '</li>';
      }
      
      aSidebar +='<li class="nav-item">'+
      '<a class="nav-link" href="">'+
        '<i class="fas fa-fw fa-cog""></i>'+
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
            '</div>'+

              '</li>'+
            '</ul>'+
          '</nav>'; 
          $('#content-wrapper').prepend(topbar);
          // let temp = '';
          // $.ajax({
          //   method: "GET",
          //   dataType: 'json',
          //   url: "get.php/company/new_unread_messages",
          //   data: {"login_id" : session_id},
          //   success: function(data){
          //     if(data != 400){
          //     temp += '<h6 class="dropdown-header">'+
          //       'Message Center'+
          //     '</h6>';
          //     $.each(data, function(i,val){
          //       temp += '<a class="dropdown-item d-flex align-items-center" id="'+val.message_id+'" style="cursor: pointer;" onclick="redirectToMessageFromNotification(\''+val.message_id+'\',\''+val.creator_id+'\',\''+val.creator_name+'\',\''+val.subject+'\',\''+val.message_body+'\',\''+val.create_date+'\',\''+val.parent_message_id+'\');">'+
          //       '<div class="font-weight-bold">'+
          //         '<div class="text-truncate">'+val.subject+'</div>'+
          //         '<div class="small text-gray-500">'+val.creator_name+' · unread</div>'+
          //       '</div>'+
          //     '</a>';
          //     })
        
          //     temp += '<a class="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>'; 
          //     $('.NewMsgNotificationsCount').empty().html(data.length);
          //     $('.NewMsgNotifications').empty().append(temp);
          //     }
      
          //    },
          //    error: function(err){
          //     $.notify(err.responseText,'error');
          //  }
          // });

          // let profile = '';
          // $.ajax({
          //   method: "GET",
          //   dataType: "json",
          //   url: "get.php/company/profile",
          //   data: {"login_id" : session_id},
          //   success: function(data){
          //    if(data != 400){
          //     profile += '<a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">'+
          //     '<span class="mr-2 d-none d-lg-inline text-gray-600 small">'+session_fullname+'</span>'+
          //     '<img class="img-profile rounded-circle" src="uploads/default.jpg">'+
          //   '</a>'+
  
          //   '<div class="dropdown-menu dropdown-menu-right shadow animated--grow-in userProfile" aria-labelledby="userDropdown">'+
          //     '<a class="dropdown-item" href="#" onclick="settings();">'+
          //       '<i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>'+
          //       'Settings'+
          //     '</a>'+
          //     '<div class="dropdown-divider"></div>'+
          //     '<a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal" onclick="logout();">'+
          //       '<i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>'+
          //       'Logout'+
          //     '</a>'+
          //   '</div>';
          //     $('.userProfile').append(profile);
          //     // dashBoardContentheader();
          //    }
  
          //   },
          //   error: function(err){
          //        $.notify(err.responseText,'error');
          //   }
          //  });
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
       console.log("======Manage blogs========");
       console.log(err.responseText);
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
            '<input type="text" class="form-control" name="job" id="job" placeholder="Keyword: Blog title">'+
          '</div>'+
          '<div class="col-lg-5 col-md-5 col-xs-12">'+
            '<input type="text" class="form-control" id="location" name="location" placeholder="Category: blog category">'+
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
    limitPerPage = 5;
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

// $('#filter').click(function(e){
// e.preventDefault();
// if($('#job').val() ==='' && $('#location').val() ===''){
//   $.notify('There is nothing to search for','error');
// }else{
//   $.ajax({
//     method: "GET",
//     dataType: 'json',
//     url: "get.php/jobseeker/search_jobs",
//     data: {"job" : $('#job').val(), "location": $('#location').val()},
//     success: function(data){
//       if(data.length > 0){
//         paginateJobs(data);
//       }else{
//         $.notify('search result doesn\'t exist','error');
//       }
//     },
//     error: function(err){
//       $.notify(err.responseText,'error');
//     }

//     })
//    }
//  })
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
              console.log('error creating blog...');
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
          '<div class="col-lg-6 col-md-6 col-xs-12 post-section">'+
            '<div class="blog-post">'+
            '<!-- Post thumb -->'+
            '<div class="post-thumb">'+
              '<a href="#"><img class="img-fulid" src="uploads/'+((data[0].blog_image == "" || data[0].blog_image == null)?"default.jpg":data[0].blog_image)+'" alt="" style="width: 730px; height: 344px;"></a>'+
              '<div class="hover-wrap">'+
              '</div>'+
            '</div>'+
            '<!-- End Post post-thumb -->'+
          
            '<!-- Post Content -->'+
            '<div class="post-content">'+                     
              '<h3 class="post-title"><a href="#">'+ data[0].blog_title +'</a></h3>'+
              '<div class="meta">'+                    
                '<span class="meta-part"><a href="#"><i class="lni-user"></i> By '+ data[0].blog_publisher+'</a></span>'+
                '<span class="meta-part"><i class="lni-calendar"></i><a href="#">'+ data[0].date_posted +'</a></span>'+
                // '<span class="meta-part"><a href="#"><i class="lni-comments-alt"></i> 5Comments</a></span>'+                    
              '</div>'+
              '<p>'+ data[0].blog_content +'</p>'+
             
              '<!-- /.col-md-6 col-sm-4-->'+
              '<div class="col-md-6 col-sm-4 py-2 d-flex justify-content-between">'+
              '<button type="button" class="btn btn-danger" style="cursor: pointer;" onclick="getBlog();"><i class="fas fa-lg fa-arrow-left"></i> Back</button>';
              if(session_adminType == "superadmin"){

                temp +='<button type="submit" name="submit" id="deleteBlog(\''+data[0].blog_id+'\')" class="btn btn-success" style="cursor: pointer;">delete <i class="fas fa-lg fa-trash"></i></button>';
              }
              temp +='</div>'+               
              '</div>'+
            '<!-- Post Content -->'+
          '</div>'+
          '<!-- End Post --></div>'+
          // update blog
          '<!-- /.col -->'+
        '<div class="col-md-8">'+
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
                    
                      '<div class="form-group row">'+
                        '<label for="sblogContent" class="col-sm-2 col-form-label">Blog Content</label>'+
                        '<div class="col-sm-10">'+
                          '<textarea class="form-control" name="sblogContent" id="sblogContent" >'+data[0].blog_content+'</textarea>'+
                        '</div>'+
                    ' </div>'+
                  
                  ' <div class="form-group row">'+
                  ' <label for="sblogImage" class="col-sm-2 col-form-label">Featured Image</label>'+
                      '<div class="col-sm-10">'+
                      ' <input type="file" id="sblogImage" name="sblogImage" onchange="readURL(this);">'+
                    ' </div>'+
                  '</div>'+
                      '<div class="form-group row">'+
                        '<div class="offset-sm-2 col-sm-10">'+
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
              // formData.append("publisher", session_fullname);
              // formData.append("admin_id", session_user_id);
              // formData.append("blog_content", $('#summernote').summernote('code'));
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
                  console.log('error updating blog...');
                  $.notify(err.responseText,'error');
                }
              });
            }else{
              return;
            }
    
          })
    },
    error: function(err){
      console.log(err.responseText);
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
      console.log('error deleting blog...');
      $.notify(err.responseText,'error');
    }
  });
}


function getAccounts(){
  let temp = '';

  temp +='<div class="content-wrapper">'+
  '<!-- Content Header (Page header) -->'+

  ' <!-- Main content -->'+
  '<section class="content">'+
  
  '  <div class="container-fluid">'+
      ' <div class="row">'+
        '<div class="col-md-12">'+
          '<div class="card" style="border-top: 3px solid #007bff;">'+
            '<div class="card-header p-2">'+
              '<ul class="nav nav-pills">'+
                '<li class="nav-item"><a class="nav-link active" href="#recruiters" data-toggle="tab">Recruiter</a></li>'+
                '<li class="nav-item"><a class="nav-link" href="#jobseekers" data-toggle="tab">Jobseekers</a></li>'+
                '<li class="nav-item"><a class="nav-link" href="#admins" data-toggle="tab">Administrators</a></li>'+
                '</ul>'+
              '</div><!-- /.card-header -->'+
              '<div class="card-body">'+
              ' <div class="tab-content">'+
                '<!-- tab-pane-->'+
                  '<div class="active tab-pane" id="recruiters">';
                  $.ajax({
                    method: "GET",
                    dataType: "json",
                    url: "get.php/company/retrieve_recruiter_accounts",
                    success: function(data){
                    if(data !== 400 ){
                    console.log(data);
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
                                '<th>Status</th>'+
                                '<th></th>'+
                                '<th></th>'+
                              '</tr>'+
                            '</thead>'+
                            '<tbody>';
                                $.each(data, function(i,val){
                                  let status = (val.status == "0")?"Deactivated":"Activated";
                                  temp += '<tr>'+
                                  '<td>'+val.company_name+'</td>'+
                                  '<td>'+val.email+'</td>'+
                                  '<td>'+status+'</td>'+
                                  '<td>';
                                    if(status == "Deactivated"){
                                      temp +='<a class="btn btn-success btn-block btn-sm" href="#" style="cursor: pointer;" onclick="activate(\''+val.login_id+'\');">'+
                                      '<i class="fas fa-trash">'+
                                      '</i>'+
                                      'Activate'+
                                      '</a>';
                                    }
                                    else{
                                      temp +='<a class="btn btn-danger btn-block btn-sm" href="#" style="cursor: pointer;" onclick="deactivate(\''+val.login_id+'\');">'+
                                      '<i class="fas fa-trash">'+
                                      '</i>'+
                                      'Deactivate'+
                                      '</a>';
                                    }
                                    temp +='</td>'+
                                  '<td class="text-right"><a class="btn btn-danger btn-block btn-sm" href="#" style="cursor: pointer;" onclick="blockAccount(\''+val.login_id+'\');">'+
                                  '<i class="fas fa-trash">'+
                                  '</i>'+
                                  'Block'+
                                  '</a></td>'+
                                '</tr>';
                                });
                                }
                                temp += '</tbody>'+
                          '</table>'+
                        '</div>'+
                      '</div>'+
                    '</div>';
                  },
                  error: function(err){
                    console.log('error retrieving recruiter accounts...');
                    $.notify(err.responseText,'error');
                  }
                });
                    // end recruiters account table
                temp +='</div>'+
                  '<!-- /.tab-pane -->'+
                '<div class="tab-pane" id="jobseekers">'+
                  // jobseekers account pane
                  $.ajax({
                    method: "GET",
                    dataType: "json",
                    url: "get.php/company/retrieve_jobseeker_accounts",
                    success: function(data){
                    if(data !== 400 ){
                    console.log(data);
                    temp +='<!-- Page Heading -->'+
                    '<!-- DataTales Example -->'+
                    '<div class="card shadow mb-4">'+
                      '<div class="card-header py-3">'+
                        '<h6 class="m-0 font-weight-bold text-primary">Manage Jobseekers</h6>'+
                      '</div>'+
                      '<div class="card-body">'+
                        ' <div class="table-responsive">'+
                          '<table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">'+
                            '<thead>'+
                              '<tr>'+
                                '<th>Full Name</th>'+
                                '<th>Email</th>'+
                                '<th>Status</th>'+
                                '<th></th>'+
                                '<th></th>'+
                              '</tr>'+
                            '</thead>'+
                            '<tbody>';
                                $.each(data, function(i,val){
                                  let status = (val.status == "0")?"Deactivated":"Activated";
                                  temp += '<tr>'+
                                  '<td>'+val.fullName+'</td>'+
                                  '<td>'+val.email+'</td>'+
                                  '<td>'+status+'</td>'+
                                  '<td>';
                                    if(status == "Deactivated"){
                                      temp +='<a class="btn btn-success btn-block btn-sm" href="#" style="cursor: pointer;" onclick="activateAccount(\''+val.login_id+'\');">'+
                                      '<i class="fas fa-trash">'+
                                      '</i>'+
                                      'Activate'+
                                      '</a>';
                                    }
                                    else{
                                      temp +='<a class="btn btn-danger btn-block btn-sm" href="#" style="cursor: pointer;" onclick="deactivateAccount(\''+val.login_id+'\');">'+
                                      '<i class="fas fa-trash">'+
                                      '</i>'+
                                      'Deactivate'+
                                      '</a>';
                                    }
                                    temp +='</td>'+
                                  '<td class="text-right"><a class="btn btn-danger btn-block btn-sm" href="#" style="cursor: pointer;" onclick="blockAccount(\''+val.login_id+'\');">'+
                                  '<i class="fas fa-trash">'+
                                  '</i>'+
                                  'Block'+
                                  '</a></td>'+
                                '</tr>';
                                });
                                }
                                temp += '</tbody>'+
                          '</table>'+
                        '</div>'+
                      '</div>'+
                    '</div>';
                  },
                  error: function(err){
                    console.log('error retrieving jobseeker accounts...');
                    $.notify(err.responseText,'error');
                  }
                });
                  // end jobseekers account pane
                '</div>'+
                '<!-- /.tab-pane -->'+
                '<div class="tab-pane" id="admins">'+
                  // admins account pane
                  $.ajax({
                    method: "GET",
                    dataType: "json",
                    url: "get.php/company/retrieve_admin_accounts",
                    success: function(data){
                    if(data !== 400 ){
                    console.log(data);
                    temp +='<!-- Page Heading -->'+
                    '<!-- DataTales Example -->'+
                    '<div class="card shadow mb-4">'+
                    '<div class="d-sm-flex align-items-center justify-content-between mb-4">'+
                      '<div class="h3 mb-0"></div>'+
                      '<a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm" style="cursor: pointer;" onclick="CreateAdmin();"><i class="fas fa-users fa-sm text-white-50"></i>Add Admin</a>'+
                    '</div>'+
                      '<div class="card-header py-3">'+
                        '<h6 class="m-0 font-weight-bold text-primary">Manage Jobseekers</h6>'+
                      '</div>'+
                      '<div class="card-body">'+
                        ' <div class="table-responsive">'+
                          '<table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">'+
                            '<thead>'+
                              '<tr>'+
                                '<th>Admin Name</th>'+
                                '<th>Email</th>'+
                                '<th>Status</th>'+
                                '<th></th>'+
                                '<th></th>'+
                                '<th></th>'+
                              '</tr>'+
                            '</thead>'+
                            '<tbody>';
                                $.each(data, function(i,val){
                                  let status = (val.status == "0")?"Deactivated":"Activated";
                                  temp += '<tr>'+
                                  '<td>'+val.admin_name+'</td>'+
                                  '<td>'+val.email+'</td>'+
                                  '<td>'+status+'</td>'+
                                  '<td>';
                                    if(status == "Deactivated"){
                                      temp +='<a class="btn btn-success btn-block btn-sm" href="#" style="cursor: pointer;" onclick="activateAccount(\''+val.login_id+'\');">'+
                                      '<i class="fas fa-trash">'+
                                      '</i>'+
                                      'Activate'+
                                      '</a>';
                                    }
                                    else{
                                      temp +='<a class="btn btn-danger btn-block btn-sm" href="#" style="cursor: pointer;" onclick="deactivateAccount(\''+val.login_id+'\');">'+
                                      '<i class="fas fa-trash">'+
                                      '</i>'+
                                      'Deactivate'+
                                      '</a>';
                                    }
                                    temp +='</td>'+
                                  '<td class="text-right"><a class="btn btn-danger btn-block btn-sm" href="#" style="cursor: pointer;" onclick="blockAccount(\''+val.login_id+'\');">'+
                                  '<i class="fas fa-trash">'+
                                  '</i>'+
                                  'Block'+
                                  '</a></td>'+
                                  '<td class="text-right"><a class="btn btn-danger btn-block btn-sm" href="#" style="cursor: pointer;" onclick="delAccount(\''+val.login_id+'\');">'+
                                  '<i class="fas fa-trash">'+
                                  '</i>'+
                                  'Delete'+
                                  '</a></td>'+
                                '</tr>';
                                });
                                }
                                temp += '</tbody>'+
                          '</table>'+
                        '</div>'+
                      '</div>'+
                    '</div>';
                  },
                  error: function(err){
                    console.log('error retrieving admin accounts...');
                    $.notify(err.responseText,'error');
                  }
                });
                  // end admins account pane
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
  }

function activateAccount(login_id){
  $.ajax({
    method: 'POST',
    url: 'post.php/company/activateAccount',
    data:{'login_id':login_id},
    success: function(response){
      if(response == 200){
        $.notify('Account successfully Activated!','success');
        getAccounts();
      }else{
        swal('Could not activate blog!','Account could not be activated','error','Cool');
        return;
    }
    },
    error: function(err){
      console.log('error deleting blog...');
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
        getAccounts();
      }else{
        swal('Could not deactivate account!','Account could not be deactivated','error','Cool');
        return;
    }
    },
    error: function(err){
      console.log('error deleting blog...');
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
      '<input type="password" class="form-control" id="adminName" name="adminName" value="">'+
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
      '<div class="input-group mb-3">'+
      '<div class="input-group-prepend">'+
        '<span class="input-group-text">Role</span>'+
      '</div>'+
      '<select class="custom-select" id="role">'+
      '<option selected>Select role</option>'+
      '<option value="superadmin">Super Admin</option>'+
      '<option value="admin">Admin</option>'+
      '</select>'+
      '</div>'+
     ' <!-- Force next columns to break to new line at md breakpoint and up -->'+
      '<div class="w-100 d-none d-md-block"></div>'+
    
     '<!-- /.col-md-6 col-sm-4-->'+
      '<div class="col-md-6 col-sm-4 py-2 d-flex justify-content-between">'+
      '<button type="button" class="btn btn-danger" style="cursor: pointer;" onclick="getAccounts();"><i class="fas fa-lg fa-arrow-left"></i> Back</button>'+
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
          if (!validEmail(contactEmail)) {
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
          var formData = new FormData($('#createAdmin'));
          formData.append("role", $('#role').val());
          $.ajax({
            method: 'POST',
            url: 'post.php/authentication/create_admin_account',
            data:formData,
            success: function(response){
              if(response == 200){
                $.notify('Account successfully created!','success');
                getAccounts();
              }else {
                swal('Error creating account!','Account could not be created','error','Cool');
                return;
            }
            },
            error: function(err){
              console.log('error creating admin account...');
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
        getAccounts();
      }else{
        swal('Could not delete Account!','Account could not be deleted','error','Cool');
        return;
    }
    },
    error: function(err){
      console.log('error deleting Account...');
      $.notify(err.responseText,'error');
    }
  });
}

