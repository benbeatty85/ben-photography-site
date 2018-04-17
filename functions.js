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

    var overlay = document.getElementById("overlay");

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


    //Floating in headline


    $(document).ready(function() {
        $(window).bind("load", function () {
            $('.fly-in-text').removeClass('hidden');
        })
    }) 

