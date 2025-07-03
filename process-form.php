<?php
ini_set('display_errors', 0);
error_reporting(0);

// Load environment variables
$env_file = file_exists('../.env') ? '../.env' : '.env';
if (file_exists($env_file)) {
    $env = file_get_contents($env_file);
    $lines = explode("\n", $env);
    foreach ($lines as $line) {
        if (strpos($line, '=') !== false && !str_starts_with(trim($line), '#')) {
            list($key, $value) = explode('=', $line, 2);
            $_ENV[trim($key)] = trim($value);
        }
    }
}

// Clear any previous output
if (ob_get_length()) {
    ob_clean();
}

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// For AJAX requests
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_SERVER['CONTENT_TYPE']) && strpos($_SERVER['CONTENT_TYPE'], 'application/json') !== false) {
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);
    
    // Log the submission for debugging
    error_log("Received form submission: " . print_r($data, true));
    
    if (!isset($data['name']) || !isset($data['email']) || !isset($data['message']) || !isset($data['recaptcha'])) {
        echo json_encode(['success' => false, 'message' => 'Missing required fields']);
        exit;
    }
    
    $name = filter_var($data['name'], FILTER_SANITIZE_STRING);
    $email = filter_var($data['email'], FILTER_SANITIZE_EMAIL);
    $message = filter_var($data['message'], FILTER_SANITIZE_STRING);
    $recaptcha = $data['recaptcha'];
} 
// For traditional form submissions
else if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (!isset($_POST['name']) || !isset($_POST['email']) || !isset($_POST['message']) || !isset($_POST['g-recaptcha-response'])) {
        echo json_encode(['success' => false, 'message' => 'Missing required fields']);
        exit;
    }
    
    $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);
    $recaptcha = $_POST['g-recaptcha-response'];
} else {
    http_response_code(405); // Method Not Allowed
    echo json_encode(['success' => false, 'message' => 'Invalid request method']);
    exit;
}

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['success' => false, 'message' => 'Invalid email address']);
    exit;
}

// Verify reCAPTCHA
$secret_key = $_ENV['RECAPTCHA_SECRET_KEY'] ?? '';
$verify_url = 'https://www.google.com/recaptcha/api/siteverify';

$recaptcha_data = array(
    'secret' => $secret_key,
    'response' => $recaptcha,
    'remoteip' => $_SERVER['REMOTE_ADDR']
);

$recaptcha_verify = curl_init();
curl_setopt($recaptcha_verify, CURLOPT_URL, $verify_url);
curl_setopt($recaptcha_verify, CURLOPT_POST, true);
curl_setopt($recaptcha_verify, CURLOPT_POSTFIELDS, http_build_query($recaptcha_data));
curl_setopt($recaptcha_verify, CURLOPT_RETURNTRANSFER, true);
curl_setopt($recaptcha_verify, CURLOPT_SSL_VERIFYPEER, false);

$recaptcha_response = curl_exec($recaptcha_verify);
curl_close($recaptcha_verify);

$recaptcha_result = json_decode($recaptcha_response, true);

// Check if reCAPTCHA verification was successful and score is acceptable
if (!$recaptcha_result['success']) {
    echo json_encode(['success' => false, 'message' => 'reCAPTCHA verification failed']);
    exit;
}

// For v3, check the score (0.0 = bot, 1.0 = human)
if (isset($recaptcha_result['score']) && $recaptcha_result['score'] < 0.5) {
    echo json_encode(['success' => false, 'message' => 'Suspicious activity detected']);
    exit;
}

// Optionally verify the action matches
if (isset($recaptcha_result['action']) && $recaptcha_result['action'] !== 'contact_form') {
    echo json_encode(['success' => false, 'message' => 'Invalid reCAPTCHA action']);
    exit;
}

// Prepare and send email
$to = 'dustint505@gmail.com';
$subject = "Message from DustinTaylor.website";
$headers = "From: noreply@dustintaylor.website\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Return-Path: noreply@dustintaylor.website\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "Content-Transfer-Encoding: 8bit\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
$headers .= "X-Originating-IP: " . $_SERVER['REMOTE_ADDR'] . "\r\n";
$headers .= "Message-ID: <" . time() . "." . uniqid() . "@dustintaylor.website>\r\n";

$email_message = "Name: $name\n";
$email_message .= "Email: $email\n\n";
$email_message .= "Message:\n$message";

$mail_sent = mail($to, $subject, $email_message, $headers);

// Clear any buffer that might have accumulated
if (ob_get_length()) {
    ob_clean();
}

// Return JSON response
echo json_encode([
    'success' => $mail_sent,
    'message' => $mail_sent ? 'Message sent successfully' : 'Failed to send message'
]);
exit;
?>