// Uses JS 5 syntax

function binarySearch(low, high, numberPicked) {
  "use strict";
  var lowNumber = low;
  var highNumber = high;
  var number_of_guesses = 0;
  var guess;

  while (guess != numberPicked) {
      // make a guess at half-point between low and high then round down
      guess = Math.floor((highNumber - lowNumber) / 2 + lowNumber);
      if (guess == numberPicked) {
        console.log(`You got it! The number is ${guess}. It took ${number_of_guesses} guesses.`);
        number_of_guesses += 1;
        break;
      }
      // Too low/high status
      // if too low, reassign lowNumber to last guess + 1
      else if (guess < numberPicked) {
        lowNumber = guess + 1;
        number_of_guesses += 1;
        console.log(`Guess: ${guess} is too low --> Now between ${lowNumber} and ${highNumber}`);
    } else if (guess > numberPicked) {
       // if too high, reassign highNumber to last guess - 1
        highNumber = guess - 1;
        number_of_guesses += 1;
        console.log(`Guess: ${guess} is too high --> Now between ${lowNumber} and ${highNumber}`);
    }
  }
}

binarySearch(1, 5, 2); // returns
binarySearch(1, 100, 34); // returns
binarySearch(20, 50, 21); // returns
binarySearch(1, 500000, 456123); // returns


// Uses JS 6 syntax
