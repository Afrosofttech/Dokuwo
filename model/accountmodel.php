<?php
include_once 'dbhmodel.php';

class Account extends Dbh{

    public function jobseeker_account($login_id,$fname,$lname,$fullname,$email,$pwd,$phone,$skills,$edulevel,$adr,$dob,$country,$image,$cv){
        $sql = " INSERT INTO job_seeker (login_id,fname,lname,fullname,email,pwd,phone,skills,education_level,address,dob,country,image,cv) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$login_id,$fname,$lname,$fullname,$email,$pwd,$phone,$skills,$edulevel,$adr,$dob,$country,$image,$cv]);
        $stmt = null;
    }

    public function company_account($login_id,$cmp_name,$cmp_email,$phone,$addr,$passwd,$postcode,$country,$curr,$logo){
        $sql = " INSERT INTO company (login_id,company_name,company_email,company_phone,company_address,password,postal_code,country,currency,logo) VALUES(?,?,?,?,?,?,?,?,?,?)";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$login_id,$cmp_name,$cmp_email,$phone,$addr,$passwd,$postcode,$country,$curr,$logo]);
        $stmt = null;
    }

    public function get_login_id($email,$hash){
        $sql = " SELECT * FROM login WHERE email=? and hash=?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$email,$hash]);
        $data = $stmt->fetch();
        return $data;
        $stmt = null; 
    }

    public function get_education(){
        $sql = " SELECT COLUMN_TYPE FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME='job_seeker' AND COLUMN_NAME='education_level'";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$email,$hash]);
        $data = $stmt->fetch();
        return $data;
        $stmt = null; 
    }

}