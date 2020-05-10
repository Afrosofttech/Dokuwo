<?php
session_start();

include_once 'model/auth.php';

class AuthController extends Auth{
  
   public function login_id($email,$hash){
      $login_id = $this->get_login_id($email,$hash);
      return $login_id['login_id'];
   }

   public function login_info($email,$hash){
      $login_info = $this->get_login_info($email,$hash);
      return $login_info;
   }

   public function create_user_account(){
      $validated_data = self::validate_data();
      $verify_email = $this->verify_email($validated_data['email']);
      if($verify_email == null){
         $hash = md5(rand(0,1000));
         $password = password_hash($validated_data['password'], PASSWORD_DEFAULT);
         $company_account = $this->create_account($validated_data['email'],$password,$hash,$validated_data['tag'],0);
         return "success";
      }else{
         return "duplicate";
      }
   }

   public function user_login(){
      $validated_data = self::validate_data();
      $user = $this->login($validated_data['email']);
      if($user != null){
      if($user['user_type'] === 'admin' && $user['password'] == $validated_data['password']){
         $admin = $this->get_admin_login($user['login_id']);
         $_SESSION['login_id'] = $user['login_id'];
         $_SESSION['email'] = $user['email'];
         $_SESSION['usertype'] = $user['user_type'];
         $_SESSION['status'] = $user['status'];
         $_SESSION['name'] = $admin['admin_name'];
         $_SESSION['_id'] = $admin['admin_id'];
         $_SESSION['role'] = $admin['role'];
         return 200;
      }
      
      $pass_verif = password_verify($validated_data['password'], $user['password']);

      if ($user && $pass_verif){

         $_SESSION['login_id'] = $user['login_id'];
         $_SESSION['email'] = $user['email'];
         $_SESSION['status'] = $user['status'];
         $_SESSION['usertype'] = $user['user_type'];
         if($user['user_type'] == 'company')
         {
            $company = $this->get_company_login($user['login_id']);
         $info = $this->get_recruiter_package_info($user['login_id']);
            $_SESSION['name'] = $company['company_name'];
            $_SESSION['_id'] = $company['company_id'];
            $_SESSION['Currency'] = $company['currency'];
            $_SESSION['package'] = $info['package'];
            $_SESSION['trial_activation'] = $info['trial_activation'];
         }
         if($user['user_type'] == 'jobseeker')
         {
            $jobseeker = $this->get_jobseeker_login($user['login_id']);
            $info = $this->get_freelancer_package_info($user['login_id']);
            $_SESSION['name'] = $jobseeker['fullName'];
            $_SESSION['_id'] = $jobseeker['jobseeker_id'];
            $_SESSION['package'] = $info['package'];
            $_SESSION['trial_activation'] = false;
         }
         return 200;
      } else {
         return false;
      }
   }else{
         return 400;
   }
   }

   public function jobseekerdetails(){
      $v_data = self::validate_jobseeker();
      $exist = $this->does_profile_already_exist($v_data['id'],'jobseeker');
      if(!$exist){
      $imagePath = 'uploads/';
      $cvPath = 'uploads/';
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

      if(in_array($ext, $valid_extensions)){ 
      $imagePath = $imagePath.strtolower($final_image);
      move_uploaded_file($tmp,$imagePath);
      }else{
         return 'Invalid Image';
      }
      if(in_array($ext_cv, $valid_extensions_cv)){ 
      $cvPath = $cvPath.strtolower($final_cv);
      move_uploaded_file($cv_tmp,$cvPath);
      }else{
         return 'Invalid CV';
      }
      $dob = $v_data['dateofbirth'];
      $time = strtotime($dob);
      $dateofbirth = date('Y-m-d',$time);
      $fullname = $v_data['firstname'].' '.$v_data['lastname'];

      $response = $this->jobseeker_account($v_data['id'],$v_data['firstname'],$v_data['lastname'],$fullname,$v_data['phone'],$v_data['skills'],$v_data['educationlevel'],$v_data['address'],$dateofbirth,$v_data['country'],$v_data['category'],$v_data['interest'],$v_data['tag_line'],$final_image,$final_cv);
      return $response;
   }else{
      return 'duplicate';
   }
   }

   public function companydetails(){
      $company_data = self::validate_company();
      $exist = $this->does_profile_already_exist($company_data['id'],'company');
      if(!$exist){
      $valid_extensions = array('jpeg', 'jpg', 'png');
      $path = 'uploads/';
      $img = $_FILES["logo"]["name"]; 
      $tmp = $_FILES["logo"]["tmp_name"]; 
      $errorimg = $_FILES["logo"]["error"];
      $final_image = rand(1000,1000000).$img;
      $ext = strtolower(pathinfo($img, PATHINFO_EXTENSION));
         if(in_array($ext, $valid_extensions)){ 
         $path = $path.strtolower($final_image);
         move_uploaded_file($tmp,$path);
         }else{
            return 'Invalid';  //@ams-> make sure this is also considered as a return value
         }
      $result = $this->company_account($company_data['id'],$company_data['name'],$company_data['email'],$company_data['phone'],$company_data['address'],$company_data['postalcode'],$company_data['country'],$company_data['currency'],$final_image);
         return $result;
      }else{
         return 'duplicate';
      }
   }

//  admin account creation by super admin
   public function create_admin_account(){
   $validated_data = self::validate_data();
   $verify_email = $this->verify_email($validated_data['email']);
   if($verify_email == null){
         $hash = md5(rand(0,1000));
         $password = password_hash($validated_data['password'], PASSWORD_DEFAULT);
         $company_account = $this->create_account($validated_data['email'],$password,$hash,'admin',0);
         $admin = $this->fill_admin_details($validated_data['adminName'],'admin',$validated_data['email']);

         return $admin;
   }else{
         return "duplicate";
   }
}

   function validate_jobseeker(){
      require "gump.class.php";
      
      $gump = new GUMP();
   
      $_POST = $gump->sanitize($_POST); // You don't have to sanitize, but it's safest to do so.
      //@ams-> i have replaced most alpha_numeric with alpha_space cus names can be multiple and need to allow spaces between
      $gump->validation_rules(array(
         'firstname'   => 'required|alpha_space|max_len,100', 
         'lastname'    => 'required|alpha_space|max_len,100'
      ));
   
      $gump->filter_rules(array(
         'firstname' => 'trim|sanitize_string',
         'lastname'  => 'trim|sanitize_string'
      ));
   
      $validated_data = $gump->run($_POST);
   
      if($validated_data === false) {
         return $gump->get_readable_errors(true);
      } else {
         return $validated_data; // validation successful
      }
   }
   function validate_company(){
      //@ams->both company signup and update company profile are using this.To be changed
      require "gump.class.php";
      $gump = new GUMP();
      
      $_POST = $gump->sanitize($_POST); // You don't have to sanitize, but it's safest to do so.
      
      $gump->validation_rules(array(
         'name'     => 'required|alpha_space|max_len,100',
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
}