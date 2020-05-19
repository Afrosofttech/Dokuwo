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
          '<ul class="navbar-nav mr-auto w-100 justify-content-end main-navigation">'+
            '<li class="nav-item active">'+
              '<a class="nav-link" href="index.php" aria-expanded="false" aria-haspopup="true">'+
               ' Home'+
              '</a>'+
            '</li>'+
            '<li class="nav-item">'+
              '<a class="nav-link" style="cursor: pointer;" onclick="getJobs();" aria-expanded="false" aria-haspopup="true">'+
               ' Jobs'+
              '</a>'+
            '</li>'+
            // '<li class="nav-item">'+
            //   '<a class="nav-link" style="cursor: pointer;" onclick="displayEmployers();" aria-haspopup="true" aria-expanded="false">'+
            //     'Employers'+
            //   '</a>'+
            // '</li>'+
            '<li class="nav-item">'+
              '<a class="nav-link" style="cursor: pointer;" onclick="getFreelancers();" aria-haspopup="true" aria-expanded="false">'+
                'Freelancers'+
              '</a>'+
            '</li>'+
            '<li class="nav-item">'+
              '<a class="nav-link" style="cursor: pointer;" onclick="get_blog_posts();" aria-haspopup="true" aria-expanded="false">'+
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
    $(document).ready(()=>{
    $('.content-section').append(job_category);
    featuredJobs();
    });

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
                `<div class="job-featured" onclick='show_job_details(${JSON.stringify(val)},"${back}");' style="cursor: pointer;">`+
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
                `<a onclick='browse_all_featured_jobs(${JSON.stringify(data)});' style="cursor: pointer;" class="btn btn-common">Browse All Featured Jobs</a>`+
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
            `<div class="jobs-latest" onclick='show_job_details(${JSON.stringify(val)},"${back}");' style="cursor: pointer;">`+
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
            `<a onclick='browse_all_latest_jobs(${JSON.stringify(data)});' class="btn btn-common" style="cursor: pointer;">Browse All Latest Jobs</a>`+
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
        console.log("======error function========");
        console.log(err.responseText);
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
                  '<li><a href="javascript:void(0)">Contact</a></li>'+
                '</ul>'+
                '<ul class="menu">'+
                  '<li><a href="javascript:void(0)">Terms & Conditions</a></li>'+
                  '<li><a href="javascript:void(0)">Privacy</a></li>'+
                  '<li><a href="javascript:void(0)">Refferal Terms</a></li>'+
                  '<li><a href="javascript:void(0)">Product License</a></li>'+
                '</ul>'+
              '</div>'+
            '</div>'+
            '<div class="col-lg-3 col-md-4 col-xs-12">'+
              '<div class="widget">'+
                '<h3 class="block-title">Subscribe Now</h3>'+
                '<p>Subscribe to receive our newsletters!.</p> '+
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
                '<p>Proudly Powered By Afrika Software Technologies</p>'+
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

function getJobs(){
  $.ajax({
    method: "POST",
    url: "account/get.php/jobseeker/retreive_jobs",
    dataType: "json",
    success: function(data){
      if(data != 400){
        displayJobs(data);
      }
    },
    error: function(err){
     console.log("======error function jobs by category========");
     console.log(err.responseText);
    }
   });
}

function displayJobs(jobs,start,finish){

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

    numberOfItems = jobs.length;
    limitPerPage = 4;
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
                  '<button type="submit" class="btn btn-common float-right" id="filterJobs">Filter</button>'+
                '</div>'+
              '</div>'+
            '</div>'+
            '<div class="col-lg-12 col-md-12 col-xs-12 jobs">';
            $.each(jobs.slice(beg,end),function(i,val){
              temp +=`<a class="job-listings" onclick='show_job_details(${JSON.stringify(val)},"${back}",${JSON.stringify(jobs)});' style="cursor: pointer;">`+
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
            
            let begin = parseInt(beg);
            let ending = parseInt(end);
            let LastLast =  `displayJobs(${JSON.stringify(jobs)},${(limitPerPage*Math.floor(numberOfItems/limitPerPage))},${(numberOfItems)})`;
            (numberOfItems <= limitPerPage || numberOfItems == ending)?(Next = 'disabled'):(numberOfItems < ending+limitPerPage)? (forward = `displayJobs(${JSON.stringify(jobs)},${(begin+limitPerPage)},${numberOfItems})`):(forward = `displayJobs(${JSON.stringify(jobs)},${(begin+limitPerPage)},${(ending+limitPerPage)})`); 
            (begin == 0 && (ending == numberOfItems || ending == limitPerPage))? (Prev = 'disabled',Backward = `displayJobs(${JSON.stringify(jobs)},${(begin)},${(ending)})`):(begin != 0 && ending != numberOfItems)?(Backward = `displayJobs(${JSON.stringify(jobs)},${(begin-limitPerPage)},${(ending-limitPerPage)})`): (Backward = `displayJobs(${JSON.stringify(jobs)},${(begin-limitPerPage)},${(numberOfItems-(numberOfItems%limitPerPage))})`);
            temp +='<!-- Start Pagination -->'+
              '<ul class="pagination">' +   
              `<li class="active"><a href="javascript:void(0)" class="btn-prev" onclick='displayJobs(${JSON.stringify(jobs)},0,4)'><i class="lni-angle-left"></i> First</a></li>`+
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
      $('header .intro-landing').remove();
      $('.content-section').empty().append(temp);
      $('#filterJobs').click(function(e){
        e.preventDefault();
        if($('#job_name').val() =='' && $('#job_location').val() ==''){
          $.notify('There is nothing to search for','error');
        }else{
          $.ajax({
            method: "GET",
            url: "account/get.php/jobseeker/search_jobs",
            dataType: "json",
            data: {'job':$('#job_name').val(),'location':$('#job_location').val()},
            success: function(data){
              if(data != 400){
                displayJobs(data);
              }
            },
            error: function(err){
              console.log('error filtering jobs: ',err.responseText);
            }

          });
        }

      });

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

  function getFreelancers(){
    $.ajax({
      method: "GET",
      url: "account/get.php/company/retrieve_all_freelancers",
      dataType: "json",
      success: function(data){
        displayFreelancers(data);
      
      },
      error: function(err){
       console.log("======error function getting freelancers========");
       console.log(err.responseText);
      }
     });
  }

  function displayFreelancers(freelancers,start,finish){
    if(typeof freelancers === "string"){
      JSON.parse(freelancers);
    }
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
    
        numberOfItems = freelancers.length;
        limitPerPage = 4;
        totalPages = Math.round(numberOfItems/limitPerPage);
       
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
                      '<input type="text" class="form-control" id="tag_line" placeholder="Jobseeker:tag_line">'+
                    '</div>'+
                    '<div class="col-lg-5 col-md-5 col-xs-12">'+
                      '<input type="text" class="form-control" id="jobseeker_location" placeholder=" Jobseeker:Location">'+
                    '</div>'+
                    '<div class="col-lg-2 col-md-2 col-xs-12">'+
                      '<button type="submit" class="btn btn-common float-right" id="filterFreelancers">Filter</button>'+
                    '</div>'+
                  '</div>'+
                '</div>'+
                '</div>'+
                '<div class="row">';
                $.each(freelancers.slice(beg,end),function(i,val){
                  let skills = val.skills.split(',');
                  temp +=`<div class="col-lg-6 col-md-6 col-xs-12" onclick='show_freelancer_details(${val.jobseeker_id},${JSON.stringify(freelancers)},${beg},${end});'  style="cursor: pointer;">`+
                    '<div class="manager-resumes-item">'+
                      '<div class="manager-content">'+
                        '<a href="#"><img class="resume-thumb logo-img" src="account/uploads/'+((val.image == "" || val.image == null)?"default.jpg":val.image)+'" alt=""></a>'+
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
            let LastLast =  `displayFreelancers(${JSON.stringify(freelancers)},${(limitPerPage*Math.floor(numberOfItems/limitPerPage))},${(numberOfItems)})`;
            (numberOfItems <= limitPerPage || numberOfItems == ending)?(Next = 'disabled'):(numberOfItems < ending+limitPerPage)? (forward = `displayFreelancers(${JSON.stringify(freelancers)},${(begin+limitPerPage)},${numberOfItems})`):(forward = `displayFreelancers(${JSON.stringify(freelancers)},${(begin+limitPerPage)},${(ending+limitPerPage)})`); 
            (begin == 0 && (ending == numberOfItems || ending == limitPerPage))? (Prev = 'disabled',Backward = `displayFreelancers(${JSON.stringify(freelancers)},${(begin)},${(ending)})`):(begin != 0 && ending != numberOfItems)?(Backward = `displayFreelancers(${JSON.stringify(freelancers)},${(begin-limitPerPage)},${(ending-limitPerPage)})`): (Backward = `displayFreelancers(${JSON.stringify(freelancers)},${(begin-limitPerPage)},${(numberOfItems-(numberOfItems%limitPerPage))})`);
            temp +='<!-- Start Pagination -->'+
              '<ul class="pagination">' +   
              `<li class="active"><a href="javascript:void(0)" class="btn-prev" onclick='displayFreelancers(${JSON.stringify(freelancers)},0,4)'><i class="lni-angle-left"></i> First</a></li>`+
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
          $('header .intro-landing').remove();
          $('.content-section').empty().append(temp);

          $('#filterFreelancers').click(function(e){
            e.preventDefault();
            if($('#tag_line').val() =='' && $('#jobseeker_location').val() ==''){
              $.notify('There is nothing to search for','error');
              console.log('empty values cant search');
            }else{
              $.ajax({
                method: "GET",
                url: "account/get.php/jobseeker/search_jobseekers",
                data: {'tagline':$('#tag_line').val(),'address':$('#jobseeker_location').val()},
                dataType: "json",
                success: function(data){
                    if(data != 400){
                      displayFreelancers(data);
                    }
                },
                error: function(err){
                  console.log('error search jobseekers: ',err.responseText);
                }
              });
            }
          });

        });
        
    }

    
      // Show latest jobs details function
    function show_job_details(job_details,back,callbackdata){
      let temp = '';
     
          temp +=' <!-- Page Header Start -->'+
          '<div class="page-header">'+
            '<div class="container">'+
              '<div class="row"> '+        
               ' <div class="col-lg-8 col-md-6 col-xs-12">'+
                  '<div class="breadcrumb-wrapper">'+
                    '<div class="img-wrapper">'+
                      '<img src="'+((job_details.logo == null)?"https://ui-avatars.com/api/?name="+job_details.company_name.replace(/ /g, '+'):'account/uploads/'+job_details.logo)+'" alt="" class="logo-img">'+
                    '</div>'+
                    '<div class="content">'+
                      '<h3 class="product-title">'+ job_details.job_name +'</h3>'+
                      '<p class="brand">'+ job_details.company_name +'</p>'+
                      '<div class="tags">' + 
                        '<span><i class="lni-map-marker"></i>'+ job_details.job_location+'</span>'+  
                        '<span><i class="lni-calendar"></i>'+ job_details.date_posted+'</span>'+  
                      '</div>'+
                    '</div>'+
                  '</div>'+
                '</div>'+
                '<div class="col-lg-4 col-md-6 col-xs-12">'+
                  '<div class="month-price">'+
                    '<span class="year">Monthly</span>'+
                    '<div class="price">'+job_details.currency+currencyFormat(job_details.salary)+'</div>'+
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
                '<div class="col-lg-8 col-md-12 col-xs-12">'+
                  '<div class="content-area">'+  
                    '<h5>Category</h5>'+
                    '<p>'+ job_details.job_cat +'</p>'+
                     '<h5>Job Requirements</h5>'+
                    '<p>'+ job_details.requirements +'</p>'+
                    '<h5>Job Type</h5>'+
                    '<p>'+ job_details.job_type +'</p>'+
                    '<h5>Contact Email</h5>'+
                    '<p>'+ job_details.job_contact_email +'</p>'+
                    '<h5>Contact Phone</h5>'+
                    '<p><span><i class="lni-phone-handset"></i> '+ job_details.job_contact_phone+'</span></p>'+
                    '<a href="#" class="btn btn-common" onclick="apply_job(\''+job_details.job_id+'\',\''+job_details.company_id+'\');">Apply job</a>';
                    if(back === 'displayjobs'){
                      temp +=`<a href="#" class="btn btn-danger float-right" onclick='displayJobs(${JSON.stringify(callbackdata)});'>Back</a>`; 
                    }
                    if(back === 'featuredjobs'){
                      temp +='<a href="index.php" class="btn btn-danger float-right">Back</a>'; 
                    }
                    if(back === 'latestjobs'){
                      temp +='<a href="index.php" class="btn btn-danger float-right">Back</a>'; 
                    }
                    if(back === 'allfeaturedjobs'){
                      temp +=`<a href="#" class="btn btn-danger float-right" onclick='browse_all_featured_jobs(${JSON.stringify(callbackdata)});'>Back</a>`; 
                    }
                    if(back === 'alllatestjobs'){
                      temp +=`<a href="#" class="btn btn-danger float-right" onclick='browse_all_latest_jobs(${JSON.stringify(callbackdata)});'>Back</a>`; 
                    }
                    if(back === 'categoryjobs'){
                      temp +=`<a href="#" class="btn btn-danger float-right" onclick='show_jobs_and_jobseekers_by_categories(${JSON.stringify(callbackdata)});'>Back</a>`; 
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
            show_featured_freelancers();
          });
        

    }

          //Freelancer details function
          function show_freelancer_details(jobseeker_id,freelancers,beg,end){
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
                        '<div class="col-md-8 col-sm-8">'+ 
                          '<!-- Candidate Info -->'+
                          '<div class="candidateinfo">'+
                            '<div class="userPic"><img src="account/uploads/'+((data.details[0].image == "" || data.details[0].image == null)?"default.jpg":data.details[0].image)+'" alt="'+ data.details[0].fullName +'" style="width: 90px; height: 90px;"></div>'+
                            '<div class="title">'+ data.details[0].fullName +'</div>'+
                            '<div class="desi">'+ data.details[0].tag_line +'</div>'+
                            '<div class="loctext"><i class="fa fa-user-graduate fa-lg" aria-hidden="true"></i> '+ data.details[0].education_level +'</div>'+
                            '<div class="loctext freelancer-location"><i class="fa fa-map-marker-alt fa-lg" aria-hidden="true"></i> '+ data.details[0].address+'</div>'+
                            '<div class="clearfix"></div>'+
                          '</div>'+
                        '</div>'+
                        '<div class="col-md-4 col-sm-4">'+ 
                          '<!-- Candidate Contact -->'+
                          '<div class="candidateinfo">'+
                          '<div class="loctext"><i class="fa fa-calendar-alt fa-lg" aria-hidden="true"></i> '+ data.details[0].dob +'</div>'+
                            '<div class="loctext"><i class="fa fa-tag fa-lg" aria-hidden="true"></i> '+ data.details[0].category +'</div>'+
                            '<div class="loctext"><i class="fa fa-phone fa-lg" aria-hidden="true"></i> '+ data.details[0].phone+'</div>'+
                            '<div class="loctext"><i class="fa fa-globe fa-lg" aria-hidden="true"></i> '+ data.details[0].country +'</div>'+
                          '</div>'+
                        '</div>'+
                      '</div>'+
                    '</div>'+
                    
                    '<!-- Buttons -->'+
                    `<div class="jobButtons d-flex"> <a href="https://www.sharjeelanjum.com/html/jobs-portal/demo/candidate-detail.html#." class="btn apply mr-auto"><i class="fa fa-paper-plane" aria-hidden="true"></i> Hire Me</a> <a href="#" class="btn report" onclick='displayFreelancers(${JSON.stringify(freelancers)},${beg},${end});'><i class="fa fa-arrow-left" aria-hidden="true"></i> Back</a> </div>`+
                  '</div>'+
                  '<!-- candidate details End --> '+
                  '<!-- Skills and review section start --> '+
                  '<div class="row">'+

                  '<!-- Left side start --> '+
                  '<div class="col-md-8">'+
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
                        '<div class="rating" data-rate-value=5></div>'+
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
                  '<div class="col-md-4 featured_freelancers">'+

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
                  show_featured_freelancers();
                  (data.details[0].package != 400 && data.details[0].package == "Active")?display_review_rating(data.reviews):"No Active package";
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
                            swal('Invalid Title!','Blog title cannot be empty','error','Cool');
                            errors.push('title_error');
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
        
                          if(errors.length < 1){
                            
                            $.ajax({
                              method: 'POST',
                              url: 'account/post.php/jobseeker/review_jobseeker',
                              data:{'name':name,'email':email,'rating':rating,'jobseeker_id':jobseeker_id,'reviewContent':reviewContent},
                              success: function(response){
                                if(response == 200){
                                  // swal('Review Sucessfully sent','Thanks for Reviewing!','success','close');
                                  $.notify('Thanks for Reviewing!','success');
                                  show_freelancer_details(jobseeker_id,beg,end); 
                                }
                              },
                              error: function(err){
                                console.log('error sending review...');
                                $.notify(err.responseText,'error');
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
               console.log(err.responseText);
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
              temp +='<li>'+
                '<p>'+val.review_content +'</p>'+
                '<small class="text-muted">Posted By '+ val.reviewer_name +'</small>'+
                '<div class="clearfix"></div>'+
              '</li>';
            });
            temp +='</ul>'+
          '</div>';

            $('.reviews').append(temp);
          }

          function reviewJobseeker(jobseeker_id,beg,end){
            let temp = '';

            temp +='<div class="container mt-2">'+
                    '<h5 class="mt-2 mb-2">REVIEW</h5>'+
                    '<form method="POST" id="reviewJobseeker" enctype="multipart/form-data" autocomplete="off">'+
                    '<div class="form-group row">'+
                    '<label for="" class="col-sm-2 col-form-label">Rate</label>'+
                    '<div class="col-sm-10">'+
                      '<div class="rating" data-rate-value=5 style="font-size:200%;"></div>'+
                    '</div>'+
                    '</div>'+
                    '<div class="form-group row">'+
                      '<div class="col-sm-6 mb-3 mb-sm-0">'+
                        '<input type="text" class="form-control" name="reviewerName" id="reviewerName" placeholder="Name">'+
                      '</div>'+
                      '<div class="col-sm-6">'+
                        '<input type="text" class="form-control form-control-user" name="reviewerEmail" id="reviewerEmail" placeholder="Email">'+
                    '</div>'+
                    '</div>'+
                    
                    '<div class="form-group row">'+
                      '<div class="col-sm-10">'+
                        '<textarea class="form-control" name="reviewContent" rows="8" id="reviewContent" placeholder="Review Message"></textarea>'+
                      '</div>'+
                  ' </div>'+
                
                    '<div class="form-group row">'+
                      '<div class="offset-sm-2 col-sm-10">'+
                        '<button type="submit" class="btn btn-success">Send</button>'+
                      '</div>'+
                    '</div>'+
                  '</form>'+
                  '</div>';

                  
                  $('.jobseeker-details-section').append(temp);

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
                            swal('Invalid Title!','Blog title cannot be empty','error','Cool');
                            errors.push('title_error');
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
                                console.log('error sending review...');
                                $.notify(err.responseText,'error');
                              }
                            });
                          }else{
                            return;
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
      back = "categoryjobs";
      
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
                temp +=`<a class="job-listings" onclick='show_job_details(${JSON.stringify(val)},"${back}","${category}");' style="cursor: pointer;">`+
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

                  let begin = parseInt(beg);
                let ending = parseInt(end);
      let LastLast =  "show_jobs_and_jobseekers_by_categories(\'"+category+"\',\'"+(limitPerPage*Math.floor(numberOfItems/limitPerPage))+"\',\'"+(numberOfItems)+"\')";
      (numberOfItems <= limitPerPage || numberOfItems == ending)?(Next = 'disabled'):(numberOfItems < ending+limitPerPage)? (forward = "show_jobs_and_jobseekers_by_categories(\'"+category+"\',\'"+(begin+limitPerPage)+"\',\'"+numberOfItems+"\')"):(forward = "show_jobs_and_jobseekers_by_categories(\'"+category+"\',\'"+(begin+limitPerPage)+"\',\'"+(ending+limitPerPage)+"\')"); 
      (begin == 0 && (ending == numberOfItems || ending == limitPerPage))? (Prev = 'disabled',Backward = "show_jobs_and_jobseekers_by_categories(\'"+category+"\',\'"+(begin)+"\',\'"+(ending)+"\')"):(begin != 0 && ending != numberOfItems)?(Backward = "show_jobs_and_jobseekers_by_categories(\'"+category+"\',\'"+(begin-limitPerPage)+"\',\'"+(ending-limitPerPage)+"\')"): (Backward = "show_jobs_and_jobseekers_by_categories(\'"+category+"\',\'"+(begin-limitPerPage)+"\',\'"+(numberOfItems-(numberOfItems%limitPerPage))+"\')");
                temp +='<!-- Start Pagination -->'+
                  '<ul class="pagination">' +             
                  ' <li class="active"><a href="javascript:void(0)" class="btn-prev" onclick=" show_jobs_and_jobseekers_by_categories(\''+category+'\',0,4)"><i class="lni-angle-left"></i> First</a></li>'+
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

    function browse_all_featured_jobs(featuredjobs,start,finish){
      if (typeof featuredjobs === 'string') {
        JSON.parse(featuredjobs);
      }
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

      if(start !== undefined && finish !== undefined){ beg = start; end = finish;}else{ beg = 0; end = 3;}
   
          numberOfItems = featuredjobs.length;
          limitPerPage = 3;
          totalPages = Math.round(numberOfItems/limitPerPage);
         
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
                        `<button type="submit" class="btn btn-common float-right" id="filterFeaturedJobs">Filter</button>`+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                  '<div class="col-lg-12 col-md-12 col-xs-12">'+
                  '<a href="index.php" class="btn btn-danger btn-block" style="cursor: pointer;"><i class="fa fa-arrow-left"> Back </i></a>'
                  '</div>'+
                  '<div class="col-lg-12 col-md-12 col-xs-12 featured-jobs">';
                  $.each(featuredjobs.slice(beg,end),function(i,val){
                    temp +=`<a class="job-listings" onclick='show_job_details(${JSON.stringify(val)},"${back}",${JSON.stringify(featuredjobs)});' style="cursor: pointer;">`+
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

                let begin = parseInt(beg);
                let ending = parseInt(end);
                let LastLast =  `browse_all_featured_jobs(${JSON.stringify(featuredjobs)},${(limitPerPage*Math.floor(numberOfItems/limitPerPage))},${(numberOfItems)})`;
                (numberOfItems <= limitPerPage || numberOfItems == ending)?(Next = 'disabled'):(numberOfItems < ending+limitPerPage)? (forward = `browse_all_featured_jobs(${JSON.stringify(featuredjobs)},${(begin+limitPerPage)},${numberOfItems})`):(forward = `browse_all_featured_jobs(${JSON.stringify(featuredjobs)},${(begin+limitPerPage)},${(ending+limitPerPage)})`); 
                (begin == 0 && (ending == numberOfItems || ending == limitPerPage))? (Prev = 'disabled',Backward = `browse_all_featured_jobs(${JSON.stringify(featuredjobs)},${(begin)},${(ending)})`):(begin != 0 && ending != numberOfItems)?(Backward = `browse_all_featured_jobs(${JSON.stringify(featuredjobs)},${(begin-limitPerPage)},${(ending-limitPerPage)})`): (Backward = `browse_all_featured_jobs(${JSON.stringify(featuredjobs)},${(begin-limitPerPage)},${(numberOfItems-(numberOfItems%limitPerPage))})`);
                temp +='<!-- Start Pagination -->'+
                  '<ul class="pagination">' +   
                  `<li class="active"><a href="javascript:void(0)" class="btn-prev" onclick='browse_all_featured_jobs(${JSON.stringify(featuredjobs)},0,3)'><i class="lni-angle-left"></i> First</a></li>`+
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
            $('header .intro-landing').remove();
            $('.content-section').empty().append(temp);
            $('#filterFeaturedJobs').click(function(e){
              e.preventDefault();
              let job = $('#featured_jobName').val();
              let location = $('#featured_jobLocation').val();
              let back = 'allfeaturedjobs';
              if(job === '' && location === ''){
                $.notify('nothing to search for','error');
              }
              else{
                $.ajax({
                  method:"GET",
                  url:"account/get.php/jobseeker/search_featured_jobs",
                  data: {'job':job,'location':location},
                  dataType:"json",
                  success: function(data){
                    if(data != 400){
                      browse_all_featured_jobs(data);
                    }
                    else{
                      $.notify('No results for your serach','error');
                      browse_all_featured_jobs(allfeaturedjobs);
                    }
                  },
                  error: function(err){
                    console.log('errror searching: ', err.responseText);
                  }
                });
              }
            })
          });
        

    }


    function browse_all_latest_jobs(latestjobs,start,finish){
      if (typeof latestjobs === 'string') {
        JSON.parse(latestjobs);
      }
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
    
          numberOfItems = latestjobs.length;
          limitPerPage = 4;
          totalPages = Math.round(numberOfItems/limitPerPage);
          
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
                        `<button type="submit" class="btn btn-common float-right" id="latestJobSearch">Filter</button>`+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                 
                  '<div class="col-lg-12 col-md-12 col-xs-12">';
                  $.each(latestjobs.slice(beg,end),function(i,val){
                    temp +=`<a class="job-listings" onclick='show_job_details(${JSON.stringify(val)},"${back}",${JSON.stringify(latestjobs)});' style="cursor: pointer;">`+
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

                  let begin = parseInt(beg);
                  let ending = parseInt(end);
                  let LastLast =  `browse_all_latest_jobs(${JSON.stringify(latestjobs)},${(limitPerPage*Math.floor(numberOfItems/limitPerPage))},${(numberOfItems)})`;
                  (numberOfItems <= limitPerPage || numberOfItems == ending)?(Next = 'disabled'):(numberOfItems < ending+limitPerPage)? (forward = `browse_all_latest_jobs(${JSON.stringify(latestjobs)},${(begin+limitPerPage)},${numberOfItems})`):(forward = `browse_all_latest_jobs(${JSON.stringify(latestjobs)},${(begin+limitPerPage)},${(ending+limitPerPage)})`); 
                  (begin == 0 && (ending == numberOfItems || ending == limitPerPage))? (Prev = 'disabled',Backward = `browse_all_latest_jobs(${JSON.stringify(latestjobs)},${(begin)},${(ending)})`):(begin != 0 && ending != numberOfItems)?(Backward = `browse_all_latest_jobs(${JSON.stringify(latestjobs)},${(begin-limitPerPage)},${(ending-limitPerPage)})`): (Backward = `browse_all_latest_jobs(${JSON.stringify(latestjobs)},${(begin-limitPerPage)},${(numberOfItems-(numberOfItems%limitPerPage))})`);
                  temp +='<!-- Start Pagination -->'+
                  '<div class="d-flex">'+
                    '<ul class="pagination mr-auto">' +   
                    `<li class="active"><a href="javascript:void(0)" class="btn-prev" onclick='browse_all_latest_jobs(${JSON.stringify(latestjobs)},0,4)'><i class="lni-angle-left"></i> First</a></li>`+
                    `<li class="active"><a href="javascript:void(0)" class="btn-next" onclick='${Backward}'>Prev <i class="lni-angle-right"></i></a></li>`+
                    `<li class="active"><a href="javascript:void(0)" class="btn-next" onclick='${forward}'>Next <i class="lni-angle-right"></i></a></li>`+
                    `<li class="active"><a href="javascript:void(0)" class="btn-next" onclick='${LastLast}'>Last <i class="lni-angle-right"></i></a></li>`+
                    '</ul>'+
                    '<!-- End Pagination -->'+
                    '<a href="index.php" class="btn btn-danger"><i class="fa fa-arrow-left"></i> Back</a>'+
                    '</div>'+
                 '</div>'+
                '</div>'+
              '</div>'+
            '</section>'+
            '<!-- Job Browse Section End -->'; 
         
          
          $(document).ready(()=>{
            $('header .intro-landing').remove();
            $('.content-section').empty().append(temp);
            $('#latestJobSearch').click(function(e){
              e.preventDefault();
              let job = $('#latest_JobName').val();
              let location = $('#latest_JobLocation').val();
              let back = 'alllatestjobs';
              if(job === '' && location === ''){
                $.notify('nothing to search for','error');
              }
              else{
                $.ajax({
                  method:"GET",
                  url:"account/get.php/jobseeker/search_latest_jobs",
                  data: {'job':job,'location':location},
                  dataType:"json",
                  success: function(data){
                    if(data != 400){
                      browse_all_latest_jobs(data);
                    }
                    else{
                      $.notify('No results found for your search','error');
                      browse_all_latest_jobs(latestjobs);
                    }
                  },
                  error: function(err){
                    console.log('errror searching: ', err.responseText);
                  }
                });
              }
            })

          });
        
    }


    function show_blog_details(blog_id,back,posts){
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
              '<div class="col-md-8">'+
              
              '<!-- Blog List start -->'+
              '<div class="blogWraper">'+
                '<div class="blogList blogdetailbox">'+
                  '<div class="postimg"><img src="account/uploads/'+((data[0].blog_image == "" || data[0].blog_image == null)?"default.jpg":data[0].blog_image)+'" alt="blog Title">'+
                    '<div class="date"> '+ date_posted.getDate() +' '+ formatMonth(date_posted.getMonth()) +'</div>'+
                  '</div>'+
                  '<div class="post-header margin-top30">'+
                    '<div class="d-flex align-items-center">'+
                    '<h4 class="mr-auto"><a href="#">'+ data[0].blog_title +'</a></h4>';
                    (back == "blogposts")?blog_details +=`<div class="jobButtons"><a href="#" class="btn report" onclick='show_blog_posts(${JSON.stringify(posts)});'><i class="fa fa-arrow-left" aria-hidden="true"></i> Back</a> </div>`:
                    blog_details +=`<div class="jobButtons"><a href="index.php" class="btn report"><i class="fa fa-arrow-left" aria-hidden="true"></i> Back</a> </div>`;
                    blog_details +='</div>'+
                    '<div class="postmeta">By : <span>'+ data[0].blog_publisher+' </span> Category : <a href="#">'+ data[0].category+'</a></div>'+
                  '</div>'+
                  '<p> '+ data[0].blog_content +'</p>'+
                '</div>'+
               
                '</div>'+
             
              '</div>'+
              '<!-- Left side End --> '+
              '<!-- right side start --> '+
              '<div class="col-md-4 blog_sidebar">'+

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
            blogSideBar()
          });
        },
        error: function(err){
          console.log(err.responseText);
        }
      });

      
    }

    function get_blog_posts(){
      $.ajax({
        method: "GET",
        url: "account/get.php/company/retrieve_all_blogs",
        dataType: "json",
        success: function(data){
          show_blog_posts(data);
        },
        error: function(err){
          console.log("Error blog posts :",err.responseText);
          
        } 
      });
    }

    function show_blog_posts(blogPosts,start,finish){
      if (typeof blogPosts === 'string') {
        JSON.parse(blogPosts);
      }

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

          numberOfItems = blogPosts.length;
          limitPerPage = 3;
          totalPages = Math.round(numberOfItems/limitPerPage);

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
                  $.each(blogPosts.slice(beg,end), function(i,val){
                    posts +='<!-- Start Post -->'+
                      '<div class="blog-post">'+
                        '<!-- Post thumb -->'+
                          '<div class="post-thumb">'+
                          '<a href="#"><img class="img-fulid" src="account/uploads/'+((val.blog_image == "" || val.blog_image == null)?"default.jpg":val.blog_image)+'" alt=""></a>'+
                          '<div class="hover-wrap">'+
                      '</div>'+
                  '</div>'+
                  '<!-- End Post post-thumb -->'+
    
                  '<!-- Post Content -->'+
                  '<div class="post-content">'+                    
                    '<h3 class="post-title"><a href="#">'+ val.blog_title+'</a></h3>'+
                    '<div class="meta">'+                   
                      `<span class="meta-part"><a onclick='show_blog_details("${val.blog_id}","${back}",${JSON.stringify(blogPosts)});' style="cursor: pointer;"><i class="lni-user"></i>By ${val.blog_publisher}</a></span>`+
                      `<span class="meta-part"><i class="lni-calendar"></i><a onclick='show_blog_details("${val.blog_id}","${back}",${JSON.stringify(blogPosts)});' style="cursor: pointer;">${val.date_posted}</a></span>`+                   
                    '</div>';
                    if($.trim(val.blog_content).length > 100){
                      let subcontent = val.blog_content.substring(0,100);
                      posts +='<p>'+subcontent+'...</p>';
                    }
                    else{
                      posts +='<p>'+val.blog_content+'......</p>';
                    }
                    posts +=`<a class="btn btn-common" onclick='show_blog_details("${val.blog_id}","${back}",${JSON.stringify(blogPosts)});' style="cursor: pointer;">Read More</a>`+
                  '</div>'+
                  '<!-- Post Content -->'+
    
                '</div>'+
                '<!-- End Post -->';
                  });   
                
                  let begin = parseInt(beg);
                let ending = parseInt(end);
      let LastLast =  `show_blog_posts(${JSON.stringify(blogPosts)},${(limitPerPage*Math.floor(numberOfItems/limitPerPage))},${(numberOfItems)})`;
      (numberOfItems <= limitPerPage || numberOfItems == ending)?(Next = 'disabled'):(numberOfItems < ending+limitPerPage)? (forward = `show_blog_posts(${JSON.stringify(blogPosts)},${(begin+limitPerPage)},${numberOfItems})`):(forward = `show_blog_posts(${JSON.stringify(blogPosts)},${(begin+limitPerPage)},${(ending+limitPerPage)})`); 
      (begin == 0 && (ending == numberOfItems || ending == limitPerPage))? (Prev = 'disabled',Backward = `show_blog_posts(${JSON.stringify(blogPosts)},${(begin)},${(ending)})`):(begin != 0 && ending != numberOfItems)?(Backward = `show_blog_posts(${JSON.stringify(blogPosts)},${(begin-limitPerPage)},${(ending-limitPerPage)})`): (Backward = `show_blog_posts(${JSON.stringify(blogPosts)},${(begin-limitPerPage)},${(numberOfItems-(numberOfItems%limitPerPage))})`);
                posts +='<!-- Start Pagination -->'+
                  '<ul class="pagination">' +             
                   `<li class="active"><a href="javascript:void(0)" class="btn-prev" onclick='show_blog_posts(${JSON.stringify(blogPosts)},0,3)'><i class="lni-angle-left"></i> First</a></li>`+
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

          $(document).ready(()=>{
            $('header .intro-landing').remove();
            $('.content-section').empty().append(posts);
            blogSideBar();
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
              $.each(data.recentPosts, function(i,val){
                let date_posted = new Date(val.date_posted);
                recent_posts +=`<li onclick="show_blog_details(${val.blog_id});">`+
                `<div class="media-left"> <a href="#"><img src="account/uploads/${val.blog_image}" alt="Blog Image"></a> </div>`+
                 `<div class="media-body"> <a class="media-heading" href="#">${val.blog_title}</a> <span>${formatMonth(date_posted.getMonth())} ${date_posted.getDate()}, ${date_posted.getFullYear()}</span> </div>`+
                 '</li>';
              });
                  
          }

              $('.recent_posts').append(recent_posts);
              
        },
        error: function(err){
          console.log("error recent posts: ",err.responseText)
        }
      });
    }

    function get_posts_by_category(category){
 
      $.ajax({
        method: "POST",
        url: "account/get.php/company/get_posts_by_category",
        dataType: "json",
        data: {'category':category},
        success: function(data){
          if(data != 400){
            show_blog_posts(data);
          }        
        },
        error: function(err){
          console.log("error POST_BY_CATEGORY: ",err.responseText)
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
            '<form method="POST" id="searchblog" autocomplete="off">'+
              '<input type="text" class="form-control" name="searchParams" id="searchParams" placeholder="Search blog:Title,Category,Publisher">'+
              '<button type="submit" class="btn"><i class="fa fa-search"></i></button>'+
            '</form>'+
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
        '<!-- Archives Posts -->'+
        '<div class="widget">'+
          '<h5 class="widget-title">Archives</h5>'+
          '<ul class="archive">'+
            '<li><a href="#">June 2015<span>10</span></a></li>'+
            '<li><a href="#">May 2015<span>21</span></a></li>'+
            '<li><a href="#">April2015 <span>58</span></a></li>'+
            '<li><a href="#">March 2015 <span>25</span></a></li>'+
          '</ul>'+
        '</div>'+
        '<!-- Tags -->'+
        '<div class="widget">'+
          '<h5 class="widget-title">Tags</h5>'+
          '<ul class="tags">'+
            '<li><a href="#">Amazing </a></li>'+
            '<li><a href="#">Envato </a></li>'+ 
          '</ul>'+
        '</div>'+
      '</div>';
      $('#searchBlog').submit(function(e){
        e.preventDefault();
          console.log('searching');
      });
      $(document).ready(function(){
        $('.blog_sidebar').prepend(temp);
        blog_categories();
        show_recent_posts();
     
      });
    }

    function searchBlogs(e){
      e.preventDefault();
          console.log('searching blogs...')
          // let searchParams = $('#searchParams').val();
          // if(searchParams == ''){$.notify('Nothing to search for','error');}
          // else{
          //   $.ajax({
          //     method: "GET",
          //     url: "account/get.php/jobseeker/search_for_blogs",
          //     dataType: "json",
          //     data: {'params':searchParams},
          //     success: function(data){
          //       if(data != 400){
          //         show_blog_posts(data);
          //       }
          //       else{
          //         $.notify('No results match your search','error');
          //       }
          //     },
          //     error: function(err){
          //       console.log('error searching blogs: ',err.responseText);
          //     }
  
          //   });

          // }
    }
  
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
                '<div class="price"><span>GMD</span>3000<span>/Job</span></div>'+
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
                '<div class="price"><span>GMD</span>15000<span>/Month</span></div>'+
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
                '<div class="price"><span>GMD</span>49000<span>/6 Month</span></div>'+
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
                '<div class="price"><span>GMD</span>125<span>/Month</span></div>'+
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

    function show_featured_freelancers(){
      let temp =
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
        
    '</div>';

    $('.featured_freelancers').prepend(temp);
    }