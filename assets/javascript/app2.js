$(document).ready(function() {
// global variables
let randomVerb; 
let randomVerbTrans;
let randomizedTrans;
let roundOver = false;
let roundsNum = 0;
let roundWins = 0;
let roundLosses = 0;
let totalWins = 0;
let totalLosses = 0;
let totalRounds = 0;
let buttonValue;
let mainCounter;
let mainTimer;
let score;

$("#question_panel").hide();
$("#play_again").hide();

// on start
function startGame (){
$("#start").unbind().on("click", function() {
    $("#start").hide();
    resetGame();
    defineQuestion();
    gameLogic();
    return;
    });
}

// reset function
function resetGame() {
    randomVerbTrans=[];
    randomizedTrans=[];
    $("#question_panel").hide();
    $("#buttons").empty();
    $("#count").empty();
}

// game functions
function defineQuestion(){
    randomVerb = verbArray[Math.floor(Math.random()*verbArray.length)];
    randomVerbTrans.push(randomVerb.englishTrans,randomVerb.badEnglishTrans1,randomVerb.badEnglishTrans2,randomVerb.badEnglishTrans3,randomVerb.badEnglishTrans4); 
    console.log(randomVerb)
    randomAndCut();
    console.log(randomizedTrans);
    $(".response").hide()
    $("#question_panel").show();
    $("#question").val(randomVerb.frenchTrans).text(randomVerb.frenchTrans)
    $("#1").val(randomizedTrans[0]).text(randomizedTrans[0])
    $("#2").val(randomizedTrans[1]).text(randomizedTrans[1])
    $("#3").val(randomizedTrans[2]).text(randomizedTrans[2])
    $("#4").val(randomizedTrans[3]).text(randomizedTrans[3])
    $("#5").val(randomizedTrans[4]).text(randomizedTrans[4])
    gameTimer(11)
    return;
}

// Quizz functions
function randomAndCut() {
    let j = 0;
    while (j = 0 < randomVerbTrans.length) {
        cut(randomVerbTrans)
        j++;
    }
}
function cut (array) {
    option = array[Math.floor(Math.random()*array.length)];
    for (let i = 0; i < array.length; i++) {
        if(option === array[i]) {
            array.splice(i,1);
            randomizedTrans.push(option);
        }
    };
};        

// invisible timer until gets to new game
function invisibleTimer(){
    var otherCounter = 1;
    var otherTimer = setInterval(function() {
    otherCounter--;
        if (otherCounter === 0 && roundsNum < 10) {
            defineQuestion();
            clearInterval(otherTimer)
        }
        else if (otherCounter === 0 && roundsNum >= 10) {
            console.log("wanna play again?")
            clearInterval(otherTimer)
            playAgain();
        }
        else {
            roundOver = true;
            console.log("Wait " + otherCounter + " more sec before resetting the game")
        }
    }, 1000)
}
function gameTimer(time){
    mainTimer = setInterval(function() {
        if (time === 0) {
            clearInterval(mainTimer);
            wrongAnswer(randomVerb.frenchTrans,randomVerb.englishTrans);
        }
        else {
            time--;
            $("#count").text(time);
        }
    }, 1000)
}

// right answer function
function rightAnswer(french,english){
    roundWins++;
    totalWins++;
    roundsNum++;
    totalRounds++;
    gameStats();
    invisibleTimer();
    $(".response").show().text("You are correct. The French verb: \"" + french + "\" indeed means \"" + english +"\"");
    resetGame();
}

// wrong answer function
function wrongAnswer(french,english){
    roundLosses++;
    totalLosses++;
    roundsNum++;
    totalRounds++;
    gameStats();
    invisibleTimer();
    $(".response").show().text("The answer was the French verb: \"" + french + "\" means \"" + english +"\"")
    resetGame();
}

// game logic
function gameLogic(){
    $(".option").unbind().on("click", function() {
        // clearInterval(mainTimer);
        buttonValue = $(this).attr("value");
        if (buttonValue === randomVerb.englishTrans){
            rightAnswer(randomVerb.frenchTrans,randomVerb.englishTrans);
            clearInterval(mainTimer);
            }
        else {
            wrongAnswer(randomVerb.frenchTrans,randomVerb.englishTrans);
            clearInterval(mainTimer);
            }
        });
    }

function gameStats(){
    console.log("**********************")
    console.log("roundWins: " + roundWins)
    console.log("roundLosses: " + roundLosses)
    console.log("roundsNum: " + roundsNum)
    console.log("totalWins: " + totalWins)
    console.log("totalLosses: " + totalLosses)
    console.log("totalRounds: " + totalRounds)    
    console.log("**********************")
}

function playAgain() {
    $(".response").hide()
    score = (totalWins / totalRounds * 100).toFixed(0);
    $("#play_again").show().text(`In the past round, you answered ${roundWins} questions correctly. Your score is now ${score}%`)
    roundsNum = 0;
    roundWins = 0;
    roundLosses = 0;
    $("#start").show();
    $("#start").on("click", function() {
        $("#play_again").hide();
        startGame();
        });
}    

startGame();

});