document.addEventListener('DOMContentLoaded', function () {
    const nav = document.querySelector('#navbar');

    function addShadow() {

        if (window.scrollY >= 300) {
            nav.classList.add('shadow-bg');
        } else {
            nav.classList.remove('shadow-bg');
        }

    }

    window.addEventListener('scroll', addShadow);

    $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("show");
        if (_opened === true && !clickover.hasClass("navbar-toggler")) {
            $(".navbar-toggler").click();
        }
    });
//SLICK!
    $('.card-deck').slick({
        centerMode: false,
        centerPadding: '40px',
        slidesToShow: 1,
        autoplay: true,
        mobileFirst: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: false,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]


    });
    // $('.counter').counterUp({
    //     delay: 5,
    //     time: 1800
    // });
});

