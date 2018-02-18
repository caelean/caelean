const box = $('.box');
const slider = $('.slider');
const header = $('.header');

const headerWork = $('.header-work');
const work = $('.work');
let visitedWork = false;

const headerEducation = $('.header-education');
const education = $('.education');
let visitedEducation = false;

const headerProjects = $('.header-projects');
const projects = $('.projects');
let visitedProjects = false;

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
            height: 'calc(50vw + 44px)'
        });
    } else {
        header.css({
            position: 'relative'
        });
        box.css({
            height: '50vw'
        });
    }
    let headerTop = header.offset().top;
    let workTop = headerWork.offset().top;
    if (headerTop >= workTop) {
        visitedWork = true;
        work.css({
            color: 'white'
        });
        headerWork.css({
            zIndex: -1
        });
    } else if (!visitedWork) {
        work.css({
            color: 'black'
        });
        headerWork.css({
            zIndex: 2
        });
    }
    let educationTop = headerEducation.offset().top;
    if (headerTop >= educationTop) {
        visitedEducation = true;
        education.css({
            color: 'white'
        });
        work.css({
            color: 'darkgrey'
        });
        headerEducation.css({
            zIndex: -1
        });
    } else if (!visitedEducation) {
        education.css({
            color: 'black'
        });
        headerEducation.css({
            zIndex: 2
        });
    } else {
        education.css({
            color: 'darkgrey'
        });
    }

    let projectsTop = headerProjects.offset().top;
    if (headerTop >= projectsTop) {
        visitedProjects = true;
        projects.css({
            color: 'white'
        });
        education.css({
            color: 'darkgrey'
        });
        headerProjects.css({
            zIndex: -1
        });
    } else if (!visitedProjects) {
        projects.css({
            color: 'black'
        });
        headerProjects.css({
            zIndex: 2
        });
    } else {
        projects.css({
            color: 'darkgrey'
        });
    }

}

$(window).resize(function() {
    fixmeTop = box.offset().top + box.outerHeight();
    $.jInvertScroll([slider]);
    updatePage();
});

$(window).scroll(function() {
    updatePage();
});

window.sr = ScrollReveal();
sr.reveal('.pop',
    {
        duration: 1000,
        scale: 1,
        viewFactor: 0.1,
        origin: 'right',
        distance: '10vw',
    }
);
