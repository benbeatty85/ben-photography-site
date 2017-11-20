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
