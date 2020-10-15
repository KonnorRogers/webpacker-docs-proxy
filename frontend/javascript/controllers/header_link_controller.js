import { Controller } from "stimulus";

export default class extends Controller {
  connect() {
    this.wrapHeaders()
  }

  wrap(element, wrapper) {
    element.parentNode.insertBefore(wrapper, element);
    wrapper.appendChild(element);
  }

  wrapHeaders() {
    const headers = document.querySelectorAll("h1, h2, h3, h4, h5, h6");

    headers.forEach((header) => {
      // Return if its already wrapped
      if (header.parentNode.nodeName.toLowerCase() === "a") {
        return
      }

      const href = header.id;
      const anchor = document.createElement("a");
      anchor.href = "#" + href;
      this.wrap(header, anchor);
    });
  }
}
