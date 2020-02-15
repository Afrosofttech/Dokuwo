<?php

//namespace view\Company

include_once 'model/companymodel.php';

class CompanyView extends Company{
 
    public function no_of_jobs_published($login_id){
        $company = $this->get_company($login_id);
        if($company == false){ return 0; }
        $jobsPublished = $this->get_no_of_jobs_published($company['company_id']);
        return $jobsPublished;
    }
    public function is_profile_complete($login_id){
        $company = $this->get_company($login_id);
        $count = 0;
        foreach ($company as $key => $value) {
            if ($value != ''){
                $count += 1;
            }
        }
       $result = floor(($count/11)*100);
       return $result;
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