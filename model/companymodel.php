<?php
include_once 'dbhmodel.php';

class Company extends Dbh{
    
    const success = 200;
    const fail = 400;

    protected function get_company($login_id){ //@ams->merge this query with get_company_profile_details
        $sql = " Select * from company where login_id = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$login_id]);
        $result = $stmt->fetch();
        if(!$result) return self::fail;
        return  $result ;
        $stmt = null;
    }
    public function get_no_of_job_seekers(){ 
        $sql = "Select * from job_seeker";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([]);
        $rowCount = $stmt->rowCount();
        if(!$rowCount) return self::fail;
        return  $rowCount ;
        $stmt = null;
    }
    protected function get_no_of_jobs_published($company_id){
        $sql = " Select * from job where company_id = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$company_id]);
        $rowCount = $stmt->rowCount();
        if(!$rowCount) return ('0');
        return $rowCount;
        $stmt = null;
    }
    protected function get_no_of_new_messages($recipient_id){
        $sql = " Select * from message_recipient where recipient_id = ? AND is_read = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$recipient_id,0]);
        $rowCount = $stmt->rowCount();
        //if(!$rowCount) return ('No rows');
        if(!$rowCount) return 0;
        return $rowCount;
        $stmt = null;
    }
    protected function get_all_inbox_messages($recipient_id){
        $sql = " SELECT message.message_id,creator_id,creator_name,subject,message_body,create_date,parent_message_id,message_recipient.recipient_id,job_seeker.fullName FROM message_recipient INNER JOIN message ON message_recipient.message_id = message.message_id INNER JOIN job_seeker ON message.creator_id = job_seeker.login_id WHERE message_recipient.recipient_id = ?;";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$recipient_id]);
        $result = $stmt->fetchAll();
        return  $result ;
        $stmt = null;
    }
    protected function delete_this_message($message_id){
        $sql = " UPDATE message_recipient SET delete_request = ?  WHERE message_id = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute(['1',$message_id]);
        return self::success;
        $stmt = null;

    }
    protected function set_message_is_read($message_id){
        $sql = " UPDATE message_recipient SET is_read = ?  WHERE message_id = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute(['1',$message_id]);
        return self::success;
        $stmt = null;
    }
    protected function get_read_messages($recipient_id){
        $sql = " Select * from message_recipient where recipient_id = ? and is_read = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$recipient_id,1]);
        $result = $stmt->fetchAll();
        if(!$result){
            return 0;
            $stmt = null;
        }else{
            return  $result;
            $stmt = null;
        }
    }
    protected function get_all_sent_messages($creator_id){
        $sql = "SELECT message.message_id,creator_id,creator_name,subject,message_body,create_date,parent_message_id,recipient_id,fullName  FROM message INNER JOIN message_recipient ON message.message_id = message_recipient.message_id INNER JOIN job_seeker on message_recipient.recipient_id = job_seeker.login_id where message.creator_id =? order by create_date desc";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$creator_id]);
        $result = $stmt->fetchAll();
        return  $result;
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
    protected function get_all_jobseekers(){
        $sql = " Select * from job_seeker";
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
    protected function send_msg_to_a_jobseeker($creator_id,$creator_name,$recipient_id,$recipient_name,$parent_msg_id,$Subject,$messageBody){

    $date = date('Y-m-d');
    if($parent_msg_id =='' || $parent_msg_id == null){
        $stmt1 = $this->connect()->prepare("INSERT INTO message (creator_id, creator_name, subject,message_body,create_date) VALUES (?, ?, ?, ?, ?)");
        $stmt1->execute([$creator_id,$creator_name,$Subject,$messageBody,$date]);
    }else{//change this
        $stmt1 = $this->connect()->prepare("INSERT INTO message (creator_id, creator_name, subject,message_body,create_date,parent_message_id) VALUES (?, ?, ?, ?, ?, ?)");
        $stmt1->execute([$creator_id,$creator_name,$Subject,$messageBody,$date,$parent_msg_id]);
    }
        //AMS: this query is not efficient although it is working. I should be using lastInsertId()
        //but due to some unknown reasons, it is not working. so i will revise it later
        $stmt2 = $this->connect()->prepare("SELECT message_id FROM message WHERE creator_id = ? AND creator_name = ? AND subject = ? AND create_date = ?");
        $stmt2->execute([$creator_id,$creator_name,$Subject,$date]);
        $res = $stmt2->fetch();

        $stmt3 = $this->connect()->prepare("INSERT INTO message_recipient (recipient_id, message_id, is_read,delete_request) VALUES (?, ?, ?, ?)");
        $stmt3->execute([$recipient_id,$res['message_id'],0,0]);

         return 200;
    }
    protected function get_categories_of_jobseekers(){
        //$seekersArray = array();
        $sql = " SELECT category, COUNT(*) AS count FROM job_seeker GROUP BY category";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute();
        $result = $stmt->fetchAll();
        
        return  $result;
        $stmt = null;
        // $sql2 = "SELECT category,skills,COUNT(*) AS count FROM job_seeker GROUP BY category,skills";
        // $stmt2 = $this->connect()->prepare($sql2);
        // $stmt2->execute();
        // $result2 = $stmt2->fetchAll();
        // array_push($seekersArray,$result2);
        //var_dump($result);
    }
    protected function get_jobseekers_of_this_category($category){
        $sql = " SELECT * FROM job_seeker where category = ?;";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$category]);
        $result = $stmt->fetchAll();
        
        if(!$result ){
            return self::fail;
            $stmt = null;
        }else{
            return  $result ;
            $stmt = null;
        }
    }
    protected function get_company_profile_details($login_id){
     $sql="SELECT  company.login_id,company_name, company_phone, company_address, postal_code, country, currency, logo, login.email, password FROM company INNER JOIN login ON company.login_id = login.login_id WHERE login.login_id=? ";
     $stmt =$this->connect()->prepare($sql);
     $stmt->execute([$login_id]);
     $result=$stmt->fetch();
     if(!$result) return self::fail;
     return $result;
     $stmt = null;
    }
    protected function update_company_profile($login_id,$name,$email,$phone,$country,$address,$password,$currency,$code,$final_image){
        
        $sql = ($final_image == "" || null)? "UPDATE company SET company_name = ?,company_phone=?,company_address=?,postal_code=?,country=?,currency=? WHERE login_id = ?":
        "UPDATE company SET company_name = ?,company_phone=?,company_address=?,postal_code=?,country=?,currency=?,logo=? WHERE login_id = ?";
        $det = ($final_image == "" || null)?[$name,$phone,$address,$code,$country,$currency,$login_id]:[$name,$phone,$address,$code,$country,$currency,$final_image,$login_id];
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute($det);

        $sql2 = ($password == "" || null)? " UPDATE login SET email = ?  WHERE login_id = ?":" UPDATE login SET email = ?,password=?  WHERE login_id = ?";
        $det2 = ($password == "" || null)? [$email,$login_id]:[$email,$password,$login_id];
        $stmt = $this->connect()->prepare($sql2);
        $stmt->execute($det2);
        
        return self::success;
        $stmt = null;
    }
    protected function get_jobs($company_id){
        $sql = " SELECT * FROM job where company_id = ? ORDER BY status ASC;";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$company_id]);
        $result = $stmt->fetchAll();
        
        if(!$result ){
            return self::fail;
            $stmt = null;
        }else{
            return  $result ;
            $stmt = null;
        }
    }
    protected function get_application_stats($company_id){
        $sql = " SELECT COUNT(application.jobseeker_id) AS no_of_applicants,job.status, job.job_id,job.job_name,job.date_posted FROM application INNER JOIN job ON application.job_id = job.job_id WHERE application.company_id = ? GROUP BY application.job_id";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$company_id]);
        $result = $stmt->fetchAll();

        if(!$result ){
            return self::fail;
            $stmt = null;
        }else{
            return  $result ;
            $stmt = null;
        }
    }
    protected function get_job_info($job_id){
        $sql = " SELECT * FROM job where job_id = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$job_id]);
        $result = $stmt->fetch();
        if(!$result ){
            return self::fail;
            $stmt = null;
        }else{
            return  $result ;
            $stmt = null;
        }
    }
    protected function get_job_applicatants($job_id){
        $sql = " SELECT app_status,job_seeker.login_id,job_seeker.fname,job_seeker.lname,job_seeker.address,job_seeker.skills FROM application INNER JOIN job_seeker ON application.jobseeker_id=job_seeker.jobseeker_id WHERE job_id = ? ORDER BY application.app_date;";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$job_id]);
        $result = $stmt->fetchAll();
        if(!$result ){
            return self::fail;
            $stmt = null;
        }else{
            return  $result ;
            $stmt = null;
        }
    }
    protected function get_job_applicatant($login_id){
        $sql = " SELECT login.login_id,login.email,jobseeker_id,fname,lname,fullName,phone,category,skills,tag_line,education_level,address,country,dob,image,CV FROM login INNER JOIN job_seeker ON login.login_id=job_seeker.login_id WHERE login.login_id = ?;";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$login_id]);
        $result = $stmt->fetch();
        if(!$result ){
            return self::fail;
            $stmt = null;
        }else{
            return  $result ;
            $stmt = null;
        }
    }
    protected function accept_and_change_app_status($jobseeker_id,$job_id){
        $sql = " UPDATE application SET app_status=? WHERE job_id=? AND jobseeker_id=?;";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([1,$job_id,$jobseeker_id]);
        return  self::success;
        $stmt = null;
    }
    protected function get_job_details($job_id){
        $sql = "SELECT job_name FROM job WHERE job_id=?;";
        $stmt =$this->connect()->prepare($sql);
        $stmt->execute([$job_id]);
        $result = $stmt->fetch();
        return $result;
    }
    protected function send_this_to_applicant($information){
        $res = $this->send_msg_to_a_jobseeker($information['creator_id'],$information['creator_name'],$information['recipient_id'],$information['recipient_name'],$information['parent_msg_id'],$information['Subject'],$information['messageBody']);
        if($res == 200) return $res;
        else return self::fail;
    }
    protected function close_this_job($job_id){
        $sql = " UPDATE job SET status=? WHERE job_id=?;";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([1,$job_id]);
        return  self::success;
        $stmt = null;
    }
    protected function update_this_job($job_id,$jobName,$jobLocation,$jobType,$jobCategory,$requirements,$salary,$email,$phone){
        $sql = " UPDATE job SET job_name=?,job_type=?,job_cat=?,requirements=?,job_location=?,job_contact_email=?,job_contact_phone=?,salary=? WHERE job_id=?;";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$jobName,$jobType,$jobCategory,$requirements,$jobLocation,$email,$phone,$salary,$job_id]);
        return  self::success;
        $stmt = null;
    }
    protected function create_this_job($company_id,$jobName,$jobLocation,$jobType,$jobCategory,$requirements,$salary,$email,$phone){
        $date = date('Y-m-d');$date = date('Y-m-d');
        $sql = " INSERT INTO job(company_id,job_name,job_type,job_cat,requirements,job_location,job_contact_email,job_contact_phone,salary,date_posted,status) VALUES(?,?,?,?,?,?,?,?,?,?,?);";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$company_id,$jobName,$jobType,$jobCategory,$requirements,$jobLocation,$email,$phone,$salary,$date,0]);
        return  self::success;
        $stmt = null;
    }
}
