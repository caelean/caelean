$.jInvertScroll([$('.sideways')]);
$(document).one("scroll", function(e) {
    $('.sideways').css("padding-left", "40%");
    $('.sideways').css("padding-right", "10%");
});
