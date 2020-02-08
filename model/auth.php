<?php
//include '../includes/dbh.inc.php';
include_once 'dbhmodel.php';

class Auth extends Dbh {
   
    public function create_account($email,$passwd, $hash, $usertype, $status){
        $sql = " INSERT INTO login (email,password, user_type, hash, status) VALUES(?,?,?,?,?)";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$email,$passwd, $usertype, $hash, $status]);
        $stmt = null;
    }

    public function verify_email($email){
        
        $sql = " SELECT email FROM login WHERE email=?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$email]);
        $rowCount = $stmt->rowCount();
        if(!$rowCount) return null;
        return $rowCount;
        $stmt = null;
    }

    public function login($email){
    
        $sql = " SELECT * FROM login WHERE email=?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$email]);
        $user = $stmt->fetch();
        return $user;
        $stmt = null;
    }
    public function get_company_login($login_id){
    
        $sql = " SELECT * FROM company WHERE login_id=?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$login_id]);
        $data = $stmt->fetch();
        return $data;
        $stmt = null;
    }

    public function get_jobseeker_login($login_id){
    
        $sql = " SELECT * FROM job_seeker WHERE login_id=?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$login_id]);
        $data = $stmt->fetch();
        return $data;
        $stmt = null;
    }

    public function get_login_info($email,$hash){
        $sql = " SELECT * FROM login WHERE email=? and hash=?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$email,$hash]);
        $data = $stmt->fetch();
        return  $data;
        $stmt = null;
      

    }

    public function jobseeker_account($login_id,$fname,$lname,$fullname,$email,$phone,$skills,$edulevel,$adr,$dob,$country,$image,$cv){
        $sql = " INSERT INTO job_seeker (login_id,fname,lname,fullname,email,phone,skills,education_level,address,dob,country,image,cv) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$login_id,$fname,$lname,$fullname,$email,$phone,$skills,$edulevel,$adr,$dob,$country,$image,$cv]);
        $stmt = null;
    }

    public function does_profile_already_exist($login_id){
        $sql = "SELECT login_id FROM company WHERE login_id=?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$login_id]);
        $rowCount = $stmt->rowCount();
        if(!$rowCount) return false;
        return true;
        $stmt = null;
    }
    public function company_account($login_id,$cmp_name,$cmp_email,$phone,$addr,$postcode,$country,$curr){
        $sql = " INSERT INTO company (login_id,company_name,company_email,company_phone,company_address,postal_code,country,currency) VALUES(?,?,?,?,?,?,?,?)";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$login_id,$cmp_name,$cmp_email,$phone,$addr,$postcode,$country,$curr]);
        return 200;
        $stmt = null;
    }


}