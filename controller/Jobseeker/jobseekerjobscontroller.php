<?php
include_once 'model/jobseekermodel.php';

class JobseekerJobsController extends Jobseeker{
 public function send_application($jobseeker_id,$job_id,$company_id)
 {
    $ifAlreadyApplied = $this->have_user_already_applied_this_job($jobseeker_id,$job_id,$company_id);
    if($ifAlreadyApplied == 0) $res = $this->apply_to_this_job($jobseeker_id,$job_id,$company_id);
    else $res = 'You already applied!';

    return $res;
 }
}