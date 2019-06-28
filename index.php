<!doctype html>
<html lang="en">
  <head>
    <title>Emergency equipment dragndrop prototype</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="css/bootsrap/bootstrap.css">
    <link rel="stylesheet" href="css/airplane.css">
  </head>
  <body>
    <div class="container-fluid">

    <div class="row nav-color" style="background-color: #78F1E6;">
    <div class="col-sm-12">
      <nav class="navbar nav-color">
        <a class="navbar-brand" href="../index.php">
          <img src="img/astech_logo_white.gif" width="120" height="40" class="d-inline-block align-top" alt="">
        </a>
        <h4 class="navbar-text text-white"> GEMS Online </h4>
        <img class="navbar-brand d-inline-block align-top" width="120" height="40" src="img/icelandair_transparent.png">
      </nav>
    </div>
  </div>

      <div class="row">
        <div class="col-sm-12 mt-3">
          <h1 class="h1" align="center"> Emergency equipment Dragndrop Prototype </h1>
        </div>
      </div>
  
    <div class="row justify-content-center">
      <div id="container" class="col-sm-flex">
        <img id="ap757200" src="img/757-200.jpg">

      <form action="game/game.php" class="form">
      <div id="flightdeck"><button class="btn btn-link" type="submit" name="station" value="../stations/Flight_Deck.yml"> Flight Deck </button> </div>
      <div id="section1" ><button class="btn btn-link" type="submit" name="station" value="../stations/station_1.yml"> Section 1 </button> </div>
      <div id="section2" ><button class="btn btn-link" type="submit" name="station" value="../stations/station_2.yml"> Section 2 </button> </div>
      <div id="section4" ><button class="btn btn-link" type="submit" name="station" value="../stations/station_4.yml"> Section 4 </button> </div>
      </form>
      </div>  
    </div>
    

    </div>
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  </body>
</html>