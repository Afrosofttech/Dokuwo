<?php
include_once 'model/companymodel.php';

class CompanyController extends Company{
    public function block_jobseeker($company_login_id,$jobseeker_login_id){
        $res =$this->block_this_jobseeker($company_login_id,$jobseeker_login_id);
        return $res;
    }

    
}