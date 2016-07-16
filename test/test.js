// Import Chai
import chai from 'chai';

// Import Any Files to Test
import { Board } from '../src/js/board';
import { Game } from "../src/js/game";

// Set Chai Constants
const expect = chai.expect;
const should = chai.should();
const assert = chai.assert;


describe("the Board class", function(){

	describe ("ability to create a Board", function(){
		it ("should be an instance of Board" , function(){
			let b = new Board();
			expect (b).to.be.an.instanceof(Board);
			});
		});

	// describe("ability to time the round", function (){
	// 	it ("should")
	// })


});




describe("the Game class", function(){

	describe("ability to create a game", function() {
		it("should be an instance of Game", function(){
			let g = new Game ();
			expect (g).to.be.an.instanceof(Game);
		})
	})

	describe ("our scoreboard", function() {

		it ('should set game starting point', function(){
			let g = new Game ();
			expect (g.scoreboard.attempts).to.equal(0);
		})

		it ("keeps track of attempts", () =>{
			let g = new Game ();
			g.makeAttempt()
			expect (g.scoreboard.attempts).to.equal(1);						
			g.makeAttempt()
			expect (g.scoreboard.attempts).to.equal(2);
		});

		it ("should know when the game is over", ()=> {
			let g = new Game ();
			expect (g.gameOver).to.equal(5);
		})

		it("should be game over when 5 attempts have been made", () => {
			let g = new Game ();
					g.makeAttempt()
					g.makeAttempt()
					g.makeAttempt()
					g.makeAttempt()
					g.makeAttempt()
			expect (g.scoreboard.attempts).to.equal(g.gameOver);
		})

		// it ("should track if there is a hit", () => {
		// 	let g = new Game ();
		// 	g.trackHit()
		// 	expect (g.)
		// });
	});
	

});




// describe('Something We Want To Test', function () {

//   describe('Testing the Creation of Something', function () {

//     it('should exist after we create it', function () {
//       let x = new Object;
//       expect(x).to.be.an.instanceof(Object);
//     });

//   });


// });


	// let game;

	//   beforeEach(() => {
	//     game = new Game(355);
	//   });