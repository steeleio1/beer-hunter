import $ from 'jquery';

class Game {

	constructor () {
		this.scoreboard = {
			attempts: 0
		  };
	    this.gameOver = 5
		};

		reset(){
			 $('.shotsTakenCounter').html(`<p>${this.scoreboard.attempts}</p>`)
		}

		makeAttempt(){
			if (5 - this.scoreboard.attempts > 0 && this.scoreboard.attempts < 6){
			    this.scoreboard.attempts ++;
	            $('.shotsLeftCounter').html(`<p>${5 - this.scoreboard.attempts}</p>`)
	            $('.shotsTakenCounter').html(`<p>${0 + this.scoreboard.attempts}</p>`)
           		 // console.log("I'm increasing my attempts!", this);
			}else {
				// console.log("I'm not increasing my attempts anymore", this);
			}
		};

		makeHiccup(){
			let audio = new Audio("../sounds/Hiccup-SoundBible.com-605601491.mp3");
			audio.play ();

		}

		// fanfare (){
		// 	let audio = new Audio("./sounds/Short_triumphal_fanfare-John_Stracke-815794903.mp3");
		// 	audio.play ();
		// }


	}


export {Game};