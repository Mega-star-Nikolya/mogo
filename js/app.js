$(function() {
    var header = $("#jsheader"),
        introH = $("#jsintro").innerHeight(),
        scrolloffset = $(window).scrollTop();


    /* Fixed Header */
    checkScroll(scrolloffset);

    $(window).on("scroll", function() {
        scrolloffset = $(this).scrollTop();
        checkScroll(scrolloffset);
    });

    function checkScroll(scrolloffset) {
        if (scrolloffset >= introH) {
            header.addClass("fixed")
        } else {
            header.removeClass("fixed")
        }
    }

    /* Smooth scroll */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();
        var $this = $(this),
            blockID = $(this).data('scroll'),
            blockOffset = $(blockID).offset().top;

        $("#jsnav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500)
    });

    /* Menu nav toggle */
    $("#jsnav_toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#jsnav").toggleClass("active");
    })


    /* Collapse */

    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockID = $(this).data('collapse');

        $this.toggleClass("active")
    });

    /* Slider */

    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    const nav__linkSearch = document.querySelector('.nav__linkSearch');
    const body = document.querySelector('body');
    nav__linkSearch.addEventListener('click', function(e) {
        e.stopPropagation();
        this.classList.add('nav__linkSearch--active')
    });
    body.addEventListener('click', function() {
        nav__linkSearch.classList.remove('nav__linkSearch--active')
    });
});