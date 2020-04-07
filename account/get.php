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
         $get_login = new AuthController();
         $login_info = $get_login->login_info($_GET['email'], $_GET['hash']);
         echo json_encode($login_info);
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
      case "search_jobs":
        $result = new JobseekerJobsView();
        $res = $result->search_jobs($_GET['job'],$_GET['location']);
        echo json_encode($res);
      break;
       default:
          break;
   }
 }else{
    switch ($method){
        case "":
           ;
           break;
       case "":
           ;
           break;
        default:
           break;
    }
 }

?>