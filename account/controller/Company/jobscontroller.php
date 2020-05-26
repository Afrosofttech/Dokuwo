<?php
session_start();
require_once 'model/companymodel.php';

class JobsController extends Company{
    public function accept_application($jobseeker_id,$jobseeker_login_id,$fullName,$job_id){
        $job = $this->get_job_details($job_id);
        /**
        * @param creator_id -> {is the login_id of the super_admin}
        */
        $message = array(
            "creator_id" => 38,
            "creator_name" => 'Admin',
            "recipient_id" => $jobseeker_login_id,
            "recipient_name" => $fullName,
            "parent_msg_id" => null,
            "Subject" => $job['job_name'],
            "messageBody" =>"<p>Hello,</p><p>Congratulations! You have been accepted by ".$_SESSION['name']." for the position of ".$job['job_name'].". You will be contacted soon.</p><p>Regards,</p><p>Dokuwo.</p>"
            );
        $response = $this->accept_change_app_status_send_acceptance($jobseeker_id,$job_id,$message);
        return $response;
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