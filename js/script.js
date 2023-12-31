const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const blockID = anchor.getAttribute("href").substr(1);
        document.getElementById(blockID).scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    });
}

$(document).on('click', '#menu-toggle', function() {
    $(this).toggleClass('menu-burger--is-active');
  });

jQuery(window).scroll(function () {
    var $sections = $('section');
    $sections.each(function (i, el) {
        var top = $(el).offset().top - 100;
        var bottom = top + $(el).height();
        var scroll = $(window).scrollTop();
        var id = $(el).attr('id');
        if (scroll > top && scroll < bottom) {
            $('a.active').removeClass('active');
            $('a[href="#' + id + '"]').addClass('active');

        }
    })
});

$("nav").on("click", "a", function (event) {
    // исключаем стандартную реакцию браузера
    event.preventDefault();
    // получем идентификатор блока из атрибута href
    var id = $(this).attr('href'),
        // находим высоту, на которой расположен блок
        top = $(id).offset().top;
    // анимируем переход к блоку, время: 800 мс
    $('body,html').animate({ scrollTop: top }, 800);
});

$(document).ready(function () {
    var swiper = new Swiper('.swiper', {
        slidesPerView: 'auto',
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});

document.addEventListener('DOMContentLoaded', function () {
    let btnBurger = document.querySelector('.menu-burger');
    if (btnBurger) {
        btnBurger.addEventListener('click', function () {
            let mobileMenu = document.querySelector('.mobile-nav_bottom');
            let mobileNav = document.querySelector('.mobile-nav');
            mobileMenu.classList.toggle('mobile-nav_bottom-active');
            mobileMenu.classList.toggle('mobile-nav_bottom-deactive');
            mobileNav.classList.toggle('mobile-nav-active');
        });
    }
});


