const box = $('.box');
const slider = $('.slider');
const header = $('.header');

let fixmeTop = box.offset().top + box.outerHeight();
$.jInvertScroll([slider]);

$(window).one("scroll", function(e) {
    slider.css("padding-left", "40%");
});

$(window).one("resize", function(e) {
    slider.css("padding-left", "40%");
});

function updatePage() {
    let currentScroll = $(window).scrollTop();
    if (currentScroll >= fixmeTop) {
        header.css({
            position: 'fixed',
            top: '0',
            left: '0'
        });
        box.css({
            height: 'calc(100vw + 44px)'
        });
    } else {
        header.css({
            position: 'static'
        });
        box.css({
            height: '100vw'
        });
    }
}

$(window).resize(function() {
    fixmeTop = box.offset().top + box.outerHeight();
    updatePage();
});

$(window).scroll(function() {
    updatePage();
});
