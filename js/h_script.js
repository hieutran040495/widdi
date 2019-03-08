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