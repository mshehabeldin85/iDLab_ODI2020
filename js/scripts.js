/*!
    * Start Bootstrap - Creative v6.0.2 (https://startbootstrap.com/themes/creative)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-creative/blob/master/LICENSE)
    */

  //  function registration() {
  //    alert("hello world");
  //  }

  function check(form) {
    const api_key = "keyPerKCGLdhIH8g8"; // API KEY
    const baseID = "appBa58conr80osIb";  // BASE ID

    // Specify the URL to call.
    const url = "https://api.airtable.com/v0/" + baseID
    + "/" + encodeURIComponent("RegistrationCodes")
    + "?" + "api_key=" + api_key;

    fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
      console.log(data);
    })
    .catch(function(error) {
      console.log(error);
    });

    if(form.inputCode.value == "abc")
    {
      document.getElementById("error-message").style.display = "none";

      $('#codeModal').modal('hide');
      $('#registrationModal').modal('show');

    }
    else
    {
      document.getElementById("error-message").style.display = "block";
    }
    form.reset();


  }

    (function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          // scrollTop: (target.offset().top - 72)
          scrollTop: (target.offset().top - 0)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 75
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-scrolled");
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Magnific popup calls
  // $('#portfolio').magnificPopup({
  //   delegate: 'a',
  //   type: 'image',
  //   tLoading: 'Loading image #%curr%...',
  //   mainClass: 'mfp-img-mobile',
  //   gallery: {
  //     enabled: true,
  //     navigateByImgClick: true,
  //     preload: [0, 1]
  //   },
  //   image: {
  //     tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
  //   }
  // });

  $('#hiddenSpeakers').on('hidden.bs.collapse', function () {
    $('#btn-switch').text('See more')
  });

  $('#hiddenSpeakers').on('show.bs.collapse', function () {
    $('#btn-switch').text('See less')
  });


  $('.data-toggler').click(function(){
		$('.data-toggle').hide();
		$($(this).attr('data-id')).show();
	});


  // $('.nav-menu').superfish({
  //       animation: {
  //         opacity: 'show'
  //       },
  //       speed: 400
  // });

  // $('.registration').click(function() {
  //   alert("hi amber!");
  // });

  // $('.regCodeSubmit').click(function() {
  //  if($(inputcode.value)== "abc"){
  //     // $($(this).attr('data-id')).show();
  //     alert();
  //  }
  //  else{
  //    alert("please try again!");
  //  }
  // });

})(jQuery); // End of use strict
