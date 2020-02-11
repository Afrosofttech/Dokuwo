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

 if($contr == 'authentication'){
   switch ($method){
       case "create_company_account":
            $auth = new AuthController();
            $account = $auth->create_user_account();
            echo $account;         
            break;
      case "create_jobseeker_account":
            $auth = new AuthController();
            $account = $auth->create_user_account();
            echo $account;    
            break;
      case "user_login":
            $auth = new AuthController();
            $response  = $auth->user_login();
            echo $response;    
            break;
      case "fill_jobseeker_account":
            $auth = new AuthController();
            $response = $auth->jobseekerdetails();
            echo $response;
            break;
      case "fill_company_account":
            $auth = new AuthController();
            $result = $auth->companydetails();
            echo $result;
            break;
      default:
            break;
   }
} elseif($contr == 'company'){
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

 } elseif($contr == 'jobseeker'){
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