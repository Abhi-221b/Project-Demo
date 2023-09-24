$('.header-wrap button.search').click(function () {
    $('body').toggleClass('show-search')
    setTimeout(function () {
        $('.search-wrap .form-search input').focus();
    }, 300);
});

$('.form-search .form-search-wrap form .close,.overlay').click(function () {
    $('body').removeClass('show-search');
    $('body').removeClass('show-form');
});


$('.popup').click(function () {
    $('body').toggleClass('show-form')
});

$('.header nav.navbar button.navbar-toggler').click(function () {
    $('body').toggleClass('menu-open')
});

$('header nav.navbar button.navbar-toggler').click(function () {
    $('header .menu').slideToggle(250);
    $('body').toggleClass('child-open');
})

$('header .menu ul li.nav-item.has-children>a').after(' <span class="child-trigger"><i class="fa-solid fa-caret-up"></i></span>');
$('.child-trigger').click(function () {
    $(this).parent().siblings('.nav-item').find('.child-trigger').removeClass('child-open');
    $(this).parent().siblings('.nav-item').find('ul').slideUp(250);
    $(this).next('ul').slideToggle(250);
    $(this).toggleClass('child-open');
    return false;
})

let counterbody = document.querySelectorAll(".counter-item h1");
let counterwrap = document.querySelector('.counter-item h1')
let maxnumber = 0;
let starttime = null;

for (k = 0; k < counterbody.length; k++) {
    nums = counterbody[k].dataset.max;
    if (maxnumber < Number(nums)) {
        maxnumber = Number(nums)
    }
}
function counter(time) {
    if (!starttime) {
        starttime = time;
    }
    let progress;
    counterbody.forEach((e) => {
        progress = Math.min((time - starttime) / e.dataset.speed, 1);
        e.innerText = Math.floor(progress * (e.dataset.max - 0) + 0);
    })
    if (progress <= 1) {
        requestAnimationFrame(counter);
    }
}

window.addEventListener('scroll', () => {
    if (counterwrap.getBoundingClientRect().top < window.innerHeight) {
        requestAnimationFrame(counter)
    }
})


$('footer').append('<div id="back-to-top"><a href="#"><i class="fa fa-angle-up"></i></a></div>');
$("#back-to-top").hide();
$(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
        $('body').addClass('fixed')
        $("#back-to-top").fadeIn(500);
    } else {
        $("#back-to-top").fadeOut(500);
        $('body').removeClass('fixed')
    }
});
//back to top
$("#back-to-top").click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
    return false;
});
