import { Controller } from "stimulus";

export default class extends Controller {
  connect() {
    this.fixDocumentLinks();
  }

  fixDocumentLinks() {
    const anchors = document.querySelectorAll("a");

    Array.from(anchors).forEach((anchor) => {
      if (anchor.href.startsWith("#")) {
        return;
      }

      if (!anchor.href.startsWith(window.location.origin)) {
        anchor.rel = "nofollow noopener noreferrer";
        anchor.target = "_blank";
        return;
      }

      const mdFileRegex = /\.md(#[\w\S]*)?$/
      if (
        anchor.href.startsWith(window.location.origin) &&
        mdFileRegex.test(anchor.href)
      ) {
        const replacer = (_, firstCaptureGroup) => firstCaptureGroup || "";
        return (anchor.href = anchor.href.replace(mdFileRegex, replacer));
      }
    });
  }
}
