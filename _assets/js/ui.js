/* MO -> height 100vh */
function setScreenSize() {
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}
setScreenSize();

$(function (){
    $("#fullpage").fullpage({
        anchors: ["1stPage", "2cdPage", "3rdPage", "4thpage", "5thpage", "6thpage"],
        menu: '#menu',
        scrollingSpeed: 1200,
        slidesNavigation: true,
        scrollOverflow: true,
        scrollOverflowReset: true,
        scrollOverflowResetKey: 'MVVZV3gyWVhKdmRISnBaMjh1WTI5dEtNX25RVWMyTnliMnhzVDNabGNtWnNiM2RTWlhObGRBPT05SzI=',
        afterLoad: function( destination, index){
            if(index == 1){
                $(".vd_txt_box").addClass("on");
            }else if(index == 2){
                $(".set1_conts").addClass("on");
            }else if( index == 3 ){
                $(".service_inner").addClass("on");

                // core service 슬라이드 영역
                setTimeout(function(){
                    serviceSwiper.autoplay.start();
                    $(".nav_arrow").removeClass("paused");
                }, 200);

            }else if(index == 4){
                $(".green_inner").addClass("on");
            }else if(index == 5){
                $(".web_inner").addClass("on");
            }else if(index == 6){
                $(".contact_inner").addClass("on");
            }
        },
		'onLeave' : function (index, direction){
            if( index == 1 && direction == 2){
                setTimeout(function(){
                    $(".vd_txt_box").removeClass("on");
                }, 800);
            }

            if( index == 2 && direction == 1 ){
                setTimeout(function(){
                    $(".set1_conts").removeClass("on");
                }, 800);
            }

            if( index == 3 && direction == 4){
                setTimeout(function(){
                    $(".service_inner").removeClass("on");
                }, 800);
            }else if( index == 3 && direction == 2 ){
                setTimeout(function(){
                    $(".service_inner").removeClass("on");
                }, 800);
            }

            if ( index == 4 && direction == 5 ){
                setTimeout(function(){
                    $(".green_inner").removeClass("on");
                }, 800);
			} else if ( index == 4 && direction == 3 ){
                setTimeout(function(){
                    $(".green_inner").removeClass("on");
                }, 800);
			}

            if ( index == 5 && direction == 6){
                setTimeout(function(){
                    $(".web_inner").removeClass("on");
                }, 800);
			} else if ( index == 5 && direction == 4 ){
                setTimeout(function(){
                    $(".web_inner").removeClass("on");
                }, 800);
			}

            if ( index == 6 && direction == 5 ){
                setTimeout(function(){
                    $(".contact_inner").removeClass("on");
                }, 800);
			}

		}
    });


    var serviceSwiper = new Swiper(".service_inner .r_cont .swiper-container", {
        loop:true,
        slidesPerGroup:1,
        loopAdditionalSlides:1,
        speed:1500,
        slidesPerView : "auto",
        spaceBetween : 28,
        allowTouchMove: false,
        mousewheelControl: false,
        autoplay : { 
            delay : 4000, 
            disableOnInteraction : true, 
        },
        pagination: {
            el: '.page_scroll',
            type: 'bullets',
            clickable: true,
        },
        navigation: {
            prevEl: '.navi_box .prev',
            nextEl: '.navi_box .next',
        },
        breakpoints: {
            468: {
                spaceBetween: 10,
            },
            1280: {
                spaceBetween : 28,
            },
        },
        on : {
            init : function () { },
            slideChange : function() {
                if(this.realIndex == 0){
                    $(".slide_menu").removeClass("on");
                    $(".menu01").addClass("on");
                }else if(this.realIndex == 1){
                    $(".slide_menu").removeClass("on");
                    $(".menu01").addClass("on");
                }else if(this.realIndex == 2){
                    $(".slide_menu").removeClass("on");
                    $(".menu02").addClass("on");
                }else if(this.realIndex == 3){
                    $(".slide_menu").removeClass("on");
                    $(".menu03").addClass("on");
                }else if(this.realIndex == 4){
                    $(".slide_menu").removeClass("on");
                    $(".menu04").addClass("on");
                }
            },
        },
    });

    $(".slide_menu.menu01").on("click", function(){
        serviceSwiper.slideTo(0);
    });
    $(".slide_menu.menu02").on("click", function(){
        serviceSwiper.slideTo(2);
    });
    $(".slide_menu.menu03").on("click", function(){
        serviceSwiper.slideTo(3);
    });
    $(".slide_menu.menu04").on("click", function(){
        serviceSwiper.slideTo(4);
    });
    // pagination indicator
    var $dotList = $(".r_cont .swiper-pagination-bullet");
    var dotCnt = $dotList.length;
    $dotList.each(function(){
        $(this).attr("style", "width:"+(100/dotCnt).toFixed(3)+"%;");
    });

    $(".nav_arrow").on("click", function(){
        $(this).toggleClass("paused");
        if($(this).hasClass("paused")){
            serviceSwiper.autoplay.stop();
        }else{
            serviceSwiper.autoplay.start();
        }
    });

    $(".swiper_btn").mouseenter(function() {
        serviceSwiper.autoplay.stop();
        $(".nav_arrow").addClass("paused");
        //console.log('slider stopped');
    });

    $(".swiper_btn").mouseleave(function() {
        serviceSwiper.autoplay.start();
        $(".nav_arrow").removeClass("paused");
        //console.log('slider started again');
    });


    // 그레이스케일모드
    $(".btn_mode").on("click", function(e){
        $(".ourway_section").toggleClass("greyscale");
        $(".btn_hp_making").toggleClass("greyscale");
        $(".video_section").toggleClass("greyscale");
        $(".ourway_section_inner").toggleClass("greyscale");
        $(".service_section_inner").toggleClass("greyscale");
        $(".green_section").toggleClass("greyscale");
        $(".web_section").toggleClass("greyscale");
        $(".contact_section").toggleClass("greyscale");
        $("#footer").toggleClass("greyscale");
        $("#header").toggleClass("greyscale");
        
        $(this).toggleClass("grey");
        if($(this).hasClass("grey")){
            $(this).children("span").text("GREYSCALE");
        }else{
            $(this).children("span").text("RGB COLOR");
        }
        e.preventDefault();
    });


    // 홈페이지 제작안내 button
    $(".btn_hp_making").on("click", function(e){
        $.fn.fullpage.moveTo(5);
    });

    // 포트폴리오
    $(".btn_portfolio").on("click", function(){
        alert("준비중입니다.");
    });

    // 모바일 햄버거 메뉴
    $(".btn_hamburger").on("click", function(){
        $(this).toggleClass("active");
        if( $(this).hasClass("active") ){
            $(".nav_side").addClass("on");
        }else{
            $(".nav_side").removeClass("on");
        }
    });

    // 모바일 메뉴 클릭시 메뉴 닫기
    $(".nav_side .nav_item").on("click", function(){
        $(".btn_hamburger").trigger("click");
    });
    



});


