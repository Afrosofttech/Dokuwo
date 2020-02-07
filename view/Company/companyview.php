<?php

//namespace view\Company

include_once 'model/companymodel.php';

class CompanyView extends Company{
      
    public function no_of_jobs_published($login_id){
        $company = $this->get_company($login_id);
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
        // return $company;
        //$isProfileComplete =  $this->is_the_profile_complete($company['company_id']);
    }
    public function get_profile($login_id){
        $company = $this->get_company($login_id);
        return $company;
    }
}