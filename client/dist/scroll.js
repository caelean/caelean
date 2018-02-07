const box = $('.box');
const slider = $('.slider');
const header_work = $('.header-work');
const header_education = $('.header-education');
const header_projects = $('.header-projects')
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
    let header_top = header.offset().top;

    let work_top = header_work.offset().top;
    if (header_top >= work_top) {
        $('.work').css({
            color: 'white'
        });

        header_work.css({
            zIndex: -1
        });
    } else {
        $('.work').css({
            color: 'black'
        });
        header_work.css({
            zIndex: 2
        });
    }
    let education_top = header_education.offset().top;
    if (header_top >= education_top) {
        $('.education').css({
            color: 'white'
        });
        $('.work').css({
            color: 'darkgrey'
        });
        header_education.css({
            zIndex: -1
        });
    } else {
        $('.education').css({
            color: 'black'
        });
        header_education.css({
            zIndex: 2
        });
    }

    let projects_top = header_projects.offset().top;
    if (header_top >= projects_top) {
        $('.projects').css({
            color: 'white'
        });
        $('.education').css({
            color: 'darkgrey'
        });
        header_projects.css({
            zIndex: -1
        });
    } else {
        $('.projects').css({
            color: 'black'
        });
        header_projects.css({
            zIndex: 2
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
