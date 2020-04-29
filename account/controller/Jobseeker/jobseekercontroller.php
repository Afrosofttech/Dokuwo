<?php
include_once 'model/jobseekermodel.php';

class JobseekerController extends Jobseeker{
    public function delete_hire($hire_id)
    {
       $res = $this->delete_this_hire($hire_id);   
       return $res;
    }
    public function request_to_activate_package($login_id,$package){
        $res = $this->requesting_this_package($login_id,$package);   
        return $res;
    }
    public function add_service($jobseeker_id,$price,$name){
        $res = $this->add_this_service($jobseeker_id,$price,$name);   
        return $res;
    }
    public function update_service($service_id,$price,$name){
        $res = $this->update_this_service($service_id,$price,$name);   
        return $res;
    }
    public function delete_service($service_id)
    {
        $res = $this->delete_this_service($service_id);   
        return $res;
    }
    public function add_portfolio($jobseeker_id,$url_link,$description,$type)
    {
        $res = $this->add_this_portfolio($jobseeker_id,$url_link,$description,$type);   
        return $res;
    }
    public function update_portfolio($portfolio_id,$url_link,$description,$type)
    {
        $res = $this->update_this_portfolio($portfolio_id,$url_link,$description,$type);  
        return $res;
    }
    public function delete_portfolio($portfolio_id){
        $res = $this->delete_this_portfolio($portfolio_id);   
        return $res;
    }
    public function review_jobseeker($jobseeker_id,$name,$email,$rating,$content){
        $res = $this->send_jobseeker_review($jobseeker_id,$name,$email,$rating,$content);   
        return $res;
    }
    public function warn_jobseeker($login_id,$request){
        $res = $this->warnJobseeker($login_id,$request);   
        return $res;
    }
}