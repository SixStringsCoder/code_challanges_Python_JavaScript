// JS 5
function reverseString(str) {
  // split str
  var splitStr = str.split('');
  // reverse array elements
  revLetters = splitStr.reverse();
  // join array into a string
  revWord = revLetters.join('');
  return revWord;
}

reverseString("hello"); // returns 'olleh'
reverseString2("howdy"); // returns 'ydwoH'
reverseString('Greetings from Earth'); // returns 'htraE morf sgniteerG'


// JS 5
function reverseString(str) {
  // split str, reverse array , join array into string again
  var splitStr = str.split('').reverse().join('');
  return splitStr;
}

reverseString2("howdy"); // returns 'ydwoH'



// JS 6
const reverseString = str => {
    // split str, reverse array , join array into string again
    const splitStr = str.split('').reverse().join('');
    return splitStr;
}
