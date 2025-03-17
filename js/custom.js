$(function () {
    $('.main_container').fullpage({
        anchors: ['intro', 'topic', 'bridal', 'lookbook', 'footer'],
        scrollOverflow: false,
        paddingBottom: '40px',
        responsiveWidth: '1200',
        afterLoad: function (o, idx) {

            $('.section').removeClass('on');
            $('.section').eq(idx).addClass('on');

            $('.anchor a').removeClass('on');
            $('.anchor a').eq(idx - 1).addClass('on');

            if (idx == 5) {
                $('.header').addClass('on')
                $('.anchor').addClass('on')
            } else {
                $('.header').removeClass('on')
                $('.anchor').removeClass('on')
            }
        }
    });

})

$(function () {
    const mvs = new Swiper('.main_visual_slide', {
        loop: true,
        speed: 2000,
        effect: "fade",
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
    })
})

$(function () {
    const MMS = new Swiper('.main_bridal_slide', {
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 8000,
        loop: true,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },

        breakpoints: {
            769: {
                slidesPerView: 5,
                spaceBetween: 40,
            },
        },
    })
});

$(function () {
    const LOB = new Swiper('.main_lookbook_wrap', {
        loop: true,
        direction: "vertical",
        spaceBetween: 80,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    })

    const LOB2 = new Swiper('.main_lookbook_tx_wrap', {
        loop: true,
        pagination: {
            el: ".swiper-pagination",
        },

        navigation: {	//네비게이션 사용자 설정
            nextEl: '.main_lookbook .arrows .next',	//다음 버튼 클래스 설정
            prevEl: '.main_lookbook .arrows .prev',	//이전 버튼 클래스 설정
        },

    });


    LOB.controller.control = LOB2;
    LOB2.controller.control = LOB;

})

// 반응형
$(function () {
    $('.header .mbtn').on('click', function () {
        $(this).toggleClass('on')
        $('.header .gnb').toggleClass('on')
    });

    $('.header .gnb>ul>li>a').on('click', function (e) {
        if ($('.header .gnb'), hasClass('on')) {
            e.preventDefault();
            $('.header .gnb>ul ul').stop().slideUp();
            $(this).next().stop().slideDown();
        }
    })
})