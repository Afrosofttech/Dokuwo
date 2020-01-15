<?php
include_once 'dbhmodel.php';

class Company extends Dbh{
    
    public function get_company($login_id){
        $sql = " Select * from company where login_id = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$login_id]);
        $result = $stmt->fetch();
        try {
            if(!$result ){
                throw new Exception('This company doesn\'t exist.');
            }
           return  $result ;
           $stmt = null;
        } catch (Exception $e) {
            return   $e->getMessage();
            $stmt = null;
        } 
    }

    public function get_no_of_jobs_published($company_id){
        $sql = " Select * from job where company_id = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$company_id]);
        $rowCount = $stmt->rowCount();
        if(!$rowCount) return ('No rows');
        return $rowCount;
        $stmt = null;
    }

    public function get_no_of_new_messages($recipient_id){
        $sql = " Select * from message_recipient where recipient_id = ? AND is_read = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$recipient_id,0]);
        $rowCount = $stmt->rowCount();
        if(!$rowCount) return ('No rows');
        return $rowCount;
        $stmt = null;
    }

    public function get_reference_of_all_inbox_messages($recipient_id){
        $sql = " Select message_id from message_recipient where recipient_id = ? AND delete_request != ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$recipient_id,1]);
        $result = $stmt->fetchAll();
       if(!$result ){
                return 0;
                $stmt = null;
        }else{
            return  $result ;
            $stmt = null;
        }
    }

    public function get_all_inbox_messages($message_id){
        $sql = " Select * from message where message_id = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$message_id]);
        $result = $stmt->fetchAll();
        return  $result;
        $stmt = null;
    }
   
    public function delete_this_message($message_id){
        $sql = " UPDATE message_recipient SET delete_request = ?  WHERE message_id = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute(['1',$message_id]);
        return 200;
        $stmt = null;

    }

    public function set_message_is_read($message_id){
        $sql = " UPDATE message_recipient SET is_read = ?  WHERE message_id = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute(['1',$message_id]);
        return 200;
        $stmt = null;
    }

    public function get_read_messages($recipient_id){
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

    public function get_all_sent_messages($recipient_id){
        $sql = " Select * from message where creator_id = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$recipient_id]);
        $result = $stmt->fetchAll();
        return  $result;
        $stmt = null;
    }

    public function get_message_recipient($message_id){
        $sql = " Select * from message_recipient where message_id = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$message_id]);
        $result = $stmt->fetch();
        $res = $result['recipient_id'];
         
        $sql = " Select * from job_seeker where login_id = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$res]);
        $result = $stmt->fetch();


        return  $result;
        $stmt = null;
    }
    
    public function get_new_unread_messages($recipient_id){
        $sql = " Select message_id from message_recipient where recipient_id = ? AND is_read = ?";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([$recipient_id,0]);
        $result = $stmt->fetchAll();
       if(!$result ){
                return 0;
                $stmt = null;
        }else{
            return  $result ;
            $stmt = null;
        }
    }
    public function get_all_jobseekers(){
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
    //    if(!$result ){
    //             return 0;
    //             $stmt = null;
    //     }else{
    //         return  $result ;
    //         $stmt = null;
    //     }
   // }

    //     $sql = " Select * from company where login_id = ?";
    //     $stmt = $this->connect()->prepare($sql);
    //     $stmt->execute([$creator_id]);
    //     $result = $stmt->fetchAll();
    //     return  $result;
    //     $stmt = null;
    // }

    // public function is_the_profile_complete($company_id){
    //     $sql = " Select * from  where company_id = ?";
    //     $stmt = $this->connect()->prepare($sql);
    //     $stmt->execute([$company_id]);
    //     $rowCount = $stmt->rowCount();
    //     if(!$rowCount) return ('No rows');
    //     return $rowCount;
    //     $stmt = null;
    // }
}
