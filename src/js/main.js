$(document).ready(function () {
  $(".btn-menu-mobile").click(function () {
      $("nav ul").slideToggle("500");
    });
    $(window).resize(function () {
      if ($(window).width() > 768) {
        $("nav ul").removeAttr("style");
      }
  });


  $(".banner-slider").slick({
    lazyLoad: "ondemand",
    draggable: false,
    dots: true,
    arrows: false,
    slideToShow: 1,
    slideToScroll: 1,
    adaptiveHeight: true,
    variableWidth: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  

  // $(".offers-slider").slick({
  //   lazyLoad: "ondemand",
  //   dots: false,
  //   arrows: true,
  //   prevArrow: "<img src='../../build/img/prev-arrow.svg' class='slick-prev' alt='1'>",
  //   nextArrow: "<img src='../../build/img/next-arrow.svg' class='slick-next' alt='2'>",
  //   slideToShow: 3,
  //   slideToScroll: 1,
  //   variableWidth: true,
  //   autoplay: false,
  //   speed: 1000,
  //   autoplaySpeed: 4000,
    
  // });


  // $('.our-project__carousel').slick({
  //   dots: false,
  //   infinite: false,
  //   speed: 300,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   responsive: [{
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         dots: true
  //       }
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }
  //   ]
  // });




  //  $(".offers-slider").slick({
 
  //   prevArrow: "<img src='../../build/img/prev-arrow.svg' class='slick-prev' alt='1'>",
  //   nextArrow: "<img src='../../build/img/next-arrow.svg' class='slick-next' alt='2'>",
  //   slideToShow: 2,
  //   slideToScroll: 2
 
  // });



// Init nice-select
$('select').niceSelect();



});

