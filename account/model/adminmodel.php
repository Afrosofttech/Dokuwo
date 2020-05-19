<?php
include_once 'dbhmodel.php';

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
}