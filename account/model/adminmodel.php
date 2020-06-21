<?php
include_once 'dbhmodel.php';
require("includes/sendgrid-php/sendgrid-php.php");
define('SEND_GRID_API',  getenv('SEND_GRID_API'));

class Admin extends Dbh{
    const success = 200;
    const fail = 400;

    protected function get_no_of_new_messages($recipient_id){
        $sql = " Select * from message_recipient where recipient_id = ? AND is_read = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$recipient_id,0]);
        $rowCount = $stmt->rowCount();
        if(!$rowCount) return 0;
        return $rowCount;
        $stmt = null;
    }
    protected function get_all_inbox_messages($recipient_id)
    {
        $sql = " SELECT message.message_id,creator_id,creator_name,subject,message_body,create_date,parent_message_id FROM message INNER JOIN message_recipient ON message.message_id = message_recipient.message_id WHERE message_recipient.recipient_id = ? AND message_recipient.delete_request = ? order by create_date desc;";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$recipient_id,0]);
        $result = $stmt->fetchAll();
        return  $result ;
        $stmt = null;
    }
    protected function get_read_messages($recipient_id){
        $sql = " Select * from message_recipient where recipient_id = ? AND is_read = ? AND delete_request = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$recipient_id,1,0]);
        $result = $stmt->fetchAll();
        if(!$result){
            return 0;
            $stmt = null;
        }else{
            return  $result;
            $stmt = null;
        }
    }
    protected function get_this_message($msg_id){
        $sql = " SELECT * FROM message WHERE message_id = ?;";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$msg_id]);
        $result = $stmt->fetch();
        return  $result ;
        $stmt = null;
    }
    protected function set_message_is_read($message_id){
        $sql = " UPDATE message_recipient SET is_read = ?  WHERE message_id = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute(['1',$message_id]);
        return self::success;
        $stmt = null;
    }
    protected function get_new_unread_messages($recipient_id){
        $sql = " SELECT message.message_id,creator_id,creator_name,subject,message_body,create_date,parent_message_id FROM message INNER JOIN message_recipient ON message.message_id = message_recipient.message_id WHERE message_recipient.recipient_id = ? AND message_recipient.is_read = ?;";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$recipient_id,0]);
        $result = $stmt->fetchAll();
       if(!$result ){
                return self::fail;
                $stmt = null;
        }else{
            return  $result ;
            $stmt = null;
        }
    }
    protected function get_all_sent_messages($creator_id){
        $sql = "SELECT message.*,message_recipient.recipient_id FROM message INNER JOIN message_recipient ON message.message_id = message_recipient.message_id where message.creator_id =? AND message.sender_delete_request =? order by create_date desc";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$creator_id,0]);
        $result = $stmt->fetchAll();
        if($result){
            foreach ($result as $key => $value) {
                $res = $this->get_recipient($value['recipient_id']);
                $result[$key]['recipient_name'] = isset($res['company_name'])?$res['company_name']:$res['fullName'];
            }
        }
        return  $result;
        $stmt = null;
    }
    protected function get_recipient($recipient_id){
       $response = $this->recipient_type($recipient_id);
       $sql = ($response == 'company')? " SELECT company_name FROM company WHERE login_id = ?;":" SELECT fullName FROM job_seeker WHERE login_id = ?;";
       $stmt = $this->connect()->prepare($sql);
       $stmt->execute([$recipient_id]);
       $result = $stmt->fetch();
       return  $result;
       $stmt = null;
    }
    protected function recipient_type($recipient_id){
        $sql = " SELECT user_type FROM login WHERE login_id = ?;";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$recipient_id]);
        $result = $stmt->fetch();
        return  $result['user_type'];
        $stmt = null;
    }
    protected function delete_this_message($message_id)
    {
        $sql = " UPDATE message_recipient SET delete_request = ?  WHERE message_id = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute(['1',$message_id]);
        return self::success;
        $stmt = null;
    }
    protected function delete_this_sent_message($message_id)
    { //new
        $sql = " UPDATE message SET sender_delete_request = ?  WHERE message_id = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute(['1',$message_id]);
        return self::success;
        $stmt = null;
    }
    protected function send_msg_to_a_user($creator_id,$creator_name,$recipient_id,$recipient_name,$parent_msg_id,$Subject,$messageBody,$type=''){
        
        if($this->is_deactivated($recipient_id)){
            return  array('message' => 'This user has been deactivated. Your message is not delivered.');
        }
        $date = date('Y-m-d');
        if($parent_msg_id =='' || $parent_msg_id == null){
            $stmt1 = $this->connect()->prepare("INSERT INTO message (creator_id, creator_name, subject,message_body,sender_delete_request,create_date) VALUES (?, ?, ?, ?, ?,?)");
            $stmt1->execute([$creator_id,$creator_name,$Subject,$messageBody,0,$date]);
        }else{//change this
            $stmt1 = $this->connect()->prepare("INSERT INTO message (creator_id, creator_name, subject,message_body,sender_delete_request,create_date,parent_message_id) VALUES (?, ?, ?, ?, ?, ?, ?)");
            $stmt1->execute([$creator_id,$creator_name,$Subject,$messageBody,0,$date,$parent_msg_id]);
        }
            //AMS-> this query is not efficient although it is working. I should be using lastInsertId()
            //but due to some unknown reasons, it is not working. so i will revise it later
            $res = $this->last_inserted_message_id($creator_id,$creator_name,$Subject,$date);
    
            $stmt3 = $this->connect()->prepare("INSERT INTO message_recipient (recipient_id, message_id, is_read,delete_request) VALUES (?, ?, ?, ?)");
            $stmt3->execute([$recipient_id,$res['message_id'],0,0]);
    
            if($type == 'forward') return  array('message' => 'Message has been successfully forwarded');
            else return  array('message' => 'Message successfully sent.');
    }
    protected function is_deactivated($recipient_id){
        $sql = " SELECT status FROM login WHERE login_id = ?;";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$recipient_id]);
        $result = $stmt->fetch();
        if($result == 2) return true;
        return  false;
        $stmt = null;
    }
    protected function last_inserted_message_id($creator_id,$creator_name,$Subject,$date){
        $stmt = $this->connect()->prepare("SELECT message_id FROM message WHERE creator_id = ? AND creator_name = ? AND subject = ? AND create_date = ?");
        $stmt->execute([$creator_id,$creator_name,$Subject,$date]);
        $res = $stmt->fetchAll();
        foreach($res as $key => $value){
            $stmt1 = $this->connect()->prepare("SELECT * FROM message_recipient WHERE message_id = ?");
            $stmt1->execute([$value['message_id']]);
            $result = $stmt1->fetch();
            if(!$result ) return $value;
            $stmt1 = null;
        }
        $stmt = null;
    }
    protected function forward_msg_to_a_user($creator_id,$creator_name,$_recipient_id,$recipient_name,$message_id){
        $sql = " SELECT subject, message_body FROM message where message_id = ?;";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$message_id]);
        $result = $stmt->fetch();
        return $this->send_msg_to_a_user($creator_id,$creator_name,$_recipient_id,$recipient_name,null,$result['subject'],$result['message_body'],'forward');
    }
    protected function get_all_users(){
        $sql = " SELECT 
        company.login_id as login_id , company.logo as image, company.company_name as name, company.company_address as address, company.country as country 
        FROM company UNION 
        SELECT 
        job_seeker.login_id as login_id , job_seeker.image as image, job_seeker.fullName as name, job_seeker.address as address, job_seeker.country as country 
        FROM job_seeker";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute();
        $result = $stmt->fetchAll();
        if(!$result ){
            return 0;
            $stmt = null;
        }else{
            return  $result ;
            $stmt = null;
         }
        }

        protected function get_blog_by_admin($admin_id){
            $sql = "SELECT * FROM blog where admin_id = ?";
            $stmt = $this->connect()->prepare($sql);
            $stmt->execute([$admin_id]);
            $result = $stmt->fetchAll();
    
            if(!$result ){
                return self::fail;
                $stmt = null;
            }else{
                return  array($result);
                $stmt = null;
            }    
        }

        protected function filterBlogs($title,$category)
        {
            if($title == ''){
            $sql="SELECT * FROM blog WHERE category like :search;";
            $stmt = $this->connect()->prepare($sql);
            $stmt->execute(array(
                ':search' => '%' . $category . '%'));
            }else if($category == ''){
                $sql="SELECT * FROM blog WHERE blog_title like :search;";
                $stmt = $this->connect()->prepare($sql);
                $stmt->execute(array(
                    ':search' => '%' . $title . '%'));
            }else{
                $sql="SELECT * FROM blog WHERE blog_title like :title AND category LIKE :category;";
                $stmt = $this->connect()->prepare($sql);
                $stmt->execute(array(
                ':title' => '%' . $title . '%',
                ':category' => '%'. $category . '%'));
            }
            $result = $stmt->fetchAll();
            return $result;
            $stmt = null;
        }

        public function create_new_blog($admin_id,$title,$publisher,$category,$tags,$content,$image){
            $date = date('Y-m-d');$date = date('Y-m-d');
            $sql = " INSERT INTO blog(admin_id,blog_title,date_posted,blog_publisher,category,tags,blog_content,blog_image) VALUES(?,?,?,?,?,?,?,?)";
            $stmt = $this->connect()->prepare($sql);
            $stmt->execute([$admin_id,$title,$date,$publisher,$category,$tags,htmlspecialchars($content,ENT_QUOTES),$image]);
            return  self::success;
            $stmt = null;
        }

        
    protected function updateBlog($title,$category,$tags,$content,$image,$blog_id){
        $sql = " UPDATE blog SET blog_title=?,category=?,tags=?,blog_content=?,blog_image=? WHERE blog_id=?;";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$title,$category,$tags,htmlspecialchars($content,ENT_QUOTES),$image,$blog_id]);
        return  self::success;
        $stmt = null;
    }

    protected function deleteBlog($blog_id){
        $sql = " DELETE FROM blog WHERE blog_id=?;";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$blog_id]);
        return  self::success;
        $stmt = null; 
    }

    protected function get_recruiter_accounts(){
        $sql = "SELECT login.login_id,email,status, company.company_name FROM login INNER JOIN company ON login.login_id = company.login_id GROUP BY login.login_id";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute();
        $result = $stmt->fetchAll();

        if(!$result ){
            return self::fail;
            $stmt = null;
        }else{
            foreach ($result as &$val) {
                $status = self::package_exists($val['login_id']);
                if($status == 400){
                    $val['package'] = "No Package";
                }
                else{
                    $val['package'] = $status['status']; 
                }
            }
            return array("accounts" => $result);
            $stmt = null;
        }    
    }

    protected function get_jobseeker_accounts(){
        $sql = "SELECT login.login_id,login.email,login.status, job_seeker.fullName,job_seeker.jobseeker_id FROM login INNER JOIN job_seeker ON login.login_id = job_seeker.login_id GROUP BY login.login_id";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute();
        $result = $stmt->fetchAll();

        if(!$result ){
            return self::fail;
            $stmt = null;
        }else{
            foreach ($result as &$val) {
                $status = self::package_exists($val['login_id']);
                $actions = self::getJobseekerActions($val['login_id']);
                if($status == 400){
                    $val['package'] = "No Package";
                }
                else{
                    $val['package'] = $status['status']; 
                }
                if($actions != 400){
                    $val['actions'] = $actions;
                }
                else{
                    $val['actions'] = 'None'; 
                }
            }
            return array("accounts" => $result);
            $stmt = null;
        }    
    }

    protected function getJobseekerActions($jobseeker_login_id){
        $sql= "SELECT action_id,request,reason,action,(SELECT COUNT(action) FROM actions WHERE jobseeker_login_id = ? AND action = ? GROUP BY jobseeker_login_id) AS totalWarnings,(SELECT COUNT(action) FROM actions WHERE jobseeker_login_id = ? AND action = ? GROUP BY jobseeker_login_id) AS totalPending FROM actions WHERE jobseeker_login_id = ? AND request = ? GROUP BY action_id ORDER BY action_id ASC";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$jobseeker_login_id,"warned",$jobseeker_login_id,"Pending",$jobseeker_login_id,"Report"]);
        $result = $stmt->fetchAll();
        if(!$result ){
            return self::fail;
            $stmt = null;
        }else{
            return  $result;
            $stmt = null;
        } 
    }

    protected function get_admin_accounts(){
        $sql = "SELECT login.login_id,login.email,login.status, admin.admin_name,admin.role FROM login INNER JOIN admin ON login.login_id = admin.login_id GROUP BY login.login_id";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute();
        $result = $stmt->fetchAll();

        if(!$result ){
            return self::fail;
            $stmt = null;
        }else{
            return  $result ;
            $stmt = null;
        }    
    }

    protected function activateAccount($login_id){
        $status = 1;
        $sql = "UPDATE login SET status = ? WHERE login_id = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$status,$login_id]);
        $result = $stmt->fetchAll();
        return  self::success;
        $stmt = null;  
    }

    protected function deactivateAccount($login_id){
        $status = 0;
        $sql = "UPDATE login SET status = ? WHERE login_id = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$status,$login_id]);
        $result = $stmt->fetchAll();
        return  self::success;   
    }

    protected function deleteAccount($login_id){
        $sql = " DELETE FROM login WHERE login_id=?;";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$login_id]);
        return  self::success;
        $stmt = null; 
    }

    public function package_exists($login_id){
        $sql= "SELECT status FROM package WHERE login_id = ? AND status IN (?,?);";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$login_id,'Pending','Active']);
        $result = $stmt->fetch();
        if(!$result ){
            return self::fail;
            $stmt = null;
        }else{
            return  $result;
            $stmt = null;
        }
    }

    protected function deleteReport($action_id){
        $sql = " DELETE FROM actions WHERE action_id=?;";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$action_id]);
        return  self::success;
        $stmt = null; 
    }

    protected function get_admin($login_id){
        $sql = " SELECT admin.admin_name,login.email from admin INNER JOIN login ON admin.login_id=login.login_id WHERE admin.login_id = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$login_id]);
        $result = $stmt->fetch();
        if(!$result) return self::fail;
        return  $result ;
        $stmt = null;
    }

    
    public function update_admin_login($email,$password,$login_id){
        if($password == ""){
            $sql = "UPDATE login SET email = ? WHERE login_id = ?";
            $stmt = $this->connect()->prepare($sql);
            $stmt->execute([$email,$login_id]);
            return self::success;
            $stmt = null;
        }
        else{
            $passwd = password_hash($password, PASSWORD_DEFAULT);
            $sql = "UPDATE login SET email = ?,password = ? WHERE login_id = ?";
            $stmt = $this->connect()->prepare($sql);
            $stmt->execute([$email,$passwd,$login_id]);
            return self::success;
            $stmt = null; 
        }
    }

    public function updateAdmin($name,$email,$password,$login_id){
        
            $sql = "UPDATE admin SET admin_name = ? WHERE login_id = ?";
            $stmt = $this->connect()->prepare($sql);
            $stmt->execute([$name,$login_id]);
            $update = self::update_admin_login($email,$password,$login_id);
            return $update;
            $stmt = null;
       
        
    }

    protected function warnJobseeker($jobseeker_login_id,$request){
        if($request == "warning"){
            $sql= "UPDATE  actions SET action = ? WHERE jobseeker_login_id = ? AND action = ?;";
            $stmt = $this->connect()->prepare($sql);
            $stmt->execute(['warned',$jobseeker_login_id,'Pending']);
            return  self::success;
            $stmt = null; 
        }
        else{
            $sql= "UPDATE  actions SET action = ? WHERE jobseeker_login_id = ? AND action = ?;";
            $stmt = $this->connect()->prepare($sql);
            $stmt->execute(['blocked',$jobseeker_login_id,'Pending']);
            $block = self::blockAccount($jobseeker_login_id);
            return  $block;
            $stmt = null;
        } 
        
    }

    protected function blockAccount($login_id){
        $sql = "UPDATE login SET status = ? WHERE login_id = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([2,$login_id]);
        $result = $stmt->fetchAll();
        return  self::success;   
    }

    protected function contactAdmin($name,$email,$subject,$message)
    {
        // $date = date('Y-m-d');
        $sql = "INSERT INTO contact (contact_name,contact_email,subject,message) VALUES (?,?,?,?);";
        $stmt =$this->connect()->prepare($sql);
        $stmt->execute([$name,$email,$subject,$message]);
        $send_mail = self::sendEmail($name,$email,$subject,$message);
        if($send_mail != 202){
            return 400;
            $stmt = null;
        }
        else{
            return 200;
            $stmt = null;
        }
        
    }
    protected function sendEmail($name,$email,$msg_subject,$message){
 
        $from = new SendGrid\Email('Contact form',"techsavvyasj@gmail.com");
        $subject = "Contact form";
        $to = new SendGrid\Email(null,'dokuwo.gm@gmail.com');
        $content = new SendGrid\Content("text/html", 
        '<div style="font-family: Times New Roman;font-size: 18px;">
                                <p>From: '.$name.'</p>
                                <p>Email: '.$email.'</p>
                                <p>Subject: '.$msg_subject.'</p>
                                <p>Message: '.$message.'</p>
                            </div>');
        $mail = new SendGrid\Mail($from, $subject, $to, $content);
        
        $apiKey = SEND_GRID_API;
        $sg = new \SendGrid($apiKey);
        
        $response = $sg->client->mail()->send()->post($mail);
        return $response->statusCode();
    }
}