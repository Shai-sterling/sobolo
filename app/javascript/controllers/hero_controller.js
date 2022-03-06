
import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "background" ]

  connect() {
    console.log("Hello, Stimulus", this.element)
    
  }

  background() {
    console.log("this is going to change background to  dark");
   
  }

  mouse(event) {
    this.backgroundTarget.style.background = "black"
    this.backgroundTarget.style.opacity = "0.4"
    this.backgroundTarget.style.transition = "1.2s"

  }

  out() {
    this.backgroundTarget.style.background = "none"
    console.log("mouse out");
  }

}
