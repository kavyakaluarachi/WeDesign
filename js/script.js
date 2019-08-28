/* ==================================================
Preloader:
====================================================*/

// monitors website fully loaded, hides preloader elements

$(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});


/* ==================================================
Portfolio:
====================================================*/
$(window).on('load', function () {
    // initialize isotope plugin 
    $("#isotope-container").isotope({});

    // filter items on button click
    $('#isotope-filters').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        // filter portfolio items
        $("#isotope-container").isotope({
            filter: filterValue
        });

        // active button
        $("#isotope-filters").find('.active').removeClass('.active');
        $(this).addClass('active');

    });
});

/* ==================================================
Magnifier Popup Plugin:
====================================================*/
$(function () {

    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a', // child items selector, popup will open when clicked
        type: 'image',
        // gallery option
        gallery: {
            enabled: true
        }

    });
});

/* ==================================================
Team Members:
====================================================*/
$(function () {
    $("#team-slider").owlCarousel({
        items: 1,
        /*how many items are displayed at a time*/
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});

/* ==================================================
Navigation Bar: (show/hide effects)
====================================================*/
$(function () {

    // page load,
    showHideNav();
    // on window scroll
    $(window).scroll(function () {
        showHideNav();
    })

    function showHideNav() {

        //function executed when scroll
        if ($(window).scrollTop() > 50) {
            //display white nav

            //selects white nav, add white nav class
            $("nav").addClass("white-nav-top");

        } else {

            $("nav").removeClass("white-nav-top");
        }
    }
});

/* ==================================================
Navigation Bar: smooth scrolling
====================================================*/

$(function () {
    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();
        var section_id = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(section_id).offset().top - 64
        }, 1250);
    });
});



/* ==================================================
Mobile Menu:
====================================================*/

$(function () {
    //show mobile nav
    $("#mobile-nav-open-btn").click(function () {
        //opens mobile nav, sets height from 0->100
        $("#mobile-nav").css("height", "100%");
    });

    //hide mobile nav
    $("#mobile-nav-close-btn, #mobile-nav a").click(function () {
        //opens mobile nav, sets height from 0->100
        $("#mobile-nav").css("height", "0%");
    });
});

/* ==================================================
Animations:
====================================================*/

$(function() {
    // initializes wow.js plugin
    new WOW().init();
})

// apply animation for homepage after page loaded

$(window).on('load', function() {
    $("#home-heading1").addClass("animated fadeInDown");
    $("#home-heading2").addClass("animated fadeInLeft");
    $("#home-paragraph").addClass("animated zoomIn");
    $("#home-button").addClass("animated zoomIn");
});