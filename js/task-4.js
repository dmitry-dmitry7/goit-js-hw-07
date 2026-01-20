const  form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);
	
function handleSubmit(event) {
  event.preventDefault();
  
  const regForm = event.target;
  const email = regForm.elements.email.value;
  const password = regForm.elements.password.value;

  if (email.trim() === "" || password.trim() === "") {
    return window.alert("All form fields must be filled in");
  }

  const valueForm = {
    email: email.trim(),
    password: password.trim(),
  };

  console.log(valueForm);
  regForm.reset();
}
