$(function() {
		$('#login').avgrund({
			width:'900px',
			height: 280,

			holderClass: 'custom',
			enableStackAnimation: true,
			showClose: true,
			showCloseText: '',
			onBlurContainer: '.container',
			template: '' +'<img src="./include/loginbtn_img/login_banner.png" style="float:right;margin-top:10%;"/>'+
			'<table style="margin-top:10%; border-collapse: separate;border-spacing:0.5em 0.5em;">'+
			'	<tr>'+
			'	 <th colspan="3" ><img src="./include/loginbtn_img/poplogin_img2.png"/><img src="./include/loginbtn_img/shlock.png" style="margin-left:120px"/></th>'+
			'	</tr>'+
			'	<tr>'+
			'	 <td width="70px" style="font-size: 12px;" >아이디</td>'+
			'	 <td width="100px"><input type="id" id="id"style="background:url(./include/loginbtn_img/login_input.png) no-repeat left top;" /></td>'+
			'	 <td rowspan="2"><a href="#" style="margin-left:10px;margin-right:10px;"><img src="./include/loginbtn_img/poplogin_login.png"/></a ></td>'+
			'	</tr>'+
			'	<tr>'+
			'	 <td width="70px"style="font-size: 12px;">비밀번호</td>'+
			'	 <td width="100px"><input type="password" id="pass" style="background:url(./include/loginbtn_img/login_input.png) no-repeat left top;" /></td>'+
			'	</tr>'+
			'	<tr style="margin-top:40px">'+
			'	 <td></td>'+
			'	 <td colspan="2" ><a href="#"><img src="./include/loginbtn_img/poplogin_join.png"/></a> <a href="#"><img src="./include/loginbtn_img/poplogin_find.png"/></a></td>'+
			'	</tr>'+
			'</table>'


		});
	});
	
$(document).ready(function(e) {
    
$("#sidemenu").hover(
function(){
classie.toggle( document.getElementById( 'cbp-spmenu-s1' ), 'cbp-spmenu-open' );
},
function(){
classie.toggle( document.getElementById( 'cbp-spmenu-s1' ), 'cbp-spmenu-open' );
}
);
}); 