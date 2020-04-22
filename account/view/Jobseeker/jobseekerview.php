<?php
session_start();
include_once 'model/jobseekermodel.php';
include_once 'model/auth.php';
class JobseekerView extends Jobseeker{
    public function dashboard_header_info($login_id){
        $dbContentArray = array();
        $count = 0;
        $jobSeeker = $this->get_jobseeker($login_id);
        $jobsAvailable = $this->get_no_of_jobs_available();
        $dbContentArray['noOfJobsAvailable'] = $jobsAvailable;
        foreach ($jobSeeker[0] as $key => $value) {
            if ($value != ''){
                $count += 1;
            }
        }
       $result = floor(($count/17)*100);
       $dbContentArray['isProfileComplete'] = $result;
       $noOfCompanies = $this->get_no_of_companies();
       if($noOfCompanies == 400) $noOfCompanies = 0; 
       $dbContentArray['noOfCompanies'] = $noOfCompanies;
       //i am changing the session variables. This is with packaging thingy. if a user doesn\'t logout abd after a day comes back again
       //this will make sure that the package is upto date
       $res= (new Auth())->get_freelancer_package_info($login_id);
       $dbContentArray['package'] = $res['package'];
       $dbContentArray['trial_activation'] = 'false';
       return $dbContentArray;
    }
    public function all_hires($jobseeker_id)
    {
        $allHires = $this->get_all_hires($jobseeker_id);
        return $allHires;
    }
    public function doing_freelance($jobseeker_id){
        $res = $this->is_doing_freelance($jobseeker_id);
        return $res;
    }
    public function categories_of_jobs(){
        $categories = $this->get_categories_of_jobs();
        return $categories;
    }
    public function freelancer_services($jobseeker_id){
        $res = $this->get_freelancer_services($jobseeker_id);
        return $res;
    }
    public function get_service($service_id){
        $res = $this->get_this_service($service_id);
        return $res;
    }
    public function freelancer_portfolio($jobseeker_id){
        $res = $this->get_freelancer_portfolio($jobseeker_id);
        return $res;
    }
    public function get_portfolio($portfolio_id){
        $res = $this->get_this_portfolio($portfolio_id);
        return $res;
    }
}