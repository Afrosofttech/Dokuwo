<?php
require_once 'model/companymodel.php';
require('/app/vendor/autoload.php');

define('BUCKET', getenv('S3_BUCKET_UPLOADS'));
class MessagesController extends Company{
  
    public function delete_message($message_id){
        $res = $this->delete_this_message($message_id);
        return $res;
    }
    public function delete_sent_message($message_id){
        $res = $this->delete_this_sent_message($message_id);
        return $res;
    }
    public function message_is_read($message_id){
        $res = $this->set_message_is_read($message_id);
        return $res;
    }
    public function send_msg_to_jobseeker(){
        $s3 = new Aws\S3\S3Client([
            'version'  => 'latest',
            'region'   => 'us-east-1',
        ]);
        $count = sizeof($_FILES);
        $Images = array();
        if($count>1){
            foreach ($_FILES as $key => $value) {
                if($key != 'files') array_push($Images,$value);
                else continue;
            } 
            $allowTypes = array('jpeg', 'jpg', 'png', 'pdf' , 'doc' , 'docx' , 'txt', 'zip'); 
            //check here if all images are of accepted extensions b4 proceeding
              foreach ($Images as $key=>$val) {
                $fileType = strtolower(pathinfo($val['name'], PATHINFO_EXTENSION)); 
                if(in_array($fileType, $allowTypes)) continue;
                else return array('message' => 'Only jpeg, jpg, png, pdf , doc , docx, txt, zip files are allowed', 'status'=> 'error'); 
              }

        $res = $this->send_msg_to_a_jobseeker($_POST['creator_id'],$_POST['creator_name'],$_POST['recipient_id'],$_POST['recipient_name'],$_POST['parent_msg_id'],$_POST['subject'],$_POST['msg_body'],'withAttachment');
            foreach($Images as $key=>$val){ 
                    // File upload path 
                    // $targetDir = "uploads/";
                    $fileName = $val['name']; 
                    $tempFileName = $val['tmp_name'];
                    $final_fileName = rand(1000,1000000).$fileName;
                    // $targetFilePath = $targetDir.strtolower($final_fileName); 
                    // Check whether file type is valid 
                    $fileType = strtolower(pathinfo($fileName, PATHINFO_EXTENSION)); 
                    // move_uploaded_file($tempFileName,$targetFilePath);
                    $content_map = array('jpeg' => 'image/jpeg','jpg' => 'image/jpeg','png' => 'image/png','pdf' => 'application/pdf','doc' => 'application/msword','docx' => 'application/msword','txt' => 'text/plain','zip' => 'application/zip');
                    $contentType = $this->content_type($fileType,$allowTypes,$content_map);
                    $upload = $s3->putObject([
                       'Bucket' => BUCKET,
                       'Key'    => $final_fileName,
                       'Body'   => fopen($tempFileName, 'r'),
                       'ACL'    => 'public-read',
                       'ContentType' => $contentType
                   ]);
                    //call func to run sql query to add file to attachments
                   $this->save_attachment($res,$final_fileName);
            }
            return array('message' => 'message successfully sent!', 'status' => 'success');
        }else{
        $res = $this->send_msg_to_a_jobseeker($_POST['creator_id'],$_POST['creator_name'],$_POST['recipient_id'],$_POST['recipient_name'],$_POST['parent_msg_id'],$_POST['subject'],$_POST['msg_body']);
        return $res;
        }
    }
    // get the image content-type
    public function content_type($ext,$valid_extensions,$content_map){
        $key = array_keys($valid_extensions, $ext);
        return $content_map[$valid_extensions[$key[0]]];
    }
    public function forward_msg_to_jobseeker($creator_id,$creator_name,$_recipient_id,$recipient_name,$message_id){
        $res =$this->forward_msg_to_a_jobseeker($creator_id,$creator_name,$_recipient_id,$recipient_name,$message_id);
        return $res;
    }
}