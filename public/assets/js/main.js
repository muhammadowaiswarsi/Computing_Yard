"use strict";
jQuery(document).ready(function ($) {
  $(window).load(function () {
    $(".loaded").fadeOut();
    $(".preloader").delay(100).fadeOut("slow");
  });
  /*---------------------------------------------*
     * Mobile menu
     ---------------------------------------------*/
  $("#bs-example-navbar-collapse-1")
    .find("a[href*=#]:not([href=#])")
    .click(function () {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html,body").animate(
            {
              scrollTop: target.offset().top - 0,
            },
            10
          );
          if ($(".navbar-toggle").css("display") != "none") {
            $(this)
              .parents(".container")
              .find(".navbar-toggle")
              .trigger("click");
          }
          return false;
        }
      }
    });

  /*---------------------------------------------*
     * WOW
     ---------------------------------------------*/

  var wow = new WOW({
    mobile: false, // trigger animations on mobile devices (default is true)
  });
  wow.init();

  /* ---------------------------------------------------------------------
     Carousel
     ---------------------------------------------------------------------= */

  $(".main_home_slider").owlCarousel({
    responsiveClass: true,
    autoplay: false,
    items: 1,
    loop: true,
    dots: true,
    nav: false,
    navText: [
      "<i class='lnr lnr-chevron-left'></i>",
      "<i class='lnr lnr-chevron-right'></i>",
    ],
    autoplayHoverPause: true,
  });

  $(".single_features_slide").owlCarousel({
    responsiveClass: true,
    autoplay: false,
    items: 1,
    loop: true,
    dots: true,
    nav: false,
    navText: [
      "<i class='lnr lnr-chevron-left'></i>",
      "<i class='lnr lnr-chevron-right'></i>",
    ],
    autoplayHoverPause: true,
  });

  $(".main_teastimonial_slider").owlCarousel({
    responsiveClass: true,
    autoplay: false,
    items: 1,
    loop: true,
    dots: true,
    nav: false,
    navText: [
      "<i class='lnr lnr-chevron-left'></i>",
      "<i class='lnr lnr-chevron-right'></i>",
    ],
    autoplayHoverPause: true,
  });

  // magnificPopup

  $(".portfolio-img").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  //mytabs

  //    $('ul.service_tabe_menu li a').click(function (e) {
  //        e.preventDefault()
  //        $(this).tab('show')
  //    });

  //skillbar section

  var skillBarTopPos = jQuery(".skillbar").position().top;
  jQuery(document).scroll(function () {
    var scrolled_val = $(document).scrollTop().valueOf();
    if (scrolled_val > skillBarTopPos - 250) startAnimation();
  });

  function startAnimation() {
    jQuery(".skillbar").each(function () {
      jQuery(this)
        .find(".skillbar-bar")
        .animate(
          {
            width: jQuery(this).attr("data-percent"),
          },
          6000
        );
    });
  }
  //---------------------------------------------
  // Counter
  //---------------------------------------------

  $(".statistic-counter").counterUp({
    delay: 10,
    time: 2000,
  });

  // main-menu-scroll

  jQuery(window).scroll(function () {
    var top = jQuery(document).scrollTop();
    var height = 150;
    //alert(batas);

    if (top > height) {
      jQuery(".navbar-fixed-top").addClass("menu-scroll");
    } else {
      jQuery(".navbar-fixed-top").removeClass("menu-scroll");
    }
  });

  // scroll Up

  $(window).scroll(function () {
    if ($(this).scrollTop() > 600) {
      $(".scrollup").fadeIn("slow");
    } else {
      $(".scrollup").fadeOut("slow");
    }
  });

  $(".scrollup").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 10);
    return false;
  });

  //    $('#menu').slicknav();
  jQuery("#portfoliowork").mixItUp({
    selectors: {
      target: ".tile",
      filter: ".filter",
      sort: ".sort-btn",
    },
    animation: {
      animateResizeContainer: false,
      effects: "fade scale",
    },
  });

  $(".dropdown-menu").click(function (e) {
    e.stopPropagation();
  });

  //End
});

$(document).on("scroll", function () {
  if ($(document).scrollTop() > 120) {
    $("nav").addClass("small");
  } else {
    $("nav").removeClass("small");
  }
});

const form = document.querySelector("#formid");
const submitInput = form.querySelector('input[type="submit"]');

async function postData(
  url = "https://cy-attendance-server.herokuapp.com/msg",
  data = {}
) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    // credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "2byvweutuk5wkABXa71gs7Y4mcsDeVYw3DIdEPlD",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    // redirect: "follow", // manual, *follow, error
    // referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}
function getFormData(e) {
   // https://192.168.100.36:3002/msg
   // https://cy-attendance-server.herokuapp.com/msg
   // https://d9pw3eu2qb.execute-api.us-east-1.amazonaws.com/default/CYContactUs
  e.preventDefault();
  const formData = new FormData(form);
  const data = {
    firstName: formData.get("firstName") ?  formData.get("firstName") : "",
    lastName: formData.get("lastName") ? formData.get("lastName") : "",
    email: formData.get("email") ? formData.get("email") : "",
    subject: formData.get("subject") ? formData.get("subject") : "",
    message: formData.get("message") ? formData.get("message") : "",
  };

  if(!(data.firstName && data.lastName && data.email && data.subject && data.message)){
      return swal("Woah!","Please fill the details", "warning");
  }
  if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(data.email))){
      return swal("Woah!","Please enter a valid email address", "warning");
  }
    let messageText = data.message.replace(/\S+/g, "x");
    let noWords = messageText.replace(/x/g, "");
    let wordLength = messageText.length - noWords.length;
  if(!(wordLength >= 1)){
      return swal("Woah!","Please Enter minimum of 1 words in message.", "warning");
  }
  if(!(wordLength <= 150)){
    return swal("Woah!","Please Enter maximum of 150 words in message ", "warning");
}
  postData("https://d9pw3eu2qb.execute-api.us-east-1.amazonaws.com/default/CYContactUs", data)
    .then((e) =>
      { 
          swal(
        "Thank You!",
        "We have received your response, we will contact you as soon as possible!",
        "success"
      )}
    )
    .catch((e) => {
      console.log(e)
        swal("Oops!", "Something Went Wrong!", "error")})
    .finally((e) => {
      document.querySelector("#firstname").value = null;
      document.querySelector("#lastname").value = null;
      document.querySelector("#email").value = null;
      document.querySelector("#subject").value = null;
      document.querySelector("#message").value = null;
    });
}
document.addEventListener("DOMContentLoaded", function () {
  submitInput.addEventListener("click", getFormData, false);
});
