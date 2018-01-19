$.jInvertScroll([$('.sideways')]);
$(document).one("scroll", function(e) {
    $('.sideways').css("padding-left", "30%");

});
