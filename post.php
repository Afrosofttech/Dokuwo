<?php
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
   require_once('controller/authcontroller.php');
   
   function validate_data(){
            require "gump.class.php";
            
            $gump = new GUMP();

            $_POST = $gump->sanitize($_POST); // You don't have to sanitize, but it's safest to do so.

            $gump->validation_rules(array(
               'email'       => 'required|valid_email',
               'password'    => 'required|max_len,100|min_len,8',
            ));

            $gump->filter_rules(array(
               'email'    => 'trim|sanitize_email',
               'password' => 'trim',
            ));

            $validated_data = $gump->run($_POST);

            if($validated_data === false) {
               return $gump->get_readable_errors(true);
            } else {
               return $validated_data; // validation successful
            }
   }
   switch ($method){
       case "create_company_account":
           
         $auth = new AuthController();
         $validated_data = validate_data();
         $comp_email = $validated_data['email'];
         $usertype = $validated_data['company'];
         $passwd = $validated_data['password'];
         $account = $auth->create_user_account($comp_email, $passwd, $usertype);
         echo $account;         
          break;

          case "create_jobseeker_account":
           
            $auth = new AuthController();
            $validated_data = validate_data();
            $comp_email = $validated_data['email'];
            $usertype = $validated_data['jobseeker'];
            $passwd = $validated_data['password'];
            $account = $auth->create_user_account($comp_email, $passwd, $usertype);
            echo $account;    
            break;

           case "user_login":
           
               $auth = new AuthController();
               $validated_data = validate_data();
               $email = $validated_data['email'];
               $password = $validated_data['password'];
               $user = $auth->user_login($email,$password);
               echo json_encode($user);    
               break;
     
       default:
        
            break;
   }
}elseif($contr == 'details'){
   require_once('controller/authcontroller.php');

   function validate_jobseeker(){
      require "gump.class.php";
      
      $gump = new GUMP();

      $_POST = $gump->sanitize($_POST); // You don't have to sanitize, but it's safest to do so.

      $gump->validation_rules(array(
         'firstname'   => 'required|alpha_numeric|max_len,100',
         'lastname'    => 'required|alpha_numeric|max_len,100',
         'email'       => 'required|valid_email',
      ));

      $gump->filter_rules(array(
         'firstname' => 'trim|sanitize_string',
         'lastname'  => 'trim|sanitize_string',
         'email'     => 'trim|sanitize_email',
      ));

      $validated_data = $gump->run($_POST);

      if($validated_data === false) {
         return $gump->get_readable_errors(true);
      } else {
         return $validated_data; // validation successful
      }
}

function validate_company(){
   require "gump.class.php";
   
   $gump = new GUMP();

   $_POST = $gump->sanitize($_POST); // You don't have to sanitize, but it's safest to do so.

   $gump->validation_rules(array(
      'name'     => 'required|alpha_numeric|max_len,100',
      'email'    => 'required|valid_email',
   ));

   $gump->filter_rules(array(
      'name'      => 'trim|sanitize_string',
      'email'     => 'trim|sanitize_email',
   ));

   $company_data = $gump->run($_POST);

   if($company_data === false) {
      return $gump->get_readable_errors(true);
   } else {
      return $company_data; // validation successful
   }
}

   switch ($method){
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
         $valid_extensions = array('jpeg', 'jpg', 'png');
         $path = 'uploads/';
         $img = $_FILES["logo"]["name"]; 
         $tmp = $_FILES["logo"]["tmp_name"]; 
         $errorimg = $_FILES["logo"]["error"];
         $final_image = rand(1000,1000000).$img;
         $ext = strtolower(pathinfo($img, PATHINFO_EXTENSION));
         // check's valid format
            if(in_array($ext, $valid_extensions)) 
            { 
            $path = $path.strtolower($final_image);
            move_uploaded_file($tmp,$path);
           
            }
            else{
               echo "Invalid image extension";
            }
         $company_data = validate_company();
         $cmp_name = $company_data['name'];
         $cmp_email = $company_data['email'];
         $phone = $company_data['phone'];
         $addr = $company_data['address'];
         $country = $company_data['country'];
         $postcode = $company_data['postalcode'];
         $curr = $company_data['currency'];
         $login_id = $company_data['id'];
         $company = $auth->companydetails($login_id,$cmp_name,$cmp_email,$phone,$addr,$postcode,$country,$curr,$final_image);
            
         echo $company;
          
          break;
       default:
          break;
   }

}

 elseif($contr == 'company'){
    require_once('controller/companycontroller.php');
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
    require_once('controller/jobseekercontroller.php');
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
    require_once('controller/admincontroller.php');
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