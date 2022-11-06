$(function(){
	const images = ["./images/laptop-mobile_small.jpg","./images/laptop-on-table_small.jpg","./images/people-office-group-team_small.jpg"];
	/*On Click Listener*/
	$("#button-for-click").click(function(event){
		if(event.altKey===true)
			console.log("Button was clicked with Alt key pressed");
		else if(event.ctrlKey===true)
			console.log("Button was clicked with Ctrl key pressed");
		else
			console.log("Button was clicked");
	})
	$(".red-box").click(function(count){
		$(this).fadeTo(2000,0.5);
	});
	/*On Hover Listener*/
	$("#button-for-hover").hover(function(){
		alert("I was hovered");
	});
	$(".green-box").hover(function(){
		$(this).text("I was hovered");
	})
	/*Mouse Enter and Mouse Leave Listener*/
	var blueBox = $(".blue-box");
	blueBox.mouseenter(function(){
		$(this).stop().fadeTo(500,0.5);
	});
	blueBox.mouseleave(function(){
		$(this).stop().fadeTo(500,1);
	});
	/*hover(HoverIn,HoverOut)*/
	var greenBox = $(".green-box");
	greenBox.hover(()=>$(greenBox).stop().fadeTo(500,0.5),()=>$(greenBox).stop().fadeTo(500,1));
	/*On Event Listener*/
	$("html").on("click keydown",function(){
		console.log("Key was pressed or Button was clicked");
	});
	var gallery = $(".gallery");
	let i = 0;
	gallery.find("img").on("click",function(){
		i=(i+1)%images.length;
		$(this).fadeOut(function(){
			$(this).attr("src",images[i]).fadeIn();
		});
	})
	/*Delegated Events*/
	$("p").on("click",function(){
		$(this).slideUp();
	});
	$("#content").append("<p>This is a dynamically added paragraph</p>");
	//Problem being the dynamically added content which were not previously part of the page the above handler would not work for those.
	//Delegated Event Handler
	$("#content").on("click","p",function(){
		$(this).slideUp();
	});
	// $("body").find("ul").on("click","li",function(){
	// 	console.log("Triggered");
	// 	$(this).css("color","red");
	// })
	$("body").on("mouseenter","li",function(){
		$(this).css("color","red");
	});
	$("body").on("mouseleave","li",function(){
		$(this).css("color","black");
	});
	/*Passing additional data to the event handler*/
	$("#button-for-click").on("click",{
		user : "Rishav",
		portfolioBalance : "$300"
	},function(event){
		greetUser(event.data);
	})
const greetUser = function(userData)
	{
		alert("Hello "+ userData.user+ "! Your portfolio balance is "+userData.portfolioBalance);
	}
	/*Chapter - 4 Final Task*/
	var galleryItems = $(".gallery-items").find("img");
	galleryItems.css("width","33%").css("opacity",0.7);
	galleryItems.on("mouseenter",function(){
		galleryItems.stop().fadeIn(500,1);
	});
	galleryItems.on("mouseleave",function(){
		galleryItems.stop().fadeOut(500,0.7);
	});
	galleryItems.on("click",function(){
		var source = $(this).attr("src");
		// var image = "<img src = "+source+" alt = another image/>";
		var image = $("<img>").attr("src",source).css("width","100%");
		$(".lightbox").empty().append(image).fadeIn(2000);
	});
	$(".lightbox").on("click",function(){
		$(this).stop().fadeOut(500);
	})
	/*KeyUp and KeyDown Events*/
	$("html").keydown(function(event){
		if(event.which===39)
		{
			// $(".blue-box").css("left-margin","+=10px");
			$(".blue-box").animate({
				"margin-left":"+10px"
			})
		}
		if(event.which===37)
		{
			$(".blue-box").animate({
				"margin-left":"-10px"
			})
		}
	})
})