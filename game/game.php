<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html lang="en">

<head>
	<meta http-equiv="content-type" content="text/html; charset=utf-8">
  <title> Drag & Drop</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <link href="../css/style.css" rel="stylesheet" />
  <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
  <script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/jquery-ui.min.js"></script>
  <script src="//cdnjs.cloudflare.com/ajax/libs/jqueryui-touch-punch/0.2.3/jquery.ui.touch-punch.min.js"></script>
</head>

<body>
<div class="container-fluid">
  <div class="row nav-color">
    <div class="col-sm-12">
      <nav class="navbar nav-color">
        <a class="navbar-brand" href="../index.php">
          <img src="../img/astech_logo_white.gif" width="120" height="40" class="d-inline-block align-top" alt="">
        </a>
        <h4 class="navbar-text text-white"> GEMS Online </h4>
        <img class="navbar-brand d-inline-block align-top" width="120" height="40" src="../img/icelandair_transparent.png">
      </nav>
    </div>
  </div>
	<div class="matchgame">
		<div id="game_container">
       
        <div class="row">
            <div class="mt-2 col-sm-3 d-flex align-items-end">
                <p class="icons"> <b> Equipment Icons: </b> </p>
            </div>
            <div id="button_container" class="mt-2  col-sm-9 d-flex justify-content-end ">
              <input class="btn btn-outline-primary " type="button" value="Submit" id="check_button" />
            </div>
        </div>

      <div id="draggable_container"></div>
      <div id="droppable_container"></div>
      

    </div>
  </div>
</div>


<?php

$script= '../js/ymltojson.js';
$value= $_REQUEST['station'];

$node = exec('node ' . $script . ' ' . $value);


?>

<script type="text/javascript" language="javascript" src="../js/main.js"></script>
</body>
</html>
