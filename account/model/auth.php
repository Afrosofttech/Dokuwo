<?php
include_once 'dbhmodel.php';
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'includes/PHPMailer/src/Exception.php';
require 'includes/PHPMailer/src/PHPMailer.php';
require 'includes/PHPMailer/src/SMTP.php';
class Auth extends Dbh {
   private $packs = array(
                            1 => 'Month',
                            2 => 'Year'
                        );
    private $baseUrl = 'http://127.0.0.1:8000'; // @ams => change this when we go live

    public function create_account($email,$passwd, $hash, $usertype, $status){
        $sql = " INSERT INTO login (email,password, user_type, hash, status) VALUES(?,?,?,?,?)";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$email,$passwd, $usertype, $hash, $status]);
        return $this->send_activation_link($email,$hash,$usertype);
        $stmt = null;
    }
    public function send_activation_link($email,$hash,$usertype){
        $mail = new PHPMailer(true);

        try {
            //Server settings
            $mail->SMTPDebug = 0;                      // Enable verbose debug output
            $mail->isSMTP();                                            // Send using SMTP
            $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
            $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
            $mail->Username   = 'dokuwo01@gmail.com';                     // SMTP username
            $mail->Password   = 'legaye@2020';                               // SMTP password
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
            $mail->Port       = 587;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

            $mail->SMTPOptions = array(
                'ssl' => array(
                    'verify_peer' => false,
                    'verify_peer_name' => false,
                    'allow_self_signed' => true
                )
            );
            //Recipients
            $mail->setFrom('dokuwo01@gmail.com', 'Dokuwo');
            $mail->addAddress($email);     // Add a recipient
            $mail->addReplyTo('dokuwo01@gmail.com', 'Dokuwo');
            $mail->addBCC('asj.sarjo@gmail.com', 'Dokuwo');

            // Content
            $mail->isHTML(true);   // Set email format to HTML
            $mail->Subject = 'Account Activation';
            $mail->addEmbeddedImage('img/banner.png', 'image_cid');
            if($usertype == 'jobseeker'){
                $mail->Body = '<div style="padding: 2px 16px;font-family: Times New Roman;font-size: 18px;">
                            <div style="padding: 2px 0px;">
                            <img src="cid:image_cid" width="100%" height="250px">
                            </div>
                            <p>Hello, Welcome to Dokuwo! Click 
                            <a href="'.$this->baseUrl.'/account/detail.php?email='.$email.'&hash='.$hash.'" target="_blank">here</a> to activate your <b>account!</b>.<br><br>Dokuwo is a platform which aims to digitalise the job hunt in the country and be the go to platform for anything that has to do with work and job hunt. And as Such, we are currently working on improving the platform and also creating a mobile app for the platform. We value your feedback and would love to know what improvements you would like to see on this platform.<br><br>
                            Do connect with us on our social handles provided below. We are happy to have you on board.</p>
                            <div style="text-align: center;padding: 3px;background-color: Violet; color: white">
                            <a href="https://www.facebook.com/pg/Dokuwo-106334990997957">facebook</a>
                            <a href="https://twitter.com/Dokuwo1">Twitter</a></p>
                            <a href="https://www.linkedin.com/company/38126868/">linkedIn</a>
                            </div>
                        </div>';
                $mail->AltBody = 'Hello, Welcome to Dokuwo! copy this link '.$this->baseUrl.'/account/detail.php?email='.$email.'&hash='.$hash.' into a website address bar to activate your account. We are happy have you on board.';
            }
            if($usertype == 'company'){
                $mail->Body = '<div style="padding: 2px 16px;font-family: Times New Roman;font-size: 18px;">
                                    <div style="padding: 2px 0px;">
                                    <img src="cid:image_cid" width="100%" height="250px">
                                    </div>
                                    <p>Hello, Welcome to Dokuwo! Click 
                                    <a href="'.$this->baseUrl.'/account/detail.php?email='.$email.'&hash='.$hash.'" target="_blank">here</a> to activate your <b>account!</b>.<br><br>Dokuwo is a platform which aims to digitalise the job hunt in the country and be the go to platform for anything that has to do with work and job hunt. And as Such, we are currently working on improving the platform and also creating a mobile app for the platform. We value your feedback and would love to know what improvements you would like to see on this platform.<br><br>There is a <b>free 14 days trial</b> which you can activate to enjoy all the services we offer for free.<br><br>
                                    Do connect with us on our social handles provided below. We are happy to have you on board.</p>
                                    <div style="text-align: center;padding: 3px;background-color: Violet; color: white">
                                    <a href="https://www.facebook.com/pg/Dokuwo-106334990997957">facebook</a>
                                    <a href="https://twitter.com/Dokuwo1">Twitter</a></p>
                                    <a href="https://www.linkedin.com/company/38126868/">linkedIn</a>
                                    </div>
                                </div>';
                $mail->AltBody = 'Hello, Welcome to Dokuwo! copy this link '.$this->baseUrl.'/account/detail.php?email='.$email.'&hash='.$hash.' into a website address bar to activate your account. There is a free 14 days trial which you can activate to enjoy all the services we offer for free. We are happy have you on board.';
            }

            $mail->send();
            return 'Success';
        } catch (Exception $e) {
        //@ams => we need to send a message to our self so as to know that a message was not sent. so basically store them in a table
            return "Error";
        }
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

    public function jobseeker_account($login_id,$fname,$lname,$fullname,$phone,$skills,$edulevel,$adr,$dob,$country,$category,$interest,$tag_line,$description,$image,$cv){
        if($image == null && $cv == null) $sql = "INSERT INTO job_seeker (login_id,fname,lname,fullname,phone,skills,category,interest,seeksJob,tag_line,education_level,address,dob,country,description,featured) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
        else if($image == null) $sql = "INSERT INTO job_seeker (login_id,fname,lname,fullname,phone,skills,category,interest,seeksJob,tag_line,education_level,address,dob,country,cv,description,featured) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
        else if($cv == null) $sql = "INSERT INTO job_seeker (login_id,fname,lname,fullname,phone,skills,category,interest,seeksJob,tag_line,education_level,address,dob,country,image,description,featured) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
        else $sql = "INSERT INTO job_seeker (login_id,fname,lname,fullname,phone,skills,category,interest,seeksJob,tag_line,education_level,address,dob,country,image,cv,description,featured) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
        $stmt = $this->connect()->prepare($sql);
        if($image == null && $cv == null) $stmt->execute([$login_id,$fname,$lname,$fullname,$phone,$skills,$category,$interest,'yes',$tag_line,$edulevel,$adr,$dob,$country,$description,0]);
        else if($image == null) $stmt->execute([$login_id,$fname,$lname,$fullname,$phone,$skills,$category,$interest,'yes',$tag_line,$edulevel,$adr,$dob,$country,$cv,$description,0]);
        else if($cv == null) $stmt->execute([$login_id,$fname,$lname,$fullname,$phone,$skills,$category,$interest,'yes',$tag_line,$edulevel,$adr,$dob,$country,$image,$description,0]);
        else $stmt->execute([$login_id,$fname,$lname,$fullname,$phone,$skills,$category,$interest,'yes',$tag_line,$edulevel,$adr,$dob,$country,$image,$cv,$description,0]);
        return $this->set_status($login_id);
        $stmt = null;
    }
    public function set_status($login_id){
        $sql = " UPDATE login SET status=? WHERE login_id=?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([1,$login_id]);
        return 200;
        $stmt = null;
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
        if($final_image == null) $sql = " INSERT INTO company (login_id,company_name,company_email,company_phone,company_address,postal_code,country,currency) VALUES(?,?,?,?,?,?,?,?)";
        else $sql = " INSERT INTO company (login_id,company_name,company_email,company_phone,company_address,postal_code,country,currency,logo) VALUES(?,?,?,?,?,?,?,?,?)";
        $stmt = $this->connect()->prepare($sql);
        if($final_image == null) $stmt->execute([$login_id,$cmp_name,$cmp_email,$phone,$addr,$postcode,$country,$curr]);
        else $stmt->execute([$login_id,$cmp_name,$cmp_email,$phone,$addr,$postcode,$country,$curr,$final_image]);
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
    protected function does_account_exist($reset_email){
        $sql = " SELECT * FROM login WHERE email=?;";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$reset_email]);
        $result = $stmt->fetch();
        if(!$result ) return 'Inexistent';
        return $this->change_hash($reset_email);
        $stmt = null;
    }
    protected function change_hash($reset_email){
        $hash = md5(rand(0,1000));
        $sql = "UPDATE login SET hash = ? WHERE email = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$hash,$reset_email]);
        return $this->send_password_reset_link($reset_email,$hash);
    }
    protected function send_password_reset_link($email,$hash){
            $mail = new PHPMailer(true);
    
            try {
                //Server settings
                $mail->SMTPDebug = 0;                      // Enable verbose debug output
                $mail->isSMTP();                                            // Send using SMTP
                $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
                $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
                $mail->Username   = 'dokuwo01@gmail.com';                     // SMTP username
                $mail->Password   = 'legaye@2020';                               // SMTP password
                $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
                $mail->Port       = 587;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above
    
                $mail->SMTPOptions = array(
                    'ssl' => array(
                        'verify_peer' => false,
                        'verify_peer_name' => false,
                        'allow_self_signed' => true
                    )
                );
                //Recipients
                $mail->setFrom('dokuwo01@gmail.com', 'Dokuwo');
                $mail->addAddress($email);     // Add a recipient
                $mail->addReplyTo('dokuwo01@gmail.com', 'Dokuwo');
                $mail->addBCC('asj.sarjo@gmail.com', 'Dokuwo');
    
                // Content
                $mail->isHTML(true);   // Set email format to HTML
                $mail->Subject = 'Password Reset';
                $mail->addEmbeddedImage('img/banner.png', 'image_cid');
                $mail->Body = '<div style="padding: 2px 16px;font-family: Times New Roman;font-size: 18px;">
                                    <div style="padding: 2px 0px;">
                                    <img src="cid:image_cid" width="100%" height="250px">
                                    </div>
                                    <p>Hello, We get it, stuff happens. Just Click 
                                    <a href="'.$this->baseUrl.'/account/pwd-reset.php?email='.$email.'&hash='.$hash.'" target="_blank">here</a> to reset your <b>password!</b>.<br><br>Dokuwo is a platform which aims to digitalise the job hunt in the country and be the go to platform for anything that has to do with work and job hunt. And as Such, we are currently working on improving the platform and also creating a 
                                    mobile app for the platform. We value your feedback and would love to know what improvements you would like to see on this platform.<br><br>
                                    Do connect with us on our social handles provided below. We are happy to have you on board.</p>
                                    <div style="text-align: center;padding: 3px;background-color: Violet; color: white">
                                    <a href="https://www.facebook.com/pg/Dokuwo-106334990997957">facebook</a>
                                    <a href="https://twitter.com/Dokuwo1">Twitter</a>
                                    <a href="https://www.linkedin.com/company/38126868/">linkedIn</a>
                                    </div>
                                </div>';
                $mail->AltBody = 'Hello,  We get it, stuff happens. Just copy this link '.$this->baseUrl.'/account/pwd-reset.php?email='.$email.'&hash='.$hash.' into a website address bar to reset your password.';
    
                $mail->send();
                return 'Success';
            } catch (Exception $e) {
            //@ams => we need to send a message to our self so as to know that a message was not sent. so basically store them in a table
                return "Error";
            }
    }
    protected function if_request_valid($email,$hash){
    //@ams => You need to verify that a request was actually made to reset the password
    $sql = " SELECT * FROM login WHERE email=? AND hash=?";
    $stmt = $this->connect()->prepare($sql);
    $stmt->execute([$email,$hash]);
    $result = $stmt->fetch();
    if(!$result ) return 'Inexistent';
    return $result['login_id'];
    $stmt = null;
    }
    protected function new_password($password,$login_id){
        $sql = "UPDATE login SET password = ? WHERE login_id = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$password,$login_id]);
        return 'Success';
    }
}