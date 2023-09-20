export default class SignIn {
  constructor(signInElem) {
    this.signInElem = signInElem;
  }

  get xTranslate() {
    return parseFloat(
      getComputedStyle(this.signInElem).getPropertyValue("--signInXTranslate")
    );
  }

  set xTranslate(value) {
    this.signInElem.style.setProperty("--signInXTranslate", value);
  }

  get zIndex() {
    return parseInt(
      getComputedStyle(this.signInElem).getPropertyValue("--ZIndex")
    );
  }

  set zIndex(value) {
    this.signInElem.style.setProperty("--ZIndex", value);
  }

  appear() {
    this.xTranslate = 0;

    this.zIndex = 1;
  }

  disapper() {
    this.xTranslate = 25;

    this.zIndex = -1;
  }
}
