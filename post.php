<?php 
include 'includes/autoloader.inc.php';
// For all post methods or queries that involve inserting, creating, updating
// and deleting something on the database, direct all the URL\'s here and then 
// reroute them to the correct controller and method. I know that all this is not neccessary 
// if we were only interacting with the controllers and never with the views but if we are 
// to use the first MVC model, then there will be no need for views here since Jquery will handle everything involving viewing

$uri = $_SERVER['REQUEST_URI'];
$urlParts = parse_url($uri, PHP_URL_PATH);
$urlParts = explode('/',filter_var(rtrim($urlParts, '/'), FILTER_SANITIZE_URL));

 $method =  $urlParts[sizeof($urlParts)-1];
 $contr =  $urlParts[sizeof($urlParts)-2];

 if($contr == 'company'){
    //require_once('controller/companycontroller.php');
    switch ($method){
        case "delete_message":
         $result = new CompanyController();
         $res = $result->delete_message($_POST['message_id']);
         echo $res; 
         break;
       case "delete_message_sent":
         $result = new CompanyController();
         $res = $result->delete_message_sent($_POST['message_id']);
         echo $res; 
         break;
       case "message_is_read":
         $result = new CompanyController();
         $res = $result->message_is_read($_POST['message_id']);
         echo $res;
           break;
       case "send_msg_to_jobseeker":
         $result = new CompanyController();
         $res = $result->send_msg_to_jobseeker($_POST['creator_id'],$_POST['fullname'],$_POST['jobseeker_login_id'],$_POST['Name'],$_POST['parent_msg_id'],$_POST['Subject'],$_POST['messageBody']);
         echo $res;
           break;
       case "reply_jobseeker":
         $result = new CompanyController();
         $res = $result->send_msg_to_jobseeker($_POST['creator_id'],$_POST['creator_name'],$_POST['recipient_id'],$_POST['recipient_name'],$_POST['parent_msg_id'],$_POST['subject'],$_POST['msg_body']);
         echo $res;
        default:
           break;
    }

 } elseif($contr == 'jobseeker'){
    //require_once('controller/jobseekercontroller.php');
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

 }else{
    //require_once('controller/admincontroller.php');
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