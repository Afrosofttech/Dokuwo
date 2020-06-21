<?php
include_once 'model/adminmodel.php';
require_once 'model/companymodel.php';
require('/app/vendor/autoload.php');

define('BUCKET', getenv('S3_BUCKET_UPLOADS'));
class AdminController extends Admin{

    public function create_blog(){
        $s3 = new Aws\S3\S3Client([
            'version'  => 'latest',
            'region'   => 'us-east-1',
        ]);
        $valid_extensions = array('jpeg', 'jpg', 'png');
        // $path = 'uploads/';
        $img = $_FILES["blogImage"]["name"]; 
        $tmp = $_FILES["blogImage"]["tmp_name"]; 
        $errorimg = $_FILES["blogImage"]["error"];

        if($img=="") $final_image = "";
        else{
        $final_image = strtolower(rand(1000,1000000).$img);
        $ext = strtolower(pathinfo($img, PATHINFO_EXTENSION));
        if(in_array($ext, $valid_extensions)){
            // $path = $path.strtolower($final_image);
            // move_uploaded_file($tmp,$path);
            $content_map = array('jpeg' => 'image/jpeg','jpg' => 'image/jpeg','png' => 'image/png');
            $contentType = $this->content_type($ext,$valid_extensions,$content_map);
            $upload = $s3->putObject([
               'Bucket' => BUCKET,
               'Key'    => $final_image,
               'Body'   => fopen($_FILES["blogImage"]["tmp_name"], 'r'),
               'ACL'    => 'public-read',
               'ContentType' => $contentType
           ]);
        }else{
            return 'Invalid Image';
        }
       }
        $response = $this->create_new_blog($_POST['admin_id'],$_POST['blogTitle'],$_POST['publisher'],$_POST['blogCategory'],$_POST['tags'],$_POST['blog_content'],$final_image);
        return $response;
    }
// get the image content-type -> to be made a static func
public function content_type($ext,$valid_extensions,$content_map){
    $key = array_keys($valid_extensions, $ext);
    return $content_map[$valid_extensions[$key[0]]];
 }
    public function update_blog(){
        $s3 = new Aws\S3\S3Client([
            'version'  => 'latest',
            'region'   => 'us-east-1',
        ]);
        $values = $_POST;
        $valid_extensions = array('jpeg', 'jpg', 'png');
        // $path = 'uploads/';
        $img = $_FILES["sblogImage"]["name"]; 
        $tmp = $_FILES["sblogImage"]["tmp_name"]; 
        $errorimg = $_FILES["sblogImage"]["error"];
        $blog_img_details = new Company();
        $Details = $blog_img_details->get_blog_details($_POST['sblog_id']);

        if($img=="") $final_image = $Details['blog_image'];
        else{
        $final_image = strtolower(rand(1000,1000000).$img);
        $ext = strtolower(pathinfo($img, PATHINFO_EXTENSION));
        if(in_array($ext, $valid_extensions)){
            $content_map = array('jpeg' => 'image/jpeg','jpg' => 'image/jpeg','png' => 'image/png');
            $contentType = $this->content_type($ext,$valid_extensions,$content_map);
            if($Details[0]['blog_image'] !== null || $Details[0]['blog_image'] !==""){
                //unlink($path.$Details['blog_image']);
                $result = $s3->deleteObject([
                    'Bucket' => BUCKET,
                    'Key'    => $Details['blog_image'],
                ]);
            }
            // $path = $path.strtolower($final_image);
            // move_uploaded_file($tmp,$path);
            $upload = $s3->putObject([
                'Bucket' => BUCKET,
                'Key'    => $final_image,
                'Body'   => fopen($_FILES["sblogImage"]["tmp_name"], 'r'),
                'ACL'    => 'public-read',
                'ContentType' => $contentType
            ]);
        }else{
            return 'Invalid Image';
        }
       }
        $response = $this->updateBlog($_POST['sblogTitle'],$_POST['sblogCategory'],$_POST['sTags'],$_POST['sblogContent'],$final_image,$_POST['sblog_id']);
        return $response;
    }

    public function delete_blog($blog_id){
        $response = $this->deleteBlog($blog_id);
        return $response;
    }

    public function warn_jobseeker($login_id,$request){
        $res = $this->warnJobseeker($login_id,$request);   
        return $res;
    }

    public function activate_account($login_id){
        $response = $this->activateAccount($login_id);
        return $response;
    }
    public function deactivate_account($login_id){
        $response = $this->deactivateAccount($login_id);
        return $response;
    }
    public function delete_account($login_id){
        $response = $this->deleteAccount($login_id);
        return $response;
    }

    public function delete_report($action_id){
        $response = $this->deleteReport($action_id);
        return $response;
    }
    public function contact()
    {
       $validated_contact = self::validate_data();
       $res = $this->contactAdmin($validated_contact['name'],$validated_contact['email'],$validated_contact['subject'],$validated_contact['message']);
       return $res;
    }
    public function validate_data(){
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
      
       $v_data = $gump->run($_POST);
      
       if($v_data === false) {
          return $gump->get_readable_errors(true);
       } else {
          return $v_data; // validation successful
       }
    }
}