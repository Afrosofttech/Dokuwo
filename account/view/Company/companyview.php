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
    public function jobs_of_this_category($category){
        $jobs = $this->get_jobs_of_this_category($category);
        return $jobs;
    }
    public function job_details($jobId){
        $jobdetails = $this->get_job_company_details($jobId);
        return $jobdetails;
    }
    public function get_featured_job(){
        $featured_jobs = $this->get_featured_jobs();
        return $featured_jobs;
    }
    public function get_latest_job(){
        $latest_job = $this->get_latest_jobs();
        return $latest_job;
    }
    public function get_blogs(){
        $blogs = $this->get_all_blogs();
        return $blogs;
    }
    public function blog_details($blog_id){
        $blog = $this->get_blog_details($blog_id);
        return $blog;
    }
    public function blog_categories(){
        $categories = $this->get_blog_categories();
        return $categories;
    }
    public function recent_posts(){
        $posts = $this->get_recent_posts();
        return $posts;
    }
    public function posts_by_category($category){
        $posts = $this->get_posts_by_category($category);
        return $posts;
    }
    public function jobseeker_details($jobseeker_id){
        $details = $this->get_jobseeker_details($jobseeker_id);
        return $details;
    }
    public function get_recruiter_details($recruiter_id){
        $details = $this->recruiter_details($recruiter_id);
        return $details;
    }
    public function get_admin_blogs($admin_id){
        $result = $this->get_blog_by_admin($admin_id);
        return $result;
    }

    public function get_all_recruiter_accounts(){
        $result = $this->get_recruiter_accounts();
        return $result;  
    }
    public function get_all_jobseeker_accounts(){
        $result = $this->get_jobseeker_accounts();
        return $result;  
    }
    public function get_all_admin_accounts(){
        $result = $this->get_admin_accounts();
        return $result;  
    }
    public function get_admin_profile($login_id){
        $admin = $this->get_admin($login_id);
        return $admin;
    }
}