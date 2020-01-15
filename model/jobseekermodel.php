<?php
include_once 'dbhmodel.php';

class Jobseeker extends Dbh{

    public function get_no_of_job_seekers(){ 
        $sql = "Select * from job_seeker";
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute([]);
        $rowCount = $stmt->rowCount();
//         try {
//             if(!$rowCount ){
//                 throw new Exception('Division by zero.');
//             }
//            return  $rowCount ;
//            $stmt = null;
//         } catch (Exception $e) {
//             return   $e->getMessage();
//             $stmt = null;
//         } 
//   }
  return  $rowCount ;
  $stmt = null;
  }
//   public function get_message_creator($creator_id){
//     $sql = " Select * from job_seeker where login_id = ?";
//     $stmt = $this->connect()->prepare($sql);
//     $stmt->execute([$creator_id]);
//     $result = $stmt->fetchAll();
//     return  $result;
//     $stmt = null;
// }

}