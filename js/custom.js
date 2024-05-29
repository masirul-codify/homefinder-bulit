(function ($) {
  "use strict";
  $(document).ready(function () {

    // BAR ICON AND XMARK JQUERY FUNCTIONALITY 
    $('#navbarToggleBtn').click(function () {
      $('.navbar-toggle').toggleClass('show');
    });



    // COUNTER PLUGIN
    $(".counter").counterUp({
      delay: 10,
      time: 1000,
    });


    // AOS INIT PLUGIN
    AOS.init();


    // MAGNIFIC POPUP PLUGIN
    $(".video-play").magnificPopup({
      disableOn: 700,
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
    });

    // TILT ANIMATE PLUGIN
    $(".tilt-animate").tilt({
      maxTilt: 12,
      perspective: 1500,
    });


    // SCROLL TO TOP
    $(function () {
      $("#scrollTop").hide();
      var position = $(window).scrollTop();
      var timer;
      $(window).on("scroll", function () {
        var scrollTop = $(window).scrollTop();
        clearTimeout(timer);
        if (scrollTop > 100) {
          if (scrollTop > position) {
            $("#scrollTop").fadeOut();
          } else {
            $("#scrollTop").fadeIn();
            timer = window.setTimeout(function () {
              $("#scrollTop").fadeOut();
            }, 3000);
          }
          position = scrollTop;
        } else {
          $("#scrollTop").fadeOut();
        }
      });
      $(".scrollup-btn").click(function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
      });
    });

    // PRELOADER
    $(window).on("load", function () {
      $("#preloader").fadeOut();
      $("#preloader-status").delay(200).fadeOut("slow");
      $("body").delay(200).css({ "overflow-x": "hidden" });
    });

    //SEARCH BAR
    $(".adv_search_close").on("click", function () {
      $(".adv_search_area").removeClass("show_search");
    });

    $(".adv_search_icon").on("click", function (event) {
      $(".adv_search_area").toggleClass("show_search");
      event.stopPropagation();
    });

    $("body").click(function (event) {
      if ($(".adv_search_area").hasClass("show_search")) {
        if (!$(event.target).closest(". search-bar").length) {
          $(".adv_search_area").removeClass("show_search");
        }
      }
    });

    //SLECT_2 PLUGIN
    $(document).ready(function () {
      $(".select_2").select2();
    });



    // FIND PROPERTY SLIDER
    $('.find_property_slider').slick({
      dotsClass: false,
      infinite: false,
      speed: 300,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ],
      prevArrow: '<span class="prevArrow"><i class="fa-solid fa-arrow-left-long"></i></span>',
      nextArrow: '<span class="nextArrow"><i class="fa-solid fa-arrow-right-long"></i></span>',
    });


    // TEAM MEMBERS SLIDER
    $('.team_members_slider').slick({
      dotsClass: false,
      infinite: false,
      speed: 300,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ],
      prevArrow: '<span class="prevArrow"><i class="fa-solid fa-arrow-left-long"></i></span>',
      nextArrow: '<span class="nextArrow"><i class="fa-solid fa-arrow-right-long"></i></span>',
    });


    // BRANDS SLIDER
    $('.brands_slider').slick({
      arrows: false,
      dotsClass: false,
      infinite: false,
      speed: 300,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ],
    });

    // IMAGE SLIDESHOW 
    $('.active-image').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.image-slideshow-slider-nav'
    });
    $('.image-slideshow-slider-nav').slick({
      centerMode: true,
      centerPadding: '100px',
      slidesToShow: 5,
      slidesToScroll: 1,
      asNavFor: '.active-image',
      dots: false,
      centerMode: true,
      focusOnSelect: true,
      autoplay: true,
      autoplaySpeed: 1500,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
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
      ],
      prevArrow: '<span class="prevArrow"><i class="fa-solid fa-arrow-left-long"></i></span>',
      nextArrow: '<span class="nextArrow"><i class="fa-solid fa-arrow-right-long"></i></span>',
    });


    });
})(jQuery);
