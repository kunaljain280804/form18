const form = document.getElementById("registrationForm");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission
  validateForm();
});

function validateForm() {
  const name = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  let isValid = true;

  clearErrors();

  // Name validation
  if (name.length < 5) {
    showError("nameError", "Name must be at least 5 characters long");
    isValid = false;
  }

  // Email validation
  if (!email.includes("@") || email.startsWith("@") || email.endsWith("@")) {
    showError("emailError", "Please enter a valid email address");
    isValid = false;
  }

  // Phone validation
  if (phone.length !== 10 || isNaN(phone) || phone === "1234567890") {
    showError("phoneError", "Please enter a valid 10-digit phone number");
    isValid = false;
  }  // Phone validation
  if (phone.length !== 10 || isNaN(phone) || phone === "1234567890") {
    showError("phoneError", "Please enter a valid 10-digit phone number");
    isValid = false;
  }

  // Password validation
  if (
    password.length < 8 ||
    password.toLowerCase() === "password" ||
    password.toLowerCase() === name.toLowerCase()
  ) {
    showError("passwordError", "Password is not strong enough");
    isValid = false;
  }

  // Confirm Password validation
  if (password !== confirmPassword) {
    showError("confirmError", "Passwords do not match");
    isValid = false;
  }

  if (isValid) {
    alert("Registration Successful!");
    form.reset();
  }
}

function showError(id, message) {
  document.getElementById(id).textContent = message;
}

function clearErrors() {
  const errors = document.querySelectorAll(".error-msg");
  errors.forEach((err) => (err.textContent = ""));
}
