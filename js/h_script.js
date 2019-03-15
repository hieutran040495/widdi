var target;

$(document).ready(function() {
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

  $('.h-link').bind('click', function(e) {
    e.preventDefault();

    // Animation scroll
    target = $(this).attr("href");
    $('html, body').stop().animate({
      scrollTop: $(target).offset().top
      }, 600, function() {
      location.hash = target;
    });
    return false;
  }) 

  $('.h-link-sm').bind('click', function(e) {
    e.preventDefault();

    // Animation scroll
    target = $(this).attr("href");
    $('html, body').stop().animate({
      scrollTop: $(target).offset().top
      }, 600, function() {
      location.hash = target;
    });
    return false;
  }) 
  
})

$(window).scroll(function() {
  var scrollDistance = $(window).scrollTop();
  $('.page-section').each(function(i) {
    if (i === 0 && ($(this).offset().top > scrollDistance)) {
      $('.gla_parent .h-link.active').removeClass('active');
      $('.gla_parent .h-link-sm.active').removeClass('active');
    }
    if ($(this).offset().top <= scrollDistance) {
      $('.gla_parent .h-link.active').removeClass('active');
      $('.gla_parent .h-link-sm.active').removeClass('active');
      $('.gla_parent .h-link').eq(i).addClass('active');
      $('.gla_parent .h-link-sm').eq(i).addClass('active');
    } 
  });
}).scroll();