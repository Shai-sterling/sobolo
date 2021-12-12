
 
 const nav = document.querySelector(".wrap");
 const overlay = document.querySelector(".overlay");
 const heroText = document.querySelector(".hero-text");
 const rockBg = document.querySelector(".rock-bg");
  window.onscroll = function() {scrollPage()};
    function scrollPage() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        nav.style.display = "block";
      } else {
        nav.style.display = "none";
      }
    };
  heroText.addEventListener("mouseover", function(){
    overlay.style.background = "black";
      overlay.style.opacity = "0.4";
    
  });
  heroText.addEventListener("mouseout", function(){
    overlay.style.background = "none";
  });
 
  