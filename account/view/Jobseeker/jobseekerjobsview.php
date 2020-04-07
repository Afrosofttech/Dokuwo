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
}