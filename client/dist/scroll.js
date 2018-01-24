$.jInvertScroll([$('.slider')]);
$(document).one("scroll", function(e) {
    $('.slider').css("padding-left", "40%");

});


var fixmeTop = $('.header').offset().top;

$(window).scroll(function() {

    var currentScroll = $(window).scrollTop();

    if (currentScroll >= fixmeTop) {
        $('.header').css({
            position: 'fixed',
            top: '0',
            left: '0'
        });
        $('.box').css({
            height: 'calc(150vw + 44px)',
        });
    } else {
        $('.header').css({
            position: 'static'
        });
        $('.box').css({
            height: '150vw',
        });
    }
});
