/** @format */

const registerBtn = document.getElementById("register_btn");
registerBtn.addEventListener("click", handleFormSubmission);

function handleFormSubmission(event) {
  event.preventDefault();
    if (validateForm()) {
        alert("Registered Successfully");
        clearForm();
    }
}

function validateForm() {
  const firstName = document.getElementById("first_name").value;
  const lastName = document.getElementById("last_name").value;
  const phone = document.getElementById("phone").value;
  const bedrooms = document.getElementById("bedrooms").value;
  const propertyType = document.getElementById("propertyType").value;
  const priceRange = document.getElementById("priceRange").value.toUpperCase();
  const bathrooms = parseInt(document.getElementById("bathrooms").value, 10);
  const email = document.getElementById("email").value;
  const comments = document.getElementById("comments").value;

  if (
    !firstName ||
    !lastName ||
    !phone ||
    !bedrooms ||
    !propertyType ||
    !bathrooms ||
    !priceRange ||
    !email ||
    !comments
  ) {
    alert("Please fill in all the fields.");
    return false;
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.match(emailRegex)) {
    alert("Invalid email format.");
    return false;
  }

  alert("Registered Successfully.");
  return true;
}

const clearBtn = document.getElementById("clear_btn");
clearBtn.addEventListener("click", clearForm);
function clearForm() {
  document.getElementById("contact_form").reset();
}
