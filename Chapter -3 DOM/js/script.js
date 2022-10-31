$(function() {
  // jQuery goes here...
  /*Adding new elements to the DOM*/
  // $("ul ul:first").append("<li>I'm gonna be the last sub-item</li>")
  // $("<li>I'm gonna be the last item</li>").appendTo($("ul ul:first"));
  // $("ul ul:first").prepend("<li>I'm gonna be the first sub-item</li>");
  // $("ul ul").prepend("<li>I'm gonna be the first item</li>")
  // $("<li>I'm gonna be the first item</li>").prependTo($("ul ul"));
  // $(".red-box").after("<div class='red-box'>Another Red</div>")
  // $(".blue-box").before("<div class='blue-box'>Another Blue</div>")
  // $(".blue-box").before(function(){
  //   return "<div class='blue-box'> Blue 2</div>";
  // });
  // $("p").after($("#list"));
  // $(".red-box").after($("<div class='red-box'>Another Red</div>"));
  // $(".green-box").after($("<div class='green-box'>Another Green</div>"));
  // $(".blue-box").after($("<div class='blue-box'>Another Blue</div>"));
  /*Replacing Elements and Content*/
  // $("li").replaceWith("<li>Replaced</li>");
  // $("li").replaceWith(function(){
  //   return "<li>Replaced with function</li>";
  // });
  // var firstListItem = $("li:first");
  // $("p").replaceWith(firstListItem);
  // var redBox = $(".red-box");
  // var blueBox = $(".blue-box");
  // blueBox.replaceWith($(".green-box"));
  // redBox.replaceWith($(".green-box"));
  // $("<div class='green-box'>More Green!</div>").replaceAll(".red-box, .blue-box");
  /*Removing Elements and Content*/
  // $("li").remove();
  // $("input[type='text'],br, textarea").remove();
  // $("form").children().not("input:text, textarea, br").remove();
  // var detachedListITem = $("li").detach();
  // $("#context").append(detachedListITem);
  // $("p:first").empty();
  // $(".red-box").empty();
  // $(".blue-box").empty();
  // $(".green-box").empty();
  /*attr, prop, val */
  // const specialLink = $("#special-link");
  // console.log(specialLink.attr("href"));
  // console.log(specialLink.attr("title"));
  // specialLink.attr("href","https://www.google.com");
  // var isChecked = $("#cb");
  // console.log(isChecked.attr("checked"),isChecked.prop("checked"));
  // $("#cb").val("false");
  // console.log(isChecked.attr("checked"),isChecked.prop("checked"));
  // console.log($("input[type='range']").val());
  /*Chapter-3 Final Project*/
  var gallery = $(".gallery").find("img").first();
  const images = ["laptop-mobile_small.jpg","laptop-on-table_small.jpg","people-office-group-team_small.jpg"];
  var i =0;
  setInterval(function(){
    i = (i+1)%images.length;
    gallery.fadeOut(function(){
      console.log("New Image "+"./images/"+images[i])
      $(this).attr("src","./images/"+images[i]);
      $(this).fadeIn();
    })
  },2000)
});