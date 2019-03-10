$(".h-image-bck").each(function() {
  var image = $(this).attr("data-h-image");
  if (image) {
    $(this).css("background-image", "url(" + image + ")");
  }
})

$(".owl-carousel").owlCarousel({
  loop:true,
  margin:10,
  items:1,
  responsive: false,
  autoPlay:true,
  autoPlayTimeout:500,
  autoPlayHoverPause:true
});

$(window).scroll(function() {
  var topPos = $(this).scrollTop();
  if (topPos >= 527) {
    $(".h-logo-text").addClass("h-logo-text--scroll");
  } else {
    $(".h-logo-text").removeClass("h-logo-text--scroll");
  }
})

// Menu scroll animation
// var invitation = $("#invitation").position();
// var maxim = $("#maxim").position();
// var story = $("#story").position();
// var moment = $("#moment").position();
// var event = $("#event").position();
// var rsvp = $("#rsvp").position();

// animationScroll(".link1", invitation);
// animationScroll(".link2", maxim);
// animationScroll(".link3", story);
// animationScroll(".link4", moment);
// animationScroll(".link5", event);
// animationScroll(".link6", rsvp);

// function animationScroll(id, el) {
//   $(id).click(function() {
//     $('html, body').animate({
//       scrollTop: el.top
//     }, 500);
//     return false;
//   });
// }
