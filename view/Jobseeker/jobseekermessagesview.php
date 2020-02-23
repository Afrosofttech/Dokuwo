<?php

include_once 'model/companymodel.php';

class JobseekerMessagesView extends Company{
    public function new_unread_messages($recipient_id){
        $allUnreadMessages = $this->get_new_unread_messages($recipient_id);
        return $allUnreadMessages;
    }
}