!(function ($) {
  "use strict";

   /*===========================
  ====== Preloader =======
  =============================*/
  setTimeout(function () {
    $('.centered').fadeToggle();
  }, 30);


  /*===========================
  ====== Sticky Navbar =======
  =============================*/
  // window.onscroll = function () { myFunction() };
  // var navbar = document.getElementById("mynavbar");
  // function myFunction() {
  //   if (window.pageYOffset >= 100) {
  //     navbar.classList.add("sticky")
  //   } else {
  //     navbar.classList.remove("sticky");
  //   }
  // }



  // Sticky Navbar
window.onscroll = function() {myFunction()};
var navbar = document.getElementById("mynavbar");
function myFunction() {
  if (window.scrollY >= 200) {
	navbar.classList.add("sticky")
  } else {
	navbar.classList.remove("sticky");
  }
}

  /*===========================
  === Hover Dropdown item Navbar ===
  =============================*/
  $('body').on('mouseenter mouseleave','.dropdown',function(e){
    var _d=$(e.target).closest('.dropdown');
    if (e.type === 'mouseenter')_d.addClass('show');
    setTimeout(function(){
      _d.toggleClass('show', _d.is(':hover'));
      $('[data-toggle="dropdown"]', _d).attr('aria-expanded',_d.is(':hover'));
    },300);
  });
  

  /*===========================
  ====== Porfolio Filter ======
  =============================*/
  $(document).ready(function () {
    $(".filter-button").click(function () {
      var value = $(this).attr('data-filter');
      if (value == "all") {
        $('.filter').show('1000');
      }
      else {
        $(".filter").not('.' + value).hide('3000');
        $('.filter').filter('.' + value).show('3000');
      }
      // active
      $(".filter-button").removeClass('active');
      var $this = $(this);
      if (!$this.hasClass('active')) {
        $this.addClass('active');
      }
    });
  });



  //======================
  // Team Section
  //======================


  $(".list_carousel").owlCarousel({
    loop: true,
    margin: 30,
    autoplay: false,
    smartSpeed: 1500,
    nav: false,
    dots: false,
    autoplayTimeout: 5000,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      768: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });

  /*===========================
  === Testimonial Carousel ====
  =============================*/
  $(document).ready(function () {
    $('#testimonial-carousel').owlCarousel({
      loop: true,
      margin: 30,
      autoplay: true,
      smartSpeed: 1500,
      nav: false,
      dots: false,
      autoplayTimeout: 5000,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 1
        },
        991: {
          items: 1
        },
        1200: {
          items: 1
        },
        1920: {
          items: 1
        }
      }
    });
  });


  //======================
  // Partner slider carousel
  //======================


  $(".partner-logo").owlCarousel({
    loop: true,
    margin: 30,
    smartSpeed: 1500,
    autoplay: true,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 2
      },
      600: {
        items: 3
      },
      768: {
        items: 4
      },
      1000: {
        items: 5
      }
    }
  });

  //======================
  // Appointment slider carousel
  //======================


  $(".appointment-logo").owlCarousel({
    loop: true,
    margin: 30,
    smartSpeed: 1500,
    autoplay: true,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 2
      },
      600: {
        items: 3
      },
      768: {
        items: 3
      },
      1000: {
        items: 3
      }
    }
  });



  /*===========================
  ==== Main Banner Carousel ===
  =============================*/

  $(document).ready(function () {
    $('select').niceSelect();
  });
  $('#main-banner-carousel').owlCarousel({
    loop: true,
    dots: false,
    autoplay: false,
    smartSpeed: 2000,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      }
    }
  });








  /*===========================
  ======== PopUp Video ========
  =============================*/
  $(document).ready(function () {
    $('.venobox').venobox({
      'share': false
    });
  });




  /*===========================
  == Contact Form Validation ==
  =============================*/

  (function () {
    'use strict';
    window.addEventListener('load', function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener('submit', function (event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();

 

  /*===========================
  == Contact Submittion Alert ==
  =============================*/

  (function () {
    "use strict";
    window.addEventListener(
      "load",
      function () {
        var forms = document.getElementsByClassName("needs-validation");
        var validation = Array.prototype.filter.call(forms, function (form) {
          form.addEventListener(
            "submit",
            function (event) {
              if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
              }
              if (form.checkValidity() === true) {
                alert("Message has been Sent");
              }
              form.classList.add("was-validated");
            },
            false
          );
        });
      },
      false
    );
  })();


  /*===========================
  ======= Stat Counter ========
  =============================*/
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });



  /*===========================
  ======= To Top ========
  =============================*/
  $(document).ready(function (e) {

    // browser window scroll (in pixels) after which the "back to top" link is shown
    var offset = 200,
      //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
      offset_opacity = 1200,
      //duration of the top scrolling animation (in ms)
      scroll_top_duration = 100,
      //grab the "back to top" link
      $back_to_top = $('#back-top');

    //hide or show the "back to top" link
    $(window).scroll(function () {
      ($(this).scrollTop() > offset) ? $back_to_top.addClass('is-visible') :
        $back_to_top.removeClass('is-visible is-fade-out');
      if ($(this).scrollTop() > offset_opacity) {
        $back_to_top.addClass('is-fade-out');
      }
    });

    //smooth scroll to top
    $back_to_top.on('click', function (event) {
      event.preventDefault();
      $('body,html').animate({
        scrollTop: 0,
      }, scroll_top_duration);
    });
  });

 /*===========================
  == Page Reloading Problem ==
  =============================*/
// window.onload = function () { document.body.scrollTop = document.documentElement.scrollTop = 0; };





})(jQuery);