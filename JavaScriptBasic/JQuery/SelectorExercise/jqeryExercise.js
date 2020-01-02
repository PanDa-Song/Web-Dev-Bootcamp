//select all divs and give them a purple background
$("div").css("background-color", "purple");

//select the divs with class highlight and make them 200 wide
$(".highlight").css("width", "200px");

//select the div with id third and give it a orange border
$("#third").css("border", "solid 1px orange");

// $("div:first-of-type").css("color","pink"); //A css syntax --> so FASTER
$("div:first").css("color", "pink"); //A JQuery syntax --> A LITTLE LOWER