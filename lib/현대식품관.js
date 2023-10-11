$(function () {
    var swiper = new Swiper(".swiper1", {
        slidesPerView: 1,
        spaceBetween: 10,
        /* centerSlides:true, */
        /* slidesOffsetBefore:300, */
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        loop: true,
        loopAdditionalSlides: 1,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            970: {
                slidesPerView: 4,
                spaceBetween: 10,
            },
            1230: {
                slidesPerView: 5,
                spaceBetween: 15,
            },
        },
    });

    var swiper = new Swiper(".swiper2", {
        direction: "vertical",
        slidesPerView: 1,
        spaceBetween: 30,
        mousewheel: true,
        pagination: {
            el: ".swiper-pagination2",
            clickable: true,
        },
    });

    var swiper = new Swiper(".swiper3", {
        slidesPerView: 1,
        spaceBetween: 10,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        loop: false,
        loopAdditionalSlides: 1,
        pagination: {
            el: ".swiper-pagination3",
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 40,
            },
        },
    });
    var swiper = new Swiper(".swiper4", {
        slidesPerView: 1,
        spaceBetween: 10,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        loop: false,
        loopAdditionalSlides: 1,
        pagination: {
            el: ".swiper-pagination3",
            clickable: true,
        },
        breakpoints: {
            280: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            470: {
                slidesPerView: 3.2,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 10,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 40,
            },
        },
    });


    $('.sec3 .right .select p').click(function () {
        $('.sec3 .right .select p').removeClass('on')
        $(this).addClass('on')
        $('.sec3 .right .story3 div').removeClass('on')
        $('.sec3 .right .story3 div').eq($(this).index()).addClass('on')
        $('.sec3 .left').removeClass('on')
        $('.sec3 .left').eq($(this).index()).addClass('on')

    })

    $('.sec4 .inner .menu_list li').click(function () {
        $('.sec4 .inner .menu_list li').removeClass('on')
        $(this).addClass('on')
        $('.sec4 .inner .list').removeClass('on')
        $('.sec4 .inner .list').eq($(this).index()).addClass('on')
    })


    $('.sec4 .inner .list .item .text1 img').mouseenter(function () {
        $(this).attr({
            'src': 'img/icons8-장바구니로드에게-48 (1).png'
        })
        $(this).css({ 'border-radius': '10px' })
    })

    $('.sec4 .inner .list .item .text1 img').mouseleave(function () {
        $('.sec4 .inner .list .item .text1 img').attr({
            'src': 'img/cart.png'
        })
    })

    $('.sec5 .memo').click(function () {
        $('.sec5 .products').css({
            'bottom': '0'
        })

        $('.sec5 .memo').css({
            'display': 'none'
        })
    })
    $('.sec5 .inner .close').click(function () {
        $('.sec5 .products').css({
            'bottom': '-100%'
        })
        $('.sec5 .memo').css({
            'display': 'block'
        })
    })

    $('.banner .list .left').mouseenter(function () {
        $(this).css({
            'width': '100%'
        })
        $('.banner .list .right').css({
            'width': '0%'
        })
        $('.banner .list .right p').addClass('on')
    })
    $('.banner .list .left').mouseleave(function () {
        $(this).css({
            'width': '50%'
        })
        $('.banner .list .right').css({
            'width': '50%'
        })
        $('.banner .list .right p').removeClass('on')

    })



    $('.banner .list .right').mouseenter(function () {
        $(this).css({
            'width': '100%'
        })
        $('.banner .list .left').css({
            'width': '0%'
        })
        $('.banner .list .left p').addClass('on')

    })
    $('.banner .list .right').mouseleave(function () {
        $(this).css({
            'width': '50%'
        })
        $('.banner .list .left').css({
            'width': '50%'
        })
        $('.banner .list .left p').removeClass('on')

    })

    $(window).scroll(function () {
        let height = $(window).scrollTop();
        let bannerTop = $('.banner').offset().top;
        let sec6Top = $('.sec6').offset().top;
        console.log(height)
        console.log(bannerTop)
        console.log(sec6Top)

        let left = $('.sec6 .inner .item:nth-child(1)')
        let right = $('.sec6 .inner .item:nth-child(3)')

        left.removeClass('on')
        right.removeClass('on')
        if (bannerTop - 100 < height) {
            left.addClass('on')
            right.addClass('on')
        }
    })

    $('.sec7 .inner .list .item .text1 img').mouseenter(function () {
        $(this).attr({
            'src': 'img/icons8-장바구니로드에게-48 (1).png'
        })
        $(this).css({ 'border-radius': '10px' })
    })

    $('.sec7 .inner .list .item .text1 img').mouseleave(function () {
        $('.sec7 .inner .list .item .text1 img').attr({
            'src': 'img/cart.png'
        })
    })

    $('.sec7 .inner .right .menu .itemlist li').click(function () {
        $('.sec7 .inner .right .menu .itemlist li').removeClass('on')
        $(this).addClass('on')

    })

    $('.sec7 .inner .left li').click(function () {
        $('.sec7 .inner .left li').removeClass('on')
        $(this).addClass('on')
        $('.sec7 .inner .right .list').removeClass('on');
        $('.sec7 .inner .right .list').eq($(this).index()).addClass('on')
        $('.sec7 .inner .right .list .item:nth-child(4)~.item').css({
            'display': 'none'
        })
    })

    /*  $('.sec7 .inner .right button').click(function(){
        
     }) */

    /* click: function () {
        $('.sec7 .inner .right .list .item:nth-child(n+4):nth-child(-n+8)').css({
            'display': 'flex'
        })
    }
    click: function () {
        $('.sec7 .inner .right .list .item:nth-child(n+9):nth-child(-n+12)').css({
            'display': 'flex'
        })
    } */

    $('.sec7 .inner .right .btn1').click(function () {

        let item = $('.sec7 .inner .right .list .item')
        console.log(item.length)


        if ($('.sec7 .inner .right .list.on .item:nth-child(5)').css('display') == 'none') {
            $('.sec7 .inner .right .list.on .item:nth-child(n+4):nth-child(-n+8)').css({
                'display': 'block'
            })
            /* } else if (item.length == 8) {
                $('.sec7 .inner .right .list .item:nth-child(-n+9):nth-child(-n+12)').css({
                    'display': 'flex'
                })
            } */
        } else if ($('.sec7 .inner .right .list.on .item:nth-child(9)').css('display') == 'none') {
            $('.sec7 .inner .right .list.on .item:nth-child(n+9):nth-child(-n+12)').css({
                'display': 'block'
            })
        } else if ($('.sec7 .inner .right .list.on .item:nth-child(13)').css('display') == 'none') {
            $('.sec7 .inner .right .list.on .item:nth-child(n+13):nth-child(-n+16)').css({
                'display': 'block'
            })
        }
        else if ($('.sec7 .inner .right .list.on .item:nth-child(17)').css('display') == 'none') {
            $('.sec7 .inner .right .list.on .item:nth-child(n+17):nth-child(-n+20)').css({
                'display': 'block'
            })
        }
        else if ($('.sec7 .inner .right .list.on .item:nth-child(21)').css('display') == 'none') {
            $('.sec7 .inner .right .list.on .item:nth-child(n+21):nth-child(-n+24)').css({
                'display': 'block'
            })
        }
        else if ($('.sec7 .inner .right .list.on .item:nth-child(25)').css('display') == 'none') {
            $('.sec7 .inner .right .list.on .item:nth-child(n+25):nth-child(-n+28)').css({
                'display': 'block'
            })
        }
        else if ($('.sec7 .inner .right .list.on .item:nth-child(29)').css('display') == 'none') {
            $('.sec7 .inner .right .list.on .item:nth-child(n+29):nth-child(-n+31)').css({
                'display': 'block'
            })
        }
        /* else if ($('.sec7 .inner .right .list.on .item:nth-child(13)').css('display') == 'none') {
            $('.sec7 .inner .right .list.on .item:nth-child(n+13):nth-child(-n+16)').css({
                'display': 'flex'
            })
        
        }  */
    })

    /*             $('.sec7 .inner .right .menu .itemlist li:nth-child(1)').click(function () {
                    $('.sec7 .inner .right .list.on .order3').insertAfter($('.sec7 .inner .right .list.on .order'))
                })
    
                $('.sec7 .inner .right .menu .itemlist li:nth-child(1)').off('insertAfter')
     */

    $('.sec7 .inner .right .menu .itemlist li:nth-child(2)').click(function () {
        $('.sec7 .inner .right .list.on .order2').insertAfter($('.sec7 .inner .right .list.on .order3'))
        $('.sec7 .inner .right .list.on .order1').insertAfter($('.sec7 .inner .right .list.on .order3'))
    })



    let sec1Top = $('.sec1').offset().top;


    $(window).scroll(function () {

        if (sec1Top < $(window).scrollTop()) {
            $('footer .top').fadeIn().css({

                'background-color': '#154733',
                'color': 'white',
                /*  'border': '1px solid white' */
            })
            $('.main_visual .loginpage').css({
                'display': 'none'
            })
            $('.main_visual').removeClass('on')

        } else {
            $('footer .top').fadeOut();
        }
    })

    $('footer .top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000)
    })//.top.click end

    let sec2Top = $('.sec2').offset().top;
    let sec3Top = $('.sec3').offset().top;
    let sec4Top = $('.sec4').offset().top;
    $('header .inner .best li:nth-child(2)').click(function () {
        $('html, body').animate({
            scrollTop: 6160
        })
    })

    $('header .inner .best li:nth-child(1)').click(function () {
        $('html, body').animate({
            scrollTop: 4380
        })
    })
    $('header .inner .best li:nth-child(3)').click(function () {
        $('html, body').animate({
            scrollTop: 1000
        })
    })
    $('header .inner .best li:nth-child(4)').click(function () {
        $('html, body').animate({
            scrollTop: 7350
        })
    })
    $('header .inner .best li:nth-child(5)').click(function () {
        $('html, body').animate({
            scrollTop: 6160
        })
        $('.sec4 .inner .menu_list li:nth-child(1)').removeClass('on')
        $('.sec4 .inner .menu_list li:nth-child(2)').addClass('on')
        $('.sec4 .inner .list:nth-child(2)').removeClass('on')
        $('.sec4 .inner .list:nth-child(3)').addClass('on')
    })
    let itemList = $('.sec7 .inner .right .list:nth-child(2) .item')
    let itemList2 = $('.sec7 .inner .right .list:nth-child(3) .item')
    let itemList3 = $('.sec7 .inner .right .list:nth-child(4) .item')
    let itemList4 = $('.sec7 .inner .right .list:nth-child(5) .item')
    let itemList5 = $('.sec7 .inner .right .list:nth-child(6) .item')
    let itemList6 = $('.sec7 .inner .right .list:nth-child(7) .item')
    let itemList7 = $('.sec7 .inner .right .list:nth-child(8) .item')
    console.log(itemList.length)
    console.log(itemList2.length)
    $('.sec7 .inner .right .menu h3 span').text(itemList.length)
    $('.sec7 .inner .left li:nth-child(1)').click(function () {
        $('.sec7 .inner .right .menu h3 span').text(itemList.length)
    })
    $('.sec7 .inner .left li:nth-child(2)').click(function () {
        $('.sec7 .inner .right .menu h3 span').text(itemList2.length)
    })
    $('.sec7 .inner .left li:nth-child(3)').click(function () {
        $('.sec7 .inner .right .menu h3 span').text(itemList3.length)
    })
    $('.sec7 .inner .left li:nth-child(4)').click(function () {
        $('.sec7 .inner .right .menu h3 span').text(itemList4.length)
    })
    $('.sec7 .inner .left li:nth-child(5)').click(function () {
        $('.sec7 .inner .right .menu h3 span').text(itemList5.length - 1)
    })
    $('.sec7 .inner .left li:nth-child(6)').click(function () {
        $('.sec7 .inner .right .menu h3 span').text(itemList6.length)
    })
    $('.sec7 .inner .left li:nth-child(7)').click(function () {
        $('.sec7 .inner .right .menu h3 span').text(itemList7.length)
    })

    $('.text1 img').addClass('cart')
    let i = 0;
    $('.cart').click(function () {
        i = ++i;
        console.log(i)
        $('header .inner .login li:nth-child(4) .cart2').text(i)

    })


    $('header .inner .login .cart3').click(function () {
        $('.main_visual .cartlist').toggleClass('on')
    })
    $('.sec4 .inner .list .item .text1 img').click(function () {
        $('.main_visual .cartlist .item figure img').attr({
            'src': 'img/best2.jpg'
        })
        $('.main_visual .cartlist .item p span:nth-child(2)').text('[우미학] 1++ 한우 실속 선물세트 2호')
        $('.main_visual .cartlist .item .none').css({
            'display': 'none'
        })
    })

    $('header .inner .login li:nth-child(1)').click(function () {
        $('.main_visual').addClass('on')
        $('.main_visual .loginpage').css({
            'display': 'block'
        })
    })

    $('.main_visual .loginpage .close').click(function () {
        $('.main_visual').removeClass('on')

        $('.main_visual .loginpage').css({
            'display': 'none'
        })
    })


    $('header .inner .login li:nth-child(2)').click(function () {
        $('.main_visual').addClass('on')
        $('.main_visual .loginpage').css({
            'display': 'block'
        })
    })
    $('header .inner .login li:nth-child(3)').click(function () {
        $('.main_visual').addClass('on')
        $('.main_visual .loginpage').css({
            'display': 'block'
        })
    })



    $('.main_visual .mobile_menu .close').click(function () {
        $('.mobile_menu').animate({ 'left': '-100%' })
    })

    $('.header_mobile .inner > figure:nth-child(1)').click(function () {
        $('.mobile_menu').animate({ 'left': '0' })

    })

    $('.main_visual .mobile_menu .gnb>.depth01 a').click(function () {
        $('.main_visual .mobile_menu .gnb>.depth01 a').next().stop().slideUp()
        $('.main_visual .mobile_menu .gnb>.depth01 a').css({
            'background-color': 'white'
        })
        $(this).next().stop().slideToggle()
        $(this).css({
            'background-color': '#dddddd'
        })
    })
})