
// JavaScript 5
// Use .substring(indexStart, indexEndToExclude)
function confirmEnding(str, target) {
  "use strict";
  if (str.substring(str.length - target.length) !== target) {
    return false;
  } else {
      console.log(true);
      return true;
  }
}

// Use .slice(negIndex)
function confirmEnding2(str, target) {
  "use strict";
  // Negative index integer == numb of chars to include from end
  var strEnding = str.slice(-target.length);
  if (strEnding !== target) {
    return false;
  }
  console.log(true);
  return true;
}

// Use .substr(start, chars to extract)
function confirmEnding3(str, target) {
  "use strict";
  if (str.substr(str.length-1, target.length) !== target) {
    return false;
  } else {
      console.log(true);
      return true;
  }
}

// Use .endsWith(searchString)
function confirmEnding4(str, target) {
  "use strict";
  if (str.endsWith(target)) {
      console.log(true);
      return true;
  } else {
    return false;
  }
}

// Use .includes(searchString, startPos)
function confirmEnding5(str, target) {
  "use strict";
  // Start at X number of chars from str's last letter
  var startPos = (str.length-1) - target.length;

  if (str.includes(target, startPos)) {
      console.log(true);
      return true;
  } else {
    return false;
  }
}


// JavaScript 6
const confirmEnding6 = (str, target) => str.endsWith(target) ? true : false


confirmEnding("Bastian", "n");
confirmEnding("Open sesame", "pen");
confirmEnding2("Connor", "n");
confirmEnding2("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain");
confirmEnding3("Walking on water and developing software from a specification are easy if both are frozen", "specification");
confirmEnding4("He has to give me a new name", "name");
confirmEnding5("Open sesame", "same");
confirmEnding6("Walking on water and developing software from a specification are easy if both are frozen", "specification");
confirmEnding6("He has to give me a new name", "name");


// JavaScript 6
