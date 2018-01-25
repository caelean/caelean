$.jInvertScroll([$('.slider')]);
const fixmeTop = $('.header').offset().top;

$(window).one("scroll", function(e) {
    $('.slider').css("padding-left", "40%");
});

$(window).one("resize", function(e) {
    $('.slider').css("padding-left", "40%");
    fixmeTop = $('.header').offset().top;
});

function updatePage() {
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
}

$(window).resize(function() {
    updatePage();
});

$(window).scroll(function() {
    updatePage();
});
