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

  $(".h-link").bind("click", function(e) {
    e.preventDefault();

    // Animation scroll
    var target = $(this).attr("href");
    $("html, body").stop().animate({
      scrollTop: $(target).offset().top
      }, 600, function() {
      location.hash = target;
    });
    return false;
  }) 

  $(".h-link-sm").bind("click", function(e) {
    e.preventDefault();

    // Animation scroll
    var targetSm = $(this).attr("href");
    $("html, body").stop().animate({
      scrollTop: $(targetSm).offset().top
      }, 600, function() {
      location.hash = targetSm;
    });
    return false;
  }) 
  
})

$(window).scroll(function() {
  var scrollDistance = $(window).scrollTop();
  $(".page-section").each(function(i) {
    if (i === 0 && ($(this).offset().top > scrollDistance)) {
      $(".gla_parent .h-link.active").removeClass("active");
      $(".gla_parent .h-link-sm.active").removeClass("active");
    }

    if ($(this).offset().top <= scrollDistance) {
      $(".gla_parent .h-link.active").removeClass("active");
      $(".gla_parent .h-link-sm.active").removeClass("active");
      $(".gla_parent .h-link").eq(i).addClass("active");
      $(".gla_parent .h-link-sm").eq(i).addClass("active");
    } 

    // Add animation
    var id = $(this).attr("id");
      var offset = $(this).offset().top - 700;

      if (offset <= scrollDistance) {
        switch (id) {
          case "invitation":
            $(".h-countdown-decor").removeClass("visibility-hidden");
            $(".h-countdown-decor").addClass("animated fadeInUp delay-1s");
            $(".h-infor__left").removeClass("visibility-hidden");
            $(".h-infor__right").removeClass("visibility-hidden");
            $(".h-infor__left").addClass("animated bounceInLeft delay-1s");
            $(".h-infor__right").addClass("animated bounceInRight delay-1s");
            break;
          case "story":
            $(".h-story-title").removeClass("visibility-hidden");
            $(".h-timeline__item").removeClass("visibility-hidden");
            $(".h-story-title").addClass("animated fadeInUp");
            $(".h-timeline__item").addClass("animated fadeInUp");
            break;
          case "moment":
            $(".h-moment-title").removeClass("visibility-hidden");
            $(".h-carousel").removeClass("visibility-hidden");
            $(".h-moment-title").addClass("animated fadeInUp");
            $(".h-carousel").addClass("animated fadeInRight");
            break;
          case "event":
            $(".h-event-decor").removeClass("visibility-hidden");
            $(".h-event__single-time").removeClass("visibility-hidden");
            $(".h-event__single-mid").removeClass("visibility-hidden");
            $(".h-event__single-place").removeClass("visibility-hidden");
            $(".h-event-decor").addClass("animated fadeInUp");
            $(".h-event__single-time").addClass("animated fadeInLeft");
            $(".h-event__single-mid").addClass("animated fadeInUp");
            $(".h-event__single-place").addClass("animated fadeInRight");
            $(".h-rsvp__wrp").removeClass('visibility-hidden')
            $(".h-rsvp__wrp").addClass('animated fadeInUp delay-1s')
            break;
          default:
            break;
        }
      }
  });
}).scroll();