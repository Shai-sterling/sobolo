
import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import "@fortawesome/fontawesome-free/css/all"

require('jquery')

Rails.start()
Turbolinks.start()
ActiveStorage.start()

// require("trix")
// require("@rails/actiontext")
// import "controllers"


import "controllers"
