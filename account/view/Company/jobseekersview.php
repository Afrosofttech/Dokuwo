<?php

include_once 'model/companymodel.php';

class JobseekersView extends Company{

    public function categories_of_jobseekers(){
        $categories = $this->get_categories_of_jobseekers();
        return $categories;
    }
    public function jobseekers_of_this_category($category){
        $response = $this->get_jobseekers_of_this_category($category);
        return $response;
    }
}