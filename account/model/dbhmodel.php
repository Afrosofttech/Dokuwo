<?php

define('HOST',  getenv('HOST'));
define('USERNAME', getenv('USERNAME'));
define('PASSWORD',  getenv('PASSWORD'));
define('DATABASE_NAME', getenv('DATABASE_NAME'));
class Dbh {
    
//         private $host = "v5bu25tv32c79mxn.chr7pe7iynqr.eu-west-1.rds.amazonaws.com";
//         private $username = "lj7ihg7dfn9h9zkt";
//         private $password = "a9kr4hk23y9uxifh";
//         private $dbname = "primary_app_db";

protected function connect(){
    $dsn ='mysql:host=' .HOST. ';dbname=' .DATABASE_NAME;
    $pdo = new PDO($dsn,USERNAME,PASSWORD);    
    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);

    return $pdo;
}

}
?>
