<?php
include 'includes/autoloader.inc.php';
include 'includes/functions.php';
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
            $validated_data = validate_data();
            $account = $auth->create_user_account($validated_data['email'],$validated_data['password'], $validated_data['company']);
            echo $account;         
            break;
      case "create_jobseeker_account":
            $auth = new AuthController();
            $validated_data = validate_data();
            $account = $auth->create_user_account($validated_data['email'],$validated_data['password'], $validated_data['jobseeker']);
            echo $account;    
            break;
           case "user_login":
            $auth = new AuthController();
            $validated_data = validate_data();
            $user = $auth->user_login($validated_data['email'],$validated_data['password']);
            echo json_encode($user);    
            break;
      case "fill_jobseeker_account":
            $auth = new AuthController();
            $path = 'uploads/';
            $valid_extensions = array('jpeg', 'jpg', 'png');
            $valid_extensions_cv = array('jpeg', 'jpg', 'png', 'pdf' , 'doc' , 'ppt');
            $img = $_FILES["image"]["name"]; 
            $tmp = $_FILES["image"]["tmp_name"];
            $cv = $_FILES["CV"]["name"]; 
            $cv_tmp = $_FILES["CV"]["tmp_name"];
            $errorimg = $_FILES["image"]["error"];
            $errorcv = $_FILES["CV"]["error"];
            $final_image = strtolower(rand(1000,1000000).$img);
            $final_cv = strtolower(rand(1000,1000000).$cv);
            $ext = strtolower(pathinfo($img, PATHINFO_EXTENSION));
            $ext_cv = strtolower(pathinfo($cv, PATHINFO_EXTENSION));
   
            if(in_array($ext, $valid_extensions)) 
            { 
            $path = $path.strtolower($final_image);
            move_uploaded_file($tmp,$path);
            
            }
            else{
               echo "Invalid image extension";
               return;
            }
            if(in_array($ext_cv, $valid_extensions_cv)) 
            { 
            $path = $path.strtolower($final_cv);
            move_uploaded_file($cv_tmp,$path);
            
            }
            else{
               echo "Invalid file extension";
               return;
            }
            $validated_data = validate_jobseeker();
            $fname = $validated_data['firstname'];
            $lname = $validated_data['lastname'];
            $phone = $validated_data['phone'];
            $dob = $validated_data['dateofbirth'];
            $time = strtotime($dob);
            $dateofbirth = date('Y-m-d',$time);
            $addr = $validated_data['address'];
            $country = $validated_data['country'];
            $skills = $validated_data['skills'];
            $edulevel = $validated_data['educationlevel'];
            $login_id = $validated_data['id'];
            $email = $validated_data['email'];
            $fullname = $fname.' '.$lname;
            $jobseeker = $auth->jobseekerdetails($login_id,$fname,$lname,$fullname,$email,$phone,$skills,$edulevel,$addr,$dateofbirth,$country,$final_image,$final_cv);
            echo $jobseeker;
               break;
      case "fill_company_account":
            $auth = new AuthController();
            $company_data = validate_company();
            $result = $auth->companydetails($company_data['id'],$company_data['name'],$company_data['email'],$company_data['phone'],$company_data['address'],$company_data['postalcode'],$company_data['country'],$company_data['currency']);
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