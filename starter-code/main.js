console.log("JS file is connected to HTML! Woo!")

var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];


var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

var gameBoard = document.getElementById('game-board');

function flipCard() {
	if (this.getAttribute('data-card') == 'king') {
		this.className = "kingbg";
	}
	else if (this.getAttribute('data-card') == 'queen') {
		this.className = "queenbg";
	}
};


function isMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
};


function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card'));
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	};
};




var createBoard = function() {
	for (i = 0; i < cards.length; i++) {
		var newCard = document.createElement('div');
		newCard.className = 'card';
		if (i > 2) {
			newCard.style.float = "left";
		};
		gameBoard.appendChild(newCard);
		newCard.addEventListener('click', flipCard);
		newCard.setAttribute('data-card', cards[i]);
		newCard.addEventListener('click', isTwoCards);
	}
};


createBoard();






