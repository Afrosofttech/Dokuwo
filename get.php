<?php 
include 'includes/autoloader.inc.php';
include 'includes/functions.php';
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
         case "":
        
            break;
        default:
            break;
    }

 } elseif($view == 'jobseeker'){
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