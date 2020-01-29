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
        //if(!$rowCount) return ('No rows');
        if(!$rowCount) return 0;
        return $rowCount;
        $stmt = null;
    }

    public function get_reference_of_all_inbox_messages($recipient_id){
        $sql = " Select message_id from message_recipient where recipient_id = ? AND delete_request != ? ORDER BY mess_rec_id DESC";
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
        $sql = " Select * from message where creator_id = ? order by create_date desc";
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

    public function send_msg_to_a_jobseeker($creator_id,$creator_name,$recipient_id,$recipient_name,$parent_msg_id,$Subject,$messageBody){

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
        
        // try {
        //     // $pdo->beginTransaction();
        //     $stmt1 = $this->connect()->prepare("INSERT INTO message (creator_id, creator_name, subject,message_body,create_date) VALUES (?, ?, ?, ?, ?)");
        //     $stmt2 = $this->connect()->prepare("INSERT INTO message_recipient (recipient_id, creator_name, subject,message_body,create_date) VALUES (?, ?, ?, ?, ?)");
        //     if(!$stmt1->execute(['Rick', 'NY'])) throw new Exception('Stmt 1 Failed');
        //     else if(!$stmt2->execute([27, 139])) throw new Exception('Stmt 2 Failed');
        //     $stmt1 = null;
        //     $stmt2 = null;
        //     $pdo->commit();
        //   } catch(Exception $e) {
        //     $pdo->rollback();
        //     throw $e;
        //   }
    }
    public function reply_to_jobseeker($creator_id,$creator_name,$recipient_id,$recipient_name,$parent_msg_id,$subject,$msg_body){
        //same as the above function . so they should be one
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
