<?php

define('HOST',  getenv('HOST'));
define('USERNAME', getenv('USERNAME'));
define('PASSWORD',  getenv('PASSWORD'));
define('DATABASE_NAME', getenv('DATABASE_NAME'));
class Dbh {
    
    protected function connect(){
        $dsn ='mysql:host=' .HOST. ';dbname=' .DATABASE_NAME;
        $pdo = new PDO($dsn,USERNAME,PASSWORD);    
        $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);

        return $pdo;
    }

}
?>
