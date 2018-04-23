// JS 5 syntax

function binarySearch(low, high, numberPicked) {
  "use strict";
  var lowNumber = low;
  var highNumber = high;
  var number_of_guesses = 0;
  var guess;

  while (guess != numberPicked) {
      // make a guess at half-point between low and high then round down
      guess = Math.floor((highNumber - lowNumber) / 2 + lowNumber);

      if (numberPicked < low || numberPicked > high) {
          console.log("The number you picked doesn't fall within the low to high range.");
          break;
      }

      if (guess == numberPicked) {
        console.log("Correct! The number is " + guess + ". It took " + number_of_guesses + " guesses using the binary search algorithm.");
        number_of_guesses += 1;
        return guess;
        break;
      }
      // Too low/high status
      // if too low, reassign lowNumber to last guess + 1
      else if (guess < numberPicked) {
        lowNumber = guess + 1;
        number_of_guesses += 1;
        console.log("Guess: " + guess + " is too low --> Now pick between " + lowNumber + " and " + highNumber);
    } else if (guess > numberPicked) {
       // if too high, reassign highNumber to last guess - 1
        highNumber = guess - 1;
        number_of_guesses += 1;
        console.log("Guess: " + guess + " is too high --> Now pick between " + lowNumber + " and " + highNumber);
    }
  }
}

binarySearch(1, 5, -2); // returns "The number you picked doesn't fall within the low to high range."
binarySearch(1, 5, 2); // returns "Correct! The number is 2. It took 2 guesses using the binary search algorithm."
binarySearch(1, 100, 34); // returns "Correct! The number is 34. It took 4 guesses using the binary search algorithm."
binarySearch(20, 50, 21); // returns "Correct! The number is 21. It took 3 guesses using the binary search algorithm."
binarySearch(1, 500000, 456123); // returns "Correct! The number is 456123. It took 18 guesses using the binary search algorithm."


// JS 6 syntax

const binarySearch2 = (low, high, numberPicked) => {
  let lowNumber = low;
  let highNumber = high;
  let number_of_guesses = 0;
  let guess;

  while (guess != numberPicked) {
      // Make a guess at halfway-point between low and high then round float down
      guess = Math.floor((highNumber - lowNumber) / 2 + lowNumber);
      // If number picked is outside of low-high range, state that and break the loop
      if (numberPicked < low || numberPicked > high) {
          console.log(`The number picked, ${numberPicked}, doesn't fall within the range of ${low} to ${high}.`);
          break;
      }

      if (guess == numberPicked) {
        console.log(`You got it! The number is ${guess}. It took ${number_of_guesses} guesses.`);
        number_of_guesses += 1;
        return guess;
        break;
      }
      // Too low-high status
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
};

binarySearch2(10, 598, 6); // returns "The number picked, 6, doesn't fall within the range of 10 to 598."
binarySearch2(10, 598, 60); // returns "You got it! The number is 60. It took 7 guesses."