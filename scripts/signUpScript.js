const button = document.getElementById("signUpButton");
const form = document.getElementById("signUpForm");
const title = document.getElementById("signUpTitle");

let isDisplayed = false;
button.addEventListener("click", () => {
  if (!isDisplayed) {
    isDisplayed = true;
    button.style.transform = "translateY(75%)";
    title.style.transform = "translateY(-125%)";
    button.innerHTML = "SIGN UP";

    sleep(350).then(() => {
      form.style.display = "block";
      form.style.opacity = "1";
    });
  } else {
    validateForm();
  }
});

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function validateForm() {
  let username = document.signUpForm.username.value;
  let email = document.signUpForm.email.value;
  let password = document.signUpForm.password.value;
  let confirmedPassword = document.signUpForm.confirmedPassword.value;

  if (username == null || username == "") {
    alert("Username can't be null");
    return false;
  } else if (!email.includes("@") || email.charAt(0) == "@") {
    alert("Email must include @ that is not the first character");
  } else if (password.length < 8) {
    alert("Password must be atleast 8 characters");
  } else if (confirmedPassword != password) {
    alert("Passwords don't match");
  } else {
    alert("thanks for signing up");
    location.reload();
  }
}
