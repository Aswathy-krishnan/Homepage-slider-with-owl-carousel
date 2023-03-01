var owl = $(".owl-carousel");
    owl.owlCarousel({
      // items: 3,
      margin: 10,
      loop: true,
      nav: true,
      autoplay: true,
      autoplayHoverPause: true,
      autoplayTimeout: 6000,
      // dotsEach: true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          // nav: true,
        },
        600: {
          items: 1,
          // nav: false,
        },
        1000: {
          items: 1,
          // nav: true,
          loop: false,
        },
      },
    });