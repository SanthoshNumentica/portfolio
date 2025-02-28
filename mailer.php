<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    $mail = new PHPMailer(true);

    try {
        // SMTP Configuration
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'sadaiyappancse@gmail.com'; 
        $mail->Password = 'cfdbokerzawjuyax';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Email Headers
        $mail->setFrom($email, $name);
        $mail->addAddress('santhosh@itoi.org');

        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body = "<h2>Contact Form Submission</h2>
                       <p><strong>Name:</strong> $name</p>
                       <p><strong>Email:</strong> $email</p>
                       <p><strong>Subject:</strong> $subject</p>
                       <p><strong>Message:</strong><br>$message</p>";

        $mail->send();
        echo "success";
    } catch (Exception $e) {
        echo "Mail Error: {$mail->ErrorInfo}";
    }
} else {
    echo "Invalid Request!";
}
?>
