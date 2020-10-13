import { Controller } from "stimulus";

export default class NavButtonController extends Controller {
  static targets = ["iconHide", "iconShow", "content", "wrapper"];

  toggle() {
    this.toggleIcon();
    this.toggleContent();
  }

  toggleContent() {
    const classes = ["flex", "hidden"];
    classes.forEach((klass) => this.wrapperTarget.classList.toggle(klass));
    document.querySelector("main").classList.toggle("hidden")
    document.querySelector("footer").classList.toggle("hidden")
  }

  toggleIcon() {
    const elements = [this.iconHideTarget, this.iconShowTarget];
    const classes = ["block", "opacity-100", "opacity-0"];

    classes.forEach((klass) =>
      elements.forEach((target) => {
        target.classList.toggle(klass);

        const currentRotation = target.getAttribute("data-rotation");

        const rotate360 = "360";
        const rotate0 = "0";

        if (currentRotation == rotate0) {
          target.style.transform = "rotate(360deg)";
          target.setAttribute("data-rotation", rotate360);
        } else if (currentRotation == rotate360) {
          target.style.transform = "rotate(0)";
          target.setAttribute("data-rotation", rotate0);
        }
      })
    );
  }
}
