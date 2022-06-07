$(function() {
    var header = $("#jsheader");
    var introH = $("#jsintro").innerHeight();
    var scrolloffset = $(window).scrollTop();


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
    };

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
    $("#jsnav_toggle").on("click", function (event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#jsnav").toggleClass("active");
    });


    /* Collapse секция аккардиона */

    $("[data-collaps]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockID = $(this).data('collaps'); // При нажатие на accordion__header мы получаем его id
        
        $(blockID).slideToggle();// Позволяет плавно открываться и закрываться
        $(this).toggleClass("active"); // После этого на нажатие на accordion__header узнав его id мы придаем класс active

    });

    /* Slick Slider  
    https://kenwheeler.github.io/slick/*/

    $("[data-slider]").slick({
        infinite: true, //,бесконечная прокрутка
        fade: false,
        slidesToShow: 1, //показывать 1 слайд
        slidesToScroll: 1 //пролистывать 1 слайд
    });

});