var updownElem = document.querySelector('.hero__arrow-down');
var scrollTarget = document.querySelector('.slider-target');

var coord = scrollTarget.getBoundingClientRect().top;



updownElem.onclick = function(e) {
    e.preventDefault();

    var start = Date.now();
    var timer = setInterval(function() {
        
        var timePassed = Date.now() - start;
      
        if (timePassed >= coord) {
          clearInterval(timer);
          return;
        }
      
        draw(timePassed);
      
      }, 20);  
      function draw(timePassed) {
        window.scrollTo(0,timePassed);
      }
   
  }