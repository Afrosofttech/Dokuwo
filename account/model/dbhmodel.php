<?php

class Dbh {

    private $host = "kl28h27lwgjntlbt.chr7pe7iynqr.eu-west-1.rds.amazonaws.com";
    private $username = "euswoktlhfjaakft"; 
    private $password = "vhyoh0gvvc7mrp64";
    private $dbname = "	primary_app_db";

protected function connect(){

    $dsn ='mysql:host=' .$this->host. ';dbname=' .$this->dbname;
            var_dump($dsn);
    $pdo = new PDO($dsn,$this->username,$this->password);    
    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);

    return $pdo;
}

}
?>
