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
        $sql = " Select * from message_recipient where recipient_id = ? AND is_read = ? AND delete_request = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$recipient_id,0,0]);
        $rowCount = $stmt->rowCount();
        //if(!$rowCount) return ('No rows');
        if(!$rowCount) return 0;
        return $rowCount;
        $stmt = null;
    }
    protected function get_all_inbox_messages($recipient_id){
        $sql = " SELECT message.message_id,creator_id,creator_name,subject,message_body,create_date,parent_message_id,message_recipient.recipient_id,job_seeker.fullName FROM message_recipient INNER JOIN message ON message_recipient.message_id = message.message_id INNER JOIN job_seeker ON message.creator_id = job_seeker.login_id WHERE message_recipient.recipient_id = ? AND message_recipient.delete_request = ?  order by create_date desc;";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$recipient_id,0]);
        $result = $stmt->fetchAll();
        return  $result ;
        $stmt = null;
    }
    protected function get_this_message($msg_id){
        $sql = " SELECT * FROM message WHERE message_id = ?;";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$msg_id]);
        $result = $stmt->fetch();
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
    protected function delete_this_sent_message($message_id){ //new
        $sql = " UPDATE message SET sender_delete_request = ?  WHERE message_id = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute(['1',$message_id]);
        return self::success;
        $stmt = null;
    }
    protected function set_message_is_read($message_id){
        $sql = " UPDATE message_recipient SET is_read = ? WHERE message_id = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute(['1',$message_id]);
        return self::success;
        $stmt = null;
    }
    protected function get_read_messages($recipient_id){
        $sql = " Select * from message_recipient WHERE recipient_id = ? AND is_read = ? AND delete_request = ? ";
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
    protected function get_all_sent_messages($creator_id){
        $sql = "SELECT message.message_id,creator_id,creator_name,subject,message_body,create_date,parent_message_id,recipient_id,fullName  FROM message INNER JOIN message_recipient ON message.message_id = message_recipient.message_id INNER JOIN job_seeker on message_recipient.recipient_id = job_seeker.login_id WHERE message.creator_id =? AND message.sender_delete_request =? order by create_date desc";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$creator_id,0]);
        $result = $stmt->fetchAll();
        return  $result;
        $stmt = null;
    }
    protected function get_new_unread_messages($recipient_id){
        $sql = " SELECT message.message_id,creator_id,creator_name,subject,message_body,create_date,parent_message_id FROM message INNER JOIN message_recipient ON message.message_id = message_recipient.message_id WHERE message_recipient.recipient_id = ? AND message_recipient.is_read = ? AND message_recipient.delete_request = ?;";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$recipient_id,0,0]);
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
    protected function send_msg_to_a_jobseeker($creator_id,$creator_name,$recipient_id,$recipient_name,$parent_msg_id,$Subject,$messageBody,$type=''){
    
    if($this->have_blocked($creator_id,$recipient_id)){
        return  array('message' => 'You have already blocked this user.');
    }
    if($this->account_removed($recipient_id)){
        return  array('message' => 'This user\'s account have already been removed after numerous reports.');
    }
    $date = date('Y-m-d');
    if($parent_msg_id =='' || $parent_msg_id == null){
        $stmt1 = $this->connect()->prepare("INSERT INTO message (creator_id, creator_name,subject,message_body,sender_delete_request,create_date) VALUES (?, ?, ?, ?, ?, ?)");
        $stmt1->execute([$creator_id,$creator_name,$Subject,$messageBody,0,$date]);
    }else{//change this
        $stmt1 = $this->connect()->prepare("INSERT INTO message (creator_id, creator_name, subject,message_body,sender_delete_request,create_date,parent_message_id) VALUES (?, ?, ?, ?, ?, ?, ?)");
        $stmt1->execute([$creator_id,$creator_name,$Subject,$messageBody,0,$date,$parent_msg_id]);
    }
        //AMS: this query is not efficient although it is working. I should be using lastInsertId()
        //but due to some unknown reasons, it is not working. so i will revise it later.
        $res = $this->last_inserted_message_id($creator_id,$creator_name,$Subject,$date);

        $stmt3 = $this->connect()->prepare("INSERT INTO message_recipient (recipient_id, message_id, is_read,delete_request) VALUES (?, ?, ?, ?)");
        $stmt3->execute([$recipient_id,$res['message_id'],0,0]);

         if($type == 'forward') return  array('message' => 'Message has been successfully forwarded');
         else return  array('message' => 'Message successfully sent.');
    }
    protected function last_inserted_message_id($creator_id,$creator_name,$Subject,$date){
        $stmt = $this->connect()->prepare("SELECT message_id FROM message WHERE creator_id = ? AND creator_name = ? AND subject = ? AND create_date = ?");
        $stmt->execute([$creator_id,$creator_name,$Subject,$date]);
        $res = $stmt->fetchAll();
        foreach($res as $key => $value){
            $stmt1 = $this->connect()->prepare("SELECT * FROM message_recipient WHERE message_id = ?");
            $stmt1->execute([$value['message_id']]);
            $result = $stmt1->fetch();
            if(!$result ){
                return $value;
                $stmt1 = null;
            }else{
                $stmt1 = null;
            }
        }
        $stmt = null;
    }
    protected function forward_msg_to_a_jobseeker($creator_id,$creator_name,$_recipient_id,$recipient_name,$message_id){
        $sql = " SELECT subject, message_body FROM message where message_id = ?;";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$message_id]);
        $result = $stmt->fetch();
        return $this->send_msg_to_a_jobseeker($creator_id,$creator_name,$_recipient_id,$recipient_name,null,$result['subject'],$result['message_body'],'forward');
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
        $sql = " SELECT job_seeker.*, login.email FROM job_seeker INNER JOIN login ON job_seeker.login_id = login.login_id where category = ?;";
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
        $sql = " SELECT COUNT(application.jobseeker_id) AS no_of_applicants,job.status, job.job_id,job.job_name,job.date_posted FROM application INNER JOIN job ON application.job_id = job.job_id WHERE application.company_id = ? GROUP BY application.job_id ORDER BY job.date_posted DESC";
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
        $sql = "SELECT * FROM job WHERE job_id=?;";
        $stmt =$this->connect()->prepare($sql);
        $stmt->execute([$job_id]);
        $result = $stmt->fetch();
        return $result;
    }
    protected function get_job_company_details($job_id){
        $sql = "SELECT job.*,company.* FROM job INNER JOIN company ON job.company_id = company.company_id WHERE job_id=?;";
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
    protected function create_this_job($login_id,$company_id,$jobName,$jobLocation,$jobType,$jobCategory,$requirements,$salary,$email,$phone){
        $res = $this->have_already_posted_a_job($login_id);
        if($res['status'] == 400) return $res;
        if($res['status'] == 402) return $res;
        else{
        $date = date('Y-m-d');
        $sql = " INSERT INTO job(company_id,job_name,job_type,job_cat,requirements,job_location,job_contact_email,job_contact_phone,salary,date_posted,status) VALUES(?,?,?,?,?,?,?,?,?,?,?);";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$company_id,$jobName,$jobType,$jobCategory,$requirements,$jobLocation,$email,$phone,$salary,$date,0]);
        return  array('message' => 'Job successfully created!','status' => 200);
        $stmt = null;
      }
    }
    public function have_already_posted_a_job($login_id){
        $res = $this->validity_period($login_id);
        if(!$res) return array('message' => 'You have no active package. please activate a package to post a job!','status' => 400);
        else{
        $sql = "SELECT * FROM job WHERE date_posted BETWEEN :validFrom AND :validUntil";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute(array(
            ':validFrom' => $res['validFrom'],
            ':validUntil' => $res['validUntil']));
        $result = $stmt->fetch();

        if(!$result ){
            return array('status' => 200);
            $stmt = null;
        }else{
            return  array('message' => 'You have already posted a job. You can only post one job with your current package!','status' => 402);
            $stmt = null;
        }
      }  
    }
    protected function validity_period($login_id){
        $sql = "SELECT validFrom, validUntil FROM package WHERE login_id=? AND status=?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$login_id,'Active']);
        $result = $stmt->fetch();

        if(!$result ){
            return false;
            $stmt = null;
        }else{
            return  $result ;
            $stmt = null;
        }
    }
    protected function get_jobs_of_this_category($category){
        $sql = " SELECT job.*,company.company_name,company.logo,company.currency FROM job INNER JOIN company ON job.company_id=company.company_id WHERE job_cat = ? GROUP BY job.job_id";
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
    protected function get_featured_jobs(){
        $sql = " SELECT job.*,company.company_name,company.logo,company.currency FROM job INNER JOIN company on job.company_id=company.company_id WHERE featured = 1 GROUP BY job.job_id";
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
    protected function get_latest_jobs(){
        $sql = " SELECT job.*,company.company_name,company.logo,company.currency FROM job INNER JOIN company on job.company_id=company.company_id GROUP BY job.job_id ORDER BY date_posted DESC";
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
    protected function get_all_blogs(){
        $sql = "SELECT * FROM blog";
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
    protected function get_blog_details($blog_id){
        $sql = " SELECT * FROM blog WHERE blog_id=?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$blog_id]);
        $result = $stmt->fetchAll();

        if(!$result ){
            return self::fail;
            $stmt = null;
        }else{
            return  $result ;
            $stmt = null;
        }    
    }
    protected function get_blog_categories(){
        $sql = " SELECT category,COUNT(category) AS num_posts FROM blog GROUP BY category";
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
    protected function get_recent_posts(){
        $sql = " SELECT * FROM blog ORDER BY date_posted DESC";
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
    protected function get_posts_by_category($category){
        $sql = " SELECT * FROM blog WHERE category = ?";
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
    protected function get_jobseeker_details($jobseeker_id){
        $sql = " SELECT * FROM job_seeker WHERE jobseeker_id=?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$jobseeker_id]);
        $result = $stmt->fetchAll();

        if(!$result ){
            return self::fail;
            $stmt = null;
        }else{
            $package = self::package_exists($result[0]['login_id']);
            if($package != 400)
            {
                $result[0]['package'] = $package['status'];
                $reviews = self::getReviews($result[0]['jobseeker_id']);
                return array('details' => $result, 'reviews' => $reviews);
            }
            else{
                $result[0]['package'] = $package;
                return array('details' => $result);
            }
            $stmt = null;
        }    
    }
    protected function recruiter_details($recruiter_id){
        $sql = " SELECT  * FROM company WHERE company_id = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$recruiter_id]);
        $result = $stmt->fetchAll();
        
        return  $result;
        $stmt = null; 
    }
    protected function block_this_jobseeker($company_login_id,$jobseeker_login_id){
        if($this->have_blocked($company_login_id,$jobseeker_login_id)){
            return  array('message' => 'You have already blocked this user.');
        }
        if($this->account_removed($jobseeker_login_id)){
            return  array('message' => 'This user\'s account have already been removed after numerous reports.');
        }
        $sql = " INSERT INTO actions(company_login_id,jobseeker_login_id,request,action) VALUES(?,?,?,?);";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$company_login_id,$jobseeker_login_id,'Block','Blocked']);
        return  array('message' => 'Done! You will no longer receive messages from this user.');
        $stmt = null;
    }
    protected function have_blocked($company_login_id,$jobseeker_login_id){
        $sql = " SELECT * FROM actions WHERE company_login_id=? AND jobseeker_login_id=? AND action=?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$company_login_id,$jobseeker_login_id,'Blocked']);
        $result = $stmt->fetch();

        if(!$result ){
            return false;
            $stmt = null;
        }else{
            return  true;
            $stmt = null;
        } 
    }
    protected function account_removed($jobseeker_login_id){
        $sql = " SELECT * FROM actions WHERE jobseeker_login_id=? AND action=?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$jobseeker_login_id,'Removed']);
        $result = $stmt->fetch();
        
        if(!$result ){
            return false;
            $stmt = null;
        }else{
            return  true;
            $stmt = null;
        } 
    }
    protected function report_this_jobseeker($company_login_id,$jobseeker_login_id,$reason){
        if($this->have_reported($company_login_id,$jobseeker_login_id)){
            return  array('message' => 'You have already reported this user.');
        }
        if($this->account_removed($jobseeker_login_id)){
            return  array('message' => 'This user\'s account have already been removed after numerous reports.');
        }
        $sql = " INSERT INTO actions(company_login_id,jobseeker_login_id,request,reason,action) VALUES(?,?,?,?,?);";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$company_login_id,$jobseeker_login_id,'Report',$reason,'Pending']);
        return  array('message' => 'Done! Our team will review and act accordingly.');
        $stmt = null;
    }
    protected function have_reported($company_login_id,$jobseeker_login_id){
        $sql = " SELECT * FROM actions WHERE company_login_id=? AND jobseeker_login_id=? AND request=?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$company_login_id,$jobseeker_login_id,'Report']);
        $result = $stmt->fetch();

        if(!$result ){
            return false;
            $stmt = null;
        }else{
            return  true;
            $stmt = null;
        } 
    }
// admin DAO @Biran
    protected function get_blog_by_admin($admin_id){
        $sql = "SELECT * FROM blog where admin_id = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$admin_id]);
        $result = $stmt->fetchAll();

        if(!$result ){
            return self::fail;
            $stmt = null;
        }else{
            return  $result ;
            $stmt = null;
        }    
    }

    protected function create_new_blog($admin_id,$title,$publisher,$category,$tags,$content,$image){
        $date = date('Y-m-d');$date = date('Y-m-d');
        $sql = " INSERT INTO blog(admin_id,blog_title,date_posted,blog_publisher,category,tags,blog_content,blog_image) VALUES(?,?,?,?,?,?,?,?)";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$admin_id,$title,$date,$publisher,$category,$tags,$content,$image]);
        return  self::success;
        $stmt = null;
    }

    protected function updateBlog($title,$category,$tags,$image,$blog_id){
        $sql = " UPDATE blog SET blog_title=?,category=?,tags=?,blog_image=? WHERE blog_id=?;";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$title,$category,$tags,$image,$blog_id]);
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

    protected function deleteReport($action_id){
        $sql = " DELETE FROM actions WHERE action_id=?;";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$action_id]);
        return  self::success;
        $stmt = null; 
    }

    protected function package_exists($login_id){
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
    //packaging
    protected function requesting_this_package($login_id,$package){
        // if($package)
        $res = $this->is_any_package_active_pending($login_id);
        if($res['status'] == 'Pending') return array('message' => 'Your request to activate a package is pending. You can\'t request for two packages.');
        else if($res['status'] == 'Active') return array('message' => 'Your current package is still active. You have to wait until the current package expires.');
        else return $this->request_to_activate_this_pack($login_id,$package);
    }
    protected function is_any_package_active_pending($login_id){
        $sql= "SELECT * FROM package  WHERE login_id=? AND status IN (?,?);";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$login_id,'Pending','Active']);
        $result = $stmt->fetch();
        if(!$result ){
            return false;
            $stmt = null;
        }else{
            return  $result;
            $stmt = null;
        }
    }

    protected function activatePackage($login_id){
        $check_trial = self::has_the_trial_been_activated($login_id);
        if(!$check_trial){
            $expired_trial = self::create_expired_trial_package($login_id);
            $sql = " UPDATE package SET status = ?  WHERE login_id = ? AND status = ?;";
            $stmt = $this->connect()->prepare($sql);
            $stmt->execute(['Active',$login_id,'Pending']);
            return  self::success;
            $stmt = null; 
        }
       
    }

    protected function getReviews($jobseeker_id){
        $sql= "SELECT review_id,reviewer_name,(SELECT COUNT(rating) FROM review_link WHERE jobseeker_id = ?) AS num_rates,(SELECT SUM(rating) FROM review_link WHERE jobseeker_id = ?) AS total_rates,review_content FROM review_link WHERE jobseeker_id = ? GROUP BY review_id ORDER BY review_id DESC";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$jobseeker_id,$jobseeker_id,$jobseeker_id]);
        $result = $stmt->fetchAll();
        if(!$result ){
            return self::fail;
            $stmt = null;
        }else{
            return  $result;
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

    protected function get_admin($login_id){
        $sql = " SELECT admin.admin_name,login.email from admin INNER JOIN login ON admin.login_id=login.login_id WHERE admin.login_id = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$login_id]);
        $result = $stmt->fetch();
        if(!$result) return self::fail;
        return  $result ;
        $stmt = null;
    }

    protected function update_admin_login($email,$password,$login_id){
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

    protected function updateAdmin($name,$email,$password,$login_id){
        
            $sql = "UPDATE admin SET admin_name = ? WHERE login_id = ?";
            $stmt = $this->connect()->prepare($sql);
            $stmt->execute([$name,$login_id]);
            $update = self::update_admin_login($email,$password,$login_id);
            return $update;
            $stmt = null;
       
        
    }
    


    protected function request_to_activate_this_pack($login_id,$package){
        $validFrom = date('Y-m-d');
        $sql= "INSERT INTO package (login_id,validFrom,validUntil,status,type) VALUES (?,?,?,?,?);";
        $stmt = $this->connect()->prepare($sql);
        if($package == 'Trial')  $validUntil = date('Y-m-d',strtotime('+14 days',strtotime($validFrom)));
        else if ($package == 'One-time')  $validUntil = date('Y-m-d',strtotime('+14 days',strtotime($validFrom)));
        else if ($package == 'Month')  $validUntil = date('Y-m-d',strtotime('+30 days',strtotime($validFrom)));
        else $validUntil = date('Y-m-d',strtotime('+6 months',strtotime($validFrom)));
        $stmt->execute([$login_id,$validFrom,$validUntil,'Pending',$package]);
        return  array('message' => 'We will get back to you soonest and activate your requested package.');
        $stmt = null;
    }
    protected function has_the_trial_been_activated($login_id){
        //use this function on the admin side of things when 
        //activating a package to check if the recruiter ever actually activated their trial
        //if not activated, then create an exired package b4 activating their requested package
        //so that they cannot use the trial again
        $sql= "SELECT * FROM package  WHERE login_id=? AND type=?;";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$login_id,'Trial']);
        $result = $stmt->fetch();
        if(!$result ){
            return false;
            $stmt = null;
        }else{
            return  true;
            $stmt = null;
        }
    }

    protected function create_expired_trial_package($login_id){
        $validFrom = date('Y-m-d');
        $validUntil = date('Y-m-d');
        $sql= "INSERT INTO package (login_id,validFrom,validUntil,status,type) VALUES (?,?,?,?,?);";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$login_id,$validFrom,$validUntil,'Inactive','Trial']); 
        return true;
        $stmt = null;
    }
}
