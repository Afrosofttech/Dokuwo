<?php
session_start();

include_once 'model/auth.php';

$bucket = getenv('S3_BUCKET_NAME')?: die('No "S3_BUCKET_NAME" config var in found in env!');
class AuthController extends Auth{
  
   public function login_id($email,$hash){
      $login_id = $this->get_login_id($email,$hash);
      return $login_id['login_id'];
   }

   public function login_info(){
      $login_info = $this->get_login_info($_GET['email'], $_GET['hash']);
      return $login_info;
   }

   public function create_user_account(){
      $validated_data = self::validate_data();
      $verify_email = $this->verify_email($validated_data['email']);
      if($verify_email == null){
         $hash = md5(rand(0,1000));
         $password = password_hash($validated_data['password'], PASSWORD_DEFAULT);
         $res = $this->create_account($validated_data['email'],$password,$hash,$validated_data['tag'],0);
         if($res == 202) return 'success';
         if(!$res == 202){
            $response = $this->send_error_copy($validated_data['email'],'Activation');
            return $response;
         } 
      }else{
         return "duplicate";
      }
   }

   public function user_login(){
      $validated_data = self::validate_data();
      $user = $this->login($validated_data['email']);
      if($user != null){
      if($user['user_type'] === 'admin' && password_verify($validated_data['password'], $user['password'])){
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
      $dob = $v_data['dateofbirth'];
      $time = strtotime($dob);
      $dateofbirth = date('Y-m-d',$time);
      $fullname = $v_data['firstname'].' '.$v_data['lastname'];

      $targetDir = 'uploads/';
      $valid_jobseeker_extensions = array(
         array('jpeg', 'jpg', 'png'),
         array('jpeg', 'jpg', 'png', 'pdf' , 'doc' , 'docx' , 'ppt'),
      );

      if($_FILES["image"]["name"] != "" && $_FILES["CV"]["name"] != ""){
         $final_image = strtolower(rand(1000,1000000).$_FILES["image"]["name"]);
         $final_cv = strtolower(rand(1000,1000000).$_FILES["CV"]["name"]);
         $ext = strtolower(pathinfo($_FILES["image"]["name"], PATHINFO_EXTENSION));
         $ext_cv = strtolower(pathinfo($_FILES["CV"]["name"], PATHINFO_EXTENSION));
         if(in_array($ext, $valid_jobseeker_extensions[0])){ 
            $targetDir = $targetDir.strtolower($final_image);
            move_uploaded_file($_FILES["image"]["tmp_name"],$targetDir);
         }else{
               return 'Invalid Image';
         }
         if(in_array($ext_cv, $valid_jobseeker_extensions[1])){ 
         $targetDir = 'uploads/';
         $targetDir = $targetDir.strtolower($final_cv);
         move_uploaded_file($_FILES["CV"]["tmp_name"],$targetDir);
         }else{
            return 'Invalid CV';
         }
         $response = $this->jobseeker_account($v_data['id'],$v_data['firstname'],$v_data['lastname'],$fullname,$v_data['phone'],$v_data['skills'],$v_data['educationlevel'],$v_data['address'],$dateofbirth,$v_data['country'],$v_data['category'],$v_data['interest'],$v_data['tag_line'],$v_data['description'],$final_image,$final_cv);
         return $response;
      } else if($_FILES["image"]["name"] != ""){
         $final_image = strtolower(rand(1000,1000000).$_FILES["image"]["name"]);
         $ext = strtolower(pathinfo($_FILES["image"]["name"], PATHINFO_EXTENSION));
         if(in_array($ext, $valid_jobseeker_extensions[0])){ 
            $targetDir = $targetDir.strtolower($final_image);
            move_uploaded_file($_FILES["image"]["tmp_name"],$targetDir);
         }else{
               return 'Invalid Image';
         }
         $response = $this->jobseeker_account($v_data['id'],$v_data['firstname'],$v_data['lastname'],$fullname,$v_data['phone'],$v_data['skills'],$v_data['educationlevel'],$v_data['address'],$dateofbirth,$v_data['country'],$v_data['category'],$v_data['interest'],$v_data['tag_line'],$v_data['description'],$final_image,null);
         return $response;
      }else if($_FILES["CV"]["name"] != ""){
         $final_cv = strtolower(rand(1000,1000000).$_FILES["CV"]["name"]);
         $ext_cv = strtolower(pathinfo($_FILES["CV"]["name"], PATHINFO_EXTENSION));
         if(in_array($ext_cv, $valid_jobseeker_extensions[1])){ 
            $targetDir = $targetDir.strtolower($final_cv);
            move_uploaded_file($_FILES["CV"]["tmp_name"],$targetDir);
         }else{
            return 'Invalid CV';
         }
            $response = $this->jobseeker_account($v_data['id'],$v_data['firstname'],$v_data['lastname'],$fullname,$v_data['phone'],$v_data['skills'],$v_data['educationlevel'],$v_data['address'],$dateofbirth,$v_data['country'],$v_data['category'],$v_data['interest'],$v_data['tag_line'],$v_data['description'],null,$final_cv);
            return $response;
      }else {
         $response = $this->jobseeker_account($v_data['id'],$v_data['firstname'],$v_data['lastname'],$fullname,$v_data['phone'],$v_data['skills'],$v_data['educationlevel'],$v_data['address'],$dateofbirth,$v_data['country'],$v_data['category'],$v_data['interest'],$v_data['tag_line'],$v_data['description'],null,null);
         return $response;
      }
    }else{
         return 'duplicate';
    }
   }

   public function companydetails(){
      require('/app/vendor/autoload.php');
      // this will simply read AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY from env vars
      $s3 = new Aws\S3\S3Client([
          'version'  => '2006-03-01',
          'region'   => 'us-east-1',
      ]);
      global $bucket;
      $company_data = self::validate_company();
      $exist = $this->does_profile_already_exist($company_data['id'],'company');
      if(!$exist){
      $valid_extensions = array('jpeg', 'jpg', 'png');
      $path = 'uploads/';
      $img = $_FILES["logo"]["name"]; 
      $tmp = $_FILES["logo"]["tmp_name"]; 
      if($_FILES["logo"]["name"] != ""){
         $final_image = rand(1000,1000000).$img;
         $ext = strtolower(pathinfo($img, PATHINFO_EXTENSION));
         if(in_array($ext, $valid_extensions)){ 
         $path = $path.strtolower($final_image);
         // move_uploaded_file($tmp,$path);
         $upload = $s3->upload($bucket, $_FILES['logo']['name'], fopen($_FILES['logo']['tmp_name'], 'rb'), 'public-read');
         }else{
            return 'Invalid';  //@ams-> make sure this is also considered as a return value
         }
         $result = $this->company_account($company_data['id'],$company_data['name'],$company_data['email'],$company_data['phone'],$company_data['address'],$company_data['postalcode'],$company_data['country'],$company_data['currency'],$final_image);
         return $result;
      }else{
         $result = $this->company_account($company_data['id'],$company_data['name'],$company_data['email'],$company_data['phone'],$company_data['address'],$company_data['postalcode'],$company_data['country'],$company_data['currency'],null);
         return $result;
       }
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
         'firstname'   => 'required|max_len,100', //'required|alpha_space|max_len,100'
         'lastname'    => 'required|max_len,100'  //'required|alpha_space|max_len,100'
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
      require "gump.class.php";
      //@ams->both company signup and update company profile are using this.To be changed
      $gump = new GUMP();
      
      $_POST = $gump->sanitize($_POST); // You don't have to sanitize, but it's safest to do so.
      
      $gump->validation_rules(array(
         'name'     => 'required|max_len,100',
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
      public function reset_password(){
         $reset_email = self::validate_email();
         $result = $this->does_account_exist($reset_email['email']);
         if(!$result == 202){
            $response = $this->send_error_copy($reset_email['email'],'Password Reset');
            return $response;
         }  
         return 'Success';
      }
      public function validate_email(){
      require "gump.class.php";

         $gump = new GUMP();
      
         $_POST = $gump->sanitize($_POST); // You don't have to sanitize, but it's safest to do so.
      
         $gump->validation_rules(array(
            'email'       => 'required|valid_email'
         ));
      
         $gump->filter_rules(array(
            'email'    => 'trim|sanitize_email'
         ));
      
         $validated_data = $gump->run($_POST);
      
         if($validated_data === false) {
            return $gump->get_readable_errors(true);
         } else {
            return $validated_data; // validation successful
         }
      }
      public function verify_existence_reset_request(){
         $res = self::validate_reset();
         $result = $this->if_request_valid($res['email'],$res['hash']);
         return $result;
      }
      public function validate_reset(){
         require "gump.class.php";

         $gump = new GUMP();
      
         $_POST = $gump->sanitize($_POST); // You don't have to sanitize, but it's safest to do so.
      
         $gump->validation_rules(array(
            'email'       => 'required|valid_email',
            'hash'       => 'required|alpha_numeric|max_len,100'
         ));
      
         $gump->filter_rules(array(
            'email'    => 'trim|sanitize_email',
            'email'    => 'trim'
         ));
      
         $validated_data = $gump->run($_POST);
      
         if($validated_data === false) {
            return $gump->get_readable_errors(true);
         } else {
            return $validated_data; // validation successful
         }
      }
      public function change_password(){
         $validated_data = self::validate_pwd();
         $res = $this->new_password(password_hash($validated_data['pwd'], PASSWORD_DEFAULT),$validated_data['login_id']);
         return $res;
      }
      public function validate_pwd(){
         require "gump.class.php";
         
         $gump = new GUMP();

         $_POST = $gump->sanitize($_POST); // You don't have to sanitize, but it's safest to do so.
      
         $gump->validation_rules(array(
            'pwd'       => 'required|min_len,8'
         ));
      
         $gump->filter_rules(array(
            'pwd'    => 'trim|htmlencode'
         ));
      
         $validated_data = $gump->run($_POST);
      
         if($validated_data === false) {
            return $gump->get_readable_errors(true);
         } else {
            return $validated_data; // validation successful
         }
      }
}
