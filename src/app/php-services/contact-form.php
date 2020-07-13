<?php
    debugger
    if(!isset($_POST['submit'])) {
        echo "error; you need to submit the form!";
    }

    $name = $_POST['Name'];
    $message = $_POST['Message'];
    $sender_email = $_POST['Email'];

    // Validate First
    if(empty($name) || empty($sender_email)) {
        echo "Name and email are mandatory";
        exit;
    }

    $email_subject = "New Form Submission";
    $email_body = "You have received a new messaage from the user $name. \n".
        "email address: $sender_email\n".
        "Here is the message:\n$message".

    $to = "jake4171998@yahoo.com";
    $headers = "From: $sender_email \r\n";

    // Send email
    mail($to, $email_subject, $email_body, $headers);
?>