import { Controller } from "stimulus"

export default class {
  connect() {
    document.addEventListener("turbolinks:load", this.wrapHeaders)
  }

  disconnect() {
    document.removeEventListener("turbolinks:load", this.wrapHeaders)
  }

 wrapHeaders() {
   const headers = document.querySelectorAll("h1, h2, h3, h4, h5, h6")
   headers.forEach((header) => {
      const href = header.id
      const anchor = document.createElement("a")
      anchor.href = href
     console.log(header)
      this.wrap(header, anchor)
   })
 }

  wrap(element, wrapper) {
    element.parentNode.insertBefore(wrapper, element);
    wrapper.appendChild(element);
  }
}
