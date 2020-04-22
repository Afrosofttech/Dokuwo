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
      case "create_admin_account":
            $auth = new AuthController();
            $result = $auth->create_admin_account();
            echo $result;
            break;
      default:
            break;
   }
} elseif($contr == 'company'){
    switch ($method){
        case "delete_message":
         $result = new MessagesController();
         $res = $result->delete_message($_POST['message_id']);
         echo $res; 
         break;
       case "delete_sent_message":
         $result = new MessagesController();
         $res = $result->delete_sent_message($_POST['message_id']);
         echo $res; 
         break;
       case "message_is_read":
         $result = new MessagesController();
         $res = $result->message_is_read($_POST['message_id']);
         echo $res;
        break;
       case "send_msg_to_jobseeker":
         $result = new MessagesController();
         $res = $result->send_msg_to_jobseeker($_POST['creator_id'],$_POST['fullname'],$_POST['jobseeker_login_id'],$_POST['Name'],$_POST['parent_msg_id'],$_POST['Subject'],$_POST['messageBody']);
         echo json_encode($res);
         break;
      case "forward_msg_to_jobseeker":
        $result = new MessagesController();
        $res = $result->forward_msg_to_jobseeker($_POST['creator_id'],$_POST['fullname'],$_POST['jobseeker_login_id'],$_POST['Name'],$_POST['message_id']);
        echo json_encode($res);
      break;
       case "reply_jobseeker":
         $result = new MessagesController();
         $res = $result->send_msg_to_jobseeker($_POST['creator_id'],$_POST['creator_name'],$_POST['recipient_id'],$_POST['recipient_name'],$_POST['parent_msg_id'],$_POST['subject'],$_POST['msg_body']);
         echo json_encode($res);
         break;
       case "update_company":
         $result = new  SettingsController();
         $response =$result->update_company();
         echo $response;
       break;
       case "accept_application":
         $result = new JobsController();
         $response = $result->accept_application($_POST['jobseeker_id'],$_POST['jobseeker_login_id'],$_POST['fullName'],$_POST['job_id']);
         echo $response;
       break;
       case "close_job":
         $result = new JobsController();
         $response = $result->close_job($_POST['job_id']);
         echo $response;
       break;
       case "update_job":
         $result = new JobsController();
         $response = $result->update_job($_POST['job_id'],$_POST['jobName'],$_POST['jobLocation'],$_POST['jobType'],$_POST['jobCategory'],$_POST['requirements'],$_POST['salary'],$_POST['email'],$_POST['phone']);
         echo $response;
       break;
       case "create_job":
         $result = new JobsController();
         $response = $result->create_job($_POST['company_id'],$_POST['jobName'],$_POST['jobLocation'],$_POST['jobType'],$_POST['jobCategory'],$_POST['requirements'],$_POST['salary'],$_POST['email'],$_POST['phone']);
         echo $response;
       break;
       case "block_jobseeker":
        $response = (new CompanyController())->block_jobseeker($_POST['company_login_id'],$_POST['jobseeker_login_id']);
        echo json_encode($response);
       break;
       case "report_jobseeker":
        $response = (new CompanyController())->report_jobseeker($_POST['company_login_id'],$_POST['jobseeker_login_id'],$_POST['reason']);
        echo json_encode($response);
       break;
       case "create_blog":
        $result = new JobsController();
        $response = $result->create_blog();
        echo $response;
       break;
       case "update_blog":
        $result = new JobsController();
        $response = $result->update_blog();
        echo $response;
       break;
       case "delete_blog":
        $result = new JobsController();
        $response = $result->delete_blog($_POST['blog_id']);
        echo $response;
       break;
       case "activateAccount":
        $result = new JobsController();
        $response = $result->activate_account($_POST['login_id']);
        echo $response;
       break;
       case "deactivateAccount":
        $result = new JobsController();
        $response = $result->deactivate_account($_POST['login_id']);
        echo $response;
       break;
       case "delete_account":
        $result = new JobsController();
        $response = $result->delete_account($_POST['login_id']);
        echo $response;
       break;
       default:
       break;
    }

 } elseif($contr == 'jobseeker'){
    switch ($method){
        case "update_jobseeker":
          $result = new  JobseekerSettingsController();
          $response =$result->update_jobseeker();
          echo $response;
           break;
        case "message_is_read":
          $result = new JobseekerMessagesController();
          $res = $result->message_is_read($_POST['message_id']);
          echo $res;
        break;
        case "send_msg_to_company":
          $result = new JobseekerMessagesController();
          $res = $result->send_msg_to_company($_POST['creator_id'],$_POST['cName'],$_POST['company_login_id'],$_POST['Name'],$_POST['parent_msg_id'],$_POST['Subject'],$_POST['messageBody']);
          echo json_encode($res);
          break;
        case "forward_msg_to_company":
          $result = new JobseekerMessagesController();
          $res = $result->forward_msg_to_company($_POST['creator_id'],$_POST['cName'],$_POST['company_login_id'],$_POST['Name'],$_POST['message_id']);
          echo json_encode($res);
          break;
        case "delete_message":
          $result = new JobseekerMessagesController();
          $res = $result->delete_message($_POST['message_id']);
          echo $res; 
          break;
        case "delete_sent_message":
            $result = new MessagesController();
            $res = $result->delete_sent_message($_POST['message_id']);
            echo $res; 
          break;
        case "reply_company":
          $result = new JobseekerMessagesController();
          $res = $result->send_msg_to_company($_POST['creator_id'],$_POST['creator_name'],$_POST['recipient_id'],$_POST['recipient_name'],$_POST['parent_msg_id'],$_POST['subject'],$_POST['msg_body']);
          echo json_encode($res);
          break;
        case "send_application":
          $result = new JobseekerJobsController();
          $res = $result->send_application($_POST['jobseeker_id'],$_POST['job_id'],$_POST['company_id']);
          echo $res;
          break;
        case "delete_hire":
          $result = new JobseekerController();
          $res = $result->delete_hire($_POST['hire_id']);
          echo $res;
          break;
        case "hire_jobseeker":
          $result = new JobseekerJobsController();
          $res = $result->hire_a_jobseeker();
          echo $res;
          break;
        case "contact_admin":
          $result = new JobseekerJobsController();
          $res = $result->contact();
          echo $res;
          break;
        case "request_to_activate_package":
          $result = new JobseekerController();
          $res = $result->request_to_activate_package($_POST['login_id'],$_POST['package']);
          echo json_encode($res);
        break;
        case "add_service":
          $result = new JobseekerController();
          $res = $result->add_service($_POST['jobseeker_id'],$_POST['price'],$_POST['name']);
          echo json_encode($res);
        break;
        case "delete_service":
          $result = new JobseekerController();
          $res = $result->delete_service($_POST['service_id']);
          echo json_encode($res);
        break;
        case "update_service":
          $result = new JobseekerController();
          $res = $result->update_service($_POST['service_id'],$_POST['price'],$_POST['name']);
          echo json_encode($res);
        break;
        case "add_portfolio":
          $result = new JobseekerController();
          $res = $result->add_portfolio($_POST['jobseeker_id'],$_POST['url_link'],$_POST['description'],$_POST['type']);
          echo json_encode($res);
        break;
        case "update_portfolio":
          $result = new JobseekerController();
          $res = $result->update_portfolio($_POST['portfolio_id'],$_POST['url_link'],$_POST['description'],$_POST['type']);
          echo json_encode($res);
        break;
        case "delete_portfolio":
          $result = new JobseekerController();
          $res = $result->delete_portfolio($_POST['portfolio_id']);
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