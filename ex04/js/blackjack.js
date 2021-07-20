let cards = [];
let sum = 0;
let hasJackBlack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");
let playerObject = { 
    name: "pulo",
    chips: 150
}
let playerEl = document.getElementById("player-el")
playerEl.textContent = playerObject.name + ": $" + playerObject.chips;


function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber > 10) {
        return 10;
    } else if (randomNumber === 1) {
        return 11;
    } else {
        return randomNumber;
    }
}

function renderGame() {
    cardEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " ";
    }

    sumEl.textContent = "Sum: " + sum;

    if (sum <= 20) {
        message = "Do you want a new card?"
    } else if (sum === 21) {
        message = "Blackjack!"
        hasJackBlack = true
    } else {
        message = "You've lost!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    if(isAlive === true && !hasJackBlack) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    console.log(cards);
    renderGame();
    }
}

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}