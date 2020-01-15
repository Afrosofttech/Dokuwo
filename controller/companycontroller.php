<?php
include_once 'model/companymodel.php';

class CompanyController extends Company{
  
    public function delete_message($message_id){
        $res = $this->delete_this_message($message_id);
        return $res;
    }
    public function message_is_read($message_id){
        $res = $this->set_message_is_read($message_id);
        return $res;
    }
}