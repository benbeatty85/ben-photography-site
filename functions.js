/*Code that is used on multiple pages*/


    //Smooth Scrolling for navigation


    $(document).ready(function(){
        $('a[href*="#"]').on('click',function (e) {
            e.preventDefault();
            var target = this.hash;
            $target = $(target);
            $('html, body').stop().animate({
                'scrollTop':  $target.offset().top 
            }, 800, 'swing', function () {
                window.location.hash = target;
            });
        });
    });


    //Smooth Scrolling to top of page

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1000 ) {
            $('.scrolltop:hidden').stop(true, true).fadeIn();
        } else {
            $('.scrolltop').stop(true, true).fadeOut();
        }
    });
    $(function(){$(".scroll").click(function(){$("html,body").animate({scrollTop:$(".the-top").offset().top},"2000");return false})})


    //page loader

    var overlay = document.getElementById("loader");

    window.addEventListener('load', function () {
      overlay.style.display = 'none';
    });


    //Changing Hamburger menu

(function () {
	$('.toggle').on('click', function() {
		$('.hamburger-menu').toggleClass('animate');
	})
})();



/*Code that is used on Home page*/


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

//Animated Headline on home page

// Wrap every letter in a span

$(document).ready(function(){
    $('.ml6 .letters').each(function(){
    $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

anime.timeline({loop: true})
  .add({
    targets: '.ml6 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: function(el, i) {
      return 50 * i;
    }
  }).add({
    targets: '.ml6',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 3000
  });
    
});


