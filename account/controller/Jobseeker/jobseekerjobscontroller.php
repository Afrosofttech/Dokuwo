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
 public function hire_a_jobseeker()
 {
    $validated_data = self::validate_data();
    $res = $this->hire_jobseeker($validated_data['jobseeker_id'],$validated_data['name'],$validated_data['email'],$validated_data['phone'],$validated_data['task']);
    return $res;
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