<?php
session_start();
include_once 'model/jobseekermodel.php';

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
       $result = floor(($count/15)*100);
       $dbContentArray['isProfileComplete'] = $result;
       $noOfCompanies = $this->get_no_of_companies();
       if($noOfCompanies == 400) $noOfCompanies = 0; 
       $dbContentArray['noOfCompanies'] = $noOfCompanies;
       return $dbContentArray;
    }
    public function all_hires($jobseeker_id)
    {
        $allHires = $this->get_all_hires($jobseeker_id);
        return $allHires;
    }
}