<?php
if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['phone']))
{
    $name = trim(filter_var($_POST['name'],FILTER_SANITIZE_STRING));
    $email = trim(filter_var($_POST['email'],FILTER_SANITIZE_EMAIL));
    $phone = trim(filter_var($_POST['phone'],FILTER_SANITIZE_STRING));
    $phoneRegExp = "/^0[2-9]\d{7,8}$/";

    if($name && $email && preg_match($phoneRegExp,$phone)){
        $dbcon = 'mysql:host=localhost;dbname=call;charset=utf8';
        $db= new PDO($dbcon,'root','');
        $sql= "INSERT INTO contacts VALUES(null,?,?,?,NOW())";
        $query = $db->prepare($sql);
       $res= $query->execute([$name,$email,$phone]);
       print_r($res);
       if($res){
        echo true;
       }

    }
}