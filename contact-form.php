<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["Name"];
    $phone = $_POST["PhoneNumber"];
    $email = $_POST["Email"];
    $message = $_POST["Message"];

    $to = "theshakegroupltd@gmail.com";
    $subject = "New Contact Form Submission";
    $headers = "From: $email";

    $email_content = "Name: $name\n";
    $email_content .= "Phone Number: $phone\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Message:\n$message\n";

    if (mail($to, $subject, $email_content, $headers)) {
        echo "Message sent successfully!";
    } else {
        error_log("Error sending email: " . error_get_last()['message']);
        echo "Error sending message.";
    }
}
?>
