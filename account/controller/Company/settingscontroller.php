<?php
include_once 'model/companymodel.php';
class SettingsController extends Company{

    public function update_company(){
        $v_data = self::validate_company();
        $hash = md5(rand(0,1000));
        ($v_data['password'] != "")? $password = password_hash($v_data['password'], PASSWORD_DEFAULT) : $password = $v_data['password'];
        $valid_extensions = array('jpeg', 'jpg', 'png');
        $path = 'uploads/';
        $img = $_FILES["logo"]["name"]; 
        $tmp = $_FILES["logo"]["tmp_name"]; 
        $errorimg = $_FILES["logo"]["error"];
        if($img=="") $final_image ="";
        else{
        //@ams-account for no image update-> related to invalid
        $final_image = rand(1000,1000000).$img;
        $ext = strtolower(pathinfo($img, PATHINFO_EXTENSION));
        if(in_array($ext, $valid_extensions)){ 
           $Details = $this->get_company($v_data['login_id']);
           if($Details['logo'] !== null || $Details['logo'] !=="")
                unlink($path.$Details['logo']);
            $path = $path.strtolower($final_image);
            move_uploaded_file($tmp,$path);
        }else{
            return 'Invalid';  //@ams-> make sure this is also considered as a return value
       }
    }
        $res = $this->update_company_profile($v_data['login_id'],$v_data['name'],$v_data['email'],$v_data['phone'],$v_data['country'],$v_data['address'],$password,$v_data['currency'],$v_data['code'],$final_image);
        return $res;
    }
    function validate_company(){
        //@ams->both company signup and update company profile are using this.To be changed
         require "gump.class.php";
         $gump = new GUMP();
        
         $_POST = $gump->sanitize($_POST); // You don't have to sanitize, but it's safest to do so.
        
         $gump->validation_rules(array(
            'name'     => 'required|alpha_space|max_len,100',
            'email'    => 'required|valid_email',
         ));
        
         $gump->filter_rules(array(
            'name'      => 'trim|sanitize_string',
            'email'     => 'trim|sanitize_email',
         ));
        
         $company_data = $gump->run($_POST);
        
         if($company_data === false) {
            return $gump->get_readable_errors(true);
         } else {
            return $company_data; // validation successful
         }
        }
}