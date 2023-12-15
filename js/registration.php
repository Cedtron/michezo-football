<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Your existing registration form handling logic

    // Sample data for demonstration purposes
    $fullName = $_POST['fullName'];
    $email = $_POST['email'];
    $childName = $_POST['childName'];
    // ... other fields ...

    $to = $email;
    $subject = "Registration Confirmation";
    $headers = "From: cedricallan16@gmail.com\r\n";
    $headers .= "Content-type: text/html; charset=utf-8\r\n";

    $emailContent = "
        <html>
        <head>
            <title>Registration Confirmation</title>
        </head>
        <body>
            <h2>Thank you for registering with Michezo Academy!</h2>
            <p><strong>Parent's Full Name:</strong> $fullName</p>
            <p><strong>Email:</strong> $email</p>
            <p><strong>Child's Full Name:</strong> $childName</p>
            <!-- Add other registration details as needed -->
            <p>We'll be in touch soon with further details.</p>
        </body>
        </html>
    ";

    mail($to, $subject, $emailContent, $headers);

    echo "success"; // You can send a more informative response if needed
}
?>