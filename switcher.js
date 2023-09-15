export default class Switcher {
  constructor(switchElem) {
    this.switchElem = switchElem;
  }

  get xTranslate() {
    return parseFloat(
      getComputedStyle(this.switchElem).getPropertyValue("--xTranslate")
    );
  }
  set xTranslate(value) {
    this.switchElem.style.setProperty("--xTranslate", value);
  }

  get borderRadius() {
    return;
    getComputedStyle(this.switchElem).getPropertyValue("--switchBorder");
  }
  set borderRadius(value) {
    this.switchElem.style.setProperty("--switchBorder", value);
  }

  moveRight() {
    this.xTranslate = 100;
    this.borderRadius = "0 15px 15px 0";
  }

  moveLeft() {
    this.xTranslate = 0;
    this.borderRadius = " 15px 0 0 15px";
  }
}
