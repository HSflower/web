
 $(document).ready(function() {
	init();
	 $("#header").slideDown("slow"); 
	 $("#left").slideDown("slow"); 
 	setInterval(function(){
 		$("#header").fadeOut("fast");
		 $("#header").fadeIn("slow");
 	},5000);
	
})

function init() {
	 	
	 //페이지 가져오기
	 $(".fageLoad").click(function(){
		 //속성값 가져오기
		 var idx = $(this).attr("idx");
		 var url; // 주소
		 var wid; // iframe 넓이 값
		 var hei; // iframe 높이 값
		 
		 if(idx == 1) {
		 	url = "step01.htm";
			wid = 1200;
			hei = 900;
		 }else if(idx == 2){
		 	url = "step02.htm";
			wid = 800;
			hei = 600;
		 }else if(idx == 3){
		 	url = "step03.htm";
			wid = 800;
			hei = 600;
		 }else if(idx == 4){
		 	url = "step04.htm";
			wid = 800;
			hei = 600;
		 }else if(idx == 5){
		 	url = "step05.htm";
			wid = 600;
			hei = 330;
		 }else if(idx == 6){
			url = "step06.htm";
			wid = 900;
			hei = 1000;
		 }else{
			url = "step01.htm";
		 }
		
		/*
			$("forwardPage").load("step01.htm"); 호출이 안되는 관계로..
			iframe으로 페이지를 불러온다.
		*/
		$("#forwardPage").html("<iframe src='"+url+"' width='"+wid+"' height='"+hei+"' frameborder='0'scrolling='no'></iframe>"); 
		 /*
		 //ajax로 페이지 호출 Tomcat에서 사용가능
		 $.ajax({      
	         type:"POST",  
	         url:url,      
	         success:function(data){   
	             $("#forwardPage").html(data);      
	         },   
	         error:function(e){  
	             alert("error" + e.responseText);  
	         }  
	     });  
		*/
	 })
	 
	 
	 //Login
	 $("#jsLogin").click(function(){
		 if($("#loginId").val() == "") {
			 alert("아이디를 입력하세요.");
			 $("#loginId").focus();
			 return ;
		 }
		 if($("#loginPass").val() == "") {
			 alert("비밀번호를 입력하세요.");
			 $("#loginPass").focus();
			 return ;
		 }

		 location.href="step05_login.htm";
		 //$("#forwardPage").html("<iframe src='step01.htm' width='600' height='330' frameborder='0'scrolling='no'></iframe>"); 
		 
		/*
		 $.ajax({      
	         type:"POST",  
	         url:"step05_login.htm",      
	         success:function(data){     
	             $("#forwardPage").html(data);
	         },   
	         error:function(e){  
	             alert("error" + e.responseText);  
	         }  
	     });
		 */
	 })
	 
	 $("#jsBack").click(function(){
		location.href="step05.htm";
		//$("#forwardPage").html("<iframe src='step05.htm' width='600' height='330' frameborder='0'scrolling='no'></iframe>"); 
		/*
		 $.ajax({      
	         type:"POST",  
	         url:"step05.htm",      
	         success:function(data){   
	             $("#forwardPage").html(data);      
	         },   
	         error:function(e){  
	             alert("error" + e.responseText);  
	         }  
	     });
		 */
	 })
	 
	 $(".quicktop").click(function(){
    $("div").scrollTop();
});
	 $(".slideShow1").click(function(){
		 $("#slideView2").slideUp("slow");
		 $("#slideView3").slideUp("slow");
		 $("#slideView4").slideUp("slow");
		 $("#slideView5").slideUp("slow");
		 $("#slideView1").slideDown("slow"); 
	 })
	 $(".slideShow2").click(function(){
		 $("#slideView1").slideUp("slow");
		 $("#slideView3").slideUp("slow");
		 $("#slideView4").slideUp("slow");
		 $("#slideView5").slideUp("slow");
		 
		 $("#slideView2").slideDown("slow"); 
	})
	 $(".slideShow3").click(function(){
		 $("#slideView1").slideUp("slow");
		 $("#slideView2").slideUp("slow");
		 $("#slideView4").slideUp("slow");
		 $("#slideView5").slideUp("slow");
		 
		 $("#slideView3").slideDown("slow"); 
	})
	 $(".slideShow4").click(function(){
		 $("#slideView1").slideUp("slow");
		 $("#slideView3").slideUp("slow");
		 $("#slideView2").slideUp("slow");
		 $("#slideView5").slideUp("slow");
		 
		 $("#slideView4").slideDown("slow"); 
	})
	 $(".slideShow5").click(function(){
		 $("#slideView1").slideUp("slow");
		 $("#slideView2").slideUp("slow");
		 $("#slideView3").slideUp("slow");
		 $("#slideView4").slideUp("slow");
		 
		 $("#slideView5").slideDown("slow"); 
	})
	
	
	$(".imageView").click(function(){
		var imgIdx = $(this).attr("idx");
		/*if(imgIdx == 1) {
			$(".imageShow").css("display","block");
			$(".imageShow").fadeIn("slow");
			//$(".imageShow").html("/web/images/img0"+imgIdx+".png");
			//$(".imageShow").html("/web/images/img01.png");
		}*/
		
		 $( ".imageShow" ).fadeIn( 1000, function() {
				/*
					imgIdx의 속성값을 i값이랑 맞춰고 이미지 갯수만큼 돌린 후
					선택한 이미지 imgIdx값과 같으면 이미지를 보여주고
					다를 경우 모든 이미지는 보여주지 않는다.
				*/
			   for(var i=1; i<9; i++) {
				   if(i != imgIdx) {
					   $( "#showImage"+i).fadeOut(100);
				   }else{
					   $( "#showImage"+i).fadeIn( 1000 );   
				   }
			   }
			   
			   
		 });

	})
	
	

	 
	 
 }
 
 
 //$("#forwardPage").load("step01.htm","",""); 
 
 
 

 
 