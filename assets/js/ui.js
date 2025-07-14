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
        $(this).parents().siblings("#footer").toggleClass("active");
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

});


