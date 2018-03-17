$(document).ready(function() {
// Declaring variables in the global scope
let counter;
let intervalId;
let randomVerb; 
let randomVerbTrans=[];
let randomizedTrans=[];
$("#question_panel").hide();

let gameDone = false;
let wins = 0;
let losses = 0;
let games = 0;
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
    counter = 10;
    randomVerb = verbArray[Math.floor(Math.random()*verbArray.length)];
    // let randomNoun = nounArray[Math.floor(Math.random()*nounArray.length)];
    // let randomNounAnswers = [];
    randomVerbTrans.push(randomVerb.englishTrans,randomVerb.badEnglishTrans1,randomVerb.badEnglishTrans2,randomVerb.badEnglishTrans3,randomVerb.badEnglishTrans4); 
    // randomNounAnswers.push(randomNoun.englishTrans,randomNoun.badEnglishTrans1,randomNoun.badEnglishTrans2); 
    console.log(randomVerb)
    randomAndCut();
    console.log(randomizedTrans);
    $("#question_panel").show();
    $("#question").val(randomVerb.frenchTrans).text(randomVerb.frenchTrans)
    $("#1").val(randomizedTrans[0]).text(randomizedTrans[0])
    $("#2").val(randomizedTrans[1]).text(randomizedTrans[1])
    $("#3").val(randomizedTrans[2]).text(randomizedTrans[2])
    $("#4").val(randomizedTrans[3]).text(randomizedTrans[3])
    $("#5").val(randomizedTrans[4]).text(randomizedTrans[4])
    
    if (gameDone === false) {
        // visibleTimer();
        $(".option").on("click", function() {
            gameDone = true;
            var value = $(this).attr("value");
            if (value === randomVerb.englishTrans){
                gameWon(randomVerb.frenchTrans,randomVerb.englishTrans);
                resetGame();
            }
            else {
                gameLost(randomVerb.frenchTrans,randomVerb.englishTrans);
                resetGame();
            }
        });
    }

}    
// function visibleTimer(){
//     gameDone=false; 
//     setInterval(function() {
//         counter--;
//         if (gameDone === false) {
//             if (counter >= 0) {
//             $("#count").text(counter);
//             }
//             if (counter === 0) {
//                 gameDone=true;            
//                 gameLost();
//             }
//           } 
//         }, 1000);  
//     // clearInterval(intervalId);
//     };

function invisibleTimer(){
    var otherCounter = 6;
    setInterval(function() {
        otherCounter--;
        if (otherCounter >= 0) {
            console.log("Wait " + otherCounter + " more sec before resetting the game")
        }
        if (otherCounter === 0) {
        // start a new game
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
    console.log("You have won");
    console.log(french, english)
    wins++;
    games++;
    $(".response").text("You are correct. The French verb: \"" + french + "\" means \"" + english +"\"")
    // happy
    invisibleTimer(); 
}
function gameLost(french,english){
    $("#question_panel").hide();
    console.log("You have lost");
    losses++;
    games++;
    $(".response").text("Actually, the French verb: \"" + french + "\" means \"" + english +"\"")
    // sad
    invisibleTimer();
}

$("#start").on("click", function() {
    $("#start").hide();
    newGame()
});



});
