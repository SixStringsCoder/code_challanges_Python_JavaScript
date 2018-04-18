### Coding comparisons with Python and JavaScript 5 and 6

#### Return Largest Numbers in Arrays 

Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

<hr>

**Python 3.6**

I used a list comprehension with the function max() to find the max value in each sub-list then store and return those values in a new list.

```python
def largestOfFour(list_of_lists: list) -> list:
    largest = [max(num) for num in list_of_lists]
    return largest

```

**JavaScript 5**
I wrote the nested _for_ loop example in JS 5.  It's definitely the most verbose with two _for_ loops and each having their 3 statements, a variable to keep track of the highest number, and an array to store those values in. Nonetheless, it still gets the job done.

I used .reduce the example to show the slight differences between JS 5 and JS 6 syntax (_see Example 2_).


```javascript
// Example 1 - 'for' loop with nested 'for' loop
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
    return largestNums
}

// Example 2 - .reduce() with Math.max()
function largestOfFour2(arr) {
  // Storage for largest numbers in sub-arrays
  const largestNums = [];
  // Iterate over array
  arr.forEach(function(group) {
    let highestNum = group.reduce(function(a, b) {
        return Math.max(a, b)
      });
      largestNums.push(highestNum);
    });
    return largestNums;
};

```

**JavaScript 6**

All JS 6 examples use:
- arrow function expressions 
- a storage array to hold highest numbers
- _.forEach()_ iterator to loop over the array without using the 3-statements _for_ loops since a counter isn't needed.
- .push() to append largest number in each sub-array to the storage array.

**Example 1**

Because Python has a max() function I looked for a similar solution with JavaScript and found one in the Math module.  With the help of the spread operator ```...``` I could very efficiently use ```Math.max(...group)``` to find the highest number in each sub-array (without using the ```.apply()``` method).

```javascript
// Example 1 - Math.max() and spread operator
const largestOfFour1 = arr => {
  const largestNums = [];
  
  arr.forEach(group => {
    let highestNum = Math.max(...group);
    largestNums.push(highestNum);
  });
  return largestNums;
};

largestOfFour1([[2, 5, 10, 30], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
```

**Example 2**

More JavaScripty solutions involved the .reduce() function which compares an iteration's previous number with its current number then, combined with ```Math.max()```, returns the highest of the two.

```javascript
// Example 2 - .reduce() with Math.max()
const largestOfFour2 = arr => {
  // Storage for largest numbers in sub-arrays
  const largestNums = [];
  // Iterate over array
  arr.forEach(function(group) {
    let highestNum = group.reduce((prev, current) => Math.max(prev, current));
    largestNums.push(highestNum);
  });
    return largestNums;
};

largestOfFour2([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
```

**Example 3**

Another solution, which may be more explicit, is to ```.sort()``` the sub-array which guarantees the highest value will be placed at the last index position, then simply appending that value to the _largestNums_ storage array.

```javascript
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
    return largestNums;
};

largestOfFour3([[4, 9, 1, 3], [13, 35, 18, 26], [-32, -35, -97, -39], [1000000, 1001, 857, 1]]);
```