### Coding comparisons with Python and JavaScript 5 and 6

#### Reverse a String
Return a reverse string of the string argument provided.


<hr>

**Python** uses a slice syntax with the three places representing _start_, _stop_, and _stride_.  When no number is placed before the first colon, the default _start_ is at index 0.  If there is no number written before the 2nd colon, the default _stop_ index is the end of the list.  The last _stride_ number of -1 will traverse the list backwards. A _stride_ value of -2 would traverse the list backwards skipping every second element.

Simply return the string parameter by slicing it with these _start_, _stop_, and _stride_ values [::-1] and the string is returned in reverse order.


##### Python 3.6 example
```python
def reverseString(string: str) -> str:
    """
    function accepts a string argument and reverses it
    param: string
    return: string
    """
    return string[::-1]
    
reverseString('hello') 
# returns 'olleh'    
```

**JavaScript** in comparison does have a string method called .slice() which comes with _start_ and _end_ parameters but lacks a stride parameter to traverse backwards through the string. The _start_ can be set to -1 to get the last letter or -2 to slice the last two letters but returns them only in forwards order.

There is a list method called .reverse() which will return a list in reverse order and so becomes the basis of the strategy.

We start by turning the string into an array with .split(), then reversing it with .reverse(), and finally joining the array back into a string with .join().

Note that the empty string argument for .split('') splits each char of the string into a array element.  

The empty string argument used with .join('') joins the array elements without any characters between them producing "olleh". However using .join() without any argument provided will place a comma between each element causing ["o", "l", "l", "e", "h"].join() to become "o,l,l,e,h".

##### JavaScript 5 example 1
```javascript
function reverseString(str) {
  // split str
  var splitStr = str.split('');
  // reverse array elements
  revLetters = splitStr.reverse();
  // join array into a string
  revWord = revLetters.join('');
  return revWord;
}

reverseString('hello'); // returns 'olleh' 
```

**JavaScript allows the chaining together of methods so the three lines of code above using three variables to store the changing values becomes just one line of code using just one variable. This one variable changes its value with each method, ending with the string value in reverse. That string value is returned.

##### JavaScript 5 example 2
```javascript
function reverseString(str) {
  // split str, reverse array , join array into string again
  var splitStr = str.split('').reverse().join('');
 
  return splitStr;
}

reverseString('hello'); // returns 'olleh' 
```

JavaScript 6 uses slightly different syntax replacing the function declaration above with a function expression with an arrow symbol in place of the keyword 'function'.  There are even ways to write this function in one line but I kept the curly braces and multiple lines because it appears to me more explicit.

##### JavaScript 6 example
```javascript
const reverseString = str => {
    const splitStr = str.split('').reverse().join('');
    return splitStr;
}
reverseString('howdy'); // returns 'ydwoh' 
```

