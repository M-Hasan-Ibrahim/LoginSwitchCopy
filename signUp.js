export default class SignUp {
  constructor(signUpElem) {
    this.signUpElem = signUpElem;
  }

  get xTranslate() {
    return parseFloat(
      getComputedStyle(this.signUpElem).getPropertyValue("--signUpXTranslate")
    );
  }

  set xTranslate(value) {
    this.signUpElem.style.setProperty("--signUpXTranslate", value);
  }

  get zIndex() {
    return parseInt(
      getComputedStyle(this.signUpElem).getPropertyValue("--signInZIndex")
    );
  }

  set zIndex(value) {
    this.signUpElem.style.setProperty("--signInZIndex", value);
  }

  appear() {
    this.xTranslate = 100;

    this.zIndex = -1;
  }

  disapper() {
    this.xTranslate = 75;

    this.zIndex = -1;
  }
}
