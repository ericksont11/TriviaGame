$(document).ready(function() {

var quizGame = {
    questionArray: ["Where was I born?", "What's my favourite color?", "What do I love most?", "What's my favourite book?", "What's my favourite TV show?", "What's my favorite food", "Why did I move to Raleigh?"],
    questionChoices : [
        ["Chicago","Indianapolis", "Fishers", "Cincinnati"],
        ["Teal", "Goldenrod", "Forest Green", "Magenta"],
        ["Nothing", "Ignoring Kelsey", "Coding", "Kelsey Dale"],
        ["Cosmos", "The Remains of the Day", "The Brief and Wondrous Life of Oscar Wao", "The Sun also Rises"],
        ["Psych", "Scrubs", "The Wire", "The West Wing"],
        ["Chili Spaghetti", "Steak", "Baked Potato", "Cheese"],
        ["The Weather", "Kelsey made me", "Great question...", "FOR LOVE"]
    ],
    questionAnswers : ["Chicago", "Teal", "Kelsey Dale", "Cosmos", "The West Wing", "Chili Spaghetti", "FOR LOVE"]   
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
        timeout = setTimeout(scoreboard, 3000)
    }
    else {
        clearInterval(intervalID);
        clearTimeout(timeout);
        timeout = setTimeout(pickQuestion, 3000)
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


