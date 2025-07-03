<?php
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
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dustin Taylor - Web Developer / Political Scientist</title>
    <link rel="stylesheet" href="assets/css/global.css">
    <link rel="stylesheet" href="assets/css/socialmediabar.css">
    <link rel="stylesheet" href="assets/css/profile.css">
    <link rel="stylesheet" href="assets/css/customquizzes.css">
    <link rel="stylesheet" href="assets/css/advancecoin.css">
    <link rel="stylesheet" href="assets/css/framersmethod.css">
    <link rel="stylesheet" href="assets/css/aegisexchange.css">
    <link rel="stylesheet" href="assets/css/contactform.css">
    <script src="https://www.google.com/recaptcha/api.js?render=<?php echo htmlspecialchars($_ENV['RECAPTCHA_SITE_KEY'] ?? 'YOUR_SITE_KEY_HERE'); ?>"></script>
</head>
<body>
    <div class="App">
        <header class="App-header">