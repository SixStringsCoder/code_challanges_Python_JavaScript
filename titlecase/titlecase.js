// Return the input string with the first letter of each word capitalized.

// JavaScript 5
function titleCase(str) {
  "use strict";
  // storage array after words have been capitalized
  var titledWords = [];
  // lowercase the string then split it at no-break space
  var cleanSplit = str.toLowerCase().split(" ");

  // iterate over the array
  cleanSplit.map(function(word) {
    // capitalize 1st letter and concatenate with rest of sliced word
    var capWord = word[0].toUpperCase() + word.slice(1);
    // append capitalized word to storage array
    titledWords.push(capWord);
  });

  // join storage array into final titlecased string
  var titledString = titledWords.join(' ');
  return titledString;
}

titleCase("I'm a little tea pot");
titleCase("sHoRt AnD sToUt");
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");

// JavaScript 6
const titleCase2 = str => {
  // storage array after words have been capitalized
  const titledWords = [];
  // lowercase the string then split it at no-break space
  const cleanSplit = str.toLowerCase().split(" ");

  // iterate over the array
  cleanSplit.map(function(word) {
    // capitalize 1st letter and concatenate with rest of sliced word
    let capWord = word.charAt(0).toUpperCase() + word.slice(1);
    // append capitalized word to storage array
    titledWords.push(capWord);
  });

  // join storage array into final titlecased string
  const titledString = titledWords.join(' ');
  return titledString;
};

titleCase2("I'm a little tea pot");
titleCase2("sHoRt AnD sToUt");
titleCase2("HERE IS MY HANDLE HERE IS MY SPOUT");