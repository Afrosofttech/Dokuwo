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
            echo ((new AuthController())->create_user_account());        
            break;
      case "create_jobseeker_account":
            echo ((new AuthController())->create_user_account());  
            break;
      case "user_login":
            echo ((new AuthController())->user_login()); 
            break;
      case "fill_jobseeker_account":
            echo ((new AuthController())->jobseekerdetails());
            break;
      case "fill_company_account":
            echo ((new AuthController())->companydetails());
            break;
      case "create_admin_account":
            echo ((new AuthController())->create_admin_account());
            break;
      case "reset_password":
           echo ((new AuthController())->reset_password());
           break;
      case "verify_existence_reset_request":
           echo ((new AuthController())->verify_existence_reset_request());
           break;
      case "change_password":
           echo ((new AuthController())->change_password());
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
        echo json_encode((new MessagesController())->send_msg_to_jobseeker());
        break;
      case "forward_msg_to_jobseeker":
        $result = new MessagesController();
        $res = $result->forward_msg_to_jobseeker($_POST['creator_id'],$_POST['fullname'],$_POST['jobseeker_login_id'],$_POST['Name'],$_POST['message_id']);
        echo json_encode($res);
      break;
       case "reply_jobseeker":
         echo json_encode((new MessagesController())->send_msg_to_jobseeker());
         break;
       case "update_company":
         $result = new  SettingsController();
         $response =$result->update_company();
         echo $response;
       break;
       case "accept_application":
         $result = new JobsController();
         $response = $result->accept_application($_POST['jobseeker_id'],$_POST['jobseeker_login_id'],$_POST['fullName'],$_POST['job_id']);
         echo json_encode($response);
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
         $response = $result->create_job($_POST['login_id'],$_POST['company_id'],$_POST['jobName'],$_POST['jobLocation'],$_POST['jobType'],$_POST['jobCategory'],$_POST['requirements'],$_POST['salary'],$_POST['email'],$_POST['phone']);
         echo json_encode($response);
       break;
       case "block_jobseeker":
        $response = (new CompanyController())->block_jobseeker($_POST['company_login_id'],$_POST['jobseeker_login_id']);
        echo json_encode($response);
       break;
       case "report_jobseeker":
        $response = (new CompanyController())->report_jobseeker($_POST['company_login_id'],$_POST['jobseeker_login_id'],$_POST['reason']);
        echo json_encode($response);
       break;
       case "activate_package":
        $result = new JobsController();
        $response = $result->activate_package($_POST['login_id']);
        echo $response;
       break;
       case "update_admin_info":
        $result = new  SettingsController();
        $response =$result->update_admin();
        echo $response;
      break;
       case "request_to_activate_package":
        $response = (new CompanyController())->request_to_activate_package($_POST['login_id'],$_POST['package']);
        echo json_encode($response);
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
          echo json_encode((new JobseekerMessagesController())->send_msg_to_company());
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
          echo json_encode((new JobseekerMessagesController())->send_msg_to_company());
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
        case "review_jobseeker":
          $result = new JobseekerController();
          $res = $result->review_jobseeker($_POST['jobseeker_id'],$_POST['name'],$_POST['email'],$_POST['rating'],$_POST['reviewContent']);
          echo json_encode($res);
        break;
        default:
           break;
    }

 }else{
    switch ($method){
        case "message_is_read":
          echo ((new AdminMessagesController())->message_is_read($_POST['message_id']));
        break;
        case "delete_message":
          echo (new AdminMessagesController())->delete_message($_POST['message_id']);
        break;
        case "delete_sent_message":
          echo (new AdminMessagesController())->delete_sent_message($_POST['message_id']);
        break;
        case "reply_user":
          $result = new AdminMessagesController();
          echo json_encode($result->send_msg_to_user($_POST['creator_id'],$_POST['creator_name'],$_POST['recipient_id'],$_POST['recipient_name'],$_POST['parent_msg_id'],$_POST['subject'],$_POST['msg_body']));
          break;
        case "forward_msg_to_user":
            $result = new AdminMessagesController();
            echo json_encode($result->forward_msg_to_user($_POST['creator_id'],$_POST['fullname'],$_POST['recipient_id'],$_POST['recipient_name'],$_POST['message_id']));
          break;
          case "send_msg_to_user":
            $result = new AdminMessagesController();
            echo json_encode($result->send_msg_to_user($_POST['creator_id'],$_POST['creator_name'],$_POST['recipient_id'],$_POST['recipient_name'],$_POST['parent_msg_id'],$_POST['Subject'],$_POST['messageBody']));
          break;
        case "create_blog":
            $result = new AdminController();
            $response = $result->create_blog();
            echo $response;
          break;
           case "update_blog":
            $result = new AdminController();
            $response = $result->update_blog();
            echo $response;
           break;
           case "delete_blog":
            $result = new AdminController();
            $response = $result->delete_blog($_POST['blog_id']);
            echo $response;
           break;
           case "warn_jobseeker":
            $result = new AdminController();
            $res = $result->warn_jobseeker($_POST['login_id'],$_POST['request']);
            echo json_encode($res);
          break;
          case "activateAccount":
            $result = new AdminController();
            $response = $result->activate_account($_POST['login_id']);
            echo $response;
           break;
           case "deactivateAccount":
            $result = new AdminController();
            $response = $result->deactivate_account($_POST['login_id']);
            echo $response;
           break;
           case "delete_account":
            echo (new AdminController())->delete_account($_POST['login_id']);
           break;
           case "delete_report":
            $result = new AdminController();
            $response = $result->delete_report($_POST['action_id']);
            echo $response;
           break;
        default:
           break;
    }
 }

?>