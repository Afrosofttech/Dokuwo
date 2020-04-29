<?php
session_start();
include_once 'model/companymodel.php';

class JobsController extends Company{
    public function accept_application($jobseeker_id,$jobseeker_login_id,$fullName,$job_id){
        $response = $this->accept_and_change_app_status($jobseeker_id,$job_id);
        $job = $this->get_job_details($job_id);
        $jobName = $job['job_name'];
        $message = array(
         "creator_id" => $_SESSION['login_id'],
         "creator_name" => $_SESSION['name'],
         "recipient_id" => $jobseeker_login_id,
         "recipient_name" => $fullName,
         "parent_msg_id" => null,
         "Subject" => $jobName,
         "messageBody" =>"<p>Hello,</p><p>Congratulations! You have been accepted by ".$_SESSION['name']." for the position of ".$jobName.". You will be contacted soon.</p><p>Regards,</p><p>Dokuwo.</p>"
         );
         $result = $this->send_this_to_applicant($message);
         if($result == 200) return $response;
         else return 400; //check
    }
    public function close_job($job_id){
        $response = $this->close_this_job($job_id);
        return $response;
    }
    public function update_job($job_id,$jobName,$jobLocation,$jobType,$jobCategory,$requirements,$salary,$email,$phone){
        $response = $this->update_this_job($job_id,$jobName,$jobLocation,$jobType,$jobCategory,$requirements,$salary,$email,$phone);
        return $response;
    }
    public function create_job($login_id,$company_id,$jobName,$jobLocation,$jobType,$jobCategory,$requirements,$salary,$email,$phone){
        $response = $this->create_this_job($login_id,$company_id,$jobName,$jobLocation,$jobType,$jobCategory,$requirements,$salary,$email,$phone);
        return $response;
    }

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

    public function uppdate_blog(){
        $valid_extensions = array('jpeg', 'jpg', 'png');
        $path = 'uploads/';
        $img = $_FILES["sblogImage"]["name"]; 
        $tmp = $_FILES["sblogImage"]["tmp_name"]; 
        $errorimg = $_FILES["sblogImage"]["error"];

        if($img=="") $final_image = "";
        else{
        $final_image = strtolower(rand(1000,1000000).$img);
        $ext = strtolower(pathinfo($img, PATHINFO_EXTENSION));
        if(in_array($ext, $valid_extensions)){ 
            $Details = $this->get_blog_details($_POST['sblog_id']); 
            if($Details['blog_image'] !== null || $Details['blog_image'] !=="")
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
    public function activate_package($login_id){
        $response = $this->activatePackage($login_id);
        return $response;
    }

    public function delete_report($action_id){
        $response = $this->deleteReport($action_id);
        return $response;
    }
}