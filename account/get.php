<?php 
include 'includes/autoloader.inc.php';
// For all get methods or queries that only involve retrieving
// something from the database, direct all the URL\'s here and then 
// reroute them to the correct view and method. I know that all this is not neccessary 
// if we were only interacting with the controllers and never with the views but if we are 
// to use the first MVC model, then there will be no need for views here since Jquery will handle everything involving viewing

$uri = $_SERVER['REQUEST_URI'];

$urlParts = parse_url($uri, PHP_URL_PATH);
$urlParts = explode('/',filter_var(rtrim($urlParts, '/'), FILTER_SANITIZE_URL));

 $method =  $urlParts[sizeof($urlParts)-1];
 $view =  $urlParts[sizeof($urlParts)-2];

 
if($view == 'company'){
   switch ($method){
      case "retrieve_login_info":
         echo json_encode((new AuthController())->login_info());
        break;
       case "dashboard_header_info":
         $result = new CompanyView();
         $res = $result->dashboard_header_info($_GET['login_id']);
         echo json_encode($res);
         break;
      case "profile":
        //include 'view/Company/companyview.php';
        // require Company\CompanyView;
          $result = new CompanyView();  //to be merge with case: 'company_profile'
          $res = $result->get_profile($_GET['login_id']);
          echo json_encode($res);
         break;
       case "no_of_new_messages":
         $result = new MessagesView();
         $res = $result->no_of_new_messages($_GET['login_id']);
         //echo json_encode($results);
         echo $res;
         break;
       case "all_inbox_messages":
         $result = new MessagesView();
         $res = $result->all_inbox_messages($_GET['login_id']);
         echo json_encode($res);
       break;
       case "get_message":
        $result = new MessagesView();
        $res = $result->get_message($_GET['msg_id']);
        echo json_encode($res);
      break;
       case "read_messages":
         $result = new MessagesView();
         $res = $result->read_messages($_GET['login_id']);
         echo json_encode($res);
       break;
       case "all_sent_messages":
         $result = new MessagesView();
         $res = $result->all_sent_messages($_GET['login_id']);
         echo json_encode($res);
       break;
       case "new_unread_messages":
         $result = new MessagesView();
         $res = $result->new_unread_messages($_GET['login_id']);
         echo json_encode($res);
       break;
       case "retreive_all_jobseekers":
        //AMS: to be moved to jobseekerView
        $result = new MessagesView();
        $res = $result->retreive_all_jobseekers();
        echo json_encode($res);
       break;
       case "categories_of_jobseekers":
           $result = new JobseekersView();
           $response = $result->categories_of_jobseekers();
           echo json_encode($response);
       break;
       case "jobseekers_of_this_category":
           $result = new JobseekersView();
           $response =$result->jobseekers_of_this_category($_GET['category']);
           echo json_encode($response);
       break;
       case "company_profile":
        $result = new CompanyView();
        $company = $result->get_company_profile($_GET['login_id']);
        echo json_encode($company);
       break;
       case "show_jobs_posted":
        $result = new JobsView();
        $jobs =$result->get_jobs_posted($_GET['company_id']);
        echo json_encode($jobs);
       break;
       case "show_app_stats":
        $result = new JobsView();
        $app_stats =$result->show_application_stats($_GET['company_id']);
        echo json_encode($app_stats);
       break;
       case "job_info":
        $result = new JobsView();
        $job_info =$result->job_info($_GET['job_id']);
        echo json_encode($job_info);
       break;
       case "job_applicatants":
        $result = new JobsView();
        $job_applicants =$result->job_applicatants($_GET['job_id']);
        echo json_encode($job_applicants);
       break;
       case "job_applicatant":
        $result = new JobsView();
        $job_applicant =$result->job_applicatant($_GET['login_id']);
        echo json_encode($job_applicant);
       break;
       case "jobs_by_category":
        $result = new CompanyView();
        $jobs_by_category =$result->jobs_of_this_category($_POST['category']);
        echo json_encode($jobs_by_category);
       break;
       case "get_job_details":
        $result = new CompanyView();
        $job_details = $result->job_details($_GET['job_id']);
        echo json_encode($job_details);       
        break;
        case "featured_jobs":
        $result = new CompanyView();
        $jobs_featured = $result->get_featured_job($_GET['caller']);
        echo json_encode($jobs_featured);  
        break;
        case "latest_jobs":
        $result = new CompanyView();
        $latest_jobs = $result->get_latest_job($_GET['caller']);
        echo json_encode($latest_jobs); 
        break;
        case "retrieve_all_blogs":
        $result = new CompanyView();
        $all_blogs = $result->get_blogs();
        echo json_encode($all_blogs); 
        break;
        case "get_blog_details":
        $result = new CompanyView();
        $blog_info = $result->blog_details($_POST['blog_id']);
        echo json_encode($blog_info); 
        break;
        case "get_blog_categories":
        $result = new CompanyView();
        $blog_categories = $result->blog_categories();
        echo json_encode($blog_categories); 
        break;
        case "get_recent_posts":
        $result = new CompanyView();
        $recent_posts = $result->recent_posts();
        echo json_encode($recent_posts); 
        break;
        case "get_posts_by_category":
        $result = new CompanyView();
        $posts = $result->posts_by_category($_GET['category']);
        echo json_encode($posts); 
        break;
        case "get_jobseeker_details":
        $result = new CompanyView();
        $jobseeker_details = $result->jobseeker_details($_GET['jobseeker_id']);
        echo json_encode($jobseeker_details); 
        break;
        case "categories_of_jobs":
          $result = new JobseekerView();
          $response = $result->categories_of_jobs();
          echo json_encode($response);
        break;
        case "recruiter_details":
          $result = new CompanyView();
          $response = $result->recruiter_details($_GET['recruiter_id']);
          echo json_encode($response);
        break;
        case "retrieve_all_freelancers":
          $result = new CompanyView();
          $response = $result->get_freelancers();
          echo json_encode($response);
        break;
        case "get_featured_freelancers":
          $result = new CompanyView();
          $response = $result->featured_freelancers();
          echo json_encode($response);
        break;
       default:
       break;
   }

} elseif($view == 'jobseeker'){
   switch ($method){
       case "jobseeker_profile":
       $result = new JobseekerSettingsView();
       $jobseeker = $result->get_jobseeker_profile($_GET['login_id']);
       echo json_encode($jobseeker);
       break;
       case "new_unread_messages":
        $result = new JobseekerMessagesView();
        $res = $result->new_unread_messages($_GET['login_id']);
        echo json_encode($res);
      break;
       case "dashboard_header_info":
        $result = new JobseekerView();
        $res = $result->dashboard_header_info($_GET['login_id']);
        echo json_encode($res);
        break;
      case "no_of_new_messages":
        $result = new JobseekerMessagesView();
        $res = $result->no_of_new_messages($_GET['login_id']);
        echo $res;
        break;
      case "all_inbox_messages":
        $result = new JobseekerMessagesView();
        $res = $result->all_inbox_messages($_GET['login_id']);
        echo json_encode($res);
      break;
      case "get_message":
        $result = new JobseekerMessagesView();
        $res = $result->get_message($_GET['msg_id']);
        echo json_encode($res);
      break;
      case "read_messages":
        $result = new JobseekerMessagesView();
        $res = $result->read_messages($_GET['login_id']);
        echo json_encode($res);
      break;
      case "all_sent_messages":
        $result = new JobseekerMessagesView();
        $res = $result->all_sent_messages($_GET['login_id']);
        echo json_encode($res);
      break;
      case "retreive_all_companies":
        $result = new JobseekerMessagesView();
        $res = $result->retreive_all_companies();
        echo json_encode($res);
       break;
       case "":
         break;
      case "retreive_jobs":
       $result = new JobseekerJobsView();
       $res = $result->retreive_jobs();
       echo json_encode($res);
      break;
      case "all_hires":
        $result = new JobseekerView();
        $res = $result->all_hires($_GET['jobseeker_id']);
        echo json_encode($res);
      break;
      case "doing_freelance":
        $response = (new JobseekerView())->doing_freelance($_GET['jobseeker_id']);
        echo json_encode($response);
      break;
      case "search_jobs":
        $result = new JobseekerJobsView();
        $res = $result->search_jobs($_GET['job'],$_GET['location']);
        echo json_encode($res);
      break;
      case "search_featured_jobs":
        $result = new JobseekerJobsView();
        $res = $result->search_featured_job($_GET['job'],$_GET['location']);
        echo json_encode($res);
      break;
      case "search_latest_jobs":
        $result = new JobseekerJobsView();
        $res = $result->search_latest_job($_GET['jobName'],$_GET['jobLocation']);
        echo json_encode($res);
      break;
      case "search_jobseekers":
      $result = new JobseekerJobsView();
      $res = $result->search_jobseekers($_GET['tagline'],$_GET['address']);
      echo json_encode($res);
      break;
      case "search_employers":
      $result = new JobseekerJobsView();
      $res = $result->search_employers($_POST['companyName'],$_POST['companyAddress']);
      echo json_encode($res);
      break;
      case "search_jobs_categories":
        $result = new JobseekerJobsView();
        $res = $result->search_jobs_in_category($_GET['category'],$_GET['job'],$_GET['location']);
        echo json_encode($res);
      break;
      case "freelancer_services":
        $result = new JobseekerView();
        $res = $result->freelancer_services($_GET['jobseeker_id']);
        echo json_encode($res);
      break;
      case "get_service":
        $result = new JobseekerView();
        $res = $result->get_service($_GET['service_id']);
        echo json_encode($res);
      break;
      case "freelancer_portfolio":
        $result = new JobseekerView();
        $res = $result->freelancer_portfolio($_GET['jobseeker_id']);
        echo json_encode($res);
      break;
      case "get_portfolio":
        $result = new JobseekerView();
        $res = $result->get_portfolio($_GET['portfolio_id']);
        echo json_encode($res);
      break;
      case "package_exists":
        $result = new JobseekerView();
        $res = $result->package_exists($_GET['login_id']);
        echo json_encode($res);
      break;
      case "search_for_blogs":
        $result = new JobseekerJobsView();
        $res = $result->search_blogs($_GET['params']);
        echo json_encode($res);
      break;
      default:
          break;
   }
 }else{
    switch ($method){
        case "no_of_new_messages":
          echo json_encode((new AdminMessagesView())->no_of_new_messages($_GET['login_id']));
        break;
       case "all_inbox_messages":
          echo json_encode((new AdminMessagesView())->all_inbox_messages($_GET['login_id']));
        break;
       case "read_messages":
          echo json_encode((new AdminMessagesView())->read_messages($_GET['login_id']));
        break;
       case "get_message":
          echo json_encode((new AdminMessagesView())->get_message($_GET['msg_id']));
        break;
       case "new_unread_messages":
          echo json_encode((new AdminMessagesView())->new_unread_messages($_GET['login_id']));
        break;
       case "all_sent_messages":
          echo json_encode((new AdminMessagesView())->all_sent_messages($_GET['login_id']));
        break;
        case "retreive_all_users":
          echo json_encode((new AdminMessagesView())->retreive_all_users());
        break;
        case "manage_blogs":
          $result = new AdminView();
          $response = $result->get_admin_blogs($_GET['admin_id']);
          echo json_encode($response);
        break;
        case "filter_blogs":
          $result = new AdminView();
          $res = $result->filter_blogs($_GET['title'],$_GET['category']);
          echo json_encode($res);
        break;
        case "retrieve_recruiter_accounts":
          $result = new AdminView();
          $response = $result->get_all_recruiter_accounts();
          echo json_encode($response);
        break;
        case "retrieve_jobseeker_accounts":
          $result = new AdminView();
          $response = $result->get_all_jobseeker_accounts();
          echo json_encode($response);
        break;
        case "retrieve_admin_accounts":
          $result = new AdminView();
          $response = $result->get_all_admin_accounts();
          echo json_encode($response);
        break;
        case "admin_profile":
          $result = new AdminView();
          $admin = $result->get_admin_profile($_GET['login_id']);
          echo json_encode($admin);
        break;
        default:
        break;
    }
 }

?>