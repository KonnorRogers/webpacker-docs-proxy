import { Controller } from "stimulus"

export default class extends Controller {
  connect() {
    document.addEventListener("turbolinks:load", this.fixDocumentLinks)
  }

  disconnect() {
    document.removeEventListener("turbolinks:load", this.fixDocumentLinks)
  }

 fixDocumentLinks() {
   const anchors = document.querySelectorAll("a")

   Array.from(anchors).forEach((anchor) => {
     if (anchor.href.startsWith("#")) {
       return
     }

     anchor.rel = "nofollow noopener noreferrer"
     anchor.target = "_blank"

     if (anchor.href.startsWith(window.location.origin) && anchor.href.endsWith(".md")) {
        return anchor.href = anchor.href.replace(/\.md$/, "")
     }

   })
  }
}
