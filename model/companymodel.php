<?php
include_once 'dbhmodel.php';

class Company extends Dbh{
    
    public function get_company($login_id){
        $sql = " Select * from company where login_id = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$login_id]);
        $result = $stmt->fetch();
        if(!$result) return ('No rows');
        return $result;
        $stmt = null;
    }

    public function get_no_of_jobs_published($company_id){
        $sql = " Select * from job where company_id = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$company_id]);
        $rowCount = $stmt->rowCount();
        if(!$rowCount) return ('No rows');
        return $rowCount;
        $stmt = null;
    }

    // public function is_the_profile_complete($company_id){
    //     $sql = " Select * from  where company_id = ?";
    //     $stmt = $this->connect()->prepare($sql);
    //     $stmt->execute([$company_id]);
    //     $rowCount = $stmt->rowCount();
    //     if(!$rowCount) return ('No rows');
    //     return $rowCount;
    //     $stmt = null;
    // }
}
