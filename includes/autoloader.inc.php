<?php
spl_autoload_register(function($class_name) {
    $dirs = array(
        'view/',
        'controller/',
    );
    $subDirs = array(
        '/Admin/',
        '/Authenticate/',
        '/Company/',
        '/Jobseeker/',
    );
    foreach( $dirs as $dir ) {
        foreach ($subDirs as $sub) {
        if (file_exists($dir.$sub.strtolower($class_name).'.php')) {
            require_once($dir.$sub.strtolower($class_name).'.php');
            return;
        }
    }
    }
});