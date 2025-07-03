document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  const statusMessage = document.getElementById("statusMessage");
  const submitButton = document.getElementById("submitButton");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Change button state
      submitButton.disabled = true;
      submitButton.textContent = "Sending...";

      // Execute reCAPTCHA v3 - get site key from data attribute
      const siteKey = document.querySelector('[data-recaptcha-key]')?.dataset.recaptchaKey;
      
      grecaptcha.ready(function() {
        grecaptcha.execute(siteKey, {action: 'contact_form'}).then(function(token) {
          // Get form data
          const formData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value,
            recaptcha: token,
          };

          sendForm(formData);
        });
      });
    });

    function sendForm(formData) {

      // Create AJAX request
      const xhr = new XMLHttpRequest();
      xhr.open("POST", "process-form.php", true);
      xhr.setRequestHeader("Content-Type", "application/json");

      xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 400) {
          let response;
          try {
            response = JSON.parse(xhr.responseText);
          } catch (e) {
            console.error("Error parsing response:", xhr.responseText);
            statusMessage.textContent = "An error occurred. Please try again.";
            statusMessage.className = "error";
            submitButton.disabled = false;
            submitButton.textContent = "Send";
            return;
          }

          if (response.success) {
            statusMessage.textContent = "Message sent successfully!";
            statusMessage.className = "success";
            // Reset form
            contactForm.reset();
          } else {
            statusMessage.textContent =
              response.message || "Failed to send message";
            statusMessage.className = "error";
          }
        } else {
          statusMessage.textContent = "An error occurred. Please try again.";
          statusMessage.className = "error";
        }

        // Re-enable button
        submitButton.disabled = false;
        submitButton.textContent = "Send";
      };

      xhr.onerror = function () {
        statusMessage.textContent = "Connection error. Please try again.";
        statusMessage.className = "error";
        submitButton.disabled = false;
        submitButton.textContent = "Send";
      };

      xhr.send(JSON.stringify(formData));
    }
  }
});
