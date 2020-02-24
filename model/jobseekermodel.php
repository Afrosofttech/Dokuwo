<?php
include_once 'dbhmodel.php';

class Jobseeker extends Dbh{

    const success = 200;
    const fail = 400;
    protected function get_jobseeker_profile_details($login_id)
    {
        $sql="SELECT login.email,login.password,job_seeker.login_id,fname,lname,fullName,phone, category, skills,tag_line,education_level,address,address,dob,country ,image,CV FROM login INNER JOIN job_seeker ON login.login_id = job_seeker.login_id WHERE login.login_id=?;";
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
    protected function update_jobseeker_profile($login_id,$fName,$lName,$email,$phone,$country,$address,$password,$dob,$category,$skills,$tag_line,$education_level,$dateofbirth,$final_image,$final_cv)
    {
        if($final_image == ""){
          $ams= 'AMS-JR';
        }
        $fullname = $fName.' '.$lName;
        if(($final_image == "" || $final_image == null) && ($final_cv == "" || $final_cv == null)){
            $sql = "UPDATE job_seeker SET fname=?,lname=?,fullName=?,phone=?,category=?,skills=?,tag_line=?,education_level=?,address=?,dob=?,country=? WHERE login_id=?;";
        }else if($final_cv == "" || $final_cv == null){
            $sql = "UPDATE job_seeker SET fname=?,lname=?,fullName=?,phone=?,category=?,skills=?,tag_line=?,education_level=?,address=?,dob=?,country=?,image=? WHERE login_id=?;";
        }else if($final_image == "" || $final_image ==  null){
            $sql = "UPDATE job_seeker SET fname=?,lname=?,fullName=?,phone=?,category=?,skills=?,tag_line=?,education_level=?,address=?,dob=?,country=?,CV=? WHERE login_id=?;";
        }else{
            $sql = "UPDATE job_seeker SET fname=?,lname=?,fullName=?,phone=?,category=?,skills=?,tag_line=?,education_level=?,address=?,dob=?,country=?,image=?,CV=? WHERE login_id=?;";
        }
        if(($final_image == "" || $final_image == null) && ($final_cv == "" || $final_cv == null)){
            $det = [$fName,$lName,$fullname,$phone,$category,$skills,$tag_line,$education_level,$address,$dob,$country,$login_id];
        }else if($final_image == "" || $final_image == null){
            $det = [$fName,$lName,$fullname,$phone,$category,$skills,$tag_line,$education_level,$address,$dob,$country,$final_cv,$login_id];
        }else if($final_cv == "" || $final_cv == null){
            $det = [$fName,$lName,$fullname,$phone,$category,$skills,$tag_line,$education_level,$address,$dob,$country,$final_image,$login_id];
        }else{
            $det = [$fName,$lName,$fullname,$phone,$category,$skills,$tag_line,$education_level,$address,$dob,$country,$final_image,$final_cv,$login_id];
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
}