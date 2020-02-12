<?php

include_once 'model/companymodel.php';

class MessagesView extends Company{
      
    public function no_of_new_messages($recipient_id){
      $noOfNewRecievedMessages = $this->get_no_of_new_messages($recipient_id);
      return $noOfNewRecievedMessages;
    }
    public function all_inbox_messages($recipient_id){
        $referenceOffAllInboxMessages = $this->get_reference_of_all_inbox_messages($recipient_id);
        //$messageArray = [];
        $messageArray = array();
        if($referenceOffAllInboxMessages == 0){
            return $referenceOffAllInboxMessages;
        }else{
        foreach ($referenceOffAllInboxMessages as $key => $value) {
                $allInboxMessages = $this->get_all_inbox_messages($value['message_id']);
                array_push($messageArray, $allInboxMessages);
                //$messageArray[$key] = $allInboxMessages;
                //return $allInboxMessages;
            }
        return $messageArray;
        }
    }
    public function read_messages($recipient_id){
       $res = $this->get_read_messages($recipient_id);
       return $res;
    }
    public function all_sent_messages($creator_id){
        $allSentMessages = $this->get_all_sent_messages($creator_id);
        return $allSentMessages;
    }
    public function new_unread_messages($recipient_id){
        $allUnreadMessages = $this->get_new_unread_messages($recipient_id);
        $messageArray = array();
        if($allUnreadMessages == 0){
            return $allUnreadMessages;
        }else{
            foreach ($allUnreadMessages as $key => $value) {
                    $res = $this->get_all_inbox_messages($value['message_id']);
                    array_push($messageArray, $res);
                }
            return $messageArray;
            }
    }
    public function retreive_all_jobseekers(){
      $listOfAllJobseekers =$this->get_all_jobseekers();
      return $listOfAllJobseekers;  
    }

}