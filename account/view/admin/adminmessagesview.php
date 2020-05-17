<?php

include_once 'model/adminmodel.php';

class AdminMessagesView extends Admin{
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
    public function read_messages($recipient_id)
    {
        $res = $this->get_read_messages($recipient_id);
        return $res;
    }
    public function get_message($msg_id)
    {
        $allInboxMessages = $this->get_this_message($msg_id);
        return $allInboxMessages;
    }
    public function new_unread_messages($recipient_id)
    {
        $allUnreadMessages = $this->get_new_unread_messages($recipient_id);
        return $allUnreadMessages;
    }
    public function all_sent_messages($creator_id)
    {
        $allSentMessages = $this->get_all_sent_messages($creator_id);
        return $allSentMessages;
    }
    public function retreive_all_users()
    {
        $listOfAllUsers =$this->get_all_users();
        return $listOfAllUsers;  
    }
}