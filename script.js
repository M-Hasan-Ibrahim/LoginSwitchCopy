import Switcher from "./switcher.js";
import SignIn from "./signIn.js";
import SignUp from "./signUp.js";

const signInContainer = new SignIn(document.getElementById("signIn"));
const signUpContainer = new SignUp(document.getElementById("signUp"));

// let switcher = document.getElementById("switch");
const switcher = new Switcher(document.getElementById("switch"));

// console.log(S.xTranslate);

let switchButton = document.getElementById("switchButton");
let switchText = document.getElementById("switchText");

let count = 0;

switchButton.addEventListener("click", function () {
  if (count % 2 === 0) {
    switcher.moveRight();

    signInContainer.appear();

    signUpContainer.disapper();

    switchText.innerText = "Want to Sign Up?";
  } else {
    switcher.moveLeft();

    signInContainer.disapper();

    signUpContainer.appear();

    switchText.innerText = "Want to Sign In?";
  }
  count++;

  console.log(count);
});
