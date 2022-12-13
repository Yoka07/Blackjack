 
// https://scrimba.com/playlist/p3py7U7

let firstCard = getRandom();
let secondCard = getRandom();

let cards = []
let sum = 0;
//boolean expression
let hasBlackJack = false;
let isAlive = false;
let message = " ";

let messageEl = document.getElementById("message-el");
console.log(messageEl);

let sumEl = document.getElementById("sum-el")

let cardEl = document.getElementById("card-id")

let player = {
    name: "Per",
    chips: 145
}

let playerEl = document.getElementById("player-id")
playerEl.textContent = player.name + ": $" + player.chips;

function getRandom() {
    // 1 -> return 11
    // 11 -13 
    let randNumber = Math.floor(Math.random() * 13) + 1;
    if (randNumber > 10) {
        return 10;
    } else if (randNumber === 1) {
        return 11;
    } else {
        return randNumber;
    }
}

function startGame() {
    isAlive = true;
    let firstCard = getRandom();
    let secondCard = getRandom();
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame() {
    //render out firstCard and secondCard
    cardEl.textContent = "Cards: ";

    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }
    // render out all the cards we have

    sumEl.textContent = "Sum: " + sum;

    if (sum <= 20) {

        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You got Blackjack!"
        hasBlackJack = true;
    } else {
        message = "You're out of the game";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newCard() {

    if (isAlive === true && hasBlackJack === false) {
        console.log("Drawing a new card from the deck!")
        let cardNew = getRandom();
        sum += cardNew
        cards.push(cardNew)
        console.log(cards)
        renderGame();
    }

}


