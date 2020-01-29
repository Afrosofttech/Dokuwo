<?php
session_start();

include_once 'model/auth.php';

class AuthController extends Auth{
  
    public function login_id($email,$hash){
        $login_id = $this->get_login_id($email,$hash);
        return $login_id['login_id'];
    }

    public function login_info($email,$hash){
        $login_id = $this->get_login_id($email,$hash);
        return $login_id;
    }

    public function create_user_account($comp_email,$passwd,$usertype){
        $verify_email = $this->verify_email($comp_email);
        if($verify_email == null){
            $hash = md5(rand(0,1000));
            $password = password_hash($passwd, PASSWORD_DEFAULT);
            $company_account = $this->create_account($comp_email,$password,$hash,$usertype,0);
            return "Account created successfully";
        }
        else{
            return "Account already exist";
        }
    }

    public function user_login($email,$passwd){
        $user = $this->login($email);
        $pass_verif = password_verify($passwd, $user['password']);

        if ($user && $pass_verif)
        {   

           $_SESSION['login_id'] = $user['login_id'];
           $_SESSION['email'] = $user['email'];
           $_SESSION['status'] = $user['status'];
           if($user['user_type'] == 'company')
           {
              $company = $this->get_company_login($user['login_id']);
              $_SESSION['name'] = $company['company_name'];
              $_SESSION['usertype'] = $user['user_type'];
           }
           if($user['user_type'] == 'jobseeker')
           {
              $jobseeker = $this->get_jobseeker_login($user['login_id']);
              $_SESSION['name'] = $jobseeker['fullname'];
              $_SESSION['usertype'] = $user['user_type'];
           }
           return true;
        } else {
           return false;
        }
    }

    public function jobseekerdetails($login_id,$fname,$lname,$fullname,$email,$phone,$skills,$edulevel,$adr,$dob,$country,$image,$cv){
        $jobseeker = $this->jobseeker_account($login_id,$fname,$lname,$fullname,$email,$phone,$skills,$edulevel,$adr,$dob,$country,$image,$cv);
        return true;
    }

    public function companydetails($login_id,$cmp_name,$cmp_email,$phone,$addr,$postcode,$country,$curr,$logo){
        $company = $this->company_account($login_id,$cmp_name,$cmp_email,$phone,$addr,$postcode,$country,$curr,$logo);
        return true;
    }
}