<?php
include_once 'dbhmodel.php';

class Jobseeker extends Dbh{

    const success = 200;
    const fail = 400;
    protected function get_jobseeker_profile_details($login_id)
    {
        $sql="SELECT login.email,login.password,job_seeker.* FROM login INNER JOIN job_seeker ON login.login_id = job_seeker.login_id WHERE login.login_id=?;";
        $stmt =$this->connect()->prepare($sql);
        $stmt->execute([$login_id]);
        $result=$stmt->fetchAll();
        if(!$result) return self::fail;
        return $result;
        $stmt = null;
    }
    protected function get_jobseeker($login_id)
    {
        $sql="SELECT * FROM job_seeker WHERE login_id=?;";
        $stmt=$this->connect()->prepare($sql);
        $stmt->execute([$login_id]);
        $result = $stmt->fetchAll();
        if(!$result) return self::fail;
        return $result;
        $stmt = null;
    }
    protected function update_jobseeker_profile($login_id,$fName,$lName,$email,$phone,$country,$address,$password,$dob,$category,$interest,$seeksJob,$skills,$tag_line,$education_level,$dateofbirth,$final_image,$final_cv)
    {
        $fullname = $fName.' '.$lName;
        if(($final_image == "" || $final_image == null) && ($final_cv == "" || $final_cv == null)){
            $sql = "UPDATE job_seeker SET fname=?,lname=?,fullName=?,phone=?,category=?,interest=?,seeksJob=?,skills=?,tag_line=?,education_level=?,address=?,dob=?,country=? WHERE login_id=?;";
        }else if($final_cv == "" || $final_cv == null){
            $sql = "UPDATE job_seeker SET fname=?,lname=?,fullName=?,phone=?,category=?,interest=?,seeksJob=?,skills=?,tag_line=?,education_level=?,address=?,dob=?,country=?,image=? WHERE login_id=?;";
        }else if($final_image == "" || $final_image ==  null){
            $sql = "UPDATE job_seeker SET fname=?,lname=?,fullName=?,phone=?,category=?,interest=?,seeksJob=?,skills=?,tag_line=?,education_level=?,address=?,dob=?,country=?,CV=? WHERE login_id=?;";
        }else{
            $sql = "UPDATE job_seeker SET fname=?,lname=?,fullName=?,phone=?,category=?,interest=?,seeksJob=?,skills=?,tag_line=?,education_level=?,address=?,dob=?,country=?,image=?,CV=? WHERE login_id=?;";
        }
        if(($final_image == "" || $final_image == null) && ($final_cv == "" || $final_cv == null)){
            $det = [$fName,$lName,$fullname,$phone,$category,$interest,$seeksJob,$skills,$tag_line,$education_level,$address,$dob,$country,$login_id];
        }else if($final_image == "" || $final_image == null){
            $det = [$fName,$lName,$fullname,$phone,$category,$interest,$seeksJob,$skills,$tag_line,$education_level,$address,$dob,$country,$final_cv,$login_id];
        }else if($final_cv == "" || $final_cv == null){
            $det = [$fName,$lName,$fullname,$phone,$category,$interest,$seeksJob,$skills,$tag_line,$education_level,$address,$dob,$country,$final_image,$login_id];
        }else{
            $det = [$fName,$lName,$fullname,$phone,$category,$interest,$seeksJob,$skills,$tag_line,$education_level,$address,$dob,$country,$final_image,$final_cv,$login_id];
        }
        
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute($det);

        $sql2 = ($password == "" || $password == null)? " UPDATE login SET email = ?  WHERE login_id = ?":" UPDATE login SET email = ?,password=?  WHERE login_id = ?";
        $det2 = ($password == "" || $password == null)? [$email,$login_id]:[$email,$password,$login_id];
        $stmt = $this->connect()->prepare($sql2);
        $stmt->execute($det2);
        
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
    protected function get_no_of_jobs_available()
    {
      $sql="SELECT * FROM job WHERE status=?;";
      $stmt=$this->connect()->prepare($sql);
      $stmt->execute([0]);
      $result= $stmt->rowCount();
      if(!$result) return self::fail;
      return $result;
      $stmt = null;
    }
    protected function get_no_of_companies()
    {
        $sql="SELECT * FROM company;";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([]);
        $rowCount = $stmt->rowCount();
        if(!$rowCount) return self::fail;
        return  $rowCount ;
        $stmt = null;
    }
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
    protected function get_this_message($msg_id){
        $sql = " SELECT * FROM message WHERE message_id = ?;";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$msg_id]);
        $result = $stmt->fetch();
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
    protected function get_all_sent_messages($creator_id){
        $sql = "SELECT message.message_id,creator_id,creator_name,subject,message_body,create_date,parent_message_id,recipient_id,company.company_name FROM message INNER JOIN message_recipient ON message.message_id = message_recipient.message_id INNER JOIN company on message_recipient.recipient_id = company.login_id where message.creator_id =? AND message.sender_delete_request =? order by create_date desc";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$creator_id,0]);
        $result = $stmt->fetchAll();
        return  $result;
        $stmt = null;
    }
    protected function set_message_is_read($message_id){
        $sql = " UPDATE message_recipient SET is_read = ?  WHERE message_id = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute(['1',$message_id]);
        return self::success;
        $stmt = null;
    }
    protected function get_all_companies(){
    $sql = " Select * from company";
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
    protected function send_msg_to_a_company($creator_id,$creator_name,$recipient_id,$recipient_name,$parent_msg_id,$Subject,$messageBody,$type=''){
        
        if($this->have_blocked($creator_id,$recipient_id)){
            return  array('message' => 'You have been blocked by this company. Your message is not delivered.');
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
    protected function forward_msg_to_a_company($creator_id,$creator_name,$recipient_id,$recipient_name,$message_id){
        $sql = " SELECT subject, message_body FROM message where message_id = ?;";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$message_id]);
        $result = $stmt->fetch();
        return $this->send_msg_to_a_company($creator_id,$creator_name,$recipient_id,$recipient_name,null,$result['subject'],$result['message_body'],'forward');
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
    protected function retreive_all_jobs()
    {
        $sql = "SELECT job_id,job_name,job_cat,job_type,requirements,job_location,date_posted,job_contact_email,job_contact_phone,salary,status,company.company_id,company.company_name,company.currency,company.logo FROM job INNER JOIN company ON job.company_id = company.company_id WHERE status=?";
        $stmt =$this->connect()->prepare($sql);
        $stmt->execute([0]);
        $result = $stmt->fetchAll();
        if(!$result) return self::fail;
        return $result;
        $stmt = null;
    }
    protected function have_user_already_applied_this_job($jobseeker_id,$job_id,$company_id)
    {
        $sql = "SELECT * FROM application WHERE job_id = ? AND jobseeker_id = ?AND company_id = ?;";
        $stmt =$this->connect()->prepare($sql);
        $stmt->execute([$job_id,$jobseeker_id,$company_id]);
        $result = $stmt->fetch();
        if(!$result) return 0;
        return $result;
        $stmt = null; 
    }
    protected function apply_to_this_job($jobseeker_id,$job_id,$company_id)
    {
        $date = date('Y-m-d');
        $sql = "INSERT INTO application (job_id,jobseeker_id,company_id,app_date,app_status) VALUES (?,?,?,?,?);";
        $stmt =$this->connect()->prepare($sql);
        $stmt->execute([$job_id,$jobseeker_id,$company_id,$date,0]);
        return self::success;
        $stmt = null;
    }
    protected function get_all_hires($jobseeker_id)
    {
        $sql = "SELECT * FROM hires WHERE jobseeker_id = ?;";
        $stmt =$this->connect()->prepare($sql);
        $stmt->execute([$jobseeker_id]);
        $result = $stmt->fetchAll();
        if(!$result) return self::fail;
        return $result;
        $stmt = null; 
    }
    public function is_doing_freelance($jobseeker_id){
        $sql = "SELECT interest FROM job_seeker WHERE jobseeker_id = ?;";
        $stmt =$this->connect()->prepare($sql);
        $stmt->execute([$jobseeker_id]);
        $result = $stmt->fetch();
        if($result['interest'] == 'Freelance') return true;
        else return false;
        $stmt = null;
    }
    protected function delete_this_hire($hire_id)
    {
        $sql = "DELETE FROM hires WHERE hire_id = ?;";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$hire_id]);
        return  self::success;
        $stmt = null;  
    }
    protected function search_for_jobs($job,$location)
    {
        if($job == ''){
        $sql="SELECT job_id,job_name,job_cat,job_type,requirements,job_location,date_posted,job_contact_email,job_contact_phone,salary,status,company.company_id,company.company_name,company.currency,company.logo FROM job INNER JOIN company ON job.company_id = company.company_id WHERE job_location like :search AND status =:status;";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute(array(
            ':search' => '%' . $location . '%',
            ':status' => 0));
        }else if($location == ''){
            $sql="SELECT job_id,job_name,job_cat,job_type,requirements,job_location,date_posted,job_contact_email,job_contact_phone,salary,status,company.company_id,company.company_name,company.currency,company.logo FROM job INNER JOIN company ON job.company_id = company.company_id WHERE job_name like :search AND status =:status;";
            $stmt = $this->connect()->prepare($sql);
            $stmt->execute(array(
                ':search' => '%' . $job . '%',
                ':status' => 0));
        }else{
            $sql="SELECT job_id,job_name,job_cat,job_type,requirements,job_location,date_posted,job_contact_email,job_contact_phone,salary,status,company.company_id,company.company_name,company.currency,company.logo FROM job INNER JOIN company ON job.company_id = company.company_id WHERE job_name like :job AND job_location LIKE :location AND status =:status;";
            $stmt = $this->connect()->prepare($sql);
            $stmt->execute(array(
            ':job' => '%' . $job . '%',
            ':location' => '%'. $location . '%',
            ':status' => 0));
        }
        $result = $stmt->fetchAll();
        return $result;
        $stmt = null;
    }
    protected function search_featured_jobs($job,$location)
    {
        if($job == ''){
        $sql="SELECT job.*,company.company_name,company.logo,company.currency FROM job INNER JOIN company on job.company_id=company.company_id WHERE featured = 1 AND job_location LIKE :search  GROUP BY job.job_id;";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute(array(
            ':search' => '%' . $location . '%'));
        }else if($location == ''){
            $sql="SELECT job.*,company.company_name,company.logo,company.currency FROM job INNER JOIN company on job.company_id=company.company_id WHERE featured = 1 AND job_name LIKE :search  GROUP BY job.job_id;";
            $stmt = $this->connect()->prepare($sql);
            $stmt->execute(array(
                ':search' => '%' . $job . '%'));
        }else{
            $sql="SELECT job.*,company.company_name,company.logo,company.currency FROM job INNER JOIN company on job.company_id=company.company_id WHERE featured = 1 AND job_name LIKE :job AND job_location LIKE :location  GROUP BY job.job_id;";
            $stmt = $this->connect()->prepare($sql);
            $stmt->execute(array(
            ':job' => '%' . $job . '%',
            ':location' => '%'. $location . '%'));
        }
        $result = $stmt->fetchAll();
        return $result;
        $stmt = null;
    }

    protected function search_latest_jobs($job,$location)
    {
        if($job == ''){
        $sql="SELECT job.*,company.company_name,company.logo,company.currency FROM job INNER JOIN company on job.company_id=company.company_id WHERE job_location LIKE :search  GROUP BY job.job_id ORDER BY date_posted DESC;";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute(array(
            ':search' => '%' . $location . '%'));
        }else if($location == ''){
            $sql="SELECT job.*,company.company_name,company.logo,company.currency FROM job INNER JOIN company on job.company_id=company.company_id WHERE job_name LIKE :search  GROUP BY job.job_id ORDER BY date_posted DESC;";
            $stmt = $this->connect()->prepare($sql);
            $stmt->execute(array(
                ':search' => '%' . $job . '%'));
        }else{
            $sql="SELECT job.*,company.company_name,company.logo,company.currency FROM job INNER JOIN company on job.company_id=company.company_id WHERE job_name LIKE :job AND job_location LIKE :location  GROUP BY job.job_id ORDER BY date_posted DESC;";
            $stmt = $this->connect()->prepare($sql);
            $stmt->execute(array(
            ':job' => '%' . $job . '%',
            ':location' => '%'. $location . '%'));
        }
        $result = $stmt->fetchAll();
        return $result;
        $stmt = null;
    }

    protected function search_for_jobseekers($tagline,$address)
    {
        if($tagline == ''){
        $sql="SELECT * FROM job_seeker WHERE address like :search;";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute(array(
            ':search' => '%' . $address . '%'));
        }else if($address == ''){
            $sql="SELECT * FROM job_seeker WHERE tag_line like :search;";
            $stmt = $this->connect()->prepare($sql);
            $stmt->execute(array(
                ':search' => '%' . $tagline . '%'));
        }else{
            $sql="SELECT * FROM job_seeker WHERE tag_line like :tagLine AND address LIKE :location;";
            $stmt = $this->connect()->prepare($sql);
            $stmt->execute(array(
            ':tagLine' => '%' . $tagline . '%',
            ':location' => '%'. $address . '%'));
        }
        $result = $stmt->fetchAll();
        return $result;
        $stmt = null;
    }
    protected function search_for_employers($companyName,$companyAddress)
    {
        if($companyName == ''){
        $sql="SELECT * FROM company WHERE company_address like :search;";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute(array(
            ':search' => '%' . $companyAddress . '%'));
        }else if($companyAddress == ''){
            $sql="SELECT * FROM company WHERE compnay_name like :search;";
            $stmt = $this->connect()->prepare($sql);
            $stmt->execute(array(
                ':search' => '%' . $companyName . '%'));
        }else{
            $sql="SELECT * FROM company WHERE company_name like :compName AND company_address LIKE :compAddress;";
            $stmt = $this->connect()->prepare($sql);
            $stmt->execute(array(
            ':compName' => '%' . $companyName . '%',
            ':compAddress' => '%'. $companyAddress . '%'));
        }
        $result = $stmt->fetchAll();
        return $result;
        $stmt = null;
    }

    protected function search_jobs_category($category,$job,$location)
    {
        if($job == ''){
        $sql="SELECT job.*,company.company_name,company.logo,company.currency FROM job INNER JOIN company ON job.company_id=company.company_id WHERE job_cat = :category AND job_location LIKE :search GROUP BY job.job_id;";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute(array(
            ':category' => $category,
            ':search' => '%' . $location . '%'));
        }else if($location == ''){
            $sql="SELECT job.*,company.company_name,company.logo,company.currency FROM job INNER JOIN company ON job.company_id=company.company_id WHERE job_cat = :category AND job_name LIKE :search GROUP BY job.job_id;";
            $stmt = $this->connect()->prepare($sql);
            $stmt->execute(array(
                ':category' => $category,
                ':search' => '%' . $job . '%'));
        }else{
            $sql="SELECT job.*,company.company_name,company.logo,company.currency FROM job INNER JOIN company ON job.company_id=company.company_id WHERE job_cat = :category AND job_name LIKE :job AND job_location LIKE :location GROUP BY job.job_id;";
            $stmt = $this->connect()->prepare($sql);
            $stmt->execute(array(
            ':category' => $category,
            ':job' => '%' . $job . '%',
            ':location' => '%'. $location . '%'));
        }
        $result = $stmt->fetchAll();
        return $result;
        $stmt = null;
    }

    protected function hire_jobseeker($jobseeker_id,$name,$email,$phone,$task)
    {
        $date = date('Y-m-d');
        $sql = "INSERT INTO hires (jobseeker_id,name,email,phone,task,date) VALUES (?,?,?,?,?,?);";
        $stmt =$this->connect()->prepare($sql);
        $stmt->execute([$jobseeker_id,$name,$email,$phone,$task,$date]);
        return self::success;
        $stmt = null;
    }
    public function get_categories_of_jobs(){
        $sql = " SELECT job_cat, COUNT(*) AS count FROM job GROUP BY job_cat";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute();
        $result = $stmt->fetchAll();
        
        return  $result;
        $stmt = null;
    }
    protected function contactAdmin($name,$email,$subject,$message)
    {
        // $date = date('Y-m-d');
        $sql = "INSERT INTO contact (contact_name,contact_email,subject,message) VALUES (?,?,?,?);";
        $stmt =$this->connect()->prepare($sql);
        $stmt->execute([$name,$email,$subject,$message]);
        return self::success;
        $stmt = null;
    }
    protected function have_blocked($jobseeker_login_id,$company_login_id){
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
    protected function request_to_activate_this_pack($login_id,$package){
        $validFrom = date('Y-m-d');
        $sql= "INSERT INTO package (login_id,validFrom,validUntil,status,type) VALUES (?,?,?,?,?);";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$login_id,$validFrom,($package == 'Month')?date('Y-m-d',strtotime('+30 days',strtotime($validFrom))):
        date('Y-m-d',strtotime('+1 year',strtotime($validFrom))),'Pending',$package]);
        return  array('message' => 'We will get back to you soonest and activate your requested package.');
        $stmt = null;
    }
    protected function get_freelancer_services($jobseeker_id){
        $sql= "SELECT * FROM services  WHERE jobseeker_id=?;";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$jobseeker_id]);
        $result = $stmt->fetchAll();
        if(!$result ){
            return self::fail;
            $stmt = null;
        }else{
            return  $result;
            $stmt = null;
        }
    }
    protected function get_this_service($service_id){
        $sql= "SELECT * FROM services  WHERE service_id=?;";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$service_id]);
        $result = $stmt->fetch();
        if(!$result ){
            return self::fail;
            $stmt = null;
        }else{
            return  $result;
            $stmt = null;
        }
    }
    protected function add_this_service($jobseeker_id,$price,$name){
        $sql= "INSERT INTO services (jobseeker_id,name,price) VALUES (?,?,?);";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$jobseeker_id,$name,$price]);
        return  array('message' => 'Service successfully added!');
        $stmt = null;
    }
    protected function update_this_service($service_id,$price,$name){
        $sql= "UPDATE services SET name=?,price=? WHERE service_id=?;";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$name,$price,$service_id]);
        return  array('message' => 'Service successfully updated!');
        $stmt = null;
    }
    protected function delete_this_service($service_id){
        $sql= "DELETE FROM services  WHERE service_id=?;";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$service_id]);
        return  array('message' => 'Service successfully deleted!');
        $stmt = null;
    }
    protected function get_freelancer_portfolio($jobseeker_id){
        $sql= "SELECT * FROM portfolio  WHERE jobseeker_id=?;";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$jobseeker_id]);
        $result = $stmt->fetchAll();
        if(!$result ){
            return self::fail;
            $stmt = null;
        }else{
            return  $result;
            $stmt = null;
        }
    }
    protected function get_this_portfolio($portfolio_id){
        $sql= "SELECT * FROM portfolio  WHERE portfolio_id=?;";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$portfolio_id]);
        $result = $stmt->fetch();
        if(!$result ){
            return self::fail;
            $stmt = null;
        }else{
            return  $result;
            $stmt = null;
        }
    }
    protected function add_this_portfolio($jobseeker_id,$url_link,$description,$type){
        $sql= "INSERT INTO portfolio (jobseeker_id,url_link,description,type) VALUES (?,?,?,?);";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$jobseeker_id,$url_link,$description,$type]);
        return  array('message' => 'Portfolio successfully added!');
        $stmt = null;
    }
    public function update_this_portfolio($portfolio_id,$url_link,$description,$type){
        $sql= "UPDATE portfolio SET url_link=?,description=?,type=? WHERE portfolio_id=?;";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$url_link,$description,$type,$portfolio_id]);
        return  array('message' => 'Portfolio successfully updated!');
        $stmt = null;
    }
    protected function delete_this_portfolio($portfolio_id){
        $sql= "DELETE FROM portfolio  WHERE portfolio_id=?;";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$portfolio_id]);
        return  array('message' => 'Portfolio successfully deleted!');
        $stmt = null;
    }
}