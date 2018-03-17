$(document).ready(function() {
let randomVerb = [] 
let randomVerbTrans = [];
let randomizedTrans =[];


function newRiddle(){
    randomVerb = verbArray[Math.floor(Math.random()*verbArray.length)];
    // let randomNoun = nounArray[Math.floor(Math.random()*nounArray.length)];
    // let randomNounAnswers = [];
    randomVerbTrans.push(randomVerb.englishTrans,randomVerb.badEnglishTrans1,randomVerb.badEnglishTrans2,randomVerb.badEnglishTrans3,randomVerb.badEnglishTrans4); 
    // randomNounAnswers.push(randomNoun.englishTrans,randomNoun.badEnglishTrans1,randomNoun.badEnglishTrans2); 
    timer();
    let j = 0;
    while (j = 0 < randomVerbTrans.length) {
        cut(randomVerbTrans)
        j++;
    }
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
