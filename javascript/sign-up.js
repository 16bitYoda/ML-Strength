const form = document.getElementById("registration-form");
const helpLink = document.getElementById("help-link");
const helpDialog = document.getElementById("help-dialog");
const closeButton = document.getElementById("close-button");

// Display help dialog when help link is clicked
helpLink.addEventListener("click", () => {
  helpDialog.style.display = "block";
});

// Close help dialog when close button is clicked
closeButton.addEventListener("click", () => {
  helpDialog.style.display = "none";
});

// Validate form on submission
form.addEventListener("submit", (event) => {
  // Prevent form submission if there are errors
  if (!validateForm()) {
    event.preventDefault();
  }
});

// Validate form inputs and display error messages
function validateForm() {
  let valid = true;

  // Validate name input
  const nameInput = document.getElementById("name");
  const nameError = document.getElementById("name-error");
  if (!nameInput.checkValidity()) {
    valid = false;
    nameError.textContent = nameInput.title;
  } else {
    nameError.textContent = "";
  }

  // Validate email input
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("email-error");
  if (!emailInput.checkValidity()) {
    valid = false;
    emailError.textContent = "Please enter a valid email address.";
  } else {
    emailError.textContent = "";
  }

  // Validate age input
  const ageInput = document.getElementById("age");
  const ageError = document.getElementById("age-error");
  if (!ageInput.checkValidity()) {
    valid = false;
    ageError.textContent = "Please enter a valid age.";
  } else {
    ageError.textContent = "";
  }

  // Validate gender input
  const genderInput = document.getElementById("gender");
  const genderError = document.getElementById("gender-error");
  if (genderInput.value === "") {
    valid = false;
    genderError.textContent = "Please select a gender.";
  } else {
    genderError.textContent = "";
  }

  // Validate membership input
  const membershipInput = document.getElementById("membership");
  const membershipError = document.getElementById("membership-error");
  if (membershipInput.value === "") {
    valid = false;
    membershipError.textContent = "Please select a membership type.";
  } else {
    membershipError.textContent = "";
  }

  // Validate phone input
  const phoneInput = document.getElementById("phone");
  const phoneError = document.getElementById("phone-error");
  if (!phoneInput.checkValidity()) {
    valid = false;
    phoneError.textContent = phoneInput.title;
  } else {
    phoneError.textContent = "";
  }

  // Validate address input
  const addressInput = document.getElementById("address");
  const addressError = document.getElementById("address-error");
  if (!addressInput.checkValidity()) {
    valid = false;
    addressError.textContent = "Please enter a valid address.";
  } else {
    addressError.textContent = "";
  }

  return valid;
}
