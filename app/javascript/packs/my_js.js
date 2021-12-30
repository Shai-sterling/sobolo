

 const nav = document.querySelector(".wrap");
 const overlaybg = document.querySelector(".hero-background");
 const heroText = document.querySelector(".hero-text");
//const tourCard = document.querySelectorAll(".tour-card");



  window.onscroll = function() {scrollPage()};


  function scrollPage() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      nav.style.display = "block";
    } else {
      nav.style.display = "none";
    }
  };

  
  
  
heroText.addEventListener("mouseover", addBackground)

 function addBackground() {
    overlaybg.style.background = "black";
    overlaybg.style.opacity = "0.5";
    overlaybg.style.transition = "all 2s" ;
 }

 heroText.addEventListener("mouseout", removeBackground);

 function removeBackground() {
   overlaybg.style.background = "none";
 }
 


  

 




