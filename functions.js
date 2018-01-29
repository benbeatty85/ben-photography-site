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

//Contact form

function getId(id) { //Don't have to type this everytime we use this
    return document.getElementById(id);
}

function submitForm() {
    getId("mybtn").disabled = true;
    getId("status").innerHTML = "Your message is being sent ...";
    
    var formdata = new FormData();
    
    formdata.append("n", getId("n").value);
    formdata.append("e", getId("e").value);
    formdata.append("m", getId("m").value);
    
    var ajax = new XMLHttpRequest();
    
    ajax.open("POST", "form.php");
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4 && ajax.status == 200) {
            if (ajax.responseText == "success") {
                getId("my_form").innerHTML = '<h2>Thanks ' + getId("n").value + ' , your message has been sent.</h2>';
            } else {
                getId("status").innerHTML = ajax.responseText;
                getId("mybtn").disabled = false;
            }
        }
    }
    ajax.send(formdata);
}

//Smooth Scrolling for navigation


$(document).ready(function(){
    $('a[href^="#"]').on('click',function (e) {
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



//fade in about section

$(document).ready(function() {
    $(window).scroll(function() {
        $('.hideme').each(function(i) {
            var bottomOfObject = $(this).innerHeight();
            var bottomOfWindow = $(window).scrollTop() + $(window).height();
            
            if (bottomOfWindow > bottomOfObject) {
                $(this).animate({'opacity':'1'}, 1700);
            }
        })
    })
})


//page loader

var overlay = document.getElementById("overlay");

window.addEventListener('load', function () {
  overlay.style.display = 'none';
});


//Floating in headline


$(function() {
    
    setTimeout(function() {
        $('.fly-in-text').removeClass('hidden');
    }, 500);
    
}) ();

