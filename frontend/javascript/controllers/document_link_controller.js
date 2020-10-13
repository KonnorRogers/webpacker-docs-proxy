import { Controller } from "stimulus"

export default class extends Controller {
  connect() {
    document.addEventListener("turbolinks:render", this.fixDocumentLinks)
  }

  disconnect() {
    document.removeEventListener("turbolinks:render", this.fixDocumentLinks)
  }

 fixDocumentLinks() {
   const anchors = document.querySelectorAll("a")

   Array.from(anchors).forEach((anchor) => {
     if (anchor.href.startsWith("#")) {
       return
     }
     
     if (!anchor.href.startsWith(window.location.origin) {
       anchor.rel = "nofollow noopener noreferrer"
       anchor.target = "_blank"
       return
     }

     if (anchor.href.startsWith(window.location.origin) && anchor.href.endsWith(".md")) {
        return anchor.href = anchor.href.replace(/\.md$/, "")
     }

   })
  }
}
