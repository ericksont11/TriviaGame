
var words = ["SCRABBLE","CLUE","MONOPOLY","RISK", "YAHTZEE", "BATTLESHIP"];
var winCounter = 0;
var guess = 5;
var gameWord;
var runGame = false;
var previousGuesses = [];
var display = [];
var correct = false;
var change = 0;

function chooseWord () {
    guess = 6;
    document.getElementById("Count").innerHTML = "Guesses remaining: " + guess;
    document.getElementById("Count").style.color ="green";
    console.log(change);
    var guessArray = [];
    var i;
    for (var x = 0; x < 100; x++) {
        i = Math.floor((Math.random() * words.length));
        console.log(i);
        if (change != i){
        console.log(i);
        break;
        }
    }
    gameWord = words[i];
    change = i;
    for (j = 0; j < gameWord.length; j++) {
        guessArray.push("_");
    }
    document.getElementById("winScreen").style.display = "none";
    document.getElementById("newButton").style.display = "none";
    document.getElementById("winText").style.display = "none";
    document.getElementById("wordButton").style.display = "inline";
    document.getElementById("Word").innerHTML = guessArray.join(" ");
    document.getElementById("Letter").innerHTML = "Guess letters using your keyboard!";
    document.getElementById("wordButton").innerHTML = "Generate a new word";
    document.getElementById("Guesses").innerHTML = "You lose if you guess incorrectly five times!";
    document.getElementById("Win").innerHTML = "Wins: "+ winCounter;

    runGame = true;
    display = guessArray;
    previousGuesses = [];
    console.log(gameWord);
}

document.onkeydown = function (a) {
    if(a.keyCode && runGame === true && a.keyCode <= 90 && a.keyCode >= 65) {
        var letter = String.fromCharCode(a.keyCode);
        document.getElementById("Letter").innerHTML = "Your last guess was: " + letter;
        guess = guess - 1;

        for (var i = 0; i < previousGuesses.length; i++) {
            if (letter == previousGuesses[i]) {
                previousGuesses.splice(i,1);
                document.getElementById("Letter").innerHTML = "You already guessed " + letter + "! Guess a different letter!";
                if (correct == false){
                guess = guess + 1;
                correct = true;
                }
            }
        
        }


        for (var i = 0; i < gameWord.length; i++) {
            if (letter == gameWord[i] && letter !== previousGuesses[i]) {
                display[i] = letter;
                document.getElementById("Word").innerHTML = display.join(" ");
                if (correct == false){
                guess = guess + 1;
                correct = true;
                }
            }
        }


        previousGuesses.push(letter);

        document.getElementById("Count").innerHTML = "Guesses remaining: " + guess;


        if (previousGuesses.length > 1) {
            document.getElementById("Guesses").innerHTML = "So far you have guessesd these letters: " + previousGuesses.join(", ").toString();
        }
        else {
            document.getElementById("Guesses").innerHTML = "This is the only letter you have guessed so far: " + previousGuesses.join(", ").toString();
        }
        correct = false;

        if (guess <= 6) {
            document.getElementById("Count").style.color ="green";
        }

        if (guess <= 4) {
            document.getElementById("Count").style.color ="orange";
        }

        if (guess <= 2) {
            document.getElementById("Count").style.color ="red";
        }

        if (guess === 0) {
            document.getElementById("winText").innerHTML = "You ran out of guesses!";
            document.getElementById("winScreen").style.backgroundImage = "url('assets/images/endgame.jpg')";
            runGame = false;
            document.getElementById("wordButton").style.display = "none";
            document.getElementById("winScreen").style.display = "inline";
            document.getElementById("newButton").style.marginTop = "62vh";
            document.getElementById("newButton").style.display = "inline";
            document.getElementById("winText").style.display = "inline";
        }
        
        if (display.join("").toString() == gameWord) {
            winCounter = winCounter + 1;
            document.getElementById("winText").innerHTML = "That's right it's " + gameWord +"! What else can you guess!?";
            document.getElementById("wordButton").style.display = "none";
            document.getElementById("winScreen").style.display = "inline";
            document.getElementById("newButton").style.display = "inline";
            document.getElementById("winText").style.display = "inline";
            runGame = false;
            if (gameWord === words[0]) {
                document.getElementById("winScreen").style.backgroundImage = "url('assets/images/Scrabble.jpg')";
            }
            else if (gameWord === words[1])  {
                document.getElementById("winScreen").style.backgroundImage = "url('assets/images/Clue.jpg')";
            }
            else if (gameWord === words[2])  {
                document.getElementById("winScreen").style.backgroundImage = "url('assets/images/Monopoly.jpg')";
            }
            else if (gameWord === words[3])  {
                document.getElementById("winScreen").style.backgroundImage = "url('assets/images/Risk.jpg')";
            }
            else if (gameWord === words[4])  {
                document.getElementById("winScreen").style.backgroundImage = "url('assets/images/Yahtzee.jpg')";
            }
            else if (gameWord === words[5])  {
                document.getElementById("winScreen").style.backgroundImage = "url('assets/images/Battleship.jpg')";
            }

        }
    
    
    }
}



    
    
