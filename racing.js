//this code was my very first 'game', written in vanilla javascript. This code was a breakthrough for me since I wrote it from scratch on my own. As someone who love video games, this is my proof that maybe I can enter this industry.

var blueCar = document.getElementById('blueCar');
blueCar.go = 0;

var redCar = document.getElementById('redCar');
redCar.go = 0;

var blueWon = document.getElementById('blueWon');
var redWon = document.getElementById('redWon');


document.addEventListener('keyup', function(event) {
  if(blueCar.go ===700) { blueWon.style.display = "block" ;return;}
    else if
      (redCar.go ===700) { redWon.style.display = "block";return;}
    else if
      (event.keyCode == 38) {
      blueCar.go += 50
      blueCar.style.marginLeft = blueCar.go + 'px';
      }
    else if (event.keyCode == 40) {
      redCar.go += 50
      redCar.style.marginLeft = redCar.go + 'px';
    }
})
