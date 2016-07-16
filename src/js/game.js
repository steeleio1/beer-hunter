import $ from 'jquery';

class Game {

	constructor (attempts) {
		// this.sound = "./sounds/Hiccup-SoundBible.com-605601491.mp3";
		this.scoreboard = {
			attempts: attempts
		  };
	    this.gameOver = 5
		};

		makeAttempt(){
			if (5 - this.scoreboard.attempts > 0 && this.scoreboard.attempts < 6){

		    this.scoreboard.attempts ++;
            $('.shotsLeftCounter').html(`<p>${5 - this.scoreboard.attempts}</p>`)
            $('.shotsTakenCounter').html(`<p>${0 + this.scoreboard.attempts}</p>`)
            console.log("I'm increasing my attempts!", this);
			}else {
				console.log("I'm not increasing my attempts anymore", this);
			}
			// this.scoreboard.attempts =5
			};

		makeHiccup(){
			let audio = new Audio("./sounds/Hiccup-SoundBible.com-605601491.mp3");
			audio.play ();

		}

	}


export {Game};