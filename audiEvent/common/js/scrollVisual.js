function menuOff(){
	$("body").removeClass("menuOn");
	$("#container .bBg").remove();
	$("header .midArea").stop(true,true).animate({left:"0"},300);
	$("nav.gnb").stop(true,true).animate({right:"-250px"},300);
	//$("header .midArea").css("left","0");
	//$("nav.gnb").css("right","-250px");
};
function quickOff(){
	$("body").removeClass("quickOn");
	$("#container .bBg").remove();
	$(".topArea ul.pc").slideUp(300);
};
function mapOff(){
	$("body").removeClass("mapOn");
	$("#container .bBg").remove();
	$(".mapViewPop").stop(true,true).animate({left:"-300px"},300);
};

$(document).ready(function(){

//	locGnb = new IScroll('header nav.gnb .gnbw', {
//		scrollbars: true, //스크롤바보이기
//		mouseWheel: true, //마우스휠작동
//		interactiveScrollbars: true,
//		shrinkScrollbars: 'scale',
//		scrollY:true,//X좌표스크롤
//		click:true,//클릭이벤트적용
//		fadeScrollbars:true//스크롤바자동숨기기
//	});

	mapPop = new IScroll('.mapViewPop > .mvW', {
		scrollbars: true, //스크롤바보이기
		mouseWheel: true, //마우스휠작동
		interactiveScrollbars: true,
		shrinkScrollbars: 'scale',
		scrollY:true,//X좌표스크롤
		click:true,//클릭이벤트적용
		fadeScrollbars:true//스크롤바자동숨기기
	});

	$(".btn_menu").click(function(){
		if($("body").hasClass("menuOn")){
			menuOff();
		}else if($("body").hasClass("quickOn")){
			quickOff();
		}else if($("body").hasClass("mapOn")){
			mapOff();
		}else{
			$("body").addClass("menuOn");
			$("#container").append("<div class='bBg'></div>");
			$("header .midArea").stop(true,true).animate({left:"-250px"},300);
			$("nav.gnb").stop(true,true).animate({right:"0"},300);
			//$("header .midArea").css("left","-250px");
			//$("nav.gnb").css("right","0");
		};
		return false;
	});

	$(".btn_quick").click(function(){
		if($("body").hasClass("menuOn")){
			menuOff();
		}else if($("body").hasClass("quickOn")){
			quickOff();
		}else if($("body").hasClass("mapOn")){
			mapOff();
		}else{
			$("body").addClass("quickOn");
			$("#container").append("<div class='bBg'></div>");
			$(".topArea ul.pc").slideDown(300);
		};
	});

	$(".btn_map").click(function(){
		if($("body").hasClass("menuOn")){
			menuOff();
		}else if($("body").hasClass("quickOn")){
			quickOff();
		}else if($("body").hasClass("mapOn")){
			mapOff();
		}else{
			$("body").addClass("mapOn");
			$("#container").append("<div class='bBg'></div>");
			$(".mapViewPop").stop(true,true).animate({left:"0"},300);
		};
	});

	$("#container").on("click","div.bBg",function(){
		if($("body").hasClass("menuOn")){
			menuOff();
		}else if($("body").hasClass("quickOn")){
			quickOff();
		}else{
			mapOff();
		};
	});


});