$(document).ready(function() {
let randomVerb 
let randomVerbTrans =[];
let randomizedTrans =[];
let wins = 0;
let losses = 0;
let games = 0;
$("#question_panel").hide();

function reset(){
    randomVerb ="";
    randomVerbTrans.length = 0;
    randomizedTrans.length = 0;
    $("#1").val("").text("")
    $("#2").val("").text("")
    $("#3").val("").text("")
    $("#4").val("").text("")
    $("#5").val("").text("")
    value = "";
}

function newGame(){
    randomVerb = verbArray[Math.floor(Math.random()*verbArray.length)];
    // let randomNoun = nounArray[Math.floor(Math.random()*nounArray.length)];
    // let randomNounAnswers = [];
    randomVerbTrans.push(randomVerb.englishTrans,randomVerb.badEnglishTrans1,randomVerb.badEnglishTrans2,randomVerb.badEnglishTrans3,randomVerb.badEnglishTrans4); 
    // randomNounAnswers.push(randomNoun.englishTrans,randomNoun.badEnglishTrans1,randomNoun.badEnglishTrans2); 
    visibleTimer();
    console.log(randomVerb)
    let j = 0;
    while (j = 0 < randomVerbTrans.length) {
        cut(randomVerbTrans)
        j++;
    }
    console.log(randomizedTrans);
    $("#question_panel").show();
    $("#question").val(randomVerb.frenchTrans).text(randomVerb.frenchTrans)
    $("#1").val(randomizedTrans[0]).text(randomizedTrans[0])
    $("#2").val(randomizedTrans[1]).text(randomizedTrans[1])
    $("#3").val(randomizedTrans[2]).text(randomizedTrans[2])
    $("#4").val(randomizedTrans[3]).text(randomizedTrans[3])
    $("#5").val(randomizedTrans[4]).text(randomizedTrans[4])
// need to get the value of the li element clicked (currently, always shows game over, meaning it doesn't read anything)
    $(".option").on("click", function() {
        var value = $(this).attr("value");
        if (value === randomVerb.englishTrans){
            reset();
            gameWon();
        }
        else {
            reset();
            gameLost();
        }
    });

}    
function visibleTimer(){
      var counter = 11;
      setInterval(function() {
        counter--;
        if (counter >= 0) {
        $("#count").text(counter);
        }
        if (counter === 0) {
            // other things that should be happening
        }
      }, 900);  
    };

function invisibleTimer(){
    var counter = 6;
    setInterval(function() {
        counter--;
        if (counter >= 0) {
            console.log("Soon" + counter)
        }
        if (counter === 0) {
        // start a new game
        newGame();
        }
    }, 600);  
    };

function cut (array) {
    option = array[Math.floor(Math.random()*array.length)];
    for (let i = 0; i < array.length; i++) {
        if(option === array[i]) {
            array.splice(i,1);
            randomizedTrans.push(option);
        }
    };
};
function gameWon(){
    $("#question_panel").hide();
    console.log("You have won");
    wins++;
    games++;
    $(".response").text("You are correct. The French verb: \"" + randomVerb.frenchTrans + "\" means \"" + randomVerb.englishTrans +"\"")
    // happy
    invisibleTimer(); 
}
function gameLost(){
    $("#question_panel").hide();
    console.log("You have lost");
    losses++;
    games++;
    $(".response").text("Actually, the French verb: \"" + randomVerb.frenchTrans + "\" means \"" + randomVerb.englishTrans +"\"")
    // sad
    invisibleTimer();
}

$("#start").on("click", function() {
    $("#start").hide();
    newGame()
});



});
