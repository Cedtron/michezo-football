<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $to = "cedricallan16@gmail.com";
    $headers = "From: $email\r\n";
    $headers .= "Content-type: text/html; charset=utf-8\r\n";

    $emailContent = "
        <html>
        <head>
            <title>Contact Form Submission</title>
        </head>
        <body>
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> $name</p>
            <p><strong>Email:</strong> $email</p>
            <p><strong>Subject:</strong> $subject</p>
            <p><strong>Message:</strong> $message</p>
        </body>
        </html>
    ";

    mail($to, $subject, $emailContent, $headers);

    echo "success"; // You can send a more informative response if needed
}
?>