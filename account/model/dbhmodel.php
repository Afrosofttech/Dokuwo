<?php

class Dbh {
    
    private $host = getenv('HOST');
    private $username = getenv('USERNAME');
    private $password = getenv('PASSWORD');
    private $dbname = getenv('DATABASE_NAME');
//         private $host = "v5bu25tv32c79mxn.chr7pe7iynqr.eu-west-1.rds.amazonaws.com";
//         private $username = "lj7ihg7dfn9h9zkt";
//         private $password = "a9kr4hk23y9uxifh";
//         private $dbname = "primary_app_db";

protected function connect(){
    $dsn ='mysql:host=' .$this->host. ';dbname=' .$this->dbname;
    $pdo = new PDO($dsn,$this->username,$this->password);    
    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);

    return $pdo;
}

}
?>
