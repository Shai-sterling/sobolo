
import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "background" ]

  mouse(event) {
    this.backgroundTarget.style.background = "black"
    this.backgroundTarget.style.opacity = "0.3"
    this.backgroundTarget.style.transition = "1.2s"

  }

  out() {
    this.backgroundTarget.style.background = "none"
  }

}
