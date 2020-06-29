$(document).ready(function() {

    // Fixed Header
    var navbarCollapse = function() {
        if ($(window).scrollTop() > 400) {
            $('.main-header').addClass('is-scrolled');
        } else {
            $('.main-header').removeClass('is-scrolled');
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

});