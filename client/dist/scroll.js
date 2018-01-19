$.jInvertScroll([$('.slider')]);
$(document).one("scroll", function(e) {
    $('.slider').css("padding-left", "40%");

});
