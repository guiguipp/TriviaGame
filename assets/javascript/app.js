$(document).ready(function() {
let randomVerb 
let randomVerbTrans = [];
let randomizedTrans =[];
$("#question_panel").hide();


function newRiddle(){
    randomVerb = verbArray[Math.floor(Math.random()*verbArray.length)];
    // let randomNoun = nounArray[Math.floor(Math.random()*nounArray.length)];
    // let randomNounAnswers = [];
    randomVerbTrans.push(randomVerb.englishTrans,randomVerb.badEnglishTrans1,randomVerb.badEnglishTrans2,randomVerb.badEnglishTrans3,randomVerb.badEnglishTrans4); 
    // randomNounAnswers.push(randomNoun.englishTrans,randomNoun.badEnglishTrans1,randomNoun.badEnglishTrans2); 
    timer();
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
    $("li").on("click", function() {
        console.log("Click recorded")
        if ($("#option").val() === randomVerb.englishTrans){
            gameWon();
        }
        else {
            gameLost();
        }
    });

}    
function timer(){
      var counter = 11;
      setInterval(function() {
        counter--;
        if (counter >= 0) {
          span = document.getElementById("count");
          span.innerHTML = counter;
        }
        if (counter === 0) {
            // other things that should be happening
        }
      }, 900);  
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


$("#start").on("click", function() {
    $("#start").hide();
    newRiddle()
});



});
