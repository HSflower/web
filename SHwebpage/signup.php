<?php include("./include/header.php"); ?>
                        <div class="col-md-12" style="padding:0px!important;background-color:white;">
                            <img src="./sub5/title.png" class="img-responsive" style="width:inherit;padding:7%!important;">
                            <img src="./sub5/btn.png" class="img-responsive" style="padding:5%!important;float:right;">
              <style type="text/css">
h3 {margin-bottom:15px}
fieldset {border:none}
legend {display:none}
img {border:none}
.join_tbl {width:980px; border-collapse:collapse; border-spacing:0; border-top:2px solid #ddd; border-bottom:2px solid #ddd; font-size:11px; font-family:dotum; margin-bottom:30px}
.join_tbl th { text-align:left; padding:5px 10px; border-bottom:1px solid #ddd; color:#3f93c7;background-color:#e6e6e6}
.join_tbl td {padding:5px 15px; border-bottom:1px solid #ddd}
.join_tbl td .inputText {width:100px; border:1px solid #ccc}
.join_tbl td span {color:#888}
.join_tbl textarea {width:95%; height:80px; border:1px solid #ccc; padding:10px}
.btn {text-align:center}
</style>

<form method="post" action="">
<fieldset>
<legend>기본사항 입력</legend>
<h3><img src="images/members/tlt_members_join01.gif" alt="" /></h3>
<table class="join_tbl">
<colgroup>
<col width="10%" />
<col width="40%" />
<col width="10%" />
<col width="40%" />
</colgroup>
<tr>
<th><label for="userId">이름</label></th>
<td>
<input type="text" id="userId" name="userId" value="" size="10" class="inputText">
<span>한글 2~4글자</span>
</td>
<th><label for="secretNum1">주민번호</label></th>
<td>
<input type="text" maxlength="6" id="secretNum1" name="secret" size="10" class="inputText" title="주민번호 앞자리"> -
<input type="password" maxlength="7" id="secretNum2" name="secret" size="10" class="inputText" title="주민번호 뒷자리">
</td>
</tr>
<tr>
<th><label for="id">아이디</th>
<td colspan="3">
<input type="text" id="id" name="id" value="" size="10" class="inputText">
<a href="#"><img src="images/members/btn_doubleCheck.gif" alt="중복확인" /></a>
<span>띄어쓰기 없는 영문 숫자조합, 6~12글자</span>
</td>
</tr>
<tr>
<th><label for="tel1">전화번호</label></th>
<td colspan="3">
<input type="text" id="tel1" name="tel" value="" size="3" class="inputText">
-
<input type="text" id="tel2" name="tel" value="" size="3" class="inputText">
-
<input type="text" id="tel3" name="tel" value="" size="3" class="inputText">
</td>
</tr>
<tr>
<th><label for="tel1">전화번호</label></th>
<td colspan="3">
<input type="text" id="tel1" name="tel" value="" size="3" class="inputText">
-
<input type="text" id="tel2" name="tel" value="" size="3" class="inputText">
-
<input type="text" id="tel3" name="tel" value="" size="3" class="inputText">
</td>
</tr>
<tr>
<th><label for="tel1">전화번호</label></th>
<td colspan="3">
<input type="text" id="tel1" name="tel" value="" size="3" class="inputText">
-
<input type="text" id="tel2" name="tel" value="" size="3" class="inputText">
-
<input type="text" id="tel3" name="tel" value="" size="3" class="inputText">
</td>
</tr>
<tr>
<th><label for="tel1">전화번호</label></th>
<td colspan="3">
<input type="text" id="tel1" name="tel" value="" size="3" class="inputText">
-
<input type="text" id="tel2" name="tel" value="" size="3" class="inputText">
-
<input type="text" id="tel3" name="tel" value="" size="3" class="inputText">
</td>
</tr>
<tr>
<th><label for="tel1">전화번호</label></th>
<td colspan="3">
<input type="text" id="tel1" name="tel" value="" size="3" class="inputText">
-
<input type="text" id="tel2" name="tel" value="" size="3" class="inputText">
-
<input type="text" id="tel3" name="tel" value="" size="3" class="inputText">
</td>
</tr>
<tr>
<th><label for="tel1">전화번호</label></th>
<td colspan="3">
<input type="text" id="tel1" name="tel" value="" size="3" class="inputText">
-
<input type="text" id="tel2" name="tel" value="" size="3" class="inputText">
-
<input type="text" id="tel3" name="tel" value="" size="3" class="inputText">
</td>
</tr>
</table>
</fieldset>
</form>
                            <?php include("./include/footer.php"); ?>