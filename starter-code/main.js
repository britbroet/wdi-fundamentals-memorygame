console.log("JS file is connected to HTML! Woo!")


var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

var gameBoard = document.getElementById('game-board');

var createBoard = function() {
		var newCard = document.createElement('div');
		newCard.className = 'card';
		gameBoard.appendChild(newCard);
	};

for (x = 0; x < 4; x += 1) {
	createBoard(x);
}





/*if (((cardTwo === "queen") && (cardFour === "queen")) || 
	((cardTwo === "king") && (cardFour === "king"))) {
	alert("You found a match!");
} else {
	alert("Sorry, try again.");
};*/



/*
if (cardOne === cardTwo) {
	alert("You found a match!");
} else {
	alert("Sorry, try again.");
};*/