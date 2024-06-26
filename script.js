const nameInput = document.querySelector(".name");
const emailInput = document.querySelector(".email");
const passwordInput = document.querySelector(".password");
const submitButton = document.querySelector(".submit-button");

document.getElementById("button").disabled = true;
submitButton.style.background = "gray";
submitButton.style.cursor = "no-drop";

nameInput.addEventListener("keyup", e => {
  if (nameInput.value.length === 0) {
    document.getElementById("button").disabled = true;
    submitButton.style.background = "gray";
    submitButton.style.cursor = "no-drop";
  } else {
    document.getElementById("button").disabled = false;
    submitButton.style.background = "red";
    submitButton.style.cursor = "pointer";
  }
});

submitButton.addEventListener("click", () => {
  const name = nameInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;

  if (name === "" && name.length === 0) {
    alert("Please fill your name to submit");
    return;
  }

  if (email === "" && email.length === 0) {
    alert("Please fill your email to submit");
    return;
  }

  if (password === "" && password.length === 0) {
    alert("Please fill your password to submit");
    return;
  }

  const requestBody = {
    name: name,
    email: email,
    password: password
  };

  console.log(requestBody);

  document.getElementById("button").disabled = true;
  submitButton.style.cursor = "no-drop";
  submitButton.style.background = "gray";

  nameInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";
});
