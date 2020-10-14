import { Controller } from "stimulus";

export default class extends Controller {
  connect() {
      document.addEventListener("turbolinks:popstate", this.wrapHeaders.bind(this))
    document.addEventListener("turbolinks:render", this.wrapHeaders.bind(this));
    document.addEventListener("turbolinks:load", this.wrapHeaders.bind(this));
    document.addEventListener("DOMContentLoaded", this.wrapHeaders.bind(this));
  }

  disconnect() {
    document.removeEventListener(
      "turbolinks:popstate",
      this.wrapHeaders.bind(this)
    );
    document.removeEventListener(
      "turbolinks:load",
      this.wrapHeaders.bind(this)
    );
    document.removeEventListener(
      "turbolinks:render",
      this.wrapHeaders.bind(this)
    );
    document.removeEventListener(
      "DOMContentLoaded",
      this.wrapHeaders.bind(this)
    );
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
