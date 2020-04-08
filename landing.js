// function MainNavbar(){
//   return '<!-- Navbar Start -->'+
//   '<nav class="navbar navbar-expand-lg fixed-top scrolling-navbar">'+
//     '<div class="container">'+
//       '<div class="theme-header clearfix">'+
//        ' <!-- Brand and toggle get grouped for better mobile display -->'+
//         '<div class="navbar-header">'+
//           '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar" aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">'+
//             '<span class="navbar-toggler-icon"></span>'+
//             '<span class="lni-menu"></span>'+
//             '<span class="lni-menu"></span>'+
//             '<span class="lni-menu"></span>'+
//           '</button>'+
//           '<a href="index.php" class="navbar-brand">Career</a>'+
//         '</div>'+
//         '<div class="collapse navbar-collapse" id="main-navbar">'+
//           '<ul class="navbar-nav mr-auto w-100 justify-content-end">'+
//             '<li class="nav-item active">'+
//               '<a class="nav-link" href="index.php" aria-expanded="false" aria-haspopup="true">'+
//                ' Home'+
//               '</a>'+
//             '</li>'+
//             '<li class="nav-item">'+
//               '<a class="nav-link" style="cursor: pointer;" onclick="displayJobs();" aria-expanded="false" aria-haspopup="true">'+
//                ' Jobs'+
//               '</a>'+
//             '</li>'+
//             '<li class="nav-item">'+
//               '<a class="nav-link" style="cursor: pointer;" onclick="displayEmployers();" aria-haspopup="true" aria-expanded="false">'+
//                 'Employers'+
//               '</a>'+
//             '</li>'+
//             '<li class="nav-item">'+
//               '<a class="nav-link" style="cursor: pointer;" onclick="displayJobseekers();" aria-haspopup="true" aria-expanded="false">'+
//                 'Jobseekers'+
//               '</a>'+
//             '</li>'+
//             '<li class="nav-item">'+
//               '<a class="nav-link" style="cursor: pointer;" onclick="show_blog_posts();" aria-haspopup="true" aria-expanded="false">'+
//                ' Blog'+ 
//              ' </a>'+
//             '</li>'+
//             '<li class="nav-item">'+
//               '<a class="nav-link" style="cursor: pointer;" onclick="contactPage();">'+
//                 'Contact'+
//               '</a>'+
//             '</li>'+
//             '<li class="nav-item">'+
//               '<a class="nav-link" style="cursor: pointer;" href="account/authentication.php">Sign In</a>'+
//             '</li>'+
//           '</ul>'+
//         '</div>'+
//       '</div>'+
//     '</div>'+
//     '<div class="mobile-menu" data-logo="assets/img/logo-mobile.png"></div>'+
//  ' </nav>'+
//   '<!-- Navbar End -->';
// }
function header(){
  let MainHeader = '';
  // let navbar = MainNavbar();
  MainHeader +='<header id="home" class="hero-area">'+
  '<!-- Navbar Start -->'+
  '<nav class="navbar navbar-expand-lg fixed-top scrolling-navbar">'+
    '<div class="container">'+
      '<div class="theme-header clearfix">'+
       ' <!-- Brand and toggle get grouped for better mobile display -->'+
        '<div class="navbar-header">'+
          '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar" aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">'+
            '<span class="navbar-toggler-icon"></span>'+
            '<span class="lni-menu"></span>'+
            '<span class="lni-menu"></span>'+
            '<span class="lni-menu"></span>'+
          '</button>'+
          '<a href="index.php" class="navbar-brand"><img src="assets/img/logo-header.png" alt="logo"></a>'+
        '</div>'+
        '<div class="collapse navbar-collapse" id="main-navbar">'+
          '<ul class="navbar-nav mr-auto w-100 justify-content-end">'+
            '<li class="nav-item active">'+
              '<a class="nav-link" href="index.php" aria-expanded="false" aria-haspopup="true">'+
               ' Home'+
              '</a>'+
            '</li>'+
            '<li class="nav-item">'+
              '<a class="nav-link" style="cursor: pointer;" onclick="displayJobs();" aria-expanded="false" aria-haspopup="true">'+
               ' Jobs'+
              '</a>'+
            '</li>'+
            // '<li class="nav-item">'+
            //   '<a class="nav-link" style="cursor: pointer;" onclick="displayEmployers();" aria-haspopup="true" aria-expanded="false">'+
            //     'Employers'+
            //   '</a>'+
            // '</li>'+
            '<li class="nav-item">'+
              '<a class="nav-link" style="cursor: pointer;" onclick="displayJobseekers();" aria-haspopup="true" aria-expanded="false">'+
                'Freelancers'+
              '</a>'+
            '</li>'+
            '<li class="nav-item">'+
              '<a class="nav-link" style="cursor: pointer;" onclick="show_blog_posts();" aria-haspopup="true" aria-expanded="false">'+
               ' Blog'+ 
             ' </a>'+
            '</li>'+
            '<li class="nav-item">'+
              '<a class="nav-link" style="cursor: pointer;" onclick="displayPricing();" aria-haspopup="true" aria-expanded="false">'+
               'Pricing'+ 
             ' </a>'+
            '</li>'+
            '<li class="nav-item">'+
              '<a class="nav-link" style="cursor: pointer;" onclick="contactPage();">'+
                'Contact'+
              '</a>'+
            '</li>'+
            '<li class="nav-item">'+
              '<a class="nav-link" style="cursor: pointer;" href="account/authentication.php">Sign In</a>'+
            '</li>'+
          '</ul>'+
        '</div>'+
      '</div>'+
    '</div>'+
    '<div class="mobile-menu" data-logo="assets/img/logo-mobile.png"></div>'+
 ' </nav>'+
  '<!-- Navbar End -->'+
      '<div class="container intro-landing">'+      
        '<div class="row space-100">'+
          '<div class="col-lg-7 col-md-12 col-xs-12">'+
            '<div class="contents">'+
              '<h2 class="head-title">Find the  <br> person that fits your job</h2>'+
              '<p>If your\'re looking for a job that fits your life or a freelancer to do some work for you, then you are at the right place.</p>'+
            '</div>'+
          '</div>'+
          '<div class="col-lg-5 col-md-12 col-xs-12">'+
            '<div class="intro-img">'+
              '<img src="assets/img/search.png" alt="">'+
            '</div> '+        
          '</div>'+
        '</div>'+
      '</div> '+            
    '</header>';

    $('body').prepend(MainHeader);
    var logo_path=$('.mobile-menu').data('logo');
    $('#main-navbar').slicknav({
        appendTo:'.mobile-menu',
        removeClasses:false,
        label:'',
        closedSymbol:'<i class="lni-chevron-right"><i/>',
        openedSymbol:'<i class="lni-chevron-down"><i/>',
        brand:'<a href="index.php"><img src="'+logo_path+'" class="img-responsive" alt="logo"></a>'
    });
}

function jobCategory(){
  let job_category = '';
  let subcat = '';
  $.ajax({
    method: "GET",
    url: "account/get.php/company/categories_of_jobs",
    dataType: "json",
    success: function(data){
      if(data != false){
      job_category += '<section class="category section bg-gray">'+
      '<div class="container">'+
        '<div class="section-header">'+  
          '<h2 class="section-title">Browse Categories</h2>'+
          '<p>Most popular categories of portal, sorted by popularity</p>'+
        '</div>'+
        '<div class="row"> ';
        $.each(data, function(i,val){
          let sub = val.job_cat;
          let  profileImage = '';
  (sub=='Finance')?subcat=Finance:(sub=='IT & Engineering')?subcat=SE:(sub=='Healthcare')?subcat=Healthcare:(sub=='Education/Training')?subcat=Education:(sub=='Art/Design')?subcat=Art:(sub=='Sale/Markting')?subcat=Sale:(sub=='Science')?subcat=Science:(sub=='Food Services')?subcat=Food:subcat=''; 
   (sub=='Finance')?profileImage=FinanceImage:(sub=='IT & Engineering')?profileImage=SEImage:(sub=='Healthcare')?profileImage=HealthcareImage:(sub=='Education/Training')?profileImage=EducationImage:(sub=='Art/Design')?profileImage=ArtImage:(sub=='Sale/Markting')?profileImage=SaleImage:(sub=='Science')?profileImage=ScienceImage:(sub=='Food Services')?profileImage=FoodImage:profileImage='graphic.jpeg';
          job_category +='<div class="col-lg-3 col-md-6 col-xs-12 f-category">'+
          '<a onclick="show_jobs_and_jobseekers_by_categories(\''+val.job_cat+'\');" style="cursor: pointer;">'+
            '<div class="icon">'+
            '<img src="account/uploads/'+profileImage+'" alt="" class="logo-img">'+
            '</div>'+
            '<h3>'+val.job_cat+'</h3>';
            if(val.count == '1'){
              job_category +='<p>('+ val.count +' job)</p>';
            }else{
              job_category +='<p>('+ val.count +' jobs)</p>';
            }
            
            job_category +='</a>'+
        '</div>';
      });             
      job_category +='</div>'+
      '</div>'+
    '</section>';
    $('.content-section').append(job_category);
    featuredJobs();
      }
    
   },
   error: function(err){
    console.log(err.responseText);
   }
  });
  
  
}

function featuredJobs(){
  let featuredjobs = '';
  let back = 'featuredjobs';
    $.ajax({
        method: "GET",
        url: "account/get.php/company/featured_jobs",
        dataType: "json",
        success: function(data){
         featuredjobs +='<section id="featured" class="section">'+
          '<div class="container">'+
            '<div class="section-header">'+  
              '<h2 class="section-title">Featured Jobs</h2>'+
              '<p>Hand-picked jobs featured depending on popularity and benifits</p>'+
            '</div>'+
            '<div class="row">';
            $.each(data.slice(0,3), function(i,val){
              featuredjobs +='<div class="col-lg-4 col-md-6 col-xs-12">'+
                '<div class="job-featured" onclick="show_job_details(\''+val.job_id+'\',\''+val.company_name+'\',\'GMD\',\''+back+'\');" style="cursor: pointer;">'+
                  '<div class="icon">'+
                    '<img src="'+((val.logo == null)?"https://ui-avatars.com/api/?name="+val.company_name.replace(/ /g, '+'):'account/uploads/'+val.logo)+'" class="logo-img" alt="" >'+
                  '</div>'+
                  '<div class="content">'+
                    '<h3><a>'+ val.job_name +'</a></h3>'+
                    '<p class="brand">'+ val.company_name +'</p>'+
                    '<div class="tags">' + 
                      '<span><i class="lni-map-marker"></i>'+ val.job_location +'</span> ' + 
                    '</div>'+
                    '<span class="full-time">'+ val.job_type +'</span>'+
                  '</div>'+
                '</div>'+
              '</div>';
            });
            featuredjobs +='<div class="col-12 text-center mt-4">'+
                '<a onclick="browse_all_featured_jobs();" style="cursor: pointer;" class="btn btn-common">Browse All Featured Jobs</a>'+
              '</div>'+
            '</div>'+
          '</div>'+
        '</section>';
        $(document).ready(()=>{
          $('.content-section').append(featuredjobs);
        });
        latestJobs();
       },
       error: function(err){
        console.log("======error function featured jobs========");
        console.log(err.responseText);
       }
      });

}

function latestJobs(){
  let latestjobs = '';
  let back = 'latestjobs';

    $.ajax({
        method: "POST",
        url: "account/get.php/company/latest_jobs",
        dataType: "json",
        success: function(data){
         latestjobs +='<section id="latest-jobs" class="section bg-gray">'+
        '<div class="container">'+
          '<div class="section-header">'+  
            '<h2 class="section-title">Latest Jobs</h2>'+
            '<p>Check out the latest published jobs from companies.</p>'+       
          '</div>'+
          '<div class="row">';
        $.each(data.slice(0,4), function(i,val){
            latestjobs +='<div class="col-lg-6 col-md-6 col-xs-12">'+
            '<div class="jobs-latest" onclick="show_job_details(\''+val.job_id+'\',\''+val.company_name+'\',\'GMD\',\''+back+'\');" style="cursor: pointer;">'+
              '<div class="img-thumb">'+
                '<img src="'+((val.logo == null)?"https://ui-avatars.com/api/?name="+val.company_name.replace(/ /g, '+'):'account/uploads/'+val.logo)+'" alt="" class="logo-img">'+
              '</div>'+
              '<div class="content">'+
                '<h3><a>'+ val.job_name +'</a></h3>'+
                '<p class="brand">'+ val.company_name +'</p>'+
                '<div class="tags">'+ 
                  '<span><i class="lni-map-marker"></i>'+ val.job_location +'</span> '+   
                '</div>'+
                '<span class="full-time">'+ val.job_type +'</span>'+
              '</div>'+
              // '<div class="save-icon">'+
              //   '<a href="#"><i class="lni-heart-filled"></i></a>'+
              // '</div>'+
            '</div>'+
          '</div>';
          
        });
        latestjobs +='<div class="col-12 text-center mt-4">'+
            '<a onclick="browse_all_latest_jobs();" class="btn btn-common" style="cursor: pointer;">Browse All Latest Jobs</a>'+
          '</div>'+
        '</div>'+
      '</div>'+
    '</section>';
    $(document).ready(()=>{
      $('.content-section').append(latestjobs);
    });
    blog();
       },
       error: function(err){
        console.log("======error function========");
        console.log(err.responseText);
       }
      });
    
}

function blog(){
  let blogging = '';
  let maxLength = 100;
  let back = 'blogLanding';
  $.ajax({
    method: "POST",
    url: "account/get.php/company/retrieve_all_blogs",
    dataType: "json",
    success: function(data){
      if(data != 400){
        blogging +='<section id="blog" class="section">'+
      '<!-- Container Starts -->'+
      '<div class="container">'+
        '<div class="section-header">'+  
          '<h2 class="section-title">Blog Post</h2>'+
          '<p>View our esteem latest blog posts from our various bloggers</p>'+      
        '</div>'+
        '<div class="row">';
        $.each(data.slice(0,3), function(i,val){
          blogging +='<div class="col-lg-4 col-md-6 col-xs-12 blog-item" onclick="show_blog_details(\''+val.blog_id+'\',\''+back+'\');" style="cursor: pointer;">'+
          '<!-- Blog Item Starts -->'+
          '<div class="blog-item-wrapper">'+
            '<div class="blog-item-img">'+
              '<a>'+
                '<img src="account/uploads/'+((val.blog_image == "" || val.blog_image == null)?"default.jpg":val.blog_image)+'" alt="" class="blog-image">'+
              '</a>'+              
            '</div>'+
            '<div class="blog-item-text">'+ 
              '<h3><a>'+val.blog_title+'</a></h3>';
              if($.trim(val.blog_content).length > maxLength){
                let subcontent = val.blog_content.substring(0,maxLength);
                blogging +='<p>'+subcontent+'...</p>';
              }
              else{
                blogging +='<p>'+val.blog_content+'...</p>';
              }
              blogging +='</div>'+
            '<a class="readmore" onclick="show_blog_details(\''+val.blog_id+'\',\''+back+'\');" style="cursor: pointer;">Read More</a>'+
          '</div>'+
          '<!-- Blog Item Wrapper Ends-->'+
        '</div>';
        });

        '</div>'+
      '</div>'+
    '</section>';
    $(document).ready(()=>{
      $('.content-section').append(blogging);
    });

      }
    },
    error: function(err){
      console.log(err.responseText);
    }
  });
    
}

function footer(){
  let foot = '';
    foot +='<footer>'+
      '<!-- Footer Area Start -->'+
      '<section class="footer-Content">'+
        '<div class="container">'+
          '<div class="row">'+
            '<div class="col-lg-3 col-md-3 col-xs-12">'+
              '<div class="widget">'+
                '<div class="footer-logo"><img src="assets/img/logo-footer.png" alt=""></div>'+
                '<div class="textwidget">'+
                  '<p>Sed consequat sapien faus quam bibendum convallis quis in nulla. Pellentesque volutpat odio eget diam cursus semper.</p>'+
                '</div>'+
              '</div>'+
            '</div>'+
            '<div class="col-lg-6 col-md-4 col-xs-12">'+
              '<div class="widget">'+
                '<h3 class="block-title">Quick Links</h3>'+
                '<ul class="menu">'+
                  '<li><a href="#">About Us</a></li>'+
                  '<li><a href="#">Support</a></li>'+
                  '<li><a href="#">License</a></li>'+
                  '<li><a href="#">Contact</a></li>'+
                '</ul>'+
                '<ul class="menu">'+
                  '<li><a href="#">Terms & Conditions</a></li>'+
                  '<li><a href="#">Privacy</a></li>'+
                  '<li><a href="#">Refferal Terms</a></li>'+
                  '<li><a href="#">Product License</a></li>'+
                '</ul>'+
              '</div>'+
            '</div>'+
            '<div class="col-lg-3 col-md-4 col-xs-12">'+
              '<div class="widget">'+
                '<h3 class="block-title">Subscribe Now</h3>'+
                '<p>Sed consequat sapien faus quam bibendum convallis.</p> '+
                '<form method="post" id="subscribe-form" name="subscribe-form" class="validate">'+
                  '<div class="form-group is-empty">'+
                    '<input type="email" value="" name="Email" class="form-control" id="EMAIL" placeholder="Enter Email..." required="">'+
                    '<button type="submit" name="subscribe" id="subscribes" class="btn btn-common sub-btn"><i class="lni-envelope"></i></button>'+
                    '<div class="clearfix"></div>'+
                  '</div>'+
                '</form>'+
                '<ul class="mt-3 footer-social">'+
                  '<li><a class="facebook" href="https://www.facebook.com/pg/Dokuwo-106334990997957"><i class="lni-facebook-filled"></i></a></li>'+
                  '<li><a class="twitter" href="https://twitter.com/Dokuwo1"><i class="lni-twitter-filled"></i></a></li>'+
                  '<li><a class="linkedin" href="https://www.linkedin.com/company/38126868/"><i class="lni-linkedin-fill"></i></a></li>'+
                '</ul> '+       
              '</div>'+
            '</div>'+
          '</div>'+
        '</div>'+
      '</section>'+
      '<!-- Footer area End -->'+
      
     ' <!-- Copyright Start  -->'+
      '<div id="copyright">'+
        '<div class="container">'+
          '<div class="row">'+
            '<div class="col-md-12">'+
              '<div class="site-info text-center">'+
                '<p>Powered By Afrika Software Technologies</p>'+
              '</div>'+     
            '</div>'+
          '</div>'+
        '</div>'+
      '</div>'+
      '<!-- Copyright End -->'+
    '</footer>';
    $('.content-section').after(foot);
}

function loadLanding(){
  header();
  jobCategory();
  footer();
}

$(document).ready(function(){
  loadLanding();
  
});

function displayJobs(start,finish){
let jobs = '';
let beg ='';
let end ='';
let numberOfItems = '';
let totalPages = '';
let forward = '';
let Backward = '';
let Prev = '';
let Next = '';
let temp = '';
let back = 'displayjobs';

if(start !== undefined && finish !== undefined){ beg = start; end = finish;}else{ beg = 0; end = 4;}
$.ajax({
  method: "POST",
  url: "account/get.php/jobseeker/retreive_jobs",
  dataType: "json",
  success: function(data){
    numberOfItems = data.length;
    limitPerPage = 4;
    totalPages = Math.round(numberOfItems/limitPerPage);
    if(data != 400){
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
                  '<input type="text" class="form-control" id="job_name" placeholder="Job Name">'+
                '</div>'+
                '<div class="col-lg-5 col-md-5 col-xs-12">'+
                  '<input type="text" class="form-control" id="job_location" placeholder="Job location">'+
                '</div>'+
                '<div class="col-lg-2 col-md-2 col-xs-12">'+
                  '<button type="submit" class="btn btn-common float-right" id="filter_job" onclick="filterJobs();">Filter</button>'+
                '</div>'+
              '</div>'+
            '</div>'+
            '<div class="col-lg-12 col-md-12 col-xs-12 jobs">';
            $.each(data.slice(beg,end),function(i,val){
              temp +='<a class="job-listings" onclick="show_job_details(\''+val.job_id+'\',\''+val.company_name+'\',\''+val.currency+'\',\''+back+'\');" style="cursor: pointer;">'+
              '<div class="row">'+
                '<div class="col-lg-4 col-md-4 col-xs-12">'+
                  '<div class="job-company-logo">'+
                    '<img src="'+((val.logo == null)?"https://ui-avatars.com/api/?name="+val.company_name.replace(/ /g, '+'):'account/uploads/'+val.logo)+'" alt="" class="logo-img">'+
                  '</div>'+
                  '<div class="job-details">'+
                    '<h3>'+val.job_name+'</h3>'+
                    '<span class="company-neme">'+
                      val.company_name+
                    '</span>'+
                  '</div>'+
                '</div>'+
                '<div class="col-lg-2 col-md-2 col-xs-12 text-center">'+
                  '<span class="btn-open">'+
                   val.currency+currencyFormat(val.salary) +
                  '</span>'+
                '</div>'+
                '<div class="col-lg-2 col-md-2 col-xs-12 text-left">'+
                '<div class="location">'+
                  '<i class="lni-map-marker"></i>'+ val.job_location +
                '</div>'+
                '</div>'+
                '<div class="col-lg-2 col-md-2 col-xs-12 text-right">'+
                  '<span class="btn-full-time">'+val.job_type+'</span>'+
                '</div>'+
                '<div class="col-lg-2 col-md-2 col-xs-12 text-right">'+
                  '<span class="btn-apply">View Job</span>'+
                '</div>'+
              '</div>'+
            '</a>';
            
            });
  let LastLast =  "displayJobs(\'"+(limitPerPage*Math.floor(numberOfItems/limitPerPage))+"\',\'"+(numberOfItems)+"\')";
  (numberOfItems <= limitPerPage || numberOfItems == end)?(Next = 'disabled'):(numberOfItems < end+limitPerPage)? (forward = "displayJobs(\'"+(beg+limitPerPage)+"\',\'"+numberOfItems+"\')"):(forward = "displayJobs(\'"+(beg+limitPerPage)+"\',\'"+(end+limitPerPage)+"\')"); 
  (beg == 0 && (end == numberOfItems || end == limitPerPage))? (Prev = 'disabled',Backward = "displayJobs(\'"+(beg)+"\',\'"+(end)+"\')"):(beg != 0 && end != numberOfItems)?(Backward = "displayJobs(\'"+(beg-limitPerPage)+"\',\'"+(end-limitPerPage)+"\')"): (Backward = "displayJobs(\'"+(beg-limitPerPage)+"\',\'"+(numberOfItems-(numberOfItems%limitPerPage))+"\')");
            temp +='<!-- Start Pagination -->'+
              '<ul class="pagination">' +             
              ' <li class="active"><a href="javascript:void(0)" class="btn-prev" onclick=" displayJobs(0,4)"><i class="lni-angle-left"></i> First</a></li>'+
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
      $('header .intro-landing').remove();
      $('.content-section').empty().append(temp);
    });
  
  },
  error: function(err){
   console.log("======error function jobs by category========");
   console.log(err.responseText);
  }
 });
  
}

// This function will display employers
function displayEmployers(start,finish){
  let employers = '';
  let beg ='';
  let end ='';
  let numberOfItems = '';
  let totalPages = '';
  let forward = '';
  let Backward = '';
  let Prev = '';
  let Next = '';
  let temp = '';
  if(start !== undefined && finish !== undefined){ beg = start; end = finish;}else{ beg = 0; end = 6;}
    $.ajax({
      method: "GET",
      url: "account/get.php/jobseeker/retreive_all_companies",
      dataType: "json",
      success: function(data){
        numberOfItems = data.length;
    limitPerPage = 6;
    totalPages = Math.round(numberOfItems/limitPerPage);
    if(data != 400){
      employers +='<!-- Page Header Start -->'+
      '<div class="page-header">'+
        '<div class="container">'+
          '<div class="row">'+        
            '<div class="col-lg-12">'+
              '<div class="inner-header">'+
                '<h3>Browse Employers</h3>'+
                '<div class="job-search-form bg-cyan job-featured-search">'+
                '<form>'+
                  '<div class="row justify-content-center">'+
                    '<div class="col-lg-5 col-md-5 col-xs-12">'+
                      '<div class="form-group">'+
                        '<input class="form-control" type="text" id="companyName" placeholder="Company name">'+
                      '</div>'+
                    '</div>'+
                    '<div class="col-lg-5 col-md-5 col-xs-12">'+
                      '<div class="form-group">'+
                        '<div class="search-category-container">'+
                        '<input class="form-control" type="text" id="companyLocation" placeholder="Company Location">'+
                        '</div>'+
                        '<i class="lni-map-marker"></i>'+
                      '</div>'+
                   ' </div>'+
                    '<div class="col-lg-1 col-md-1 col-xs-12">'+
                      '<button type="submit" class="button" onclick="filterEmployers();return false;" id="searchEmployer"><i class="lni-search"></i></button>'+
                    '</div>'+
                  '</div>'+
                '</form>'+
              '</div>'+
              '</div>'+
            '</div>'+
          '</div>'+
        '</div>'+
      '</div>'+
      '<!-- Page Header End -->'+ 
      '<section id="featured" class="section bg-cyan">'+
      '<div class="container">'+
        '<div class="row employers">';
        $.each(data.slice(beg,end), function(i,val){

          employers +='<div class="col-lg-4 col-md-6 col-xs-12 company" onclick="employerDetails(\''+val.company_id+'\');" style="cursor: pointer;">'+
           '<div class="job-featured employer-card">'+
              '<div class="icon">'+
                '<img src="'+((val.logo == null)?"https://ui-avatars.com/api/?name="+val.company_name.replace(/ /g, '+'):'account/uploads/'+val.logo)+'" alt="" class="logo-img">'+
              '</div>'+
              '<div class="content">'+
                '<h3><a href="#">'+ val.company_name +'</a></h3>'+
                '<p class="brand"><span><i class="lni-envelope"></i> '+ val.company_email +'</span></p>'+
                '<div class="tags">'+  
                  '<span><i class="lni-map-marker"></i>'+ val.company_address+','+ val.country +'</span>'+   
                '</div>'+
              '</div>'+
            '</div>'+
          '</div>';

        }); 
        employers +='<div class="col-12 text-center mt-4">';
        let LastLast =  "displayEmployers(\'"+(limitPerPage*Math.floor(numberOfItems/limitPerPage))+"\',\'"+(numberOfItems)+"\')";
        (numberOfItems <= limitPerPage || numberOfItems == end)?(Next = 'disabled'):(numberOfItems < end+limitPerPage)? (forward = "displayEmployers(\'"+(beg+limitPerPage)+"\',\'"+numberOfItems+"\')"):(forward = "displayEmployers(\'"+(beg+limitPerPage)+"\',\'"+(end+limitPerPage)+"\')"); 
        (beg == 0 && (end == numberOfItems || end == limitPerPage))? (Prev = 'disabled',Backward = "displayEmployers(\'"+(beg)+"\',\'"+(end)+"\')"):(beg != 0 && end != numberOfItems)?(Backward = "displayEmployers(\'"+(beg-limitPerPage)+"\',\'"+(end-limitPerPage)+"\')"): (Backward = "displayEmployers(\'"+(beg-limitPerPage)+"\',\'"+(numberOfItems-(numberOfItems%limitPerPage))+"\')");
        employers +='<!-- Start Pagination -->'+
                    '<ul class="pagination">' +             
                    ' <li class="active"><a href="javascript:void(0)" class="btn-prev" onclick=" displayEmployers(0,6)"><i class="lni-angle-left"></i> First</a></li>'+
                      '<li class="active"><a href="javascript:void(0)" class="btn-next" onclick="'+Backward+'">Prev <i class="lni-angle-right"></i></a></li>'+
                      '<li class="active"><a href="javascript:void(0)" class="btn-next" onclick="'+forward+'">Next <i class="lni-angle-right"></i></a></li>'+
                      '<li class="active"><a href="javascript:void(0)" class="btn-next" onclick="'+LastLast+'">Last <i class="lni-angle-right"></i></a></li>'+
                    '</ul>'+
                    '<!-- End Pagination -->'+
          '</div>'+
        '</div>'+
      '</div>'+
    '</section>';
      }
      $(document).ready(()=>{
        $('header .intro-landing').remove();
        $('.content-section').empty().append(employers);
      });

      },
      error: function(err){
       console.log("======error function displayjobs========");
       console.log(err.responseText);
      }
     });
  
     
    
  }

  function displayJobseekers(start,finish){
    let beg ='';
    let end ='';
    let numberOfItems = '';
    let totalPages = '';
    let forward = '';
    let Backward = '';
    let Prev = '';
    let Next = '';
    let temp = '';

    if(start !== undefined && finish !== undefined){ beg = start; end = finish;}else{ beg = 0; end = 4;}
    $.ajax({
      method: "GET",
      url: "account/get.php/company/retreive_all_jobseekers",
      dataType: "json",
      success: function(data){
        numberOfItems = data.length;
        limitPerPage = 4;
        totalPages = Math.round(numberOfItems/limitPerPage);
        if(data != 400){
          temp +='<!-- Page Header Start -->'+
          '<div class="page-header">'+
            '<div class="container">'+
              '<div class="row">'+        
                '<div class="col-lg-12">'+
                  '<div class="inner-header">'+
                    '<h3>Browse Jobseekers</h3>'+
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
                      '<input type="text" class="form-control" id="tag_line" placeholder="jobseeker Name">'+
                    '</div>'+
                    '<div class="col-lg-5 col-md-5 col-xs-12">'+
                      '<input type="text" class="form-control" id="jobseeker_location" placeholder="Location">'+
                    '</div>'+
                    '<div class="col-lg-2 col-md-2 col-xs-12">'+
                      '<button type="submit" class="btn btn-common float-right" onclick="filterJobseekers();">Filter</button>'+
                    '</div>'+
                  '</div>'+
                '</div>'+
                '<div class="col-lg-12 col-md-12 col-xs-12">';
                $.each(data.slice(beg,end),function(i,val){
                  console.log('begin :',beg,'end :',end);
                  temp +='<a class="job-listings" onclick="show_jobseeker_details(\''+val.jobseeker_id+'\',\''+beg+'\',\''+end+'\');"  style="cursor: pointer;">'+
                  '<div class="row">'+
                    '<div class="col-lg-4 col-md-4 col-xs-12">'+
                      '<div class="job-company-logo">'+
                        '<img src="account/uploads/'+((val.image == "" || val.image == null)?"default.jpg":val.image)+'" alt="" class="logo-img">'+
                      '</div>'+
                      '<div class="job-details">'+
                        '<h3>'+val.fullName+'</h3>'+
                        '<span class="company-neme">'+
                          val.tag_line+
                        '</span>'+
                      '</div>'+
                    '</div>'+
                    '<div class="col-lg-2 col-md-2 col-xs-12 text-center">'+
                      '<span class="btn-open"><i class="lni-phone-handset"></i> '+
                      val.phone +
                      '</span>'+
                    '</div>'+
                    '<div class="col-lg-2 col-md-2 col-xs-12 text-left">'+
                    '<div class="location">'+
                      '<i class="lni-map-marker"></i>'+ val.address +
                    '</div>'+
                    '</div>'+
                    '<div class="col-lg-2 col-md-2 col-xs-12 text-right">'+
                        '<span class="btn-full-time">'+val.education_level+'</span>'+
                      '</div>'+
                    '<div class="col-lg-2 col-md-2 col-xs-12 text-right">'+
                      '<span class="btn-apply">VIEW</span>'+
                    '</div>'+
                  '</div>'+
                '</a>';
                
                });
      let LastLast =  "displayJobseekers(\'"+(limitPerPage*Math.floor(numberOfItems/limitPerPage))+"\',\'"+(numberOfItems)+"\')";
      (numberOfItems <= limitPerPage || numberOfItems == end)?(Next = 'disabled'):(numberOfItems < end+limitPerPage)? (forward = "displayJobseekers(\'"+(beg+limitPerPage)+"\',\'"+numberOfItems+"\')"):(forward = "displayJobseekers(\'"+(beg+limitPerPage)+"\',\'"+(end+limitPerPage)+"\')"); 
      (beg == 0 && (end == numberOfItems || end == limitPerPage))? (Prev = 'disabled',Backward = "displayJobseekers(\'"+(beg)+"\',\'"+(end)+"\')"):(beg != 0 && end != numberOfItems)?(Backward = "displayJobseekers(\'"+(beg-limitPerPage)+"\',\'"+(end-limitPerPage)+"\')"): (Backward = "displayJobseekers(\'"+(beg-limitPerPage)+"\',\'"+(numberOfItems-(numberOfItems%limitPerPage))+"\')");
                temp +='<!-- Start Pagination -->'+
                  '<ul class="pagination">' +             
                  ' <li class="active"><a href="javascript:void(0)" class="btn-prev" onclick=" displayJobseekers(0,4)"><i class="lni-angle-left"></i> First</a></li>'+
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
          $('header .intro-landing').remove();
          $('.content-section').empty().append(temp);
        });
        
      },
      error: function(err){
       console.log("======error function jobs by category========");
       console.log(err.responseText);
      }
     });
    }

    
      // Show latest jobs details function
    function show_job_details(job_id,company_name,currency,back){
      let temp = '';
      // console.log('back: ',back,'currency: ',currency)
      $.ajax({
        method: "POST",
        url: "account/get.php/company/get_job_details",
        dataType: "json",
        data:{'job_id':job_id},
        success: function(data){
          console.log(data);
          temp +=' <!-- Page Header Start -->'+
          '<div class="page-header">'+
            '<div class="container">'+
              '<div class="row"> '+        
               ' <div class="col-lg-8 col-md-6 col-xs-12">'+
                  '<div class="breadcrumb-wrapper">'+
                    '<div class="img-wrapper">'+
                      '<img src="'+((data.logo == null)?"https://ui-avatars.com/api/?name="+company_name.replace(/ /g, '+'):'account/uploads/'+data.logo)+'" alt="" class="logo-img">'+
                    '</div>'+
                    '<div class="content">'+
                      '<h3 class="product-title">'+ data.job_name +'</h3>'+
                      '<p class="brand">'+ company_name +'</p>'+
                      '<div class="tags">' + 
                        '<span><i class="lni-map-marker"></i>'+ data.job_location+'</span>'+  
                        '<span><i class="lni-calendar"></i>'+ data.date_posted+'</span>'+  
                      '</div>'+
                    '</div>'+
                  '</div>'+
                '</div>'+
                '<div class="col-lg-4 col-md-6 col-xs-12">'+
                  '<div class="month-price">'+
                    '<span class="year">Monthly</span>'+
                    '<div class="price">'+currency+currencyFormat(data.salary)+'</div>'+
                  '</div>'+
                '</div>'+
              '</div>'+
            '</div>'+
          '</div>'+
          '<!-- Page Header End --> '+
      
          '<!-- Job Detail Section Start -->'+  
          '<section class="job-detail section">'+
            '<div class="container">'+
              '<div class="row justify-content-between job_details">'+
                '<div class="col-lg-6 col-md-12 col-xs-12">'+
                  '<div class="content-area">'+  
                    '<h5>Category</h5>'+
                    '<p>'+ data.job_cat +'</p>'+
                     '<h5>Job Requirements</h5>'+
                    '<p>'+ data.requirements +'</p>'+
                    '<h5>Job Type</h5>'+
                    '<p>'+ data.job_type +'</p>'+
                    '<h5>Contact Email</h5>'+
                    '<p>'+ data.job_contact_email +'</p>'+
                    '<h5>Contact Phone</h5>'+
                    '<p><span><i class="lni-phone-handset"></i> '+ data.job_contact_phone+'</span></p>'+
                    '<a href="#" class="btn btn-common" onclick="apply_job(\''+data.job_id+'\',\''+data.company_id+'\');">Apply job</a>';
                    if(back === 'displayjobs'){
                      temp +='<a href="#" class="btn btn-danger float-right" onclick="displayJobs();">Back</a>'; 
                    }
                    if(back === 'featuredjobs'){
                      temp +='<a href="index.php" class="btn btn-danger float-right">Back</a>'; 
                    }
                    if(back === 'latestjobs'){
                      temp +='<a href="index.php" class="btn btn-danger float-right">Back</a>'; 
                    }
                    if(back === 'allfeaturedjobs'){
                      temp +='<a href="#" class="btn btn-danger float-right" onclick="browse_all_featured_jobs();">Back</a>'; 
                    }
                    if(back === 'alllatestjobs'){
                      temp +='<a href="#" class="btn btn-danger float-right" onclick="browse_all_latest_jobs();">Back</a>'; 
                    }
                    
                    temp +='</div>'+
                '</div>'+
          '</section>'+
          '<!-- Job Detail Section End -->';
          $(document).ready(()=>{
            $('header .intro-landing').remove();
            $('.content-section').empty().append(temp);
            $('.job_details').append(show_featured_jobseekers());
          });
        },
        error: function(err){
         console.log("======error function displayjobs========");
         console.log(err.responseText);
        }
       });

    }

          //latest jobseeker details function
          function show_jobseeker_details(jobseeker_id,beg,end){
            let temp = '';
            $.ajax({
              method: "POST",
              url: "account/get.php/company/get_jobseeker_details",
              dataType: "json",
              data:{'jobseeker_id':jobseeker_id},
              success: function(data){
                temp +=' <!-- Page Header Start -->'+
                '<div class="page-header">'+
                  '<div class="container">'+
                    '<div class="row"> '+        
                     ' <div class="col-lg-8 col-md-6 col-xs-12">'+
                        '<div class="breadcrumb-wrapper">'+
                          '<div class="img-wrapper">'+
                            '<img src="account/uploads/'+((data[0].image == "" || data[0].image == null)?"default.jpg":data[0].image)+'" class="logo-img" alt="'+data[0].fullName+'">'+
                          '</div>'+
                          '<div class="content">'+
                            '<h3 class="product-title">'+ data[0].fullName +'</h3>'+
                            '<p class="brand">'+ data[0].tag_line +'</p>'+
                            '<div class="tags">' + 
                              '<span><i class="lni-map-marker"></i>'+ data[0].address+'</span>'+  
                              '<span><i class="lni-phone-handset"></i>'+ data[0].phone+'</span>'+  
                            '</div>'+
                          '</div>'+
                        '</div>'+
                      '</div>'+
                      '<div class="col-lg-4 col-md-6 col-xs-12">'+
                        '<div class="month-price">'+
                          '<span class="year">Country</span>'+
                          '<div class="price">'+ data[0].country +'</div>'+
                        '</div>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                '</div>'+
                '<!-- Page Header End --> '+
            
                '<!-- Job Detail Section Start -->'+  
                '<section class="job-detail section">'+
                  '<div class="container">'+
                    '<div class="row justify-content-between jobseeker_details">'+
                      '<div class="col-lg-6 col-md-12 col-xs-12">'+
                        '<div class="content-area">'+
                        '<div class="job-company-logo">'+
                        '<img src="account/uploads/'+((data[0].image == "" || data[0].image == null)?"default.jpg":data[0].image)+'" alt="'+ data[0].fullName +'" style="width: 200px; height: 200px;display: inline-block;border-radius: 50%;margin-top: 5px;margin-bottom: 15px;">'+
                        '</div>'+
                          '<h5>Category</h5>'+
                          '<p>'+ data[0].category +'</p>'+  
                          '<h5>Education Level</h5>'+
                          '<p><i class="lni-graduation"></i> '+ data[0].education_level +'</p>';
                           let skill = data[0].skills.split(',');
                           temp +=
                           '<h5>Skills</h5>'+
                          '<ul>';
                          for(i=0;i<skill.length;i++){
                            temp +='<li>-'+ skill[i] +'</li>';
                          }
                          temp +='</ul>'+
                          '<a href="#" class="btn btn-common" data-toggle="modal" data-target="#hireModal">Hire</a>'+
                          '<a href="#" class="btn btn-danger float-right" onclick="displayJobseekers(\''+beg+'\',\''+end+'\')">Back</a>'+
                          ' <!-- Modal -->'+
                      '<div class="modal fade" id="hireModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">'+
                        '<div class="modal-dialog modal-dialog-centered" role="document">'+
                          '<div class="modal-content">'+
                            '<div class="modal-header">'+
                              '<h5 class="modal-title" id="exampleModalLongTitle">Hire Jobseeker</h5>'+
                              '<button type="button" class="close" data-dismiss="modal" aria-label="Close">'+
                                '<span aria-hidden="true">&times;</span>'+
                              '</button>'+
                            '</div>'+
                            '<div class="modal-body">'+
          
                                '<div class="contact-block">'+
                                  '<h2 class="text-center">'+ data[0].fullName +'</h2>'+
                                  '<form id="contactForm1">'+
                                    '<div class="row">'+
                                      '<div class="col-md-6">'+
                                        '<div class="form-group">'+
                                          '<input type="text" class="form-control" id="hirer_name" name="name" placeholder="Name" required data-error="Please enter your name">'+
                                          '<div class="help-block with-errors"></div>'+
                                        '</div>'+                                 
                                      '</div>'+
                                      '<div class="col-md-6">'+
                                        '<div class="form-group">'+
                                          '<input type="text" placeholder="Email" id="hirer_email" class="form-control" name="name" required data-error="Please enter your email">'+
                                          '<div class="help-block with-errors"></div>'+
                                        '</div>'+ 
                                      '</div>'+
                                      '<div class="col-md-12">'+
                                        '<div class="form-group">'+
                                          '<input type="text" placeholder="phone" id="hirer_phone_number" class="form-control" required data-error="Please enter your phone number">'+
                                          '<div class="help-block with-errors"></div>'+
                                        '</div>'+
                                      '</div>'+
                                      '<div class="col-md-12">'+
                                        '<div class="form-group">'+ 
                                          '<textarea class="form-control" id="task" placeholder="Task you want to be done" rows="5" data-error="Please enter a task to be done" required></textarea>'+
                                          '<div class="help-block with-errors"></div>'+
                                        '</div>'+
                                
                                     ' </div>'+
                                   ' </div> ' +          
                                  '</form>'+
                                '</div>'+
                          
                            '</div>'+
                            '<div class="modal-footer">'+
                              '<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>'+
                              '<button type="button" class="btn btn-primary" onclick="hire_jobseeker(\''+jobseeker_id+'\',\''+data[0].fullName+'\');">Hire</button>'+
                            '</div>'+
                          '</div>'+
                        '</div>'+
                      '</div>'+
                        '</div>'+
                      '</div>'+
                '</section>'+
                '<!-- Job Detail Section End -->';
                
                $(document).ready(()=>{
                  $('header .intro-landing').remove();
                  $('.content-section').empty().append(temp);
                  $('.jobseeker_details').append(show_featured_jobseekers());
                });
              },
              error: function(err){
               console.log(err.responseText);
              }
             });
      
          }
        
    
              //latest employer details function
              function employerDetails(recruiter_id){
                let temp = '';
                $.ajax({
                  method: "GET",
                  url: "account/get.php/company/recruiter_details",
                  dataType: "json",
                  data:{'recruiter_id':recruiter_id},
                  success: function(data){
                    temp +=' <!-- Page Header Start -->'+
                    '<div class="page-header">'+
                      '<div class="container">'+
                        '<div class="row"> '+        
                         ' <div class="col-lg-8 col-md-6 col-xs-12">'+
                            '<div class="breadcrumb-wrapper">'+
                              '<div class="img-wrapper">'+
                                '<img src="'+((data[0].logo == null)?"https://ui-avatars.com/api/?name="+data[0].company_name.replace(/ /g, '+'):'account/uploads/'+data[0].logo)+'" alt="">'+
                              '</div>'+
                              '<div class="content">'+
                                '<h3 class="product-title">'+ data[0].company_name +'</h3>'+
                                '<div class="tags">' + 
                                  '<span><i class="lni-map-marker"></i>'+ data[0].company_address+'</span>'+  
                                  '<span><i class="lni-phone-handset"></i>'+ data[0].company_phone+'</span>'+  
                                '</div>'+
                              '</div>'+
                            '</div>'+
                          '</div>'+
                          // '<div class="col-lg-4 col-md-6 col-xs-12">'+
                          //   '<div class="month-price">'+
                          //     '<span class="year">Country</span>'+
                          //     '<div class="price">'+ data[0].country +'</div>'+
                          //   '</div>'+
                          // '</div>'+
                        '</div>'+
                      '</div>'+
                    '</div>'+
                    '<!-- Page Header End --> '+
                
                    '<!-- Employer Detail Section Start -->'+  
                    '<section class="job-detail section">'+
                      '<div class="container">'+
                        '<div class="row justify-content-between employer_details">'+
                          // '<div class="col-lg-6 col-md-12 col-xs-12">'+
                          //   '<div class="content-area">'+
                          //   '<div class="job-company-logo">'+
                          //   '<img src="account/uploads/'+((data[0].logo == "" || data[0].logo == null)?"default.jpg":data[0].logo)+'" alt="" style="width: 200px; height: 200px;display: inline-block;border-radius: 50%;margin-top: 5px;margin-bottom: 15px;">'+
                          //   '</div>'+
                          //     '<h5>Currency</h5>'+
                          //     '<p>'+ data[0].currency +'</p>'+  
                          //     '<h5>Company Email</h5>'+
                          //     '<p><i class="lni-envelope"></i> '+ data[0].company_email +'</p>'+
                          //     '<h5>Postal Code</h5>'+
                          //     '<p>'+ data[0].postal_code +'</p>'+
                          //     '<a href="#" class="btn btn-danger btn-block" onclick="displayEmployers()">Back</a>'+
                          //   '</div>'+
                          // '</div>'+
                    '</section>'+
                    '<!-- Job Detail Section End -->';
                    
                    $(document).ready(()=>{
                      $('header .intro-landing').remove();
                      $('.content-section').empty().append(temp);
                      $('.employer_details').append(show_featured_jobseekers());
                    });
                  },
                  error: function(err){
                   console.log("======error function show employer details========");
                   console.log(err.responseText);
                  }
                 });
          
              }


    function show_jobs_and_jobseekers_by_categories(category,start,finish){
      let temp = '';


      let beg ='';
      let end ='';
      let numberOfItems = '';
      let totalPages = '';
      let forward = '';
      let Backward = '';
      let Prev = '';
      let Next = '';
      let job_cat = '';
      
      if(start !== undefined && finish !== undefined){ beg = start; end = finish;}else{ beg = 0; end = 4;}
      $.ajax({
        method: "POST",
        url: "account/get.php/company/jobs_by_category",
        dataType: "json",
        data:{'category':category},
        success: function(data){
          numberOfItems = data.length;
          limitPerPage = 4;
          totalPages = Math.round(numberOfItems/limitPerPage);
          if(data != 400){
            temp +='<!-- Page Header Start -->'+
            '<div class="page-header">'+
              '<div class="container">'+
                '<div class="row">'+        
                  '<div class="col-lg-12">'+
                    '<div class="inner-header">'+
                      '<h3>Browse '+ category +' Jobs</h3>'+
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
                    '<div class="wrap-search-filter row search-job-cat">'+
                      '<div class="col-lg-5 col-md-5 col-xs-12">'+
                        '<input type="text" class="form-control" id="categoryJobName" placeholder="Job name">'+
                      '</div>'+
                      '<div class="col-lg-5 col-md-5 col-xs-12">'+
                        '<input type="text" class="form-control" id="categoryJobLocation" placeholder="Location">'+
                      '</div>'+
                      '<div class="col-lg-2 col-md-2 col-xs-12">'+
                        '<button type="submit" class="btn btn-common float-right" onclick="filterJobsCategory(\''+category+'\');">Filter</button>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                  '<div class="col-lg-12 col-md-2 col-xs-12">'+
                        '<a class="btn btn-danger btn-block" href="index.php">Back</a>'+
                    '</div>'+
                  '<div class="col-lg-12 col-md-12 col-xs-12 job-category">';
               $.each(data.slice(beg,end),function(i,val){
                temp +='<a class="job-listings" onclick="show_job_details(\''+val.job_id+'\',\''+val.company_name+'\',\''+val.currency+'\');" style="cursor: pointer;">'+
                    '<div class="row">'+
                      '<div class="col-lg-4 col-md-4 col-xs-12">'+
                        '<div class="job-company-logo">'+
                          '<img src="'+((val.logo == null)?"https://ui-avatars.com/api/?name="+val.company_name.replace(/ /g, '+'):'account/uploads/'+val.logo)+'" alt="" style="width: 64px; height: 64px;display: inline-block;border-radius: 50%;margin-top: 5px;margin-bottom: 15px;">'+
                        '</div>'+
                        '<div class="job-details">'+
                          '<h3>'+val.job_name+'</h3>'+
                          '<span class="company-neme">'+
                            val.company_name+
                          '</span>'+
                        '</div>'+
                      '</div>'+
                      '<div class="col-lg-2 col-md-2 col-xs-12 text-center">'+
                        '<span class="btn-open">'+
                        val.currency+currencyFormat(val.salary) +
                        '</span>'+
                      '</div>'+
                      '<div class="col-lg-2 col-md-2 col-xs-12 text-right">'+
                      '<div class="location">'+
                        '<i class="lni-map-marker"></i>'+ val.job_location +
                      '</div>'+
                      '</div>'+
                      '<div class="col-lg-2 col-md-2 col-xs-12 text-right">'+
                        '<span class="btn-full-time">'+val.job_type+'</span>'+
                      '</div>'+
                      '<div class="col-lg-2 col-md-2 col-xs-12 text-right">'+
                        '<span class="btn-apply">View Job</span>'+
                      '</div>'+
                    '</div>'+
                  '</a>';
                  
                  });
        let LastLast =  "show_jobs_and_jobseekers_by_categories(\'"+category+"\',\'"+(limitPerPage*Math.floor(numberOfItems/limitPerPage))+"\',\'"+(numberOfItems)+"\')";
        (numberOfItems <= limitPerPage || numberOfItems == end)?(Next = 'disabled'):(numberOfItems < end+limitPerPage)? (forward = "show_jobs_and_jobseekers_by_categories(\'"+category+"\',\'"+(beg+limitPerPage)+"\',\'"+numberOfItems+"\')"):(forward = "show_jobs_and_jobseekers_by_categories(\'"+category+"\',\'"+(beg+limitPerPage)+"\',\'"+(end+limitPerPage)+"\')"); 
        (beg == 0 && (end == numberOfItems || end == limitPerPage))? (Prev = 'disabled',Backward = "show_jobs_and_jobseekers_by_categories(\'"+category+"\',\'"+(beg)+"\',\'"+(end)+"\')"):(beg != 0 && end != numberOfItems)?(Backward = "show_jobs_and_jobseekers_by_categories(\'"+category+"\',\'"+(beg-limitPerPage)+"\',\'"+(end-limitPerPage)+"\')"): (Backward = "show_jobs_and_jobseekers_by_categories(\'"+category+"\',\'"+(beg-limitPerPage)+"\',\'"+(numberOfItems-(numberOfItems%limitPerPage))+"\')");
        temp +='<!-- Start Pagination -->'+
                    '<ul class="pagination">' +             
                    ' <li class="active"><a href="javascript:void(0)" class="btn-prev" onclick=" show_jobs_and_jobseekers_by_categories(\''+category+'\',0,4)"><i class="lni-angle-left"></i> First</a></li>'+
                      '<li class="active"><a href="javascript:void(0)" class="btn-next" onclick="'+Backward+'">Prev <i class="lni-angle-right"></i></a></li>'+
                      '<li class="active"><a href="javascript:void(0)" class="btn-next" onclick="'+forward+'">Next <i class="lni-angle-right"></i></a></li>'+
                      '<li class="active"><a href="javascript:void(0)" class="btn-next" onclick="'+LastLast+'">Last <i class="lni-angle-right"></i></a></li>'+
                    '</ul>'+
                    '<!-- End Pagination -->';
                    
                  ' </div>'+
                  '</div>'+
                '</div>'+
              '</section>'+
              '<!-- Job Browse Section End -->';
              $(document).ready(()=>{
                $('header .intro-landing').remove();
                $('.content-section').empty().append(temp);
              });
                
          }
          else{
            let message =
            '<!-- Page Header Start -->'+
            '<div class="page-header">'+
              '<div class="container">'+
                '<div class="row">'+        
                  '<div class="col-lg-12">'+
                    '<div class="inner-header">'+
                      '<h3>Browse Job</h3>'+
                    '</div>'+
                  '</div>'+
                '</div>'+
              '</div>'+
            '</div>'+
            '<!-- Page Header End -->'+   
            '<h4 class="text-center">No Jobs available for '+category +' category.</h4>';
            $(document).ready(function(){
              // $('.search-job-cat').remove();
              $('header .intro-landing').remove();
              $('.content-section').empty().prepend(message);
            }); 
          }
          
        },
        error: function(err){
         console.log("======error function jobs by category========");
         console.log(err.responseText);
        }
       });

    
    }

    function filterJobsCategory(category,start,finish){
      let job = $('#categoryJobName').val();
      let location = $('#categoryJobLocation').val();
      let temp = '';
      let beg ='';
      let end ='';
      let numberOfItems = '';
      let totalPages = '';
      let forward = '';
      let Backward = '';
      let Prev = '';
      let Next = '';
      let job_cat = '';
      
      if(start !== undefined && finish !== undefined){ beg = start; end = finish;}else{ beg = 0; end = 4;}
      $.ajax({
        method: "GET",
        url: "account/get.php/jobseeker/search_jobs_categories",
        dataType: "json",
        data:{'category':category,'job':job,'location':location},
        success: function(data){
          numberOfItems = data.length;
          limitPerPage = 4;
          totalPages = Math.round(numberOfItems/limitPerPage);
          if(data != 400){
            temp +='<!-- Page Header Start -->'+
            '<div class="page-header">'+
              '<div class="container">'+
                '<div class="row">'+        
                  '<div class="col-lg-12">'+
                    '<div class="inner-header">'+
                      '<h3>Browse '+ category +' Jobs</h3>'+
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
                    '<div class="wrap-search-filter row search-job-cat">'+
                      '<div class="col-lg-5 col-md-5 col-xs-12">'+
                        '<input type="text" class="form-control" id="categoryJobName" placeholder="Job name">'+
                      '</div>'+
                      '<div class="col-lg-5 col-md-5 col-xs-12">'+
                        '<input type="text" class="form-control" id="categoryJobLocation" placeholder="Location">'+
                      '</div>'+
                      '<div class="col-lg-2 col-md-2 col-xs-12">'+
                        '<button type="submit" class="btn btn-common float-right" onclick="filterJobsCategory(\''+category+'\');">Filter</button>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                  '<div class="col-lg-12 col-md-12 col-xs-12 job-category">';
               $.each(data.slice(beg,end),function(i,val){
                temp +='<a class="job-listings" onclick="show_job_details(\''+val.job_id+'\',\''+val.company_name+'\');" style="cursor: pointer;">'+
                    '<div class="row">'+
                      '<div class="col-lg-4 col-md-4 col-xs-12">'+
                        '<div class="job-company-logo">'+
                          '<img src="'+((val.logo == null)?"https://ui-avatars.com/api/?name="+val.company_name.replace(/ /g, '+'):'account/uploads/'+val.logo)+'" alt="" style="width: 64px; height: 64px;display: inline-block;border-radius: 50%;margin-top: 5px;margin-bottom: 15px;">'+
                        '</div>'+
                        '<div class="job-details">'+
                          '<h3>'+val.job_name+'</h3>'+
                          '<span class="company-neme">'+
                            val.company_name+
                          '</span>'+
                        '</div>'+
                      '</div>'+
                      '<div class="col-lg-2 col-md-2 col-xs-12 text-center">'+
                        '<span class="btn-open">'+
                        val.currency+currencyFormat(val.salary) +
                        '</span>'+
                      '</div>'+
                      '<div class="col-lg-2 col-md-2 col-xs-12 text-right">'+
                      '<div class="location">'+
                        '<i class="lni-map-marker"></i>'+ val.job_location +
                      '</div>'+
                      '</div>'+
                      '<div class="col-lg-2 col-md-2 col-xs-12 text-right">'+
                        '<span class="btn-full-time">'+val.job_type+'</span>'+
                      '</div>'+
                      '<div class="col-lg-2 col-md-2 col-xs-12 text-right">'+
                        '<span class="btn-apply">View Job</span>'+
                      '</div>'+
                    '</div>'+
                  '</a>';
                  
                  });
        let LastLast =  "filterJobsCategory(\'"+category+"\',\'"+(limitPerPage*Math.floor(numberOfItems/limitPerPage))+"\',\'"+(numberOfItems)+"\')";
        (numberOfItems <= limitPerPage || numberOfItems == end)?(Next = 'disabled'):(numberOfItems < end+limitPerPage)? (forward = "filterJobsCategory(\'"+category+"\',\'"+(beg+limitPerPage)+"\',\'"+numberOfItems+"\')"):(forward = "filterJobsCategory(\'"+category+"\',\'"+(beg+limitPerPage)+"\',\'"+(end+limitPerPage)+"\')"); 
        (beg == 0 && (end == numberOfItems || end == limitPerPage))? (Prev = 'disabled',Backward = "filterJobsCategory(\'"+category+"\',\'"+(beg)+"\',\'"+(end)+"\')"):(beg != 0 && end != numberOfItems)?(Backward = "filterJobsCategory(\'"+category+"\',\'"+(beg-limitPerPage)+"\',\'"+(end-limitPerPage)+"\')"): (Backward = "filterJobsCategory(\'"+category+"\',\'"+(beg-limitPerPage)+"\',\'"+(numberOfItems-(numberOfItems%limitPerPage))+"\')");
        temp +='<!-- Start Pagination -->'+
                    '<ul class="pagination">' +             
                    ' <li class="active"><a href="javascript:void(0)" class="btn-prev" onclick=" filterJobsCategory(\''+category+'\',0,4)"><i class="lni-angle-left"></i> First</a></li>'+
                      '<li class="active"><a href="javascript:void(0)" class="btn-next" onclick="'+Backward+'">Prev <i class="lni-angle-right"></i></a></li>'+
                      '<li class="active"><a href="javascript:void(0)" class="btn-next" onclick="'+forward+'">Next <i class="lni-angle-right"></i></a></li>'+
                      '<li class="active"><a href="javascript:void(0)" class="btn-next" onclick="'+LastLast+'">Last <i class="lni-angle-right"></i></a></li>'+
                    '</ul>'+
                    '<!-- End Pagination -->';
                    
                  ' </div>'+
                  '</div>'+
                '</div>'+
              '</section>'+
              '<!-- Job Browse Section End -->';
              $(document).ready(()=>{
                $('header .intro-landing').remove();
                $('.content-section').empty().append(temp);
              });
                
          }
          else{
            let message =
            '<!-- Page Header Start -->'+
            '<div class="page-header">'+
              '<div class="container">'+
                '<div class="row">'+        
                  '<div class="col-lg-12">'+
                    '<div class="inner-header">'+
                      '<h3>Browse Job</h3>'+
                    '</div>'+
                  '</div>'+
                '</div>'+
              '</div>'+
            '</div>'+
            '<!-- Page Header End -->'+   
            '<h4 class="text-center">No Jobs available for '+category +' category.</h4>';
            $(document).ready(function(){
              // $('.search-job-cat').remove();
              $('header .intro-landing').remove();
              $('.content-section').empty().prepend(message);
            }); 
          }
          
        },
        error: function(err){
         console.log("======error function jobs by category========");
         console.log(err.responseText);
        }
       });


    }

    function browse_all_featured_jobs(start,finish){
      let beg ='';
      let end ='';
      let numberOfItems = '';
      let totalPages = '';
      let forward = '';
      let Backward = '';
      let Prev = '';
      let Next = '';
      let temp = '';
      let back = 'allfeaturedjobs';

      if(start !== undefined && finish !== undefined){ beg = start; end = finish;}else{ beg = 0; end = 4;}
      $.ajax({
        method: "POST",
        url: "account/get.php/company/featured_jobs",
        dataType: "json",
        success: function(data){
          numberOfItems = data.length;
          limitPerPage = 4;
          totalPages = Math.round(numberOfItems/limitPerPage);
          if(data != 400){
            temp +='<!-- Page Header Start -->'+
            '<div class="page-header">'+
              '<div class="container">'+
                '<div class="row">'+        
                  '<div class="col-lg-12">'+
                    '<div class="inner-header">'+
                      '<h3>Browse Featured Jobs</h3>'+
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
                        '<input type="text" class="form-control" id="featured_jobName" placeholder="Job Name">'+
                      '</div>'+
                      '<div class="col-lg-5 col-md-5 col-xs-12">'+
                        '<input type="text" class="form-control" id="featured_jobLocation" placeholder="Job Location">'+
                      '</div>'+
                      '<div class="col-lg-2 col-md-2 col-xs-12">'+
                        '<button type="submit" class="btn btn-common float-right" onclick="featuredJobSearch();">Filter</button>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                  '<div class="col-lg-12 col-md-12 col-xs-12">'+
                  '<a href="index.php" class="btn btn-danger btn-block" style="cursor: pointer;"><i class="fa fa-arrow-left"> Back </i></a>'
                  '</div>'+
                  '<div class="col-lg-12 col-md-12 col-xs-12 featured-jobs">';
                  $.each(data.slice(beg,end),function(i,val){
                    temp +='<a class="job-listings" onclick="show_job_details(\''+val.job_id+'\',\''+val.company_name+'\',\''+val.currency+'\',\''+back+'\');" style="cursor: pointer;">'+
                    '<div class="row">'+
                      '<div class="col-lg-4 col-md-4 col-xs-12">'+
                        '<div class="job-company-logo">'+
                          '<img src="'+((val.logo == null)?"https://ui-avatars.com/api/?name="+val.company_name.replace(/ /g, '+'):'account/uploads/'+val.logo)+'" alt="" class="logo-img">'+
                        '</div>'+
                        '<div class="job-details">'+
                          '<h3>'+val.job_name+'</h3>'+
                          '<span class="company-neme">'+
                            val.company_name+
                          '</span>'+
                        '</div>'+
                      '</div>'+
                      '<div class="col-lg-2 col-md-2 col-xs-12 text-center">'+
                        '<span class="btn-open">'+
                        val.currency+currencyFormat(val.salary) +
                        '</span>'+
                      '</div>'+
                      '<div class="col-lg-2 col-md-2 col-xs-12 text-right">'+
                      '<div class="location">'+
                        '<i class="lni-map-marker"></i>'+ val.job_location +
                      '</div>'+
                      '</div>'+
                      '<div class="col-lg-2 col-md-2 col-xs-12 text-right">'+
                        '<span class="btn-full-time">'+val.job_type+'</span>'+
                      '</div>'+
                      '<div class="col-lg-2 col-md-2 col-xs-12 text-right">'+
                        '<span class="btn-apply">View Job</span>'+
                      '</div>'+
                    '</div>'+
                  '</a>';
                  
                  });
        let LastLast =  "browse_all_featured_jobs(\'"+(limitPerPage*Math.floor(numberOfItems/limitPerPage))+"\',\'"+(numberOfItems)+"\')";
        (numberOfItems <= limitPerPage || numberOfItems == end)?(Next = 'disabled'):(numberOfItems < end+limitPerPage)? (forward = "browse_all_featured_jobs(\'"+(beg+limitPerPage)+"\',\'"+numberOfItems+"\')"):(forward = "browse_all_featured_jobs(\'"+(beg+limitPerPage)+"\',\'"+(end+limitPerPage)+"\')"); 
        (beg == 0 && (end == numberOfItems || end == limitPerPage))? (Prev = 'disabled',Backward = "browse_all_featured_jobs(\'"+(beg)+"\',\'"+(end)+"\')"):(beg != 0 && end != numberOfItems)?(Backward = "browse_all_featured_jobs(\'"+(beg-limitPerPage)+"\',\'"+(end-limitPerPage)+"\')"): (Backward = "browse_all_featured_jobs(\'"+(beg-limitPerPage)+"\',\'"+(numberOfItems-(numberOfItems%limitPerPage))+"\')");
                  temp +='<!-- Start Pagination -->'+
                    '<ul class="pagination">' +             
                    ' <li class="active"><a href="javascript:void(0)" class="btn-prev" onclick=" browse_all_featured_jobs(0,4)"><i class="lni-angle-left"></i> First</a></li>'+
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
            $('header .intro-landing').remove();
            $('.content-section').empty().append(temp);
          });
        },
        error: function(err){
         console.log("======error function browse featured jobs========");
         console.log(err.responseText);
        }
       });

    }

    function featuredJobSearch(start,finish){
      let beg ='';
      let end ='';
      let numberOfItems = '';
      let totalPages = '';
      let forward = '';
      let Backward = '';
      let Prev = '';
      let Next = '';
      let temp = '';
      let job = $('#featured_jobName').val();
      let location = $('#featured_jobLocation').val();
      let back = 'allfeaturedjobs';
      if(job === '' && location === ''){
        $.notify('nothing to search for','error');
      }
      else{
        if(start !== undefined && finish !== undefined){ beg = start; end = finish;}else{ beg = 0; end = 4;}
        $.ajax({
          method:"GET",
          url:"account/get.php/jobseeker/search_featured_jobs",
          data: {'job':job,'location':location},
          dataType:"json",
          success: function(data){
            temp +='<!-- Page Header Start -->'+
            '<div class="page-header">'+
              '<div class="container">'+
                '<div class="row">'+        
                  '<div class="col-lg-12">'+
                    '<div class="inner-header">'+
                      '<h3>Browse Featured Jobs</h3>'+
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
                        '<input type="text" class="form-control" id="featured_jobName" placeholder="Job Name">'+
                      '</div>'+
                      '<div class="col-lg-5 col-md-5 col-xs-12">'+
                        '<input type="text" class="form-control" id="featured_jobLocation" placeholder="Job Location">'+
                      '</div>'+
                      '<div class="col-lg-2 col-md-2 col-xs-12">'+
                        '<button type="submit" class="btn btn-common float-right" onclick="featuredJobSearch();">Filter</button>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                  '<div class="col-lg-12 col-md-12 col-xs-12">'+
                  '<a href="index.php" class="btn btn-danger btn-block" style="cursor: pointer;"><i class="fa fa-arrow-left"> Back </i></a>'
                  '</div>'+
                  '<div class="col-lg-12 col-md-12 col-xs-12 featured-jobs">';
            $.each(data.slice(beg,end),function(i,val){
              temp +='<a class="job-listings" onclick="show_job_details(\''+val.job_id+'\',\''+val.company_name+'\',\''+val.currency+'\',\''+back+'\');" style="cursor: pointer;">'+
              '<div class="row">'+
                '<div class="col-lg-4 col-md-4 col-xs-12">'+
                  '<div class="job-company-logo">'+
                    '<img src="account/uploads/'+((val.logo == "" || val.logo == null)?"default.jpg":val.logo)+'" alt="" style="width: 64px; height: 64px;display: inline-block;border-radius: 50%;margin-top: 5px;margin-bottom: 15px;">'+
                  '</div>'+
                  '<div class="job-details">'+
                    '<h3>'+val.job_name+'</h3>'+
                    '<span class="company-neme">'+
                      val.company_name+
                    '</span>'+
                  '</div>'+
                '</div>'+
                '<div class="col-lg-2 col-md-2 col-xs-12 text-center">'+
                  '<span class="btn-open">'+
                  val.currency+currencyFormat(val.salary) +
                  '</span>'+
                '</div>'+
                '<div class="col-lg-2 col-md-2 col-xs-12 text-right">'+
                '<div class="location">'+
                  '<i class="lni-map-marker"></i>'+ val.job_location +
                '</div>'+
                '</div>'+
                '<div class="col-lg-2 col-md-2 col-xs-12 text-right">'+
                  '<span class="btn-full-time">'+val.job_type+'</span>'+
                '</div>'+
                '<div class="col-lg-2 col-md-2 col-xs-12 text-right">'+
                  '<span class="btn-apply">View Job</span>'+
                '</div>'+
              '</div>'+
            '</a>';
            
            });

            let LastLast =  "featuredJobSearch(\'"+(limitPerPage*Math.floor(numberOfItems/limitPerPage))+"\',\'"+(numberOfItems)+"\')";
            (numberOfItems <= limitPerPage || numberOfItems == end)?(Next = 'disabled'):(numberOfItems < end+limitPerPage)? (forward = "featuredJobSearch(\'"+(beg+limitPerPage)+"\',\'"+numberOfItems+"\')"):(forward = "featuredJobSearch(\'"+(beg+limitPerPage)+"\',\'"+(end+limitPerPage)+"\')"); 
            (beg == 0 && (end == numberOfItems || end == limitPerPage))? (Prev = 'disabled',Backward = "featuredJobSearch(\'"+(beg)+"\',\'"+(end)+"\')"):(beg != 0 && end != numberOfItems)?(Backward = "featuredJobSearch(\'"+(beg-limitPerPage)+"\',\'"+(end-limitPerPage)+"\')"): (Backward = "featuredJobSearch(\'"+(beg-limitPerPage)+"\',\'"+(numberOfItems-(numberOfItems%limitPerPage))+"\')");
                      temp +='<!-- Start Pagination -->'+
                        '<ul class="pagination">' +             
                        ' <li class="active"><a href="javascript:void(0)" class="btn-prev" onclick=" featuredJobSearch(0,4)"><i class="lni-angle-left"></i> First</a></li>'+
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
            
            $(document).ready(()=>{
              $('header .intro-landing').remove();
              $('.content-section').empty().append(temp);
            });

          },
          error: function(err){
            console.log('errror searching: ', err.responseText);
          }
        });
      }
    }

    function browse_all_latest_jobs(start,finish){
      let beg ='';
      let end ='';
      let numberOfItems = '';
      let totalPages = '';
      let forward = '';
      let Backward = '';
      let Prev = '';
      let Next = '';
      let temp = '';
      let back = 'alllatestjobs';

      if(start !== undefined && finish !== undefined){ beg = start; end = finish;}else{ beg = 0; end = 4;}
      $.ajax({
        method: "POST",
        url: "account/get.php/company/latest_jobs",
        dataType: "json",
        success: function(data){
          numberOfItems = data.length;
          limitPerPage = 4;
          totalPages = Math.round(numberOfItems/limitPerPage);
          if(data != 400){
            temp +='<!-- Page Header Start -->'+
            '<div class="page-header">'+
              '<div class="container">'+
                '<div class="row">'+        
                  '<div class="col-lg-12">'+
                    '<div class="inner-header">'+
                      '<h3>Browse Latest Jobs</h3>'+
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
                        '<input type="text" class="form-control" id="latest_JobName" placeholder="Job Name">'+
                      '</div>'+
                      '<div class="col-lg-5 col-md-5 col-xs-12">'+
                        '<input type="text" class="form-control" id="latest_JobLocation" placeholder="Location">'+
                      '</div>'+
                      '<div class="col-lg-2 col-md-2 col-xs-12">'+
                        '<button type="submit" class="btn btn-common float-right" onclick="latestJobSearch();">Filter</button>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                  '<div class="col-lg-12 col-md-12 col-xs-12">'+
                  '<a href="index.php" class="btn btn-danger btn-block" style="cursor: pointer;"><i class="fa fa-arrow-left"> Back </i></a>'
                  '</div>'+
                  '<div class="col-lg-12 col-md-12 col-xs-12">';
                  $.each(data.slice(beg,end),function(i,val){
                    temp +='<a class="job-listings" onclick="show_job_details(\''+val.job_id+'\',\''+val.company_name+'\',\''+val.currency+'\',\''+back+'\');" style="cursor: pointer;">'+
                    '<div class="row">'+
                      '<div class="col-lg-4 col-md-4 col-xs-12">'+
                        '<div class="job-company-logo">'+
                          '<img src="'+((val.logo == null)?"https://ui-avatars.com/api/?name="+val.company_name.replace(/ /g, '+'):'account/uploads/'+val.logo)+'" alt="" class="logo-img">'+
                        '</div>'+
                        '<div class="job-details">'+
                          '<h3>'+val.job_name+'</h3>'+
                          '<span class="company-neme">'+
                            val.company_name+
                          '</span>'+
                        '</div>'+
                      '</div>'+
                      '<div class="col-lg-2 col-md-2 col-xs-12 text-center">'+
                        '<span class="btn-open">'+
                         val.currency+currencyFormat(val.salary) +
                        '</span>'+
                      '</div>'+
                      '<div class="col-lg-2 col-md-2 col-xs-12 text-right">'+
                      '<div class="location">'+
                        '<i class="lni-map-marker"></i>'+ val.job_location +
                      '</div>'+
                      '</div>'+
                      '<div class="col-lg-2 col-md-2 col-xs-12 text-right">'+
                        '<span class="btn-full-time">'+val.job_type+'</span>'+
                      '</div>'+
                      '<div class="col-lg-2 col-md-2 col-xs-12 text-right">'+
                        '<span class="btn-apply">View Job</span>'+
                      '</div>'+
                    '</div>'+
                  '</a>';
                  
                  });
        let LastLast =  "browse_all_latest_jobs(\'"+(limitPerPage*Math.floor(numberOfItems/limitPerPage))+"\',\'"+(numberOfItems)+"\')";
        (numberOfItems <= limitPerPage || numberOfItems == end)?(Next = 'disabled'):(numberOfItems < end+limitPerPage)? (forward = "browse_all_latest_jobs(\'"+(beg+limitPerPage)+"\',\'"+numberOfItems+"\')"):(forward = "browse_all_latest_jobs(\'"+(beg+limitPerPage)+"\',\'"+(end+limitPerPage)+"\')"); 
        (beg == 0 && (end == numberOfItems || end == limitPerPage))? (Prev = 'disabled',Backward = "browse_all_latest_jobs(\'"+(beg)+"\',\'"+(end)+"\')"):(beg != 0 && end != numberOfItems)?(Backward = "browse_all_latest_jobs(\'"+(beg-limitPerPage)+"\',\'"+(end-limitPerPage)+"\')"): (Backward = "browse_all_latest_jobs(\'"+(beg-limitPerPage)+"\',\'"+(numberOfItems-(numberOfItems%limitPerPage))+"\')");
                  temp +='<!-- Start Pagination -->'+
                    '<ul class="pagination">' +             
                    ' <li class="active"><a href="javascript:void(0)" class="btn-prev" onclick=" browse_all_latest_jobs(0,4)"><i class="lni-angle-left"></i> First</a></li>'+
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
            $('header .intro-landing').remove();
            $('.content-section').empty().append(temp);
          });
        },
        error: function(err){
         console.log("======error function browse featured jobs========");
         console.log(err.responseText);
        }
       });

    
    }

    function latestJobSearch(start,finish){
      console.log('searching latest jobs...');
      let beg ='';
      let end ='';
      let numberOfItems = '';
      let totalPages = '';
      let forward = '';
      let Backward = '';
      let Prev = '';
      let Next = '';
      let temp = '';
      let job = $('#latest_JobName').val();
      let location = $('#latest_JobLocation').val();
      let back = 'alllatestjobs';
      if(job === '' && location === ''){
        $.notify('nothing to search for','error');
      }
      else{
        if(start !== undefined && finish !== undefined){ beg = start; end = finish;}else{ beg = 0; end = 4;}
        $.ajax({
          method:"GET",
          url:"account/get.php/jobseeker/search_latest_jobs",
          data: {'job':job,'location':location},
          dataType:"json",
          success: function(data){
            temp +='<!-- Page Header Start -->'+
            '<div class="page-header">'+
              '<div class="container">'+
                '<div class="row">'+        
                  '<div class="col-lg-12">'+
                    '<div class="inner-header">'+
                      '<h3>Browse Latest Jobs</h3>'+
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
                        '<input type="text" class="form-control" id="latest_jobName" placeholder="Job Name">'+
                      '</div>'+
                      '<div class="col-lg-5 col-md-5 col-xs-12">'+
                        '<input type="text" class="form-control" id="latest_jobLocation" placeholder="Job Location">'+
                      '</div>'+
                      '<div class="col-lg-2 col-md-2 col-xs-12">'+
                        '<button type="submit" class="btn btn-common float-right" onclick="latestJobSearch();">Filter</button>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                  '<div class="col-lg-12 col-md-12 col-xs-12">'+
                  '<a href="index.php" class="btn btn-danger btn-block" style="cursor: pointer;"><i class="fa fa-arrow-left"> Back </i></a>'
                  '</div>'+
                  '<div class="col-lg-12 col-md-12 col-xs-12">';
            $.each(data.slice(beg,end),function(i,val){
              temp +='<a class="job-listings" onclick="show_job_details(\''+val.job_id+'\',\''+val.company_name+'\',\''+val.currency+'\',\''+back+'\');" style="cursor: pointer;">'+
              '<div class="row">'+
                '<div class="col-lg-4 col-md-4 col-xs-12">'+
                  '<div class="job-company-logo">'+
                    '<img src="account/uploads/'+((val.logo == "" || val.logo == null)?"default.jpg":val.logo)+'" alt="" style="width: 64px; height: 64px;display: inline-block;border-radius: 50%;margin-top: 5px;margin-bottom: 15px;">'+
                  '</div>'+
                  '<div class="job-details">'+
                    '<h3>'+val.job_name+'</h3>'+
                    '<span class="company-neme">'+
                      val.company_name+
                    '</span>'+
                  '</div>'+
                '</div>'+
                '<div class="col-lg-2 col-md-2 col-xs-12 text-center">'+
                  '<span class="btn-open">'+
                  val.currency+currencyFormat(val.salary) +
                  '</span>'+
                '</div>'+
                '<div class="col-lg-2 col-md-2 col-xs-12 text-right">'+
                '<div class="location">'+
                  '<i class="lni-map-marker"></i>'+ val.job_location +
                '</div>'+
                '</div>'+
                '<div class="col-lg-2 col-md-2 col-xs-12 text-right">'+
                  '<span class="btn-full-time">'+val.job_type+'</span>'+
                '</div>'+
                '<div class="col-lg-2 col-md-2 col-xs-12 text-right">'+
                  '<span class="btn-apply">View Job</span>'+
                '</div>'+
              '</div>'+
            '</a>';
            
            });

            let LastLast =  "latestJobSearch(\'"+(limitPerPage*Math.floor(numberOfItems/limitPerPage))+"\',\'"+(numberOfItems)+"\')";
            (numberOfItems <= limitPerPage || numberOfItems == end)?(Next = 'disabled'):(numberOfItems < end+limitPerPage)? (forward = "latestJobSearch(\'"+(beg+limitPerPage)+"\',\'"+numberOfItems+"\')"):(forward = "latestJobSearch(\'"+(beg+limitPerPage)+"\',\'"+(end+limitPerPage)+"\')"); 
            (beg == 0 && (end == numberOfItems || end == limitPerPage))? (Prev = 'disabled',Backward = "latestJobSearch(\'"+(beg)+"\',\'"+(end)+"\')"):(beg != 0 && end != numberOfItems)?(Backward = "latestJobSearch(\'"+(beg-limitPerPage)+"\',\'"+(end-limitPerPage)+"\')"): (Backward = "latestJobSearch(\'"+(beg-limitPerPage)+"\',\'"+(numberOfItems-(numberOfItems%limitPerPage))+"\')");
                      temp +='<!-- Start Pagination -->'+
                        '<ul class="pagination">' +             
                        ' <li class="active"><a href="javascript:void(0)" class="btn-prev" onclick=" latestJobSearch(0,4)"><i class="lni-angle-left"></i> First</a></li>'+
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
            
            $(document).ready(()=>{
              $('header .intro-landing').remove();
              $('.content-section').empty().append(temp);
            });

          },
          error: function(err){
            console.log('errror searching: ', err.responseText);
          }
        });
      }
    }


    function show_blog_details(blog_id,back){
      let blog_details = '';
      $.ajax({
        method: "POST",
        url: "account/get.php/company/get_blog_details",
        dataType: "json",
        data: {'blog_id':blog_id},
        success: function(data){
          if(data != 400){
            blog_details +=
            '<div class="page-header">'+
              '<div class="container">'+
                '<div class="row">'+         
                  '<div class="col-lg-12">'+
                    '<div class="inner-header">'+
                      '<h3>Single Post</h3>'+
                    '</div>'+
                  '</div>'+
                '</div>'+
              '</div>'+
            '</div>'+
            '<div id="content">'+
            '<div class="container">'+
              '<div class="row blog_details">'+
                '<!-- Start Blog Posts -->'+
              '<div class="col-lg-8 col-md-12 col-xs-12 post-section">'+
                '<div class="blog-post">'+
                '<!-- Post thumb -->'+
                '<div class="post-thumb">'+
                  '<a href="#"><img class="img-fulid" src="account/uploads/'+((data[0].blog_image == "" || data[0].blog_image == null)?"default.jpg":data[0].blog_image)+'" alt="" style="width: 730px; height: 344px;"></a>'+
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
                  '<p>'+ data[0].blog_content +'</p>';
                  if(back === 'blogLanding'){
                    blog_details +='<a href="index.php" class="btn btn-danger">Back</a>';
                  }
                  if(back === 'blogposts'){
                    blog_details +='<a href="#" class="btn btn-danger" onclick="show_blog_posts();">Back</a>';
                  }
                                   
                  blog_details +='</div>'+
                '<!-- Post Content -->'+
              '</div>'+
              '<!-- End Post --></div>'+
              
                '</div>'+
            '</div>'+
            '</div>'+
          '</div>'+
          '<!-- End Content -->';       
          }
          $(document).ready(function(){
            $('header .intro-landing').remove();
            $('.content-section').empty().append(blog_details);
            $('.blog_details').append(blogSideBar());
          });
        },
        error: function(err){
          console.log(err.responseText);
        }
      });

      
    }

    function show_blog_posts(start,finish){
      let posts = '';
      let beg ='';
      let end ='';
      let numberOfItems = '';
      let totalPages = '';
      let forward = '';
      let Backward = '';
      let Prev = '';
      let Next = '';
      let temp = '';
      let back = 'blogposts';

      if(start !== undefined && finish !== undefined){ beg = start; end = finish;}else{ beg = 0; end = 3;}
      $.ajax({
        method: "GET",
        url: "account/get.php/company/retrieve_all_blogs",
        dataType: "json",
        success: function(data){
          numberOfItems = data.length;
          limitPerPage = 3;
          totalPages = Math.round(numberOfItems/limitPerPage);
          if(data != 400){
            posts +='<!-- Page Header Start -->'+
            '<div class="page-header">'+
              '<div class="container">'+
                '<div class="row"> '+        
                  '<div class="col-lg-12">'+
                    '<div class="inner-header">'+
                      '<h3>All blog Posts</h3>'+
                    '</div>'+
                  '</div>'+
                '</div>'+
              '</div>'+
            '</div>'+
            '<!-- Page Header End -->'+
            '<!-- Start Content -->'+
            '<div id="content">'+
              '<div class="container">'+
                '<div class="row blogs">'+
                  '<!-- Start Blog Posts -->'+
                  '<div class="col-lg-8 col-md-12 col-xs-12 post-section">';
                  $.each(data.slice(0,3), function(i,val){
                    posts +='<!-- Start Post -->'+
                      '<div class="blog-post">'+
                        '<!-- Post thumb -->'+
                          '<div class="post-thumb">'+
                          '<a href="#"><img class="img-fulid" src="account/uploads/'+((val.blog_image == "" || val.blog_image == null)?"default.jpg":val.blog_image)+'" alt="" class="blog-thumb"></a>'+
                          '<div class="hover-wrap">'+
                      '</div>'+
                  '</div>'+
                  '<!-- End Post post-thumb -->'+
    
                  '<!-- Post Content -->'+
                  '<div class="post-content">'+                    
                    '<h3 class="post-title"><a href="#">'+ val.blog_title+'</a></h3>'+
                    '<div class="meta">'+                   
                      '<span class="meta-part"><a onclick="show_blog_details(\''+val.blog_id+'\',\''+back+'\');" style="cursor: pointer;"><i class="lni-user"></i>'+'By '+ val.blog_publisher +'</a></span>'+
                      '<span class="meta-part"><i class="lni-calendar"></i><a onclick="show_blog_details(\''+val.blog_id+'\',\''+back+'\');" style="cursor: pointer;">'+ val.date_posted +'</a></span>'+                   
                    '</div>';
                    if($.trim(val.blog_content).length > 100){
                      let subcontent = val.blog_content.substring(0,100);
                      posts +='<p>'+subcontent+'...</p>';
                    }
                    else{
                      posts +='<p>'+val.blog_content+'......</p>';
                    }
                    posts +='<a class="btn btn-common" onclick="show_blog_details(\''+val.blog_id+'\',\''+back+'\');" style="cursor: pointer;">Read More</a>'+
                  '</div>'+
                  '<!-- Post Content -->'+
    
                '</div>'+
                '<!-- End Post -->';
                  });   
                    
        let LastLast =  "show_blog_posts(\'"+(limitPerPage*Math.floor(numberOfItems/limitPerPage))+"\',\'"+(numberOfItems)+"\')";
        (numberOfItems <= limitPerPage || numberOfItems == end)?(Next = 'disabled'):(numberOfItems < end+limitPerPage)? (forward = "show_blog_posts(\'"+(beg+limitPerPage)+"\',\'"+numberOfItems+"\')"):(forward = "show_blog_posts(\'"+(beg+limitPerPage)+"\',\'"+(end+limitPerPage)+"\')"); 
        (beg == 0 && (end == numberOfItems || end == limitPerPage))? (Prev = 'disabled',Backward = "show_blog_posts(\'"+(beg)+"\',\'"+(end)+"\')"):(beg != 0 && end != numberOfItems)?(Backward = "show_blog_posts(\'"+(beg-limitPerPage)+"\',\'"+(end-limitPerPage)+"\')"): (Backward = "show_blog_posts(\'"+(beg-limitPerPage)+"\',\'"+(numberOfItems-(numberOfItems%limitPerPage))+"\')");
          posts +='<!-- Start Pagination -->'+
                '<ul class="pagination">'+              
                ' <li class="active"><a href="javascript:void(0)" class="btn-prev" onclick=" show_blog_posts(0,3)"><i class="lni-angle-left"></i> First</a></li>'+
                '<li class="active"><a href="javascript:void(0)" class="btn-next" onclick="'+Backward+'">Prev <i class="lni-angle-right"></i></a></li>'+
                '<li class="active"><a href="javascript:void(0)" class="btn-next" onclick="'+forward+'">Next <i class="lni-angle-right"></i></a></li>'+
                '<li class="active"><a href="javascript:void(0)" class="btn-next" onclick="'+LastLast+'">Last <i class="lni-angle-right"></i></a></li>'+
                '</ul>'+
                '<!-- End Pagination -->'+
              '</div>'+
              '<!-- End Blog Posts -->'+
    
            '</div>'+
          '</div>'+
        '</div>'+
        '<!-- End Content -->';

          }
          $(document).ready(()=>{
            $('header .intro-landing').remove();
            $('.content-section').empty().append(posts);
            $('.blogs').append(blogSideBar());
          });

        },
        error: function(err){
          console.log("Error blog posts :",err.responseText);
          
        } 
      });
    }

    function blog_catgories(){
      let blog_cat = '';
      $.ajax({
        method: "GET",
        url: "account/get.php/company/get_blog_categories",
        dataType: "json",
        success: function(data){
          if(data != 400){
            console.log("blog_cat :",data);
            blog_cat +='<!-- Categories Widget -->'+
                '<div class="widget blog-cat">'+
                  '<h5 class="widget-title">Categories</h5>'+
                  '<div class="widget-categories widget-box">'+
                    '<ul class="cat-list">';
                    $.each(data, function(i,cat){
                      blog_cat +='<li>'+
                        '<a onclick="show_posts_by_category(\''+cat.category+'\');" style="cursor: pointer;">'+cat.category +'<span class="num-posts">('+ cat.num_posts +')</span></a>'+                    
                      '</li>';
                    });
                    blog_cat +='</ul>'+
                  '</div>'+
                '</div>';
          }
          $(document).ready(function(){
            $('.aside').append(blog_cat);
          });
         
        },
        error: function(err){
          console.log("error blog_cat: ",err.responseText)
        }
      });
      
    }

    function show_recent_posts(){
      let recent_posts = ''
      $.ajax({
        method: "GET",
        url: "account/get.php/company/get_recent_posts",
        dataType: "json",
        success: function(data){
          if(data != 400){
            console.log("blog_cat :",data);
            recent_posts +='<!-- Popular Posts widget -->'+
                '<div class="widget">'+
                  '<h5 class="widget-title">Recent Post</h5>'+
                  '<div class="widget-popular-posts widget-box">'+
                    '<ul class="posts-list">';
                    $.each(data.slice(0,3), function(i,val){
                      recent_posts +='<li>'+
                      '<div class="widget-content">'+
                        '<a onclick="show_blog_details(\''+val.blog_id+'\');" style="cursor: pointer;">'+ val.blog_title +'</a>'+
                        '<span><i class="lni-calendar"></i>'+ val.date_posted +'</span>'+
                      '</div>'+
                      '<div class="clearfix"></div>'+
                    '</li>';
                    });
                    recent_posts +='</ul>'+
                  '</div>'+
                '</div>';
                
              }
              $(document).ready(function(){
                $('.aside').append(recent_posts);
              });
         
        },
        error: function(err){
          console.log("error recent posts: ",err.responseText)
        }
      });
    }

    function show_posts_by_category(category,start,finish){
      let posts = '';
      let beg ='';
      let end ='';
      let numberOfItems = '';
      let totalPages = '';
      let forward = '';
      let Backward = '';
      let Prev = '';
      let Next = '';
      let temp = '';

      if(start !== undefined && finish !== undefined){ beg = start; end = finish;}else{ beg = 0; end = 3;}
      $.ajax({
        method: "POST",
        url: "account/get.php/company/get_posts_by_category",
        dataType: "json",
        data: {'category':category},
        success: function(data){
          if(data != 400){
            console.log("blog_cat :",data);
            numberOfItems = data.length;
            limitPerPage = 3;
            totalPages = Math.round(numberOfItems/limitPerPage);
            $.each(data.slice(0,3), function(i,val){
              posts +='<!-- Start Post -->'+
                '<div class="blog-post">'+
                  '<!-- Post thumb -->'+
                    '<div class="post-thumb">'+
                    '<a href="#"><img class="img-fulid" src="account/uploads/'+((val.blog_image == "" || val.blog_image == null)?"default.jpg":val.blog_image)+'" alt="" style="width: 730px; height: 344px;"></a>'+
                    '<div class="hover-wrap">'+
                '</div>'+
            '</div>'+
            '<!-- End Post post-thumb -->'+

            '<!-- Post Content -->'+
            '<div class="post-content">'+                    
              '<h3 class="post-title"><a href="#">'+ val.blog_title+'</a></h3>'+
              '<div class="meta">'+                   
                '<span class="meta-part"><a onclick="show_blog_details(\''+val.blog_id+'\');" style="cursor: pointer;"><i class="lni-user"></i>'+'By '+ val.blog_publisher +'</a></span>'+
                '<span class="meta-part"><i class="lni-calendar"></i><a onclick="show_blog_details(\''+val.blog_id+'\');" style="cursor: pointer;">'+ val.date_posted +'</a></span>'+                   
              '</div>'+
              '<p>'+ val.blog_content +'</p>'+
              '<a class="btn btn-common" onclick="show_blog_details(\''+val.blog_id+'\');" style="cursor: pointer;">Read More</a>'+
            '</div>'+
            '<!-- Post Content -->'+

          '</div>'+
          '<!-- End Post -->';
            });   
              
  let LastLast =  "show_posts_by_category(\'"+(limitPerPage*Math.floor(numberOfItems/limitPerPage))+"\',\'"+(numberOfItems)+"\')";
  (numberOfItems <= limitPerPage || numberOfItems == end)?(Next = 'disabled'):(numberOfItems < end+limitPerPage)? (forward = "show_posts_by_category(\'"+(beg+limitPerPage)+"\',\'"+numberOfItems+"\')"):(forward = "show_posts_by_category(\'"+(beg+limitPerPage)+"\',\'"+(end+limitPerPage)+"\')"); 
  (beg == 0 && (end == numberOfItems || end == limitPerPage))? (Prev = 'disabled',Backward = "show_posts_by_category(\'"+(beg)+"\',\'"+(end)+"\')"):(beg != 0 && end != numberOfItems)?(Backward = "show_posts_by_category(\'"+(beg-limitPerPage)+"\',\'"+(end-limitPerPage)+"\')"): (Backward = "show_posts_by_category(\'"+(beg-limitPerPage)+"\',\'"+(numberOfItems-(numberOfItems%limitPerPage))+"\')");
    posts +='<!-- Start Pagination -->'+
          '<ul class="pagination">'+              
          ' <li class="active"><a href="javascript:void(0)" class="btn-prev" onclick=" show_posts_by_category(0,3)"><i class="lni-angle-left"></i> First</a></li>'+
          '<li class="active"><a href="javascript:void(0)" class="btn-next" onclick="'+Backward+'">Prev <i class="lni-angle-right"></i></a></li>'+
          '<li class="active"><a href="javascript:void(0)" class="btn-next" onclick="'+forward+'">Next <i class="lni-angle-right"></i></a></li>'+
          '<li class="active"><a href="javascript:void(0)" class="btn-next" onclick="'+LastLast+'">Last <i class="lni-angle-right"></i></a></li>'+
          '</ul>'+
          '<!-- End Pagination -->';
          $(document).ready(()=>{
            $('.post-section').empty().append(posts);
          });
    
          }         
        },
        error: function(err){
          console.log("error POST_BY_CATEGORY: ",err.responseText)
        }
      });
    }

    function blogSideBar(){
      let sidebar = '';

      sidebar +='<!--Sidebar-->'+
              '<aside id="sidebar" class="col-lg-4 col-md-12 col-xs-12 aside">'+
                '<!-- Search Widget -->'+
                '<div class="widget search-bar">'+
                  '<h5 class="widget-title">Search This Site</h5>'+
                  '<div class="widget-search widget-box">'+
                    '<form action="#">'+
                      '<input class="form-control search" type="search" placeholder="Enter your keyword" />'+
                      '<button class="search-btn" type="submit"><i class="lni-search"></i></button>'+
                    '</form>'+
                  '</div>'+
                '</div>'+
              '</aside>'+
              '<!--End sidebar-->';
              blog_catgories();
              show_recent_posts();           
            
             return sidebar;
    }

    function filterJobs(start,finish){
      let temp = '';
      let beg ='';
      let end ='';
      let numberOfItems = '';
      let totalPages = '';
      let forward = '';
      let Backward = '';
      let Prev = '';
      let Next = '';
      if(start !== undefined && finish !== undefined){ beg = start; end = finish;}else{ beg = 0; end = 3;}
      if($('#job_name').val() ==='' && $('#job_location').val() ===''){
        $.notify('There is nothing to search for','error');
      }else{
        $.ajax({
          method: "GET",
          url: "account/get.php/jobseeker/search_jobs",
          dataType: "json",
          data: {'job':$('#job_name').val(),'location':$('#job_location').val()},
          success: function(data){
            numberOfItems = data.length;
            limitPerPage = 6;
            totalPages = Math.round(numberOfItems/limitPerPage);
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
                      '<input type="text" class="form-control" id="job_name" placeholder="Job Name">'+
                    '</div>'+
                    '<div class="col-lg-5 col-md-5 col-xs-12">'+
                      '<input type="text" class="form-control" id="job_location" placeholder="Job location">'+
                    '</div>'+
                    '<div class="col-lg-2 col-md-2 col-xs-12">'+
                      '<button type="submit" class="btn btn-common float-right" id="filter_job" onclick="filterJobs();">Filter</button>'+
                    '</div>'+
                  '</div>'+
                '</div>'+
                '<div class="col-lg-12 col-md-12 col-xs-12 jobs">';
            $.each(data.slice(beg,end),function(i,val){
              temp +='<a class="job-listings" onclick="show_job_details(\''+val.job_id+'\',\''+val.company_name+'\');" style="cursor: pointer;">'+
              '<div class="row">'+
                '<div class="col-lg-4 col-md-4 col-xs-12">'+
                  '<div class="job-company-logo">'+
                    '<img src="account/uploads/'+((val.logo == "" || val.logo == null)?"default.jpg":val.logo)+'" alt="" style="width: 64px; height: 64px;display: inline-block;border-radius: 50%;margin-top: 5px;margin-bottom: 15px;">'+
                  '</div>'+
                  '<div class="job-details">'+
                    '<h3>'+val.job_name+'</h3>'+
                    '<span class="company-neme">'+
                      val.company_name+
                    '</span>'+
                  '</div>'+
                '</div>'+
                '<div class="col-lg-2 col-md-2 col-xs-12 text-center">'+
                  '<span class="btn-open">'+
                   val.currency+currencyFormat(val.salary) +
                  '</span>'+
                '</div>'+
                '<div class="col-lg-2 col-md-2 col-xs-12 text-right">'+
                '<div class="location">'+
                  '<i class="lni-map-marker"></i>'+ val.job_location +
                '</div>'+
                '</div>'+
                '<div class="col-lg-2 col-md-2 col-xs-12 text-right">'+
                  '<span class="btn-full-time">'+val.job_type+'</span>'+
                '</div>'+
                '<div class="col-lg-2 col-md-2 col-xs-12 text-right">'+
                  '<span class="btn-apply">View Job</span>'+
                '</div>'+
              '</div>'+
            '</a>';
            
            });
            let LastLast =  "filterJobs(\'"+(limitPerPage*Math.floor(numberOfItems/limitPerPage))+"\',\'"+(numberOfItems)+"\')";
  (numberOfItems <= limitPerPage || numberOfItems == end)?(Next = 'disabled'):(numberOfItems < end+limitPerPage)? (forward = "filterJobs(\'"+(beg+limitPerPage)+"\',\'"+numberOfItems+"\')"):(forward = "filterJobs(\'"+(beg+limitPerPage)+"\',\'"+(end+limitPerPage)+"\')"); 
  (beg == 0 && (end == numberOfItems || end == limitPerPage))? (Prev = 'disabled',Backward = "filterJobs(\'"+(beg)+"\',\'"+(end)+"\')"):(beg != 0 && end != numberOfItems)?(Backward = "filterJobs(\'"+(beg-limitPerPage)+"\',\'"+(end-limitPerPage)+"\')"): (Backward = "filterJobs(\'"+(beg-limitPerPage)+"\',\'"+(numberOfItems-(numberOfItems%limitPerPage))+"\')");
            temp +='<!-- Start Pagination -->'+
              '<ul class="pagination">' +             
              ' <li class="active"><a href="javascript:void(0)" class="btn-prev" onclick=" filterJobs(0,3)"><i class="lni-angle-left"></i> First</a></li>'+
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
            $(document).ready(()=>{
              $('header .intro-landing').remove();
              $('.content-section').empty().append(temp);
            })
          },
          error: function(err){
            console.log('error search jobs: ',err.responseText);
          }
        });
      }
      
    }
    // $('#searchEmployer').click(function(e){
    //   // e.preventDefault();
    //   console.log('searching for Employers triggered............');
    // });
    function filterEmployers(start,finish,e){
      
      let temp = '';
      let beg ='';
      let end ='';
      let numberOfItems = '';
      let totalPages = '';
      let forward = '';
      let Backward = '';
      let Prev = '';
      let Next = '';
      if(start !== undefined && finish !== undefined){ beg = start; end = finish;}else{ beg = 0; end = 6;}
      if($('#companyName').val() ==='' && $('#companyLocation').val() ===''){
        $.notify('There is nothing to search for','error');
      }else{
        $.ajax({
          method: "POST",
          url: "account/get.php/jobseeker/search_employers",
          dataType: "json",
          data: {'companyName':$('#companyName').val(),'companyAddress':$('#companyLocation').val()},
          success: function(data){
            numberOfItems = data.length;
            limitPerPage = 6;
            totalPages = Math.round(numberOfItems/limitPerPage);
        $.each(data.slice(beg,end), function(i,val){

          temp +='<div class="col-lg-4 col-md-6 col-xs-12">'+
           '<div class="job-featured" style="height: 165px;">'+
              '<div class="icon">'+
                '<img src="account/uploads/'+((val.logo == "" || val.logo == null)?"default.jpg":val.logo)+'" alt="" style="width: 64px; height: 64px;display: inline-block;border-radius: 50%;margin-top: 5px;margin-bottom: 15px;">'+
              '</div>'+
              '<div class="content">'+
                '<h3><a href="#">'+ val.company_name +'</a></h3>'+
                '<p class="brand"><span><i class="lni-inbox"></i> '+ val.company_email +'</span></p>'+
                '<div class="tags">'+  
                  '<span><i class="lni-map-marker"></i>'+ val.company_address+','+ val.country +'</span>'+   
                '</div>'+
              '</div>'+
            '</div>'+
          '</div>';

        }); 
        temp +='<div class="col-12 text-center mt-4">';
        let LastLast =  "filterEmployers(\'"+(limitPerPage*Math.floor(numberOfItems/limitPerPage))+"\',\'"+(numberOfItems)+"\')";
        (numberOfItems <= limitPerPage || numberOfItems == end)?(Next = 'disabled'):(numberOfItems < end+limitPerPage)? (forward = "filterEmployers(\'"+(beg+limitPerPage)+"\',\'"+numberOfItems+"\')"):(forward = "filterEmployers(\'"+(beg+limitPerPage)+"\',\'"+(end+limitPerPage)+"\')"); 
        (beg == 0 && (end == numberOfItems || end == limitPerPage))? (Prev = 'disabled',Backward = "filterEmployers(\'"+(beg)+"\',\'"+(end)+"\')"):(beg != 0 && end != numberOfItems)?(Backward = "filterEmployers(\'"+(beg-limitPerPage)+"\',\'"+(end-limitPerPage)+"\')"): (Backward = "filterEmployers(\'"+(beg-limitPerPage)+"\',\'"+(numberOfItems-(numberOfItems%limitPerPage))+"\')");
        temp +='<!-- Start Pagination -->'+
                    '<ul class="pagination">' +             
                    ' <li class="active"><a href="javascript:void(0)" class="btn-prev" onclick=" filterEmployers(0,6)"><i class="lni-angle-left"></i> First</a></li>'+
                      '<li class="active"><a href="javascript:void(0)" class="btn-next" onclick="'+Backward+'">Prev <i class="lni-angle-right"></i></a></li>'+
                      '<li class="active"><a href="javascript:void(0)" class="btn-next" onclick="'+forward+'">Next <i class="lni-angle-right"></i></a></li>'+
                      '<li class="active"><a href="javascript:void(0)" class="btn-next" onclick="'+LastLast+'">Last <i class="lni-angle-right"></i></a></li>'+
                    '</ul>'+
                    '<!-- End Pagination -->';
            $(document).ready(()=>{
            $('.employers .company').remove();
            $('.employers .pagination').remove();
            $('.employers').prepend(temp);
            });
          },
          error: function(err){
            console.log('error search jobs: ',err.responseText);
          }
        });
      }

      // console.log('inside the filter employers function .............');
      
    }

    function filterJobseekers(start,finish,e){
      let temp = '';
      let beg ='';
      let end ='';
      let numberOfItems = '';
      let totalPages = '';
      let forward = '';
      let Backward = '';
      let Prev = '';
      let Next = '';
      if(start !== undefined && finish !== undefined){ beg = start; end = finish;}else{ beg = 0; end = 6;}
      if($('#tagline').val() ==='' && $('#jobseeker_location').val() ===''){
        $.notify('There is nothing to search for','error');
        console.log('empty values cant search');
      }else{
        $.ajax({
          data: {'tagline':$('#tag_line').val(),'address':$('#jobseeker_location').val()},
          method: "GET",
          url: "account/get.php/jobseeker/search_jobseekers",
          dataType: "json",
          success: function(data){
            numberOfItems = data.length;
            limitPerPage = 6;
            totalPages = Math.round(numberOfItems/limitPerPage);
            $.each(data.slice(beg,end),function(i,val){
              temp +='<a href="#" class="job-listings" onclick="show_jobseeker_details(\''+val.jobseeker_id+'\');" style="cursor: pointer;">'+
                    '<div class="row">'+
                      '<div class="col-lg-4 col-md-4 col-xs-12">'+
                        '<div class="job-company-logo">'+
                          '<img src="account/uploads/'+((val.image == "" || val.image == null)?"default.jpg":val.image)+'" alt="" style="width: 64px; height: 64px;display: inline-block;border-radius: 50%;margin-top: 5px;margin-bottom: 15px;">'+
                        '</div>'+
                        '<div class="job-details">'+
                          '<h3>'+val.fullName+'</h3>'+
                          '<span class="company-neme">'+
                            val.tag_line+
                          '</span>'+
                        '</div>'+
                      '</div>'+
                      '<div class="col-lg-2 col-md-2 col-xs-12 text-center">'+
                        '<span class="btn-open">'+
                        val.phone +
                        '</span>'+
                      '</div>'+
                      '<div class="col-lg-2 col-md-2 col-xs-12 text-right">'+
                      '<div class="location">'+
                        '<i class="lni-map-marker"></i>'+ val.address +
                      '</div>'+
                      '</div>'+
                      '<div class="col-lg-2 col-md-2 col-xs-12 text-right">'+
                        '<span class="btn-full-time">'+val.education_level+'</span>'+
                      '</div>'+
                      '<div class="col-lg-2 col-md-2 col-xs-12 text-right">'+
                        '<span class="btn-apply" onclick="hire_jobseeker();">Hire</span>'+
                      '</div>'+
                    '</div>'+
                  '</a>';
            
            });
            $(document).ready(()=>{
            $('.jobseekers .job-listings').remove();
            $('.jobseekers').prepend(temp);
            });
          },
          error: function(err){
            console.log('error search jobseekers: ',err.responseText);
          }
        });
      }
      
    }

    function apply_job(job_id,company_id){
      if(cookie_usertype === '' || cookie_usertype == null){
        swal('User not logged in','Please Login to your account to apply','error','Close');
      }
      else{
         $.ajax({
          method: "POST",
          url: "account/post.php/jobseeker/send_application",
          dataType: "json",
          data :{'job_id':job_id,'company_id':company_id,'jobseeker_id':cookie_user_id},
          success: function(data){
            // console.log(data);
            if(data == 200){
              swal('Application sent','Your Application has been successfully sent','success','Close');
            }
            else{
              $.notify(data,'error');
            }
          },
          error: function(err){
            console.log(err.responseText);
          }
        });
      }
    }

    function hire_jobseeker(jobseeker_id,jobseeker_name){
      let hirer_name = $('#hirer_name').val();
      let hirer_email = $('#hirer_email').val();
      let hirer_phone = $('#hirer_phone_number').val();
      let task = $('#task').val();

      if (hirer_name == ''){
        swal('Invalid Name!','Hirer Name cannot be empty','error','Cool');
        return;
      }

      if (hirer_email.length < 1) {
        swal('Invalid Email!','Email cannot be empty','error','Cool');
        return;
       }else {
        if (!validEmail(hirer_email)) {
           swal('Invalid Email!','Please enter a valid email!','error','Cool');
           return;
        }
       }
       if(hirer_phone.length < 1){
        swal('Invalid Phone number!','Please enter a phone number','error','Cool');
        return;
       }else{
        var regEx = new RegExp('^[0-9]+$');
        var validPhone = regEx.test(hirer_phone);
        if(!validPhone){
          swal('Invalid Phone number!','Please enter a valid phone number','error','Cool');
          return;
        }
       }
       if (task == ''){
        swal('Invalid task!','Task Field cannot be empty','error','Cool');
        return;
      }
    
        $.ajax({
          method: "POST",
          url: "account/post.php/jobseeker/hire_jobseeker",
          dataType: "json",
          data :{'jobseeker_id':jobseeker_id,'name':hirer_name,'email':hirer_email,'phone':hirer_phone,'task': task},
          success: function(data){
            if(data == 200){
              // alert("Your request has been successfully send to "+ jobseeker_name);
              swal('Request sucessfully sent',jobseeker_name +' has been contacted','success','Close');
            }
          },
          error: function(err){
            console.log(err.responseText);
          }
        });
      
    }

    function contactPage(){
      let temp = '';
      temp +='<!-- Page Header Start -->'+
      '<div class="page-header">'+
        '<div class="container">'+
          '<div class="row">'+         
            '<div class="col-lg-12">'+
              '<div class="inner-header">'+
                '<h3>Contact</h3>'+
              '</div>'+
            '</div>'+
          '</div>'+
        '</div>'+
      '</div>'+
      '<!-- Page Header End -->' + 
      
      '<!-- Contact Section Start -->'+
      '<section id="contact" class="section">'+     
        '<div class="contact-form">'+
          '<div class="container">'+
            '<div class="row contact-form-area">'+          
              '<div class="col-md-12 col-lg-6 col-sm-12">'+
                '<div class="contact-block">'+
                  '<h2>Contact Form</h2>'+
                  '<form id="contactForm">'+
                    '<div class="row">'+
                      '<div class="col-md-6">'+
                        '<div class="form-group">'+
                          '<input type="text" class="form-control" id="contact_name" name="name" placeholder="Name" required data-error="Please enter your name">'+
                          '<div class="help-block with-errors"></div>'+
                        '</div>'+                                 
                      '</div>'+
                      '<div class="col-md-6">'+
                        '<div class="form-group">'+
                          '<input type="text" placeholder="Email" id="contact_email" class="form-control" name="name" required data-error="Please enter your email">'+
                          '<div class="help-block with-errors"></div>'+
                        '</div>'+ 
                      '</div>'+
                       '<div class="col-md-12">'+
                        '<div class="form-group">'+
                          '<input type="text" placeholder="Subject" id="msg_subject" class="form-control" required data-error="Please enter your subject">'+
                          '<div class="help-block with-errors"></div>'+
                        '</div>'+
                      '</div>'+
                      '<div class="col-md-12">'+
                        '<div class="form-group">'+ 
                          '<textarea class="form-control" id="message" placeholder="Your Message" rows="5" data-error="Write your message" required></textarea>'+
                          '<div class="help-block with-errors"></div>'+
                        '</div>'+
                        '<div class="submit-button">'+
                          '<button class="btn btn-common" id="submit" type="submit">Send Message</button>'+
                          '<div id="msgSubmit" class="h3 text-center hidden"></div>'+ 
                          '<div class="clearfix"></div>'+ 
                        '</div>'+
                      '</div>'+
                    '</div>'+            
                  '</form>'+
                '</div>'+
              '</div>'+
              '<div class="col-md-12 col-lg-6 col-sm-12">'+
                '<div class="contact-right-area wow fadeIn">'+
                  '<h2>Contact Address</h2>'+
                  '<div class="contact-info">'+
                    '<div class="single-contact">'+
                      '<div class="contact-icon">'+
                        '<i class="lni-map-marker"></i>'+
                      '</div>'+
                      '<p>Main Office: Kairaba Avenue- Banjul,Gambia <br> Customer Center: Bundung Jola kunda- Banjul, Gambia</p>'+
                    '</div>'+
                    '<div class="single-contact">'+
                      '<div class="contact-icon">'+
                        '<i class="lni-envelope"></i>'+
                      '</div>'+
                      '<p><a href="mailto:contact@afrosofttech.com">Customer Support: contact@afrosofttech.com Technical Support: </a></p>'+
                      '<p><a href="mailto:contact@afrosofttech.com">contact@afrosofttech.com</a></p>'+
                    '</div>'+
                    '<div class="single-contact">'+
                      '<div class="contact-icon">'+
                        '<i class="lni-phone-handset"></i>'+
                      '</div>'+
                      '<p><a href="#">Main Office: +220 295 2173</a></p>'+
                      '<p><a href="#">Customer Supprort: +220 533 6171</a></p>'+
                    '</div>'+
                  '</div>'+
                '</div>'+
              '</div>'+
              '<div class="col-md-12">'+
                '<div id="conatiner-map">'+
                  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13004080.414077152!2d-104.65693512785852!3d37.27559283318413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited+States!5e0!3m2!1sen!2sin!4v1530855407925" allowfullscreen=""></iframe>'+
                '</div>' +
              '</div>'+
            '</div>'+
          '</div>'+
        '</div>'+   
      '</section>'+
      '<!-- Contact Section End -->';
      $(document).ready(()=>{
        $('header .intro-landing').remove();
        $('.content-section').empty().append(temp);
      });

      $('#submit').click(function(e){
        e.preventDefault();
        // console.log('trying to contact admin...............');
        let name = $('#contact_name').val();
        let email = $('#contact_email').val();
        let msg_subject = $('#msg_subject').val();
        let message = $('#message').val();
  
        if (name == ''){
          swal('Invalid Name!','Name cannot be empty','error','Cool');
          return;
        }
  
        if (email.length < 1) {
          swal('Invalid Email!','Email cannot be empty','error','Cool');
          return;
         }else {
          if (!validEmail(email)) {
             swal('Invalid Email!','Please enter a valid email!','error','Cool');
             return;
          }
         }
         if (message == ''){
          swal('Invalid message!','Please write a message','error','Cool');
          return;
        }
        if (name == '' && email.length < 1 && message == ''){
          swal('Invalid submission!','All fields except subject are required','error','Cool');
          return;
        }

        $.ajax({
          method: "POST",
          url: "account/post.php/jobseeker/contact_admin",
          dataType: "json",
          data :{'name':name,'email':email,'subject':msg_subject,'message': message},
          success: function(data){
            if(data == 200){
              // alert("Your request has been successfully send to "+ jobseeker_name);
              swal('Message Sent','Your message has been sent to admin','success','Close');
            }
          },
          error: function(err){
            console.log(err.responseText);
          }
        });
      });
    }

    function displayPricing(){
      let temp =
      '<!-- Page Header Start -->'+
      '<div class="page-header">'+
        '<div class="container">'+
          '<div class="row">'+         
            '<div class="col-lg-12">'+
              '<div class="inner-header">'+
                '<h3>Pricing</h3>'+
              '</div>'+
            '</div>'+
          '</div>'+
        '</div>'+
      '</div>'+
      '<!-- Page Header End -->' + 

      '<!-- Start Pricing Table Section -->'+
    '<div id="pricing" class="section bg-gray">'+
      '<div class="container">'+
        '<div class="section-header">'+  
          '<h2 class="section-title">Pricing Plan</h2>'+
          '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ellentesque dignissim quam et <br> metus effici turac fringilla lorem facilisis.</p>'+      
        '</div>'+

        '<div class="row pricing-tables">'+
          '<div class="col-lg-4 col-md-4 col-xs-12">'+
            '<div class="pricing-table border-color-defult">'+
              '<div class="pricing-details">'+
                '<div class="icon">'+
                  '<i class="lni-rocket"></i>'+
                '</div>'+
                '<h2>Professional</h2>'+
                '<ul>'+
                  '<li>Post 1 Job</li>'+
                  '<li>No Featured Job</li>'+
                  '<li>Edit Your Job Listing</li>'+
                  '<li>Manage Application</li>'+
                  '<li>30-day Expired</li>'+
                '</ul>'+
                '<div class="price"><span>$</span>0<span>/Month</span></div>'+
              '</div>'+
              
            '</div>'+
          '</div>'+

          '<div class="col-lg-4 col-md-4 col-xs-12">'+
            '<div class="pricing-table pricing-active border-color-red">'+
              '<div class="pricing-details">'+
                '<div class="icon">'+
                  '<i class="lni-drop"></i>'+
                '</div>'+
                '<h2>Advance</h2>'+
                '<ul>'+
                 ' <li>Post 1 Job</li>'+
                  '<li>No Featured Job</li>'+
                  '<li>Edit Your Job Listing</li>'+
                  '<li>Manage Application</li>'+
                  '<li>30-day Expired</li>'+
                '</ul>'+
                '<div class="price"><span>$</span>20<span>/Month</span></div>'+
              '</div>'+
              
            '</div>'+
          '</div>'+

          '<div class="col-lg-4 col-md-4 col-xs-12">'+
            '<div class="pricing-table border-color-green">'+
              '<div class="pricing-details">'+
                '<div class="icon">'+
                  '<i class="lni-briefcase"></i>'+
                '</div>'+
                '<h2>Premium</h2>'+
                '<ul>'+
                  '<li>Post 1 Job</li>'+
                  '<li>No Featured Job</li>'+
                  '<li>Edit Your Job Listing</li>'+
                  '<li>Manage Application</li>'+
                  '<li>30-day Expired</li>'+
                '</ul>'+
                '<div class="price"><span>$</span>40<span>/Month</span></div>'+
              '</div>'+
              
            '</div>'+
          '</div>'+

          '<div class="col-lg-4 col-md-4 col-xs-12">'+
            '<div class="pricing-table border-color-green">'+
              '<div class="pricing-details">'+
                '<div class="icon">'+
                  '<i class="lni-briefcase"></i>'+
                '</div>'+
                '<h2>Premium</h2>'+
                '<ul>'+
                  '<li>Post 1 Job</li>'+
                  '<li>No Featured Job</li>'+
                  '<li>Edit Your Job Listing</li>'+
                  '<li>Manage Application</li>'+
                  '<li>30-day Expired</li>'+
                '</ul>'+
                '<div class="price"><span>$</span>40<span>/Month</span></div>'+
              '</div>'+
              
            '</div>'+
          '</div>'+

          '<div class="col-lg-4 col-md-4 col-xs-12">'+
            '<div class="pricing-table border-color-green">'+
              '<div class="pricing-details">'+
                '<div class="icon">'+
                  '<i class="lni-briefcase"></i>'+
                '</div>'+
                '<h2>Premium</h2>'+
                '<ul>'+
                  '<li>Post 1 Job</li>'+
                  '<li>No Featured Job</li>'+
                  '<li>Edit Your Job Listing</li>'+
                  '<li>Manage Application</li>'+
                  '<li>30-day Expired</li>'+
                '</ul>'+
                '<div class="price"><span>$</span>40<span>/Month</span></div>'+
              '</div>'+
              
            '</div>'+
          '</div>'+

          '<div class="col-lg-4 col-md-4 col-xs-12">'+
            '<div class="pricing-table border-color-green">'+
              '<div class="pricing-details">'+
                '<div class="icon">'+
                  '<i class="lni-briefcase"></i>'+
                '</div>'+
                '<h2>Premium</h2>'+
                '<ul>'+
                  '<li>Post 1 Job</li>'+
                  '<li>No Featured Job</li>'+
                  '<li>Edit Your Job Listing</li>'+
                  '<li>Manage Application</li>'+
                  '<li>30-day Expired</li>'+
                '</ul>'+
                '<div class="price"><span>$</span>40<span>/Month</span></div>'+
              '</div>'+
              
            '</div>'+
          '</div>'+

        '</div>'+
      '</div>'+
    '</div>'+
    '<!-- End Pricing Table Section --></div>';

    $(document).ready(function(){
      $('header .intro-landing').remove();
      $('.content-section').empty().append(temp);
    });
    }

    function show_featured_jobseekers(){
      return '<div class="col-lg-6 col-md-12 col-xs-12">'+
      '<div class="job-alerts-item candidates">'+
        '<h3 class="alerts-title">Featured Freelancers</h3>'+
        '<div class="manager-resumes-item">'+
          '<div class="manager-content">'+
            '<a href="resume.html"><img class="resume-thumb" src="account/uploads/35437img_20190202_122155.jpg" alt=""></a>'+
            '<div class="manager-info">'+
              '<div class="manager-name">'+
                '<h4><a href="#">Ahmad Sarjo Jallow</a></h4>'+
                '<h5>Front-end developer</h5>'+
              '</div>'+
              '<div class="manager-meta">'+
                '<span class="location"><i class="lni-map-marker"></i> Cupertino, CA, USA</span>'+
                '<span class="rate"><i class="lni-alarm-clock"></i> $55 per hour</span>'+
              '</div>'+
            '</div>'+
          '</div>'+
          '<div class="update-date">'+
            '<p class="status">'+
              '<strong>Date of birth:</strong> Fab 22, 2020'+
            '</p>'+
            '<div class="action-btn">'+
              '<a class="btn btn-xs btn-gray" href="#">VIEW</a>'+
              '<a class="btn btn-xs btn-danger" href="#">HIRE</a>'+
            '</div>'+
          '</div>'+
        '</div>'+ 
        '<div class="manager-resumes-item">'+
          '<div class="manager-content">'+
            '<a href="resume.html"><img class="resume-thumb" src="account/uploads/Webp.net-compress-image.jpg" alt=""></a>'+
            '<div class="manager-info">'+
              '<div class="manager-name">'+
                '<h4><a href="#">Biran Jobe</a></h4>'+
                '<h5>Front-end developer</h5>'+
              '</div>'+
              '<div class="manager-meta">'+
                '<span class="location"><i class="lni-map-marker"></i> Cupertino, CA, USA</span>'+
                '<span class="rate"><i class="lni-alarm-clock"></i> $55 per hour</span>'+
              '</div>'+
            '</div>'+
          '</div>'+
          '<div class="update-date">'+
            '<p class="status">'+
              '<strong>Date of birth:</strong> Fab 22, 2020'+
            '</p>'+
            '<div class="action-btn">'+
              '<a class="btn btn-xs btn-gray" href="#">VIEW</a>'+
              '<a class="btn btn-xs btn-danger" href="#">HIRE</a>'+
            '</div>'+
          '</div>'+
        '</div>'+     
        '<div class="manager-resumes-item">'+
          '<div class="manager-content">'+
            '<a href="resume.html"><img class="resume-thumb" src="account/uploads/naja.jpeg" alt=""></a>'+
            '<div class="manager-info">'+
              '<div class="manager-name">'+
                '<h4><a href="#">Najatu Garba Ahmed</a></h4>'+
                '<h5>Front-end developer</h5>'+
              '</div>'+
              '<div class="manager-meta">'+
                '<span class="location"><i class="lni-map-marker"></i> Cupertino, CA, USA</span>'+
                '<span class="rate"><i class="lni-alarm-clock"></i> $55 per hour</span>'+
              '</div>'+
            '</div>'+
          '</div>'+
          '<div class="update-date">'+
            '<p class="status">'+
              '<strong>Date of birth:</strong> Fab 22, 2020'+
            '</p>'+
            '<div class="action-btn">'+
              '<a class="btn btn-xs btn-gray" href="#">VIEW</a>'+
              '<a class="btn btn-xs btn-danger" href="#">HIRE</a>'+
            '</div>'+
          '</div>'+
        '</div>'+        
        
      '</div>'+
    '</div>';
    }