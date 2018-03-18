$(document).ready(function() {
// global variables
let randomVerb; 
let randomVerbTrans;
let randomizedTrans;
let roundsNum = 0;
let roundOver;
let roundWins = 0;
let roundLosses = 0;
let totalWins = 0;
let totalLosses = 0;
let totalRounds = 0;
let buttonValue;

$("#question_panel").hide();

// on start
function startGame (){
$("#start").on("click", function() {
    $("#start").hide();
    resetGame();
    defineQuestion();
    gameLogic()
});
}

// reset function
function resetGame() {
    randomVerbTrans=[];
    randomizedTrans=[];
    roundOver = false;
    $("#question_panel").hide();
    $("#buttons").empty();
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

// timer function


// invisible time until gets to new game
function invisibleTimer(){
    var otherCounter = 5;
    var otherTimer = setInterval(function() {
    otherCounter--;
        if (otherCounter === 0 && roundsNum < 10) {
            defineQuestion();
            clearInterval(otherTimer)
        }
        else if (otherCounter === 0 && roundsNum >= 10) {
            console.log("wanna play again?")
            clearInterval(otherTimer)
        }
        else {
            console.log("Wait " + otherCounter + " more sec before resetting the game")
        }
    }, 1000)
}

// right answer function
function rightAnswer(french,english){
    invisibleTimer()
    console.log("This was the right answer");
    console.log(french, english)
    $(".response").show().text("Congrats. The French verb: \"" + french + "\" means \"" + english +"\"")
}

// wrong answer function
function wrongAnswer(french,english){
    invisibleTimer()
    console.log("This was NOT the right answer");
    console.log(french, english)
    $(".response").show().text("Nope. The French verb: \"" + french + "\" means \"" + english +"\"")
}

// game logic
// want it to run 10 times before coming back to starting point
function gameLogic(){
    if (roundsNum < 10) {
        $(".option").on("click", function() {
            buttonValue = $(this).attr("value");
            if (buttonValue === randomVerb.englishTrans){
                roundWins++;
                roundsNum++;
                console.log(`roundsNum: `,roundsNum,`\nwins: `,roundWins);
                rightAnswer(randomVerb.frenchTrans,randomVerb.englishTrans);
                resetGame();
            }
            else {
                roundLosses++;
                roundsNum++;
                console.log(`roundsNum: `,roundsNum,`\nlosses: `,roundLosses);
                wrongAnswer(randomVerb.frenchTrans,randomVerb.englishTrans);
                resetGame();
                }
            });
        }
    else {
        console.log("Time to start a new game")
    }
}

startGame();

});