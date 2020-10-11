import "../styles/index.css"
import { Application } from "stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers"
import Turbolinks from "turbolinks"

console.info("Bridgetown is loaded!")
const application = Application.start()
const context = require.context("./controllers", true, /.js$/)
application.load(definitionsFromContext(context))
Turbolinks.start()
