$(document).ready(function() {
// Declaring variables in the global scope
let counter;
let intervalId;
let randomVerb; 
let randomVerbTrans=[];
let randomizedTrans=[];
$("#question_panel").hide();
let roundsNum = 0;
let roundOver = false;
let wins = 0;
let losses = 0;
let total = 0;
    
function resetGame(){
    randomVerb = ""; 
    value = "";
    randomVerb ="";
    randomVerbTrans.length = 0;
    randomizedTrans.length = 0;
    $("#buttons").empty();
    $("#question_panel").hide();
}


function newGame(){
    if (roundsNum < 10) {
        gameTimer = 10;
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
        var timer = setInterval(function() {
            $("#count").text(gameTimer);
            gameTimer--;
            if (gameTimer > 0) {
                console.log("wait for a click") 
                $(".option").on("click", function() {
                    clearInterval(timer);
                    console.log("timer after cleared in click: " + timer)
                    timer=0;
                    console.log("gave timer new value: " + timer)
                    roundOver = true;
                    console.log("round over: ", roundOver)
                    var value = $(this).attr("value");
                    console.log("Value before if condition" + value)
                    console.log("randomVerb.englishTrans before before if condition" + randomVerb.englishTrans)
                    console.log("timer (supposedly reset): ", timer)
                    if (value === randomVerb.englishTrans){
                        console.log("Value before in if condition" + value)
                        console.log("randomVerb.englishTrans before in if condition" + randomVerb.englishTrans)
                        gameWon(randomVerb.frenchTrans,randomVerb.englishTrans);
                        wins++;
                        console.log(wins)
                        roundsNum++;
                        console.log("roundsNum: " + roundsNum)
                        resetGame()
                    }
                    else {
                        console.log("Value before in else condition" + value)
                        console.log("randomVerb.englishTrans before in else condition" + randomVerb.englishTrans)
                        roundOver = true;
                        gameLost(randomVerb.frenchTrans,randomVerb.englishTrans);
                        resetGame();
                        losses++;
                        roundsNum++;
                        console.log("roundsNum: " + roundsNum)
                        }
                    });
                }
            else {
                roundOver=true;
                clearInterval(timer);
                console.log("timer (no clear, but has just been cleared: " + timer)
                console.log("Timer reached 0, game is lost") 
                losses++;
                console.log("losses " + losses)
                roundsNum++;
                console.log("roundsNum: " + roundsNum)
                gameLost();
                resetGame()
            }
        }, 1000);  
        // clearInt erval(timer);
    }
    else {
        "console log: game over, show stats and restart"
        console.log("wins: ", wins)
        console.log("losses: ", losses)
        console.log("roundsNum: ", roundsNum)
    }
}
// function timerReset(){
//     $(".option").on("click", function() {
//         clearInterval(timer);
//     });
// }

function invisibleTimer(){
    var otherCounter = 6;
    setInterval(function() {
        otherCounter--;
        if (otherCounter >= 0) {
            console.log("Wait " + otherCounter + " more sec before resetting the game")
        }
        if (otherCounter === 0) {
        // clearInterval(newGame(timer));
        newGame();
        }
    }, 600)
}  


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
function gameWon(french,english){
    $("#question_panel").hide();
    // clearInterval(timer);

    console.log("You have won");
    console.log(french, english)
    $(".response").show().text("You are correct. The French verb: \"" + french + "\" means \"" + english +"\"")
    // happy
    invisibleTimer(); 
}
function gameLost(french,english){
    // clearInterval(timer);

    $("#question_panel").hide();
    console.log("You have lost");
    $(".response").show().text("Actually, the French verb: \"" + french + "\" means \"" + english +"\"")
    // sad
    invisibleTimer();
}

$("#start").on("click", function() {
    $("#start").hide();
    newGame()
});


});
