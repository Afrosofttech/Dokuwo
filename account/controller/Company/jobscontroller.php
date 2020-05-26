<?php
session_start();
require_once 'model/companymodel.php';

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

    
    public function activate_package($login_id){
        $response = $this->activatePackage($login_id);
        return $response;
    }

}