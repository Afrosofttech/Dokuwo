<?php
include_once 'model/companymodel.php';
include_once 'includes/functions.php';
class SettingsController extends Company{

    public function update_company(){
        $v_data = validate_company();
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
}