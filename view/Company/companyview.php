<?php

//namespace view\Company

include_once 'model/companymodel.php';

class CompanyView extends Company{
    
    public function dashboard_header_info($login_id){
        $company = $this->get_company($login_id);
        if($company == 400) return 0; 
        $dbContentArray = array();
        $count = 0;
        $jobsPublished = $this->get_no_of_jobs_published($company['company_id']);
        $dbContentArray['noOfJobsPublished'] = $jobsPublished;
        foreach ($company as $key => $value) {
            if ($value != ''){
                $count += 1;
            }
        }
       $result = floor(($count/10)*100);
       $dbContentArray['isProfileComplete'] = $result;
       $noOfJobseekers = $this->get_no_of_job_seekers();
       if($company == 400) $noOfJobseekers = 0; 
       $dbContentArray['noOfJobseekers'] = $noOfJobseekers;
       return $dbContentArray;
    }
    public function get_profile($login_id){ //to be merged with  get_company_profile
        $company = $this->get_company($login_id);
        return $company;
    }
    public function get_company_profile($login_id){
        $company = $this->get_company_profile_details($login_id);
        return $company;
    }
}