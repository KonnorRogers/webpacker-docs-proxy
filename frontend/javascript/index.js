import "../styles/tailwind.css"
import "../styles/dracula.css"
import "../styles/index.css"

import BridgetownQuickSearch from 'bridgetown-quick-search'

import Turbolinks from "turbolinks"
import { Application } from "stimulus"
import NavButtonController from "./controllers/nav_button_controller.js";
import HeaderLinkController from "./controllers/header_link_controller.js"
import DocumentLinkController from "./controllers/document_link_controller.js"

const application = Application.start()
application.register("nav-button", NavButtonController)
application.register("header-link", HeaderLinkController)
application.register("document-link", DocumentLinkController)

Turbolinks.start()



