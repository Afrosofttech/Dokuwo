<?php

//namespace view\Company

include_once 'model/companymodel.php';

class JobsView extends Company{
    
    public function get_jobs_posted($company_id){
        $jobs = $this->get_jobs($company_id);
        return $jobs;
    }

    public function show_application_stats($company_id){
        $app_stats = $this->get_application_stats($company_id);
        return $app_stats;
    }
    public function job_info($job_id){
        $app_stats = $this->get_job_info($job_id);
        return $app_stats;
    }
    public function job_applicatants($job_id){
        $job_applicants = $this->get_job_applicatants($job_id);
        return $job_applicants;
    }
    public function job_applicatant($login_id){
        $job_applicant = $this->get_job_applicatant($login_id);
        return $job_applicant;
    }
}