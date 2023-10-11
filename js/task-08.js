// Write a script to manage the login form.

// Form submission(form.login - form) must be processed on the submit event.
// The page must not reload when the form is submitted.

// If the form has empty fields, display alert saying that all fields must be filled in.

// As soon as the user has filled in all the fields and submitted the form,
// collect the field values into an object,
// where the field name will be the property name
// and the field value will be the property value.

// Use the elements property to access form elements.

// Display the object with the entered data in the console
// and clear the values of the form fields using the reset method.

const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === "" || password === "") {
    return alert("Please fill in all the fields!");
  } else {
    const loginInfo = { email: email, password: password };
    console.log(loginInfo);

    form.reset();
  }
}
