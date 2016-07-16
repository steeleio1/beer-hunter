import $ from 'jquery';
import jQuery from 'jquery';
import {Game} from "./game"

$(document).ready(animateDiv);



function makeNewPosition(){  
    var h = $(".gameBoard").height() - 50;
    var w = $(".gameBoard").width() - 50;  
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w); 
    return [nh,nw];       
}


function animateDiv(){
    var newLocation = makeNewPosition();
    var oldLocation = $('.gamePiece').offset();
    var speed = calcSpeed([oldLocation.top, oldLocation.left], newLocation); 
    $('.gamePiece').animate({ top: newLocation[0], left: newLocation[1] },
                    1200, animateDiv);  
};

function calcSpeed(oldLocation, newLocation) {
    
    var distanceX = Math.abs(oldLocation[1] - newLocation[1]);
    var distanceY = Math.abs(oldLocation[0] - newLocation[0]);     
    var greatest = distanceX > distanceY ? distanceX : distanceY; 
    var speedModifier = 0.5;
    var speed = Math.ceil(greatest/speedModifier);
    return speed;
}

let g = new Game(0);

$(".gameBoard").on("click", function(event) {
    g.makeAttempt();
    g.makeHiccup();
});

$(".gamePiece").on("click", function (event) {
  let result = window.confirm("Do you want to play again?");
  let speed = 1200;
  if (result) {
    g = new Game(-1)
    gamePiece = new GamePiece(speed -= 250);
  }
})
