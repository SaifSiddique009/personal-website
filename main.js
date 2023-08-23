
/*
// Get the email input element.
const emailInput = document.getElementById("email");

// Get the alert element.
const alert = document.getElementById("alert");

const success = document.getElementById("success");

// Event listener for the submit button.
document.getElementById("subscribe").addEventListener("click", function() {
  // Get the email address from the input element.
  const email = emailInput.value;

  // Validate the email address.
  if (!isValidEmail(email)) {
    // The email address is not valid. Show the alert.
    alert.style.display = "block";

    setTimeout(function() {
      alert.style.display = "none";
  }, 1500); 
  }
  else {
    success.style.display = "block";

    setTimeout(function() {
      success.style.display = "none";
  }, 1500); 
  }
});

// Function to validate the email address.
function isValidEmail(email) {
  // Create a regular expression to match valid email addresses.
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Return true if the email address matches the regular expression.
  return emailRegex.test(email);
}
*/


document.addEventListener('DOMContentLoaded', function () {
  const emailInput = document.getElementById('email-input');
  const subscribeButton = document.getElementById('subscribe-button');
  const successModal = new bootstrap.Modal(document.getElementById('successModal'));
  const invalidModal = new bootstrap.Modal(document.getElementById('invalidModal'));

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  subscribeButton.addEventListener('click', () => {
    const email = emailInput.value;

    if (!isValidEmail(email)) {
      invalidModal.show();
    } else {
      successModal.show();
      // Perform subscription logic here
    }
  });
});

