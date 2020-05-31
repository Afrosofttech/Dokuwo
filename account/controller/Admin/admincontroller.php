<?php
include_once 'model/adminmodel.php';
require_once 'model/companymodel.php';

class AdminController extends Admin{

    public function create_blog(){
        $valid_extensions = array('jpeg', 'jpg', 'png');
        $path = 'uploads/';
        $img = $_FILES["blogImage"]["name"]; 
        $tmp = $_FILES["blogImage"]["tmp_name"]; 
        $errorimg = $_FILES["blogImage"]["error"];

        if($img=="") $final_image = "";
        else{
        $final_image = strtolower(rand(1000,1000000).$img);
        $ext = strtolower(pathinfo($img, PATHINFO_EXTENSION));
        if(in_array($ext, $valid_extensions)){
            $path = $path.strtolower($final_image);
            move_uploaded_file($tmp,$path);
        }else{
            return 'Invalid Image';
        }
       }
        $response = $this->create_new_blog($_POST['admin_id'],$_POST['blogTitle'],$_POST['publisher'],$_POST['blogCategory'],$_POST['tags'],$_POST['blog_content'],$final_image);
        return $response;
    }

    public function update_blog(){
        $values = $_POST;
        $valid_extensions = array('jpeg', 'jpg', 'png');
        $path = 'uploads/';
        $img = $_FILES["sblogImage"]["name"]; 
        $tmp = $_FILES["sblogImage"]["tmp_name"]; 
        $errorimg = $_FILES["sblogImage"]["error"];
        $blog_img_details = new Company();
        $Details = $blog_img_details->get_blog_details($_POST['sblog_id']);

        if($img=="") $final_image = $Details[0]['blog_image'];
        else{
        $final_image = strtolower(rand(1000,1000000).$img);
        $ext = strtolower(pathinfo($img, PATHINFO_EXTENSION));
        if(in_array($ext, $valid_extensions)){
             
            if($Details[0]['blog_image'] !== null || $Details[0]['blog_image'] !=="")
                unlink($path.$Details['blog_image']);
            $path = $path.strtolower($final_image);
            move_uploaded_file($tmp,$path);
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
}