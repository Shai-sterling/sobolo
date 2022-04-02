
import { Controller } from "stimulus"

export default class extends Controller {

  static targets = [ ]

    connect() { 
       // console.log("find divs connexted connected");
        
        
    }
    
    
    


    showHeadings(){

        const tourHeadings = document.querySelectorAll(".find")


            let top = window.scrollY
            let bottom = window.scrollX

            console.log("top window");
            console.log(top);
            console.log("bottom window");
            console.log(bottom);


        //console.log(tourHeadings);


        for (let i = 0; i < tourHeadings.length; i++) {
                    
            const element = tourHeadings[i];


            console.log(element);

            if (element) {
                
                
                element.classList.add("zactive");
                
            } else {    
                element.classList.remove("find");
            }     
        } 
                
  
        
        

    }












}






     