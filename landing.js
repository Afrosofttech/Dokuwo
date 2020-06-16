function header(){
  let MainHeader = '';
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
          '<a href="index.php" class="navbar-brand"><img src="assets/img/logo-header.png" alt="dokuwo"></a>'+
        '</div>'+
        '<div class="collapse navbar-collapse" id="main-navbar">'+
          '<ul class="navbar-nav mr-auto w-100 justify-content-end main-navigation">'+
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
            '<li class="nav-item">'+
              '<a class="nav-link" style="cursor: pointer;" onclick="displayFreelancers();" aria-haspopup="true" aria-expanded="false">'+
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
            '<li class="nav-item dropdown">'+
            '<a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">'+
             'Sign In/Up'+
            '</a>'+
            '<ul class="dropdown-menu">'+
              '<li><a class="dropdown-item" href="account/authentication.php?xp=sign-in">Sign In</a></li>'+
              '<li><a class="dropdown-item" href="account/authentication.php?xp=recruiter">Sign up ~ Recruiter</a></li>'+
              '<li><a class="dropdown-item" href="account/authentication.php?xp=jf">Sign up ~ Jobseeker/Freelancer</a></li>'+
            '</ul>'+
            '</li>'+
            '<li class="nav-item">'+
              '<a class="nav-link" style="cursor: pointer;" onclick="contactPage();">'+
                'Contact'+
              '</a>'+
            '</li>'+
            // '<li class="nav-item">'+
            //   '<a class="nav-link" style="cursor: pointer;" href="account/authentication.php">Sign In/Up</a>'+
            // '</li>'+
          '</ul>'+
        '</div>'+
      '</div>'+
    '</div>'+
    '<div class="mobile-menu" data-logo="assets/img/logo-header.png"></div>'+
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
              '<img src="assets/img/hire.png" alt="">'+
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
          (sub=='Finance')?subcat=Finance:(sub=='IT & Engineering')?subcat=SE:(sub=='Healthcare')?subcat=Healthcare:(sub=='Education/Training')?subcat=Education:(sub=='Art/Design')?subcat=Art:(sub=='Sale/Markting')?subcat=Sale:(sub=='Science')?subcat=Science:(sub=='Food Services')?subcat=Food:(sub=='Events, Catering & Entertainment')?subcat=ECE:subcat=Others; 
          (sub=='Finance')?profileImage=FinanceImage:(sub=='IT & Engineering')?profileImage=SEImage:(sub=='Healthcare')?profileImage=HealthcareImage:(sub=='Education/Training')?profileImage=EducationImage:(sub=='Art/Design')?profileImage=ArtImage:(sub=='Sale/Markting')?profileImage=SaleImage:(sub=='Science')?profileImage=ScienceImage:(sub=='Food Services')?profileImage=FoodImage:(sub=='Events, Catering & Entertainment')?profileImage=ECEImage:profileImage=OthersImage;
          job_category +='<div class="col-lg-3 col-md-6 col-xs-12 f-category">'+
          '<a onclick="show_jobs_and_jobseekers_by_categories(\''+val.job_cat+'\');" style="cursor: pointer;">'+
            '<div class="icon">'+
            '<img src="account/img/'+profileImage+'" alt="" class="logo-img">'+
            '</div>'+
            '<h3>'+val.job_cat+'</h3>';
            (val.count == '1')?job_category +='<p>('+ val.count +' job)</p>':job_category +='<p>('+ val.count +' jobs)</p>';
            job_category +='</a>'+
        '</div>';
      });             
      job_category +='</div>'+
      '</div>'+
    '</section>';
    $(document).ready(()=>{
    $('.content-section').prepend(job_category);
    featuredJobs();
    });

      }
    
   },
   error: function(err){
    swalNotify(err.responseText,'error');
   }
  });
  
  
}

function featuredJobs(){
  let featuredjobs = '';
  let back = 'featuredjobs';
    $.ajax({
        method: "GET",
        url: "account/get.php/company/featured_jobs",
        data:{'caller':'landing'},
        dataType: "json",
        success: function(data){
         featuredjobs +='<section id="featured" class="section">'+
          '<div class="container">'+
            '<div class="section-header">'+  
              '<h2 class="section-title">Featured Jobs</h2>'+
              '<p>Hand-picked jobs featured depending on popularity and benifits</p>'+
            '</div>'+
            '<div class="row">';
            $.each(data, function(i,val){
              featuredjobs +=`<div class="col-lg-4 col-md-6 col-xs-12" onclick='show_job_details(${val.job_id},"${back}");' style="cursor: pointer;">`+
                '<div class="job-featured">'+
                  '<div class="icon">'+
                    '<img src="'+((val.logo == null)?"https://ui-avatars.com/api/?name="+val.company_name.replace(/ /g, '+'):'https://dokuwo-uploads.s3.amazonaws.com/'+val.logo)+'" class="logo-img" alt="" >'+
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
          latestJobs();
        });
       },
       error: function(err){
        swalNotify(err.responseText,'error');
       }
      });

}

function latestJobs(){
  let latestjobs = '';
  let back = 'latestjobs';

    $.ajax({
        method: "GET",
        url: "account/get.php/company/latest_jobs",
        dataType: "json",
        data:{'caller':'landing'},
        success: function(data){
         latestjobs +='<section id="latest-jobs" class="section bg-gray">'+
        '<div class="container">'+
          '<div class="section-header">'+  
            '<h2 class="section-title">Latest Jobs</h2>'+
            '<p>Check out the latest published jobs from companies.</p>'+       
          '</div>'+
          '<div class="row">';
        $.each(data, function(i,val){
            latestjobs +=`<div class="col-lg-6 col-md-6 col-xs-12" onclick='show_job_details(${val.job_id},"${back}");' style="cursor: pointer;">`+
            '<div class="jobs-latest">'+
              '<div class="img-thumb">'+
                '<img src="'+((val.logo == null)?"https://ui-avatars.com/api/?name="+val.company_name.replace(/ /g, '+'):'https://dokuwo-uploads.s3.amazonaws.com/'+val.logo)+'" alt="" class="logo-img">'+
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
      dashboardImages();
    });
       },
       error: function(err){
        swalNotify(err.responseText,'error');
       }
      });
    
}

function dashboardImages(){
  let temp = '<!-- Portfolio start -->'+
        '<div class="job-header">'+
        '<div class="container">'+
          '<div class="contentbox">'+
            '<h3 class="text-center">View our user friendly dashboard</h3>'+
            '<ul class="row userPortfolio">'+
              '<li class="col-md-3 col-sm-6 dashboard_img_list">'+
                '<div class="imgbox"><a href="assets/img/company_img1.png" data-lightbox="example-1"><img src="assets/img/company_img1.png" alt="company dashboard"></a>'+
                '</div>'+
              '</li>'+
              '<li class="col-md-3 col-sm-6">'+
              '<div class="imgbox"><a href="assets/img/company_img2.png" data-lightbox="example-1"><img src="assets/img/company_img2.png" alt="company dashboard"></a>'+
                
              '</div>'+
            '</li>'+
            '<li class="col-md-3 col-sm-6">'+
            '<div class="imgbox"><a href="assets/img/company_img3.png" data-lightbox="example-1"><img src="assets/img/company_img3.png" alt="company dashboard"></a>'+
              
            '</div>'+
          '</li>'+
            '<li class="col-md-3 col-sm-6">'+
            '<div class="imgbox"><a href="assets/img/company_img4.png" data-lightbox="example-1"><img src="assets/img/company_img4.png" alt="company dashboard"></a>'+
              
            '</div>'+
          '</li>'+
          '<li class="col-md-3 col-sm-6">'+
            '<div class="imgbox"><a href="assets/img/jobseeker_img1.png" data-lightbox="example-1"><img src="assets/img/jobseeker_img1.png" alt="company dashboard"></a>'+
            '</div>'+
          '</li>'+
          '<li class="col-md-3 col-sm-6">'+
            '<div class="imgbox"><a href="assets/img/jobseeker_img2.png" data-lightbox="example-1"><img src="assets/img/jobseeker_img2.png" alt="company dashboard"></a>'+
            '</div>'+
          '</li>'+
          '<li class="col-md-3 col-sm-6">'+
            '<div class="imgbox"><a href="assets/img/jobseeker_img3.png" data-lightbox="example-1"><img src="assets/img/jobseeker_img3.png" alt="company dashboard"></a>'+
            '</div>'+
          '</li>'+
          '<li class="col-md-3 col-sm-6">'+
            '<div class="imgbox"><a href="assets/img/jobseeker_img4.png" data-lightbox="example-1"><img src="assets/img/jobseeker_img4.png" alt="company dashboard"></a>'+
            '</div>'+
          '</li>'+
          '</ul>'+
          '</div>'+
        '</div>'+
        '</div>';
          $(document).ready(()=>{
            $('.content-section').append(temp);
            blog();
          });
}

function blog(){
  let blogging = '';
  let maxLength = 100;
  let back = 'blogLanding';
  $.ajax({
    method: "POST",
    url: "account/get.php/company/retrieve_all_blogs_admin",
    dataType: "json",
    success: function(data){
      if(data[0] != 400){
        blogging +='<section id="blog" class="section">'+
      '<!-- Container Starts -->'+
      '<div class="container">'+
        '<div class="section-header">'+  
          '<h2 class="section-title">Blog Post</h2>'+
          '<p>View our esteem latest blog posts from our various bloggers</p>'+      
        '</div>'+
        '<div class="row">';
        $.each(data[0].slice(0,3), function(i,val){
          blogging +='<div class="col-lg-4 col-md-6 col-xs-12 blog-item" onclick="show_blog_details(\''+val.blog_id+'\',\''+back+'\');" style="cursor: pointer;">'+
          '<!-- Blog Item Starts -->'+
          '<div class="blog-item-wrapper">'+
            '<div class="blog-item-img">'+
              '<a>'+
                '<img src="https://dokuwo-uploads.s3.amazonaws.com/'+((val.blog_image == "" || val.blog_image == null)?"default.jpg":val.blog_image)+'" alt="" class="blog-image">'+
              '</a>'+              
            '</div>'+
            '<div class="blog-item-text">'+ 
              '<h3><a>'+val.blog_title+'</a></h3>';
              if($.trim(val.blog_content).length > maxLength){
                let subcontent = val.blog_content.substring(0,maxLength);
                blogging +='<p>'+subcontent+'...</p>'+
                '<a class="readmore" href="#">Read More</a>';
              }
              else{
                blogging +='<p>'+val.blog_content+'...</p>';
              }
              blogging +='</div>'+
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
      swalNotify(err.responseText,'error');
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
                '<div class="footer-logo rotate-n-15"><img src="assets/img/logo-footer.png" class="rounded-circle" alt="" style="width: 50%; height: auto;"></div>'+
                '<div class="textwidget">'+
                  '<p>Our mission is to digitalise the job hunt in the country and be the go to platform for anything that has to do with work and job hunt.</p>'+
                '</div>'+
              '</div>'+
            '</div>'+
            '<div class="col-lg-6 col-md-4 col-xs-12">'+
              '<div class="widget">'+
                '<h3 class="block-title">Quick Links</h3>'+
                '<ul class="menu">'+
                  '<li><a href="javascript:void(0)">About Us</a></li>'+
                  '<li><a href="javascript:void(0)">Support</a></li>'+
                  '<li><a href="javascript:void(0)">License</a></li>'+
                  '<li><a href="#" onclick="contactPage();">Contact</a></li>'+
                '</ul>'+
                '<ul class="menu">'+
                  '<li><a href="javascript:void(0)">Terms & Conditions</a></li>'+
                  '<li><a href="javascript:void(0)">Privacy</a></li>'+
                  '<li><a onclick="faq();" style="cursor: pointer;">FAQ</a></li>'+
                  '<li><a href="javascript:void(0)">Product License</a></li>'+
                '</ul>'+
              '</div>'+
            '</div>'+
            '<div class="col-lg-3 col-md-4 col-xs-12">'+
              '<div class="widget">'+
                '<h3 class="block-title">Subscribe Now</h3>'+
                '<p>Subscribe to receive our newsletters!.</p> '+
                  '<div class="form-group is-empty">'+
                    '<a type="button" name="subscribe" target="_blank" id="subscribes" href="https://cdn.forms-content.sg-form.com/506bba9b-aaf1-11ea-8ee3-d62c3763a3b7" class="btn btn-common btn-lg " role="button" style="width:100%; height:20%;margin: 7px 0px;">Subscribe</i></a>'+
                  '</div>'+
                '<ul class="mt-3 footer-social">'+
                  '<li><a class="facebook" href="https://www.facebook.com/pg/Dokuwo-106334990997957" target="_blank"><i class="lni-facebook-filled"></i></a></li>'+
                  '<li><a class="twitter" href="https://twitter.com/Dokuwo1" target="_blank"><i class="lni-twitter-filled"></i></a></li>'+
                  '<li><a class="linkedin" href="https://www.linkedin.com/company/38126868/" target="_blank"><i class="lni-linkedin-fill"></i></a></li>'+
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
                '<p class="copyright">&copy;&nbsp;2020. Powered by <a class="text-primary" href="javascript:void(0)">Afrika Software Technologies</a></p>'+
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
  let back = 'displayjobs';
  
  if(start !== undefined && finish !== undefined){ beg = start; end = finish;}else{ beg = 0; end = 4;}
  $.ajax({
    method: "GET",
    url: "account/get.php/jobseeker/retreive_jobs",
    data: {'beg':beg,'end':end},
    dataType: "json",
    success: function(data){
      if(beg == 0){
        jobs = data[0];
        if(localStorage.getItem('totaljobs') == null || localStorage.getItem('totaljobs') == undefined || localStorage.getItem('totaljobs') == '')
        {
          localStorage.setItem('totaljobs',parseInt(data[1]));
        }
      }
      else{ jobs = data};
      numberOfItems = localStorage.getItem('totaljobs');
      limitPerPage = 4;
      totalPages = Math.round(numberOfItems/limitPerPage);
      if(jobs != 400){
        temp +='<!-- Page Header Start -->'+
        '<div class="page-header">'+
          '<div class="container">'+
            '<div class="row">'+        
              '<div class="col-lg-12">'+
                '<div class="inner-header">'+
                  '<h3>Browse All Jobs</h3>'+
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
                    '<button type="submit" class="btn btn-common float-right" id="filterJobs" onclick="filterJobs();">Filter</button>'+
                  '</div>'+
                '</div>'+
              '</div>'+
              '<div class="col-lg-12 col-md-12 col-xs-12 jobs">';
              $.each(jobs,function(i,val){
                temp +=`<a class="job-listings" onclick='show_job_details(${val.job_id},"${back}");' style="cursor: pointer;">`+
                '<div class="row">'+
                  '<div class="col-lg-4 col-md-4 col-xs-12">'+
                    '<div class="job-company-logo">'+
                      '<img src="'+((val.logo == null)?"https://ui-avatars.com/api/?name="+val.company_name.replace(/ /g, '+'):'https://dokuwo-uploads.s3.amazonaws.com/'+val.logo)+'" alt="" class="logo-img">'+
                    '</div>'+
                    '<div class="job-details">'+
                      '<h3>'+val.job_name+'</h3>'+
                      '<span class="company-neme">'+
                        val.company_name+
                      '</span>'+
                    '</div>'+
                  '</div>'+
                  '<div class="col-lg-2 col-md-2 col-xs-12 salary_button text_to_center">'+
                    '<span class="btn-open">'+
                     val.currency+currencyFormat(val.salary) +
                    '</span>'+
                  '</div>'+
                  '<div class="col-lg-2 col-md-2 col-xs-12 text_to_left">'+
                  '<div class="location">'+
                    '<i class="lni-map-marker"></i>'+ val.job_location +
                  '</div>'+
                  '</div>'+
                  '<div class="col-lg-2 col-md-2 col-xs-12 text_to_left">'+
                    '<span class="btn-full-time" style="color:#007bff;">'+val.job_type+'</span>'+
                  '</div>'+
                  '<div class="col-lg-2 col-md-2 col-xs-12 text_to_right">'+
                    '<span class="btn-apply">View Job</span>'+
                  '</div>'+
                '</div>'+
              '</a>';
              
              });
              
              let begin = parseInt(beg);
              let ending = parseInt(end);
              let LastLast =  ((limitPerPage*Math.floor(numberOfItems/limitPerPage)) == (numberOfItems))?`displayJobs(${(numberOfItems - 4)},${(numberOfItems)})`:`displayJobs(${(limitPerPage*Math.floor(numberOfItems/limitPerPage))},${(numberOfItems)})`;
              (numberOfItems <= limitPerPage || numberOfItems <= ending || (begin+limitPerPage > numberOfItems) || begin > numberOfItems || (begin == limitPerPage && begin > numberOfItems))?(Next = 'disabled'):(forward = "displayJobs(\'"+(begin+limitPerPage)+"\',\'"+limitPerPage+"\')"); 
              (begin == 0 && (ending == numberOfItems || ending == limitPerPage))? (Prev = 'disabled',Backward = "displayJobs(\'"+(begin)+"\',\'"+(ending)+"\')"):(begin != 0 && ending != numberOfItems)?(Backward = "displayJobs(\'"+(begin-limitPerPage)+"\',\'"+(limitPerPage)+"\')"): (Backward = "displayJobs(\'"+(begin-limitPerPage)+"\',\'"+(numberOfItems-(numberOfItems%limitPerPage))+"\')");
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
      else{
        temp+='<div class="jumbotron error_message">'+
          '<h2 class="display-4">No Available Jobs!</h2>'+
          '<p class="lead">Sorry we have no currently open jobs. <strong>Please check again later.</strong></p>'+
          '<hr class="my-4">'+
          '<a class="btn btn-primary btn-lg" href="#" role="button" onclick="index.php">Back to Homepage</a>'+
        '</div>';
      }
      
      $(document).ready(()=>{
        $('header .intro-landing').remove();
        $('.content-section').empty().append(temp);
      });
  
    },
    error: function(err){
      swalNotify(err.responseText,'error');
    }
   });
   
}

function filterJobs(start,finish,filterParams){
  let job = $('#job_name').val();
  let location = $('#job_location').val();
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
  let back = 'filterjobs';
  let jobs = '';
  if(typeof filterData == "string"){
    JSON.parse(filterData);
  }
if(filterData.job_name == '' && filterData.job_location == ''){
  swalNotify('There is nothing to search for','error');
}
else{

    if(start !== undefined && finish !== undefined){ beg = start; end = finish;}else{ beg = 0; end = 4;}
    $.ajax({
      method: "GET",
      url:"account/get.php/jobseeker/search_jobs",
      dataType: "json",
      data: {'job':filterData.job_name,'location':filterData.job_location,'beg':beg,'end':end},
      success: function(data){
        if(beg == 0){
          jobs = data[0];
          localStorage.setItem('totalfilteredjobs',parseInt(data[1]));
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
                    '<h3>Search Results Jobs</h3>'+
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
                          '<a href="#" class="float-right" onclick="displayJobs();">Exit search mode <i class="fa fa-angle-double-right"></i></a>'+
                        '</div>'+
                    '<div class="col-lg-5 col-md-5 col-xs-12">'+
                      '<input type="text" class="form-control" id="job_name" placeholder="Job Name">'+
                    '</div>'+
                    '<div class="col-lg-5 col-md-5 col-xs-12">'+
                      '<input type="text" class="form-control" id="job_location" placeholder="Job Location">'+
                    '</div>'+
                    '<div class="col-lg-2 col-md-2 col-xs-12">'+
                      `<button type="submit" class="btn btn-common float-right" id="filterJobs" onclick="filterJobs();">Filter</button>`+
                    '</div>'+
                  '</div>'+
                '</div>'+
                '<div class="col-lg-12 col-md-12 col-xs-12 featured-jobs">';
                $.each(jobs,function(i,val){
                  temp +=`<a class="job-listings" onclick='show_job_details(${val.job_id},"${back}",${JSON.stringify(filterData)});' style="cursor: pointer;">`+
                  '<div class="row">'+
                    '<div class="col-lg-4 col-md-4 col-xs-12">'+
                      '<div class="job-company-logo">'+
                        '<img src="'+((val.logo == null)?"https://ui-avatars.com/api/?name="+val.company_name.replace(/ /g, '+'):'https://dokuwo-uploads.s3.amazonaws.com/'+val.logo)+'" alt="" class="logo-img">'+
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

                let begin = parseInt(beg);
                let ending = parseInt(end);
                let LastLast = `filterJobs(${(limitPerPage*Math.floor(numberOfItems/limitPerPage))},${(numberOfItems)},${JSON.stringify(filterData)})`;
                (numberOfItems <= limitPerPage || numberOfItems == ending || begin > numberOfItems || (begin+limitPerPage > numberOfItems) || (begin == limitPerPage && begin > numberOfItems))?(Next = 'disabled'):(numberOfItems < ending+limitPerPage)? (forward = `filterJobs(${(begin+limitPerPage)},${numberOfItems},${JSON.stringify(filterData)})`):(forward = `filterJobs(${(begin+limitPerPage)},${(ending+limitPerPage)},${JSON.stringify(filterData)})`); 
                (begin == 0 && (ending == numberOfItems || ending == limitPerPage))? (Prev = 'disabled',Backward = `filterJobs(${(begin)},${(ending)},${JSON.stringify(filterData)})`):(begin != 0 && ending != numberOfItems)?(Backward = `filterJobs(${(begin-limitPerPage)},${(limitPerPage)},${JSON.stringify(filterData)})`): (Backward = `filterJobs(${(begin-limitPerPage)},${(numberOfItems-(numberOfItems%limitPerPage))},${JSON.stringify(filterData)})`);
               temp +='<!-- Start Pagination -->'+
              '<ul class="pagination">' +             
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
        }
        else{
          temp+='<div class="jumbotron error_message">'+
          '<h2 class="display-4">No Results!</h2>'+
          '<p class="lead">Sorry No results match your search.</p>'+
          '<hr class="my-4">'+
          '<a class="btn btn-primary btn-lg" href="#" role="button" onclick="displayJobs();">Go Back</a>'+
        '</div>';
        }
    
        /**
         * @function documentload ready
         */
        $(document).ready(()=>{
          $('header .intro-landing').remove();
          $('.content-section').empty().append(temp);
        });

        // end document load ready function
      },
      error: function(err){
        swalNotify(err.responseText,'error');
      }
     });

    }
}



  
  function displayFreelancers(start,finish){
    let beg ='';
    let end ='';
    let numberOfItems = '';
    let totalPages = '';
    let forward = '';
    let Backward = '';
    let Prev = '';
    let Next = '';
    let temp = '';
    let freelancers = '';

    if(start !== undefined && finish !== undefined){ beg = start; end = finish;}else{ beg = 0; end = 4;}
    $.ajax({
      method: "GET",
      url: "account/get.php/company/retrieve_all_freelancers",
      data:{'beg':beg,'end':end},
      dataType: "json",
      success: function(data){
        if(beg == 0){
          freelancers = data[0];
          localStorage.setItem('totalfreelancers',parseInt(data[1]));
        }
        else{ freelancers = data};
        numberOfItems = localStorage.getItem('totalfreelancers');
        limitPerPage = 4;
        totalPages = Math.round(numberOfItems/limitPerPage);
        
        if(freelancers != 400){
       
          temp +='<!-- Page Header Start -->'+
          '<div class="page-header">'+
            '<div class="container">'+
              '<div class="row">'+        
                '<div class="col-lg-12">'+
                  '<div class="inner-header">'+
                    '<h3>Browse Freelancers</h3>'+
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
                      '<input type="text" class="form-control" id="tag_line" placeholder="tag_line: software developer">'+
                    '</div>'+
                    '<div class="col-lg-5 col-md-5 col-xs-12">'+
                      '<input type="text" class="form-control" id="freelancer_location" placeholder=" Freelancer:Location">'+
                    '</div>'+
                    '<div class="col-lg-2 col-md-2 col-xs-12">'+
                      '<button type="submit" class="btn btn-common float-right" id="filterFreelancers" onclick="filterFreelancers();">Filter</button>'+
                    '</div>'+
                  '</div>'+
                '</div>'+
                '</div>'+
                '<div class="row">';
                $.each(freelancers,function(i,val){
                  let skills = val.skills.split(',');
                  temp +=`<div class="col-lg-6 col-md-6 col-xs-12" onclick='show_freelancer_details(${val.jobseeker_id},${beg},${end});'  style="cursor: pointer;">`+
                    '<div class="manager-resumes-item">'+
                      '<div class="manager-content">'+
                        '<a href="#"><img class="resume-thumb logo-img" src="https://dokuwo-uploads.s3.amazonaws.com/'+((val.image == "" || val.image == null)?"default.jpg":val.image)+'" alt=""></a>'+
                        '<div class="manager-info d-flex flex-column">'+
                          '<div class="manager-name">'+
                            '<h4><a href="#">'+val.fullName+'</a></h4>'+
                            '<h5><i class="fa fa-tag"></i> '+val.tag_line+'</h5>'+
                          '</div>'+
                          '<div class="manager-meta">'+
                            '<span class="location"><i class="fa fa-location-arrow"></i> '+val.address+'</span>'+
                            '<span class="rate"><i class="fa fa-user-graduate"></i> '+val.education_level+'</span>'+
                          '</div>'+
                        '</div>'+                   
                      '</div>'+
                      '<div class="item-body">'+
                        '<div class="content">'+
                          '<p>'+((val.description != '')?val.description:'No Description')+'</p>'+
                        '</div>'+
                        '<div class="resume-skills">'+
                          '<div class="tag-list float-left">';
                          $.each(skills.slice(0,4),function(i,skill){
                            temp +='<span>'+skill+'</span>'; 
                          });
                            
                          temp +='</div>'+
                          '<div class="resume-exp float-right">'+
                            '<a href="#" class="btn btn-common btn-xs">VIEW</a>'+
                          '</div>'+
                        '</div>'+
                      '</div>'+
                    '</div>'+ 
                  '</div>';
                
                });

            let begin = parseInt(beg);
            let ending = parseInt(end);
            let LastLast = "displayFreelancers(\'"+(limitPerPage*Math.floor(numberOfItems/limitPerPage))+"\',\'"+(limitPerPage)+"\')";
            (numberOfItems <= limitPerPage || numberOfItems == ending || (begin+limitPerPage > numberOfItems) || begin > numberOfItems || (begin == limitPerPage && begin > numberOfItems))?(Next = 'disabled'):(forward = "displayFreelancers(\'"+(begin+limitPerPage)+"\',\'"+limitPerPage+"\')"); 
            (beg == 0 && (end == numberOfItems || end == limitPerPage))? (Prev = 'disabled',Backward = "displayFreelancers(\'"+(beg)+"\',\'"+(end)+"\')"):(beg != 0 && end != numberOfItems)?(Backward = "displayFreelancers(\'"+(begin-limitPerPage)+"\',\'"+(limitPerPage)+"\')"): (Backward = "displayFreelancers(\'"+(begin-limitPerPage)+"\',\'"+(ending-limitPerPage)+"\')");
                temp +='<!-- Start Pagination -->'+
                  '<ul class="pagination">' +             
                  ' <li class="active"><a href="javascript:void(0)" class="btn-prev" onclick=" displayFreelancers(0,4)"><i class="lni-angle-left"></i> First</a></li>'+
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
              else{
                temp+='<div class="jumbotron error_message">'+
                '<h2 class="display-4">No Freelancers!</h2>'+
                '<p class="lead">Sorry there are currently no available <strong>Freelancers.</strong> <strong>Please check again later.</strong></p>'+
                '<hr class="my-4">'+
                '<a class="btn btn-primary btn-lg" href="#" role="button" onclick="index.php">Back to Homepage</a>'+
              '</div>';
              }
        
        $(document).ready(()=>{
          $('header .intro-landing').remove();
          $('.content-section').empty().append(temp);
        });

      },
      error: function(err){
        swalNotify(err.responseText,'error');
      }
    });
        
    }

    function filterFreelancers(start,finish,filterParams){
      let tag_line = $('#tag_line').val();
      let location = $('#freelancer_location').val();
      let filterData = (filterParams == null)?{'tag_line':tag_line,'freelancer_location':location}:filterParams;
      let beg ='';
      let end ='';
      let numberOfItems = '';
      let totalPages = '';
      let forward = '';
      let Backward = '';
      let Prev = '';
      let Next = '';
      let temp = '';
      let freelancers = '';

      if(typeof filterData == "string"){
        JSON.parse(filterData);
      }
      if(filterData.tag_line =='' && filterData.freelancer_location ==''){
        swalNotify('There is nothing to search for','error');
      }else{
        if(start !== undefined && finish !== undefined){ beg = start; end = finish;}else{ beg = 0; end = 4;}
        $.ajax({
          method: "GET",
          url: "account/get.php/jobseeker/search_jobseekers",
          data: {'tagline':filterData.tag_line,'address':filterData.freelancer_location,'beg':beg,'end':end},
          dataType: "json",
          success: function(data){
            if(beg == 0){
              freelancers = data[0];
              localStorage.setItem('totalfilterjobscatgory',parseInt(data[1]));
            }
            else{ freelancers = data};
            numberOfItems = localStorage.getItem('totalfilterjobscatgory');
            limitPerPage = 4;
            totalPages = Math.round(numberOfItems/limitPerPage);
              if(freelancers != 400){
                temp +='<!-- Page Header Start -->'+
                '<div class="page-header">'+
                  '<div class="container">'+
                    '<div class="row">'+        
                      '<div class="col-lg-12">'+
                        '<div class="inner-header">'+
                          '<h3>Search Results Freelancers</h3>'+
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
                          '<a href="#" class="float-right" onclick="displayFreelancers();">Exit search mode <i class="fa fa-angle-double-right"></i></a>'+
                        '</div>'+
                          '<div class="col-lg-5 col-md-5 col-xs-12">'+
                            '<input type="text" class="form-control" id="tag_line" placeholder="tag_line: software developer">'+
                          '</div>'+
                          '<div class="col-lg-5 col-md-5 col-xs-12">'+
                            '<input type="text" class="form-control" id="freelancer_location" placeholder=" Freelancer:Location">'+
                          '</div>'+
                          '<div class="col-lg-2 col-md-2 col-xs-12">'+
                            '<button type="submit" class="btn btn-common float-right" id="filterFreelancers" onclick="filterFreelancers();">Filter</button>'+
                          '</div>'+
                        '</div>'+
                      '</div>'+
                      '</div>'+
                      '<div class="row">';
                      $.each(freelancers,function(i,val){
                        let skills = val.skills.split(',');
                        temp +=`<div class="col-lg-6 col-md-6 col-xs-12" onclick='show_freelancer_details(${val.jobseeker_id},${beg},${end});'  style="cursor: pointer;">`+
                          '<div class="manager-resumes-item">'+
                            '<div class="manager-content">'+
                              '<a href="#"><img class="resume-thumb logo-img" src="https://dokuwo-uploads.s3.amazonaws.com/'+((val.image == "" || val.image == null)?"default.jpg":val.image)+'" alt=""></a>'+
                              '<div class="manager-info d-flex flex-column">'+
                                '<div class="manager-name">'+
                                  '<h4><a href="#">'+val.fullName+'</a></h4>'+
                                  '<h5><i class="fa fa-tag"></i> '+val.tag_line+'</h5>'+
                                '</div>'+
                                '<div class="manager-meta">'+
                                  '<span class="location"><i class="fa fa-location-arrow"></i> '+val.address+'</span>'+
                                  '<span class="rate"><i class="fa fa-user-graduate"></i> '+val.education_level+'</span>'+
                                '</div>'+
                              '</div>'+                   
                            '</div>'+
                            '<div class="item-body">'+
                              '<div class="content">'+
                                '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, qui aspernatur accusantium! Molestiae, cum cupiditate nam optio dignissimos magnam velit, perspiciatis amet qui aut nobis, quisquam, laudantium vitae eos ipsam.</p>'+
                              '</div>'+
                              '<div class="resume-skills">'+
                                '<div class="tag-list float-left">';
                                $.each(skills.slice(0,4),function(i,skill){
                                  temp +='<span>'+skill+'</span>'; 
                                });
                                  
                                temp +='</div>'+
                                '<div class="resume-exp float-right">'+
                                  '<a href="#" class="btn btn-common btn-xs">VIEW</a>'+
                                '</div>'+
                              '</div>'+
                            '</div>'+
                          '</div>'+ 
                        '</div>';
                      
                      });
      
                  let begin = parseInt(beg);
                  let ending = parseInt(end);
                  let LastLast =  ((limitPerPage*Math.floor(numberOfItems/limitPerPage)) == (numberOfItems))?`filterFreelancers(${(numberOfItems - 4)},${(numberOfItems)},${JSON.stringify(filterData)})`:`filterFreelancers(${(limitPerPage*Math.floor(numberOfItems/limitPerPage))},${(numberOfItems)},${JSON.stringify(filterData)})`;
                  (numberOfItems <= limitPerPage || numberOfItems == ending || (begin+limitPerPage > numberOfItems) || begin > numberOfItems || (begin == limitPerPage && begin > numberOfItems))?(Next = 'disabled'):(forward = `filterFreelancers(${begin+limitPerPage},${limitPerPage},${JSON.stringify(filterData)})`); 
                  (begin == 0 && (ending == numberOfItems || ending == limitPerPage))? (Prev = 'disabled',Backward = `filterFreelancers(${begin},${ending},${JSON.stringify(filterData)})`):(begin != 0 && ending != numberOfItems)?(Backward = `filterFreelancers(${begin-limitPerPage},${limitPerPage},${JSON.stringify(filterData)})`): (Backward = `filterFreelancers(${begin-limitPerPage},${numberOfItems-(numberOfItems%limitPerPage)},${JSON.stringify(filterData)})`);
                      temp +='<!-- Start Pagination -->'+
                        '<ul class="pagination">' +             
                          `<li class="active"><a href="javascript:void(0)" class="btn-prev" onclick='filterFreelancers(0,4,${JSON.stringify(filterData)})'><i class="lni-angle-left"></i> First</a></li>`+
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
              }
              else{
                temp+='<div class="jumbotron error_message">'+
                '<h2 class="display-4">No Results!</h2>'+
                '<p class="lead">Sorry no results match your search.</p>'+
                '<hr class="my-4">'+
                '<a class="btn btn-primary btn-lg" href="#" role="button" onclick="displayFreelancers();">Go Back</a>'+
              '</div>';
              }

              $('header .intro-landing').remove();
              $('.content-section').empty().append(temp);

          },
          error: function(err){
            swalNotify(err.responseText,'error');
          }
        });
      }
    }

    
      // Show latest jobs details function
    function show_job_details(job_id,back,callbackdata){
      let temp = '';
      let caller = "job_details";
      $.ajax({
        method: "GET",
        url: "account/get.php/company/get_job_details",
        dataType: "json",
        data:{'job_id':job_id},
        success: function(data){
          let datePosted = new Date(data.date_posted)
          temp +=' <!-- Page Header Start -->'+
          '<div class="page-header">'+
            '<div class="container">'+
              '<div class="row"> '+        
               ' <div class="col-lg-8 col-md-6 col-xs-12">'+
                  '<div class="breadcrumb-wrapper">'+
                    '<div class="img-wrapper">'+
                      '<img src="'+((data.logo == null)?"https://ui-avatars.com/api/?name="+data.company_name.replace(/ /g, '+'):'https://dokuwo-uploads.s3.amazonaws.com/'+data.logo)+'" alt="" class="logo-img">'+
                    '</div>'+
                    '<div class="content">'+
                      '<h3 class="product-title">'+ data.job_name +'</h3>'+
                      '<p class="brand">'+ data.company_name +'</p>'+
                      '<div class="tags">' + 
                        '<span><i class="lni-map-marker"></i>'+ data.job_location+'</span>'+  
                        `<span><i class="lni-calendar"></i> ${formatMonth(datePosted.getMonth())} ${datePosted.getDate()}, ${datePosted.getFullYear()}</span>`+  
                      '</div>'+
                    '</div>'+
                  '</div>'+
                '</div>'+
                '<div class="col-lg-4 col-md-6 col-xs-12">'+
                  '<div class="month-price">'+
                    '<span class="year">Monthly</span>'+
                    '<div class="price">'+data.currency+currencyFormat(data.salary)+'</div>'+
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
                '<div class="col-lg-8 col-md-12 col-xs-12 details_wrapper">'+
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
                    '<a href="#" class="btn btn-common apply_button" onclick="apply_job(\''+data.job_id+'\',\''+data.company_id+'\');">Apply Now</a>';
                    if(back === 'displayjobs'){
                      temp +=`<a href="#" class="btn btn-danger go_back_button" onclick='displayJobs();'><i class="fa fa-arrow-left"></i> Back</a>`; 
                    }
                    if(back === 'featuredjobs'){
                      temp +='<a href="index.php" class="btn btn-danger go_back_button"><i class="fa fa-arrow-left"></i> Back</a>'; 
                    }
                    if(back === 'latestjobs'){
                      temp +='<a href="index.php" class="btn btn-danger go_back_button"><i class="fa fa-arrow-left"></i> Back</a>'; 
                    }
                    if(back === 'allfeaturedjobs'){
                      temp +=`<a href="#" class="btn btn-danger go_back_button" onclick='browse_all_featured_jobs();'><i class="fa fa-arrow-left"></i> Back</a>`; 
                    }
                    if(back === 'alllatestjobs'){
                      temp +=`<a href="#" class="btn btn-danger go_back_button" onclick='browse_all_latest_jobs();'><i class="fa fa-arrow-left"></i> Back</a>`; 
                    }
                    if(back === 'categoryjobs'){
                      temp +=`<a href="#" class="btn btn-danger go_back_button" onclick='show_jobs_and_jobseekers_by_categories(${JSON.stringify(callbackdata)});'><i class="fa fa-arrow-left"></i> Back</a>`; 
                    }
                    if(back === 'filterjobs'){
                      temp +=`<a href="#" class="btn btn-danger go_back_button" onclick='filterJobs(${undefined},${undefined},${JSON.stringify(callbackdata)});'><i class="fa fa-arrow-left"></i> Back</a>`; 
                    }
                    if(back === 'filterfeaturedjobs'){
                      temp +=`<a href="#" class="btn btn-danger go_back_button" onclick='filterFeaturedJobs(${undefined},${undefined},${JSON.stringify(callbackdata)});'><i class="fa fa-arrow-left"></i> Back</a>`; 
                    }
                    if(back === 'latestjobsearch'){
                      temp +=`<a href="#" class="btn btn-danger go_back_button" onclick='latestJobSearch(${undefined},${undefined},${JSON.stringify(callbackdata)});'><i class="fa fa-arrow-left"></i> Back</a>`; 
                    }
                    
          temp +='</div>'+
                '</div>'+
                '<div class="col-lg-4 col-md-12 col-xs-12 featured_freelancers">'+
                '</div>'+
          '</section>'+
          '<!-- Job Detail Section End -->';
          $(document).ready(()=>{
            $('header .intro-landing').remove();
            $('.content-section').empty().append(temp);
            show_featured_freelancers(caller,job_id,back);
          });

        },
        error: function(err){
          swalNotify(err.responseText,'error');
        }
       });
        

    }

          //Freelancer details function
          function show_freelancer_details(jobseeker_id,beg,end,back){
            let temp = '';
            let caller = 'freelancer_details';
            $.ajax({
              method: "GET",
              url: "account/get.php/company/get_jobseeker_details",
              dataType: "json",
              data:{'jobseeker_id':jobseeker_id},
              success: function(data){
                let dob = new Date(data.details[0].dob);
                temp +=' <!-- Page Header Start -->'+
                '<div class="page-header">'+
                  '<div class="container">'+
                  '</div>'+
                '</div>'+
                '<!-- Page Header End --> '+

                '<!-- Page content Start --> '+
                '<div class="listpgWraper">'+
                  '<div class="container">'+
                  '<!-- candidate details Start --> '+
                  '<!-- Job Header start -->'+
                  '<div class="job-header">'+
                    '<div class="jobinfo">'+
                      '<div class="row">'+
                        '<div class="col-md-8 col-sm-8 col-lg-8">'+ 
                          '<!-- Candidate Info -->'+
                          '<div class="candidateinfo">'+
                            '<div class="userPic"><img src="https://dokuwo-uploads.s3.amazonaws.com/'+((data.details[0].image == "" || data.details[0].image == null)?"default.jpg":data.details[0].image)+'" alt="'+ data.details[0].fullName +'" style="width: 90px; height: 90px;"></div>'+
                            '<div class="title">'+ data.details[0].fullName +'</div>'+
                            '<div class="desi">'+ data.details[0].tag_line +'</div>'+
                            '<div class="loctext"><i class="fa fa-user-graduate fa-lg" aria-hidden="true"></i> '+ data.details[0].education_level +'</div>'+
                            '<div class="loctext freelancer-location"><i class="fa fa-map-marker-alt fa-lg" aria-hidden="true"></i> '+ data.details[0].address+'</div>'+
                            '<div class="clearfix"></div>'+
                          '</div>'+
                        '</div>'+
                        '<div class="col-md-4 col-sm-4 col-lg-4">'+ 
                          '<!-- Candidate Contact -->'+
                          '<div class="candidateinfo">'+
                            '<div class="loctext"><i class="fa fa-tag fa-lg" aria-hidden="true"></i> '+ data.details[0].category +'</div>'+
                            '<div class="loctext"><i class="fa fa-phone fa-lg" aria-hidden="true"></i> '+ data.details[0].phone+'</div>'+
                            '<div class="loctext"><i class="fa fa-globe fa-lg" aria-hidden="true"></i> '+ data.details[0].country +'</div>'+
                          '</div>'+
                        '</div>'+
                      '</div>'+
                    '</div>'+
                    
                    '<!-- Buttons -->'+
                    '<div class="jobButtons d-flex">'+
                     `<a href="#" class="btn apply mr-auto" data-toggle="modal" data-target="#hireModal" onclick='hireFreelancer("${data.details[0].fullName}","${data.details[0].jobseeker_id}");'><i class="fa fa-paper-plane" aria-hidden="true"></i> Hire Me</a>`;
                     (beg == "job_details")?temp +=`<a href="#" class="btn report" onclick='show_job_details(${end},"${back}");'><i class="fa fa-arrow-left" aria-hidden="true"></i> Back</a>`:(beg == "freelancer_details")?temp +=`<a href="#" class="btn report" onclick='show_freelancer_details(${end},${back});'><i class="fa fa-arrow-left" aria-hidden="true"></i> Back</a>`:temp +=`<a href="#" class="btn report" onclick='displayFreelancers(${beg},${end});'><i class="fa fa-arrow-left" aria-hidden="true"></i> Back</a>`;
                     temp +='</div>'+
                  '</div>'+
                  '<!-- candidate details End --> '+
                  '<!-- Skills and review section start --> '+
                  '<div class="row">'+

                  '<!-- Left side start --> '+
                  '<div class="col-md-12 col-lg-8">'+
                  '<!-- Skills start -->'+
                  '<div class="job-header">'+
                    '<div class="contentbox">'+
                      '<h3>Skills</h3>'+
                      '<p> <strong>'+ data.details[0].skills +'</strong></p>'+  
                    '</div>'+
                  '</div>'+
                  '<!-- Skills End -->'+
                  '<!-- Review freelancer start -->'+
                  '<div class="job-header form_review">'+
                    '<div class="jobdetail">'+
                      '<h3>Review '+ data.details[0].fullName +'</h3>'+
                      '<div class="formpanel">'+
                      '<form method="POST" id="reviewJobseeker" autocomplete="off">'+
                        '<div class="formrow">'+
                        '<div class="rating" data-rate-value=0></div>'+
                        '</div>'+
                        '<div class="formrow">'+
                          '<input type="text" class="form-control" name="reviewerName" id="reviewerName" placeholder="Your Name">'+
                        '</div>'+
                        '<div class="formrow">'+
                          '<input type="text" class="form-control" name="reviewerEmail" id="reviewerEmail" placeholder="Your Email">'+
                        '</div>'+
                        '<div class="formrow">'+
                          '<textarea class="form-control" name="reviewContent" id="reviewContent" placeholder="Review Message"></textarea>'+
                        '</div>'+
                        '<input type="submit" class="btn" value="Submit">'+
                        '</form>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                  '<!-- Review freelancer End -->'+
                  '<!-- Display reviews start -->'+
                  '<div class="job-header reviews">'+
                   
                  '</div>'+
                  '<!-- Display reviews End -->'+
                  '</div>'+
                  '<!-- Left side End --> '+
                  '<!-- right side start --> '+
                  '<div class="col-lg-4 col-md-12 featured_freelancers">'+

                  '</div>'+
                  '<!-- right side End --> '+

                  '</div>'+
                  '<!-- Skills and review section End --> '+

                  '</div>'+
                '</div>'+
                '<!-- Page Content End --> ';
                
            
              
                
                $(document).ready(()=>{
                  $('header .intro-landing').remove();
                  $('.content-section').empty().append(temp);
                  (data.details[0].package != 400 && data.details[0].package == "Active")?$('.form_review').show():$('.form_review').remove();
                  show_featured_freelancers(caller,jobseeker_id,back);
                  (data.details[0].package != 400 && data.details[0].package == "Active")?((data.reviews != 400))?display_review_rating(data.reviews):"":"No Active package";
                  var options = {
                    max_value: 5,
                    step_size: 1,
                    symbols : {
                      utf8_star: {
                          base: '\u2606',
                          hover: '\u2605',
                          selected: '\u2605',
                      },
                      utf8_hexagon: {
                          base: '\u2B21',
                          hover: '\u2B22',
                          selected: '\u2B22',
                      },
                      hearts: '♥',
                      fontawesome_star: {
                          base: '',
                          hover: '',
                          selected: '',
                      },
                      utf32_emoticons: {
                          base: [0x1F625, 0x1F613, 0x1F612, 0x1F604],
                          hover: [0x1F625, 0x1F613, 0x1F612, 0x1F604],
                          selected: [0x1F625, 0x1F613, 0x1F612, 0x1F604],
                      }
                  },
                  selected_symbol_type: 'utf8_star',
                  // convert_to_utf8: true
                };
                $(".rating").rate(options);

                        //on submit
                        $('#reviewJobseeker').submit(function(e){
                          e.preventDefault();
                          let name = $('#reviewerName').val();
                          let email = $('#reviewerEmail').val();
                          let rating = $(".rating").rate("getValue");
                          let reviewContent = $('#reviewContent').val();
                          var errors = [];
                          
                          if (name == ''){
                            swal('Invalid Name!','Please Enter a Name','error','Cool');
                            errors.push('name_error');
                            return;
                          }
                          else {
                            if(name.match(/^\d+$/)){

                              swal('Invalid Name!','Name cannot be a number. Please Enter a valid name!','error','Cool');
                              errors.push('name_is_number_error');
                              return;
                            }
                          }
                          if (email.length < 1) {
                            swal('Invalid Email!','Email cannot be empty','error','Cool');
                            errors.push('email_error');
                            return;
                           }else {
                            if (!validEmail(email)) {
                               swal('Invalid Email!','Please enter a valid email!','error','Cool');
                               errors.push('invalidEmail_error');
                               return;
                            }
                           }

                           if(rating == 0){
                              swal('Invalid rating','Please Select a rating!','error','Cool');
                              errors.push('rating_error');
                              return;
                           }

                           if(reviewContent.length > 500){
                            swal('Excess Review Content','Review Content cannot greater than 500 characters!','error','Cool');
                            errors.push('reviewContent_error');
                            return;
                           }
        
                          if(errors.length < 1){
                            
                            $.ajax({
                              method: 'POST',
                              url: 'account/post.php/jobseeker/review_jobseeker',
                              data:{'name':name,'email':email,'rating':rating,'jobseeker_id':jobseeker_id,'reviewContent':reviewContent},
                              success: function(response){
                                if(response == 200){
                                  // swal('Review Sucessfully sent','Thanks for Reviewing!','success','close');
                                  swalNotify('Thanks for Reviewing!','success');
                                  show_freelancer_details(jobseeker_id,beg,end); 
                                }
                              },
                              error: function(err){
                                swalNotify(err.responseText,'error');
                              }
                            });
                          }else{
                            return;
                          }
                  
                        });
                        // end form submit

                });
              },
              error: function(err){
                swalNotify(err.responseText,'error');
              }
             });
      
          }

          function display_review_rating(reviews){
            let temp = '';
            avg_rating = Math.round((parseInt(reviews[0].total_rates)/parseInt(reviews[0].num_rates)));

            temp +='<div class="contentbox">'+
            '<div class="d-flex">'+
            '<h3 class="mr-auto">Reviews</h3>'+
            '<span class="text-warning float-right">';
            for(i=1;i<=avg_rating;i++){temp +='&#9733; ';}
            temp += avg_rating+'.0 stars'+'</span>'+
            '</div>'+
            '<ul class="educationList">';
            $.each(reviews,function(i,val){
              if(val.review_content != null && val.review_content != "null" && val.review_content != ""){
                temp +='<li>'+
                 '<p>'+val.review_content +'</p>'+
                 '<div class="d-flex flex-wrap justify-content-start">'+
                    '<small class="text-muted">Posted by '+ val.reviewer_name +'</small>'+
                    '<small class="text-muted">On '+moment(val.created_at).fromNow()+'</small>'+
                  '<div class="clearfix"></div>'+
                  '</div>'
                '</li>';
              }
            
            });
            temp +='</ul>'+
          '</div>';

            $('.reviews').append(temp);
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
      let jobs = '';
      back = "categoryjobs";
      
      if(start !== undefined && finish !== undefined){ beg = start; end = finish;}else{ beg = 0; end = 4;}
      $.ajax({
        method: "POST",
        url: "account/get.php/company/jobs_by_category",
        dataType: "json",
        data:{'category':category,'beg':beg,'end':end},
        success: function(data){
          
            if(beg == 0){
                jobs = data[0];
                localStorage.setItem('totaljobsCategory',parseInt(data[1]));
            }
             else{ jobs = data};
              numberOfItems = localStorage.getItem('totaljobsCategory');
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
               $.each(jobs,function(i,val){
                temp +=`<a class="job-listings" onclick='show_job_details(${val.job_id},"${back}","${category}");' style="cursor: pointer;">`+
                    '<div class="row">'+
                      '<div class="col-lg-4 col-md-4 col-xs-12">'+
                        '<div class="job-company-logo">'+
                          '<img src="'+((val.logo == null)?"https://ui-avatars.com/api/?name="+val.company_name.replace(/ /g, '+'):'https://dokuwo-uploads.s3.amazonaws.com/'+val.logo)+'" alt="" style="width: 64px; height: 64px;display: inline-block;border-radius: 50%;margin-top: 5px;margin-bottom: 15px;">'+
                        '</div>'+
                        '<div class="job-details">'+
                          '<h3>'+val.job_name+'</h3>'+
                          '<span class="company-neme">'+
                            val.company_name+
                          '</span>'+
                        '</div>'+
                      '</div>'+
                      '<div class="col-lg-2 col-md-2 col-xs-12 text_to_center">'+
                        '<span class="btn-open">'+
                        val.currency+currencyFormat(val.salary) +
                        '</span>'+
                      '</div>'+
                      '<div class="col-lg-2 col-md-2 col-xs-12 text_to_right">'+
                      '<div class="location">'+
                        '<i class="lni-map-marker"></i>'+ val.job_location +
                      '</div>'+
                      '</div>'+
                      '<div class="col-lg-2 col-md-2 col-xs-12 text_to_right">'+
                        '<span class="btn-full-time" style="color:#007bff;">'+val.job_type+'</span>'+
                      '</div>'+
                      '<div class="col-lg-2 col-md-2 col-xs-12 text_to_right">'+
                        '<span class="btn-apply">View Job</span>'+
                      '</div>'+
                    '</div>'+
                  '</a>';
                  
                  });

                let begin = parseInt(beg);
                let ending = parseInt(end);
                let LastLast =  ((limitPerPage*Math.floor(numberOfItems/limitPerPage)) == (numberOfItems))?`show_jobs_and_jobseekers_by_categories('${category}',${(numberOfItems - limitPerPage)},${(limitPerPage)})`:`show_jobs_and_jobseekers_by_categories('${category}',${(limitPerPage*Math.floor(numberOfItems/limitPerPage))},${(limitPerPage)})`;
                (numberOfItems <= limitPerPage || numberOfItems == ending || (begin+limitPerPage > numberOfItems) || begin > numberOfItems || (begin == limitPerPage && begin > numberOfItems))?(Next = 'disabled'):(forward = "show_jobs_and_jobseekers_by_categories(\'"+category+"\',\'"+(begin+limitPerPage)+"\',\'"+limitPerPage+"\')"); 
                (begin == 0 && (ending == numberOfItems || ending == limitPerPage))? (Prev = 'disabled',Backward = "show_jobs_and_jobseekers_by_categories(\'"+category+"\',\'"+(begin)+"\',\'"+(ending)+"\')"):(begin != 0 && ending != numberOfItems)?(Backward = "show_jobs_and_jobseekers_by_categories(\'"+category+"\',\'"+(begin-limitPerPage)+"\',\'"+(limitPerPage)+"\')"): (Backward = "show_jobs_and_jobseekers_by_categories(\'"+category+"\',\'"+(begin-limitPerPage)+"\',\'"+(numberOfItems-(numberOfItems%limitPerPage))+"\')");
                temp +='<!-- Start Pagination -->'+
                  '<ul class="pagination l-pagination">'+ 
                    '<div class="pagination-links">'+            
                    '<li class="active"><a href="javascript:void(0)" class="btn-prev" onclick=" show_jobs_and_jobseekers_by_categories(\''+category+'\',0,4)"><i class="lni-angle-left"></i> First</a></li>'+
                    '<li class="active"><a href="javascript:void(0)" class="btn-next" onclick="'+Backward+'">Prev <i class="lni-angle-right"></i></a></li>'+
                    '<li class="active"><a href="javascript:void(0)" class="btn-next" onclick="'+forward+'">Next <i class="lni-angle-right"></i></a></li>'+
                    '<li class="active"><a href="javascript:void(0)" class="btn-next" onclick="'+LastLast+'">Last <i class="lni-angle-right"></i></a></li>'+
                     '</div>'+
                     '<div class="back-button">'+
                    '<a href="index.php" class="btn btn-danger"><i class="fa fa-arrow-left"> Back</i></a>'+
                    '</div>'+
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
          swalNotify(err.responseText,'error');
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
      let jobs = '';
      
      if(start !== undefined && finish !== undefined){ beg = start; end = finish;}else{ beg = 0; end = 4;}
      $.ajax({
        method: "GET",
        url: "account/get.php/jobseeker/search_jobs_categories",
        dataType: "json",
        data:{'category':category,'job':job,'location':location,'beg':beg,'end':end},
        success: function(data){
          if(beg == 0){
            jobs = data[0];
            localStorage.setItem('totalfilterjobscatgory',parseInt(data[1]));
          }
          else{ jobs = data};
          numberOfItems = localStorage.getItem('totalfilterjobscatgory');
          limitPerPage = 4;
          totalPages = Math.round(numberOfItems/limitPerPage);
          if(jobs != 400){
            temp +='<!-- Page Header Start -->'+
            '<div class="page-header">'+
              '<div class="container">'+
                '<div class="row">'+        
                  '<div class="col-lg-12">'+
                    '<div class="inner-header">'+
                      '<h3>Search Results for '+ category +' Jobs</h3>'+
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
                    '<div class="col-lg-12 col-md-12 col-xs-12 d-flex justify-content-center">'+
                        '<a href="#" class="float-right" onclick="show_jobs_and_jobseekers_by_categories(\''+category+'\');">Exit search mode <i class="fa fa-angle-double-right"></i></a>'+
                        '</div>'+
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
               $.each(jobs,function(i,val){
                temp +='<a class="job-listings" onclick="show_job_details(\''+val.job_id+'\',\''+val.company_name+'\');" style="cursor: pointer;">'+
                    '<div class="row">'+
                      '<div class="col-lg-4 col-md-4 col-xs-12">'+
                        '<div class="job-company-logo">'+
                          '<img src="'+((val.logo == null)?"https://ui-avatars.com/api/?name="+val.company_name.replace(/ /g, '+'):'https://dokuwo-uploads.s3.amazonaws.com/'+val.logo)+'" alt="" style="width: 64px; height: 64px;display: inline-block;border-radius: 50%;margin-top: 5px;margin-bottom: 15px;">'+
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
                  let begin = parseInt(beg);
                  let ending = parseInt(end);
                  let LastLast =  ((limitPerPage*Math.floor(numberOfItems/limitPerPage)) == (numberOfItems))?`filterJobsCategory(${category},${(numberOfItems - 4)},${(numberOfItems)})`:`filterJobsCategory(${category},${(limitPerPage*Math.floor(numberOfItems/limitPerPage))},${(numberOfItems)})`;
                  (numberOfItems <= limitPerPage || numberOfItems == ending || (begin+limitPerPage > numberOfItems) || begin > numberOfItems || (begin == limitPerPage && begin > numberOfItems))?(Next = 'disabled'):(forward = "filterJobsCategory(\'"+category+"\',\'"+(beg+limitPerPage)+"\',\'"+limitPerPage+"\')"); 
                  (begin == 0 && (ending == numberOfItems || ending == limitPerPage))? (Prev = 'disabled',Backward = "filterJobsCategory(\'"+category+"\',\'"+(begin)+"\',\'"+(ending)+"\')"):(begin != 0 && ending != numberOfItems)?(Backward = "filterJobsCategory(\'"+category+"\',\'"+(begin-limitPerPage)+"\',\'"+(ending-limitPerPage)+"\')"): (Backward = "filterJobsCategory(\'"+category+"\',\'"+(begin-limitPerPage)+"\',\'"+(numberOfItems-(numberOfItems%limitPerPage))+"\')");
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
                
          }
          else{
            temp+='<div class="jumbotron error_message">'+
                '<h2 class="display-4">No Results!</h2>'+
                '<p class="lead">Sorry no results match your search.</p>'+
                '<hr class="my-4">'+
                '<a class="btn btn-primary btn-lg" href="#" role="button" onclick="show_jobs_and_jobseekers_by_categories(\''+category+'\');">Go Back</a>'+
              '</div>';
          }

          $(document).ready(()=>{
            $('header .intro-landing').remove();
            $('.content-section').empty().append(temp);
          });
          
        },
        error: function(err){
          swalNotify(err.responseText,'error');
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
        method: "GET",
        url: "account/get.php/company/featured_jobs",
        dataType: "json",
        data:{'caller':'allfeaturedjobs'},
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
                        `<button type="submit" class="btn btn-common float-right" id="filterFeaturedJobs" onclick="filterFeaturedJobs();">Filter</button>`+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                  '<div class="col-lg-12 col-md-12 col-xs-12 featured-jobs">';
                  $.each(data.slice(beg,end),function(i,val){
                    temp +=`<a class="job-listings" onclick='show_job_details(${val.job_id},"${back}");' style="cursor: pointer;">`+
                    '<div class="row">'+
                      '<div class="col-lg-4 col-md-4 col-xs-12">'+
                        '<div class="job-company-logo">'+
                          '<img src="'+((val.logo == null)?"https://ui-avatars.com/api/?name="+val.company_name.replace(/ /g, '+'):'https://dokuwo-uploads.s3.amazonaws.com/'+val.logo)+'" alt="" class="logo-img">'+
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

                  let begin = parseInt(beg);
                  let ending = parseInt(end);
                  let LastLast =  ((limitPerPage*Math.floor(numberOfItems/limitPerPage)) == (numberOfItems))?`browse_all_featured_jobs(${(numberOfItems - 4)},${(numberOfItems)})`:`browse_all_featured_jobs(${(limitPerPage*Math.floor(numberOfItems/limitPerPage))},${(numberOfItems)})`;
                  (numberOfItems <= limitPerPage || numberOfItems == ending)?(Next = 'disabled'):(numberOfItems < ending+limitPerPage)? (forward = "browse_all_featured_jobs(\'"+(begin+limitPerPage)+"\',\'"+numberOfItems+"\')"):(forward = "browse_all_featured_jobs(\'"+(begin+limitPerPage)+"\',\'"+(ending+limitPerPage)+"\')"); 
                  (begin == 0 && (ending == numberOfItems || ending == limitPerPage))? (Prev = 'disabled',Backward = "browse_all_featured_jobs(\'"+(begin)+"\',\'"+(ending)+"\')"):(begin != 0 && ending != numberOfItems)?(Backward = "browse_all_featured_jobs(\'"+(begin-limitPerPage)+"\',\'"+(ending-limitPerPage)+"\')"): (Backward = "browse_all_featured_jobs(\'"+(begin-limitPerPage)+"\',\'"+(numberOfItems-(numberOfItems%limitPerPage))+"\')");
                  temp +='<!-- Start Pagination -->'+
                    '<ul class="pagination d-inline-flex">' +             
                    ' <li class="active"><a href="javascript:void(0)" class="btn-prev" onclick=" browse_all_featured_jobs(0,4)"><i class="lni-angle-left"></i> First</a></li>'+
                      '<li class="active"><a href="javascript:void(0)" class="btn-next" onclick="'+Backward+'">Prev <i class="lni-angle-right"></i></a></li>'+
                      '<li class="active"><a href="javascript:void(0)" class="btn-next" onclick="'+forward+'">Next <i class="lni-angle-right"></i></a></li>'+
                      '<li class="active mr-auto"><a href="javascript:void(0)" class="btn-next" onclick="'+LastLast+'">Last <i class="lni-angle-right"></i></a></li>'+
                      '<li class="active"><a href="index.php" class="btn btn-danger"><i class="fa fa-arrow-left"> Back</i></a></li>'+
                    '</ul>'+
                    '<!-- End Pagination -->'+
                ' </div>'+
                '</div>'+
              '</div>'+
            '</section>'+
            '<!-- Job Browse Section End -->'; 
          }
      
          /**
           * @function documentload ready
           */
          $(document).ready(()=>{
            $('header .intro-landing').remove();
            $('.content-section').empty().append(temp);
          });

          // end document load ready function
        },
        error: function(err){
          swalNotify(err.responseText,'error');
        }
       });
        

    }

    function filterFeaturedJobs(start,finish,filterParams){
      
      let job = $('#featured_jobName').val();
      let location = $('#featured_jobLocation').val();
      let filterData = (filterParams == null)?{'featured_jobName':job,'featured_jobLocation':location}:filterParams;
      let beg ='';
      let end ='';
      let numberOfItems = '';
      let totalPages = '';
      let forward = '';
      let Backward = '';
      let Prev = '';
      let Next = '';
      let temp = '';
      let back = 'filterfeaturedjobs';
      if(typeof filterData == "string"){
        JSON.parse(filterData);
    }
    if(filterData.featured_jobName == '' && filterData.featured_jobLocation == ''){
      swalNotify("Nothing to search for",'error');
    }
    else{
   
        if(start !== undefined && finish !== undefined){ beg = start; end = finish;}else{ beg = 0; end = 4;}
        $.ajax({
          method: "GET",
          url:"account/get.php/jobseeker/search_featured_jobs",
          dataType: "json",
          data: {'job':filterData.featured_jobName,'location':filterData.featured_jobLocation},
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
                        '<h3>Search Results Featured Jobs</h3>'+
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
                          '<a href="#" class="float-right" onclick="browse_all_featured_jobs();">Exit search mode <i class="fa fa-angle-double-right"></i></a>'+
                        '</div>'+
                        '<div class="col-lg-5 col-md-5 col-xs-12">'+
                          '<input type="text" class="form-control" id="featured_jobName" placeholder="Job Name">'+
                        '</div>'+
                        '<div class="col-lg-5 col-md-5 col-xs-12">'+
                          '<input type="text" class="form-control" id="featured_jobLocation" placeholder="Job Location">'+
                        '</div>'+
                        '<div class="col-lg-2 col-md-2 col-xs-12">'+
                          `<button type="submit" class="btn btn-common float-right" id="filterFeaturedJobs" onclick="filterFeaturedJobs();">Filter</button>`+
                        '</div>'+
                      '</div>'+
                    '</div>'+
                    '<div class="col-lg-12 col-md-12 col-xs-12 featured-jobs">';
                    $.each(data.slice(beg,end),function(i,val){
                      temp +=`<a class="job-listings" onclick='show_job_details(${val.job_id},"${back}",${JSON.stringify(filterData)});' style="cursor: pointer;">`+
                      '<div class="row">'+
                        '<div class="col-lg-4 col-md-4 col-xs-12">'+
                          '<div class="job-company-logo">'+
                            '<img src="'+((val.logo == null)?"https://ui-avatars.com/api/?name="+val.company_name.replace(/ /g, '+'):'https://dokuwo-uploads.s3.amazonaws.com/'+val.logo)+'" alt="" class="logo-img">'+
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
  
                    let begin = parseInt(beg);
                    let ending = parseInt(end);
                    let LastLast =  ((limitPerPage*Math.floor(numberOfItems/limitPerPage)) == (numberOfItems))?`filterFeaturedJobs(${(numberOfItems - 4)},${(numberOfItems)},${JSON.stringify(filterData)})`:`filterFeaturedJobs(${(limitPerPage*Math.floor(numberOfItems/limitPerPage))},${(numberOfItems)},${JSON.stringify(filterData)})`;
                    (numberOfItems <= limitPerPage || numberOfItems == ending)?(Next = 'disabled'):(numberOfItems < ending+limitPerPage)? (forward = `filterFeaturedJobs(${(begin+limitPerPage)},${numberOfItems},${JSON.stringify(filterData)})`):(forward = `filterFeaturedJobs(${(begin+limitPerPage)},${(ending+limitPerPage)},${JSON.stringify(filterData)})`); 
                    (begin == 0 && (ending == numberOfItems || ending == limitPerPage))? (Prev = 'disabled',Backward = `filterFeaturedJobs(${(begin)},${(ending)},${JSON.stringify(filterData)})`):(begin != 0 && ending != numberOfItems)?(Backward = `filterFeaturedJobs(${(begin-limitPerPage)},${(ending-limitPerPage)},${JSON.stringify(filterData)})`): (Backward = `filterFeaturedJobs(${(begin-limitPerPage)},${(numberOfItems-(numberOfItems%limitPerPage))},${JSON.stringify(filterData)})`);
                   temp +='<!-- Start Pagination -->'+
                  '<ul class="pagination">' +             
                   `<li class="active"><a href="javascript:void(0)" class="btn-prev" onclick='filterFeaturedJobs(0,4,${JSON.stringify(filterData)})'><i class="lni-angle-left"></i> First</a></li>`+
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
            }
            else{
              temp+='<div class="jumbotron error_message">'+
                '<h2 class="display-4">No Results!</h2>'+
                '<p class="lead">Sorry no results match your search.</p>'+
                '<hr class="my-4">'+
                '<a class="btn btn-primary btn-lg" href="#" role="button" onclick="browse_all_featured_jobs();">Go Back</a>'+
              '</div>';
            }
        
            /**
             * @function documentload ready
             */
            $(document).ready(()=>{
              $('header .intro-landing').remove();
              $('.content-section').empty().append(temp);
            });
  
            // end document load ready function
          },
          error: function(err){
            swalNotify(err.responseText,'error');
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
        method: "GET",
        url: "account/get.php/company/latest_jobs",
        dataType: "json",
        data:{'caller':'browse_latest_jobs'},
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
                        `<button type="submit" class="btn btn-common float-right" id="latestJobSearch" onclick="latestJobSearch();">Filter</button>`+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                 
                  '<div class="col-lg-12 col-md-12 col-xs-12">';
                  $.each(data.slice(beg,end),function(i,val){
                    temp +=`<a class="job-listings" onclick='show_job_details(${val.job_id},"${back}");' style="cursor: pointer;">`+
                    '<div class="row">'+
                      '<div class="col-lg-4 col-md-4 col-xs-12">'+
                        '<div class="job-company-logo">'+
                          '<img src="'+((val.logo == null)?"https://ui-avatars.com/api/?name="+val.company_name.replace(/ /g, '+'):'https://dokuwo-uploads.s3.amazonaws.com/'+val.logo)+'" alt="" class="logo-img">'+
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

                  let begin = parseInt(beg);
                  let ending = parseInt(end);
                   let LastLast =  ((limitPerPage*Math.floor(numberOfItems/limitPerPage)) == (numberOfItems))?`browse_all_latest_jobs(${(numberOfItems - 4)},${(numberOfItems)})`:`browse_all_latest_jobs(${(limitPerPage*Math.floor(numberOfItems/limitPerPage))},${(numberOfItems)})`;
                  (numberOfItems <= limitPerPage || numberOfItems == ending)?(Next = 'disabled'):(numberOfItems < ending+limitPerPage)? (forward = "browse_all_latest_jobs(\'"+(begin+limitPerPage)+"\',\'"+numberOfItems+"\')"):(forward = "browse_all_latest_jobs(\'"+(begin+limitPerPage)+"\',\'"+(ending+limitPerPage)+"\')"); 
                  (begin == 0 && (ending == numberOfItems || ending == limitPerPage))? (Prev = 'disabled',Backward = "browse_all_latest_jobs(\'"+(begin)+"\',\'"+(ending)+"\')"):(begin != 0 && ending != numberOfItems)?(Backward = "browse_all_latest_jobs(\'"+(begin-limitPerPage)+"\',\'"+(ending-limitPerPage)+"\')"): (Backward = "browse_all_latest_jobs(\'"+(begin-limitPerPage)+"\',\'"+(numberOfItems-(numberOfItems%limitPerPage))+"\')");
                  temp +='<!-- Start Pagination -->'+
                    '<ul class="pagination d-inline-flex">' +             
                    ' <li class="active"><a href="javascript:void(0)" class="btn-prev" onclick=" browse_all_latest_jobs(0,4)"><i class="lni-angle-left"></i> First</a></li>'+
                      '<li class="active"><a href="javascript:void(0)" class="btn-next" onclick="'+Backward+'">Prev <i class="lni-angle-right"></i></a></li>'+
                      '<li class="active"><a href="javascript:void(0)" class="btn-next" onclick="'+forward+'">Next <i class="lni-angle-right"></i></a></li>'+
                      '<li class="active mr-auto"><a href="javascript:void(0)" class="btn-next" onclick="'+LastLast+'">Last <i class="lni-angle-right"></i></a></li>'+
                      '<li class="active"><a href="index.php" class="btn btn-danger"><i class="fa fa-arrow-left"></i> Back</a></li>'+
                    '</ul>'+
                    '<!-- End Pagination -->'+
                    // '<a href="index.php" class="btn btn-danger"><i class="fa fa-arrow-left"></i> Back</a>'+
                    '</div>'+
                 '</div>'+
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
          swalNotify(err.responseText,'error');
        }
       });
        
    }

    function latestJobSearch(start,finish,searchParams){
      let job = $('#latest_JobName').val();
      let location = $('#latest_JobLocation').val();
      let filterData = (searchParams == null)?{'latest_JobName':job,'latest_JobLocation':location}:searchParams;
      let beg ='';
      let end ='';
      let numberOfItems = '';
      let totalPages = '';
      let forward = '';
      let Backward = '';
      let Prev = '';
      let Next = '';
      let temp = '';
      let back = 'latestjobsearch';
      if(typeof filterData == "string"){
        JSON.parse(filterData);
    }
    if(filterData.latest_JobName == '' && filterData.latest_JobLocation == ''){
      swalNotify("Nothing to search for",'error');
    }
    else{
   
        if(start !== undefined && finish !== undefined){ beg = start; end = finish;}else{ beg = 0; end = 4;}
        $.ajax({
          method: "GET",
          url:"account/get.php/jobseeker/search_latest_jobs",
          dataType: "json",
          data: {'jobName':filterData.latest_JobName,'jobLocation':filterData.latest_JobLocation},
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
                        '<h3>Search Results Latest Jobs</h3>'+
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
                          '<a href="#" class="float-right" onclick="browse_all_latest_jobs();">Exit search mode <i class="fa fa-angle-double-right"></i></a>'+
                        '</div>'+
                        '<div class="col-lg-5 col-md-5 col-xs-12">'+
                          '<input type="text" class="form-control" id="latest_JobName" placeholder="Job Name">'+
                        '</div>'+
                        '<div class="col-lg-5 col-md-5 col-xs-12">'+
                          '<input type="text" class="form-control" id="latest_JobLocation" placeholder="Job Location">'+
                        '</div>'+
                        '<div class="col-lg-2 col-md-2 col-xs-12">'+
                          `<button type="submit" class="btn btn-common float-right" id="latestJobSearch" onclick="latestJobSearch();">Filter</button>`+
                        '</div>'+
                      '</div>'+
                    '</div>'+
                    '<div class="col-lg-12 col-md-12 col-xs-12 featured-jobs">';
                    $.each(data.slice(beg,end),function(i,val){
                      temp +=`<a class="job-listings" onclick='show_job_details(${val.job_id},"${back}",${JSON.stringify(filterData)});' style="cursor: pointer;">`+
                      '<div class="row">'+
                        '<div class="col-lg-4 col-md-4 col-xs-12">'+
                          '<div class="job-company-logo">'+
                            '<img src="'+((val.logo == null)?"https://ui-avatars.com/api/?name="+val.company_name.replace(/ /g, '+'):'https://dokuwo-uploads.s3.amazonaws.com/'+val.logo)+'" alt="" class="logo-img">'+
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
  
                    let begin = parseInt(beg);
                    let ending = parseInt(end);
                    let LastLast =  ((limitPerPage*Math.floor(numberOfItems/limitPerPage)) == (numberOfItems))?`latestJobSearch(${(numberOfItems - 4)},${(numberOfItems)},${JSON.stringify(filterData)})`:`latestJobSearch(${(limitPerPage*Math.floor(numberOfItems/limitPerPage))},${(numberOfItems)},${JSON.stringify(filterData)})`;
                    (numberOfItems <= limitPerPage || numberOfItems == ending)?(Next = 'disabled'):(numberOfItems < ending+limitPerPage)? (forward = `latestJobSearch(${(begin+limitPerPage)},${numberOfItems},${JSON.stringify(filterData)})`):(forward = `latestJobSearch(${(begin+limitPerPage)},${(ending+limitPerPage)},${JSON.stringify(filterData)})`); 
                    (begin == 0 && (ending == numberOfItems || ending == limitPerPage))? (Prev = 'disabled',Backward = `latestJobSearch(${(begin)},${(ending)},${JSON.stringify(filterData)})`):(begin != 0 && ending != numberOfItems)?(Backward = `latestJobSearch(${(begin-limitPerPage)},${(ending-limitPerPage)},${JSON.stringify(filterData)})`): (Backward = `latestJobSearch(${(begin-limitPerPage)},${(numberOfItems-(numberOfItems%limitPerPage))},${JSON.stringify(filterData)})`);
                   temp +='<!-- Start Pagination -->'+
                  '<ul class="pagination">' +             
                   `<li class="active"><a href="javascript:void(0)" class="btn-prev" onclick='latestJobSearch(0,4,${JSON.stringify(filterData)})'><i class="lni-angle-left"></i> First</a></li>`+
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
            }
            else{
              temp+='<div class="jumbotron error_message">'+
                '<h2 class="display-4">No Results!</h2>'+
                '<p class="lead">Sorry no results match your search.</p>'+
                '<hr class="my-4">'+
                '<a class="btn btn-primary btn-lg" href="#" role="button" onclick="browse_all_latest_jobs();">Go Back</a>'+
              '</div>';
            }
        
            /**
             * @function documentload ready
             */
            $(document).ready(()=>{
              $('header .intro-landing').remove();
              $('.content-section').empty().append(temp);
            });
  
            // end document load ready function
          },
          error: function(err){
            swalNotify(err.responseText,'error');
          }
         });

        }
    }

    function show_blog_details(blog_id,back,callbackdata){
     
      let blog_details = '';
      $.ajax({
        method: "POST",
        url: "account/get.php/company/get_blog_details",
        dataType: "json",
        data: {'blog_id':blog_id},
        success: function(data){
          if(data != 400){
            let date_posted = new Date(data[0].date_posted);
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

            '<!-- Page content Start --> '+
            '<div class="listpgWraper">'+
              '<div class="container">'+
             
              '<!-- blog details start --> '+
              '<div class="row">'+

              '<!-- Left side start --> '+
              '<div class="col-lg-8 col-md-12 col-sm-12 col-xs-12">'+
              
              '<!-- Blog List start -->'+
              '<div class="blogWraper">'+
                '<div class="blogList blogdetailbox">'+
                  '<div class="postimg"><img src="https://dokuwo-uploads.s3.amazonaws.com/'+((data[0].blog_image == "" || data[0].blog_image == null)?"default.jpg":data[0].blog_image)+'" alt="blog Title">'+
                    '<div class="date"> '+ date_posted.getDate() +' '+ formatMonth(date_posted.getMonth()) +'</div>'+
                  '</div>'+
                  '<div class="post-header margin-top30">'+
                    '<div class="d-flex align-items-center">'+
                    '<h4 class="mr-auto"><a href="#">'+ data[0].blog_title +'</a></h4>';
                    (back == "blogposts")?blog_details +=`<div class="jobButtons"><a href="#" class="btn report" onclick='show_blog_posts();'><i class="fa fa-arrow-left" aria-hidden="true"></i> Back</a> </div>`:
                    (back == "searchblog")?blog_details +=`<div class="jobButtons"><a href="#" class="btn report" onclick='searchBlogs(${undefined},${undefined},"${callbackdata}");'><i class="fa fa-arrow-left" aria-hidden="true"></i> Back</a> </div>`:blog_details +=`<div class="jobButtons"><a href="index.php" class="btn report"><i class="fa fa-arrow-left" aria-hidden="true"></i> Back</a> </div>`;
                    blog_details +='</div>'+
                    '<div class="postmeta">By : <span>'+ data[0].blog_publisher+' </span> Category : <a href="#">'+ data[0].category+'</a></div>'+
                  '</div>'+
                  '<p> '+ data[0].blog_content +'</p>'+
                '</div>'+

                '<div id="disqus_thread"></div>'+
               
                '</div>'+
             
              '</div>'+
              '<!-- Left side End --> '+
              '<!-- right side start --> '+
              '<div class="col-lg-4 col-md-12 col-sm-12 col-xs-12 blog_sidebar">'+

              '</div>'+
              '<!-- right side End --> '+

              '</div>'+
              '<!-- blog details End --> '+

              '</div>'+
            '</div>'+
            '<!-- Page Content End --> ';
            
          }
          $(document).ready(function(){
            $('header .intro-landing').remove();
            $('.content-section').empty().append(blog_details);
            blogSideBar();
            //Disqus
            var disqus_config = function () {
              this.page.url = 'http://www.dokuwo.com/index.php';  // Replace PAGE_URL with your page's canonical URL variable
              this.page.identifier = blog_id; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
              };
              (function() { // DON'T EDIT BELOW THIS LINE
              var d = document, s = d.createElement('script');
              s.src = 'https://dokuwo.disqus.com/embed.js';
              s.setAttribute('data-timestamp', +new Date());
              (d.head || d.body).appendChild(s);
              })();

          });
        },
        error: function(err){
          swalNotify(err.responseText,'error');
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
      let back = 'blogposts';
      let blogs = '';

      if(start !== undefined && finish !== undefined){ beg = start; end = finish;}else{ beg = 0; end = 3;}
      $.ajax({
        method: "GET",
        url: "account/get.php/company/retrieve_all_blogs",
        data:{'beg':beg,'end':end},
        dataType: "json",
        success: function(data){
          if(beg == 0){
            blogs = data[0];
            localStorage.setItem('totalBlogs',parseInt(data[1]));
          }
          else{ blogs = data[0]};
          numberOfItems = localStorage.getItem('totalBlogs');
          limitPerPage = 3;
          totalPages = Math.round(numberOfItems/limitPerPage);
          if(blogs != 400){
          posts +='<div class="page-header">'+
              '<div class="container">'+
                '<div class="row"> '+        
                  '<div class="col-lg-12">'+
                    '<div class="inner-header">'+
                      '<h3>Blog Posts</h3>'+
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
                    $.each(blogs, function(i,val){
                      let date_posted = new Date(val.date_posted);
                      posts +='<!-- Start Post -->'+
                      `<div class="blog-post" onclick='show_blog_details("${val.blog_id}","${back}");' style="cursor: pointer;">`+
                        '<!-- Post thumb -->'+
                          '<div class="post-thumb">'+
                          '<a href="#"><img class="img-fulid" src="https://dokuwo-uploads.s3.amazonaws.com/'+((val.blog_image == "" || val.blog_image == null)?"default.jpg":val.blog_image)+'" alt=""></a>'+
                          '<div class="hover-wrap">'+
                      '</div>'+
                  '</div>'+
                  '<!-- End Post post-thumb -->'+
    
                  '<!-- Post Content -->'+
                  '<div class="post-content">'+                    
                    '<h3 class="post-title"><a href="#">'+ val.blog_title+'</a></h3>'+
                    '<div class="meta">'+                   
                      `<span class="meta-part"><a href="#"><i class="lni-user"></i>By ${val.blog_publisher}</a></span>`+
                      `<span class="meta-part"><i class="lni-calendar"></i><a>${formatMonth(date_posted.getMonth())} ${date_posted.getDate()}, ${date_posted.getFullYear()}</a></span>`+                   
                    '</div>';
                    if($.trim(val.blog_content).length > 100){
                      let subcontent = val.blog_content.substring(0,100);
                      posts +='<p>'+subcontent+'...</p>'+
                      `<a class="btn btn-common" href="#">Read More</a>`;
                    }
                    else{
                      posts +='<p>'+val.blog_content+'......</p>';
                    }
                     posts +='</div>'+
                  '<!-- Post Content -->'+
    
                '</div>'+
                '<!-- End Post -->';
                  });   
                
                let begin = parseInt(beg);
                let ending = parseInt(end);
                let LastLast = `show_blog_posts(${(limitPerPage*Math.floor(numberOfItems/limitPerPage))},${(limitPerPage)})`;
                (numberOfItems <= limitPerPage || numberOfItems == ending || (begin+limitPerPage > numberOfItems) || begin > numberOfItems || (begin == limitPerPage && begin > numberOfItems))?(Next = 'disabled'):(forward = `show_blog_posts(${(begin+limitPerPage)},${limitPerPage})`); 
                (begin == 0 && (ending == numberOfItems || ending == limitPerPage))? (Prev = 'disabled',Backward = `show_blog_posts(${(begin)},${(ending)})`):(begin != 0 && ending != numberOfItems)?(Backward = `show_blog_posts(${(begin-limitPerPage)},${(limitPerPage)})`): (Backward = `show_blog_posts(${(begin-limitPerPage)},${limitPerPage})`);
                posts +='<!-- Start Pagination -->'+
                  '<ul class="pagination">' +             
                   `<li class="active"><a href="javascript:void(0)" class="btn-prev" onclick='show_blog_posts(0,3)'><i class="lni-angle-left"></i> First</a></li>`+
                    `<li class="active"><a href="javascript:void(0)" class="btn-next" onclick='${Backward}'>Prev <i class="lni-angle-right"></i></a></li>`+
                    `<li class="active"><a href="javascript:void(0)" class="btn-next" onclick='${forward}'>Next <i class="lni-angle-right"></i></a></li>`+
                    `<li class="active"><a href="javascript:void(0)" class="btn-next" onclick='${LastLast}'>Last <i class="lni-angle-right"></i></a></li>`+
                  '</ul>'+
                  '<!-- End Pagination -->'+
                  '</div>'+
                  '<!-- End Blog Posts -->'+

                  '<!-- right side start --> '+
                  '<div class="col-md-12 col-lg-4 blog_sidebar">'+

                  '</div>'+
                  '<!-- right side End --> '+
        
                '</div>'+
              '</div>'+
            '</div>'+
            '<!-- End Content -->';
            }
           
            $(document).ready(function(){
              $('header .intro-landing').remove();
              $('.content-section').empty().append(posts);
              blogSideBar();
            });
            
          },
          error: function(err){
            swalNotify(err.responseText,'error');  
          } 

        });
      
    }

    function blog_categories(){
      let blog_cat = '';
      $.ajax({
        method: "GET",
        url: "account/get.php/company/get_blog_categories",
        dataType: "json",
        success: function(data){
          if(data != 400){
    
            $.each(data, function(i,cat){
              blog_cat +=`<li><i class="fa fa-caret-right"></i> <a href="#" onclick="get_posts_by_category('${cat.category}');">${cat.category} <span class="num-posts">(${cat.num_posts})</span></a></li>`;
            });
        
          }
          $('.blog_categories').prepend(blog_cat);
          
        },
        error: function(err){
          swalNotify(err.responseText,'error');
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
              $.each(data.recentPosts, function(i,val){
                let date_posted = new Date(val.date_posted);
                recent_posts +=`<li onclick="show_blog_details(${val.blog_id});">`+
                `<div class="media-left"> <a href="#"><img src="https://dokuwo-uploads.s3.amazonaws.com/${val.blog_image}" alt="Blog Image"></a> </div>`+
                 `<div class="media-body"> <a class="media-heading" href="#">${val.blog_title}</a> <span>${formatMonth(date_posted.getMonth())} ${date_posted.getDate()}, ${date_posted.getFullYear()}</span> </div>`+
                 '</li>';
              });
                  
          }

              $('.recent_posts').append(recent_posts);
              
        },
        error: function(err){
          swalNotify(err.responseText,'error');
        }
      });
    }

    function get_posts_by_category(category,start,finish){
      let posts = '';
      let beg ='';
      let end ='';
      let numberOfItems = '';
      let totalPages = '';
      let forward = '';
      let Backward = '';
      let Prev = '';
      let Next = '';
      let back = 'blogposts';

      if(start !== undefined && finish !== undefined){ beg = start; end = finish;}else{ beg = 0; end = 3;}
 
      $.ajax({
        method: "GET",
        url: "account/get.php/company/get_posts_by_category",
        dataType: "json",
        data: {'category':category},
        success: function(data){
          if(data != 400){
            numberOfItems = data[0].length;
            limitPerPage = 3;
            totalPages = Math.round(numberOfItems/limitPerPage);
            posts +='<div class="page-header">'+
                '<div class="container">'+
                  '<div class="row"> '+        
                    '<div class="col-lg-12">'+
                      '<div class="inner-header">'+
                        '<h3>Blog Posts</h3>'+
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
                      $.each(data[0].slice(beg,end), function(i,val){
                        let date_posted = new Date(val.date_posted);
                        posts +='<!-- Start Post -->'+
                        `<div class="blog-post" onclick='show_blog_details("${val.blog_id}","${back}");' style="cursor: pointer;">`+
                          '<!-- Post thumb -->'+
                            '<div class="post-thumb">'+
                            '<a href="#"><img class="img-fulid" src="https://dokuwo-uploads.s3.amazonaws.com/'+((val.blog_image == "" || val.blog_image == null)?"default.jpg":val.blog_image)+'" alt=""></a>'+
                            '<div class="hover-wrap">'+
                        '</div>'+
                    '</div>'+
                    '<!-- End Post post-thumb -->'+
      
                    '<!-- Post Content -->'+
                    '<div class="post-content">'+                    
                      '<h3 class="post-title"><a href="#">'+ val.blog_title+'</a></h3>'+
                      '<div class="meta">'+                   
                        `<span class="meta-part"><a href="#"><i class="lni-user"></i>By ${val.blog_publisher}</a></span>`+
                        `<span class="meta-part"><i class="lni-calendar"></i><a>${formatMonth(date_posted.getMonth())} ${date_posted.getDate()}, ${date_posted.getFullYear()}</a></span>`+                   
                      '</div>';
                      if($.trim(val.blog_content).length > 100){
                        let subcontent = val.blog_content.substring(0,100);
                        posts +='<p>'+subcontent+'...</p>'+
                        `<a class="btn btn-common" href="#">Read More</a>`;
                      }
                      else{
                        posts +='<p>'+val.blog_content+'......</p>';
                      }
                       posts +='</div>'+
                    '<!-- Post Content -->'+
      
                  '</div>'+
                  '<!-- End Post -->';
                    });   
                  
                  let begin = parseInt(beg);
                  let ending = parseInt(end);
                  let LastLast = ((limitPerPage*Math.floor(numberOfItems/limitPerPage)) == (numberOfItems))?`show_blog_posts(${(numberOfItems - 3)},${(numberOfItems)})`:`show_blog_posts(${(limitPerPage*Math.floor(numberOfItems/limitPerPage))},${(numberOfItems)})`;
                  (numberOfItems <= limitPerPage || numberOfItems == ending)?(Next = 'disabled'):(numberOfItems < ending+limitPerPage)? (forward = `show_blog_posts(${(begin+limitPerPage)},${numberOfItems})`):(forward = `show_blog_posts(${(begin+limitPerPage)},${(ending+limitPerPage)})`); 
                  (begin == 0 && (ending == numberOfItems || ending == limitPerPage))? (Prev = 'disabled',Backward = `show_blog_posts(${(begin)},${(ending)})`):(begin != 0 && ending != numberOfItems)?(Backward = `show_blog_posts(${(begin-limitPerPage)},${(ending-limitPerPage)})`): (Backward = `show_blog_posts(${(begin-limitPerPage)},${(numberOfItems-(numberOfItems%limitPerPage))})`);
                  posts +='<!-- Start Pagination -->'+
                    '<ul class="pagination">' +             
                     `<li class="active"><a href="javascript:void(0)" class="btn-prev" onclick='show_blog_posts(0,3)'><i class="lni-angle-left"></i> First</a></li>`+
                      `<li class="active"><a href="javascript:void(0)" class="btn-next" onclick='${Backward}'>Prev <i class="lni-angle-right"></i></a></li>`+
                      `<li class="active"><a href="javascript:void(0)" class="btn-next" onclick='${forward}'>Next <i class="lni-angle-right"></i></a></li>`+
                      `<li class="active"><a href="javascript:void(0)" class="btn-next" onclick='${LastLast}'>Last <i class="lni-angle-right"></i></a></li>`+
                    '</ul>'+
                    '<!-- End Pagination -->'+
                    '</div>'+
                    '<!-- End Blog Posts -->'+
  
                    '<!-- right side start --> '+
                    '<div class="col-md-4 blog_sidebar">'+
  
                    '</div>'+
                    '<!-- right side End --> '+
          
                  '</div>'+
                '</div>'+
              '</div>'+
              '<!-- End Content -->';
              }
             
              $(document).ready(function(){
                $('header .intro-landing').remove();
                $('.content-section').empty().append(posts);
                blogSideBar();
              });
           
        },
        error: function(err){
          swalNotify(err.responseText,'error');
        }
      });

    }

    function blogSideBar(){
      let temp = '';

      temp+='<!-- Side Bar -->'+
      '<div class="sidebar">'+ 
        '<!-- Search -->'+
        '<div class="widget">'+
          '<h5 class="widget-title">Search</h5>'+
          '<div class="search">'+
              '<input type="text" class="form-control" name="searchParams" id="searchParams" placeholder="Search blog:Title,Publisher">'+
              '<button class="btn" onclick="searchBlogs();"><i class="fa fa-search"></i></button>'+
          '</div>'+
        '</div>'+
        '<!-- Categories -->'+
        '<div class="widget">'+
          '<h5 class="widget-title">Categories</h5>'+
          '<ul class="categories blog_categories">'+
            
          '</ul>'+
        '</div>'+
        '<!-- Recent Posts -->'+
        '<div class="widget">'+
          '<h5 class="widget-title">Recent Posts</h5>'+
          '<ul class="papu-post recent_posts">'+
            
          '</ul>'+
        '</div>'+
      '</div>';
      $(document).ready(function(){
        $('.blog_sidebar').prepend(temp);
        blog_categories();
        show_recent_posts();
      })
      
    }

    function searchBlogs(start,finish,searchParams){
      Params = $('#searchParams').val();
      let filterData = (searchParams == null)?Params:searchParams;
      let temp = '';
      let beg ='';
      let end ='';
      let numberOfItems = '';
      let totalPages = '';
      let forward = '';
      let Backward = '';
      let Prev = '';
      let Next = '';
      let back = 'searchblog';
      let blogs = '';
      if(filterData == ''){swalNotify("Nothing to search for",'error');}
      else{
        if(start !== undefined && finish !== undefined){ beg = start; end = finish;}else{ beg = 0; end = 3;}
        $.ajax({
          method: "GET",
          url: "account/get.php/jobseeker/search_for_blogs",
          dataType: "json",
          data: {'params':filterData,'beg':beg,'end':end},
          success: function(data){
            if(beg == 0){
              blogs = data[0];
              localStorage.setItem('totalsearchBlog',parseInt(data[1]));
            }
            else{ blogs = data};
            numberOfItems = localStorage.getItem('totalsearchBlog');
            limitPerPage = 3;
            totalPages = Math.round(numberOfItems/limitPerPage);
            if(data != 400){
            temp +='<div class="page-header">'+
          '<div class="container">'+
            '<div class="row"> '+        
              '<div class="col-lg-12">'+
                '<div class="inner-header">'+
                  '<h3>Search Results</h3>'+
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
                $.each(blogs, function(i,val){
                  let date_posted = new Date(val.date_posted);
                  temp +='<!-- Start Post -->'+
                  `<div class="blog-post" onclick='show_blog_details("${val.blog_id}","${back}",${JSON.stringify(filterData)});' style="cursor: pointer;">`+
                    '<!-- Post thumb -->'+
                      '<div class="post-thumb">'+
                      '<a href="#"><img class="img-fulid" src="https://dokuwo-uploads.s3.amazonaws.com/'+((val.blog_image == "" || val.blog_image == null)?"default.jpg":val.blog_image)+'" alt=""></a>'+
                      '<div class="hover-wrap">'+
                  '</div>'+
              '</div>'+
              '<!-- End Post post-thumb -->'+

              '<!-- Post Content -->'+
              '<div class="post-content">'+                    
                '<h3 class="post-title"><a href="#">'+ val.blog_title+'</a></h3>'+
                '<div class="meta">'+                   
                  `<span class="meta-part"><a href="#"><i class="lni-user"></i>By ${val.blog_publisher}</a></span>`+
                  `<span class="meta-part"><i class="lni-calendar"></i><a>${formatMonth(date_posted.getMonth())} ${date_posted.getDate()}, ${date_posted.getFullYear()}</a></span>`+                   
                '</div>';
                if($.trim(val.blog_content).length > 100){
                  let subcontent = val.blog_content.substring(0,100);
                  temp +='<p>'+subcontent+'...</p>';
                }
                else{
                  temp +='<p>'+val.blog_content+'......</p>';
                }
                temp +=`<a class="btn btn-common" href="#">Read More</a>`+
              '</div>'+
              '<!-- Post Content -->'+

            '</div>'+
            '<!-- End Post -->';
              });   
            
            let begin = parseInt(beg);
            let ending = parseInt(end);
            let LastLast = `searchBlogs(${(limitPerPage*Math.floor(numberOfItems/limitPerPage))},${(numberOfItems)},${JSON.stringify(filterData)})`;
            (numberOfItems <= limitPerPage || numberOfItems == ending || (begin+limitPerPage > numberOfItems) || begin > numberOfItems || (begin == limitPerPage && begin > numberOfItems))?(Next = 'disabled'):(forward = `searchBlogs(${(begin+limitPerPage)},${limitPerPage},${JSON.stringify(filterData)})`); 
            (begin == 0 && (ending == numberOfItems || ending == limitPerPage))? (Prev = 'disabled',Backward = `searchBlogs(${(begin)},${(ending)},${JSON.stringify(filterData)})`):(begin != 0 && ending != numberOfItems)?(Backward = `searchBlogs(${(begin-limitPerPage)},${(limitPerPage)},${JSON.stringify(filterData)})`): (Backward = `searchBlogs(${(begin-limitPerPage)},${limitPerPage},${JSON.stringify(filterData)})`);
            temp +='<!-- Start Pagination -->'+
              '<ul class="pagination">' +             
               `<li class="active"><a href="javascript:void(0)" class="btn-prev" onclick='searchBlogs(0,3,${JSON.stringify(filterData)})'><i class="lni-angle-left"></i> First</a></li>`+
                `<li class="active"><a href="javascript:void(0)" class="btn-next" onclick='${Backward}'>Prev <i class="lni-angle-right"></i></a></li>`+
                `<li class="active"><a href="javascript:void(0)" class="btn-next" onclick='${forward}'>Next <i class="lni-angle-right"></i></a></li>`+
                `<li class="active"><a href="javascript:void(0)" class="btn-next" onclick='${LastLast}'>Last <i class="lni-angle-right"></i></a></li>`+
              '</ul>'+
              '<!-- End Pagination -->'+
              '</div>'+
              '<!-- End Blog Posts -->'+

              '<!-- right side start --> '+
              '<div class="col-md-4 blog_sidebar">'+

              '</div>'+
              '<!-- right side End --> '+
    
            '</div>'+
          '</div>'+
        '</div>'+
        '<!-- End Content -->';
      
            }
            else{
              temp+='<div class="jumbotron error_message">'+
            '<h2 class="display-4">No Results!</h2>'+
            '<p class="lead">Sorry no results match your search.</p>'+
            '<hr class="my-4">'+
            '<a class="btn btn-primary btn-lg" href="#" role="button" onclick="show_blog_posts();">Go Back</a>'+
          '</div>';
            }

            $(document).ready(function(){
              $('header .intro-landing').remove();
              $('.content-section').empty().append(temp);
              blogSideBar();
            })

          },
          error: function(err){
            swalNotify(err.responseText,'error');
          }

        });

      }
    }


    function apply_job(job_id,company_id){
      if(cookie_usertype === '' || cookie_usertype == null){
        swal('You are not logged in','Please Sign in to your account or create one to apply','error','Close');
      }
      else{
         $.ajax({
          method: "POST",
          url: "account/post.php/jobseeker/send_application",
          dataType: "json",
          data :{'job_id':job_id,'company_id':company_id,'jobseeker_id':cookie_user_id},
          success: function(data){
            if(data == 200){
              swal('Application sent','Your Application has been successfully sent','success','Close');
            }
            else{
              swalNotify(data,'error');
            }
          },
          error: function(err){
            swalNotify(err.responseText,'error');
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
        swal('Invalid Name!','Hirer Name field cannot be empty','error','Cool');
        return;
      }

      if (hirer_email.length < 1) {
        swal('Invalid Email!','Email field cannot be empty','error','Cool');
        return;
       }else {
        if (!validEmail(hirer_email)) {
           swal('Invalid Email!','Please enter a valid email!','error','Cool');
           return;
        }else if(hirer_email.length > 40){
          swal('Invalid Email!','Email field must be less than 40 characters!','error','Cool');
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
        }else if(hirer_phone.length > 20){
          swal('Invalid Phone number!','Phone field must be less than 20 characters','error','Cool');
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
              $('#hireModal').modal('hide');
              swal('Request sucessfully sent',jobseeker_name +' has been notified','success','Close');
            }
          },
          error: function(err){
            $('#hireModal').modal('hide');
            swalNotify(err.responseText,'error');
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
                      '<p>Office: Bundung - Serrekunda, Gambia.</p>'+
                    '</div>'+
                    '<div class="single-contact">'+
                      '<div class="contact-icon">'+
                        '<i class="lni-envelope"></i>'+
                      '</div>'+
                      '<p><a href="mailto:dokuwo.gm@gmail.com">Customer Support: dokuwo.gm@gmail.com</a></p>'+
                      '<p><a href="mailto:asj.sarjo@gmail.com">Technical Support: asj.sarjo@gmail.com</a></p>'+
                    '</div>'+
                    '<div class="single-contact">'+
                      '<div class="contact-icon">'+
                        '<i class="lni-phone-handset"></i>'+
                      '</div>'+
                      '<p><a href="#">Customer Supprort: +220 3196234</a></p>'+
                      '<p><a href="#">Technical Supprort: +220 5336171</a></p>'+
                    '</div>'+
                  '</div>'+
                '</div>'+
              '</div>'+
              '<div class="col-md-12">'+
                '<div id="conatiner-map">'+
                  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15523.268626058687!2d-16.691193680411526!3d13.423642120537734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec29999569040ab%3A0x9f30a11d5518f8e8!2sBundung%2C%20Serrekunda!5e0!3m2!1sen!2sgm!4v1590503715838!5m2!1sen!2sgm" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'+
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
        $('#submit').prop('disabled', true);
        let name = $('#contact_name').val();
        let email = $('#contact_email').val();
        let msg_subject = $('#msg_subject').val();
        let message = $('#message').val();
  
        if (name == ''){
          swal('Invalid Name!','Name field cannot be empty','error','Cool');
          return;
        }
        if (email.length < 1) {
          swal('Invalid Email!','Email field cannot be empty','error','Cool');
          return;
         }else {
          if (!validEmail(email)) {
             swal('Invalid Email!','Please field enter a valid email!','error','Cool');
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
          url: "account/post.php/admin/contact_admin",
          dataType: "json",
          data :{'name':name,'email':email,'subject':msg_subject,'message': message},
          success: function(data){
            if(data == 200){
              $('#submit').prop('disabled', false);
              $('#contact_name').val('');
              $('#contact_email').val('');
              $('#msg_subject').val('');
              $('#message').val('');
              swal('Message Sent','Your message has been successfully sent. Thank you for using Dokuwo.','success','Close');
            }
          },
          error: function(err){
            $('#submit').prop('disabled', false);
            swalNotify(err.responseText,'error');
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
       

        '<div class="row pricing-tables">'+
        '<div class="col-lg-12 col-md-12 col-xs-12 section-header">'+
            '<h2 class="section-title text-center margin-price-card">Recruiters</h2>'+
          '</div>'+
          '<div class="col-lg-4 col-md-4 col-xs-12 margin-price-card">'+
            '<div class="pricing-table border-color-defult margin-price-card">'+
              '<div class="pricing-details">'+
                '<div class="icon">'+
                  '<i class="lni-rocket"></i>'+
                '</div>'+
                '<h2>One-time</h2>'+
                '<ul>'+
                  '<li>Post 1 Job</li>'+
                  '<li>Edit Your Job Listing</li>'+
                  '<li>Manage Applications</li>'+
                  '<li>Message Jobseekers</li>'+
                  '<li>View Jobseekers Profiles</li>'+
                '</ul>'+
                '<div class="price"><span>GMD</span>2500<span>/Job</span></div>'+
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
                 ' <li>Post Unlimited Jobs</li>'+
                  '<li>Edit Your Job Listings</li>'+
                  '<li>Manage Applications</li>'+
                  '<li>Message Jobseekers</li>'+
                  '<li>View Jobseekers Profiles</li>'+
                '</ul>'+
                '<div class="price"><span>GMD</span>12000<span>/Month</span></div>'+
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
                ' <li>Post Unlimited Jobs</li>'+
                '<li>Edit Your Job Listings</li>'+
                '<li>Manage Applications</li>'+
                '<li>Message Jobseekers</li>'+
                '<li>View Jobseekers Profiles</li>'+
                '</ul>'+
                '<div class="price"><span>GMD</span>35000<span>/4 Month</span></div>'+
              '</div>'+
              
            '</div>'+
          '</div>'+
          '<div class="col-lg-12 col-md-12 col-xs-12 section-header">'+
            '<h2 class="section-title text-center margin-price-card">Freelancers</h2>'+
          '</div>'+

          '<div class="col-lg-4 col-md-4 col-xs-12">'+
            '<div class="pricing-table border-color-defult">'+
              '<div class="pricing-details">'+
                '<div class="icon">'+
                  '<i class="lni-free"></i>'+
                '</div>'+
                '<h2>Free</h2>'+
                '<ul>'+
                  '<li>Apply for Jobs</li>'+
                  '<li>use Messaging</li>'+
                  '<li>Get hired for Freelance Work</li>'+
                  '<li>Get Displayed on Landing Page</li>'+
                  '<li></li>'+
                  '<li></li>'+
                  '<li></li>'+
                '</ul>'+
                '<div class="price"><span>GMD</span>0<span></span></div>'+
              '</div>'+
              
            '</div>'+
          '</div>'+

          '<div class="col-lg-4 col-md-4 col-xs-12">'+
            '<div class="pricing-table border-color-red">'+
              '<div class="pricing-details">'+
                '<div class="icon">'+
                  '<i class="lni-rocket"></i>'+
                '</div>'+
                '<h2>Professional</h2>'+
                '<ul>'+
                  '<li>Free Plan Plus</li>'+
                  '<li>Get Rated</li>'+
                  '<li>Get Reviewed</li>'+
                  '<li>Add Portfolio</li>'+
                  '<li>30-day Expired</li>'+
                  '<li></li>'+
                '</ul>'+
                '<div class="price"><span>GMD</span>150<span>/Month</span></div>'+
              '</div>'+
              
            '</div>'+
          '</div>'+

          '<div class="col-lg-4 col-md-4 col-xs-12">'+
            '<div class="pricing-table border-color-green">'+
              '<div class="pricing-details">'+
                '<div class="icon">'+
                  '<i class="lni-drop"></i>'+
                '</div>'+
                '<h2>Advance</h2>'+
                '<ul>'+
                  '<li>Professional Plan Plus</li>'+
                  '<li>1-year Expired</li>'+
                  '<li></li>'+
                  '<li></li>'+
                  '<li></li>'+
                  '<li></li>'+
                  '<li></li>'+
                  '<li></li>'+
                  '<li></li>'+
                  '<li></li>'+
                '</ul>'+
                '<div class="price"><span>GMD</span>1000<span>/Year</span></div>'+
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

    function show_featured_freelancers(caller,id,back){
      let temp = '';
      
        $.ajax({
          method: "GET",
          url: "account/get.php/company/get_featured_freelancers",
          dataType: "json",
          success: function(data){
            temp +='<div class="job-alerts-item candidates">'+
            '<h3 class="alerts-title">Featured Freelancers</h3>';
            if(data != 400){
              data.forEach(function(val,index){
                let dob = new Date(val.dob);
                temp += '<div class="manager-resumes-item">'+
                '<div class="manager-content">'+
                  '<a><img class="resume-thumb logo-img" src="https://dokuwo-uploads.s3.amazonaws.com/'+((val.image == "" || val.image == null)?"default.jpg":val.image)+'" alt=""></a>'+
                  '<div class="manager-info">'+
                    '<div class="manager-name">'+
                      `<h4><a href="#" onclick='show_freelancer_details(${val.jobseeker_id},"${caller}","${id}","${back}");'  style="cursor: pointer;">${val.fullName}</a></h4>`+
                      '<h5>'+val.tag_line +'</h5>'+
                    '</div>'+
                    '<div class="manager-meta">'+
                      '<span class="location"><i class="lni-map-marker"></i> '+val.address +'</span>'+
                      '<span class="rate"><i class="lni-alarm-clock"></i> '+val.country +'</span>'+
                    '</div>'+
                  '</div>'+
                '</div>'+
                '<div class="update-date">'+
                  '<p class="status">'+
                    `<strong>Date of birth:</strong> ${formatMonth(dob.getMonth())} ${dob.getDate()}, ${dob.getFullYear()}`+
                  '</p>'+
                  '<div class="action-btn">'+
                    `<a class="btn btn-xs btn-gray" href="#" onclick='show_freelancer_details(${val.jobseeker_id},"${caller}","${id}","${back}");'  style="cursor: pointer;">VIEW</a>`+
                    `<a class="btn btn-xs btn-danger" href="#" data-toggle="modal" data-target="#hireModal" onclick='hireFreelancer("${val.fullName}","${val.jobseeker_id}");'>HIRE</a>`+
                  '</div>'+
                '</div>'+
              '</div>';
              });

            }
            '</div>'+
            '</div>';  
            $('.featured_freelancers').prepend(temp);
          },
          error: function(err){
            swalNotify(err.responseText,'error');
          }
        });
      
      
    }
function faq(){
  let temp = `    <!-- Page Header Start -->
  <div class="page-header">
    <div class="container">
      <div class="row">         
        <div class="col-lg-12">
          <div class="inner-header">
            <h3>FAQ</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Page Header End -->  

  <!-- Start Content -->
  <div id="faq" class="section pb-45">
    <div class="container">        
      <div class="row">
        <div class="col-lg-6 col-md-6 col-xs-12">
          <!-- accordion start -->
          <div class="panel-group" id="accordion">
            <div class="panel panel-default">
              <div class="panel-heading">
                <h4 class="panel-title">
                  <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                    How do I sign Up? 
                  </a>
                </h4>
              </div>
              <div id="collapseOne" class="panel-collapse collapse in">
                <div class="panel-body">
                  <p>You can either sign up as a <strong>Recruiter</strong> or as <strong>jobseeker/Freelancer</strong>. When you hover over the Sign In/Up link on the main menu and select the right option, You are to fill in your email and a password in the form fields and click <strong>REGISTER NOW</strong>.</p>
                  <br>
                  <p>
                    If the email you provided is correct, you will receive an email with a link to activate your account. Head over to your email and click on the link to further complete the registration process. Once complete, you can then login to your account and use what Dokuwo has to offer.<strong>Note:</strong> if you do not see the Activation message in your <strong>primary</strong> emails, just check in your <strong>promotional</strong> emails or <strong>All</strong> mails. Your mail service might have flagged it as a promotional email.
                  </p>
                </div>
              </div>
            </div>

          </div>
          <!-- accordion End -->    
        </div>   
        <div class="col-lg-6 col-md-6 col-xs-12">
          <!-- accordion start -->
          <div class="panel-group" id="accordion1">
            <div class="panel panel-default">
              <div class="panel-heading">
                <h4 class="panel-title">
                  <a class="collapsed" data-toggle="collapse" data-parent="#accordion1" href="#collapseOne1">
                    How do I contact support? 
                  </a>
                </h4>
              </div>
              <div id="collapseOne1" class="panel-collapse collapse">
                <div class="panel-body">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur sit amet ante nec vulputate. Nulla aliquam, justo auctor consequat tincidunt, arcu erat mattis lorem, lacinia lacinia dui enim at eros. Pellentesque ut gravida augue. Duis ac dictum tellus </p>
                  <br>
                  <p>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute. non cupidatat skateboard dolor brunch. Foosd truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt alqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim ke ffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. 
                  </p>
                </div>
              </div>
            </div>

          </div>
          <!-- accordion End -->    
        </div>      
      </div>
    </div>      
  </div>
  <!-- End Content -->`;

  $(document).ready(function(){
      $('header .intro-landing').remove();
      $('.content-section').empty().append(temp);
    });
}