//When the page is ready, do this
$(document).ready(function(){
  //when the submit class element is clicked, do this
  $(".submit").click(function(){
    //add the class of .blueBorder to the same element
    $(this).addClass("blueBorder")
  });
  //when the submit class element is abandoned, do this
  $(".submit").mouseleave(function(){
    //remove the class of .blueBorder from the same element
    $(this).removeClass("blueBorder")
  })
})
