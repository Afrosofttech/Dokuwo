<?php

include_once 'model/jobseekermodel.php';

class SeekerHomeView extends Jobseeker{
    public function no_of_job_seekers(){
        $count = $this->get_no_of_job_seekers();
        return $count;
    }

}