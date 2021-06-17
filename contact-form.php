<?php

if (isset($_POST['submit'])) {
    // code...
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $mailfrom = $_POST['email'];
    $message = $_POST['message'];

    $mailto='namankansaldui2000@gmail.com';
    $headers = "From: ".$mailfrom;
    $text = "You have received an email from ".$name."\n\n".$message;

    mail($mailTo, $subject, $text, $headers);
}

 ?>
