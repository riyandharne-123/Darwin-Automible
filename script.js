//For Live Projects
window.addEventListener('load',function(){
    document.querySelector('body').classList.add("loaded")  
  });
  //fade in elements with jquery
  $(document).ready(function(){
    $("#home").fadeIn(2500);
 

});
$(document).ready(function(){
  $(".column img").show( "slide", {direction: "right" }, 2000 );
});