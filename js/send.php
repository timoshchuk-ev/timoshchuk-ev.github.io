 ​<?php

    $email = $_POST['mail'];
    $name = $_POST['name'];

    $to = "test@mail.ru";
    $subject = "Новая заявка";

    $header = "Content-type: text/html; charset=utf-8\r\n";
    $header .= "MIME-Version: 1.0\r\n";
    
    $sending = mail($to, $subject $headers);


    ?>
