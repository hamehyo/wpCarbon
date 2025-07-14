/* MO -> height 100vh */
function setScreenSize() {
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}
setScreenSize();

$(function (){

    $(".op_list .btn_share").hover(function(e){
        $(this).addClass("on");
    }, function(){
        $(this).removeClass("on");
    });

    $(".op_tab_list li a").on("click", function(e){
        $(".op_tab_list li").removeClass("on");
        $(this).parent("li").addClass("on");
        e.preventDefault();
    });
    
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


