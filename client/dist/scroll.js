$.jInvertScroll([$('.slider')]);
$(document).one("scroll", function(e) {
    $('.slider').css("padding-left", "40%");

});


var fixmeTop = $('.header').offset().top;       // get initial position of the element

$(window).scroll(function() {                  // assign scroll event listener

    var currentScroll = $(window).scrollTop(); // get current position

    if (currentScroll >= fixmeTop) {           // apply position: fixed if you
        $('.header').css({                      // scroll to that element or below it
            position: 'fixed',
            top: '0',
            left: '0'
        });
    } else {                                   // apply position: static
        $('.header').css({                      // if you scroll above it
            position: 'static'
        });
    }

});
