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

//--------------------------25 KATA-------------------------

/*
Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

"hello WORLD".toAlternatingCase() === "HELLO world"
*/

// First solution
/*
String.prototype.toAlternatingCase = function () {
  return this.split("").map((a) =>
    a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()
  );
};
*/

//--------------------------26 KATA-------------------------
/*
Bob is working as a bus driver. However, he has become extremely popular among the city's residents. With so many wanting to get aboard his passengers bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.
Task Overview:

You have to write a function that accepts three parameters:

     cap is the amount of people the bus can hold excluding the driver.
     on is the number of people on the bus excluding the driver.
     wait is the number of people waiting to get on to the bus excluding the driver.

If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting
*/
/*
// Solution
function enough(cap, on, wait) {
  return cap < on + wait ? wait + on - cap : 0;
}

// Solution
function enough(cap, on, wait) {
  return Math.max(wait + on - cap, 0);
}
*/

//--------------------------27 KATA-------------------------

/*
Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA.

For example:

"GCAT"  =>  "GCAU"

The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.
*/
/*
// Solution
const str = "GCAT";
function DNAtoRNA(dna) {
  return str
    .split("")
    .map((dna) => (dna === "T" ? "U" : dna))
    .join("");
}

// Second solution
function DNAtoRNA(dna) {
  return dna.replace(/T/g, "U");
}
*/

//--------------------------28 KATA-------------------------

/*
There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!
input

    customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
    n: a positive integer, the number of checkout tills.

output

The function should return an integer, the total time required.
Important

Please look at the examples and clarifications below, to ensure you understand the task correctly :)
Examples

queueTime([5,3,4], 1)
// should return 12
// because when there is 1 till, the total time is just the sum of the times

queueTime([10,2,3,3], 2)
// should return 10
// because here n=2 and the 2nd, 3rd, and 4th people in the 
// queue finish before the 1st person has finished.

queueTime([2,3,10], 2)
// should return 12

Clarifications

    There is only ONE queue serving many tills, and
    The order of the queue NEVER changes, and
    The front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.

N.B. You should assume that all the test input will be valid, as specified above.
*/

// Solution
/*
function queueTime(customers, n) {
  const w = new Array(n).fill(0);
  for (let t of customers) {
    let idx = w.indexOf(Math.min(...w));
    w[idx] += t;
  }
  return Math.max(...w);
}
const y = queueTime([10, 2, 3, 3], 2);
console.log(y);
*/

//--------------------------29 KATA-------------------------
/*
Nathan loves cycling.

Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

For example:

time = 3 ----> litres = 1

time = 6.7---> litres = 3

time = 11.8--> litres = 5
*/

// Solution
/*
const time = 6.7;
function litres(time) {
  return Math.floor(time * 0.5);
}
console.log(litres(6.7));
*/
//--------------------------30 KATA-------------------------
/*
You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
If it is a square, return its area. If it is a rectangle, return its perimeter.

Example(Input1, Input2 --> Output):

6, 10 --> 32
3, 3 --> 9

Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle
*/
/*
// Solution
const areaOrPerimeter = function (l, w) {
  return l === w ? l * w : (l + w) * 2;
};
*/

//--------------------------31 KATA-------------------------
/*
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
Examples

"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 

Notes

Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
*/

// First solution
/*
function duplicateEncode(str) {
  // create a variable to hold string value that IGNORES case
  let word = str.toLowerCase();
  // creat a variable to hold finished string after loop
  let unique = "";
  // loop through all letters in string (word)
  for (let i = 0; i < word.length; i++) {
    // check for any characters thaat repeats
    if (word.lastIndexOf(word[i]) === word.indexOf(word[i])) {
      // for each character that never dupes, place new symbol
      unique += "(";
      // for each character that IS a dupe, place another symbol
    } else unique += ")";
    // return the full string value
  }
  return unique;
}
console.log(duplicateEncode("recede"));
*/

// Second solution
/*
function duplicateEncode(word) {
  word = word.toLowerCase();
  return word.replace(/./g, (m) =>
    word.indexOf(m) === word.lastIndexOf(m) ? "(" : ")"
  );
}
console.log(duplicateEncode("recede"));
*/

//--------------------------32 KATA-------------------------
/*
Messi goals function
Messi is a soccer player with goals in three leagues:
    LaLiga
    Copa del Rey
    Champions
Complete the function to return his total number of goals in all three leagues.

Note: the input will always be valid.

For example:

5, 10, 2  -->  17
*/
/*
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}
*/

//--------------------------33 KATA-------------------------
/*
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.
Examples (Input --> Output)

"1234"   -->  true
"12345"  -->  false
"a234"   -->  false
*/

/*

// Solution
const str = "1234";
// const str2 = "1234";
// console.log(+str);
// console.log(+str2);
// console.log(str.split("").join(""));
// console.log(typeof Number.parseInt(str.split("").join("")));
// console.log(typeof str);
// console.log(typeof +str2);
// console.log(isFinite(str));

function validatePIN(pin) {
  // const newArr = pin.split("").join("");
  // console.log(typeof newArr);
  // console.log(newArr.length);
  // console.log(Number.isFinite(newArr));
  // console.log(newArr);
  // let arr = [];
  // for (let i = 0; i < newArr.length; i++) {
  //   console.log(arr);
  // }
  const pinlength = pin.length;
  console.log(pinlength);
  return (pin.length === 4 || pin.length === 6) && Number.isFinite(pin) === true
    ? true
    : false;
}
console.log(validatePIN("1234"));
// console.log(Number.isFinite(+",20")); // false
*/

// Solution
/*
function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin); // Проверяет на длину 4 или 6. Проверяет на наличие символов - не чисел
}
console.log(validatePIN("123566"));
*/

//--------------------------34 KATA-------------------------
/*
You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)
Examples

[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3
*/
/*
function stray(numbers) {
  let result = numbers.sort();
  console.log(result);
  if (result[0] !== result[1]) {
    return result[0];
  } else return result[result.length - 1];
}

console.log(stray([1, 0, 1, 1]));
*/

// 20.04.2023
// #1
// var isAnagram = function (test, original) {
//   return (
//     test.toLowerCase().split("").sort().join() ===
//     original.toLowerCase().split("").sort().join()
//   );
// };

// console.log(isAnagram("Twoo", "WooT"));

// #2
// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.
// function shortcut(string) {
//   return string.replace(/[aeiou]/gi, "");
// }
// console.log(shortcut("hello"));

// #3
// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
// function greet(name, owner) {
//   return name === owner ? "Hello boss" : "Hello guest";
// }

// #4 Replace With Alphabet Position
// Welcome.In this kata you are required to, given a string, replace every letter with its position in the alphabet. If anything in the text isn't a letter, ignore it and don't return it.
// function alphabetPosition(text) {
//   let result = "";

//   for (let i = 0; i < text.length; i++) {
//     let charCode = text.toUpperCase().charCodeAt(i);
//     if (charCode >= 65 && charCode <= 90) {
//       result += charCode - 64 + " ";
//     }
//   }

//   return result.trim();
// }
// console.log(alphabetPosition("The sunset sets at twelve o' clock."));

// // // // //

// 21.04.2023
// #1
// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?
/*
At the end of the first year there will be: 
1000 + 1000 * 0.02 + 50 => 1070 inhabitants

At the end of the 2nd year there will be: 
1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

At the end of the 3rd year there will be:
1141 + 1141 * 0.02 + 50 => 1213

It will need 3 entire years.

More generally given parameters:

p0, percent, aug (inhabitants coming or leaving each year), p (population to equal or surpass)

the function nb_year should return n number of entire years needed to get a population greater or equal to p.

aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

Examples:
nb_year(1500, 5, 100, 5000) -> 15
nb_year(1500000, 2.5, 10000, 2000000) -> 10

Note:

Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.
*/
// function nbYear(p0, percent, aug, p) {
//   let years = 0;
//   while (p0 < p) {
//     p0 += Math.floor(p0 * (percent / 100) + aug);
//     years++;
//   }

//   return years;
// }
// console.log(nbYear(1500, 5, 100, 5000));

// #2
// Write function bmi that calculates body mass index (bmi = weight / height2).
// function bmi(weight, height) {
//   let bmi = weight / Math.pow(height, 2);
//   return bmi <= 18.5
//     ? "Underweight"
//     : bmi <= 25
//     ? "Normal"
//     : bmi <= 30
//     ? "Overweight"
//     : "Obese";
// }

// console.log(bmi(100, 1.87));

// #3
/*
Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

Constraint:

    1 <= month <= 12

*/
// const quarterOf = (month) => {
//   if (month <= 3) {
//     return 1;
//   }
//   if (month >= 4 && month <= 6) {
//     return 2;
//   }
//   if (month >= 7 && month <= 9) {
//     return 3;
//   }
//   if (month >= 10 && month <= 12) {
//     return 4;
//   }
// };

// #4
/*
Complete the solution so that the function will break up camel casing, using a space between words.
Example

"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/
// function solution(string) {
//   let str = string.split("").join();
//   for (let i = 0; i < str.length; i++) {
//     if (str.charAt(i).toUpperCase() === str.charAt(i)) {
//       return str.replace(i, " ");
//     }
//   }
//   return str.join();
// }

// function solution(string) {
//   const newStr = string.replace(/([A-Z])/g, " $1");
//   return newStr;
// }

// console.log(solution("camelCasing"));
//

// 24.04.2022
// #1
/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)
*/
/*
function isIsogram(str) {
  let arr = str.toLowerCase().split("");
  const set = new Set(arr);
  console.log(set.size);
  return set.size === arr.length ? true : false;
}
console.log(isIsogram("Dermatoglyphics"));
*/

//  #2

/*
Count the number of Duplicates

Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
Example

"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
Strings
Fundamentals
*/
/*
function duplicateCount(text) {
  const normalizeStr = text.toLowerCase();
  const counter = {};
  for (const char of normalizeStr) {
    if (counter[char]) {
      counter[char]++;
    } else {
      counter[char] = 1;
    }
  }

  let count = 0;
  for (const char in counter) {
    if (counter[char] > 1) {
      count++;
    }
  }
  return count;
}
console.log(duplicateCount("Indivisibility"));

// Second solution :
function duplicateCount(text){
  return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}
*/

// #3
/*
Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

For example:

a = 1
b = 4
--> [1, 2, 3, 4]

*/
/*
function between(a, b) {
  let arr = [];
  for (let i = a; i <= b; i++) {
    arr.push(i);
  }
  return arr;
}
console.log(between(1, 4));
*/

// #4
/*
In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.
*/

// function findMultiples(integer, limit) {
//   let newArr = [];
//   if (limit % integer === 0) {
//     for (let i = integer; i < limit; i++) {

//     }
//   }
// }
/*
function findMultiples(integer, limit) {
  let newArr = [];
  for (let i = integer; i <= limit; i++) {
    if ([i] % integer === 0) {
      newArr.push(i);
    }
  }
  return newArr;
}
console.log(findMultiples(2, 6));
*/

// #5
/*
Grade book

Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
Numerical Score 	Letter Grade
90 <= score <= 100 	'A'
80 <= score < 90 	'B'
70 <= score < 80 	'C'
60 <= score < 70 	'D'
0 <= score < 60 	'F'

Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.
*/
/*
function getGrade(s1, s2, s3) {
  let score = (s1 + s2 + s3) / 3;
  console.log(score);
  if (score >= 90 && score <= 100) {
    return "A";
  }
  if (score >= 80 && score < 90) {
    return "B";
  }
  if (score >= 70 && score < 80) {
    return "C";
  }
  if (score >= 60 && score < 70) {
    return "D";
  }
  if (score >= 0 && score < 60) {
    return "F";
  }
}

console.log(getGrade(89, 89, 90));
*/
/*
function getGrade (s1, s2, s3) {
  var s = (s1 + s2 + s3) / 3
  return s >= 90 ? "A" : s >= 80 ? "B" : s >= 70 ? "C" : s >= 60 ? "D" : "F"
}
*/

// # 6
/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.


*/
/*
function findShort(s) {
  let words = s.split(" ");
  const short = words.reduce(
    (shortest, word) => Math.min(shortest, word.length),
    Infinity
  );
  return short;
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
*/

// # 7

/*
You are given an array with positive numbers and a non-negative number N. You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1. Don't forget that the first element has the index 0.

Let's look at a few examples:

    array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
    array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.
*/
/*
function index(array, n) {
  return array[n] ** n || -1;
}

console.log(index([1, 3, 10, 100], 3));
*/

// 25.04.2022

// #1
/*
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.

*/
/*
function disemvowel(str) {
  return str.replace(/[aeiou]/gi, "");
}

console.log(disemvowel("This website is for losers LOL!"));

*/

// #3
/*
Task

Given the a list of numbers, return a fixed list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).
Example

Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8
*/
/*
function pipeFix(numbers) {
  let result = [];
  let min = Math.min(...numbers);
  let max = Math.max(...numbers);
  for (let i = min; i <= max; i++) {
    result.push(i);
  }
  return result;
}

console.log(pipeFix([1, 3, 5, 6, 7, 8]));
*/

// #4
/*
Complete the function/method so that it returns the url with anything after the anchor (#) removed.
Examples

"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"
*/
/*
function removeUrlAnchor(url) {
  let newStr = url.split("#")[0];
  return newStr;
}
// string.replace(/то, что меняем/g, "на что меняем")
console.log(removeUrlAnchor("www.codewars.com#about"));
*/
// Second solution
// function removeUrlAnchor(url) {
//   return url.replace(/#.*/gi, "");
// }

// #5
// Binary Addition
/*
Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
*/
/*
function addBinary(a, b) {
  let sum = (a + b).toString(2);
  return sum;
}

console.log(addBinary(1, 1));
*/

// #6
/*
function minMax(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let newArr = [];
  newArr.push(min, max);
  return newArr;
}
console.log(minMax([1, 2, 3, 4, 5]));
/*
function minMax(arr){
  return [Math.min(...arr), Math.max(...arr)];
}
*/

// #7
// Sum of odd numbers
/*
Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...

Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8

*/
/*
function rowSumOddNumbers(n) {
  // Для решения этой задачи нам нужно знать, что каждая строка треугольника является последовательностью нечетных чисел, начиная с (2n-1) и заканчивая (2n-1)+2(n-1), где n - номер строки.
  return Math.pow(n, 3);
}
console.log(rowSumOddNumbers(42));
*/

// #9
// Sum of the first nth term of Series
/*
Your task is to write a function which returns the sum of following series upto nth term(parameter).
Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
Rules:
    You need to round the answer to 2 decimal places and return it as String.

    If the given value is 0 then it should return 0.00

    You will only be given Natural Numbers as arguments.
Examples:(Input --> Output)
1 --> 1 --> "1.00"
2 --> 1 + 1/4 --> "1.25"
5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"
 */
/*
function SeriesSum(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += 1 / (1 + i * 3);
  }
  return sum.toFixed(2);
}

console.log(SeriesSum(5));
*/

// #9
/*
Clock shows h hours, m minutes and s seconds after midnight.
Your task is to write a function which returns the time since midnight in milliseconds.
Example:
h = 0
m = 1
s = 1
result = 61000
Input constraints:
    0 <= h <= 23
    0 <= m <= 59
    0 <= s <= 59
*/
/*
function past(h, m, s) {
  return h * 3600 * 1000 + m * 60 * 1000 + s * 1000;
}
console.log(past(1, 1, 1));
*/

// #10
// Difference of Volumes of Cuboids
/*
In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.
For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.
Your function will be tested with pre-made examples as well as random ones.
If you can, try writing it in one line of code.
*/
/*
function findDifference(a, b) {
  let volume1 = a.reduce((acc, curr) => acc * curr);
  let volume2 = b.reduce((acc, curr) => acc * curr);
  if (volume1 > volume2) {
    return volume1 - volume2;
  } else {
    return volume2 - volume1;
  }
}

// function find_difference(a, b) {
//   return Math.abs(a.reduce((previous, current) => previous * current) - b.reduce((previous, current) => previous * current));
// }

console.log(findDifference([9, 7, 2], [5, 2, 2]));
*/

// #11
/*
Exclusive "or" (xor) Logical Operator
Overview
In some scripting languages like PHP, there exists a logical operator (e.g. &&, ||, and, or, etc.) called the "Exclusive Or" (hence the name of this Kata). The exclusive or evaluates two booleans. It then returns true if exactly one of the two expressions are true, false otherwise. For example:

false xor false == false // since both are false
true xor false == true // exactly one of the two expressions are true
false xor true == true // exactly one of the two expressions are true
true xor true == false // Both are true.  "xor" only returns true if EXACTLY one of the two expressions evaluate to true.
Task
Since we cannot define keywords in Javascript (well, at least I don't know how to do it), your task is to define a function xor(a, b) where a and b are the two expressions to be evaluated. Your xor function should have the behaviour described above, returning true if exactly one of the two expressions evaluate to true, false otherwise.
*/
/*
function xor(a, b) {
  return a != b;
}

console.log(xor(false, false));
console.log(xor(true, false));
console.log(xor(false, true));
console.log(xor(true, true));
*/

// #12
/*
Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.
Examples
remove("Hi!") == "Hi"
remove("Hi!!!") == "Hi!!"
remove("!Hi") == "!Hi"
remove("!Hi!") == "!Hi"
remove("Hi! Hi!") == "Hi! Hi"
remove("Hi") == "Hi"
 */
/*
function remove(str) {
  if (str.charAt(str.length - 1) === "!") {
    return str.slice(0, -1);
  }
  return str;
}

// const remove = s => s.replace(/!$/, '');
console.log(remove("!Hi!"));
*/

// 26.04.2022

// #1
/*
Task
    Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
    In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained (Read the notes for more detail about it)
Example
With the numbers are 1, 2 and 3 , here are some ways of placing signs and brackets:
    1 * (2 + 3) = 5
    1 * 2 * 3 = 6
    1 + 2 * 3 = 7
    (1 + 2) * 3 = 9
So the maximum value that you can obtain is 9.
Notes
    The numbers are always positive.
    The numbers are in the range (1  ≤  a, b, c  ≤  10).
    You can use the same operation more than once.
    It's not necessary to place all the signs and brackets.
    Repetition in numbers may occur .
    You cannot swap the operands. For instance, in the given example you cannot get expression (1 + 3) * 2 = 8
*/
/*
function expressionMatter(a, b, c) {
  const expressions = [
    a + b + c,
    a * b * c,
    (a + b) * c,
    a * (b + c),
    a + b * c,
    a * b + c,
  ];
  return Math.max(...expressions);
}

console.log(expressionMatter(2, 1, 2));
*/

// #2

/*
A square of squares
You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!
However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.
Task
Given an integral number, determine if it's a square number:
    In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.
The tests will always use some integral number, so don't worry about that in dynamic typed languages.
Examples
-1  =>  false
 0  =>  true
 3  =>  false
 4  =>  true
25  =>  true
26  =>  false
*/
/*
var isSquare = function (n) {
  return n < 0 ? false : n === 0 ? true : Number.isInteger(Math.sqrt(n));
};
console.log(isSquare(-1));
console.log(isSquare(0));
console.log(isSquare(3));
console.log(isSquare(25));
*/

// #3
/*
Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n3 n^3 n3, the cube above will have volume of (n−1)3 (n-1)^3 (n−1)3 and so on until the top which will have a volume of 13 1^3 13.
You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?
The parameter of the function findNb (find_nb, find-nb, findNb, ...) will be an integer m and you have to return the integer n such as n3+(n−1)3+(n−2)3+...+13=m n^3 + (n-1)^3 + (n-2)^3 + ... + 1^3 = m n3+(n−1)3+(n−2)3+...+13=m if such a n exists or -1 if there is no such n.
Examples:
findNb(1071225) --> 45
findNb(91716553919377) --> -1
*/
/*
function findNb(m) {
  let n = 0;
  let sum = 0;
  while (sum < m) {
    n++;
    sum += Math.pow(n, 3);
  }
  return sum === m ? n : -1;
}

console.log(findNb(1071225));

// Second solution
function findNb(m) {
  var n = 0
  while (m > 0) m -= ++n**3
  return m ? -1 : n
}
*/

// #4

/*
Task
You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
*/
/*
function sortArray(array) {
  const oddNumbers = array.filter((num) => num % 2 !== 0).sort((a, b) => a - b);
  return array.map((num) => (num % 2 !== 0 ? oddNumbers.shift() : num));
}
console.log(sortArray([5, 3, 2, 8, 1, 4]));
*/

// #5

/*
Write a function that removes the spaces from the string, then return the resultant string.
Examples:
Input -> Output
"8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
"8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
"8aaaaa dddd r     " -> "8aaaaaddddr"
*/
/*
function noSpace(x) {
  return x.replace(/\s/g, "");
}
console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"), "8j8mBliB8gimjB8B8jlB");
*/

// #6
/*
A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.
Arguments
    First argument (required): the original string to be converted.
    Second argument (optional): space-delimited list of minor words that must always be lowercase except for the first word in the string. The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.
Example
titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
*/
/*
function titleCase(title, minorWords) {
  const minorWordsArr = minorWords ? minorWords.toLowerCase().split(" ") : [];
  console.log(minorWordsArr);

  const titleArr = title.toLowerCase().split(" ");

  const result = titleArr.map((word, index) => {
    if (index === 0 || !minorWordsArr.includes(word)) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    } else {
      return word;
    }
  });

  return result.join(" ");
}

console.log(titleCase("a clash of KINGS", "a an the of"));
*/

// #7

/*
Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.
For example: (Input --> Output)
10 --> 1
99 --> 18
-32 --> 5
Let's assume that all numbers in the input will be integer values.
*/
/*
function sumDigits(number) {
  let str = number.toString();
  let str2 = str.split("");
  console.log(str2);
  let sum = 0;
  for (let i = 0; i < str2.length; i++) {
    if (str2[i] === "-") continue;
    sum += parseInt(str2[i]);
  }
  return sum;
}

console.log(sumDigits(-42));
*/

// #8

/*
Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.
Example:
Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
*/
/*
String.prototype.toJadenCase = function () {
  let str1 = this.split(" ");
  let arr = str1.map((word, index) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return arr.join(" ");
};

console.log(toJadenCase("How can mirrors be real if our eyes aren't real"));
*/

// #9

/*
Your function takes two arguments:
    current father's age (years)
    current age of his son (years)
Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.
*/
/*
function twiceAsOld(x, y) {
  let z = x - y * 2;
  return Math.abs(z);
}

console.log(twiceAsOld(55, 30));
*/

// #10
/*
In this kata you will create a function that takes in a list and returns a list with the reverse order.
Examples (Input -> Output)
 */
/*
function reverseList(list) {
  return list.reverse();
}
console.log(reverseList([1, 2, 3, 4]));
*/

// #11

/*
Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.
 */
/*
function getAge(inputString) {
  return parseInt(inputString.charAt(0));
}

console.log(getAge("4 years old"));
*/

// 27.04

// #1

/*
Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:
    "I love you"
    "a little"
    "a lot"
    "passionately"
    "madly"
    "not at all"
If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.
When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.
Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0.
 */
/*
function howMuchILoveYou(nbPetals) {
  const nbArr = [
    "I love you",
    "a little",
    "a lot",
    "passionately",
    "madly",
    "not at all",
  ];
  // const index = (nbPetals - 1) % nbArr.length;
  return nbArr[nbPetals % 6];
}

console.log(howMuchILoveYou(7));
*/

// #2

/*
Your goal is to return multiplication table for number that is always an integer from 1 to 10.
For example, a multiplication table (string) for number == 5 looks like below:
1 * 5 = 5
2 * 5 = 10
3 * 5 = 15
4 * 5 = 20
5 * 5 = 25
6 * 5 = 30
7 * 5 = 35
8 * 5 = 40
9 * 5 = 45
10 * 5 = 50
P. S. You can use \n in string to jump to the next line.
Note: newlines should be added between rows, but there should be no trailing newline at the end. If you're unsure about the format, look at the sample tests.
*/
/*
function multiTable(number) {
  let str = "";
  for (let i = 1; i <= 10; i++) {
    str += `${i} * ${number} = ${i * number}\n`;
  }
  return str.trim();
}
console.log(multiTable(5));
*/

// #3

/*
Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.
For example:
solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
solution(null); // should return []
 */
/*
function solution(nums) {
  if (nums === null || nums.length === 0) {
    return [];
  }
  return nums.sort((a, b) => a - b);
}
console.log(solution([1, 2, 3, 10, 5]));
*/

// #4

/*Your job is to write a function which increments a string, to create a new string.
    If the string already ends with a number, the number should be incremented by 1.
    If the string does not end with a number. the number 1 should be appended to the new string.
Examples:
foo -> foo1
foobar23 -> foobar24
foo0042 -> foo0043
foo9 -> foo10
foo099 -> foo100
Attention: If the number has leading zeros the amount of digits should be considered.
*/
/*
function incrementString(str) {
  let match = str.match(/\d+$/);
  if (match) {
    let num = (parseInt(match[0]) + 1)
      .toString()
      .padStart(match[0].length, "0");
    return str.slice(0, match[0].length) + num;
  } else {
    return str + "1";
  }
}

console.log(incrementString("foo099"));

// let incrementString = (str) =>
//   str.replace(/([0-8]|\d?9+)?$/, (e) => (e ? +e + 1 : 1));
*/

// #5
/*
Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.
*/
/*
class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width * height;
  }
}

console.log(getVolumeOfCuboid(1, 2, 2));
*/

// #6

/*
A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?
Return true if yes, false otherwise :)
*/
/*
function hero(bullets, dragons) {
  return bullets >= dragons * 2 ? true : false;
}
console.log(hero(257, 116));
*/

// #7
/*
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.
For example:
uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/
/*
function uniqueInOrder(iterable) {
  let result = [];

  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i] !== iterable[i - 1]) {
      result.push(iterable[i]);
    }
  }

  return result;
}

console.log(uniqueInOrder([1, 2, 2, 3, 3]));
console.log(uniqueInOrder("AAAABBBCCDAABBB"));
*/

// #8
/*
Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?
Examples:
input:    output:
0    ->   0
2    ->   5
3    ->   5
12   ->   15
21   ->   25
30   ->   30
-2   ->   0
-5   ->   -5
etc.
Input may be any positive or negative integer (including 0).
You can assume that all inputs are valid integers.
*/
/*
function roundToNext5(n) {
  let str = Math.ceil(n / 5) * 5;
  return str;
}
console.log(roundToNext5(2));
*/

// #9
/*
The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
Task
Given a year, return the century it is in.
Examples
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20
Note: this kata uses strict construction as shown in the description and the examples, you can read more about it here
Fundamentals
Mathematics
 */
/*
function century(year) {
  return Math.ceil(year / 100);
}

console.log(century(89));
/*

// #10
/*
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
What if the string is empty? Then the result should be empty object literal, {}.
*/
/*

function countChars(str) {
  let counts = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (counts[char]) {
      counts[char]++;
    } else {
      counts[char] = 1;
    }
  }
  return counts;
}
console.log(countChars("aba"));
*/

// 28.04

// #1
/*
Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.
Examples
Input: [1, 5.2, 4, 0, -1]
Output: 9.2
Input: []
Output: 0
Input: [-2.398]
Output: -2.398
Assumptions
    You can assume that you are only given numbers.
    You cannot assume the size of the array.
    You can assume that you do get an array and if the array is empty, return 0.
What We're Testing
We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
Advanced users may find this extremely easy and can easily write this in one line.
*/
/*
function sum(numbers) {
  return numbers.reduce((acc, val) => acc + val, 0);
}

console.log(sum([1, 5.2, 4, 0, -1]));
*/

// #2
/*
Numbers ending with zeros are boring.
They might be fun in your world, but not here.
Get rid of them. Only the ending ones.
1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105
Zero alone is fine, don't worry about it. Poor guy anyway
Fundamentals
*/
/*
function noBoringZeros(n) {
  while (n % 10 === 0 && n !== 0) {
    n = n / 10;
  }
  return n;
}

console.log(noBoringZeros(96000));
*/

// #3
/*
Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.
Task
Your mission:
Write a function called checkCoupon which verifies that a coupon code is valid and not expired.
A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".
Examples:
checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false
*/
/*
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  const time1 = new Date(currentDate).getTime() / 1000;
  const time2 = new Date(expirationDate).getTime() / 1000;

  return enteredCode === correctCode && time1 <= time2 ? true : false;
}

console.log(
  checkCoupon("123", "123", "September 5, 2014", "September 5, 2014")
);
*/

// #4
/*
Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!.
Examples(Input1, Input2 --> Output):
"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"
*/
/*
const rps = (p1, p2) => {
  if (p1 === p2) return "Draw!";
  if (p1 === "rock" && p2 === "scissors") return "Player 1 won!";
  if (p1 === "scissors" && p2 === "paper") return "Player 1 won!";
  if (p1 === "paper" && p2 === "rock") return "Player 1 won!";
  return "Player 2 won!";
};
console.log(rps("scissors", "rock"));
*/

// #5
/*
ou need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:
As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.
Example (Input --> Output)
"Hello World" --> "World Hello"
"Hi There." --> "There. Hi"
Happy coding!
*/
/*
function reverse(string) {
  let newStr = string.split(" ").reverse().join(" ");
  return newStr;
}
console.log(reverse("no one cares"));
*/

// #6

/*
Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.
a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.
The four operators are "add", "subtract", "divide", "multiply".
A few examples:(Input1, Input2, Input3 --> Output)
5, 2, "add"      --> 7
5, 2, "subtract" --> 3
5, 2, "multiply" --> 10
5, 2, "divide"   --> 2.5
*/
/*
function arithmetic(a, b, operator) {
  if (operator === "add") return a + b;
  if (operator === "subtract") return a - b;
  if (operator === "multiply") return a * b;
  if (operator === "divide") return a / b;
}

console.log(arithmetic(1, 2, "add"));
*/

// #7
/*
Given an array of integers, find the one that appears an odd number of times.
There will always be only one integer that appears an odd number of times.
Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
*/
// function findOdd(arr) {
//   const count = {};

//   for (let i = 0; i < arr.length; i++) {
//     const elem = arr[i];
//     count[elem] = (count[elem] || 0) + 1;
//   }

//   for (const elem in count) {
//     if (count[elem] % 2 === 1) {
//       return Number(elem);
//     }
//   }

//   return null;
// }
/*
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]));
*/

// #8

/*
    Kids drink toddy.
    Teens drink coke.
    Young adults drink beer.
    Adults drink whisky.
Make a function that receive age, and return what they drink.
Rules:
    Children under 14 old.
    Teens under 18 old.
    Young under 21 old.
    Adults have 21 or more.
Examples: (Input --> Output)
13 --> "drink toddy"
17 --> "drink coke"
18 --> "drink beer"
20 --> "drink beer"
30 --> "drink whisky"
*/
/*
function peopleWithAgeDrink(old) {
  return old < 14
    ? "drink toddy"
    : old < 18
    ? "drink coke"
    : old < 21
    ? "drink beer"
    : "drink whisky";
}

// function getGrade (s1, s2, s3) {
//   var s = (s1 + s2 + s3) / 3
//   return s >= 90 ? "A" : s >= 80 ? "B" : s >= 70 ? "C" : s >= 60 ? "D" : "F"
// }

console.log(peopleWithAgeDrink(22));
*/
/*
function binToDec(bin) {
  return parseInt(bin, 2);
}
*/

// #9

/*
Write a function get_char() / getChar() which takes a number and returns the corresponding ASCII char for that value.
Example:
get_char(65)
should return:
'A'
*/
/*
function getChar(c) {
  return String.fromCharCode(c);
}

console.log(getChar(55));
*/

// #10

/*
There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.
You receive an array with your peers' test scores. Now calculate the average and compare your score!
Return True if you're better, else False!
Note:
Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!
*/
/*
function betterThanAverage(classPoints, yourPoints) {
  const sum = classPoints.reduce((a, b) => a + b, 0 / classPoints.length);
  const avg = (sum + yourPoints) / (classPoints.length + 1);
  return yourPoints > avg;
}

console.log(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50));
*/

// #11
/*
There is an array with some numbers. All numbers are equal except for one. Try to find it!
findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.
The tests contain some very huge arrays, so think about performance.
*/

/*
function findUniq(arr) {
  return arr.filter(
    (val, ind, self) => self.indexOf(val) === self.lastIndexOf(val)
  )[0];
}
//  return arr.filter((value, index, self) => self.indexOf(value) === self.lastIndexOf(value))[0];
console.log(findUniq([1, 1, 1, 2, 1, 1]));
*/

// 02.05
// #1
/*
What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?
Example(Input --> Output)
"apple ban" --> ["apple 5", "ban 3"]
"you will win" -->["you 3", "will 4", "win 3"]
Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element.
Note: String will have at least one element; words will always be separated by a space.
*/
/*
function addLength(str) {
  let newStr = str.split(" ");
  let newArr = [];
  let space = " ";
  console.log(newStr);
  for (let i = 0; i < newStr.length; i++) {
    y = newStr[i] + space + newStr[i].length;
    newArr.push(y);
  }
  return newArr;
}

// function addLength(str){
//   return str.split(" ").map(s => `${s} ${s.length}`)
// }

console.log(addLength("you will win"));
*/

// #2

/*
In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.
The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...
Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.
You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.
The string has a length greater or equal to one and contains only letters from ato z.
Examples:
s="aaabbbbhaijjjm"
printer_error(s) => "0/14"
s="aaaxbbbbyyhwawiwjjjwwm"
printer_error(s) => "8/22"
*/
/*
function printerError(s) {
  const regex = /[a-m]/gi;
  const matches = s.match(regex);
  const errors = s.length - matches.length;
  const result = `${errors}/${s.length}`;
  return result;
}

console.log(
  printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz")
);
*/

// #3
/*
Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).
Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).
Examples:
* With `name` = "john"  => return "Hello, John!"
* With `name` = "aliCE" => return "Hello, Alice!"
* With `name` not given 
  or `name` = ""        => return "Hello, World!"
*/
/*
function hello(name) {
  return name
    ? `Hello, ${name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}!`
    : "Hello, World!";
}

console.log(hello(""));
/*

// #4
/*
Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:
expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.
If you liked this kata, check out part 2!!
*/
/*
function expandedForm(num) {
  let digits = String(num).split("");
  let result = [];
  for (let i = 0; i < digits.length; i++) {
    let digit = Number(digits[i]);
    let place = Math.pow(10, digits.length - i - 1);
    if (digit !== 0) {
      result.push(digit * place);
    }
  }
  return result.join(" + ");
}

// Better solution
// const expandedForm = n => n.toString()
//                             .split("")
//                             .reverse()
//                             .map( (a, i) => a * Math.pow(10, i))
//                             .filter(a => a > 0)
//                             .reverse()
//                             .join(" + ");
console.log(expandedForm(70333));

*/
// #5
/*
Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.
If no occurrences can be found, a count of 0 should be returned.
("Hello", "o")  ==>  1
("Hello", "l")  ==>  2
("", "z")       ==>  0
str_count("Hello", 'o'); // returns 1
str_count("Hello", 'l'); // returns 2
str_count("", 'z'); // returns 0
Notes
    The first argument can be an empty string
    In languages with no distinct character data type, the second argument will be a string of length 1
*/
/*
function strCount(str, letter) {
  const regex = new RegExp(letter, "g");
  const matches = str.match(regex);
  return matches ? matches.length : 0;
}

console.log(strCount("", "z"));
/*

// #6 
/*
The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.
The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).
If the score < 0, return 0.
For example:
checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0
*/
/*
function checkExam(array1, array2) {
  let count = 0;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      count += 4;
    } else if (array2[i] === "") {
      count += 0;
    } else {
      count -= 1;
    }
  }
  return count >= 0 ? count : 0;
}

console.log(
  checkExam(
    ["c", "a", "a", "c", "b", "c", "b"],
    ["b", "a", "", "", "a", "", ""]
  )
);
*/

// 22.05
// #1
/*
Create a function with two arguments that will return an array of the first n multiples of x.

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array or list ( depending on language ).
Examples

countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]
*/
/*
function countBy(x, n) {
  let z = [];
  for (let i = 1; i <= n; i++) {
    z.push(i * x);
  }
  return z;
}
console.log(countBy(2, 5));
*/

// #2

/*
Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

Examples:

Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11

However, the arrays can have varying lengths, not just limited to 4.

*/
/*
function binaryArrayToNumber(arr) {
  let decimal = arr.join("");
  return parseInt(decimal, 2);
}

console.log(binaryArrayToNumber([0, 0, 0, 1]));
*/

// #3
/*
Task
In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 
Rules
 1.  The input string will always be lower case but maybe empty.
 2.  If the character in the string is whitespace then pass over it as if it was an empty seat
Example
wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
 */
/*
function wave(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      continue;
    }
    let waveStr = str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1);
    result.push(waveStr);
  }
  return result;
}

console.log(wave("hello"));
*/

// #4
/*
Define a function that removes duplicates from an array of numbers and returns it as a result.

The order of the sequence has to stay the same.

*/
/*
function distinct(a) {
  let set = new Set(a);
  return [...set];
}

console.log(distinct([1, 1, 2]));
*/

// 23.05

// #1
/*
Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.
*/
/*
function take(arr, n) {
  return arr.slice(0, n);
}

console.log(take([0, 1, 2, 3, 5, 8, 13], 3));
*/

// #2
/*
The number 898989 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number: 89=81+9289 = 8^1 + 9^289=81+92
The next number in having this property is 135135135:
See this property again: 135=11+32+53135 = 1^1 + 3^2 + 5^3135=11+32+53
Task
We need a function to collect these numbers, that may receive two integers aaa, bbb that defines the range [a,b][a, b][a,b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.
Examples
Let's see some cases (input -> output):
1, 10  --> [1, 2, 3, 4, 5, 6, 7, 8, 9]
1, 100 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
*/
/*
function sumDigPow(a, b) {
  let result = [];
  for (let num = a; num <= b; num++) {
    let dig = num.toString().slice("");
    let sum = 0;

    for (let i = 0; i < dig.length; i++) {
      sum += Math.pow(parseInt(dig[i]), i + 1);
    }
    if (sum === num) {
      result.push(num);
    }
  }
  return result;
}

console.log(sumDigPow(1, 100));
*/

// #3

/*
Your task is to write a function which returns the sum of a sequence of integers.
The sequence is defined by 3 non-negative values: begin, end, step.
If begin value is greater than the end, your function should return 0. If end is not the result of an integer number of steps, then don't add it to the sum. See the 4th example below.
Examples
2,2,2 --> 2
2,6,2 --> 12 (2 + 4 + 6)
1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
1,5,3  --> 5 (1 + 4)
*/
/*
const sequenceSum = (begin, end, step) => {
  if (begin > end) {
    return 0;
  }
  let sum = 0;
  for (let i = begin; i <= end; i += step) {
    sum += i;
  }
  return sum;
};

console.log(sequenceSum(1, 5, 1));
*/

// #4

/*
In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.
Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of type throw a RangeError (JavaScript).
More details about factorial can be found here.
*/
/*
function factorial(n) {
  if (n < 0 || n > 12) {
    throw new RangeError("Input is out of range.");
  }

  if (n === 0) {
    return 1;
  }

  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
}

console.log(factorial(5));
*/

// #5

/*
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
It should remove all values from list a, which are present in list b keeping their order.
arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:
arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/
/*
function arrayDiff(a, b) {
  return a.filter((el) => !b.includes(el));
}

console.log(arrayDiff([1, 2, 2, 2, 3], [2]));
*/

// #5
/*
Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.
*/
/*
function include(arr, item) {
  return arr.includes(item) ? true : false;
}

console.log(include([1, 2, 2, 4], 3));
*/

// #6
/*
Write a function that returns a string in which firstname is swapped with last name.
Example(Input --> Output)
"john McClane" --> "McClane john"
*/
/*
function nameShuffler(str) {
  // let newstr = str.split(" ");
  // return `"${newstr[1]} ${newstr[0]}"`;
  const [firstName, lastName] = str.split(" ");
  return `${lastName} ${firstName}`;
}

console.log(nameShuffler("Mary jeggins"));
*/

// #7
/*
This time no story, no theory. The examples below show you how to write function accum:
Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/
/*
function accum(s) {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    let letter = s[i].toUpperCase();
    result += letter + letter.toLowerCase().repeat(i) + "-";
  }
  return result.slice(0, -1);
}

console.log(accum("ZpglnRxqenU"));
*/

// #8
/*
Your task is to write function factorial.
*/
/*
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(4));
*/

// 05.06.2023

/*
Implement a function which convert the given boolean value into its string representation.
Note: Only valid inputs will be given.
*/

// #1
/*
function booleanToString(b) {
  return b.toString();
}

console.log(booleanToString(true));
*/
// #2

/*
Some numbers have funny properties. For example:
    89 --> 8¹ + 9² = 89 * 1
    695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
    46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p
    we want to find a positive integer k, if it exists, such that the sum of the digits of n taken to the successive powers of p is equal to k * n.
In other words:
    Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k
If it is the case we will return k, if not return -1.
Note: n and p will always be given as strictly positive integers.
digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
digPow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
digPow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
digPow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
*/
/*
function digPow(n, p) {
  const digits = String(n).split("");
  let sum = 0;
  for (let i = 0; i < digits.length; i++) {
    sum += digits[i] ** (p + i);
  }
  if (sum % n === 0) {
    return sum / n;
  } else {
    return -1;
  }
}

console.log(digPow(46288, 3));
*/

// #3

/*
Complete the function that receives as input a string, and produces outputs according to the following table:
Input 	Output
"Jabroni" |	"Patron Tequila"
"School Counselor" |	"Anything with Alcohol"
"Programmer" |	"Hipster Craft Beer"
"Bike Gang Member" |	"Moonshine"
"Politician" |	"Your tax dollars"
"Rapper" |	"Cristal"
anything else 	"Beer"
Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".
Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".
*/
/*
function getDrinkByProfession(param) {
  let par = param.toLowerCase();
  switch (par) {
    case "jabroni":
      return "Patron Tequila";
    case "school counselor":
      return "Anything with Alcohol";
    case "programmer":
      return "Hipster Craft Beer";
    case "bike gang member":
      return "Moonshine";
    case "politician":
      return "Your tax dollars";
    case "rapper":
      return "Cristal";
  }
  return "Beer";
}
/*
console.log(getDrinkByProfession("bike ganG member"));

/*
SECOND SOLUTION
const drinks = {
  "jabroni": "Patron Tequila",
  "school counselor": "Anything with Alcohol",
  "programmer": "Hipster Craft Beer",
  "bike gang member": "Moonshine",
  "politician": "Your tax dollars",
  "rapper": "Cristal"
}
const getDrinkByProfession = profession => drinks[profession.toLowerCase()] || "Beer"
*/

// #4

/*
Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.
to_binary(1)  / should return 1 
to_binary(5)  / should return 101 
to_binary(11) / should return 1011 

Example:

toBinary(1)  / should return 1 
toBinary(5)  / should return 101 
toBinary(11) / should return 1011 
*/
/*
function toBinary(n) {
  return +n.toString(2);
}

console.log(toBinary(1));
*/

// #5
/*
Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2.
*/
/*
function angle(n) {
  return 180 * (n - 2);
}

console.log(angle(4));
*/
// #6
/*
*** No Loops Allowed ***
You will be given an array a and a value x. All you need to do is check whether the provided array contains the value, without using a loop.
Array can contain numbers or strings. x can be either. Return true if the array contains the value, false if not. With strings you will need to account for case.
*/
/*
function check(a, x) {
  return a.includes(x, 0);
}

console.log(check([66, 101], 66));
*/

// #7
/*
Given a string of words, you need to find the highest scoring word.
Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
For example, the score of abad is 8 (1 + 2 + 1 + 4).
You need to return the highest scoring word as a string.
If two words score the same, return the word that appears earliest in the original string.
All letters will be lowercase and all inputs will be valid.
*/
/*
function high(x) {
  const words = x.split(" ");

  const maxWord = words.reduce((maxWord, word) => {
    const score = word.split("").reduce((total, letter) => {
      return total + (letter.charCodeAt(0) - 96);
    }, 0);

    if (score > (maxWord.score || 0)) {
      return { word, score };
    } else {
      return maxWord;
    }
  }, {});
  return maxWord.word || "";
}

console.log(high("Man i need a taxi up to ubud"));
*/

// #8
/*
Description:
You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:
    Your message is a string containing space separated words.
    You need to encrypt each word in the message using the following rules:
        The first letter must be converted to its ASCII code.
        The second letter must be switched with the last letter
    Keepin' it simple: There are no special characters in the input.
Examples:
encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"
*/
/*
const encryptThis = (text) =>
  text
    .split(" ")
    .map((word) =>
      word
        .replace(/(^\w)(\w)(\w*)(\w$)/, `$1$4$3$2`)
        .replace(/^\w/, word.charCodeAt(0))
    )
    .join(" ");

console.log(encryptThis("A wise old owl lived in an oak"));
*/

// #9
/*
Write a function that always returns 5
Sounds easy right? Just bear in mind that you can't use any of the following characters: 0123456789*+-/
*/
/*
function unusualFive(str) {
  str = "Plane";
  return str.length;
}

console.log(unusualFive());
*/

// #10

/*
We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.
    You only need to worry about english grammar rules for this kata, where anything that isn't singular (one of something), it is plural (not one of something).
All values will be positive integers or floats, or zero.
*/
/*
function plural(n) {
  return n !== 1;
}

console.log(plural(0));
*/

// #11
/*
Create a method sayHello/say_hello/SayHello that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.
Example:
sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')
This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!
*/
/*
function sayHello(name, city, state) {
  const fullName = name.join(" ");
  return `Hello, ${fullName}! Welcome to ${city}, ${state}!`;
}

console.log(sayHello(["Wallace", "Russel", "Osbourne"], "Phoenix", "Arizona"));
*/

// #12
/*
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/
/*
function isPangram(string) {
  const letter = string
    .toLowerCase()
    .replace(/[^a-z]/g, "")
    .split("");
  console.log(letter);
  const unique = [...new Set(letter)];
  console.log(unique);
  if (unique.length === 26) {
    return true;
  } else {
    return false;
  }
}

console.log(isPangram("This is not a pangram."));
*/

// #13
/*
Input: Array of elements
["h","o","l","a"]
Output: String with comma delimited elements of the array in th same order.
"h,o,l,a"
*/
/*
function printArray(array) {
  return array.join(",");
}

console.log(printArray(["h", "o", "l", "a"]));
*/

// #14
/*
Your task is to create a function that does four basic mathematical operations.
The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.
Examples(Operator, value1, value2) --> output
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7
*/
/*
function basicOp(operation, value1, value2) {
  switch (operation) {
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    case "/":
      return value1 / value2;
  }
}

console.log(basicOp("+", 4, 7));
*/

// #15
/*
Given a list of integers, determine whether the sum of its elements is odd or even.
Give your answer as a string matching "odd" or "even".
If the input array is empty consider it as: [0] (array with a zero).
Examples:
Input: [0]
Output: "even"
Input: [0, 1, 4]
Output: "odd"
Input: [0, -1, -5]
Output: "even"
Have fun!
*/
/*
function oddOrEven(array) {
  if (array.length === 0) {
    return "even";
  } else {
    return array.reduce((acc, el) => acc + el, 0) % 2 === 0 ? "even" : "odd";
  }
}

console.log(oddOrEven([0]));
*/

// #16

/*
JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.
The solution would work like the following:
getEvenNumbers([2,4,5,6]) // should == [2,4,6]
*/
/*
function getEvenNumbers(numbersArray) {
  return numbersArray.filter((el) => el % 2 === 0);
}

console.log(getEvenNumbers([12, 14, 15]));
*/

// #17
/*
You need to write regex that will validate a password to make sure it meets the following criteria:
    At least six characters long
    contains a lowercase letter
    contains an uppercase letter
    contains a digit
    only contains alphanumeric characters (note that '_' is not alphanumeric)
*/
/*
const REGEXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
*/

// #18

/*
You might know some pretty large perfect squares. But what about the NEXT one?
Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.
Examples:(Input --> Output)
121 --> 144
625 --> 676
114 --> -1 since 114 is not a perfect square
*/
/*
function findNextSquare(sq) {
  let result = Math.pow(Math.sqrt(sq) + 1, 2);
  if (Number.isInteger(result)) {
    return result;
  } else {
    return -1;
  }
}

console.log(findNextSquare(114));
*/

// #19
/*
You are given a string containing a sequence of character sequences separated by commas.
Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.
If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).
Examples
"1,2,3"      =>  "2"
"1,2,3,4"    =>  "2 3"
"1,2,3,4,5"  =>  "2 3 4"
""     =>  NULL
"1"    =>  NULL
"1,2"  =>  NULL
*/
/*
function array(string) {
  let result = string.split(",");
  console.log(result);
  if (result.length < 3) {
    return null;
  } else {
    return result.slice(1, -1).join(" ");
  }
}

console.log(array("A1,B2,C3,D4,E5"));
*/

// 06.06.2023

// #1
/*
If　a = 1, b = 2, c = 3 ... z = 26
Then l + o + v + e = 54
and f + r + i + e + n + d + s + h + i + p = 108
So friendship is twice as strong as love :-)
Your task is to write a function which calculates the value of a word based off the sum of the alphabet positions of its characters.
The input will always be made of only lowercase letters and will never be empty.
*/
/*
function wordsToMarks(string) {
  const str = string.split("");
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += string[i].charCodeAt(0) - 96;
  }
  return sum;
}

console.log(wordsToMarks("friends"));
*/

// #2
/*
Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.
For Example:
[ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
, [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
, [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
]
So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.
Note: You will always be given a non-empty list containing positive values.
ENJOY CODING :)
*/
/*
function sumOfMinimums(arr) {
  let sum = 0;
  let sorted = arr.map((arr) => arr.sort((a, b) => a - b));
  for (let i = 0; i < sorted.length; i++) {
    sum += sorted[i][0];
  }
  return sum;
}

console.log(
  sumOfMinimums([
    [1, 2, 3, 4, 5],
    [5, 6, 7, 8, 9],
    [20, 21, 34, 56, 100],
  ])
);
*/

// #3
/*
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.
Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
*/
/*
function rot13(message) {
  let arr = message.split("");
  let rot = arr.map((char) => {
    const charCode = char.charCodeAt(0);
    if (char >= "A" && char <= "Z") {
      return String.fromCharCode(((charCode - 65 + 13) % 26) + 65);
    } else if (char >= "a" && char <= "z") {
      return String.fromCharCode(((charCode - 97 + 13) % 26) + 97);
    } else {
      return char;
    }
  });
  return rot.join("");
}

console.log(rot13("friends"));
*/

// #4
/*
Each number should be formatted that it is rounded to two decimal places. You don't need to check whether the input is a valid number because only valid numbers are used in the tests.
Example:    
5.5589 is rounded 5.56   
3.3424 is rounded 3.34
*/
/*
function twoDecimalPlaces(num) {
  return Math.round(num * 100) / 100;
}

console.log(twoDecimalPlaces(110.09));
*/

// #5
/*
The purpose of this kata is to work out just how many bottles of duty free whiskey you would have to buy such that the saving over the normal high street price would effectively cover the cost of your holiday.
You will be given the high street price (normPrice), the duty free discount (discount) and the cost of the holiday.
For example, if a bottle cost £10 normally and the discount in duty free was 10%, you would save £1 per bottle. If your holiday cost £500, the answer you should return would be 500.
All inputs will be integers. Please return an integer. Round down.
*/
/*
function dutyFree(normPrice, discount, hol) {
  return Math.floor(hol / (normPrice * (discount / 100)));
}

console.log(dutyFree(12, 50, 1000));
*/

// #6
/*
Complete the function which returns the weekday according to the input number:
    1 returns "Sunday"
    2 returns "Monday"
    3 returns "Tuesday"
    4 returns "Wednesday"
    5 returns "Thursday"
    6 returns "Friday"
    7 returns "Saturday"
    Otherwise returns "Wrong, please enter a number between 1 and 7"
*/
/*
function whatday(num) {
  if (num < 1 || num > 7) {
    return "Wrong, please enter a number between 1 and 7";
  } else {
    switch (num) {
      case 1:
        return "Sunday";
      case 2:
        return "Monday";
      case 3:
        return "Tuesday";
      case 4:
        return "Wednesday";
      case 5:
        return "Thursday";
      case 6:
        return "Friday";
      case 7:
        return "Saturday";
    }
  }
}
console.log(whatday(1));
*/

// #7
/*
Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
Some cases:
[22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
[68, -1, 1, -7, 10, 10] => [-1, 10]
[-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68]
*/
/*
function multipleOfIndex(array) {
  return array.filter((el, index) => el % index === 0);
}
console.log(multipleOfIndex([22, -6, 32, 82, 9, 25]));
*/

// #8
/*
Sentence Smash
Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
Example
['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
*/
/*
function smash(words) {
  return words.join(" ");
}

console.log(smash(["hello", "world", "this", "is", "great"]));
*/

// #9
/*
Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.
Examples (Input -> Output)
* [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
* [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
* [42, 54, 65, 87, 0]             -> min = 0, max = 87
* [5]                             -> min = 5, max = 5
*/
/*
var min = function (list) {
  return Math.min(...list);
};

var max = function (list) {
  return Math.max(...list);
};
*/

// #10
/*
Your task is to find the nearest square number, nearest_sq(n) or nearestSq(n), of a positive integer n.
For example, if n = 111, then nearest\_sq(n) (nearestSq(n)) equals 121, since 111 is closer to 121, the square of 11, than 100, the square of 10.
If the n is already the perfect square (e.g. n = 144, n = 81, etc.), you need to just return n.
*/
/*
function nearestSq(n) {
  const sqrt = Math.sqrt(n);
  const lowSqrt = Math.floor(sqrt) ** 2;
  const highSqrt = Math.ceil(sqrt) ** 2;

  if (n - lowSqrt <= highSqrt - n) {
    return lowSqrt;
  } else {
    return highSqrt;
  }
}

console.log(nearestSq(111));
console.log(nearestSq(100));
*/

// #11
/*
Your task is to sum the differences between consecutive pairs in the array in descending order.
Example
[2, 1, 10]  -->  9
In descending order: [10, 2, 1]
Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9
*/
/*
function sumOfDifferences(arr) {
  let sum = 0;
  let sorted = arr.sort((a, b) => b - a);
  console.log(arr);
  for (let i = 0; i < sorted.length - 1; i++) {
    let difference = sorted[i] - sorted[i + 1];
    sum += difference;
  }
  return sum;
}

console.log(sumOfDifferences([1, 2, 10]));
*/

// #12
/*
When provided with a letter, return its position in the alphabet.
Input :: "a"
Ouput :: "Position of alphabet: 1"
*/
/*
function position(letter) {
  return `Position of alphabet: ${letter.charCodeAt(0) - 96}`;
}

console.log(position("z"));
*/
// #13
/*
Create a function that converts US dollars (USD) to Chinese Yuan (CNY) . The input is the amount of USD as an integer, and the output should be a string that states the amount of Yuan followed by 'Chinese Yuan'
Examples (Input -> Output)
15  -> '101.25 Chinese Yuan'
465 -> '3138.75 Chinese Yuan'
The conversion rate you should use is 6.75 CNY for every 1 USD. All numbers should be represented as a string with 2 decimal places. (e.g. "21.00" NOT "21.0" or "21")
*/
/*
function usdcny(usd) {
  return `${(usd * 6.75).toFixed(2)} Chinese Yuan`;
}

console.log(usdcny(465));
*/

// #14
/*
As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.
The input to the function will be an array of three distinct numbers
For example:
gimme([2, 3, 1]) => 0
2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.
Another example (just to make sure it is clear):
gimme([5, 10, 14]) => 1
10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.
*/
/*
function gimme(triplet) {
  const sorted = triplet
    .map((el, ind) => ind)
    .sort((a, b) => triplet[a] - triplet[b]);
  return sorted[1];
}

console.log(gimme([5, 10, 14]));
*/

// #15
/*
After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.
You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.
Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
Write a code that gives out the total amount for different days(d).
*/
/*
function rentalCarCost(d) {
  if (d >= 7) {
    return d * 40 - 50;
  }
  if (d >= 3 && d < 7) {
    return d * 40 - 20;
  }
  if (d < 3) {
    return d * 40;
  }
}

console.log(rentalCarCost(1));
*/

// #16

/*
 Find the sum of all multiples of n below m
Keep in Mind
    n and m are natural numbers (positive integers)
    m is excluded from the multiples
Examples
sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
sumMul(4, -7)  ==> "INVALID"
*/
/*
function sumMul(n, m) {
  if (n <= 0 || m <= 0) {
    return "INVALID";
  }

  let sum = 0;
  for (let i = n; i < m; i += n) {
    sum += i;
  }
  return sum;
}

console.log(sumMul(2, 9));
*/

// 07.06.06

// #1
/*
Write a small function that returns the values of an array that are not odd.
All values in the array will be integers. Return the good values in the order they are given.
*/
/*
function noOdds(values) {
  return values.filter((el) => el % 2 === 0);
}

console.log(noOdds([0, 1, 2, 3]));
*/

// #2
/*
Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.
Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );
*/
/*
var capitals = function (word) {
  let letter = word.split("");
  let res = [];
  for (let i = 0; i < letter.length; i++) {
    if (letter[i] === letter[i].toUpperCase()) {
      res.push(i);
    }
  }
  return res;
};

console.log(capitals("CodEWaRs"));
*/
// #3
/*
We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).
So given a string "super", we should return a list of [2, 4].
Some examples:
Mmmm  => []
Super => [2,4]
Apple => [1,5]
YoMama -> [1,2,4,6]
NOTES
    Vowels in this context refers to: a e i o u y (including upper case)
    This is indexed from [1..n] (not zero indexed!)
*/
function vowelIndices(word) {
  let result = [];
  let string = word.split("");
  for (let i = 0; i < string.length; i++) {
    if (/[aeiouy]/i.test(string[i])) {
      result.push(i + 1);
    }
  }
  return result;
}

console.log(vowelIndices("supercalifragilisticexpialidocious"));
