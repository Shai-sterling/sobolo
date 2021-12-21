

 const nav = document.querySelector(".wrap");
 const overlaybg = document.querySelector(".hero-background");
 const heroText = document.querySelector(".hero-text");
 const tourContainer = document.querySelector(".tour-container");
//const tourCard = tourContainer.querySelectorAll(".tour-card");



  window.onscroll = function() {scrollPage()};


  function scrollPage() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      nav.style.display = "block";
    } else {
      nav.style.display = "none";
    }
  };

  // heroText.addEventListener("mouseover", function(){
  //   overlaybg.style.background = "black";
  //   overlaybg.style.opacity = "0.7";
  //   overlaybg.style.transition = "all 2s" ;
  // });
  
  // heroText.addEventListener("mouseout", function(){
  //   overlaybg.style.background = "none";
  // });



  
    // for (var i = 0 ; i < tourCard.length ; i++) {
    //   tourCard[i].addEventListener("mouseover", function() {
    //     //this.style.outline = "white 5px solid"

        
    //     //this.style.boxShadow = "2px 0px 0px rgb(207, 207, 207)";
    //     this.style.transform = "scale(1.1)"

    //     console.log(this)
    //     //alert('You clicked ' + this.textContent);

    //   });

    //   tourCard[i].addEventListener('mouseout', function() {
    //     this.style.outlineStyle = ""
    //     this.style.transform = ""

    //     this.style.boxShadow = "";

    //     //alert('You clicked ' + this.textContent);

    //   });

    // }




