<?php
include_once 'model/jobseekermodel.php';

class JobseekerController extends Jobseeker{
    public function delete_hire($hire_id)
    {
       $res = $this->delete_this_hire($hire_id);   
       return $res;
    }
}