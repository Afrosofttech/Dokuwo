<?php
include_once 'model/jobseekermodel.php';
class JobseekerSettingsController extends Jobseeker{
    public function update_jobseeker(){
        $v_data = self::validate_jobseeker();
        $Details = $this->get_jobseeker($v_data['login_id']); //to be changed
        $hash = md5(rand(0,1000));
        ($v_data['password'] != "")? $password = password_hash($v_data['password'], PASSWORD_DEFAULT) : $password = $v_data['password'];
        $valid_extensions = array('jpeg', 'jpg', 'png');
        $path = 'uploads/';
        $img = $_FILES["Imgage"]["name"]; 
        $tmp = $_FILES["Imgage"]["tmp_name"]; 
        $errorimg = $_FILES["Imgage"]["error"];
        //@ams->cv
        $cvPath = 'uploads/';
        $valid_extensions_cv = array('jpeg', 'jpg', 'png', 'pdf' , 'doc' , 'ppt');
        $cv = $_FILES["CV"]["name"]; 
        $cv_tmp = $_FILES["CV"]["tmp_name"];
        $errorcv = $_FILES["CV"]["error"];

        if($img=="") $final_image = "";
        else{
        $final_image = strtolower(rand(1000,1000000).$img);
        $ext = strtolower(pathinfo($img, PATHINFO_EXTENSION));
        if(in_array($ext, $valid_extensions)){ 
           if($Details[0]['image'] !==""){
              if($Details[0]['image'] !== null)
              unlink($path.$Details[0]['image']);
           }
            $path = $path.strtolower($final_image);
            move_uploaded_file($tmp,$path);
        }else{
            return 'Invalid Image';
        }
       }
       if($cv=="") $final_cv = "";
       else{
        $final_cv = strtolower(rand(1000,1000000).$cv);
        $ext_cv = strtolower(pathinfo($cv, PATHINFO_EXTENSION));
        if(in_array($ext_cv, $valid_extensions_cv)){ 
            if($Details[0]['CV'] !==""){
               if($Details[0]['CV'] !== null)
               unlink($cvPath.$Details[0]['CV']);
            }
            $cvPath = $cvPath.strtolower($final_cv);
            move_uploaded_file($cv_tmp,$cvPath);
            }else{
               return 'Invalid CV';
            }
       }

        $res = $this->update_jobseeker_profile($v_data['login_id'],$v_data['fName'],$v_data['lName'],$v_data['email'],$v_data['phone'],$v_data['country'],$v_data['address'],$password,$v_data['dateofbirth'],$v_data['category'],$v_data['skills'],$v_data['tag_line'],$v_data['education_level'],$v_data['dateofbirth'],$final_image,$final_cv);
        return $res;
    }
    function validate_jobseeker(){
         require "gump.class.php";
         $gump = new GUMP();
        
         $_POST = $gump->sanitize($_POST);
        
         $gump->validation_rules(array(
            'fName'     => 'required|alpha_space|max_len,100',
            'lName'     => 'required|alpha_space|max_len,100',
            'email'    => 'required|valid_email',
         ));
        
         $gump->filter_rules(array(
            'fName'      => 'trim|sanitize_string',
            'lName'      => 'trim|sanitize_string',
            'email'     => 'trim|sanitize_email',
         ));
        
         $jobseeker_data = $gump->run($_POST);
        
         if($jobseeker_data === false) {
            return $gump->get_readable_errors(true);
         } else {
            return $jobseeker_data; // validation successful
         }
        }
}