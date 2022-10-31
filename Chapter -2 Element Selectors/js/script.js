$(function() {
  // jQuery goes here...
  /* CSS Selector*/
  // $("p").css("background-color","rgba(180,180,30,0.8)");
  // $(".red-box").css("background-color","rgba(180,180,30,0.8)");
  // $("#list").css("background-color","rgba(180,180,30,0.8)");
  // $("input[type='text']").css("background-color","rgba(180,180,30,0.8)");
  // $("h2, p, input[type='email']").css("background-color","rgba(180,180,30,0.8)");
  // $("li:last").css("background-color","rgba(180,180,30,0.8)");
  // $("li:even").css("background-color","rgba(180,180,30,0.8)");
  // $("li:odd").css("background-color","rgba(180,180,30,0.8)");
  // $("select").css("background-color","rgba(180,180,30,0.8)");
  /*Traversal using CSS Selector*/
  // $("#list").find("li").css("background-color","rgba(180,180,30,0.8)");
  // $("#list").children("li").css("background-color","rgba(180,180,30,0.8)");
  // $("#list").parents("body").css("background-color","rgba(180,180,30,0.8)");
  // $("#list").parent("body").css("background-color","rgba(180,180,30,0.8)");
  // $("#list").siblings("p").css("background-color","rgba(180,180,30,0.8)");
  // $("#list").next().css("background-color","rgba(180,180,30,0.8)");
  // $("#list").prev().css("background-color","rgba(180,180,30,0.8)");
  // $("h2").next().css("background-color","rgba(180,180,30,0.8)")
  /*jQuery for Filtering*/
  $("#list").children("li").filter(":even").css("background-color","rgba(180,180,30,0.8)");
  // $("li").filter(function(index){
  //   return index%4===0;
  // }).css("background-color","rgba(180,180,30,0.8)");
  // $("li").first().css("background-color","rgba(180,180,30,0.8)");
  // $("li").last().css("background-color","rgba(180,180,30,0.8)");
  // $("li").eq(-2).css("background-color","rgba(180,180,30,0.8)");
  // $("li").eq(4).css("background-color","rgba(180,180,30,0.8)");
  // $("li").not(function(index){
  //   return index % 3 ===2;
  // }).css("background-color","rgba(180,180,30,0.8)");
});