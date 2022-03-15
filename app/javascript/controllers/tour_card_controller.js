import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [  "card" ]

  connect() {
    //console.log("Hello, Stimulus!", this.element)
    console.log("tour card");
  }

    mouse(event) {
        
        console.log("mouse entered tour card container");

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