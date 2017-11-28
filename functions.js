//Sliding Menu

const navToggle = document.querySelector('.menu-button');
const nav = document.querySelector('nav');
const containerAll = document.querySelector('.container-all');
const containerAllStyle = containerAll.style;
const bodyClassList = document.body.classList;

navToggle.addEventListener('click', function() {
    containerAllStyle.transition = 'transform 250ms ease-in-out';
    bodyClassList.toggle('nav-open');
})

nav.addEventListener('click', function() {
    containerAllStyle.transition = '0ms';
    bodyClassList.remove('nav-open');
})


//Smooth Scrolling to top of page

$(window).scroll(function() {
    if ($(this).scrollTop() > 1000 ) {
        $('.scrolltop:hidden').stop(true, true).fadeIn();
    } else {
        $('.scrolltop').stop(true, true).fadeOut();
    }
});
$(function(){$(".scroll").click(function(){$("html,body").animate({scrollTop:$(".the-top").offset().top},"2000");return false})})

