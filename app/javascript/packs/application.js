
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



// window.dispachMapsEvent = function(...args) {

    
//     const event = document.createEvent("Events");
    
//     event.initEvent("google-maps-callbacks", true, true);
    
//     event.args = args
    
//     window.dispatchEvent(event);
    
//     console.log("this is dispatch function");
//     console.log("evnt fired");
// }