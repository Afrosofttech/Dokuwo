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
       case "no_of_jobs_published":
          $result = new CompanyView();
          $res = $result->no_of_jobs_published($_GET['login_id']);
          echo $res;
          break;
      case "is_profile_complete":
         $result = new CompanyView();
         $res = $result->is_profile_complete($_GET['login_id']);
        //  echo json_encode($results);
        echo $res;
          break;
      case "profile":
          $result = new CompanyView();
          $res = $result->get_profile($_GET['login_id']);
          echo json_encode($res);
         break;
       case "no_of_new_messages":
         $result = new CompanyView();
         $res = $result->no_of_new_messages($_GET['login_id']);
         //echo json_encode($results);
         echo $res;
         break;
       case "all_inbox_messages":
         $result = new CompanyView();
         $res = $result->all_inbox_messages($_GET['login_id']);
         echo json_encode($res);
       break;
       case "read_messages":
         $result = new CompanyView();
         $res = $result->read_messages($_GET['login_id']);
         echo json_encode($res);
       break;
       case "all_sent_messages":
         $result = new CompanyView();
         $res = $result->all_sent_messages($_GET['login_id']);
         echo json_encode($res);
       break;
       case "message_recipient":
         $result = new CompanyView();
         $res = $result->message_recipient($_GET['message_id']);
         echo json_encode($res);
       break;
       case "new_unread_messages":
         $result = new CompanyView();
         $res = $result->new_unread_messages($_GET['login_id']);
         echo json_encode($res);
       case "retreive_all_jobseekers":
        $result = new CompanyView();
        $res = $result->retreive_all_jobseekers();
        echo json_encode($res);
       break;
       default:
          break;
   }

} elseif($view == 'jobseeker'){
   switch ($method){
       case "no_of_job_seekers":
         $result = new JobseekerView();
         $count = $result->no_of_job_seekers();
         echo $count;
         break;
      case "":
          ;
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