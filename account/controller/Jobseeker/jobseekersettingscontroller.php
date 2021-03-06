<?php
require_once 'model/jobseekermodel.php';
require('/app/vendor/autoload.php');

define('BUCKET', getenv('S3_BUCKET_UPLOADS'));
class JobseekerSettingsController extends Jobseeker{
    public function update_jobseeker(){
      $s3 = new Aws\S3\S3Client([
         'version'  => 'latest',
         'region'   => 'us-east-1',
        ]);
        $v_data = self::validate_jobseeker();
        $Details = $this->get_jobseeker($v_data['login_id']); //to be changed
        $hash = md5(rand(0,1000));
        ($v_data['password'] != "")? $password = password_hash($v_data['password'], PASSWORD_DEFAULT) : $password = $v_data['password'];
        $valid_extensions = array('jpeg', 'jpg', 'png');
      //   $path = 'uploads/';
        $img = $_FILES["Imgage"]["name"]; 
        $tmp = $_FILES["Imgage"]["tmp_name"]; 
        $errorimg = $_FILES["Imgage"]["error"];
        //@ams->cv
        $cvPath = 'uploads/';
        $valid_extensions_cv = array('jpeg', 'jpg', 'png', 'pdf' , 'doc' , 'docx' , 'txt', 'zip');
        $cv = $_FILES["CV"]["name"]; 
        $cv_tmp = $_FILES["CV"]["tmp_name"];
        $errorcv = $_FILES["CV"]["error"];

        if($img=="") $final_image = "";
        else{
        $final_image = strtolower(rand(1000,1000000).$img);
        $ext = strtolower(pathinfo($img, PATHINFO_EXTENSION));
        if(in_array($ext, $valid_extensions)){ 
           if($Details[0]['image'] !==""){
              if($Details[0]['image'] !== null){
                 //   unlink($path.$Details[0]['image']);
                 $result = $s3->deleteObject([
                  'Bucket' => BUCKET,
                  'Key'    => $Details[0]['image'],
              ]);   
              }
           }
            // $path = $path.strtolower($final_image);
            // move_uploaded_file($tmp,$path);
            $content_map = array('jpeg' => 'image/jpeg','jpg' => 'image/jpeg','png' => 'image/png');
            $contentType = $this->content_type($ext,$valid_extensions,$content_map);
            $upload = $s3->putObject([
               'Bucket' => BUCKET,
               'Key'    => $final_image,
               'Body'   => fopen($_FILES["Imgage"]["tmp_name"], 'r'),
               'ACL'    => 'public-read',
               'ContentType' => $contentType
           ]);
        }else{
            return 'Invalid Image';
        }
       }
       if($cv=="") $final_cv = "";
       else{
        $final_cv = strtolower(rand(1000,1000000).$cv);
        $ext_cv = strtolower(pathinfo($cv, PATHINFO_EXTENSION));
        if(in_array($ext_cv, $valid_extensions_cv)){ 
            if($Details[0]['CV'] !==""){
               if($Details[0]['CV'] !== null){
               // unlink($cvPath.$Details[0]['CV']);
               $result = $s3->deleteObject([
                  'Bucket' => BUCKET,
                  'Key'    => $Details[0]['CV'],
               ]);  
             }
            }
            // $cvPath = $cvPath.strtolower($final_cv);
            // move_uploaded_file($cv_tmp,$cvPath);
            $content_map = array('jpeg' => 'image/jpeg','jpg' => 'image/jpeg','png' => 'image/png','pdf' => 'application/pdf','doc' => 'application/msword','docx' => 'application/msword','txt' => 'text/plain','zip' => 'application/zip');
            $contentType = $this->content_type($ext_cv,$valid_extensions_cv,$content_map);
            $upload = $s3->putObject([
               'Bucket' => BUCKET,
               'Key'    => $final_cv,
               'Body'   => fopen($_FILES["CV"]["tmp_name"], 'r'),
               'ACL'    => 'public-read',
               'ContentType' => $contentType
           ]);
            }else{
               return 'Invalid CV';
            }
       }

        $res = $this->update_jobseeker_profile($v_data['login_id'],$v_data['fName'],$v_data['lName'],$v_data['email'],$v_data['phone'],$v_data['country'],$v_data['address'],$password,$v_data['dateofbirth'],$v_data['category'],$v_data['interest'],$v_data['description'],$v_data['seeksJob'],$v_data['skills'],$v_data['tag_line'],$v_data['education_level'],$v_data['dateofbirth'],$final_image,$final_cv);
        return $res;
    }
    // get the image content-type
    public function content_type($ext,$valid_extensions,$content_map){
         $key = array_keys($valid_extensions, $ext);
         return $content_map[$valid_extensions[$key[0]]];
    }
    function validate_jobseeker(){
         require "gump.class.php";
         $gump = new GUMP();
        
         $_POST = $gump->sanitize($_POST);
        
         $gump->validation_rules(array(
            'fName'     => 'required|alpha_space|max_len,100',
            'lName'     => 'required|alpha_space|max_len,100',
            'email'    => 'required|valid_email',
         ));
        
         $gump->filter_rules(array(
            'fName'      => 'trim|sanitize_string',
            'lName'      => 'trim|sanitize_string',
            'email'     => 'trim|sanitize_email',
         ));
        
         $jobseeker_data = $gump->run($_POST);
        
         if($jobseeker_data === false) {
            return $gump->get_readable_errors(true);
         } else {
            return $jobseeker_data; // validation successful
         }
        }
}