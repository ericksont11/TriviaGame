$(document).ready(function() {

var quizGame = {
    questionArray: ["Who was the first human in space?", "What was the first planet discovered with the aide of a telescope?", "What is the closest star to the sun?", "How far is the farthest spacecraft from earth now?", "What spacecraft is the farthest from Earth?", "Who has spent the most total time in space?", "Who's my favorite physicist?"],
    questionChoices : [
        ["Yuri Gagarin","Scott Kelly", "Alan Shepard", "Laika"],
        ["Mars", "Neptune", "Saturn", "Uranus"],
        ["Sirius", "Alpha Centari", "Barnard's Star", "Procyon"],
        ["130 million miles", "13 million miles", "1.3 billion miles", "13 billion miles"],
        ["Voyager 1", "Voyager 2", "Gemini 1", "Gemini 2"],
        ["Peggy Whitson", "Gennady Padalka", "John Glenn", "Harry Stamper"],
        ["Carl Sagan", "Richard Feynman", "Angela Merkel", "Ernest Moniz"]
    ],
    questionAnswers : ["Yuri Gagarin", "Uranus", "Alpha Centari", "13 billion miles", "Voyager 1", "Gennady Padalka", "Carl Sagan"]   
};

var questionsRemaining = [];
var answer;
var count = 0;
var time = 10;
var intervalID;
var userAnswer;
var timeout;
var answerChosen = false;
var score = 0;
var missed = 0;
var highscore = 0;
var i;
var record;

function pickQuestion () {
    clearTimeout(timeout);
    clearInterval(intervalID);
    var answerChoices = [0,1,2,3] 
    time = 10;
    intervalID = setInterval(timer, 1000);
    answerChosen = false;
    timeout = setTimeout(showAnswer, 10000)
    i = Math.floor(Math.random() * questionsRemaining.length);
    console.log(i)
    $("#question").html(quizGame.questionArray[questionsRemaining[i]]) 
    $("#timer").css("backgroundColor", "blue")  
    $("#timer").html(":"+time); 
    for (var a = 0; a < quizGame.questionArray.length; a++) {
            if ( questionsRemaining[i] === a) { 
                for (y = 0; y < 4; y++){
                    var x = Math.floor(Math.random() * answerChoices.length);
                    record = answerChoices[x];
                    console.log(x)
                    if (answerChoices[x] === 0) { 
                        $("#Answer" + 0).show();
                        $("#Answer" + 0).html(quizGame.questionChoices[a][y])
                        answerChoices.splice(x, 1);
                    }
                    else if (answerChoices[x] === 1) {
                        $("#Answer" + 1).show();
                        $("#Answer" + 1).html(quizGame.questionChoices[a][y]) 
                        answerChoices.splice(x, 1);
                    }
                    else if (answerChoices[x] === 2) {
                        $("#Answer" + 2).show();
                        $("#Answer" + 2).html(quizGame.questionChoices[a][y])  
                        answerChoices.splice(x, 1); 
                    }
                    else if (answerChoices[x] === 3) { 
                        $("#Answer" + 3).show();
                        $("#Answer" + 3).html(quizGame.questionChoices[a][y])  
                        answerChoices.splice(x, 1); 
                    }
                    
                    if (quizGame.questionChoices[a][y] === quizGame.questionAnswers[a]) {
                        answer = "Answer" + record; 
                        
                    }
                }  
                count++
        }
    }
    questionsRemaining.splice(i, 1);
}

function showAnswer () {
    clearTimeout(timeout);
    clearInterval(intervalID);
    answerChosen = true;
    console.log(answer)
    if (time === 0) {
        $("#timer").html("Time ran out! The answer is:") 
        $("#timer").css("backgroundColor", "red")
        missed++
    }
    if(answer === "Answer0") {
        $("#Answer3").hide();
        $("#Answer1").hide();
        $("#Answer2").hide();
    }
    else if(answer === "Answer1") {
        $("#Answer0").hide();
        $("#Answer3").hide();
        $("#Answer2").hide();
    }
    else if(answer === "Answer2") {
        $("#Answer0").hide();
        $("#Answer1").hide();
        $("#Answer3").hide();
    }
    else if(answer === "Answer3") {
        $("#Answer0").hide();
        $("#Answer1").hide();
        $("#Answer2").hide();
    }
    if (count === quizGame.questionArray.length) {
        timeout = setTimeout(scoreboard, 1000)
    }
    else {
        clearInterval(intervalID);
        clearTimeout(timeout);
        timeout = setTimeout(pickQuestion, 1000)
    }
}

function timer() {
    time --
    $("#timer").html(":0"+time);
}

function scoreboard() {
    clearInterval(intervalID);
    clearTimeout(timeout);
    $("#start").show();
    $("#timer").hide();
    $("#start").html("Start a new game!");
    $("#scoreboard").show();
    $("#Answer0").hide();
    $("#Answer1").hide();
    $("#Answer2").hide();
    $("#Answer3").hide();
    $("#question").hide();
    $("#score").html("Score: "+score);
    $("#missed").html("Missed: "+missed);
    $("#loading").hide();
    $("#title").show();
    if (score > highscore) {
        $("#loading").show();
        $("#loading").html("A new personal best! Well done!");
        $("#loading").css("text-decoration", "underline");
        $("#highScore").html("High Score: "+score);
        highscore = score;
    }
    if (score === 0) {
        $("#picture").attr("src","assets/images/person.jpg");
    }
    if (score === 1) {
        $("#picture").attr("src","assets/images/moon.jpg");
    }
    if (score === 2) {
        $("#picture").attr("src","assets/images/planet.jpg");
    }
    if (score === 3) {
        $("#picture").attr("src","assets/images/sun.jpg");
    }
    if (score === 4) {
        $("#picture").attr("src","assets/images/solar-system.jpg");
    }
    if (score === 5) {
        $("#picture").attr("src","assets/images/galaxy.jpg");
    }
    if (score === 6) {
        $("#picture").attr("src","assets/images/cluster.jpg");
    }
    if (score === 7) {
        $("#picture").attr("src","assets/images/universe.jpg");
    }
    $("#picture").show()
    
}

$("#start").on("click", function go () {
    $("#question").show();
    $("#title").hide();
    $("#start").hide();
    $("#scoreboard").hide();
    $("#timer").show();
    for (var b = 0; b < quizGame.questionArray.length; b++) {
        questionsRemaining.push(b);
    }
    count = 0;
    time = 10;
    intervalID;
    userAnswer;
    timeout;
    answerChosen = false;
    score = 0;
    missed = 0;
    pickQuestion();
    
});

$(".button").on("click", function userSelection () {
    if (answerChosen === false) {
        clearTimeout(timeout);
        clearInterval(intervalID);
        userAnswer = this.id;
        if (userAnswer == answer) {
            $("#timer").html("Correct! The answer is:")
            $("#timer").css("backgroundColor", "green")
            score++
        }
        else {
            $("#timer").html("Incorrect! The answer is:") 
            $("#timer").css("backgroundColor", "red") 
            missed++
        }
        showAnswer();
    }
    else {
        console.log("Waiting for next question")
    }
});

});


