<?php

//namespace view\Company

include_once 'model/companymodel.php';
include_once 'model/auth.php';
class CompanyView extends Company{
    
    public function dashboard_header_info($login_id){
        $company = $this->get_company($login_id);
        if($company == 400) return 0; 
        $dbContentArray = array();
        $count = 0;
        $jobsPublished = $this->get_no_of_jobs_published($company['company_id']);
        $dbContentArray['noOfJobsPublished'] = $jobsPublished;
        foreach ($company as $key => $value) {
            if ($value != '' || $value != null){
                $count += 1;
            }
        }
       $result = floor(($count/10)*100);
       $dbContentArray['isProfileComplete'] = $result;
       $noOfJobseekers = $this->get_no_of_job_seekers();
       if($company == 400) $noOfJobseekers = 0; 
       $dbContentArray['noOfJobseekers'] = $noOfJobseekers;
       $res= (new Auth())->get_recruiter_package_info($login_id);
       $dbContentArray['package'] = $res['package'];
       $dbContentArray['trial_activation'] = $res['trial_activation'];
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
    public function jobs_of_this_category($category,$beg,$end){
        $jobs = $this->get_jobs_of_this_category($category,$beg,$end);
        return $jobs;
    }
    public function job_details($jobId){
        $jobdetails = $this->get_job_company_details($jobId);
        return $jobdetails;
    }
    public function get_featured_job($caller){
        $featured_jobs = $this->get_featured_jobs($caller);
        return $featured_jobs;
    }
    public function get_latest_job($caller){
        $latest_job = $this->get_latest_jobs($caller);
        return $latest_job;
    }
    public function get_blogs($beg,$end){
        $blogs = $this->get_all_blogs($beg,$end);
        return $blogs;
    }
    public function get_blogs_admin(){
        $blogs = $this->get_all_blogs_admin();
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
    
    public function get_freelancers($beg,$end){
        $freelancers = $this->get_all_freelancers($beg,$end);
        return $freelancers;
    }

    public function featured_freelancers(){
        $res = $this->get_featured_freelancers();
        return $res;
    }
}