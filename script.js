// ---------------------CODEWARS DAY #1-----------------------

// ---------------------FIRST KATA-----------------------------
/*
Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

Example: (input --> output)

"ATTGC" --> "TAACG"
"GTAT" --> "CATA"
*/

// First solution
/*
let dna = "ACGT";
function DNAStrand(dna) {
  let result = "";
  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === "A") {
      result += "T";
    } else if (dna[i] === "T") {
      result += "A";
    } else if (dna[i] === "C") {
      result += "G";
    } else if (dna[i] === "G") {
      result += "C";
    } else {
      result += dna[i];
    }
  }
  return result;
}
console.log(DNAStrand(dna));
*/

// Second solution
/*
let dna = "ACGT";
let pairs = { A: "T", T: "A", C: "G", G: "C" };
const DNAStrand = (dna) => dna.replace(/./g, (е) => pairs[е]); 
// str.replace(regexp|substr, newSubstr|function[,flags]). /./g - каждый символ g - глобальное сопоставление
console.log(DNAStrand(dna));
*/

// ---------------------SECOND KATA---------------------------
/*
Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!
Examples (a, b) --> output (explanation)

(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
*/

// First solution !!!!RECOURSION!!!!
// function getSum(a, b) {
//   if (a === b) {
//     return a;
//   } else if (a < b) {
//     return a + getSum(a + 1, b);
//   } else {
//     return a + getSum(a - 1, b);
//   }
// }
// console.log(getSum(-2, 2));

//Second solution
// function getSum(a, b) {
//   return ((a + b) * (Math.abs(a - b) + 1)) / 2;
// }
// console.log(getSum(-2, 1));

// ---------------------THIRD KATA---------------------------

/*
Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accept 1 parameters:n, n is the number of customers to buy hotdogs, different numbers have different prices (refer to the following table), return a number that the customer need to pay how much money.
number 	                          price (cents)
n < 5 	                          100
n >= 5 and n < 10 	              95
n >= 10 	                        90
*/

//First solution
// function saleHotdogs(n) {
//   if (n < 5) {
//     return 100 * n;
//   } else if (n >= 5 && n < 10) {
//     return 95 * n;
//   } else if (n >= 10) {
//     return 90 * n;
//   }
// }
// console.log(saleHotdogs(11));

//Second solution Ternary operator
// function saleHotdogs(n) {
//   return n * (n < 5 ? 100 : n < 10 ? 95 : 90);
// }
// console.log(saleHotdogs(11));

// ---------------------FOURTH KATA---------------------------

/*
Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

Example: (Input1, Input2 -->Output)

"4",  "5" --> "9"
"34", "5" --> "39"
"", "" --> "0"
"2", "" --> "2"
"-5", "3" --> "-2"

Notes:

    If either input is an empty string, consider it as zero.

*/

//First solution
// function sumStr(a, b) {
//   return String(Number(a) + Number(b));
// }
// console.log(sumStr("", ""));

//Second solution
// const sumStr = (a, b) => String(+a + +b);
// console.log(sumStr(1, 2));

// ---------------------FOURTH KATA---------------------------

/*
In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
Examples

makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12

Notes

    The number can be negative already, in which case no change is required.
    Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense
*/

//First solution
// function makeNegative(num) {
//   return num < 0 ? num : num * -1;
// }
// console.log(makeNegative(-1));

//Second solutiom
// function makeNegative(num) {
//   return Math.abs(num);
// }

// ---------------------FIFTH KATA-----------------------

//First solution
// const number = function (busStops) {
//   let sumPeople = 0;
//   for (let stop of busStops) {
//     sumPeople += stop[0] - stop[1];
//   }
//   return sumPeople;
// };

//Second solution
// const number = (busStops) =>
//   busStops.reduce((people, stop) => people + stop[0] - stop[1]);
// // array.reduce(callback[, initialValue])

// ---------------------SIXTH KATA-----------------------
/*
Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).

*/
// First solution
// function isTriangle(a, b, c) {
//   return a < b + c && b < a + c && c < a + b;
// }
// console.log(isTriangle(3, 4, 5));

// ---------------------SEVENTH KATA----------------------
/*
Write a function that checks if a given string (case insensitive) is a palindrome. Palindrome is 
*/

// First solution

// function isPalindrome(x) {
//   y = x.split("").reverse().join("");
//   if (x.toLowerCase() === y.toLowerCase()) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isPalindrome("ABbA"));

// Second solution with arrow function
// const isPalindrome = x => x.toLowerCase() === x.toLowerCase().split('').reverse().join('');

// ---------------------EIGHTH KATA----------------------
/*
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F

*/

// First solution

// function abbrevName(fullName) {
//   return fullName
//     .split(" ")
//     .map((i) => i[0].toUpperCase())
//     .join(".");
// }
// // split разделяет строку на подстроки по сепаратору ("пробел")
// // map создает новый массив путём применения к каждому элементу старого массива функцию (i[0].toUpperCase())
// // join объединяет элементы массива после map в строку с сепаратором (".")
// console.log(abbrevName("Harry Potter"));

// ---------------------NINTH KATA----------------------

/*
Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

    S is misinterpreted as 5
    O is misinterpreted as 0
    I is misinterpreted as 1

The test cases contain numbers only by mistake.
*/

// First Solution
/*
let string = "L0ND0N";
const correct = (string) =>
  string.replace(/0/g, "O").replace(/1/g, "I").replace(/5/g, "S");

console.log(correct(string));
// string.replace(/то, что меняем/g, "на что меняем")
*/
// ---------------------TENTH KATA----------------------

/*
Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).
Examples

n = 0  ==> [1]        # [2^0]
n = 1  ==> [1, 2]     # [2^0, 2^1]
n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

*/

//First solution
/*
function powersOfTwo(n) {
  let result = [];
  for (let i = 0; i <= n; i++) {
    result.push(Math.pow(2, i));
  }
  return result;
}
console.log(powersOfTwo(1));
*/

//Second solution
/*
const powersOfTwo = (n) =>
  Array(n + 1)
    .fill(2)
    .map((e, i) => e ** i);
console.log(powersOfTwo(4));
*/

// ---------------------ELEVENTH KATA----------------------

/*
When provided with a number between 0-9, return it in words.

Input :: 1

Output :: "One".

If your language supports it, try using a switch statement.

*/

//First Solution
/*
function switchItUp(number) {
  switch (number) {
    case 1:
      return "One";
    case 2:
      return "Two";
    case 3:
      return "Three";
    case 4:
      return "Four";
    case 5:
      return "Five";
    case 6:
      return "Six";
    case 7:
      return "Seven";
    case 8:
      return "Eight";
    case 9:
      return "Nine";
    case 0:
      return "Zero";
  }
  return number;
}
console.log(switchItUp(3));
*/

// ---------------------TWELFTH KATA----------------------

/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false


*/

// First solution
/*
function XO(str) {
  let x = str.match(/x/gi); // return array with all "x"
  let o = str.match(/o/gi);
  console.log(x);
  console.log(o);
  return (x && x.length) === (o && o.length); // compare length of two arrays
}

console.log(XO("xXxxeo2442o24xxxoOOojggdgdqwexo"));
*/

// Second solution
/*
const XO = (str) => {
  str = str.toLowerCase().split(""); //transform string to array with case change
  return (
    str.filter((x) => x === "x").length === str.filter((x) => x === "o").length
  ); // compare length of two arrays with .filter method who apply function (x) => x === "x" to array found above
};
*/

// Third solution
/*
function XO(str) {
  return (
    str.toLowerCase().split("x").length === str.tolowerCase().split("o").length
  ); 
  // 1) change case; 2) create new array with specified substring ("x" / "o"); 3) compare length
}
*/

// ---------------------THIRTEENTH KATA----------------------

/*
Given an array of integers your solution should find the smallest integer.

For example:

    Given [34, 15, 88, 2] your solution will return 2
    Given [34, -345, -1, 100] your solution will return -345

You can assume, for the purpose of this kata, that the supplied array will not be empty.

*/

// First solution
/*
function min(arr) {
  arr = arr.sort((a, b) => a - b); // sorted by adcending
  return arr[0];
}
console.log(min([1, 2, 3, -1, -10, 0]));
*/

//Second solution
/*
function min(arr) {
  return Math.min(...arr); //spread operator syntax can be used when all elements from an object or array need to be included in a new array or object
}
console.log(min([1, 2, 3, -1, -11, 0]));
*/

// ---------------------FOURTEENTH KATA----------------------

/*
We want an array, but not just any old array, an array with contents!

Write a function that produces an array with the numbers 0 to N-1 in it.

For example, the following code will result in an array containing the numbers 0 to 4:

arr(5) // => [0,1,2,3,4]

Note: The parameter is optional. So you have to give it a default value.

*/

//First solution
/*
function arr(n) {
  let arr2 = [];
  for (let i = 0; i < n; i++) {
    arr2.push(i);
  }
  return arr2;
}
console.log(arr(5));
*/

// ---------------------FIFTEENTH KATA----------------------
/*
 Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
 */

//First solution
/*
function boolToWord(bool) {
  return bool === true ? "Yes" : "No";
}
console.log(boolToWord(false));
*/

// ---------------------SIXTEENTH KATA----------------------

/*
In this Kata, we are passing a number (n) to the function.
Your code will determine if the number passed is even (or not).
The function must return either true or false.
Numbers can be positive or negative, integer or floating point.
Floats with a decimal part other than zero are considered odd for this kata.
*/

//First solution

/*
function testEven(n) {
  return (n = n % 2 === 0 ? true : false);
}
console.log(testEven(4));
*/

// ---------------------SEVENTEENTH KATA----------------------

/*
Is the string uppercase?
Task:
Create a method to see whether the string is ALL CAPS.
Examples (input -> output)

"c" -> False
"C" -> True
"hello I AM DONALD" -> False
"HELLO I AM DONALD" -> True
"ACSKLDFJSgSKLDFJSKLDFJ" -> False
"ACSKLDFJSGSKLDFJSKLDFJ" -> True

In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.
*/

//First solution
/*
function upperCase(str) {
  return str === str.toUpperCase() ? true : false;
}
console.log(upperCase("Hello World"));
*/

//Second solution
/*
String.prototype.isUpperCase = function() {
  return this.toUpperCase() === this.toString();
}
*/

// ---------------------EIGTHTEENTH KATA----------------------

/*
You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.
 */

//First solution
/*
function twoSort(s) {
  return s.sort()[0].split("").join("***"); //[0] - первый символ? LIST OF STRING IT's ARRAY
}
console.log(
  twoSort([
    "bitcoin",
    "take",
    "over",
    "the",
    "world",
    "maybe",
    "who",
    "knows",
    "perhaps",
  ])
);
*/

// ---------------------NINETEENTH KATA----------------------

/*
You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

Considering these factors, write a function that tells you if it is possible to get to the pump or not.

Function should return true if it is possible and false if not.

*/

//First solution
/*
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return distanceToPump >= 50 && mpg >= 25 && fuelLeft >= 2 ? true : false;
};
console.log(zeroFuel(22, 25, 3));
*/

//Second solution
/*
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return distanceToPump / mpg <= fuelLeft;
};
console.log(zeroFuel(50, 25, 2));
*/

// ---------------------TWENTIETH KATA----------------------

/*
Complete the solution so that it reverses the string passed into it.
'world'  =>  'dlrow'
'word'   =>  'drow'
*/

//First solution
/*
function solution(str) {
  return str.split("").reverse().join(""); // for deleted "," at the final string use "" in .join("") method
}
console.log(solution("world"));
*/

// ---------------------TWENTTY-FIRST KATA----------------------

/*
Create a function that will return a hello statement using input; your program should return "Hi <name>, how are you today?".
[Make sure you enter exactly what I wrote, otherwise the program may not work correctly]
*/

//First solution
/*
function greet(name) {
  return `Hello, ${name} how are you doing today?`;
}
console.log(greet("Ryan"));
*/

// ---------------------TWENTY-SECOND KATA----------------------
/*
Given an array of integers, return a new array with each value doubled.
For example:
[1, 2, 3] --> [2, 4, 6]
*/

//First solution
/*
function maps(x) {
  return x.map((a) => a + a);
}
console.log(maps([1, 2, 3]));
*/

// ---------------------TWENTY-THIRD KATA----------------------

/*
The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).
For example:
1.08 --> 30
Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.
*/

//First solution
/*
function cockroachSpeed(s) {
  return Math.floor(s * 27.777777777778);
}
console.log(cockroachSpeed(100));
*/

// ---------------------TWENTY-FOURTH KATA----------------------
/*
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
*/

//First solution
/*
function removeChar(str) {
  str = str.slice(1, -1); // First and last symbol
  return str;
}
console.log(removeChar("geefe"));
*/
