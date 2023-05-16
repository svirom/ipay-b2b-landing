$(document).ready(function() {

  $(window).scroll(function() {
    if ($(this).scrollTop() > 40) {
      $('.header').addClass("scrolled");
    } else {
      $('.header').removeClass("scrolled");
    }
  });

  if ($(window).scrollTop() > 40) {
    $('.header').addClass("scrolled");
  } else {
    $('.header').removeClass("scrolled");
  }

  $('.promo-award__slider').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    dotsClass: 'slider-dots',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('.method-cards__slider').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    dotsClass: 'slider-dots',
    settings: "unslick",
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

})