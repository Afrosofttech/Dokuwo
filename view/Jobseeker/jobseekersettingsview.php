<?php

include_once 'model/jobseekermodel.php';

class JobseekerSettingsView extends Jobseeker{
    public function get_jobseeker_profile($login_id)
    {
        $jobseeker = $this->get_jobseeker_profile_details($login_id);
        return $jobseeker;
    }

}