### Coding comparisons with Python 3.6 and JavaScript 5.1 and 6

#### Repeat a String
Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.
<hr>

Python 3.6

This is a straightforward operation in Python since strings can be repeated with the multiplication operator.

```python
def repeat_string_num_times(string: str, num: int) -> str:
    if num < 0:
        return " "
    else:
        return string * num
```



JavaScript 5.1

Example 1 has a string method called ```.repeat``` which is kind of Pythonesque in its simplicity.
After the conditional to handle negative numbers, ```.repeat(int)``` takes an integer argument representing how many times to repeat the function's string parameter.


example 1
```javascript
function repeatStringNumTimes(str, num) {
  "use strict";
  // if num is not a positive number
  if (num < 0) {
    return "";
  }
  return str.repeat(num);
}
```

Example 2 is an attempt at solving this without the convenience of a method.  The ```num``` parameter acts along side a counter in a ```while ``` loop
to help repeat the string parameter.  The repeated string gets stored in an array then joined into a string as the final returned string value.
It's much longer code then the .repeat method example and more of a traditional way of handling this operation. 

example 2
```javascript
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
```


JavaScript 6

This example shows off ecmascript 6's efficient syntactic adjustments.  In one line, through the use of a ternary operator
```? :```, it's possible to perform the same logic as the 1st JavaScript example.  Is it more readable?
On one hand if you know JS 6 syntax, yes.  But on the other hand, not really!  Visually it looks like a long cluttered line of characters.  Still, it's kind of minimalistic ```:``` and artsy ```?``` to say something in just one line ```=>``` with these cool symbols.

```javascript
const repeatStringNumTimesES6 = (str, num) => num < 0 ? "" : str.repeat(num)
```