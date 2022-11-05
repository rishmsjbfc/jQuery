/*Changing the CSS properties of Elements*/
$(function(){
	$(".gallery").css("display","none");
  var gallery = $(".gallery").find("img").first();
  const images = ["laptop-mobile_small.jpg","laptop-on-table_small.jpg","people-office-group-team_small.jpg"];
  var i =0;
	var redBox = $(".red-box");
	console.log(redBox.css("width"));
	console.log(redBox.width());

	redBox.css("background-color","#AA7700");
	$("p").css("font-size","18px");
	redBox.css("width","+=20px");

	var properties = $("p").css(["font-size","line-height","color"]);
	console.log(properties);
	console.log(properties["font-size"]);

	redBox.css("user-select",function(){
		return "none";
	})
/*Adding or Removing CSS Classes*/
	$("a").addClass("fancy-link");
	$("p:first").addClass("large emphasize");
	$("li li").addClass(function(index){
		$(this).addClass("item-"+index);
	});
	$("div").addClass(function(index,currentClass){
		if(currentClass === ""){
			return "red-box";
		}
	});
$(".red-box").removeClass("red-box").addClass("blue-box");
$(".dummy").removeClass("dummy").addClass("green-box");
/*Changing the Data of an element*/
var gallery = $(".gallery");
var imagesNew = [...images];
gallery.data("availableImages",images);
console.log(gallery.data("availableImages"));
gallery.data("name","The Awesome Gallery");
console.log(gallery.data);
gallery.removeData("data");
console.log(gallery.data("name"));//undefined;
var firstPar = $("p:first");
console.log(firstPar.data("mydata"));
// /*Retrieving and Changing the Content of an Element*/
var firstPar = $("p:first");
console.log(firstPar.text());	
console.log(firstPar.html());
firstPar.text("<strong>Namaste World</strong>");
firstPar.html("<strong>Namaste World</strong>");
firstPar.html(firstPar.html()+" This was just appended");
});
