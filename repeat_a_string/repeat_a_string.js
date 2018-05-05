
// JavaScript 5

// Using .repeat method
function repeatStringNumTimes(str, num) {
  "use strict";
  // if num is not a positive number
  if (num < 0) {
    return "";
  }
  return str.repeat(num);
}


// Using num with a counter
function repeatStringNumTimes(str, num) {
  "use strict";
  var storageArray = [];
  var count = 0;

  // if num is not a positive number
  if (num < 0) {
    console.log("This test value is < 0...so returned an empty string");
    return "";
  }

  while (count < num) {
      storageArray.push(str);
      count += 1;
  }
  var repeatedStr = storageArray.join('');
  console.log(repeatedStr);
}


repeatStringNumTimes("*", 3); // "***"
repeatStringNumTimes("abc", 3); // "abcabcabc"
repeatStringNumTimes("abc", 4); // "abcabcabcabc".
repeatStringNumTimes("abc", 1); // "abc".
repeatStringNumTimes("*", 8); // "********".
repeatStringNumTimes("abc", -2); // ""



// JavaScript 6

// Using .repeat method but with ternary operator
const repeatStringNumTimesES6 = (str, num) => num < 0 ? "" : str.repeat(num)


repeatStringNumTimesES6("*", 3); // "***"
repeatStringNumTimesES6("abc", 3); // "abcabcabc"
repeatStringNumTimesES6("abc", 4); // "abcabcabcabc".
repeatStringNumTimesES6("abc", 1); // "abc".
repeatStringNumTimesES6("*", 8); // "********".
repeatStringNumTimesES6("abc", -2); // ""