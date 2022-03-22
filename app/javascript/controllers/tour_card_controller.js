import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [  "card" ]

    mouse(event) {
        for (let i = 0; i < this.cardTargets.length; i++) {
            const element = this.cardTargets[i];

            element.addEventListener("mouseenter", function(){ 
                console.log("tour clicked"); 
                console.log(this);
                this.style.transform = "scale(1.04)"; 

            });

            element.addEventListener("mouseleave", function() {
                console.log("event removed!!");
                this.style.color = ""  
                this.style.transform = ""

            })
        }
    }
}