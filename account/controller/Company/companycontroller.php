<?php
require_once 'model/companymodel.php';

class CompanyController extends Company{
    public function block_jobseeker($company_login_id,$jobseeker_login_id){
        $res =$this->block_this_jobseeker($company_login_id,$jobseeker_login_id);
        return $res;
    }
    public function report_jobseeker($company_login_id,$jobseeker_login_id,$reason){
        $res =$this->report_this_jobseeker($company_login_id,$jobseeker_login_id,$reason);
        return $res;
    }
    public function request_to_activate_package($login_id,$package){
        $res = $this->requesting_this_package($login_id,$package);   
        return $res;
    }
}