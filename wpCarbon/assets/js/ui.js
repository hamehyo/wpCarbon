$(function (){

    // 서브페이지 사용자 정보 및 로그아웃 메뉴 오픈
    $(".user_box").hover(function(){
        $(".user_menu").toggle();
    });

    // 파일첨부
    var fileTarget = $('.file_box .upload_hidden');
    fileTarget.on('change', function(){ 
        if(window.FileReader){
            var filename = $(this)[0].files[0].name;
        }else{ 
            var filename = $(this).val().split('/').pop().split('\\').pop();
        }
        $(this).siblings('.upload_name').val(filename);
    });

    // 파일 첨부 삭제 시
    $(".file_name_box strong").on("click", function(){
        $(this).remove();
    });

    // 의견등록 메일 직접입력 선택 시
    $(".sel_address select").on("change", function(){
        if($(this).val() == "write"){
            $(".inp_outer.address").show();
        }else{
            $(".inp_outer.address").hide();
        }
        
    });

    // 공유 버튼 호버 시
    $(".btn_share").hover(function(e){
        $(this).addClass("on");
    }, function(){
        $(this).removeClass("on");
    });

    // 의견조회 탭 클릭 시
    $(".op_tab_list li a").on("click", function(e){
        $(".op_tab_list li").removeClass("on");
        $(this).parent("li").addClass("on");
        e.preventDefault();
    });
    
    // 2035 NDC(안) 페이지 아코디언 리스트
    $(".qna_list li .question_box").on("click", function(e){
        var scrollValue = $(window).scrollTop();
        var answerH = $(this).next(".answer").outerHeight();
        var questionH = $(this).outerHeight();
        console.log(scrollValue - questionH);

        if ($('.answer').is(':visible')) {
            $(".answer").slideUp(500);
            $(".qna_list li").removeClass("on");
        }
        if ($(this).next(".answer").is(':visible')) {
            $(this).next(".answer").slideUp(500);
            $(".qna_list li").removeClass("on");
        } else {
            $(this).next(".answer").slideDown(500);
            $(this).parent("li").addClass("on");
        }

        //$("body,html").animate({ scrollTop: scrollValue + answerH - questionH },600);
        //$("body,html").animate({ scrollTop: scrollValue + questionH },600);
        //$("body,html").animate({ scrollTop: scrollValue + answerH - questionH },600);
    
        e.preventDefault();
    });


    // 모바일 햄버거 메뉴
    $(".btn_hamburger").on("click", function(){
        $(this).toggleClass("active");
        $(this).parents("#header").toggleClass("active");
        //$(this).parents().siblings(".foot-go-link").toggleClass("active");
        //$(this).parents().siblings(".footer").toggleClass("active");
        if( $(this).hasClass("active") ){
            $("#nav").addClass("open");
        }else{
            $("#nav").removeClass("open");
        }
    });

    // 모바일 메뉴 클릭시 메뉴 닫기
    $(".nav_side .nav_item").on("click", function(){
        $(".btn_hamburger").trigger("click");
    });
    
    // ndc 부문 툴팁 열기
    $(".form_tit.ndc img").on("click",function(){
        $(".ndc_tooltip_box").toggle();
    });

    // ndc 부문 툴팁 닫기 
    $(document).on('click', function(e) {
        if( $(e.target).closest('.ndc_tooltip_box').length == 0 && $(e.target).closest('.form_tit.ndc').length == 0 ) { 
            //console.log(e.target);
            $(".ndc_tooltip_box").hide();
        }
    });

    $(".btn_end").on("click", function(){
        $(".popup_wrap").show();
    });

    $(".btn_popup_close").on("click", function(){
        $(this).parents(".popup_wrap").hide();
    });

    //  ndc 페이지 카테고리 추가
    $(".qna_catagory li a").on("click", function(e){
        $(".qna_catagory li").removeClass("on");
        $(this).parent("li").addClass("on");
        e.preventDefault();
    });

    // 개인정보처리방침 열기
    $(".btn_py").on("click", function(e){
        $(".whole_popup.py").show();
        $("body").addClass("lock");
        e.preventDefault();
    });
    
    //  이용약관 열기
    $(".btn_ndc").on("click", function(e){
        $(".whole_popup.ndc").show();
        $("body").addClass("lock");
        e.preventDefault();
    });
    
    // 개인정보처리방침 & 이용약관 닫기
    $(".btn_whole_close").on("click", function(e){
        $(".whole_popup").hide();
        $("body").removeClass("lock");
    });

    // 국가온실가스감축목표 NDC (초안) 페이지 탭메뉴
    $(".ndc_tab_menu li a").on("click", function(e){
        let current = $(this).parent("li").attr("data-tab");
        $(".ndc_tab_menu li").removeClass("on");
        $(".ndc_tab_conts .cont").removeClass("on");

        $(this).parent("li").addClass("on");
        $("#" + current).addClass("on");
        e.preventDefault();

    });

    // 메인 유튜브 플로팅 배너 
    $(window).scroll(function() {
        let scrT = $(window).scrollTop();
        if( scrT > 100 ){
            $(".btn_youtube").addClass("scroll");
        }else{
            $(".btn_youtube").removeClass("scroll");
        }
    });

    // 메인 상단 마우스 호버 아코디언(pc일 경우만)

    function pc_accodian(){
        $(".main_menu_list li").on("mouseenter", function(){
            $(".main_menu_list li").removeClass("wide");
            $(this).addClass("wide");
        });
        $(".main_menu_list li").on("mouseleave", function(){
            $(".main_menu_list li").removeClass("wide");
            $(".main_menu_list li:nth-child(1)").addClass("wide");
        });
    }

    let windowWidth = $(window).width();
    if (windowWidth >= 1024) { 
        pc_accodian();
    }

    $(window).on('resize', function() {
        windowWidth = $(window).width();
        if (windowWidth >= 1024) {
            pc_accodian();
        } else {
            $(".main_menu_list li").on("mouseenter", function(){
                $(".main_menu_list li").removeClass("wide");
            });
            $(".main_menu_list li").on("mouseleave", function(){
                $(".main_menu_list li").removeClass("wide");
            });
        }
    });

    $(".op_view_box .rgt .btn").on("click", function(){
        $(".popup_wrap.identity").show();
    });

    $(".popup_wrap.identity .cancel").on("click", function(){
        $(".popup_wrap.identity").hide();
    });
    

    // footer
    function footLink() {
        $('.foot-go-link__in__item__a').on('click', function () {
            var linkTarget = $(this).closest('.foot-go-link__in__item')

            if (linkTarget.hasClass('on') == true) {
                $('.foot-go-link__in__item').removeClass('on')
            } else {
                $('.foot-go-link__in__item').removeClass('on')
                $(this).closest('.foot-go-link__in__item').addClass('on')
            }

            $('.sec_box ul li:last-child a').on('keydown blur', function (e) {
                if (e.shiftKey && e.keyCode === 9) {
                    console.log('shift tab')
                } else if (e.keyCode === 9) {
                    $('.foot-go-link__in__item').removeClass('on')
                    return false
                } else if (e.type == 'blur') {
                    console.log('mosueOUt')
                }
            })
            return false
        })

        $('html').click(function (e) {
            if (!$(e.target).hasClass('zzz')) {
                $('.foot-go-link__in__item').removeClass('on')
            }
        })
    }
    footLink();


});


