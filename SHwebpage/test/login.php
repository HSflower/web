<?
/**
*	login input page
*/
	session_start();
/*
	DB connection -> create class and include

	$db = mysqli_connect($servername, $username, $password, $dbName); //db connection
	//var $result ;			//result set
	$debug = true ;		//is debug??

	// Check connection
	 if ($db->connect_error) {
	     die("Connection failed: " . $db->connect_error);
	} 
	echo "Connected successfully";

	$sql = "INSERT INTO tblCompany (quotaNumber, cName, rName, email, phone, dlvTime, cNote, adDstr)
	VALUES ('0', '{$cName}', '{$rName}', '{$email}', '{$phone}', '{$dlvTime}', '{$cNote}', '{$adDstr}' )";

	if ($db->query($sql) === TRUE) {
	    echo "New record created successfully";
	} else {
	    echo "Error: " . $sql . "<br>" . $db->error;
	}

	//Example (MySQLi Procedural)
	mysqli_close($db);  
/**
	DB connection process end
*/	
?>
<script language="javascript">
//login btn click function
function log_in(){
	form = document.login_form;
	if(form.userID.value==""){
		alert("Please input your id");
		form.userID.focus();
		return false;
	} else if(form.pwd.value==""){
		alert("Please input your pw");
		return false;
	} else {
		return true;
	}
}
</script>

<?
	if($_SESSION["session_id"]){
		// after login html : coding || link
		header('Location: http://buyrunicm.cafe24.com/home.html');
?>
<?
	} else {
		//header('Location: http://sohyang.cafe24.com/login.html'); //this page;;
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>sohyang</title>

    <!-- Bootstrap core CSS -->
    <link href="./dist/css/bootstrap.css" rel="stylesheet">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="../../assets/js/html5shiv.js"></script>
      <script src="../../assets/js/respond.min.js"></script>
    <![endif]-->
    <link rel="stylesheet" href="http://code.jquery.com/ui/1.9.2/themes/base/jquery-ui.css" />    
    <script type="text/javascript" src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
    <script type="text/javascript" src="http://code.jquery.com/ui/1.9.2/jquery-ui.js"></script>
    <style>
        .navbar { 
            border: 0px!important;
            margin-bottom: 0px!important;
        }
        .list-group {
            margin-bottom: 0px!important;
            padding-left: 10px!important;
            padding-right:0px!important;
        }
        .jumbotron {
            margin-bottom: 0px!important;
            min-height: 100%!important;
            padding:0px 0px!important;
        }
    </style> 
</head>
<body>
    <nav class="navbar navbar-default navbar-static-top" >
      <div class="container">
        <ul class="nav navbar-nav" style="float:right!important;">
            <li><a href="./login.php">로그인</a></li>
            <li><a href="#">회원가입</a></li>
            <li><a href="#">오시는길</a></li>
            <li><a href="#">공식블로그</a></li>
            <li><a href="#">공식페이스북</a></li>
        </ul>
      </div>
    </nav>
    <div class="row" style="width:100%!important;">
        <div class="list-group col-xs-2" style="">
          <a href="#" class="list-group-item disabled">
            S
          </a>
          <a href="#" class="list-group-item">병원소개<br>Introduction</a>
          <a href="#" class="list-group-item">상품소개<br>Beauty Program</a>
          <a href="#" class="list-group-item">커뮤니티<br>Community</a>
          <a href="#" class="list-group-item">소향이벤트<br>SohyangEvent</a>
          <a href="#" class="list-group-item">상담&예약<br>Reservation</a>
          <a href="#" class="list-group-item">매거진S<br>Interview</a>
        </div>
        <div class="jumbotron col-xs-10" style="">
          <div class="container" style="padding-right:0px!important;padding-left:0px!important;">
            <form name="login_form" method="post" action="login_ok.php"
          </div>
        </div>
    </div>
    
    <!--
    <nav class="navbar navbar-default navbar-fixed-bottom">
  <div class="container">
    ...
  </div>
</nav>
-->
</body>
<footer class="navbar-fixed-bottom">
    <div class="container">
        <p>...Hello, world!Hello, world!Hello, world!Hello, world!Hello, world!Hello, world!Hello, world!</p>
    </div>
</footer>
</html>

<?
	}
?>