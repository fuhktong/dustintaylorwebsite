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
$site_key = $_ENV['RECAPTCHA_SITE_KEY'] ?? 'YOUR_SITE_KEY_HERE';
?>
<div class="contact">
  <div class="contactform-send-message">Send me a message</div>
  <form id="contactForm" action="process-form.php" method="POST" data-recaptcha-key="<?php echo htmlspecialchars($site_key); ?>">
    <ul>
      <li>
        <label for="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          required
        />
      </li>
      
      <li>
        <label for="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          required
        />
      </li>
      
      <li>
        <label for="message">Message:</label>
        <textarea
          id="message"
          name="message"
          required
        ></textarea>
      </li>
      
      
      <li class="button">
        <button type="submit" id="submitButton">Send</button>
      </li>
    </ul>
    
    <div id="statusMessage" class=""></div>
  </form>
</div>