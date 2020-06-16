<?php

include_once 'model/adminmodel.php';

class AdminView extends Admin{
    public function get_admin_blogs($admin_id){
        $result = $this->get_blog_by_admin($admin_id);
        return $result;
    }

    public function filter_blogs($title,$category)
    {
        $blogs = $this->filterBlogs($title,$category);
        return $blogs;
    }

    public function get_all_recruiter_accounts(){
        $result = $this->get_recruiter_accounts();
        return $result;  
    }
    public function get_all_jobseeker_accounts(){
        $result = $this->get_jobseeker_accounts();
        return $result;  
    }
    public function get_all_admin_accounts(){
        $result = $this->get_admin_accounts();
        return $result;  
    }
    public function get_admin_profile($login_id){
        $admin = $this->get_admin($login_id);
        return $admin;
    }
}