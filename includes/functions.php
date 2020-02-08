<?php

function validate_data(){
    require "gump.class.php";
    
    $gump = new GUMP();

    $_POST = $gump->sanitize($_POST); // You don't have to sanitize, but it's safest to do so.

    $gump->validation_rules(array(
       'email'       => 'required|valid_email',
       'password'    => 'required|max_len,100|min_len,8',
    ));

    $gump->filter_rules(array(
       'email'    => 'trim|sanitize_email',
       'password' => 'trim',
    ));

    $validated_data = $gump->run($_POST);

    if($validated_data === false) {
       return $gump->get_readable_errors(true);
    } else {
       return $validated_data; // validation successful
    }
}

function validate_jobseeker(){
    require "gump.class.php";
   
    $gump = new GUMP();

    $_POST = $gump->sanitize($_POST); // You don't have to sanitize, but it's safest to do so.
    //@techjobis-> i have replaced most alpha_numeric with alpha_space cus names can be multiple and need to allow spaces between
    $gump->validation_rules(array(
       'firstname'   => 'required|alpha_space|max_len,100', 
       'lastname'    => 'required|alpha_space|max_len,100',
       'email'       => 'required|valid_email',
    ));

    $gump->filter_rules(array(
       'firstname' => 'trim|sanitize_string',
       'lastname'  => 'trim|sanitize_string',
       'email'     => 'trim|sanitize_email',
    ));

    $validated_data = $gump->run($_POST);

    if($validated_data === false) {
       return $gump->get_readable_errors(true);
    } else {
       return $validated_data; // validation successful
    }
}

function validate_company(){
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