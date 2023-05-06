// document.addEventListener("DOMContentLoaded", function() {
//   const nameInput = document.getElementById("name");

//   nameInput.addEventListener("invalid", function(event) {
//     event.preventDefault();
//     nameInput.style.backgroundColor = "#ffe6e6";
//     nameInput.setCustomValidity("Please enter a valid name (letters only)");
//   });

//   nameInput.addEventListener("input", function(event) {
//     if (nameInput.validity.valid) {
//       nameInput.style.backgroundColor = "";
//       nameInput.setCustomValidity("");
//     } else {
//       nameInput.style.backgroundColor = "#ffe6e6";
//       nameInput.setAttribute("[a-zA-Z]{1,}");
//       nameInput.setCustomValidity("Please enter a valid name (letters only)");
//     }
//   });

//   nameInput.addEventListener("input", function(event) {
//     if (nameInput.validity.valid) {
//       nameInput.style.backgroundColor = "";
//     }
//   });
// });

document.addEventListener("DOMContentLoaded", function() {
  const nameInput = document.getElementById("name");
  const surnameInput = document.getElementById("surname");
  const emailInput = document.getElementById("email");
  const addressInput = document.getElementById("address");
  const contactNumInput = document.getElementById("contact-num");
  
  nameInput.addEventListener("invalid", function(event) {
  event.preventDefault();
  nameInput.style.backgroundColor = "#ffe6e6";
  nameInput.setCustomValidity("Please enter a valid name (letters only)");
  });
  
  nameInput.addEventListener("input", function(event) {
  if (nameInput.validity.valid) {
  nameInput.style.backgroundColor = "";
  nameInput.setCustomValidity("");
  } else {
  nameInput.style.backgroundColor = "#ffe6e6";
  nameInput.setAttribute("[a-zA-Z]{1,}"); //________________________________________________________________________
  nameInput.setCustomValidity("Please enter a valid name (letters only)");
  }
  });
  
  surnameInput.addEventListener("invalid", function(event) {
  event.preventDefault();
  surnameInput.style.backgroundColor = "#ffe6e6";
  surnameInput.setCustomValidity("Please enter a valid surname (letters only)");
  });
  
  surnameInput.addEventListener("input", function(event) {
  if (surnameInput.validity.valid) {
  surnameInput.style.backgroundColor = "";
  surnameInput.setCustomValidity("");
  } else {
  surnameInput.style.backgroundColor = "#ffe6e6";
  surnameInput.setAttribute("[a-zA-Z]{1,}"); //________________________________________________________________________
  surnameInput.setCustomValidity("Please enter a valid surname (letters only)");
  }
  });
  
  emailInput.addEventListener("invalid", function(event) {
  event.preventDefault();
  emailInput.style.backgroundColor = "#ffe6e6";
  emailInput.setCustomValidity("Please enter a valid email address");
  });
  
  emailInput.addEventListener("input", function(event) {
  if (emailInput.validity.valid) {
  emailInput.style.backgroundColor = "";
  emailInput.setCustomValidity("");
  } else {
  emailInput.style.backgroundColor = "#ffe6e6";
  emailInput.setAttribute(""); //________________________________________________________________________

  emailInput.setCustomValidity("Please enter a valid email address");
  }
  });
  
  addressInput.addEventListener("invalid", function(event) {
  event.preventDefault();
  addressInput.style.backgroundColor = "#ffe6e6";
  addressInput.setCustomValidity("Please enter a valid address");
  });
  
  addressInput.addEventListener("input", function(event) {
  if (addressInput.validity.valid) {
  addressInput.style.backgroundColor = "";
  addressInput.setCustomValidity("");
  } else {
  addressInput.style.backgroundColor = "#ffe6e6";
  addressInput.setAttribute(""); //________________________________________________________________________

  addressInput.setCustomValidity("Please enter a valid address");
  }
  });
  
  contactNumInput.addEventListener("invalid", function(event) {
  event.preventDefault();
  contactNumInput.style.backgroundColor = "#ffe6e6";
  contactNumInput.setCustomValidity("Please enter a valid contact number");
  });
  
  contactNumInput.addEventListener("input", function(event) {
  if (contactNumInput.validity.valid) {
  contactNumInput.style.backgroundColor = "";
  contactNumInput.setCustomValidity("");
  } else {
  contactNumInput.style.backgroundColor = "#ffe6e6";
  contactNumInput.setAttribute("[0-9]{8}"); //________________________________________________________________________

  contactNumInput.setCustomValidity("Please enter a valid contact number");
  }
  });
  });



