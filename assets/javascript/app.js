let randomVerb = verbArray[Math.floor(Math.random()*verbArray.length)];
// let randomNoun = nounArray[Math.floor(Math.random()*nounArray.length)];

let randomVerbTrans = [];
// let randomNounAnswers = [];
randomVerbTrans.push(randomVerb.englishTrans,randomVerb.badEnglishTrans1,randomVerb.badEnglishTrans2,randomVerb.badEnglishTrans3,randomVerb.badEnglishTrans4); 
// randomNounAnswers.push(randomNoun.englishTrans,randomNoun.badEnglishTrans1,randomNoun.badEnglishTrans2); 

randomizedTrans =[];

function cut (array) {
    option = array[Math.floor(Math.random()*array.length)];
    for (let i = 0; i < array.length; i++) {
        if(option === array[i]) {
            array.splice(i,1);
            randomizedTrans.push(option);
        }
    };
};
let j = 0;
while (j = 0 < randomVerbTrans.length) {
    cut(randomVerbTrans)
    j++;
}

