<?php
include_once 'dbhmodel.php';

class Auth extends Dbh {
   private $packs = array(
                            1 => 'Month',
                            2 => 'Year'
                        );

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
    
        $sql = " SELECT * FROM login WHERE email=? and status =?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$email,1]);
        $user = $stmt->fetch();
        if(!$user) return null;
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

    public function get_admin_login($login_id){
    
        $sql = " SELECT * FROM admin WHERE login_id=?";
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
        if(!$data){
           return 'Inexistent';
        }
        return  ($data['status'] == 1)? 'Activated': $data;
        $stmt = null;
      
    }

    public function jobseeker_account($login_id,$fname,$lname,$fullname,$phone,$skills,$edulevel,$adr,$dob,$country,$category,$interest,$tag_line,$image,$cv,$description){
        $sql = " INSERT INTO job_seeker (login_id,fname,lname,fullname,phone,skills,category,interest,seeksJob,tag_line,education_level,address,dob,country,image,cv,description,featured) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$login_id,$fname,$lname,$fullname,$phone,$skills,$category,$interest,'yes',$tag_line,$edulevel,$adr,$dob,$country,$image,$cv,$description,0]);
        //@ams->change this entire query later
        $sql = " UPDATE login SET status=? WHERE login_id=?";
        $stmt2 = $this->connect()->prepare($sql);
        $stmt2->execute([1,$login_id]);
        return 200;
        $stmt = null;
        $stmt2 = null;
    }

    public function does_profile_already_exist($login_id,$caller){
        if($caller == 'company')
            $sql = "SELECT login_id FROM company WHERE login_id=?";
        else
            $sql = "SELECT login_id FROM job_seeker WHERE login_id=?";

        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$login_id]);
        $rowCount = $stmt->rowCount();
        if(!$rowCount) return false;
        return true;
        $stmt = null;
    }
    public function company_account($login_id,$cmp_name,$cmp_email,$phone,$addr,$postcode,$country,$curr,$final_image){
        $sql = " INSERT INTO company (login_id,company_name,company_email,company_phone,company_address,postal_code,country,currency,logo) VALUES(?,?,?,?,?,?,?,?,?)";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$login_id,$cmp_name,$cmp_email,$phone,$addr,$postcode,$country,$curr,$final_image]);
        //@ams->change this entire query later
        $sql = " UPDATE login SET status=? WHERE login_id=?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([1,$login_id]);
        return 200;
        $stmt = null;
    }

    // get latest login_id to be able to insert into admin table

    public function get_latest_login_id($email){
        $sql = " SELECT login_id FROM login WHERE email = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$email]);
        $data = $stmt->fetch();
        return  $data;
        $stmt = null;
    }

    // fill admin info into admin table

    public function fill_admin_details($admin_name,$role,$email){
        $id = self::get_latest_login_id($email);
        $sql = " INSERT INTO admin (login_id,admin_name,role) VALUES(?,?,?);";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$id['login_id'],$admin_name,$role]);
        return 200;
        $stmt = null;
    }

    public function get_freelancer_package_info($login_id){
        $sql = " SELECT * FROM package WHERE login_id=? AND status=?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$login_id,'Active']);
        $result = $stmt->fetch();
        if(!$result ){
            return array('package' => 'None');
            $stmt = null;
        }else{
            if($result['validUntil'] >= date('Y-m-d')){
                return  array('package' => $result['type']);
                $stmt = null;
            }
            else{
                return $this->deactivate_pack($result['package_id']);
            }
        }
    }
    protected function deactivate_pack($package_id){
        $sql = " UPDATE package SET status = ?  WHERE package_id = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute(['Inactive',$package_id]);
        return array('package' => 'None','trial_activation' => true);
        $stmt = null;
        //@ams:the reason i set trial_activated to true is because we are deactivating a package, so that must mean that
        //it is either the trial or someother package, either case, the trial has already been activated
    }
    public function get_recruiter_package_info($login_id){
        $sql = " SELECT * FROM package WHERE login_id=? AND status=?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$login_id,'Active']);
        $result = $stmt->fetch();
        if(!$result ){
            return $this->has_trial_been_activated($login_id);
            $stmt = null;
        }else{
            if($result['validUntil'] >= date('Y-m-d')){
                if($result['type'] == 'Trial') return  array('package' => $result['type'],'trial_activation' => true);
                else return  array('package' => $result['type'],'trial_activation' => false);
                $stmt = null;
            }
            else{
                return $this->deactivate_pack($result['package_id']);
            }
        }
    }
    protected function has_trial_been_activated($login_id){
        $sql = " SELECT * FROM package WHERE login_id=? AND type=?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$login_id,'Trial']);
        $result = $stmt->fetch();
        if(!$result ){
            return array(
                        'package' => 'None',
                        'trial_activation' => false
                    );
            $stmt = null;
        }else{
            return array(
                        'package' => 'None',
                        'trial_activation' => true
                    );
            $stmt = null;
        }
    }
}