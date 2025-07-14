
	
	/*
	<div class="body-content__rollig-text rolling-text" data-reveal="" style="transform: translate3d(-3497.26px, 0px, 0px);">
		<div class="rolling-text__text">
			#CHUNGNAM CULTURE AND TOURISM FOUNDATION
		</div>
		<div class="rolling-text__text">
			#CHUNGNAM CULTURE AND TOURISM FOUNDATION
		</div>
	</div>
	 */
	




	// gasp : https://cnctf.or.kr/site/setting/js/gsap.min.js

	/* 
	let $text = $('.rolling-text .rolling-text__text');
	let $wrap = $('.rolling-text');

	$text.clone().appendTo($wrap);

	TweenMax.to($wrap, 20, {
		x: -($text.width()),
		ease: Linear.easeNone,
		repeat: -1
	});


	*/














































/*
 * GNB
 */
;(function() {
	var AccessibleNav = function() {
		this.status = false;
		this.anchor = [];
	};

	AccessibleNav.prototype = {
		initialize:function() {
			var that = this;
			that.hook = $(that.options.hook);
			that.listParent = that.options.listParent;
			that._map();

			that.anchor.on('focus', function() {
					that._focus.apply(that, [this, 'focus']);
					console.log('ddd focus')
				}).on('focusout', function() {
					that.status = false;
					setTimeout(function() {
						if(that.status === false) {
							that._blur();
						}
					}, 12);
				}).on('focusin', function() {
					that.status = true;
				}).on('mouseenter', function() {
					that._focus.apply(that, [this, 'mouseover']);
				});

			that.hook.on('mouseleave', function() {
				$(this).find(that.listParent).removeClass(that.options.mouseoverClass);
				that.hook.removeClass(that.options.selectClass);
			});
		},
		_map:function() {
			var that = this;

			that.hook.find('a').each(function() {
				that.anchor = $.merge($(this), that.anchor);
			});
		},
		_focus:function(el, type) {
			var that = this,
				_class = type === 'focus' ? that.options.focusClass : that.options.mouseoverClass;

				console.log('ddd hover')
			$(el).closest(that.hook).addClass(that.options.selectClass);

			$(el).closest(that.listParent).addClass(_class)
				.siblings().removeClass(_class);
		},
		_blur:function() {
			var that = this;

			that.hook.removeClass(that.options.selectClass)
				.find(that.listParent).removeClass(that.options.focusClass);
		}
	};

	var gnb = new AccessibleNav();

	return {
		load:function() {
			var that = this;
			$(window).on('load', function() {
				gnb.options = {
					hook:'.gnb',
					listParent:'li.gnb-menu',
					selectClass:'selected',
					focusClass:'focus',
					mouseoverClass:'over'
				};

				gnb.initialize();
			});
		}
	};
})().load();


/* 3차 추가 */
function gnbThird() {

	$('.gnb .sub-nav__3rd a').closest('.sub-nav__box__list').addClass('has_3rd');


	var oldIndex = 0;

	$('.gnb .has_3rd').mouseenter(function() {
		var thisIndex = $('.has_3rd').index(this);

		$('.gnb .has_3rd').removeClass('focus');
		$('.gnb .has_3rd .sub-nav__3rd').eq(thisIndex).addClass('on');
		$('.gnb .has_3rd').eq(thisIndex).addClass('on');
		if(oldIndex != null && thisIndex != oldIndex){
			$('.gnb .has_3rd .sub-nav__3rd').eq(oldIndex).removeClass('on');
			$('.gnb .has_3rd').eq(oldIndex).removeClass('on');

			}
		oldIndex = thisIndex;

		return false;
	});

	$('.gnb .has_3rd').mouseleave(function() {
		var thisIndex = $('.gnb .has_3rd').index(this);

			$('.gnb .has_3rd .sub-nav__3rd').eq(oldIndex).removeClass('on');
			$('.gnb .has_3rd').eq(oldIndex).removeClass('on');

		oldIndex = thisIndex;

		return false;
	});
	$('.gnb .sub-nav__box__list > a').focusin(function() {
		var thisIndex = $('.gnb .has_3rd > a').index(this);
		var momItem = $(this).closest('.sub-nav__box__list');

		$('.gnb .has_3rd').removeClass('focus');

		if(momItem.hasClass('has_3rd') == true){
			$('.gnb .has_3rd').eq(thisIndex).addClass('focus');
		} else if (momItem.hasClass('has_3rd') != true){
			$('.gnb .has_3rd').removeClass('focus');
		}
		oldIndex = thisIndex;

		return false;
	});
	$('.gnb-menu > a').focusin(function() {
		$('.gnb .has_3rd').removeClass('focus');
	});

	$('.gnb .gnb-menu').each(function(i) {
		$(this).addClass('sel_' + (i + 1));
	});
}

/* header down title */
function leftWord() {
	var gnbTit = $('.gnb .gnb-menu__a').get();
	//console.log(gnbTit[0].text)
	if ($('header').hasClass('left-tit') == true ){

		for(var i in gnbTit){
		//console.log(gnbTit[i].text);
		$('.gnb .gnb-menu .sub-nav').eq(i).prepend('<strong class="left-tit-word word-'+ i + '">'+gnbTit[i].text+'</strong>')
	}	
	}		
}

/* skip navigation */

function skipNavi() {

	$('.skiptoContent').focusin(function(){
		$('.skiptoContent').addClass('on');

	});
	$('.skiptoContent').focusout(function(){
		$('.skiptoContent').removeClass('on');

	});
}

/*탭*/
function mainTab(tabName) {
	var selectTabA = '.js-nav__list.on a'
	$(tabName).find('.js-nav__list').click(function() {
		var thisIndex = $(tabName).find('.js-nav__list').index(this);
		var tabItem = $(tabName).find('.js-nav__list');
		//var nextItem = $(tabName).find('.js-nav__list').next();
		var boxItem = $(tabName).find('.js-box');

		tabItem.removeClass('on');
		boxItem.removeClass('on');
		//nextItem.removeClass('next-item');
		tabItem.eq(thisIndex).addClass('on');
		boxItem.eq(thisIndex).addClass('on');
		//nextItem.eq(thisIndex).addClass('next-item');

		var firstTabItem = $(tabName).find(selectTabA);
		$('.js-nav__list a').find('small').remove();
		firstTabItem.append("<small class='hidden_word'>(선택됨)</small>");

		return false;
	});
};

/*서브탭*/
function subTab(tabName) {

	//	document.title =  $(tabName).find( '.js-nav__list.on a' ).html() + ' /' + $('.loc_tit').html() + ' | ';

	
	var siteTitle = '대통령직속 2050 탄소중립녹색성장위원회';
	var selectTabA = '.js-nav__list.on a'

	var locItem = $('.location-box__cont > span');
	var loc = [locItem.eq(2).text(),
		locItem.eq(4).text(),
		locItem.eq(6).text(),
		locItem.eq(8).text()
		];
	var locL = locItem.length;
	$(tabName).find('.js-nav__list').click(function() {
		var thisIndex = $(tabName).find('.js-nav__list').index(this);
		var tabItem = $(tabName).find('.js-nav__list');
		var boxItem = $(tabName).find('.js-box');

		tabItem.removeClass('on');
		boxItem.removeClass('on');
		tabItem.eq(thisIndex).addClass('on');
		boxItem.eq(thisIndex).addClass('on');


		if (locL == 5) {
			document.title = $(tabName).find(selectTabA).text() + ' < ' + loc[1] + ' < ' + loc[0] + ' | ' + siteTitle
		} else if (locL == 7) {
			document.title = $(tabName).find(selectTabA).text() + ' < ' + loc[2] + ' < ' + loc[1] + ' < ' + loc[0] + ' | ' + siteTitle
		} else if (locL == 9) {
			document.title = $(tabName).find(selectTabA).text() + ' < ' + loc[3] + ' < ' + loc[2] + ' < ' + loc[1] + ' < ' + loc[0] + ' | ' + siteTitle
		} else {
			document.title = $(tabName).find(selectTabA).text() + ' < ' + loc[0] + ' | ' + siteTitle
		}

		var firstTabItem = $(tabName).find(selectTabA);
		$('.js-nav__list a').find('small').remove();
		firstTabItem.append("<small class='hidden_word'>(선택됨)</small>");

		return false;
	});
};

/*서브탭 2 탭안에 탭일 경우 내부탭은 이걸 사용*/
function subTab2(tabName) {

	var selectTabA2 = '.js-nav2__list.on a';
	var firstTabItem2 = $(tabName).find(selectTabA2);
	
	firstTabItem2.append("<small class='hidden_word'>(선택됨)</small>");

	$(tabName).find('.js-nav2__list').click(function(e) {

		var thisIndex = $(tabName).find('.js-nav2__list').index(this);
		var tabItem = $(tabName).find('.js-nav2__list');
		var boxItem = $(tabName).find('.js-box2');

		tabItem.removeClass('on');
		boxItem.removeClass('on');
		tabItem.eq(thisIndex).addClass('on');
		boxItem.eq(thisIndex).addClass('on');

		//tabItem.attr('title', '');
		//tabItem.eq(thisIndex).attr('title', '선택됨');
			
		var firstTabItem2 = $(tabName).find(selectTabA2);
		$('.js-nav2__list a').find('small').remove();
		firstTabItem2.append("<small class='hidden_word'>(선택됨)</small>");

		return false;
	});
};


/* 탭 로드 스크립트 */
function subTabNew(tabName) {

	var siteTitle = '사이트이름';
	var selectTabA = '.js-nav__list.on a'

	var locItem = $('.location-box__cont > span');
	var loc = [locItem.eq(2).text(),
		locItem.eq(4).text(),
		locItem.eq(6).text(),
		locItem.eq(8).text()
		];
	var locL = locItem.length;

	$(tabName).find('.js-nav__list a').on('click',function(e) {
		var thisIndex = $(tabName).find('> .js-nav > .js-nav__list a').index(this);
		var tabItem = $(tabName).find('> .js-nav > .js-nav__list');
		var boxItem = $(tabName).find('> .js-box');
		var scrollmem = $('html').scrollTop() || $('body').scrollTop();

		tabItem.removeClass('on');
		boxItem.removeClass('on');
		tabItem.eq(thisIndex).addClass('on');
		boxItem.eq(thisIndex).addClass('on');

		if (locL == 5) {
			document.title = $(tabName).find(selectTabA).text() + ' < ' + loc[1] + ' < ' + loc[0] + ' | ' + siteTitle
		} else if (locL == 7) {
			document.title = $(tabName).find(selectTabA).text() + ' < ' + loc[2] + ' < ' + loc[1] + ' < ' + loc[0] + ' | ' + siteTitle
		} else if (locL == 9) {
			document.title = $(tabName).find(selectTabA).text() + ' < ' + loc[3] + ' < ' + loc[2] + ' < ' + loc[1] + ' < ' + loc[0] + ' | ' + siteTitle
		} else {
			document.title = $(tabName).find(selectTabA).text() + ' < ' + loc[0] + ' | ' + siteTitle
		}

		var firstTabItem = $(tabName).find(selectTabA);
		$('.js-nav__list a').find('small').remove();
		firstTabItem.append("<small class='hidden_word'>(선택됨)</small>");


		e.preventDefault();
		if($(this).attr('href').split('#')[1].length > 0) {
			location.hash = $(this).attr('href').replace(/^.*#/, '');
			$('html,body').scrollTop(scrollmem);
		}

		//window.location.reload();

		return false;
	});
};

/* 탭 로드 스크립트 + 새로고침*/
function subTabNewF5(tabName) {

	// var firstTabItem = $(tabName).find('.js-nav__list.on');
	// 	firstTabItem.attr('title', '선택됨');
	$(tabName).find('> .js-nav > .js-nav__list a').click(function(e) {
		var thisIndex = $(tabName).find('> .js-nav > .js-nav__list a').index(this);
		var tabItem = $(tabName).find('> .js-nav > .js-nav__list');
		var boxItem = $(tabName).find('> .js-box');
		var scrollmem = $('html').scrollTop() || $('body').scrollTop();

		tabItem.removeClass('on');
		boxItem.removeClass('on');
		tabItem.eq(thisIndex).addClass('on');
		boxItem.eq(thisIndex).addClass('on');

		// tabItem.attr('title', '');
		// tabItem.eq(thisIndex).attr('title', '선택됨');

		e.preventDefault();
		if($(this).attr('href').split('#')[1].length > 0) {
			location.hash = $(this).attr('href').replace(/^.*#/, '');
			$('html,body').scrollTop(scrollmem);
		}

		window.location.reload();

		return false;
	});
};



/*서브탭 추가 (스크롤 이동)*/

function newTap(tabName) {
	document.title =  $(tabName).find( '.js-nav__list.on a' ).html() + ' /' + $('.loc_tit').html() + ' ▦ ';

	$(tabName).find('.js-nav__list').click(function() {
		var thisIndex = $(tabName).find('.js-nav__list').index(this);
		var tabItem = $(tabName).find('.js-nav__list');
		var boxItem = $(tabName).find('.js-box');
		var siteTitle = $('h1 img').attr('alt');
		var offset = $(tabName).find(".js-box.on").offset();

		tabItem.removeClass('on');
		boxItem.removeClass('on');
		tabItem.eq(thisIndex).addClass('on');
		boxItem.eq(thisIndex).addClass('on');
		document.title =  $(tabName).find( '.js-nav__list.on a' ).text() + ' /' + $('.loc_tit').text() + ' ▦ ' + siteTitle;


		$('html, body').animate({scrollTop : offset.top}, 400);


		return false;
	});
};

/*자동사이즈*/
function menuSize(menuName) {
	var menuWd = 100/$(menuName).find('> ul > li').length;
		$(menuName).find('> ul > li').css('width',menuWd + '%' );
};

/*갯수 숫자 클래스 삽입*/
function menuNumbering(menuName){
	var menuLength = $(menuName).find('> ul > li').length;
	$(menuName).addClass('menu-num-'+ menuLength);

}


/* title_copy */

function title_copy(siteTitle){

	var sjLine = jQuery('tr').hasClass('sj_line');
	var sjLineNew = jQuery('.board_view_top > p').hasClass('tit');
	var sjLineNew2 = jQuery('h3').hasClass('new-big-view__top__tit');
	var newsLetter = $('.dep3_tab').length;
	var newsLetterOn = $('.dep3_tab li.on a span').text();

	var jg1 = $('li').hasClass('js-nav__list');
	var jg2 = $('li').hasClass('sub-tab__ul__li');

	var locItem = $('.location-box__cont > span');
	var loc = [locItem.eq(2).text(),
		locItem.eq(4).text(),
		locItem.eq(6).text(),
		locItem.eq(8).text()
		];
	var locL = locItem.length;

	var mainLocate = jQuery('body').hasClass('mainpage');


	if (!jg1 && jg2) { //  title 
		
		if($('small').hasClass('add_hash') == false){
		
			var firstTabItemD = $('.sub-tab__ul__li.on a');
	
			if (locL == 5) {
				document.title = firstTabItemD.text() + ' < ' + loc[1] + ' < ' + loc[0] + ' | ' + siteTitle;
			} else if (locL == 7) {
				document.title = firstTabItemD.text() + ' < ' + loc[2] + ' < ' + loc[1] + ' < ' + loc[0] + ' | ' + siteTitle;
			} else if (locL == 9) {
				document.title = firstTabItemD.text() + ' < ' + loc[3] + ' < ' + loc[2] + ' < ' + loc[1] + ' < ' + loc[0] + ' | ' + siteTitle;
			} else {
				document.title = firstTabItemD.text() + ' < ' + loc[0] + ' | ' + siteTitle;
			}
	
			var selectTabTextD = "<small class='hidden_word'>(선택됨)</small>";
			firstTabItemD.append(selectTabTextD);
		}
	} else if (jg1 && jg2) {

		if($('small').hasClass('add_hash') == false){

			var firstTabItemG = $('.js-nav__list.on a');
			
			if (locL == 5) {
				document.title = firstTabItemG.text() + ' < ' + loc[1] + ' < ' + loc[0] + ' | ' + siteTitle;
			} else if (locL == 7) {
				document.title = firstTabItemG.text() + ' < ' + loc[2] + ' < ' + loc[1] + ' < ' + loc[0] + ' | ' + siteTitle;
			} else if (locL == 9) {
				document.title = firstTabItemG.text() + ' < ' + loc[3] + ' < ' + loc[2] + ' < ' + loc[1] + ' < ' + loc[0] + ' | ' + siteTitle;
			} else {
				document.title = firstTabItemG.text() + ' < ' + loc[0] + ' | ' + siteTitle;
			}
			
			var selectTabText = "<small class='hidden_word'>(선택됨)</small>";
			firstTabItemG.append(selectTabText);

		}

	} else {

		//일반페이지 title
		let loginForm = $('#loginForm').length;
		let findForm = $('#findForm1').length;
		let chooseForm = $('.choose-yearsold').length;
		let stepForm1 = $('.steps-box__list .type1.on').length;
		let stepForm2 = $('.steps-box__list .type2.on').length;
		let stepForm3 = $('.steps-box__list .type3.on').length;
		let stepForm4 = $('.steps-box__list .type4.on').length;
		let csMansNum = $('.sub-tab3__ul__li.on').length;
		
		if (mainLocate == true) {
			document.title = siteTitle ;
		} else if (loginForm == 1){
			document.title = '로그인 | ' + siteTitle;
		} else if (findForm == 1){
			document.title = '회원정보찾기 < 로그인 | ' + siteTitle;
		} else if (chooseForm == 1){
			document.title = '회원구분 < 회원가입 | ' + siteTitle;
		} else if (stepForm1 == 1){
			document.title = 'step1 약관동의 < 회원가입 | ' + siteTitle;
		} else if (stepForm2 == 1){
			document.title = 'step2 본인인증 < 회원가입 | ' + siteTitle;
		} else if (stepForm3 == 1){
			document.title = 'step3 정보입력 < 회원가입 | ' + siteTitle;
		} else if (stepForm4 == 1){
			document.title = 'step4 가입완료 < 회원가입 | ' + siteTitle;
		} else if (csMansNum == 1){
			let csTabName = $('.sub-tab3__ul__li.on').text();
			
			if (locL == 5) {
				document.title = csTabName + ' < ' + loc[1] + ' < ' + loc[0] + ' | ' + siteTitle
			} else if (locL == 7) {
				document.title =  csTabName + ' < ' +loc[2] + ' < ' + loc[1] + ' < ' + loc[0] + ' | ' + siteTitle
			} else if (locL == 9) {
				document.title = csTabName + ' < ' + loc[3] + ' < ' + loc[2] + ' < ' + loc[1] + ' < ' + loc[0] + ' | ' + siteTitle
			} else {
				document.title = csTabName + ' < ' + loc[0] + ' | ' + siteTitle
			}
		}

		else {
			if (locL == 5) {
				document.title = loc[1] + ' < ' + loc[0] + ' | ' + siteTitle
			} else if (locL == 7) {
				document.title = loc[2] + ' < ' + loc[1] + ' < ' + loc[0] + ' | ' + siteTitle
			} else if (locL == 9) {
				document.title = loc[3] + ' < ' + loc[2] + ' < ' + loc[1] + ' < ' + loc[0] + ' | ' + siteTitle
			} else {
				document.title = loc[0] + ' | ' + siteTitle
			}

		}
		if (sjLine == true ){ // 구cms 게시판뷰
			document.title =  jQuery('.sj_line td').text() + ' / ' + jQuery( '.loc_tit' ).text() + ' | ' + siteTitle ;
		}
		if (sjLineNew == true ){ // 뉴cms 게시판뷰
			if(locL == 7){
				document.title =  jQuery('.board_view_top > .tit').text() + ' < ' + loc[2] + ' < ' + loc[1] + ' < ' + loc[0] + ' | ' + siteTitle
			}else{

				document.title =  jQuery('.board_view_top > .tit').text() + ' < ' + loc[1] + ' < ' + loc[0] + ' | ' + siteTitle
			}
		}

		if (newsLetter > 0) {
			document.title =  newsLetterOn + ' < ' + loc[1] + ' < ' + loc[0] + ' | ' + siteTitle
		}

	}

}


//  예전 CMS 용.
// IncSubSubject.jsp 의 내용의 수정도 필요하다.첨부한 '이전CMS사용시IncSubSubject수정내용참조' 의 내용으로 변경.
function title_copy2(siteTitle){
	var sjLine = $('tr').hasClass('sj_line');
	var sjLine2 = $('h3').hasClass('sj_line');
	//var siteTitle = $('h1 img').attr('alt');
	var mainLocate = $('body').hasClass('mainpage');

	var locItem = $('.loc-item');
	var loc = [locItem.eq(1).text(),
				locItem.eq(2).text(),
				locItem.eq(3).text(),
				locItem.eq(4).text()
			];

	if (sjLine2 == true ){
		//document.title =  $('.sj_line td').text() + ' / ' + $( '.loc_tit' ).text() + ' | ' + siteTitle ;
		document.title =  $('.sj_line').text() + ' / ' + $( '.loc_tit' ).text() + ' | ' + siteTitle ;

		// 신형cms의 board 스타일 따를시 아래것으로.
		//document.title =  $('.bbs-tit').text() + ' / ' + $( '.loc_tit' ).text()  + ' < ' + $( '.sidebar__h2' ).text() +  ' | ' + siteTitle ;
	}
	else if (sjLine == true ){
		document.title =  $('.sj_line td').text() + ' / ' + $( '.loc_tit' ).text() + ' | ' + siteTitle ;

		// 신형cms의 board 스타일 따를시 아래것으로.
		//document.title =  $('.bbs-tit').text() + ' / ' + $( '.loc_tit' ).text()  + ' < ' + $( '.sidebar__h2' ).text() +  ' | ' + siteTitle ;
	}
	else if (mainLocate == true) {
		document.title = siteTitle ;
	}
	else {
		//document.title = $( '.loc_tit' ).text() + ' | ' + siteTitle ;
		var locL = locItem.length;
		if (locL == 3) {
			document.title = loc[1] + ' < ' + loc[0] + ' < ' + $( '.sidebar__h2' ).text()  + ' | ' + siteTitle
		} else if (locL ==4) {
			document.title = loc[2] + ' < ' + loc[1] + ' < ' + loc[0] + ' < ' + $( '.sidebar__h2' ).text()  + ' | ' + siteTitle
		} else if (locL == 5) {
			document.title = loc[3] + ' < ' + loc[2] + ' < ' + loc[1] + ' < ' + loc[0] + ' < ' + $( '.sidebar__h2' ).text()  + ' | ' + siteTitle
		} else {
			document.title = loc[0] + ' < ' + $( '.sidebar__h2' ).text() + ' | ' + siteTitle
		}

	}

};


/* font size */
var $window = $(window),
	$document = $(document),
	$html = $('html'),
	fontIndex = jQuery.cookie('webFontSize') ? jQuery.cookie('webFontSize') : 1;

function setFontSizeClass() {
	$html.removeClass(function(index,class_list_str){
		var class_list = class_list_str.split(' ');
		for(var i = 0 ; i < class_list.length ; i ++) {
			var cls = class_list[i];
			if(cls.match(/websize\-[0-9]+/)) {
				return cls;
			}
		}
	}).addClass('websize-' + fontIndex);
	jQuery.cookie('webFontSize', fontIndex, { path: '/' });
}
function js_font_plus(){
	if(fontIndex >= 7) return false;
	fontIndex++;
	setFontSizeClass();
}
function js_font_minus(){
	if(fontIndex <= 1) return false;
	fontIndex--;
	setFontSizeClass();
}
function js_font_default(){
	if(fontIndex <= 1) return false;
	fontIndex = 1;
	setFontSizeClass();
}

$(function() {
	$html.addClass('websize-' + fontIndex);
});

/*배너형 스크롤*/
function mainRolling() {
		$.fn.roll = function(){
			var hook = $(this);
			var UL = hook.find('.listwrap');
			var LI = UL.find('li');
			var ULwidth = LI.outerWidth() * LI.length;
			var prev = $('.r_prev');
			var next = $('.r_next');
			var pause = $('.r_pause');
			var start = $('.r_start');
			var interval;
			var intervalPosition = 'next';

			var nextEvent = function(){
				clearInterval(interval);
				intervalPosition = 'next';
				interval = setInterval(intervalFN, 5000);

				LI = UL.find('li');
				UL.animate({left:-LI.outerWidth()},	function(){
					UL.css({left:0});
					var firstLI = LI.eq(0).remove();
					firstLI.appendTo(UL);
				});
				return false;
			};

			var prevEvent = function(){
				clearInterval(interval);
				intervalPosition = 'prev';
				interval = setInterval(intervalFN, 5000);

				LI = UL.find('li');
				var lastLI = LI.eq(LI.length-1).remove();
				lastLI.prependTo(UL);
				UL.css({left:-LI.outerWidth()});
				UL.animate({left:0});
				return false;
			};

			var pauseEvent = function() {
				clearInterval(interval);
				return false;
			};

			var startEvent = function() {
				clearInterval(interval);
				interval = setInterval(intervalFN, 5000);
				return false;
			};

			var intervalFN = function() {
				if(intervalPosition == 'next')
					nextEvent();
				else
					prevEvent();
			};

			interval = setInterval(intervalFN, 5000);

			UL.css({width:ULwidth});
			next.bind('click', nextEvent);
			prev.bind('click', prevEvent);
			start.bind('click', startEvent);
			pause.bind('click', pauseEvent);
			pauseEvent(); //stop;

		/*
			if($('.listwrap li').length <= 3) {
				$('.r_next').addClass('hide');
				$('.r_prev').addClass('hide');
			}else if ($('.listwrap li').length >= 4) {
				$('.r_next').removeClass('hide');
				$('.r_prev').removeClass('hide');
			}
		*/
		}
		$('#test').roll();
}

/* 상하식 롤링 */
function RollingUpDown() {
	$.fn.roll = function(){
		var hook = $(this);
		var UL = hook.find('.listwrap2');
		var LI = UL.find('li');
		var ULwidth = LI.outerHeight() * LI.length;
		var prev = $('.r_prev2');
		var next = $('.r_next2');
		var pause = $('.r_pause');
		var start = $('.r_start');
		var interval;
		var intervalPosition = 'next';

		var nextEvent = function(){
			clearInterval(interval);
			intervalPosition = 'next';
			interval = setInterval(intervalFN, 5000);

			LI = UL.find('li');
			UL.animate({top:-LI.outerHeight()},	function(){
				UL.css({top:0});
				var firstLI = LI.eq(0).remove();
				firstLI.appendTo(UL);
			});
			return false;
		};

		var prevEvent = function(){
			clearInterval(interval);
			intervalPosition = 'prev';
			interval = setInterval(intervalFN, 5000);

			LI = UL.find('li');
			var lastLI = LI.eq(LI.length-1).remove();
			lastLI.prependTo(UL);
			UL.css({top:-LI.outerHeight()});
			UL.animate({top:0});
			return false;
		};

		var pauseEvent = function() {
			clearInterval(interval);
			return false;
		};

		var startEvent = function() {
			clearInterval(interval);
			interval = setInterval(intervalFN, 5000);
			return false;
		};

		var intervalFN = function() {
			if(intervalPosition == 'next')
				nextEvent();
			else
				prevEvent();
		};

		interval = setInterval(intervalFN, 5000);

		UL.css({width:ULwidth});
		next.bind('click', nextEvent);
		prev.bind('click', prevEvent);
		start.bind('click', startEvent);
		pause.bind('click', pauseEvent);
	}
	$('#rollup').roll();
}

/* 모바일 메뉴 오픈 */
function mobile_menu() {
	$('.mobile_on_off').on('click',function(){
		$('body').toggleClass('mobile_menu_open');
		$('#gnb_nav_mobile').toggleClass('selected');
		$('.mobile_top_nav').toggleClass('selected');
		$('.mobile_top_nav .gnb').toggleClass('selected');
		$('.header__links').toggleClass('selected');
		return false;
	});
}

function mainGnbMobile() {
	var oldIndex = 0;
	$('.sub-nav__box__list').closest('.gnb-menu').addClass('has-menu'); //2차메뉴 있을시 클래스 삽입
	//$('.sub-nav__box__ul').closest('li').addClass('has-menu'); //2차메뉴 있을시 클래스 삽입
	$('.has-menu').siblings().addClass('no-has-menu');
	$('.has-menu.no-has-menu').removeClass('no-has-menu');

	//
	$('.mobile_top_nav li.gnb-menu.has-menu > .sub-nav').slideUp();
	$('.mobile_top_nav li.gnb-menu.has-menu.on > .sub-nav').addClass('on').slideDown();
	$('.mobile_top_nav .has-menu .gnb-menu__a').attr("href","#none"); //

	$('.mobile_top_nav li.gnb-menu.has-menu > a').click(function() {
		var thisIndex = $('.mobile_top_nav li.gnb-menu.has-menu > a').index(this);

		if ($('.mobile_top_nav .has-menu div.sub-nav').eq(thisIndex).hasClass('on') == true) {

			$('.mobile_top_nav .has-menu div.sub-nav').eq(thisIndex).slideUp();
			$('.mobile_top_nav li.gnb-menu.has-menu').eq(thisIndex).removeClass('on');
			$('.mobile_top_nav .has-menu div.sub-nav').eq(thisIndex).removeClass('on');

		} else {

			$('.mobile_top_nav .has-menu div.sub-nav').slideUp();
			$('.mobile_top_nav li.gnb-menu.has-menu').removeClass('on');
			$('.mobile_top_nav .has-menu div.sub-nav').removeClass('on');

			$('.mobile_top_nav .has-menu div.sub-nav').eq(thisIndex).slideDown();
			$('.mobile_top_nav li.gnb-menu.has-menu').eq(thisIndex).addClass('on');
			$('.mobile_top_nav .has-menu div.sub-nav').eq(thisIndex).addClass('on');
		}
		//return false;
	});



};

/* 사이드메뉴 */
function side_open(){
		$('.side-list__li.on > span > a').append("<em class='hidden_word'>(현재 선택됨)</em>")
		$('.spp__in.on > a').append("<em class='hidden_word'>(현재 선택됨)</em>")
		$('.spp__in').closest('.side-list__li').addClass('open-type');
		
		var openToggle = $('.open-type');
		var openToggleOn = $('.open-type.on');
		openToggle.find('> span > a').append("<small class='hidden_word'>(하위메뉴 목록 펼치기)</small>");
		openToggleOn.find('> span > a > small').text('(하위메뉴 목록 접기)')

		$('.spp__in__small').closest('.spp__in').addClass('sp-open-type');

		var oldIndex = 0;
		$('.open-type span').on('click',function() {
			var thisIndex = $('.open-type span').index(this);

			$('.open-type').eq(thisIndex).toggleClass('on');
			
			if ($(this).closest('.open-type').hasClass('on')){
				$(this).find(' > a > small').text('(하위메뉴 목록 접기)')
			} else {
				$(this).find(' > a > small').text('(하위메뉴 목록 펼치기)')
			}

			oldIndex = thisIndex;

			return false;
		});

		$('.spp__in > a').on('click',function() {
			var smallBox = $(this).closest('.spp__in').children('.spp__in__small').length;
				if ( smallBox == 1 )
				{
					$(this).closest('.spp__in').toggleClass('on')
				return false;
				}
			}

		) ;
}

function side_open2(){
		$('.side-list__li__inbox').closest('.side-list__li').addClass('open-type');
		$('.spp__in__small').closest('.spp__in').addClass('sp-open-type');

}

function sizeLength(){
	var sLength = $('.sidebar__h2').html();

	if (sLength.length > 8) {
		$('.sidebar__h2').addClass('long-type')
	} else {
		$('.sidebar__h2').addClass('short-type')
	}
	return false
}

function menuLight() {

	var menuNum = $("#menuNo").val();
	var subNum = $("#subMenuNo").val();
	var thirdMenuNo = $("#thirdMenuNo").val();
	var menuWd = 100/$('#submenu > ul > li').length;

	$('#sidebar > div > ul > li.2dep_'+subNum).addClass('on');
	$('#sidebar > div > ul > li > div > ul >  li.3dep_'+thirdMenuNo).addClass('on');

}

function mobileMenuOpen() {
	$('.mobile-submenu-btn').on('click',function() {
		$('.sidebar').toggleClass('selected');
		$('.mobile-submenu-btn').toggleClass('selected');
		return false;
	});
	$('.spp__in.selected').closest('.side-list__li').addClass('on');
	$('.sub-nav__box__list.on').closest('.gnb-menu').addClass('on');
}

/**/
function sizeComp(){
	var thisIndex = $('.none-width #gnb .gnb-ul > li').index(this);
	var size_item = $('.none-width #gnb .gnb-ul ').width();

	var totalWidth = 0;
	var set = $('.none-width #gnb .gnb-ul > li');
		set.each(function(){
			totalWidth = totalWidth + $(this).width();
		});

	var gnbLiN = $('.none-width #gnb .gnb-ul > li').length;
	var size_resize = ((size_item - totalWidth) / gnbLiN );
	var size_result = size_resize / 2;

		$('.none-width #gnb .gnb-menu > a').css({paddingLeft:size_result});
		$('.none-width #gnb .gnb-menu > a').css({paddingRight:size_result - 1});


		$('.none-width #gnb .sub-nav').each(function(i) {
			var size_box = $(this).eq(thisIndex).closest('.gnb-menu').children('.t_item').width();
			//$(this).eq(thisIndex).css({width:size_box + size_resize -2 });
		});

}

//슬라이드 dots 없을때 off 추가
function slideDots(slideDotsWrap){
	var dotsItem = $(slideDotsWrap).find('ul').hasClass('slick-dots-list');
	if (dotsItem === false ){
		$(slideDotsWrap).addClass('off');
	}
}

//팝업존용 슬라이드
function slideBox(slideName) {
	$(slideName).slick({
		dots: true,
		dotsClass: 'slick-dots-list',
		appendDots:$(slideName).next('div').find('> div > div'),
		infinite: true,
		autoplaySpeed: 5000,
		speed: 800,
		slidesToShow: 1,
		//autoplay: true,
		pauseOnHover: true,
		adaptiveHeight: true,
		//centerMode: true,
		//variableWidth: true,
		responsive: [
			{
			breakpoint: 1200,
			settings: {
				centerMode: false,
				variableWidth: false
			}
			}
		]
	});

	//슬라이드 갯수 네비
	var popLength = $(slideName).next('div').find('.slick-dots-list > li').length;
	$(slideName).next('div').find('.popup-total-num').text(popLength);

	if (popLength > 5 == true) {
		$(slideName).closest('article').addClass('ver-total'); //방식 자동변환할경우
		$(slideName).closest('article').addClass('ver-arrow'); //방식 자동변환할경우
	}

	//슬라이드 dots 없을때 off 추가

	var dotsItem = $(slideName).next('div').find('ul').hasClass('slick-dots-list');
	if (dotsItem === false ){
		$(slideName).next('div').addClass('off');
	}

	var $progressBar = $(slideName).next('.popupzone-nav').next('.prg-result').children('.prg-result__in');

	$(slideName).on('beforeChange', function(event, slick, activeSlide, nextSlide) {
		var cchop = popLength + -1
		var calc = ( (nextSlide ) / cchop ) * 100;
		$progressBar.css('width', calc + '%');
	});
}

// all menu
function all_menu_open(){
	$('.btn_all').on('click', function() {
		$('.all_menu_wrap__outwrap').toggleClass('selected');
		$('.btn_all').toggleClass('selected');

		return false;
	});

	$('.sub-nav__box__list').last().find('li').hasClass('sub-nav__3rd__ul__li') ? $('.all_menu_wrap .sub-nav__3rd__ul__li').last().addClass('last-item') : $('.sub-nav__box__list').last().addClass('last-item');


	$(".last-item").on('keydown blur', function(e) {
		if (e.shiftKey && e.keyCode === 9) {
			console.log('shift tab');
		} else if (e.keyCode === 9) {
			console.log('tab');
			$('.btn_all').focus();
			$('.all_menu_wrap__outwrap').toggleClass('selected');
			$('.btn_all').toggleClass('selected');
			return false;

		} else if(e.type == 'blur')  {
			console.log('mosueOUt')

		}

	});
}


// FAQ
function faqNew() {

	$('.faq-box__list__tit').append("<em class='hidden_word'>(내용펼치기)</em>");
	$('.faq-box__list.on .faq-box__list__answer').slideDown();
	$('.faq-box__list__tit').on('click',function() {
		var faqOn = $(this).closest('.faq-box__list');
		if (!faqOn.hasClass('on')) {
			// 하나만 열리기 추가
			$('.faq-box__list.on').children('.faq-box__list__answer').slideUp();
			$('.faq-box__list__tit em').text('내용펼치기');
			$('.faq-box__list').removeClass('on');
			// 하나만 열리기 추가

			$(this).closest('.faq-box__list').children('.faq-box__list__answer').slideDown();
			$(this).closest('.faq-box__list').addClass('on');
			$(this).find('em').text('내용닫기');
		} else if (faqOn.hasClass('on') == true ){
			$(this).closest('.faq-box__list.on').children('.faq-box__list__answer').slideUp();
			$(this).find('em').text('내용펼치기');
			$(this).closest('.faq-box__list').removeClass('on');
		}
		return false;
	});


}

function headerSearch() {
	$('.header-search-btn').on('click',function(){
		$(this).toggleClass('on');
		$('.header__search').toggleClass('on');
		$('.header__search-in_box').focus();
	});
	$('.m_s_btn').on('click',function(){
		$(this).toggleClass('on');
		$('.header__search').toggleClass('on');
	});

	$('.header__search__close').on('click',function(){

		$('.header__search').toggleClass('on');
		$('.header-search-btn').focus();
	});
}

/* 비주얼부분 타이틀 */
function subVisualTit() {
	var subTit = $('.sidebar__h2').text();
	$('.sub-visual__tit').text(subTit)

}

/* popupzone */
// circle형
function popupSlide1(popupSlide, popupNav, toShow) {
	$(popupSlide).slick({
		dots: true,
		dotsClass: 'slick-dots-list',
		appendDots:$(popupSlide).next('div').find('> div > div'),
		infinite: true,
		speed: 600,
		autoplaySpeed: 4000,
		slidesToShow: toShow,
		autoplay: true,
		pauseOnHover: true,
		centerMode: false,
		variableWidth: false,
		responsive: [
			{
			breakpoint: 1800,
			settings: {
				centerMode: false,
				variableWidth: false,
			}
			}
		],
		
		
	});

	//
	$(popupNav).find('.slide-prev-item').on('click',function(){
		$(popupSlide).slick('slickPrev');return false;
	})
	$(popupNav).find('.slide-pause-item').on('click',function(){
		$(popupSlide).slick('slickPause');return false;
	})
	$(popupNav).find('.slide-play-item').on('click',function(){
		$(popupSlide).slick('slickPlay');return false;
	})
	$(popupNav).find('.slide-next-item').on('click',function(){
		$(popupSlide).slick('slickNext');return false;
	})
	
	// aria-hidden 접근성 관련. 선택된 버튼에 대체 텍스트 추가.
	$(popupNav).find('.slick-dots-list > li').removeAttr('aria-hidden');
	$(popupNav).find('.slick-dots-list > li.slick-active button').append('<span class="hidden_word">선택됨</span>');				
	$(popupSlide).on('init afterChange', function(event, slick, currentSlide) {
		setTimeout(function() {
			$(popupNav).find('.slick-dots-list > li').removeAttr('aria-hidden');
			$(popupNav).find('.slick-dots-list > li button span').remove();
			$(popupNav).find('.slick-dots-list > li.slick-active button').append('<span class="hidden_word">선택됨</span>')
		}, 10);
	});
	
	//
	let mainPopupLength = $(popupSlide).find('.slick-list .slick-slide').length;
	if (mainPopupLength == 1){
		$(popupSlide).next('div').css('display','none')
	}
	
	let popButtons = $(popupNav).find('.slick-dots-list button').length;
	if (popButtons === 0) {
		$(popupSlide).closest('article').addClass('ver-numbers');
		$(popupSlide).closest('article').addClass('ver-arrow');
		
	}
}
//숫자형
function popupSlide2(popupSlide, popupNav, toShow) {
	$(popupSlide).slick({
		dots: true,
		dotsClass: 'slick-dots-list',
		appendDots:$(popupSlide).next('div').find('> div > div'),
		infinite: true,
		speed: 600,
		autoplaySpeed: 4000,
		slidesToShow: toShow,
		autoplay: true,
		pauseOnHover: true,
		centerMode: false,
		variableWidth: false,
		responsive: [
			{
			breakpoint: 1800,
			settings: {
				centerMode: false,
				variableWidth: false,
			}
			}
		],
		customPaging: function (slick,index) { 
			return (index + 1) + ' ' + '/' + ' ' + '' + slick.slideCount; 
		}
		
	});

	//
	$(popupNav).find('.slide-prev-item').on('click',function(){
		$(popupSlide).slick('slickPrev');return false;
	})
	$(popupNav).find('.slide-pause-item').on('click',function(){
		$(popupSlide).slick('slickPause');return false;
	})
	$(popupNav).find('.slide-play-item').on('click',function(){
		$(popupSlide).slick('slickPlay');return false;
	})
	$(popupNav).find('.slide-next-item').on('click',function(){
		$(popupSlide).slick('slickNext');return false;
	})
	
	//
	let mainPopupLength = $(popupSlide).find('.slick-list .slick-slide').length;
	if (mainPopupLength == 1){
		$(popupSlide).next('div').css('display','none')
	}
	
	let popButtons = $(popupNav).find('.slick-dots-list button').length;
	if (popButtons === 0) {
		$(popupSlide).closest('article').addClass('ver-numbers');
		$(popupSlide).closest('article').addClass('ver-arrow');
		
	}
}
//progressBar
function popupSlide3(popupSlide, popupNav, toShow) {
	$(popupSlide).slick({
		dots: true,
		dotsClass: 'slick-dots-list',
		appendDots:$(popupSlide).next('div').find('> div > div'),
		infinite: true,
		speed: 600,
		autoplaySpeed: 4000,
		slidesToShow: toShow,
		initialSlide : 0,
		autoplay: true,
		pauseOnHover: true,
		centerMode: false,
		variableWidth: false,
		responsive: [
			{
				breakpoint: 1800,
				settings: {
					centerMode: false,
					variableWidth: false,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					adaptiveHeight: true
				}
			}
		],
		customPaging: function (slick,index) { 
			return (index + 1) + ' ' + '<span class="prg"></span> ' + ' ' + '' + slick.slideCount; 
		}
	});

	$(popupSlide).on('beforeChange', function(event, slick, currentSlide, nextSlide){
		//alert('dd')
	})
	

	
	//
	$(popupNav).find('.slide-prev-item').on('click',function(){
		$(popupSlide).slick('slickPrev');return false;
	})
	$(popupNav).find('.slide-pause-item').on('click',function(){
		$(popupSlide).slick('slickPause');return false;
	})
	$(popupNav).find('.slide-play-item').on('click',function(){
		$(popupSlide).slick('slickPlay');return false;
	})
	$(popupNav).find('.slide-next-item').on('click',function(){
		$(popupSlide).slick('slickNext');return false;
	})


	//
	let mainPopupLength = $(popupSlide).find('.slick-list .slick-slide').length;
	if (mainPopupLength == 1){
		$(popupSlide).next('div').css('display','none')
	}
	//
	let popButtons = $(popupNav).find('.slick-dots-list button').length;
	if (popButtons === 0) {
		$(popupSlide).closest('article').addClass('ver-numbers');
		$(popupSlide).closest('article').addClass('ver-arrow');
		
	}
	
	//
	$(popupNav).next('.prg-result').addClass('on');
	let popLength = $(popupNav).find('.slick-dots-list > li').length;
	let $progressBar = $(popupNav).next('.prg-result').children('.prg-result__in');

	$(popupSlide).on('beforeChange', function(event, slick, activeSlide, nextSlide) {
		let cchop = popLength + -1
		//console.log(popLength)
		let calc = ( (nextSlide ) / cchop ) * 100;

		$progressBar.css('width', calc + '%');
		
	});
	
	$(window).on('load',function(){
		let cLength = popLength	+ -1
		let nowNumber = $(popupSlide).find('.slick-current').attr('data-slick-index');
		
		let nowWidth = ( (Number(nowNumber)) / cLength ) * 100;
		
		$progressBar.css('width', (nowWidth) + '%');
	})
}
function goSisul() {
  $('.footer-select-new__btn').on('click', function () {
	$('.footer-select-new').toggleClass('on')
	return false
  })
}