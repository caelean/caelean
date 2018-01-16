$.jInvertScroll([$('.sideways')]);
$(document).one("scroll", function(e) {
    $('.sideways').css("padding-left", "10%");
    $('.sideways').css("padding-right", "10%");
});
