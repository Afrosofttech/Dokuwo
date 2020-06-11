<?php
require_once 'model/companymodel.php';
require('/app/vendor/autoload.php');

define('BUCKET', getenv('S3_BUCKET_UPLOADS'));
class SettingsController extends Company{

    public function update_company(){
         $s3 = new Aws\S3\S3Client([
               'version'  => 'latest',
               'region'   => 'us-east-1',
         ]);
        $v_data = self::validate_company();
        $hash = md5(rand(0,1000));
        ($v_data['password'] != "")? $password = password_hash($v_data['password'], PASSWORD_DEFAULT) : $password = $v_data['password'];
        $valid_extensions = array('jpeg', 'jpg', 'png');
        $img = $_FILES["logo"]["name"]; 
        $tmp = $_FILES["logo"]["tmp_name"]; 
        $errorimg = $_FILES["logo"]["error"];
        if($img=="") $final_image ="";
        else{
        //@ams-account for no image update-> related to invalid
        $final_image = rand(1000,1000000).$img;
        $ext = strtolower(pathinfo($img, PATHINFO_EXTENSION));
        if(in_array($ext, $valid_extensions)){ 
           $Details = $this->get_company($v_data['login_id']);
           if($Details['logo'] !== null || $Details['logo'] !==""){
            //   unlink($path.$Details['logo']);
              $result = $s3->deleteObject([
               'Bucket' => BUCKET,
               'Key'    => $Details['logo'],
           ]);
           }
            // move_uploaded_file($tmp,$path);
            $content_map = array('jpeg' => 'image/jpeg','jpg' => 'image/jpeg','png' => 'image/png');
            $contentType = $this->content_type($ext,$valid_extensions,$content_map);
            $upload = $s3->putObject([
               'Bucket' => BUCKET,
               'Key'    => $final_image,
               'Body'   => fopen($_FILES["logo"]["tmp_name"], 'r'),
               'ACL'    => 'public-read',
               'ContentType' => $contentType
           ]);
        }else{
            return 'Invalid';  //@ams-> make sure this is also considered as a return value
       }
    }
        $res = $this->update_company_profile($v_data['login_id'],$v_data['name'],$v_data['email'],$v_data['phone'],$v_data['country'],$v_data['address'],$password,$v_data['currency'],$v_data['code'],$final_image);
        return $res;
    }
   // get the image content-type
    public function content_type($ext,$valid_extensions,$content_map){
      $key = array_keys($valid_extensions, $ext);
      return $content_map[$valid_extensions[$key[0]]];
    }
    public function update_admin(){
      $v_data = self::validate_data();
      $res = $this->updateAdmin($v_data['name'],$v_data['email'],$v_data['password'],$v_data['login_id']);
      return $res;
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
            'name'        => 'required|alpha_space|max_len,100',
            'email'       => 'required|valid_email',
            'password'    => 'max_len,100|min_len,8',
         ));
     
         $gump->filter_rules(array(
            'name'     => 'trim|sanitize_string',
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