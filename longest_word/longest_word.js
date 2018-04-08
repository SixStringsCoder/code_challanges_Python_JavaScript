// Uses JS 5 syntax

function findLongestWord(str) {
  "use strict";
  // initalize longest word variable
  var longestWord = 1;

  // split str by space break
  var splitter = str.split(' ');
  // loop through array of words
  splitter.forEach(function(word){
    // compare current word length with 'longestWord' length
    if (word.length > longestWord) {
      longestWord = word.length;
    }
  });
  console.log(longestWord);
  return longestWord;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
findLongestWord("May the force be with you");
findLongestWord("Google do a barrel roll");
findLongestWord("What is the average airspeed velocity of an unladen swallow");
findLongestWord("What if we try a super-long word such as otorhinolaryngology");


// Uses JS 6 syntax

const findLongestWordES6 = str => {
  // initalize longest word variable
  let longestWord = 1;

  // split str by space break
  const splitter = str.split(' ');
  // loop through array of words
  splitter.forEach(function(word){
    // compare current word length with 'longestWord' length
    if (word.length > longestWord) {
      longestWord = word.length;
    }
  });
  console.log(`This is ES6 ---> ${longestWord}`);
  return longestWord;
};

findLongestWordES6("The quick brown fox jumped over the lazy dog");
findLongestWordES6("May the force be with you");
findLongestWordES6("Google do a barrel roll");
findLongestWordES6("What is the average airspeed velocity of an unladen swallow");
findLongestWordES6("What if we try a super-long word such as otorhinolaryngology");