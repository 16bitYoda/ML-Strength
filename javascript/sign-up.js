document.addEventListener("DOMContentLoaded", function() {
  const nameInput = document.getElementById("name");
  const surnameInput = document.getElementById("surname");
  const emailInput = document.getElementById("email");
  const addressInput = document.getElementById("address");
  const contactNumInput = document.getElementById("contact-num");

  
   // Get the error-div for each input element
   const nameError = document.getElementById("name-error");
   const surnameError = document.getElementById("surname-error");
   const emailError = document.getElementById("email-error");
   const addressError = document.getElementById("address-error");
   const contactNumError = document.getElementById("contact-num-error");

   
  nameInput.addEventListener("invalid", function(event) {
  event.preventDefault();
  nameInput.style.backgroundColor = "#ffe6e6";
  // Set the error message with the 'title' attribute
  nameError.textContent = nameInput.getAttribute("title");
  // nameInput.setCustomValidity("Please enter a valid name (letters only)");
  });
  
  nameInput.addEventListener("input", function(event) {
  if (nameInput.validity.valid) {
  nameInput.style.backgroundColor = "";
  nameError.textContent = ""; // Clear the error message
  nameInput.setCustomValidity("");
  } else {
  nameInput.style.backgroundColor = "#ffe6e6";
  nameInput.pattern("[a-zA-Z]{1,}"); //________________________________________________________________________
  nameError.textContent = nameInput.getAttribute("title"); // Set the error message
  // nameInput.setCustomValidity("Please enter a valid name (letters only)");
  }
  });

  
  surnameInput.addEventListener("invalid", function(event) {
  event.preventDefault();
  surnameInput.style.backgroundColor = "#ffe6e6";
  // Set the error message with the 'title' attribute
  surnameError.textContent = surnameInput.getAttribute("title");
  // surnameInput.setCustomValidity("Please enter a valid surname (letters only)");
  });
  
  surnameInput.addEventListener("input", function(event) {
  if (surnameInput.validity.valid) {
  surnameInput.style.backgroundColor = "";
  surnameError.textContent = ""; // Clear the error message
  surnameInput.setCustomValidity("");
  } else {
  surnameInput.style.backgroundColor = "#ffe6e6";
  surnameInput.pattern("[a-zA-Z]{1,}"); //________________________________________________________________________
  surnameError.textContent = surnameInput.getAttribute("title"); // Set the error message
  // surnameInput.setCustomValidity("Please enter a valid surname (letters only)");
  }
  });
  
  emailInput.addEventListener("invalid", function(event) {
  event.preventDefault();
  emailInput.style.backgroundColor = "#ffe6e6";
  // Set the error message with the 'title' attribute
  emailError.textContent = emailInput.getAttribute("title");
  // emailInput.setCustomValidity("Please enter a valid email address");
  });
  
  emailInput.addEventListener("input", function(event) {
  if (emailInput.validity.valid) {
  emailInput.style.backgroundColor = "";
  emailError.textContent = ""; // Clear the error message
  emailInput.setCustomValidity("");
  } else {
  emailInput.style.backgroundColor = "#ffe6e6";
  emailInput.pattern("[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"); //________________________________________________________________________
  emailError.textContent = emailInput.getAttribute("title"); // Set the error message
  // emailInput.setCustomValidity("Please enter a valid email address");
  }
  });
  
  addressInput.addEventListener("invalid", function(event) {
  event.preventDefault();
  addressInput.style.backgroundColor = "#ffe6e6";
  // Set the error message with the 'title' attribute
  addressError.textContent = addressInput.getAttribute("title");
  // addressInput.setCustomValidity("Please enter a valid address");
  });
  
  addressInput.addEventListener("input", function(event) {
  if (addressInput.validity.valid) {
  addressInput.style.backgroundColor = "";
  addressError.textContent = ""; // Clear the error message
  addressInput.setCustomValidity("");
  } else {
  addressInput.style.backgroundColor = "#ffe6e6";
  addressInput.pattern("^[#.0-9a-zA-Z\s,-]+$"); //________________________________________________________________________
  addressError.textContent = addressInput.getAttribute("title"); // Set the error message
  // addressInput.setCustomValidity("Please enter a valid address");
  }
  });
  
  contactNumInput.addEventListener("invalid", function(event) {
  event.preventDefault();
  contactNumInput.style.backgroundColor = "#ffe6e6";
  // Set the error message with the 'title' attribute
  contactNumError.textContent = contactNumInput.getAttribute("title");
  // contactNumInput.setCustomValidity("Please enter a valid contact number");
  });
  
  contactNumInput.addEventListener("input", function(event) {
  if (contactNumInput.validity.valid) {
  contactNumInput.style.backgroundColor = "";
  contactNumError.textContent = ""; // Clear the error message
  contactNumInput.setCustomValidity("");
  } else {
  contactNumInput.style.backgroundColor = "#ffe6e6";
  contactNumInput.pattern("/^([0-9]{10}|[0-9]{4}\s[0-9]{3}\s[0-9]{3}|[0-9]{4}\s[0-9]{4}|[0-9]{8})$/;") //________________________________________________________________________
  contactNumError.textContent = ContactNumInput.getAttribute("title"); // Set the error message
  // contactNumInput.setCustomValidity("Please enter a valid contact number");
  }
  });

});

  


