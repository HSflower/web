$(document).ready(function(){

	$("ul.snsNav > li > a").click(function(){
		$(this).addClass("active");
		$(this).parent().siblings().find(">a").removeClass("active");
		$(this).parent().find(">.block").show();
		$(this).parent().siblings().find(">.block").hide();
		return false;
	});
	$("ul.latelyNav > li > a").click(function(){
		$(this).addClass("active");
		$(this).parent().siblings().find(">a").removeClass("active");
		$(this).parent().find(">.block").show();
		$(this).parent().siblings().find(">.block").hide();
		return false;
	});

});

$(document).ready(function(){
	$("nav.gnb>.gnbw>ul>li").mouseenter(function(){
		$("header>.gnbBg").show();
		$("nav.gnb>.gnbw>ul").height("81px");
	});
	$("nav.gnb>.gnbw>ul").mouseleave(function(){
		$("header>.gnbBg").hide();
		$("nav.gnb .depth2").hide();
		$("nav.gnb>.gnbw>ul").height("auto");
		$(this).find(">li>a").removeClass("on");
	});
	$("nav.gnb>.gnbw>ul>li").on("mouseenter",function(){
		//$(this).parent().addClass("active");
		$(this).find(">a").addClass("on");
		$(this).siblings().find(">a").removeClass("on");
		$(this).find("ul.depth2").show();
		$(this).siblings().find("ul.depth2").hide();
	});
	$("nav.gnb>.gnbw>ul>li").on("focusin",function(){
		if($(this).find("ul.depth2").is(":hidden")){
			$("header>.gnbBg").show();
			$("nav.gnb>ul").height("81px");
			$(this).find("a").addClass("on");
			$(this).find("ul.depth2").show();
		}
		if($(this).siblings().find("ul.depth2").is(":visible")){
			$(this).siblings().find("ul.depth2").hide();
			$(this).siblings().find("a").removeClass("on");
		};
	});
	$("nav.gnb>.gnbw>ul>li a:last").on("focusout",function(){
		$("header>.gnbBg").hide();
		$("nav.gnb>.gnbw>ul").height("auto");
		$("nav.gnb>.gnbw>ul>li").find("ul.depth2").hide();
		$("nav.gnb>.gnbw>ul>li>a").removeClass("on");
	});
	//document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
});


$(document).ready(function(){

	$(window).scroll(function(){
		var _quickTop=$(".quickWrap").offset().top;
		if($(this).scrollTop() > _quickTop){
			$(".quickWrap").addClass("fixed");
		}else{
			$(".quickWrap").removeClass("fixed");
		}
	});

});

function squareTab(){
	$(".subTab a").click(function(){
		var _id=$(this).attr("href");
		$(".subTab a").removeClass("on");
		$(this).addClass("on");
		$(".squarezone").hide();
		$(_id).show();
		return false;
	});
	$(".subTab a:first").trigger("click");
};

function nowPage(d1){

	var _p=d1-1;
	$(".aside .lnb > li").eq(_p).find("a").addClass("on");

};


function nowPageM(d1){
	
	var _p=d1-1;
	$(window).load(function(){
		var _w=$("#container").width();
		var _ww=0;
		if(_w<784){
			$(".aside>nav>ul.lnb>li>a").each(function(i){
				_liw=$(this).outerWidth()+2;
				_ww+=_liw;
			});
			$(".aside>nav>ul.lnb").width(_ww+1);
		}else{
			$(".aside>nav>ul.lnb").width("100%");
		};

		var subLnb;
		subLnb = new IScroll('.aside > nav', {
			scrollbars: false, //스크롤바보이기
			mouseWheel: true, //마우스휠작동
			interactiveScrollbars: true,
			shrinkScrollbars: 'scale',
			scrollX:true,//X좌표스크롤
			click:true,//클릭이벤트적용
			zoom:false
			//fadeScrollbars:true스크롤바자동숨기기
		});		
		
		if(_w<784){
			var _left=$(".aside .lnb > li").eq(_p);
			subLnb.scrollToElement('li:nth-child('+_p+')', 0)
		};

		$(window).resize(function(){
			var _w2=$("#container").width();
			var _ww2=0;
			if(_w2<784){
				$(".aside>nav>ul.lnb>li>a").each(function(i){
					_liw2=$(this).outerWidth()+2;
					_ww2+=_liw2;
				});
				$(".aside>nav>ul.lnb").width(_ww2+1);
				var _left=$(".aside .lnb > li").eq(_p).offset().left;
				subLnb.scrollToElement('li:nth-child('+_p+')', 0)
			}else{
				$(".aside>nav>ul.lnb").width("100%");
			};
		});

	});

};