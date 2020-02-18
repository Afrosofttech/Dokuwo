<?php
include_once 'model/companymodel.php';

class JobsController extends Company{
    public function accept_application($jobseeker_id,$job_id){
        $response = $this->accept_and_change_app_status($jobseeker_id,$job_id);
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
    public function create_job($company_id,$jobName,$jobLocation,$jobType,$jobCategory,$requirements,$salary,$email,$phone){
        $response = $this->create_this_job($company_id,$jobName,$jobLocation,$jobType,$jobCategory,$requirements,$salary,$email,$phone);
        return $response;
    }
}