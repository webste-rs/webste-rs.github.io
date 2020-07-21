var mouseX = 0, mouseY = 0;
var xp = 0, yp = 0;
   
$(document).mousemove(function(e){
  mouseX = e.pageX;
  mouseY = e.pageY; 
});
  
setInterval(function(){
  xp += ((mouseX - xp)/6);
  yp += ((mouseY - yp)/6);
  $("#cursorAnimated").css({left: xp +'px', top: yp +'px'});
}, 20);