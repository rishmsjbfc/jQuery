$(function() {
  // jQuery goes here...

  // Uncomment this line to fade out the red box on page load

  /*Fading In elements and Fading Them Out Again*/
  // jQuery(".red-box").fadeOut(2000);
  // jQuery(".red-box").fadeIn(1000);
  // jQuery(".red-box").fadeTo(1000,0.5);

  /*Fade Toggle and Fade To*/
  // $(".red-box").fadeTo(3000,0.2);
  // $(".green-box").fadeTo(2000,0.5);
  // $(".blue-box:first-child").fadeTo(1000,0.8);
  // $(".green-box").fadeToggle();
  // $(".green-box").fadeToggle();

  //A Pitfall with fadein/fadeOut vs fadeTo
  // $(".green-box").fadeTo(1000,0);

  // //Toggle
  // $(".blue-box").toggle(4000);
  // $(".blue-box").show(5000);

  /*Sliding elements Up and Down*/
  // $(".blue-box").slideUp(1000);
  // $(".blue-box").slideDown(2000);
  // $("p").hide();
  // $("p").slideDown(3000);

  /*Moving elements*/
  // $(".blue-box").slideToggle(2000);
  // $(".blue-box").animate({
  //   "margin-left": "+=200px",
  //   "opacity":0,
  //   "height": "50px",
  //   "width": "50px",
  //   "margin-top": "+=25px"
  // },1000,"linear");
  // $(".blue-box").animate({
  //   "margin-left": "-=200px",
  //   "opacity":1,
  //   "height": "80px",
  //   "width": "80px",
  //   "margin-top": "-=25px"
  // },1000,"linear");

  /*Text animations*/
  // $("p").animate({
  //   "font-size": "+=20px"
  // },2000,"linear")
  
  /*Delaying and Changing animations*/
  // $(".red-box").fadeTo(1000,0.2);
  // $(".green-box").delay(1000).fadeTo(1000,0.2);
  // $(".blue-box").delay(2000).fadeTo(1000,0.2);

  /*Using callback functions to delay animations*/
  // $(".red-box").fadeTo(1000,0.2,function(){
  //   $(".green-box").fadeTo(1000,0.2,function(){
  //     $(".blue-box").fadeTo(1000,0.2);
  //   });
  // });

  /*Coding Activity: Create a signup lightbox*/
  // $(".lightbox").delay(1000).fadeIn(1000).delay(3000).fadeOut(1000);
});