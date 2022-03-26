import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [  "card" ]

    mouse(event) {
        for (let i = 0; i < this.cardTargets.length; i++) {
            
            const element = this.cardTargets[i];

            element.addEventListener("mouseenter", function(){ 
                this.style.transform = "scale(1.04)"; 
                this.style.boxShadow = "5px 10px 18px #8888888a"; 

            });

            element.addEventListener("mouseleave", function() {
                this.style.color = ""  
                this.style.transform = ""
                this.style.boxShadow = ""
            })
        }
    }
}