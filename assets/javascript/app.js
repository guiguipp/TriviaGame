let randomVerb = verbArray[Math.floor(Math.random()*verbArray.length)];
// let randomNoun = nounArray[Math.floor(Math.random()*nounArray.length)];

let randomVerbAnswers = [];
// let randomNounAnswers = [];
randomVerbAnswers.push(randomVerb.englishTrans,randomVerb.badEnglishTrans1,randomVerb.badEnglishTrans2,randomVerb.badEnglishTrans3,randomVerb.badEnglishTrans4); 
// randomNounAnswers.push(randomNoun.englishTrans,randomNoun.badEnglishTrans1,randomNoun.badEnglishTrans2); 

var options = randomVerbAnswers; 
randomCuesArray =[];


function cut (array) {
    option = array[Math.floor(Math.random()*array.length)];
    console.log("firstoption: ", option);
    for (let i = 0; i < array.length; i++) {
        if(option === array[i]) {
            console.log("original array: ", options, array[i])
            array.splice(i,1);
            console.log("array after splicing: ", array)
            randomCuesArray.push(option);
            console.log("cues array after pushing: ", randomCuesArray)
        }
    };
};
// cut(options);
let j = 0;
while (j = 0 < options.length) {
    cut(options)
    j++;
}

// cut(options);
// cut(options);
// cut(options);
// cut(options);
// cut(options);