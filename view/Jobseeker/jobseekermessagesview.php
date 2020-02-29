<?php

include_once 'model/jobseekermodel.php';

class JobseekerMessagesView extends Jobseeker{
    public function new_unread_messages($recipient_id)
    {
        $allUnreadMessages = $this->get_new_unread_messages($recipient_id);
        return $allUnreadMessages;
    }
    public function no_of_new_messages($recipient_id)
    {
        $noOfNewRecievedMessages = $this->get_no_of_new_messages($recipient_id);
        return $noOfNewRecievedMessages;
    }
    public function all_inbox_messages($login_id)
    {//@ams->check when no message is received. Pls fix 
        $allInboxMessages = $this->get_all_inbox_messages($login_id);
        return $allInboxMessages;
    }
    public function read_messages($recipient_id){
        $res = $this->get_read_messages($recipient_id);
        return $res;
     }
    public function all_sent_messages($creator_id){
        $allSentMessages = $this->get_all_sent_messages($creator_id);
        return $allSentMessages;
    }
    public function retreive_all_companies(){
        $listOfAllCompanies =$this->get_all_companies();
        return $listOfAllCompanies;  
    }
}