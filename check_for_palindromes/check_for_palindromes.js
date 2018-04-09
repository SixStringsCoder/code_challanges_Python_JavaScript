
// JavaScript 5
function palindrome(str) {
    "use strict";
    // change string to lowercase
    var lowered = str.toLowerCase();
    //clean out non-alphanumeric characters (punctuation, spaces and symbols)
    var pattern = /[\W\_]+/g;
    var forward = lowered.replace(pattern, '');
    //split, reverse, join to second variable
    var backward = forward.split('').reverse().join('');

    //compare both strings for equality
    if (forward === backward) {
      return true;
    } else {
      return false;
    }
}

palindrome("eye");
palindrome("My age is 0, 0 si ega ym.");
palindrome("0_0 (: /-\ :) 0-0");
palindrome("A man, a plan, a canal. Panama")


// JavaScript 6
const palindromeES6 = str => {
    "use strict";
    // change string to lowercase
    const lowered = str.toLowerCase();
    //find and clean out non-alphanumeric characters (punctuation, spaces and symbols)
    const pattern = /[\W\_]+/g;
    const forward = lowered.replace(pattern, '');
    //split, reverse, join to second variable
    const backward = forward.split('').reverse().join('');

    //compare both strings for equality using ternary operator, return true is equal otherwise return false
    forward === backward ? true : false;
};

palindromeES6("eye");
palindromeES6("not a palindrome");
palindromeES6("five|\_/|four");
palindromeES6("0_0 (: /-\ :) 0-0");
palindromeES6("A man, a plan, a canal. Panama")