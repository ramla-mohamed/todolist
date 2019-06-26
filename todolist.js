var btn = document.getElementsByClassName("btn-test");

var p = document.querySelector("p");

var input = document.querySelector("input");

function clear(){
  input.value =" ";
}

function displayInput(){
  $("ul").append("<li>" + input.value + "<span class='btn-left'><i class='fas fa-trash-alt'></i></span></li>");
  clear();
};

$("ul").on("click","li",function(){
$(this).toggleClass("done");
event.stopPropagation();
});

$("ul").on("click","span",function(event){
  $(this).parent().fadeOut(500, function(){ //removed the parent it was inclosed too
    $(this).remove(); //removed completely after fading
  });
  event.stopPropagation(); //stop from bubbling to other elements
});
