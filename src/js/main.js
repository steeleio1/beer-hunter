import $ from 'jquery';
import jQuery from 'jquery';
import {Game} from "./game";
// import {Board} from "./board";
import {Board,makeNewPosition,animateDiv,calcSpeed} from "./board";


let g = new Game();
// let b = new Board();

$(".button").on("click", function(event) {   
return $(document).ready(animateDiv);
});



$(".gameBoard").on("click", function (event) {
  let target = event.target;
  console.log(target.classList)
  if (target.classList.contains("mugIcon")) { 
        // g.fanfare();
       window.confirm("Do you want to play again?")
       
  } else {
       return (g.makeAttempt(), g.makeHiccup())
  }
});

// $(".gameBoard").on("click", function(event) {
//    if (g.makeAttempt() && g.makeHiccup()) {
//     } else {
//         $(".gamePiece").on("click", function (event)
//           let result = window.confirm("Do you want to play again?");
//     });
// });


// $(".gamePiece").on("click", function (event) {
//   let result = window.confirm("Do you want to play again?");
//   let speed = 1200;
//   if (result) {
//     g = new Game(-1)
//     gamePiece = new GamePiece(speed -= 250);
//   }
// })
