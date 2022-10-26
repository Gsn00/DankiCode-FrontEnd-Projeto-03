<?php

require 'classes/PHPMailer/src/Exception.php';
require 'classes/PHPMailer/src/PHPMailer.php';
require 'classes/PHPMailer/src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

$email = new PHPMailer();
$email->isSMTP();
$email->Host = "smtp.gmail.com";
$email->SMTPAuth = "true";
$email->SMTPSecure = "tls";
$email->Port ="587";
$email->Username = "";
$email->Password = "";
$email->Subject = "Email de teste from localhost";
$email->setFrom("");
$email->Body = 'Este e um email de teste pelo localhost ';
$email->addAddress("");
if($email->Send()){
	return true;
}else{
    return false;
}
$email->smtpClose();