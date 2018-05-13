### Coding comparisons with Python 3.6 and JavaScript 5.1 and 6

#### Confirm the Ending
Check if a string (first argument, str) ends with the given target string (second argument, target).
<hr>

Python 3.6

The first example uses the slice syntax ```[:]``` to select the _string_ parameter's ending letters.  How many letters should we select?  The length of the _target_ paramter tells us how many letters we need to select from _string_ parameter's end.  If I take the length of the _target_ parameter (e.g. 5) and make it negative (e.g. -5), using the slice syntax [-5:] selects the last five letters of the _string_ parameter.  

To make that more abstract using the function's paramters, [-len(target:] makes the 'start' slice value be whatever the length of _target_ is, then making it a negative value, it selects the last ```len(target)``` letters from the end.  

```python
# example 1
def confirm_ending(string: str, target: str) -> bool:
    if string[-len(target):] == target:
        return True
    else:
        return False
```


This example uses a straight-forward built-in Python string method ```.endwith``` which accepts two parameters: a _string_ plus an _ending string target_ to check for.  It checks the end of the _string_ for this _ending string target_ and returns True if the string's ending characters match _ending string target_.

```python
# example 2
def confirm_ending(string: str, target: str) -> bool:
    if string.endswith(target):
        return True
    else:
        return False
```

This JavaScript method ````.endsWith``` flows just like Python's method.  Nothing new here except variation in syntax which is why I've placed it under the Python example.
 
```javascript
// example 5 - Use .endsWith(searchString)
function confirmEnding4(str, target) {
  "use strict";
  if (str.endsWith(target)) {
      console.log(true);
      return true;
  } else {
    return false;
  }
}
```

This Python example may be unnecessary but I still wanted to try it to compare it with JavaScript's ```.slice()```.  This function uses the prarmeters```slice(start, stop, step)```.  _Start_ is a -1 meaning to start at the last character.  _Stop_ is also a negative integer equal to the length of target but since slice's _stop_ excludes the _stop_ character I had to add +1 to include it.  This sliced string is stored in a variable 'sliced_at' and is actually backward from the original string paramter; I use slice again with the smiley alien syntax ```[::-1]``` to reverse this 'sliced_at' string putting it back in forward order.  Then I  compare this forward value with the 'target' argument and return True if it matches.
 
```python
# example 3
def confirm_ending(string: str, target: str) -> bool:
    # Start slice from last char (-1), stepping backward one char at a time (-1), the length of target -(len(target)+1)
    slice_at = slice(-1, -(len(target)+1), -1)
    # slice_at is ordered backwards so reverse to make forward order
    str_end_forward = string[slice_at][::-1]
    # Compare forward string with target
    if str_end_forward  == target:
        return True
    else:
        return False
```

These next JavaScript examples are just to show the various methods that can be implemented to solve the problem.  They mostly differ in how the parameters select parts of the 'str' parameter.

JavaScript 5.1
```javascript
// example 1 - Use .substring(indexStart, indexEndToExclude)
function confirmEnding(str, target) {
  "use strict";
  if (str.substring(str.length - target.length) !== target) {
    return false;
  } else {
      console.log(true);
      return true;
  }
}
```


```javascript
// example 2 - Use .slice(negIndex)
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
```

```javascript
// example 3 - Use .substr(start, chars to extract)
function confirmEnding3(str, target) {
  "use strict";
  if (str.substr(str.length-1, target.length) !== target) {
    return false;
  } else {
      console.log(true);
      return true;
  }
}
```

```javascript
// example 4 - Use .includes(searchString, startPos)
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
```



JavaScript 6

I took the most efficient function above which uses the .endsWith method and turned it into ES6 syntax.
The straight-forward return using a ternary operator means it can be summed up in one line.
It returns the same Boolean value as the JS example 5: if this string argument ends with the target argument then return true, else return false.

```javascript

const confirmEnding = (str, target) => str.endsWith(target) ? true : false

```