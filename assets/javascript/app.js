let randomVerb = verbArray[Math.floor(Math.random()*verbArray.length)];
// let randomNoun = nounArray[Math.floor(Math.random()*nounArray.length)];

let randomVerbAnswers = [];
// let randomNounAnswers = [];
randomVerbAnswers.push(randomVerb.englishTrans,randomVerb.badEnglishTrans1,randomVerb.badEnglishTrans2,randomVerb.badEnglishTrans3,randomVerb.badEnglishTrans4); 
// randomNounAnswers.push(randomNoun.englishTrans,randomNoun.badEnglishTrans1,randomNoun.badEnglishTrans2); 

let firstOption = randomVerbAnswers[Math.floor(Math.random()*randomVerbAnswers.length)];
for (let i = 0; i < randomVerbAnswers.length; i++) {
    if (firstOption === randomVerbAnswers[i]) {
        randomVerbAnswers.splice(i,1);
    }
}
let secondOption = randomVerbAnswers[Math.floor(Math.random()*randomVerbAnswers.length)];
    for (let i = 0; i < randomVerbAnswers.length; i++) {
    if (secondOption === randomVerbAnswers[i]) {
        randomVerbAnswers.splice(i,1);
    }
}
 
let thirdOption = randomVerbAnswers[Math.floor(Math.random()*randomVerbAnswers.length)];
for (let i = 0; i < randomVerbAnswers.length; i++) {
    if (thirdOption === randomVerbAnswers[i]) {
        randomVerbAnswers.splice(i,1);
    }
}
let fourthOption = randomVerbAnswers[Math.floor(Math.random()*randomVerbAnswers.length)];
    for (let i = 0; i < randomVerbAnswers.length; i++) {
    if (fourthOption === randomVerbAnswers[i]) {
        randomVerbAnswers.splice(i,1);
    }
}
fifthOption = randomVerbAnswers.toString();


console.log("Option #1: ",firstOption)
console.log("Option #2: ",secondOption)
console.log("Option #3: ",thirdOption)
console.log("Option #4: ",fourthOption)
console.log("Option #5: ",fifthOption)
