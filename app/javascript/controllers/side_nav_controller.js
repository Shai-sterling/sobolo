
import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "output" ]

  connect() {
     console.log("Hello, Stimulus!", this.element)
  }



    openNav() {
        const sidenav = document.getElementById("side-nav")
        const sideLinks = document.getElementById("side-links")
        const ster = document.getElementById("ster")
        const bugerWrapper = document.getElementById("burger-wrapper")
        
        bugerWrapper.style.display = "none"

        sidenav.style.width = "100%"
        sidenav.style.display = "block"
        sidenav.style.boxShadow = "0px 10px 5px 0px rgb(216, 216, 216)"
        sidenav.style.transition = "1.3s"

        ster.style.height = "100vh"
        ster.style.overflow = "hidden"

        sideLinks.style.display = "block"
        sideLinks.style.transition = "3"

     
    }

    closeNav() {
       // console.log("closing nav");
        const bugerWrapper = document.getElementById("burger-wrapper")

        const sidenav = document.getElementById("side-nav")

        const close = document.getElementById("close")
        
        const ster = document.getElementById("ster")


        ster.style.height = "auto"

        sidenav.style.display = "none"
        
        bugerWrapper.style.display = "block"

    }
}