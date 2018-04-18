
//Return Largest Numbers in Arrays


// Example 1 - Math.max()
const largestOfFour1 = arr => {
  // Storage for largest numbers in sub-arrays
  const largestNums = [];
  // Iterate over array
  arr.forEach(group => {
    // Use Math.max method and spread operator to find highest number in sub-arrays
    let highestNum = Math.max(...group);
    // Append highest number to storage array
    largestNums.push(highestNum);
  });
  console.log(largestNums);
  return largestNums;
};

largestOfFour1([[2, 5, 10, 30], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
largestOfFour1([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
largestOfFour1([[4, 9, 1, 3], [13, 35, 18, 26], [-32, -35, -97, -39], [1000000, 1001, 857, 1]]);


// Example 2 - .reduce() with Math.max()
const largestOfFour2 = arr => {
  // Storage for largest numbers in sub-arrays
  const largestNums = [];
  // Iterate over array
  arr.forEach(function(group) {
    let highestNum = group.reduce((a, b) => Math.max(a, b));
    largestNums.push(highestNum);
  });
    console.log(largestNums);
    return largestNums;
};

largestOfFour2([[2, 5, 10, 30], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
largestOfFour2([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
largestOfFour2([[4, 9, 1, 3], [13, 35, 18, 26], [-32, -35, -97, -39], [1000000, 1001, 857, 1]]);


// Example 3 - .sort()
const largestOfFour3 = arr => {
  //Storage to hold largest numbers of sub-arrays
  const largestNums = [];
  // Iterate over array
  arr.forEach(group => {
    // Assign last element in array
    let last_number = group.length - 1;
    // Sort array so last number in array is largest
    group.sort((a, b) => a - b);
    // Append largest number to 'largestNums' array
    largestNums.push(group[last_number]);
   });
    // Return array of largest numbers
    console.log(largestNums);
    return largestNums;
};

largestOfFour3([[2, 5, 10, 30], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
largestOfFour3([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
largestOfFour3([[4, 9, 1, 3], [13, 35, 18, 26], [-32, -35, -97, -39], [1000000, 1001, 857, 1]]);



// Example 4 - 'for' loop with nested 'for' loop
function largestOfFour4(arr) {
  "use strict";
  //Storage to hold largest numbers of sub-arrays
  var largestNums = [];

  for(var i = 0; i < arr.length; i++) {
    var subarray = arr[i];
    // Initialize to negative value to account for negative values in sub-arrays
    var highestNum = -100000;
    // Nested loop to find highest value in sub-arrays
    for(var j = 0; j < subarray.length; j++) {
        if (subarray[j] > highestNum) {
          highestNum = subarray[j];
        }
    }
    largestNums.push(highestNum);
  }
    // Return array of largest numbers
    console.log(largestNums);
    return largestNums;
}

largestOfFour4([[2, 5, 10, 30], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
largestOfFour4([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
largestOfFour4([[4, 9, 1, 3], [13, 35, 18, 26], [-32, -35, -97, -39], [1000000, 1001, 857, 1]]);