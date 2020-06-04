<?php

include_once 'model/jobseekermodel.php';

class JobseekerJobsView extends Jobseeker{
    public function retreive_jobs()
    {
        $alljobs = $this->retreive_all_jobs();
        return $alljobs;
    }
    public function search_jobs($job,$location)
    {
        $alljobs = $this->search_for_jobs($job,$location);
        return $alljobs;
    }
    public function search_featured_job($job,$location)
    {
        $alljobs = $this->search_featured_jobs($job,$location);
        return $alljobs;
    }

    public function search_latest_job($job,$location)
    {
        $alljobs = $this->search_latest_jobs($job,$location);
        return $alljobs;
    }

    public function search_jobseekers($tagline,$address)
    {
        $alljobseekers = $this->search_for_jobseekers($tagline,$address);
        return $alljobseekers;
    }

    public function search_employers($companyName,$companyAddress)
    {
        $allemployers = $this->search_for_employers($companyName,$companyAddress);
        return $allemployers;
    }
    public function search_jobs_in_category($category,$job,$location)
    {
        $allemployers = $this->search_jobs_category($category,$job,$location);
        return $allemployers;
    }

    public function search_blogs($params)
    {
        $blogs = $this->searchBlogs($params);
        return $blogs;
    }
}