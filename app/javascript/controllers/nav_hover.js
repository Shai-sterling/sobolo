
import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "" ]

  connect() {
    console.log("Hello, Stimulus", this.element)
    console.log("nav links hover connected");
    
  }


  shai(){
    console.log("shais hover plans");
  }

  mouse(event) {
   console.log("mouse enterd nav link");
  }

  out() {
    console.log("mouse out of nav link");
  }

}
