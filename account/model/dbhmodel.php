<?php

class Dbh {
    
    private $host = getenv('HOST');
    private $username = getenv('USERNAME');
    private $password = getenv('PASSWORD');
    private $dbname = getenv('DATABASE_NAME');

protected function connect(){
    $dsn ='mysql:host=' .$this->host. ';dbname=' .$this->dbname;
    $pdo = new PDO($dsn,$this->username,$this->password);    
    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);

    return $pdo;
}

}
?>
