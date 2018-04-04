// Uses JS 5 syntax

function factorialize(num) {
  "use strict";
  var factorial = 1;
  
  // Make factorial using incrementing index 
  for (var i = 1; i <= num; i++) {
    factorial *= i; 
  }

   return factorial;
}

factorialize(5); // returns 120
factorialize(10); // returns 3628800
factorialize(20); // returns 2432902008176640000


// Uses JS 6 syntax
const factorialize2 = num => {
  "use strict";
  let factorial = 1;

  // Make factorial using incrementing index
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }

   return factorial;
}

factorialize2(5);
factorialize2(10);
factorialize2(20);