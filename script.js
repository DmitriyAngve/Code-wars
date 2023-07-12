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
/*
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
*/

// #4
/*
You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers
Your function will accept three arguments:
The first and second argument should be numbers.
The third argument should represent a sign indicating the operation to perform on these two numbers.
if the variables are not numbers or the sign does not belong to the list above a message "unknown value" must be returned.
Example:
calculator(1,2,"+"); //=> result will be 3
calculator(1,2,"&"); //=> result will be "unknown value"
calculator(1,"k","*"); //=> result will be "unknown value"
*/
/*
function calculator(a, b, sign) {
  if (typeof a === "number" && typeof b === "number") {
    switch (sign) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "/":
        return a / b;
      case "*":
        return a * b;
    }
  }
  return "unknown value";
}

console.log(calculator(1, 2, "+"));
*/

// #5
/*
Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.
Rules for a smiling face:
    Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
    A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
    Every smiling face must have a smiling mouth that should be marked with either ) or D
No additional characters are allowed except for those mentioned.
Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]
Example
countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
Note
In case of an empty array return 0. You will not be tested with inval
*/
/*
function countSmileys(arr) {
  const validSmileys = [
    ":)",
    ":D",
    ";)",
    ";D",
    ":-)",
    ":-D",
    ";-)",
    ";-D",
    ":~)",
    ":~D",
    ";~)",
    ";~D",
  ];
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (validSmileys.includes(arr[i])) {
      count++;
    }
  }

  return count;
}
console.log(countSmileys([":D", ":~)", ";~D", ":)"]));
*/

// #6
/*
Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.
For example:
([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]
*/
// FIRST SOL
/*
function evenNumbers(array, number) {
  let result = [];
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] % 2 === 0) {
      result.unshift(array[i]);
    }
    if (result.length === number) {
      break;
    }
  }
  return result;
}

console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
*/
// SEC SOL
/*
const evenNumbers = (array, number) =>
  array.filter((item) => item % 2 === 0).slice(-number);
console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
*/

// #7
/*
Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".
*/
/*
function problem(x) {
  return typeof x === "number" ? x * 50 + 6 : "Error";
}

console.log(problem("hello"));
*/

// #8
/*
Complete the function which converts hex number (given as a string) to a decimal number.
*/
/*
function hexToDec(hexString) {
  return parseInt(hexString, 16);
}

console.log(hexToDec("a"));
*/

// #9
/*
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.
Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:
[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
Note: For 4 or more names, the number in "and 2 others" simply increases.
*/
/*
function likes(names) {
  let length = names.length;

  switch (length) {
    case 0:
      return "no one likes this";
    case 1:
      return `${names[0]} likes this`;
    case 2:
      return `${names[0]} and ${names[1]} like this`;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    default:
      return `${names[0]}, ${names[1]} and ${length - 2} others like this`;
  }
}

console.log(likes(["Alex", "Jacob", "Mark", "Max"]));
*/

// #10
/*
Your task, is to create N×N multiplication table, of size provided in parameter.
For example, when given size is 3:
1 2 3
2 4 6
3 6 9
For the given example, the return value should be:
[[1,2,3],[2,4,6],[3,6,9]]
*/
/*
multiplicationTable = function (size) {
  const table = [];
  for (let i = 1; i <= size; i++) {
    const row = [];

    for (let j = 1; j <= size; j++) {
      row.push(i * j);
    }
    table.push(row);
  }
  return table;
};

console.log(multiplicationTable(3));
*/

// #11
/*
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"
*/
// First Sol
/*
function domainName(url) {
  const domainRegex =
    /^(?:https?:\/\/)?(?:www\.)?([^:/\n?.]+)(?:\.[a-z]{2,})?/i;
  const match = url.match(domainRegex);

  if (match && match[1]) {
    return match[1];
  }

  return ""; // If domain is not found
}

console.log(domainName("http://github.com/carbonfive/raygun"));
*/
// Sec sol
/*
function domainName(url) {
  url = url.replace("http://", "");
  url = url.replace("https://", "");
  url = url.replace("www", "");
  return url.split(".")[0];
}
console.log(domainName("http://github.com/carbonfive/raygun"));
*/

// 08.06.2023

// #1
/*
Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.
Example:
"riley" --> "Hello Riley!"
"JACK"  --> "Hello Jack!"
*/
/*
var greet = function (name) {
  let result = name.toLowerCase();
  return `Hello ${result.charAt(0).toUpperCase() + result.slice(1)}!`;
};

console.log(greet("JACK"));
/

// #2
/*
Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.
For example, if this array were passed as an argument:
["Telescopes", "Glasses", "Eyes", "Monocles"]
Your function would return the following array:
["Eyes", "Glasses", "Monocles", "Telescopes"]
All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.
*/
/*
function sortByLength(array) {
  return array.sort((a, b) => a.length - b.length);
}

console.log(sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"]));
*/

// #3
/*
Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.
Division by zero should return NaN.
Examples:
n = 17
m = 5
result = 2 (remainder of `17 / 5`)
n = 13
m = 72
result = 7 (remainder of `72 / 13`)
n = 0
m = -1
result = 0 (remainder of `0 / -1`)
n = 0
m = 1
result - division by zero (refer to the specifications on how to handle this in your language)
*/
/*
function remainder(n, m) {
  return n > m ? n % m : m % n;
}
console.log(remainder(17, 5));
*/

// #4
/*
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result. 
Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""
*/
/*
function order(words) {
  return words
    .split(" ")
    .sort((a, b) => {
      return a.match(/\d/) - b.match(/\d/);
    })
    .join(" ");
}

console.log(order("is2 Thi1s T4est 3a"));
*/

// #5
/*
Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"
a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/
/*
function longest(s1, s2) {
  const combine = s1 + s2;
  const unique = [...new Set(combine)];
  return unique.sort().join("");
}

console.log(longest("aretheyhere", "yestheyarehere"));
*/

// #6
/*
You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.
You can assume all values in the array are numbers.
*/
/*
function smallEnough(a, limit) {
  return a.every((el) => el <= limit);
}

console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100));
*/

// #7
/*
Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".
The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.
Upper or lower case letter does not matter -- "eNglisH" is also correct.
Return value as boolean values, true for the string to contains "English", false for it does not.
*/
/*
function spEng(str) {
  const regex = /english/i;
  return regex.test(str);
}

console.log(spEng("egnlish"));

*/

// #8
/*
Find the mean (average) of a list of numbers in an array.
Information
To find the mean (average) of a set of numbers add all of the numbers together and divide by the number of values in the list.
For an example list of 1, 3, 5, 7
1. Add all of the numbers
1+3+5+7 = 16
2. Divide by the number of values in the list. In this example there are 4 numbers in the list.
16/4 = 4
3. The mean (or average) of this list is 4
*/
/*
var findAverage = function (nums) {
  return nums.reduce((a, b) => a + b, 0) / nums.length;
};
console.log(findAverage([1, 3, 5, 7]));
*/

// #9
/*
Write a function that returns the total surface area and volume of a box as an array: [area, volume]
*/
/*

function getSize(width, height, depth) {
  const first = 2 * (depth * width + depth * height + width * height);
  const second = width * height * depth;
  return [first, second];
}
console.log(getSize(4, 2, 6));
*/

// #10
/*
Your task is simply to count the total number of lowercase letters in a string.
Examples
lowercaseCount("abc"); ===> 3
lowercaseCount("abcABC123"); ===> 3
lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 3
lowercaseCount(""); ===> 0;
lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 0
lowercaseCount("abcdefghijklmnopqrstuvwxyz"); ===> 26
*/
/*
function lowercaseCount(str) {
  const lower = str.split("");
  let sum = 0;
  for (let i = 0; i < lower.length; i++) {
    if (lower[i].toLowerCase() === lower[i]) {
      sum++;
    }
  }
  return sum;
}

console.log(lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|':;?/>.<,~"));
*/

// #11
/*
Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.
Examples
remove("Hi!") === "Hi!"
remove("Hi!!!") === "Hi!"
remove("!Hi") === "Hi!"
remove("!Hi!") === "Hi!"
remove("Hi! Hi!") === "Hi Hi!"
remove("Hi") === "Hi!"
*/
/*
const remove = (s) => s.replace(/!/g, "") + "!";

console.log(remove("!Hi!!!"));
*/

// #12
/*
This function takes two numbers as parameters, the first number being the coefficient, and the second number being the exponent.
Your function should multiply the two numbers, and then subtract 1 from the exponent. Then, it has to return an expression (like 28x^7). "^1" should not be truncated when exponent = 2.
For example:
derive(7, 8)
In this case, the function should multiply 7 and 8, and then subtract 1 from 8. It should output "56x^7", the first number 56 being the product of the two numbers, and the second number being the exponent minus 1.
derive(7, 8) --> this should output "56x^7" 
derive(5, 9) --> this should output "45x^8" 
Notes:
    The output of this function should be a string
    The exponent will never be 1, and neither number will ever be 0
*/
/*
function derive(coefficient, exponent) {
  return `${coefficient * exponent}x^${exponent - 1}`;
}
console.log(derive(5, 9));
*/

// #13
/*
Build Tower
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.
For example, a tower with 3 floors looks like this:
[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:
[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
*/
/*
function towerBuilder(nFloors) {
  const tower = [];
  const maxWidth = nFloors * 2 - 1;

  for (let i = 1; i <= nFloors; i++) {
    const currentWidth = i * 2 - 1;
    const spaces = " ".repeat((maxWidth - currentWidth) / 2);
    const level = spaces + "*".repeat(currentWidth) + spaces;
    tower.push(level);
  }
  return tower;
}
console.log(towerBuilder(3));
*/

// #14
/*
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.
For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.
The input will be a lowercase string with no spaces.
*/
/*
function capitalize(s) {
  let even = "";
  let odd = "";
  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      even += s[i].toUpperCase();
      odd += s[i];
    } else {
      even += s[i];
      odd += s[i].toUpperCase();
    }
  }
  return [even, odd];
}

console.log(capitalize("mfwopimfwep!"));
*/

// #15

/*
You get any card as an argument. Your task is to return the suit of this card (in lowercase).
Our deck (is preloaded):
('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades'
*/
/*
function defineSuit(card) {
  let suit = card.split("");
  // console.log(suit);
  switch (suit[suit.length - 1]) {
    case "♣":
      return "clubs";
    case "♦":
      return "diamonds";
    case "♥":
      return "hearts";
    case "♠":
      return "spades";
  }
}

console.log(defineSuit("3♣"));
console.log(defineSuit("3♦"));
console.log(defineSuit("3♥"));
console.log(defineSuit("3♠"));
*/

// #16
/*
My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!
In honor of my grandfather's memory we will write a function using his formula!
    Take a list of ages when each of your great-grandparent died.
    Multiply each number by itself.
    Add them all together.
    Take the square root of the result.
    Divide by two.
Example
predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86
Note: the result should be rounded down to the nearest integer.
Some random tests might fail due to a bug in the JavaScript implementation. Simply resubmit if that happens to you.
*/
/*
function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
  let array = [age1, age2, age3, age4, age5, age6, age7, age8];
  let result = array.reduce((acc, age) => acc + age * age, 0);
  return Math.floor(Math.sqrt(result) / 2);
}

console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45));
*/

// 17.06
/*
You're re-designing a blog, and the blog's posts have the Weekday Month Day, time format for showing the date and time when a post was made, e.g., Friday May 2, 7pm.
You're running out of screen real estate, and on some pages you want to display a shorter format, Weekday Month Day that omits the time.
Write a function that takes the website date/time in its original string format and returns the shortened format.
Input
Input will always be a string, e.g., "Friday May 2, 7pm". 
Output
Output will be the shortened string, e.g., "Friday May 2".
*/

// 19.06.2023

// #1
/*
An AI has infected a text with a character!!
This text is now fully mutated to this character.
If the text or the character are empty, return an empty string.
There will never be a case when both are empty as nothing is going on!!
Note: The character is a string of length 1 or an empty string.
Example
text before = "abc"
character   = "z"
text after  = "zzz"
*/
/*
function contamination(text, char) {
  if (text === "") {
    return "";
  } else {
    const arr = text.split("");
    console.log(arr);
    const replacer = arr.map(() => char);
    return replacer.join("");
  }
}
console.log(contamination("abc", "z"));
*/

// #2
/*
Create a function called _if which takes 3 arguments: a value bool and 2 functions (which do not take any parameters): func1 and func2
When bool is truthy, func1 should be called, otherwise call the func2.
Example:
_if(true, function(){console.log("True")}, function(){console.log("false")})
// Logs 'True' to the console.
}
*/
/*
function _if(bool, func1, func2) {
  if (bool) {
    func1();
  } else {
    func2();
  }
}
*/

// #3
/*
The male gametes or sperm cells in humans and other mammals are heterogametic and contain one of two types of sex chromosomes. They are either X or Y. The female gametes or eggs however, contain only the X sex chromosome and are homogametic.
The sperm cell determines the sex of an individual in this case. If a sperm cell containing an X chromosome fertilizes an egg, the resulting zygote will be XX or female. If the sperm cell contains a Y chromosome, then the resulting zygote will be XY or male.
Determine if the sex of the offspring will be male or female based on the X or Y chromosome present in the male's sperm.
If the sperm contains the X chromosome, return "Congratulations! You're going to have a daughter."; If the sperm contains the Y chromosome, return "Congratulations! You're going to have a son.";
*/
/*
function chromosomeCheck(sperm) {
  return sperm.includes("Y")
    ? "Congratulations! You're going to have a son."
    : "Congratulations! You're going to have a daughter.";
}

console.log(chromosomeCheck("XX"));
*/

// #4

/*
Your task is to return the sum of Triangular Numbers up-to-and-including the nth Triangular Number.
Triangular Number: "any of the series of numbers (1, 3, 6, 10, 15, etc.) obtained by continued summation of the natural numbers 1, 2, 3, 4, 5, etc."
[01]
02 [03]
04 05 [06]
07 08 09 [10]
11 12 13 14 [15]
16 17 18 19 20 [21]
e.g. If 4 is given: 1 + 3 + 6 + 10 = 20.
Triangular Numbers cannot be negative so return 0 if a negative number is given.
*/
/*
function sumTriangularNumbers(n) {
  if (n < 0) {
    return 0;
  }
  let sum = 0;
  let triangle = 0;
  for (let i = 1; i <= n; i++) {
    triangle += i;
    sum += triangle;
  }
  return sum;
}

console.log(sumTriangularNumbers(6));
*/

// #5

/*
Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".
We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.
For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"
-- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.
solve("zodiacs") = 26
For the word "strength", solve("strength") = 57
-- The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.
*/
/*
function solve(s) {
  let max = 0;
  let current = 0;
  const cst = "bcdfghjklmnpqrstvwxyz";
  for (let i = 0; i < s.length; i++) {
    if (cst.includes(s[i])) {
      current += s.charCodeAt(i) - 96;
    } else {
      if (current > max) {
        max = current;
      }
      current = 0;
    }
  }
  return max;
}

console.log(solve("catchphrase"));
*/

// #6
/*
Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language) that determines if a given non-negative integer is a power of two. From the corresponding Wikipedia entry:
    a power of two is a number of the form 2n where n is an integer, i.e. the result of exponentiation with number two as the base and integer n as the exponent.
You may assume the input is always valid.
Examples
isPowerOfTwo(1024) // -> true
isPowerOfTwo(4096) // -> true
isPowerOfTwo(333)  // -> false
Beware of certain edge cases - for example, 1 is a power of 2 since 2^0 = 1 and 0 is not a power of 2.
*/
/*
function isPowerOfTwo(n) {
  return Number.isInteger(Math.log2(n));
}

console.log(isPowerOfTwo(4096));
console.log(isPowerOfTwo(536870912));
*/

// #7
/*
Given a sequence of numbers, find the largest pair sum in the sequence.
For example
[10, 14, 2, 23, 19] -->  42 (= 23 + 19)
[99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
Input sequence contains minimum two elements and every element is an integer.
*/
/*
function largestPairSum(numbers) {
  let sorted = numbers.sort((a, b) => b - a);
  return sorted[0] + sorted[1];
}

console.log(largestPairSum([10, 14, 2, 23, 19]));
*/

// #8

/*
Combine strings function
Create a function named combineNames that accepts two parameters (first and last name). The function should return the full name.
Example:
combineNames('James', 'Stevens')
returns:
'James Stevens'
*/
/*
function combineNames(s1, s2) {
  return s1 + " " + s2;
}

console.log(combineNames("James", "Stevens"));
*/

// #9
/*
Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"
*/
/*
function repeatStr(n, s) {
  const length = n;
  const array = [...Array(length).fill(s)];
  return array.join("");
  // s.repeat(n)
}
console.log(repeatStr(3, "#"));
*/

// #10
/*
Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.
Notes
    Array/list size is at least 2.
    Array/list numbers could be a mixture of positives, negatives also zeroes.
Input >> Output Examples
adjacentElementsProduct([1, 2, 3]); ==> return 6
Explanation:
    The maximum product obtained from multiplying 2 * 3 = 6, and they're adjacent numbers in the array.
    adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]); ==> return 50
    Explanation:
Max product obtained from multiplying 5 * 10  =  50.
adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921])  ==>  return -14
Explanation:
    The maximum product obtained from multiplying -2 * 7 = -14, and they're adjacent numbers in the array.
*/
/*
function adjacentElementsProduct(array) {
  let max = -Infinity;
  for (let i = 0; i < array.length - 1; i++) {
    let current = array[i] * array[i + 1];
    if (current > max) {
      max = current;
    }
  }
  return max;
}

console.log(adjacentElementsProduct([5, 1, 2, 3, 1, 4]));
*/

// 20.06
// #1
/*
You can immediately see that going "NORTH" and immediately "SOUTH" is not reasonable, better stay to the same place! So the task is to give to the man a simplified version of the plan. A better plan in this case is simply:
["WEST"]
or
{ "WEST" }
or
[West]
Other examples:
In ["NORTH", "SOUTH", "EAST", "WEST"], the direction "NORTH" + "SOUTH" is going north and coming back right away.
The path becomes ["EAST", "WEST"], now "EAST" and "WEST" annihilate each other, therefore, the final result is [] (nil in Clojure).
In ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"], "NORTH" and "SOUTH" are not directly opposite but they become directly opposite after the reduction of "EAST" and "WEST" so the whole path is reducible to ["WEST", "WEST"].
Task
Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side). 
*/
/*
function dirReduc(arr) {
  const opposite = {
    NORTH: "SOUTH",
    SOUTH: "NORTH",
    WEST: "EAST",
    EAST: "WEST",
  };
  const truePath = [];

  for (let direction of arr) {
    const prev = truePath[truePath.length - 1];

    if (prev === opposite[direction]) {
      truePath.pop();
    } else {
      truePath.push(direction);
    }
  }
  return truePath;
}

console.log(
  dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])
);
*/

// #2
/*
Time to test your basic knowledge in functions! Return the odds from a list:
[1, 2, 3, 4, 5]  -->  [1, 3, 5]
[2, 4, 6]        -->  []
*/
/*
function odds(values) {
  return values.filter((value) => value % 2 !== 0);
}
console.log(odds([1, 2, 3, 4, 5]));
*/

// #3
/*
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
For example (Input --> Output):
39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)
*/
/*
function persistence(num) {
  let count = 0;
  while (num >= 10) {
    num = String(num)
      .split("")
      .map(Number)
      .reduce((a, b) => a * b);
    count++;
  }
  return count;
}

console.log(persistence(39));
*/

// #4
/*
Basic regex tasks. Write a function that takes in a numeric code of any length. The function should check if the code begins with 1, 2, or 3 and return true if so. Return false otherwise.
You can assume the input will always be a number.
*/
/*
function validateCode(code) {
  return /^[123]/.test(code) ? true : false;
}

console.log(validateCode(511213));
*/

//#5
/*
John has invited some friends. His list is:
s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
Could you make a program that
    makes this string uppercase
    gives it sorted in alphabetical order by last name.
When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.
So the result of function meeting(s) will be:
"(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
It can happen that in two distinct families with the same family name two people have the same first name too.    
*/
// FIRST SOLUTION
// function meeting(s) {
//   const upper = s.toUpperCase();
//   const names = upper.split(";");
//   const parsedNames = names.map((name) => {
//     const [first, last] = name.split(":");
//     return { first, last };
//   });

//   const sortedNames = parsedNames.sort((a, b) => {
//     if (a.last === b.last) {
//       return a.first.localeCompare(b.first);
//     }
//     return a.last.localeCompare(b.last);
//   });

//   const formattedNames = sortedNames.map(
//     (name) => `(${name.last}, ${name.first})`
//   );

//   return formattedNames.join("");
// }
// SECOND SOLUTION
/*
function meeting(s) {
  let string = s
    .toUpperCase()
    .split(";")
    .map((x) => x.split(":").reverse().join(", "))
    .sort()
    .join(")(");

  return "(" + string + ")";
}

console.log(
  meeting(
    "Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn"
  )
);
*/

// #6

/*
Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!
You need to cast the whole array to the correct type.
Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.
ie:["1", "2", "3"] to [1, 2, 3]
*/
/*
function toNumberArray(stringarray) {
  let result = [];
  for (let i = 0; i < stringarray.length; i++) {
    result.push(Number(stringarray[i]));
    console.log(result);
  }
  return result;
}
console.log(toNumberArray(["1", "2", "3"]));
*/

// #7
/*
Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).
If they are, change the array value to a string of that vowel.
Return the resulting array.
*/
/*
function isVow(a) {
  for (let i = 0; i < a.length; i++) {
    if (/[aeiou]/.test(String.fromCharCode(a[i]))) {
      a[i] = String.fromCharCode(a[i]);
    }
  }
  return a;
}
console.log(
  isVow([
    118, 117, 120, 121, 117, 98, 122, 97, 120, 106, 104, 116, 113, 114, 113,
    120, 106,
  ])
);
*/

// 21.06

// #1
/*
The wide-mouth frog is particularly interested in the eating habits of other creatures.

He just can't stop asking the creatures he encounters what they like to eat. But, then he meets the alligator who just LOVES to eat wide-mouthed frogs!

When he meets the alligator, it then makes a tiny mouth.

Your goal in this kata is to create complete the mouth_size method this method takes one argument animal which corresponds to the animal encountered by the frog. If this one is an alligator (case-insensitive) return small otherwise return wide.

}
*/
/*
function mouthSize(animal) {
  return animal.toLowerCase() === "alligator" ? "small" : "wide";
}

console.log(mouthSize("toucan"));
console.log(mouthSize("alligator"));
*/

// #2
/*
You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.
You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.
Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.
Examples (input -> output)
* [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
* [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
* [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]
*/
/*
function mergeArrays(arr1, arr2) {
  if (arr1 === [] && arr2 === []) {
    return [];
  }
  const newArr = arr1.concat(arr2);
  const sorted = newArr.sort((a, b) => a - b);
  const set = [...new Set(sorted)];
  return set;
}

console.log(mergeArrays([1, 1, 1, 3, 5, 7, 9], [10, 8, 8, 6, 4, 2]));
*/

// #3

/*
Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.
Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,
solve(["abode","ABc","xyzD"]) = [4, 3, 1]
*/
/*
function solve(arr) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const result = [];

  for (let word of arr) {
    let count = 0;
    for (let i = 0; i < word.length; i++) {
      const letter = word[i].toLowerCase();
      const position = alphabet.indexOf(letter) + 1;

      if (position === i + 1) {
        count++;
      }
    }
    result.push(count);
  }
  return result;
}

console.log(solve(["abode", "ABc", "xyzD"]));
*/

// #4

/*
Write a function that will check if two given characters are the same case.
    If either of the characters is not a letter, return -1
    If both characters are the same case, return 1
    If both characters are letters, but not the same case, return 0
Examples
'a' and 'g' returns 1
'A' and 'C' returns 1
'b' and 'G' returns 0
'B' and 'g' returns 0
'0' and '?' returns -1
*/
/*
function sameCase(a, b) {
  if (
    a.toUpperCase() === a.toLowerCase() ||
    b.toLowerCase() === b.toUpperCase()
  ) {
    return -1;
  } else if (
    (a === a.toLowerCase() && b === b.toLowerCase()) ||
    (a === a.toUpperCase() && b === b.toUpperCase())
  ) {
    return 1;
  } else {
    return 0;
  }
}

console.log(sameCase("B", "a"));
*/

// #5
/*
Finish the uefaEuro2016() function so it return string just like in the examples below:
uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."
*/
/*
function uefaEuro2016(teams, scores) {
  if (scores[0] === scores[1]) {
    return `At match ${teams[0]} - ${teams[1]}, teams played draw.`;
  }

  if (scores[0] < scores[1]) {
    return `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`;
  } else {
    return `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`;
  }
}

console.log(uefaEuro2016(["Belgium", "Italy"], [2, 2]));
*/

// #6
/*
Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
Mind the input validation.
Example
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6
Input validation
If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.
 */
/*
function sumArray(array) {
  if (!Array.isArray(array) || array.length <= 1) {
    return 0;
  }

  const sortedArray = array.slice().sort((a, b) => a - b);
  const sum = sortedArray.slice(1, -1).reduce((acc, curr) => acc + curr, 0);

  return sum;
}

console.log(sumArray([6, 2, 1, 8, 10]));
*/

// 23.06

// #1
/*
Find the number with the most digits.
If two numbers in the argument array have the same number of digits, return the first one in the array.
*/
/*
function findLongest(array) {
  let longest = "";
  for (let i = 0; i < array.length; i++) {
    let str = String(array[i]);

    if (str.length > longest.length) {
      longest = str;
    }
  }
  return parseInt(longest);
}

console.log(findLongest([1, 10, 100]));
*/

// #2
/*
In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:
    make as few changes as possible.
    if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
For example:
solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
*/
/*
function solve(s) {
  let countLower = 0;
  let countUpper = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toLowerCase()) {
      countLower++;
    } else if (s[i] === s[i].toUpperCase()) {
      countUpper++;
    }
  }
  if (countLower > countUpper || countLower === countUpper) {
    return s.toLowerCase();
  } else if (countUpper > countLower) {
    return s.toUpperCase();
  } else {
    return s;
  }
}

console.log(solve("CODe"));
*/

// #3
/*
The goal is to create a function of two inputs number and power, that "raises" the number up to power (ie multiplies number by itself power times).
Examples
numberToPower(3, 2)  // -> 9 ( = 3 * 3 )
numberToPower(2, 3)  // -> 8 ( = 2 * 2 * 2 )
numberToPower(10, 6) // -> 1000000
Note: Math.pow and some other Math functions like eval() and ** are disabled.
*/
/*
function numberToPower(number, power) {
  console.info(Math.log2(1024));
  let result = 1;

  for (let i = 0; i < power; i++) {
    result *= number;
  }
  return result;
}

console.log(numberToPower(4, 2));
*/

// #4
/*
Given a string s, write a method (function) that will return true if its a valid single integer or floating number or false if its not.
Valid examples, should return true:
isDigit("3")
isDigit("  3  ")
isDigit("-3.23")
should return false:
isDigit("3-4")
isDigit("  3   5")
isDigit("3 5")
isDigit("zero")
*/
/*
// FIRST
// function isDigit(s) {
//   s = s.trim();
//   const pattern = /^-?\d+(\.\d+)?$/;
//   return pattern.test(s);
// }

// SECOND
function isDigit(s) {
  return s == parseFloat(s);
}

console.log(isDigit("3-4"));
console.log(isDigit("  3  "));
console.log(isDigit("zero"));
*/

// #5

/*
Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56
Function:
getNumberFromString(s)
*/
/*
function getNumberFromString(s) {
  const numeric = s.match(/\d/g).join("");
  console.log(numeric);
  return Number(numeric);
}

console.log(getNumberFromString("123"));
*/

// #6

/*
Sort the Gift Code 
Write a function called sortGiftCode/sort_gift_code/SortGiftCode that accepts a string containing up to 26 unique alphabetical characters, and returns a string containing the same characters in alphabetical order.
Examples (Input -- => Output):
"abcdef"                      -- => "abcdef"
"pqksuvy"                     -- => "kpqsuvy"
"zyxwvutsrqponmlkjihgfedcba"  -- => "abcdefghijklmnopqrstuvwxyz"
*/
/*
function sortGiftCode(code) {
  return code.split("").sort().join("");
}

console.log(sortGiftCode("zyxwvutsrqponmlkjihgfedcba"));
*/

// #7

/*
Complete the function that takes two numbers as input, num and nth and return the nth digit of num (counting from right to left).
Note
    If num is negative, ignore its sign and treat it as a positive value
    If nth is not positive, return -1
    Keep in mind that 42 = 00042. This means that findDigit(42, 5) would return 0
Examples(num, nth --> output)
5673, 4 --> 5
129, 2 --> 2
-2825, 3 --> 8
-456, 4 --> 0
0, 20 --> 0
65, 0 --> -1
24, -8 --> -1
 */
/*
function findDigit(num, nth) {
  if (nth <= 0) {
    return -1;
  }
  num = Math.abs(num).toString();
  if (nth > num.length) {
    return 0;
  }

  return parseInt(num[num.length - nth]);
}
*/

// #8
/*
Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).
Consult the solution set-up for the exact data structure implementation depending on your language.
Example:
orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
*/
/*
const orderedCount = function (text) {
  const charMap = new Map();
  for (let char of text) {
    if (charMap.has(char)) {
      charMap.set(char, charMap.get(char) + 1);
    } else {
      charMap.set(char, 1);
    }
  }
  return Array.from(charMap.entries());
};

console.log(orderedCount("abracadabra"));
*/

// #9
/*
Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.
Example:
Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].
Addendum:
Please, keep in mind, that JavaScript is by default sorting objects alphabetically. For more information, please consult:
*/
/*
"use strict";
function flattenAndSort(array) {
  const newArr = [].concat(...array).sort((a, b) => a - b);
  return newArr;
}

console.log(
  flattenAndSort([
    [3, 2, 1],
    [7, 9, 8],
    [6, 4, 5],
  ])
);
*/

// #10
/*
To find the volume (centimeters cubed) of a cuboid you use the formula:
volume = Length * Width * Height
But someone forgot to use proper record keeping, so we only have the volume, and the length of a single side!
It's up to you to find out whether the cuboid has equal sides (= is a cube).
Return true if the cuboid could have equal sides, return false otherwise.
Return false for invalid numbers too (e.g volume or side is less than or equal to 0).
Note: side will be an integer
*/
/*
var cubeChecker = function (volume, side) {
  if (volume <= 0 || side <= 0) {
    return false;
  }
  const calcSide = Math.cbrt(volume);
  return calcSide === side;
};

console.log(cubeChecker(8, 2));
*/

// 25.06
// #1
/*
adding up all the whole numbers from 1 through a given number n.
Your task is to help the young Carl Friedrich to solve this problem as quickly as you can; so, he can astonish his teacher and rescue his recreation interval.
Here's, an example:
f(n=100) // returns 5050 
*/
/*
function f(n) {
  if (typeof n !== "number" || !Number.isInteger(n)) {
    return false;
  }
  if (n <= 0) {
    return false;
  }
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(f("100"));
*/

// #2
/*
Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.
Examples:
encrypt("012345", 1)  =>  "135024"
encrypt("012345", 2)  =>  "135024"  ->  "304152"
encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"
encrypt("01234", 1)  =>  "13024"
encrypt("01234", 2)  =>  "13024"  ->  "32104"
encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
Together with the encryption function, you should also implement a decryption function which reverses the process.
If the string S is an empty value or the integer N is not positive, return the first argument without changes.
*/
/*
function encrypt(text, n) {
  if (n <= 0 || !text || text.length === 0) {
    return text;
  }

  let encrypted = text;
  while (n > 0) {
    let oddChars = "";
    let evenChars = "";

    for (let i = 0; i < encrypted.length; i++) {
      if (i % 2 === 1) {
        oddChars += encrypted[i];
      } else {
        evenChars += encrypted[i];
      }
    }
    encrypted = oddChars + evenChars;
    n--;
  }
  return encrypted;
}

function decrypt(encryptedText, n) {
  if (n <= 0 || !encryptedText || encryptedText.length === 0) {
    return encryptedText;
  }
  const textLength = encryptedText.length;
  const halfLength = Math.floor(textLength / 2);
  let decrypted = encryptedText;

  while (n > 0) {
    let reconstructed = "";

    for (let i = 0; i < halfLength; i++) {
      reconstructed += decrypted[i + halfLength] + decrypted[i];
    }
    if (textLength % 2 === 1) {
      reconstructed += decrypted[textLength - 1];
    }
    decrypted = reconstructed;
    n--;
  }
  return decrypted;
}

console.log(encrypt("hsi  etTi sats!", 1));
*/

// #3
/*
Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.
*/
/*
function combat(health, damage) {
  return health - damage > 0 ? health - damage : 0;
}
*/

// #4
/*
You must implement a function that returns the difference between the largest and the smallest value in a given list / array (lst) received as the parameter.
    lst contains integers, that means it may contain some negative numbers
    if lst is empty or contains a single element, return 0
    lst is not sorted
[1, 2, 3, 4]   //  returns 3 because 4 -   1  == 3
[1, 2, 3, -4]  //  returns 7 because 3 - (-4) == 7
*/

/*
function maxDiff(list) {
  if (list.length === 0 || list.length === 1) {
    return 0;
  }
  let sorted = list.sort((a, b) => a - b);
  console.log(sorted);
  return list[list.length - 1] - list[0];
}

console.log(maxDiff([1, 2, 3, -4]));
*/

// #5
/*
Your code will show Full name of the neighbor and the truncated version of the name as an array. If the number of the characters in name is less than or equal to two, it will return an array containing only the name as is"
*/
/*
function whoIsPaying(name) {
  if (name.length <= 2) {
    return [name];
  }
  const sliced = name.slice(0, 2);
  return [name, sliced];
}
console.log(whoIsPaying("Mexico"));
*/

// #6
/*
Your task is to find the first element of an array that is not consecutive.
By not consecutive we mean not exactly 1 larger than the previous element of the array.
E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.
If the whole array is consecutive then return null.
The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!
*/
/*
function firstNonConsecutive(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] !== arr[i] + 1) {
      return arr[i + 1];
    }
  }
  return null;
}

console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]));
*/

// #7
/*
Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form:
 "(p1**n1)(p2**n2)...(pk**nk)"
with the p(i) in increasing order and n(i) empty if n(i) is 1.
Example: n = 86240 should return "(2**5)(5)(7**2)(11)"
*/
/*
function primeFactors(n) {
  const factors = [];
  let factor = 2;

  while (factor <= Math.sqrt(n)) {
    if (n % factor === 0) {
      factors.push(factor);
      n /= factor;
    } else {
      factor++;
    }
  }
  if (n > 1) {
    factors.push(n);
  }
  let result = "";
  for (let i = 0; i < factors.length; i++) {
    let count = 1;

    while (i < factors.length - 1 && factors[i] === factors[i + 1]) {
      count++;
      i++;
    }
    result += `(${factors[i]}${count > 1 ? `**${count}` : ""})`;
  }
  return result;
}

console.log(primeFactors(7775460));
*/

// 26.06

// #1

/*
There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.
Examples
mango(2, 3) ==> 6    # 2 mangoes for $3 per unit = $6; no mango for free
mango(3, 3) ==> 6    # 2 mangoes for $3 per unit = $6; +1 mango for free
mango(5, 3) ==> 12   # 4 mangoes for $3 per unit = $12; +1 mango for free
mango(9, 5) ==> 30   # 6 mangoes for $5 per unit = $30; +3 mangoes for free
*/
/*
function mango(quantity, price) {
  const paid = Math.floor(quantity / 3) * 2;
  const totalCost = paid * price;
  const free = quantity % 3;
  return totalCost + free * price;
}

console.log(mango(3, 3));
*/

// #2
/*
Given a variable n,
If n is an integer, Return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark. If n is negative, then the negative sign should be removed.
If n is not an integer, return the string "NaN".
Ex:
dashatize(274) -> '2-7-4'
dashatize(6815) -> '68-1-5'
*/

// FIRST
// function dashatize(num) {
//   if (isNaN(num)) {
//     return "NaN";
//   }
//   if (num === 0) {
//     return "0";
//   }
//   let result = [];
//   const arr = Math.abs(num).toString().split("");
//   console.log(arr);
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 1) {
//       if (result.length > 0 && result[result.length - 1] !== "-") {
//         result.push("-");
//       }
//       result.push(arr[i], "-");
//     } else {
//       result.push(arr[i]);
//     }
//   }
//   if (result[result.length - 1] === "-") {
//     result.pop();
//   }
//   return result.join("");
// }

// SECOND
// function dashatize(num) {
//   return String(num)
//     .replace(/([13579])/g, "-$1-")
//     .replace(/--+/g, "-")
//     .replace(/(^-|-$)/g, "");
// }

// THIRD
// function dashatize(num) {
//   return isNaN(num)
//     ? "NaN"
//     : num
//         .toString()
//         .match(/([13579]|[02468]+)/g)
//         .join("-");
// }

// console.log(dashatize(2743));

// #3
/*
Inspired by the development team at Vooza, write the function that
    accepts the name of a programmer, and
    returns the number of lightsabers owned by that person.
The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.
Note: your function should have a default parameter.
For example(Input --> Output):
"anyone else" --> 0
"Zach" --> 18
*/
/*
function howManyLightsabersDoYouOwn(name) {
  return name === "Zach" ? 18 : 0;
}

console.log(howManyLightsabersDoYouOwn("Adam"));
console.log(howManyLightsabersDoYouOwn("Zach"));
*/

// #4
/*
Template Strings
Template Strings, this kata is mainly aimed at the new JS ES6 Update introducing Template Strings
Task
Your task is to return the correct string using the Template String Feature.
Input
Two Strings, no validation is needed.
Output
You must output a string containing the two strings with the word ```' are '``` 
*/
/*
var TempleStrings = function (obj, feature) {
  return `${obj} are ${feature}`;
};

console.log(TempleStrings("animals", "good"));
*/

// #5
/*
Get ASCII value of a character.
For the ASCII table you can refer to http://www.asciitable.com/
*/
/*
function getASCII(c) {
  return c.charCodeAt();
}

console.log(getASCII("A"));
*/

// #6
/*
It is easy to join two strings together like this string1 + string2.
Another way to get the desired result would be with string1.concat(string2)
ES6 has introduced another way of joining strings. Your task is to find out what this is and write a function that will add two strings together, there must be a space between the two strings.
+ , .concat() & .join() will not be allowed in this exercise. I have also removed some other methods that can be used to cheat!
If one of the arguments is a number your code must coerce it into being a string.
*/
/*
function joinStrings(string1, string2) {
  return `${string1} ${string2}`;
}

console.log(joinStrings("string1", "string2"));
*/

// #7
/*
Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).
For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.
The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).
Based on: http://oj.leetcode.com/problems/two-sum/
twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]
*/
// FIRST
// function twoSum(numbers, target) {
//   const map = new Map();
//   for (let i = 0; i < numbers.length; i++) {
//     const comp = target - numbers[i];

//     if (map.has(comp)) {
//       return [map.get(comp), i];
//     }
//     map.set(numbers[i], i);
//   }
//   return [];
// }

// SECOND
// function twoSum(numbers, target) {
//   for (let i = 0; i < numbers.length; i++) {
//     for (let j = i + 1; j < numbers.length; j++) {
//       if (numbers[i] + numbers[j] === target) return [i, j];
//     }
//   }
// }

// console.log(twoSum([1, 2, 3], 4));

// #8
/*
Given an array of integers of any length, return an array that has 1 added to the value represented by the array.
    the array can't be empty
    only non-negative, single digit integers are allowed
Return nil (or your language's equivalent) for invalid inputs.
Examples
Valid arrays
[4, 3, 2, 5] would return [4, 3, 2, 6]
[1, 2, 3, 9] would return [1, 2, 4, 0]
[9, 9, 9, 9] would return [1, 0, 0, 0, 0]
[0, 1, 3, 7] would return [0, 1, 3, 8]
Invalid arrays
[1, -9] is invalid because -9 is not a non-negative integer
[1, 2, 33] is invalid because 33 is not a single-digit integer
*/
/*
function upArray(arr) {
  if (arr.length == 0 || arr.some((e) => e < 0 || e > 9)) return null;

  let i = arr.length - 1;

  while (i >= 0 && arr[i] == 9) arr[i--] = 0;

  if (i < 0) arr.unshift(1);
  else arr[i]++;

  return arr;
}

console.log(upArray([9, 9, 9, 9]));
*/

// #9
/*
You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.
Find max(abs(length(x) − length(y)))
If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).
Example:
a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
mxdiflg(a1, a2) --> 13
Bash note:
    input : 2 strings with substrings separated by ,
    output: number as a string
*/
/*
function mxdiflg(a1, a2) {
  if (a1.length === 0 || a2.length === 0) {
    return -1;
  }
  let maxDiff = -1;
  for (let i = 0; i < a1.length; i++) {
    for (let j = 0; j < a2.length; j++) {
      const diff = Math.abs(a1[i].length - a2[j].length);
      maxDiff = Math.max(maxDiff, diff);
    }
  }
  return maxDiff;
}

console.log(
  mxdiflg(
    [
      "hoqq",
      "bbllkw",
      "oox",
      "ejjuyyy",
      "plmiis",
      "xxxzgpsssa",
      "xxwwkktt",
      "znnnnfqknaz",
      "qqquuhii",
      "dvvvwz",
    ],
    ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
  )
);
*/

// 28.06

// #1
/*
Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.
Example:
'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb'
*/
/*
function switcheroo(x) {
  let result = "";
  for (let i = 0; i < x.length; i++) {
    if (x[i] === "a") {
      result += "b";
    } else if (x[i] === "b") {
      result += "a";
    } else {
      result += x[i];
    }
  }
  return result;
}

console.log(switcheroo("abc"));
*/

// #2
/*
Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.
All inputs will be valid.
*/
/*
function digits(n) {
  return n.toString().length;
}

console.log(digits(9876543210));
*/

// #3
/*
You have to write a function that describe Leo:
if oscar was (integer) 88, you have to return "Leo finally won the oscar! Leo is happy".
if oscar was 86, you have to return "Not even for Wolf of wallstreet?!"
if it was not 88 or 86 (and below 88) you should return "When will you give Leo an Oscar?"
if it was over 88 you should return "Leo got one already!"
*/
/*
function leo(oscar) {
  switch (oscar) {
    case 88:
      return "Leo finally won the oscar! Leo is happy";
      break;
    case 86:
      return "Not even for Wolf of wallstreet?!";
      break;
    default:
      if (oscar < 88) return "When will you give Leo an Oscar?";
      else return "Leo got one already!";
  }
}

console.log(leo(89));
*/

// #3
/*
Write function parseF which takes an input and returns a number or null if conversion is not possible. The input can be one of many different types so be aware.
*/
/*
function parseF(s) {
  const parsed = parseFloat(s);
  return isNaN(parsed) ? null : parsed;
}

console.log(parseF());
*/

// #4
/*
You've decided to write a function, guessBlue() to help automatically calculate whether you should guess "blue" or "red". The function should take four arguments:
    the number of blue marbles you put in the bag to start
    the number of red marbles you put in the bag to start
    the number of blue marbles pulled out so far (always lower than the starting number of blue marbles)
    the number of red marbles pulled out so far (always lower than the starting number of red marbles)
guessBlue() should return the probability of drawing a blue marble, expressed as a float. For example, guessBlue(5, 5, 2, 3) should return 0.6.
*/

// #5
/*
function guessBlue(blueStart, redStart, bluePulled, redPulled) {
  return (
    (blueStart - bluePulled) / (blueStart - bluePulled + redStart - redPulled)
  );
}

console.log(guessBlue(5, 5, 2, 3));
*/

// #6
/*
For this problem you must create a program that says who ate the last cookie. If the input is a string then "Zach" ate the cookie. If the input is a float or an int then "Monica" ate the cookie. If the input is anything else "the dog" ate the cookie. The way to return the statement is: "Who ate the last cookie? It was (name)!"
Ex: Input = "hi" --> Output = "Who ate the last cookie? It was Zach! (The reason you return Zach is because the input is a string)
Note: Make sure you return the correct message with correct spaces and punctuation.
Please leave feedback for this kata. Cheers!
*/
/*
function cookie(x) {
  if (typeof x === "string") {
    return "Who ate the last cookie? It was Zach!";
  } else if (typeof x === "number") {
    return "Who ate the last cookie? It was Monica!";
  }
  return "Who ate the last cookie? It was the dog!";
}

console.log(cookie("Ryan"));
console.log(cookie(26));
console.log(cookie(2.3));
console.log(cookie(true));
*/

// #6
/*
Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.
Example:
n= 5, m=5: 25
n=-5, m=5:  0
Waiting for translations and Feedback! Thanks!
*/
/*
function paperwork(n, m) {
  if (n < 0 || m < 0) {
    return 0;
  }
  return n * m;
}

console.log(paperwork(5, 5));
console.log(paperwork(5, -5));
console.log(paperwork(5, 0));
*/

// #7
/*
Given two strings s1 and s2, we want to visualize how different the two strings are. We will only take into account the lowercase letters (a to z). First let us count the frequency of each lowercase letters in s1 and s2.
s1 = "A aaaa bb c"
s2 = "& aaa bbb c d"
s1 has 4 'a', 2 'b', 1 'c'
s2 has 3 'a', 3 'b', 1 'c', 1 'd'
So the maximum for 'a' in s1 and s2 is 4 from s1; the maximum for 'b' is 3 from s2. In the following we will not consider letters when the maximum of their occurrences is less than or equal to 1.
We can resume the differences between s1 and s2 in the following string: "1:aaaa/2:bbb" where 1 in 1:aaaa stands for string s1 and aaaa because the maximum for a is 4. In the same manner 2:bbb stands for string s2 and bbb because the maximum for b is 3.
The task is to produce a string in which each lowercase letters of s1 or s2 appears as many times as its maximum if this maximum is strictly greater than 1; these letters will be prefixed by the number of the string where they appear with their maximum value and :. If the maximum is in s1 as well as in s2 the prefix is =:.
In the result, substrings (a substring is for example 2:nnnnn or 1:hhh; it contains the prefix) will be in decreasing order of their length and when they have the same length sorted in ascending lexicographic order (letters and digits - more precisely sorted by codepoint); the different groups will be separated by '/'. See examples and "Example Tests".
Hopefully other examples can make this clearer.
s1 = "my&friend&Paul has heavy hats! &"
s2 = "my friend John has many many friends &"
mix(s1, s2) --> "2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"
s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&"
mix(s1, s2) --> "1:mmmmmm/=:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"
s1="Are the kids at home? aaaaa fffff"
s2="Yes they are here! aaaaa fffff"
mix(s1, s2) --> "=:aaaaaa/2:eeeee/=:fffff/1:tt/2:rr/=:hh"
Note for Swift, R, PowerShell
The prefix =: is replaced by E:
s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&"
mix(s1, s2) --> "1:mmmmmm/E:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/E:ee/E:ss"
*/
/*
const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

function mix(s1, s2) {
  return alphabet
    .map((char) => {
      const s1Count = s1.split("").filter((x) => x === char).length,
        s2Count = s2.split("").filter((x) => x === char).length,
        maxCount = Math.max(s1Count, s2Count);

      return {
        char: char,
        count: maxCount,
        src: maxCount > s1Count ? "2" : maxCount > s2Count ? "1" : "=",
      };
    })
    .filter((c) => c.count > 1)
    .sort(
      (objA, objB) =>
        objB.count - objA.count ||
        (objA.src + objA.char > objB.src + objB.char ? 1 : -1)
    )
    .map((c) => `${c.src}:${c.char.repeat(c.count)}`)
    .join("/");
}

console.log(
  mix(
    "my&friend&Paul has heavy hats! &",
    "my friend John has many many friends &"
  )
);
console.log(
  mix(
    "mmmmm m nnnnn y&friend&Paul has heavy hats! &",
    "my frie n d Joh n has ma n y ma n y frie n ds n&"
  )
);
console.log(
  mix("Are the kids at home? aaaaa fffff", "Yes they are here! aaaaa fffff")
);
*/

// 29.06

// #1
/*
  Let P be the Principal = 1000.00      
  Let I be the Interest Rate = 0.05      
  Let T be the Tax Rate = 0.18      
  Let D be the Desired Sum = 1100.00
After 1st Year -->
  P = 1041.00
After 2nd Year -->
  P = 1083.86
After 3rd Year -->  P = 1128.30

Thus Mr. Scrooge has to wait for 3 years for the initial principal to amount to the desired sum.
Your task is to complete the method provided and return the number of years 'Y' as a whole in order for Mr. Scrooge to get the desired sum.
Assumption: Assume that Desired Principal 'D' is always greater than the initial principal. However it is best to take into consideration that if Desired Principal 'D' is equal to Principal 'P' this should return 0 Years.
*/
/*
function calculateYears(principal, interest, tax, desired) {
  let years = 0;

  while (principal < desired) {
    const interestEarned = principal * interest;
    const taxPaid = interestEarned * tax;
    principal += interestEarned - taxPaid;
    years++;
  }

  return years;
}

console.log(calculateYears(1000, 0.5, 0.18, 1100));
*/

// #2
/*
Remove all exclamation marks from the end of sentence.
Examples
remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi"
*/
/*
function remove(str) {
  return str.replace(/!+$/g, "");
}

console.log(remove("Hi! Hi!"));
*/

// #3
/*
Complete the method which accepts an array of integers, and returns one of the following:
    "yes, ascending" - if the numbers in the array are sorted in an ascending order
    "yes, descending" - if the numbers in the array are sorted in a descending order
    "no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer.
*/
/*
function isSortedAndHow(array) {
  if (array.every((num, ind) => ind === 0 || num >= array[ind - 1])) {
    return "yes, ascending";
  }
  if (array.every((num, ind) => ind === 0 || num <= array[ind - 1])) {
    return "yes, descending";
  }
  return "no";
}

console.log(isSortedAndHow([15, 7, 3, -8]));
*/

// #4
/*
Return the type of the sum of the two arguments
*/
/*
function typeOfSum(a, b) {
  return typeof (a + b);
}
console.log(typeOfSum(12, 1));
console.log(typeOfSum(null, 1));
console.log(typeOfSum(12, "a"));
console.log(typeOfSum(null, undefined));
*/

// #5
/*
Write a function reverse which reverses a list.
(the dedicated builtin(s) functionalities are deactivated)
*/
/*
function reverse(array) {
  let reversed = [];
  for (let i = array.length - 1; i >= 0; i--) {
    // ОБРАТНЫЙ ПОРЯДОК ИТЕРАЦИИ
    reversed.push(array[i]);
  }
  return reversed;
}

console.log(reverse([1, null, 14, "two"]));
*/

// #6
/*
The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:
maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.
Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.
*/
/*
var maxSequence = function (arr) {
  let maxSum = 0;
  let currentSum = 0;
  for (let i = 0; i < arr.length; i++) {
    currentSum = Math.max(arr[i], currentSum + arr[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
};

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
*/

// #7
/*
Given a string s. You have to return another string such that even-indexed and odd-indexed characters of s are grouped and groups are space-separated (see sample below) 
Note: 
0 is considered to be an even index. 
All input strings are valid with no spaces
input: 'CodeWars'
output 'CdWr oeas'
S[0] = 'C'
S[1] = 'o'
S[2] = 'd'
S[3] = 'e'
S[4] = 'W'
S[5] = 'a'
S[6] = 'r'
S[7] = 's'
Even indices 0, 2, 4, 6, so we have 'CdWr' as the first group
odd ones are 1, 3, 5, 7, so the second group is 'oeas'
And the final string to return is 'Cdwr oeas'
*/
/*
function sortMyString(arr) {
  let fisrtArr = [];
  let secondArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 1) {
      secondArr.push(arr[i]);
    } else {
      fisrtArr.push(arr[i]);
    }
  }
  return `${fisrtArr.join("")} ${secondArr.join("")}`;
}

console.log(sortMyString("CodeWars"));
*/

// #8
/*
Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.
Return as a number.
*/
/*
function divCon(x) {
  let str = 0;
  let num = 0;
  for (let i = 0; i < x.length; i++) {
    if (typeof x[i] === "string") {
      str += Number(x[i]);
    }
    if (typeof x[i] === "number") {
      num += x[i];
      console.log(num);
    }
  }
  return num - str;
}

console.log(divCon([9, 3, "7", "3"]));
*/

// #9
/*
Strong number is the number that the sum of the factorial of its digits is equal to number itself.
For example, 145 is strong, since 1! + 4! + 5! = 1 + 24 + 120 = 145.
Task
Given a number, Find if it is Strong or not and return either "STRONG!!!!" or "Not Strong !!".
Notes
    Number passed is always Positive.
    Return the result as String
Input >> Output Examples
strong_num(1) ==> return "STRONG!!!!"
Since, the sum of its digits' factorial (1) is equal to number itself, then its a Strong.
strong_num(123) ==> return "Not Strong !!"
Since the sum of its digits' factorial of 1! + 2! + 3! = 9 is not equal to number itself, then it's Not Strong.
strong_num(2)  ==>  return "STRONG!!!!"
Since the sum of its digits' factorial of 2! = 2 is equal to number itself, then its a Strong.
strong_num(150) ==> return "Not Strong !!"
Since the sum of its digits' factorial of 1! + 5! + 0! = 122 is not equal to number itself, Then it's Not Strong . 
*/
/*
function strong(n) {
  function factorial(num) {
    if (num === 0 || num === 1) {
      return 1;
    }
    let result = 1;
    for (let i = 2; i <= num; i++) {
      result *= i;
    }
    return result;
  }

  const arr = n.toString().split("");
  console.log(arr);
  let sum = 0;

  arr.forEach(function (num) {
    sum += factorial(parseInt(num));
  });

  if (sum === n) {
    return "STRONG!!!!";
  } else {
    return "Not Strong !!";
  }
}

console.log(strong(145));
*/

// 01.07
/*
Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.
Example:
For input: [3, 4, 4, 3, 6, 3]
    remove the 3 at index 0
    remove the 4 at index 1
    remove the 3 at index 3
Expected output: [4, 6, 3]
More examples can be found in the test cases.
*/
/*
function solve(arr) {
  const unique = [];
  const map = new Map();

  for (let i = arr.length - 1; i >= 0; i--) {
    const element = arr[i];
    if (!map.has(element)) {
      map.set(element, true);
      unique.unshift(element);
    }
  }
  return unique;
}

console.log(solve([3, 4, 4, 3, 6, 3]));
*/

// #2
/*
This is an easy twist to the example kata (provided by Codewars when learning how to create your own kata).
Add the value "codewars" to the array websites 1,000 times.
*/
// add the value "codewars" to the websites array 1,000 times
/*
var websites = [];
websites.length = 1000;
websites.fill("codewars");
*/

// #3
/*
Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:
a -> 1
e -> 2
i -> 3
o -> 4
u -> 5
For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.
Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.
For example, decode("h3 th2r2") would return "hi there".
For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.
*/
// FIRST
// function encode(string) {
//   const vowels = /[aeiou]/;
//   let result = "";
//   for (let i = 0; i < string.length; i++) {
//     if (vowels.test(string[i])) {
//       switch (string[i]) {
//         case "a":
//           result += "1";
//           break;
//         case "e":
//           result += "2";
//           break;
//         case "i":
//           result += "3";
//           break;
//         case "o":
//           result += "4";
//           break;
//         case "u":
//           result += "5";
//           break;
//       }
//     } else {
//       result += string[i];
//     }
//   }
//   return result;
// }

// console.log(encode("How are you today?"));

// function decode(string) {
//   const vowels = /[12345]/;
//   let result = "";
//   for (let i = 0; i < string.length; i++) {
//     if (vowels.test(string[i])) {
//       switch (string[i]) {
//         case "1":
//           result += "a";
//           break;
//         case "2":
//           result += "e";
//           break;
//         case "3":
//           result += "i";
//           break;
//         case "4":
//           result += "o";
//           break;
//         case "5":
//           result += "u";
//           break;
//       }
//     } else {
//       result += string[i];
//     }
//   }
//   return result;
// }

// console.log(decode("h2ll4"));
/*
// SECOND
function encode(string) {
  return string.replace(/[aeiou]/g, function (x) {
    return "_aeiou".indexOf(x);
  });
}

console.log(encode("hello"));

function decode(string) {
  return string.replace(/[1-5]/g, function (x) {
    return "_aeiou".charAt(x);
  });
}
console.log(decode("h2ll4"));
*/

// #4
/*
Make multiple functions that will return the sum, difference, modulus, product, quotient, and the exponent respectively.
Please use the following function names:
addition = add
multiply = multiply
division = divide (both integer and float divisions are accepted)
modulus = mod
exponential = exponent
subtraction = subt
Note: All math operations will be: a (operation) b
*/
/*
function add(a, b) {
  return a + b;
}

function divide(a, b) {
  return a / b;
}

function multiply(a, b) {
  return a * b;
}

function mod(a, b) {
  return a % b;
}

function exponent(a, b) {
  return a ** b;
}

function subt(a, b) {
  return a - b;
}
*/

// #5
/*
Filter the number
Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?
Task
Your task is to return a number from a string.
Details
You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.
*/
/*
var filterString = function (value) {
  return Number(value.replace(/[a-z]/g, ""));
};

console.log(filterString("aa1bb2cc3dd"));
*/

// #6
/*
John and Mary want to travel between a few towns A, B, C ... Mary has on a sheet of paper a list of distances between these towns. ls = [50, 55, 57, 58, 60]. John is tired of driving and he says to Mary that he doesn't want to drive more than t = 174 miles and he will visit only 3 towns.
Which distances, hence which towns, they will choose so that the sum of the distances is the biggest possible to please Mary and John?
Example:
With list ls and 3 towns to visit they can make a choice between: [50,55,57],[50,55,58],[50,55,60],[50,57,58],[50,57,60],[50,58,60],[55,57,58],[55,57,60],[55,58,60],[57,58,60].
The sums of distances are then: 162, 163, 165, 165, 167, 168, 170, 172, 173, 175.
The biggest possible sum taking a limit of 174 into account is then 173 and the distances of the 3 corresponding towns is [55, 58, 60].
The function chooseBestSum (or choose_best_sum or ... depending on the language) will take as parameters t (maximum sum of distances, integer >= 0), k (number of towns to visit, k >= 1) and ls (list of distances, all distances are positive or zero integers and this list has at least one element). The function returns the "best" sum ie the biggest possible sum of k distances less than or equal to the given limit t, if that sum exists, or otherwise nil, null, None, Nothing, depending on the language. In that case with C, C++, D, Dart, Fortran, F#, Go, Julia, Kotlin, Nim, OCaml, Pascal, Perl, PowerShell, Reason, Rust, Scala, Shell, Swift return -1.
Notes:
    try not to modify the input list of distances ls
    in some languages this "list" is in fact a string (see the Sample Tests).
*/
/*
function chooseBestSum(t, k, ls) {
  let maxSum = -1;

  function dfs(start, count, sum) {
    if (count === 0) {
      if (sum <= t && sum > maxSum) {
        maxSum = sum;
      }
      return;
    }
    for (let i = start; i < ls.length; i++) {
      dfs(i + 1, count - 1, sum + ls[i]);
    }
  }
  dfs(0, k, 0);
  return maxSum !== -1 ? maxSum : null;
}

console.log(chooseBestSum(174, 3, [50, 55, 56, 57, 58]));
*/

// #7
/*
You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all printable ASCII characters.
Examples:
uniTotal("a") == 97
uniTotal("aaa") == 291
*/
/*
function uniTotal(string) {
  const array = string.split("");
  console.log(array);
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i].charCodeAt(0);
  }
  return sum;
}

console.log(uniTotal("aaa"));
*/

// №2
/*
Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD
*/
/*
// FIRST
// function alternateCase(s) {
//   let result = "";
//   for (let i = 0; i < s.length; i++) {
//     if (s[i].toUpperCase() === s[i]) {
//       result += s[i].toLowerCase();
//     } else if (s[i].toLowerCase() === s[i]) {
//       result += s[i].toUpperCase();
//     } else {
//       result += s[i];
//     }
//   }
//   return result;
// }

// SECOND
function alternateCase(s) {
  return s
    .split("")
    .map(function (el) {
      return el === el.toUpperCase() ? el.toLowerCase() : el.toUpperCase();
    })
    .join("");
}

console.log(alternateCase("Hello World"));
*/

// #3
/*
Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.
Examples (input -> output)
'! !'                 -> '! !'
'123456789'           -> ''
'This looks5 grea8t!' -> 'This looks great!'
Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.
*/
/*
// FIRST
// function stringClean(s) {
//   let result = "";
//   for (let i = 0; i < s.length; i++) {
//     if (isNaN(parseInt(s[i]))) {
//       result += s[i];
//     }
//   }
//   return result;
// }

// SECOND
function stringClean(s) {
  return s.replace(/\d/g, "");
}

console.log(stringClean("(E3at m2e2!!)"));
*/

// #4
/*
Modify the spacify function so that it returns the given string with spaces inserted between each character.
spacify("hello world") // returns "h e l l o   w o r l d"
*/
/*
function spacify(str) {
  return str.split("").join(" ");
}
console.log(spacify("hello world"));
*/

// #5
/*
If the winner is George Saint Pierre he will obviously say:
    "I am not impressed by your performance."
If the winner is Conor McGregor he will most undoubtedly say:
    "I'd like to take this chance to apologize.. To absolutely NOBODY!"
Note
The given name may varies in casing, eg., it can be "George Saint Pierre" or "geOrGe saiNT pieRRE". Your solution should treat both as the same thing (case-insensitive). 
*/
/*
var quote = function (fighter) {
  return fighter.toLowerCase() === "george saint pierre"
    ? "I am not impressed by your performance."
    : "I'd like to take this chance to apologize.. To absolutely NOBODY!";
};

console.log(quote("George Saint Pierre"));
console.log(quote("Conor McGregor"));
*/

// #6
/*
To complete this Kata you need to make a function multiplyAll/multiply_all which takes an array of integers as an argument. This function must return another function, which takes a single integer as an argument and returns a new array.
The returned array should consist of each of the elements from the first array multiplied by the integer.
Example:
multiplyAll([1, 2, 3])(2) = [2, 4, 6];
You must not mutate the original array.
*/
/*
function multiplyAll(x) {
  return function (multiplier) {
    return x.map((el, ind) => el * multiplier);
  };
}
*/

// #7

/*
Create a function that finds the integral of the expression passed.
In order to find the integral all you need to do is add one to the exponent (the second argument), and divide the coefficient (the first argument) by that new number.
For example for 3x^2, the integral would be 1x^3: we added 1 to the exponent, and divided the coefficient by that new number).
Notes:
    The output should be a string.
    The coefficient and exponent is always a positive integer.
Examples
 3, 2  -->  "1x^3"
12, 5  -->  "2x^6"
20, 1  -->  "10x^2"
40, 3  -->  "10x^4"
90, 2  -->  "30x^3"
*/
/*
function integrate(coefficient, exponent) {
  const first = exponent + 1;
  const second = coefficient / first;
  return `${second}x^${first}`;
}
console.log(integrate(12, 5));
*/

// 04.07.2023
/*
Task
Given an array/list of integers, find the Nth smallest element in the array.
Notes
    Array/list size is at least 3.
    Array/list's numbers could be a mixture of positives , negatives and zeros.
    Repetition in array/list's numbers could occur, so don't remove duplications.
Input >> Output Examples
arr=[3,1,2]            n=2    ==> return 2 
arr=[15,20,7,10,4,3]   n=3    ==> return 7 
arr=[2,169,13,-5,0,-1] n=4    ==> return 2 
arr=[2,1,3,3,1,2],     n=3    ==> return 2 
*/
/*
function nthSmallest(arr, pos) {
  const sorted = arr.sort((a, b) => a - b);
  return sorted[pos - 1];
}

console.log(nthSmallest([3, 1, 2], 2));
*/

// #2
/*
Several people are standing in a row divided into two teams.
The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.
Task
Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.
Notes
    Array size is at least 1.
    All numbers will be positive.
    Input >> Output Examples
rowWeights([13, 27, 49])  ==>  return (62, 27)
Explanation:
The first element 62 is the total weight of team 1, and the second element 27 is the total weight of team 2.
rowWeights([50, 60, 70, 80])  ==>  return (120, 140)
Explanation:
The first element 120 is the total weight of team 1, and the second element 140 is the total weight of team 2.
rowWeights([80])  ==>  return (80, 0)
Explanation:
The first element 80 is the total weight of team 1, and the second element 0 is the total weight of team 2.
*/
/*
function rowWeights(array) {
  let first = 0;
  let second = 0;
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      first += array[i];
    } else {
      second += array[i];
    }
  }
  return [first, second];
}

console.log(rowWeights([50, 60, 70, 80]));
console.log(rowWeights([70, 58, 75, 34, 91]));
*/

// #3
/*
1, 246, 2, 123, 3, 82, 6, 41 are the divisors of number 246. Squaring these divisors we get: 1, 60516, 4, 15129, 9, 6724, 36, 1681. The sum of these squares is 84100 which is 290 * 290.
Task
Find all integers between m and n (m and n integers with 1 <= m <= n) such that the sum of their squared divisors is itself a square.
We will return an array of subarrays or of tuples (in C an array of Pair) or a string. The subarrays (or tuples or Pairs) will have two elements: first the number the squared divisors of which is a square and then the sum of the squared divisors.
Example:
list_squared(1, 250) --> [[1, 1], [42, 2500], [246, 84100]]
list_squared(42, 250) --> [[42, 2500], [246, 84100]]
*/
// FIRST
// function listSquared(m, n) {
//   let result = [];
//   for (let num = m; num <= n; num++) {
//     let divisors = findDivisors(num);
//     let sumOfSquaredDivisors = divisors.reduce(
//       (acc, val) => acc + val * val,
//       0
//     );
//     if (isSquare(sumOfSquaredDivisors)) {
//       result.push([num, sumOfSquaredDivisors]);
//     }
//   }
//   return result;
// }
// function findDivisors(num) {
//   let divisors = [];
//   for (let i = 1; i <= num; i++) {
//     if (num % i === 0) {
//       divisors.push(i);
//     }
//   }
//   return divisors;
// }
// function isSquare(num) {
//   return Math.sqrt(num) % 1 === 0;
// }
/*
// SECOND
function listSquared(m, n) {
  // пустой массив для результата, в конце вернем
  let result = [];
  // перебираем числа от "m" до "n"
  for (let num = m; num <= n; num++) {
    // создадим пустой массив для записи делителей, будем использовать для вычисления суммы квадратов делителей
    let divisors = [];
    // создадим для суммы
    let sum = 0;
    // проверяем, является ли "i" делителем числа "num".
    for (let i = 1; i <= num; i++) {
      // Если остаток от деления равен 0, то пушим в массив "divisors"
      if (num % i === 0) {
        divisors.push(i);
      }
    }
    // применяем метод "reduce" к "divisors", чтобы получить сумму квадратов каждого элемента
    sum = divisors.reduce((acc, val) => acc + val * val, 0);

    // Делаем проверку, является ли полученная сумма квадратов сама по себе квадратом какого-то числа (заодного проверив, что это число целое(деление на 1 = 0))
    if (Math.sqrt(sum) % 1 === 0) {
      // если после примененя квадратного корня к получившемуся числу после суммирования квадратов элементов массива "divisots" не осталось остатка, то пушим в пустой массив "result"
      result.push([num, sum]);
    }
  }
  return result;
}

console.log(listSquared(1, 250));
console.log(listSquared(42, 250));
*/

// #4
/*
Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit (0-9), false otherwise.
*/
/*
String.prototype.digit = function () {
  return /^\d$/.test(this);
};


// #5
/*
You are running the calculation 2 + 2 * 2 + 2 * 2 and expect to get the answer 32 but instead the function keeps returning 10. Fix the function to make it return 32 without changing the number or the operators.
*/
/*
function orderOperations() {
  return (2 + 2) * (2 + 2) * 2;
}

console.log(orderOperations());
*/

// #6
/*
In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.
Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
--the order is: uppercase letters, lowercase, numbers and special characters.
*/
/*
function solve(s) {
  let countUpper = 0;
  let countLower = 0;
  let countDigit = 0;
  let countSpecial = 0;

  for (let i = 0; i < s.length; i++) {
    if (/[A-Z]/.test(s[i])) {
      countUpper++;
    } else if (/[a-z]/.test(s[i])) {
      countLower++;
    } else if (/[0-9]/.test(s[i])) {
      countDigit++;
    } else {
      countSpecial++;
    }
  }

  return [countUpper, countLower, countDigit, countSpecial];
}

console.log(solve("*'&ABCDabcde12345")); // [4, 5, 5, 3]
*/

// #7
/*
You can print your name on a billboard ad. Find out how much it will cost you. Each character has a default price of £30, but that can be different if you are given 2 parameters instead of 1.
You can not use multiplier "*" operator.
If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 leters * 30 = 600 (Space counts as a character).
*/
/*
function billboard(name, price = 30) {
  console.log([...name]);
  return [...name].reduce((cost, char) => {
    cost += price;
    return cost;
  }, 0);
}

console.log(billboard("Hjalmar Liupold", 40));
*/
/*
function cap(string) {
  const arr = string.split("");
  console.log(arr);
  arr[0] = arr[0].toUpperCase();
  console.log(arr);
  return arr.join("");
}
console.log(cap("jgfnfownfowenwe jngweraoimngwoijw jm3 friop3m4pio "));
*/
/*
const marks = [50, 60, 70, 80, 90];

function findMin(arr) {
  // const sorted = arr.sort((a, b) => a - b);
  // return sorted[0];

  return Math.min(...arr);
}

function findMax(arr) {
  // const sorted = arr.sort((a, b) => b - a);
  // return sorted[0];
  if (arr.length === 0) {
    return undefined;
  }
  let max = 0;
  arr.forEach((num) => {
    if (num > max) {
      max = num;
    }
  });
  return max;
}

console.log(findMin(marks));

console.log(findMax(marks));

console.log([..."gopeerpo edef d"]);
*/
// console.log("welcome to JS World"[0].toUpperCase());
/*
const arr = [1, 2, 3, 4, 4];

function duplicate(arr) {
  const unique = [...new Set(arr)];
  return unique;
}
console.log(duplicate(arr));
*/
/*
let cities = ["Saint-Petersburg", "Riga", "Milan"];
console.log(cities);
cities = [];
console.log(cities);
*/
/*
const arr = [11, 5, 4, 61, 23, 66, 24, 10, 3, 7];
function sortedByEven(arr) {
  const odd = arr.filter((num) => num % 2 === 1);
  const sorted = odd.sort((a, b) => a - b);
  const result = arr.map((num) => (num % 2 === 1 ? sorted.shift() : num));
  return result;
}

console.log(sortedByEven(arr));
*/

// 05.07
/*
Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime.
Per Wikipedia, a prime number ( or a prime ) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
Requirements
    You can assume you will be given an integer input.
    You can not assume that the integer will be only positive. You may be given negative numbers as well ( or 0 ).
    NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. Numbers go up to 2^31 ( or similar, depending on language ). Looping all the way up to n, or n/2, will be too slow.
Example
is_prime(1)   false 
is_prime(2)   true  
is_prime(-1)  false 
*/
/*
function isPrime(num) {
  // Задаем условие для поиска простого числа, оно не равно 0, не меньше 0, и не равно 1
  if (num === 0 || num < 0 || num === 1) {
    return false;
  }
  // тут начинаем итерацию с 2, потому что 1 это не простое число, его сразу откидываем. Проверяем входящее "num", делиться ли оно на любое число от 2 до квадратного корня от "num" без остатка. Если такое число найдено, то сразу выполняется false
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(0));
console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(73));
console.log(isPrime(-1));
console.log(isPrime(4));
*/

// #2
/*
This kata is designed to test your ability to extend the functionality of built-in classes. In this case, we want you to extend the built-in Array class with the following methods: square(), cube(), average(), sum(), even() and odd().
Explanation:
    square() must return a copy of the array, containing all values squared
    cube() must return a copy of the array, containing all values cubed
    average() must return the average of all array values; on an empty array must return NaN (note: the empty array is not tested in Ruby!)
    sum() must return the sum of all array values
    even() must return an array of all even numbers
    odd() must return an array of all odd numbers
Note: the original array must not be changed in any case!
Example
var numbers = [1, 2, 3, 4, 5];
numbers.square();  // must return [1, 4, 9, 16, 25]
numbers.cube();    // must return [1, 8, 27, 64, 125]
numbers.average(); // must return 3
numbers.sum();     // must return 15
numbers.even();    // must return [2, 4]
numbers.odd();     // must return [1, 3, 5]
*/
/*
let numbers = [1, 2, 3, 4, 5];
Array.prototype.square = function () {
  return this.map((num) => Math.pow(num, 2));
};

Array.prototype.cube = function () {
  return this.map((num) => Math.pow(num, 3));
};

Array.prototype.average = function () {
  // Вернем 0, если массив пустой
  if (this.length === 0) {
    return NaN;
  }
  const sum = this.reduce((acc, num) => acc + num, 0);
  return sum / this.length;
};

Array.prototype.sum = function () {
  return this.reduce((acc, num) => acc + num, 0);
};

Array.prototype.even = function () {
  return this.filter((num) => num % 2 === 0);
};

Array.prototype.odd = function () {
  return this.filter((num) => num % 2 !== 0);
};
*/

// #3
/*
Create a method all which takes two params:
    a sequence
    a function
and returns true if the function in the params returns true for every element in the sequence. Otherwise, it should return false. If the sequence is empty, it should return true, since technically nothing failed the test.
Example
all((1, 2, 3, 4, 5), greater_than_9) -> false
all((1, 2, 3, 4, 5), less_than_9)    -> True
*/
/*
function all(arr, fun) {
  return arr.every(fun);
}
*/

// #4
/*
A child is playing with a ball on the nth floor of a tall building. The height of this floor above ground level, h, is known.
He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).
His mother looks out of a window 1.5 meters from the ground.
How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?
Three conditions must be met for a valid experiment:
    Float parameter "h" in meters must be greater than 0
    Float parameter "bounce" must be greater than 0 and less than 1
    Float parameter "window" must be less than h.
If all three conditions above are fulfilled, return a positive integer, otherwise return -1.
Note:
The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.
Examples:
- h = 3, bounce = 0.66, window = 1.5, result is 3
- h = 3, bounce = 1, window = 1.5, result is -1 
(Condition 2) not fulfilled).
*/
/*
// FIRST
function bouncingBall(h, bounce, window) {
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {
    return -1;
  }
  let count = 1;
  while (h * bounce > window) {
    h *= bounce;
    count += 2;
  }
  return count;
}

console.log(bouncingBall(30.0, 0.66, 1.5));
console.log(bouncingBall(3.0, 1.0, 1.5));
*/
/*
// SECOND
function bouncingBall(h, bounce, window) {
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {
    return -1;
  }

  function jumpCount(newH, count) {
    if (newH <= window) {
      return count; // Останавливаем рекурсию, когда новая высота меньше или равна высоте окна
    }
    newH *= bounce; // Высчитываем высоту после отскока

    if (newH > window) {
      count += 2; // Добавляем 2 к счетчику, если новая высота больше высоты окна
    }

    return jumpCount(newH, count); // Рекурсивный вызов для следующего отскока
  }
  return jumpCount(h, 1); // Начинаем с 1, чтобы учесть исходное падение
}

console.log(bouncingBall(30.0, 0.66, 1.5));
console.log(bouncingBall(3.0, 1.0, 1.5));
*/

// 06.07.2023
// #1
/*
Given an array/list of integers, find the Nth smallest element in the array.
Notes
    Array/list size is at least 3.
    Array/list's numbers could be a mixture of positives , negatives and zeros.
    Repetition in array/list's numbers could occur, so don't remove duplications.
Input >> Output Examples
arr=[3,1,2]            n=2    ==> return 2 
arr=[15,20,7,10,4,3]   n=3    ==> return 7 
arr=[2,169,13,-5,0,-1] n=4    ==> return 2 
arr=[2,1,3,3,1,2],     n=3    ==> return 2 
*/
/*
function nthSmallest(arr, pos) {
  const sorted = arr.sort((a, b) => a - b);
  return sorted[pos - 1];
}

console.log(nthSmallest([3, 1, 2], 2));
*/

// #2
/*
Color Ghost
Create a class Ghost
Ghost objects are instantiated without any arguments.
Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated
ghost = new Ghost();
ghost.color //=> "white" or "yellow" or "purple" or "red"
*/
/*
class Ghost {
  constructor() {
    const colors = ["white", "yellow", "purple", "red"];
    // Тут ищем случайный цвет
    this.color = colors[Math.floor(Math.random() * colors.length)];
  }
}
*/

// #3
/*
Enough is enough!
Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like these sessions, since the motif usually repeats. He isn't fond of seeing the Eiffel tower 40 times.
He tells them that he will only sit for the session if they show the same motif at most N times. Luckily, Alice and Bob are able to encode the motif as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?
Task
Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
With list [20,37,20,21] and number 1, the result would be [20,37,21].
*/
/*
function deleteNth(arr, n) {
  const countMap = new Map();
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    const count = countMap.get(element) || 0;
    if (count < n) {
      countMap.set(element, count + 1);
      result.push(element);
    }
  }
  return result;
}

console.log(deleteNth([20, 37, 20, 21, 1, 1, 1, 2], 1));
*/

// 07.07.2023
// #1
/*
 Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.
Examples
replace("Hi!") === "H!!"
replace("!Hi! Hi!") === "!H!! H!!"
replace("aeiou") === "!!!!!"
replace("ABCDE") === "!BCD!"
*/
/*
function replac(s) {
  const regExp = new RegExp(/[aeiou]/gi);
  return s.replace(regExp, "!");
}
console.log(replac("Aeiou!!!"));
*/

// #2
/*
In this Kata your task will be to return the count of pairs that have consecutive numbers as follows:
pairs([1,2,5,8,-4,-3,7,6,5]) = 3
The pairs are selected as follows [(1,2),(5,8),(-4,-3),(7,6),5]
--the first pair is (1,2) and the numbers in the pair are consecutive; Count = 1
--the second pair is (5,8) and are not consecutive
--the third pair is (-4,-3), consecutive. Count = 2
--the fourth pair is (7,6), also consecutive. Count = 3. 
--the last digit has no pair, so we ignore.
*/ // if (ar.length % 2 === 1) {
//   ar.splice(ar.length - 1, 1);
// }
/*
function pairs(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i += 2) {
    if (Math.abs(arr[i] - arr[i + 1]) === 1) {
      count += 1;
    }
  }
  return count;
}
console.log(pairs([21, 20, 22, 40, 39, -56, 30, -55, 95, 94]));
*/

// #3
/*
Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.
Examples
Valid arrays
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:
a = [121, 144, 19, 161, 19, 144, 19, 11] 
b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
Invalid arrays
If, for example, we change the first number to something else, comp is not returning true anymore:
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a,b) returns false because in b 132 is not the square of any number of a.
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
comp(a,b) returns false because in b 36100 is not the square of any number of a.
*/
// FIRST
/*
function comp(array1, array2) {
  if (array1 === null || array2 === null) {
    return false;
  }

  let modifyArray1 = array1.map((el) => el * el);
  console.log(modifyArray1);

  let removedPairs1 = modifyArray1
    .filter((num, index) => modifyArray1.indexOf(num) === index && num !== null)
    .sort((a, b) => a - b);
  console.log(removedPairs1);

  let removedPairs2 = array2
    .filter((num, index) => array2.indexOf(num) === index && num !== null)
    .sort((a, b) => a - b);
  console.log(removedPairs2);

  return JSON.stringify(removedPairs1) === JSON.stringify(removedPairs2);
}

console.log(
  comp(
    [121, 144, 19, 161, 19, 144, 19, 11],
    [132, 14641, 20736, 361, 25921, 361, 20736, 361]
  )
);
console.log(
  comp(
    [121, 144, 19, 161, 19, 144, 19, 11],
    [121, 14641, 20736, 361, 25921, 361, 20736, 361]
  )
);
console.log(comp([2, 2, 3], [4, 9, 9]));
*/

// SECOND
/*
function comp(array1, array2) {
  if (array1 === null || array2 === null) {
    return false;
  }

  if (array1.length !== array2.length) {
    return false;
  }

  let sortedArray1 = array1.map((el) => el * el).sort((a, b) => a - b);
  let sortedArray2 = array2.sort((a, b) => a - b);

  for (let i = 0; i < sortedArray1.length; i++) {
    if (sortedArray1[i] !== sortedArray2[i]) {
      return false;
    }
  }

  return JSON.stringify(sortedArray1) === JSON.stringify(sortedArray2);
}

console.log(
  comp(
    [121, 144, 19, 161, 19, 144, 19, 11],
    [132, 14641, 20736, 361, 25921, 361, 20736, 361]
  )
);
console.log(
  comp(
    [121, 144, 19, 161, 19, 144, 19, 11],
    [121, 14641, 20736, 361, 25921, 361, 20736, 361]
  )
);
console.log(comp([2, 2, 3], [4, 9, 9]));
*/

// THIRD
/*
function comp(array1, array2) {
  if (array1 == null || array2 == null) {
    return false;
  }
  array1.sort((a, b) => a - b);
  array2.sort((a, b) => a - b);
  return array1.map((v) => v * v).every((v, i) => v == array2[i]);
}

console.log(
  comp(
    [121, 144, 19, 161, 19, 144, 19, 11],
    [132, 14641, 20736, 361, 25921, 361, 20736, 361]
  )
);
console.log(
  comp(
    [121, 144, 19, 161, 19, 144, 19, 11],
    [121, 14641, 20736, 361, 25921, 361, 20736, 361]
  )
);
console.log(comp([2, 2, 3], [4, 9, 9]));
*/

// #4
/*
Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

Unfortunately for you, your drive is very bumpy! Given a string showing either flat road (_) or bumps (n). If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead

*/
/*
function bump(x) {
  const str = x.split("");
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "n") {
      count++;
    }
  }
  return count > 15 ? "Car Dead" : "Woohoo!";
}

console.log(bump("__nn_nnnn__n_n___n____nn__nnn"));
console.log(bump("_nnnnnnn_n__n______nn__nn_nnn"));
*/

// #5
/*
Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .
Notes
    Array/list will contain positives only .
    Array/list will always have even size
Input >> Output Examples
minSum({5,4,2,3}) ==> return (22) 
Explanation:
    The minimum sum obtained from summing each two integers product ,  5*2 + 3*4 = 22
minSum({12,6,10,26,3,24}) ==> return (342)
Explanation:
    The minimum sum obtained from summing each two integers product ,  26*3 + 24*6 + 12*10 = 342
minSum({9,2,8,7,5,4,0,6}) ==> return (74)
Explanation:
    The minimum sum obtained from summing each two integers product ,  9*0 + 8*2 +7*4 +6*5 = 74
*/
/*
function minSum(arr) {
  arr.sort((a, b) => a - b);
  let left = 0;
  let right = arr.length - 1;
  let sum = 0;
  while (left < right) {
    sum += arr[left] * arr[right];
    left++;
    right--;
  }
  return sum;
}

console.log(minSum([5, 4, 2, 3]));
*/

// #6
/*
Longest Palindrome
Find the length of the longest substring in the given string s that is the same in reverse.
As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.
If the length of the input string is 0, the return value must be 0.
Example:
"a" -> 1 
"aab" -> 2  
"abcde" -> 1
"zzbaabcd" -> 4
"" -> 0
*/
/*
function longestPalindrome(s) {
  if (!s) return 0;
  // первый цикл итерирует от длины строки s до 1. Он представляет длину подстрок, которые будут проверяться на палиндром
  for (let c = s.length; c > 0; c--) {
    // второй цикл итерирует по индексам строки s от 0 до s.length-c. Он представляет длину подстрок, которые будут проверяться
    for (let i = 0; i <= s.length - c; i++) {
      // эта строка извлекает подстроку из строки s, начиная с индекса i, и имеющую длину "c"
      let check = s.substr(i, c);
      // Проверка на палиндром
      if (check === check.split("").reverse().join("")) return c;
    }
  }
}
console.log(longestPalindrome("baablkj12345432133d"));
*/

// #7
/*
Philip's just turned four and he wants to know how old he will be in various years in the future such as 2090 or 3044. His parents can't keep up calculating this so they've begged you to help them out by writing a programme that can answer Philip's endless questions.
Your task is to write a function that takes two parameters: the year of birth and the year to count years in relation to. As Philip is getting more curious every day he may soon want to know how many years it was until he would be born, so your function needs to work with both dates in the future and in the past.
Provide output in this format: For dates in the future: "You are ... year(s) old." For dates in the past: "You will be born in ... year(s)." If the year of birth equals the year requested return: "You were born this very year!"
"..." are to be replaced by the number, followed and proceeded by a single space. Mind that you need to account for both "year" and "years", depending on the result.
*/
/*
function calculateAge(yearOfBirth, yearToCount) {
  const age = yearToCount - yearOfBirth;

  if (age === 0) {
    return "You were born this very year!";
  } else if (age > 0) {
    return `You are ${age} ${age === 1 ? "year" : "years"} old.`;
  } else {
    return `You will be born in ${Math.abs(age)} ${
      Math.abs(age) === 1 ? "year" : "years"
    }.`;
  }
}

console.log(calculateAge(2012, 2016));
console.log(calculateAge(2000, 1990));
console.log(calculateAge(900, 2900));
console.log(calculateAge(2012, 2012));
console.log(calculateAge(2011, 2012));
*/

// 08.07.2023
/*
You are given a secret message you need to decipher. Here are the things you need to know to decipher it:
For each word:
    the second and the last letter is switched (e.g. Hello becomes Holle)
    the first letter is replaced by its character code (e.g. H becomes 72)
Note: there are no special characters used, only letters and spaces
Examples
decipherThis('72olle 103doo 100ya'); // 'Hello good day'
decipherThis('82yade 115te 103o'); // 'Ready set go'
*/
/*
function decipherThis(str) {
  let words = str.split(" ");

  let decipheredWords = words.map((word) => {
    let charCode = word.match(/\d+/)[0];
    let decodedWord = word.replace(/\d+/, String.fromCharCode(charCode));

    if (decodedWord.length > 1) {
      let secondLetter = decodedWord[1];
      let lastLetter = decodedWord[decodedWord.length - 1];

      decodedWord =
        decodedWord.substr(0, 1) + lastLetter + decodedWord.substr(2);
      decodedWord =
        decodedWord.substr(0, decodedWord.length - 1) + secondLetter;
    }

    return decodedWord;
  });

  return decipheredWords.join(" ");
}

console.log(decipherThis("72olle 103doo 100ya")); // 'Hello good day'
console.log(decipherThis("82yade 115te 103o")); // 'Ready set go'
*/

// 09.07.2023

// #1
/*
Given an unsorted array of 3 positive integers [ n1, n2, n3 ], determine if it is possible to form a Pythagorean Triple using those 3 integers.
A Pythagorean Triple consists of arranging 3 integers, such that:
a2 + b2 = c2
Examples
[5, 3, 4] : it is possible to form a Pythagorean Triple using these 3 integers: 32 + 42 = 52
[3, 4, 5] : it is possible to form a Pythagorean Triple using these 3 integers: 32 + 42 = 52
[13, 12, 5] : it is possible to form a Pythagorean Triple using these 3 integers: 52 + 122 = 132
[100, 3, 999] : it is NOT possible to form a Pythagorean Triple using these 3 integers - no matter how you arrange them, you will never find a way to satisfy the equation a2 + b2 = c2
*/
/*
function isPythagoreanTriple(integers) {
  let first = Math.pow(integers[0], 2);
  let second = Math.pow(integers[1], 2);
  let third = Math.pow(integers[2], 2);
  console.log(first, second, third);
  if (first + second === third) {
    return true;
  } else if (first + third === second) {
    return true;
  } else if (third + second === first) {
    return true;
  } else {
    return false;
  }
}

console.log(isPythagoreanTriple([3, 4, 5]));
console.log(isPythagoreanTriple([3, 4, 9]));
*/

// #2
/*

Write a function that converts any sentence into a V A P O R W A V E sentence. a V A P O R W A V E sentence converts all the letters into uppercase, and adds 2 spaces between each letter (or special character) to create this V A P O R W A V E effect.
Note that spaces should be ignored in this case.
Examples
"Lets go to the movies"       -->  "L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S"
"Why isn't my code working?"  -->  "W  H  Y  I  S  N  '  T  M  Y  C  O  D  E  W  O  R  K  I  N  G  ?"
*/
/*
function vaporcode(string) {
  let str = string.toUpperCase().split("");
  console.log(str);
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      str.splice(i, 1);
      i--;
    }
  }
  return str.join("  ");
}

console.log(vaporcode("Lets go to the movies"));
*/

// #3
/*
The word i18n is a common abbreviation of internationalization in the developer community, used instead of typing the whole word and trying to spell it correctly. Similarly, a11y is an abbreviation of accessibility.
Write a function that takes a string and turns any and all "words" (see below) within that string of length 4 or greater into an abbreviation, following these rules:
    A "word" is a sequence of alphabetical characters. By this definition, any other character like a space or hyphen (eg. "elephant-ride") will split up a series of letters into two words (eg. "elephant" and "ride").
    The abbreviated version of the word should have the first letter, then the number of removed characters, then the last letter (eg. "elephant ride" => "e6t r2e").
Example
abbreviate("elephant-rides are really fun!")
//          ^^^^^^^^*^^^^^*^^^*^^^^^^*^^^*
// words (^):   "elephant" "rides" "are" "really" "fun"
//                123456     123     1     1234     1
// ignore short words:               X              X
// abbreviate:    "e6t"     "r3s"  "are"  "r4y"   "fun"
// all non-word characters (*) remain in place
//                     "-"      " "    " "     " "     "!"
=== "e6t-r3s are r4y fun!"
*/

// FIRST
/*
function abbreviate(string) {
  // Разбиваем строку на слова, используя регулярное выражение /b\/, которое соотвествует границам слов
  const words = string.split(/\b/);
  console.log(words);

  // Применяем функцию map() к массиву слов
  const abbreviation = words.map((word) => {
    // Проверяем, соответствует ли слово условиям для сокращения (с помощью регулярного выражения /\w+/ - содержит ли строка один или более символов, которые являются буквами, цифрами или символом подчеркивания)
    if (word.length >= 4 && /\w+/.test(word)) {
      // Если да, то создаем аббревиатуру
      const firstLetter = word[0]; // первая буква
      const lastLetter = word[word.length - 1]; // последняя буква
      const removedChar = word.slice(1, -1).length; // количество удаленных букв

      // Составляем аббревиатуру, собирая первую, последнюю буквы и количество удаленных
      return `${firstLetter}${removedChar}${lastLetter}`;
    } else {
      return word;
    }
  });
  return abbreviation.join("");
}

console.log(abbreviate("elephant-rides are really fun!"));
*/

// SECOND
/*
function abbreviate(string) {
  return string.replace(/\w{4,}/g, function (word) {
    return word[0] + (word.length - 2) + word.slice(-1);
  });
}
console.log(abbreviate("elephant-rides are really fun!"));
*/

// #4
/*
Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.
Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.
min([1,2,3,4,5], 'value') // => 1
min([1,2,3,4,5], 'index') // => 0
*/
/*
function min(arr, toReturn) {
  let minValue = Math.min(...arr);
  if (toReturn === "value") {
    return minValue;
  } else if (toReturn === "index") {
    return arr.indexOf(minValue);
  }
}

console.log(min([1, 2, 3, 4, 5], "value"));
console.log(min([1, 2, 3, 4, 5], "index"));
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
  if (a.length === 0 || b.length === 0) {
    return a;
  }
  return a.filter((value) => !b.includes(value));
}

console.log(arrayDiff([1, 2, 2, 3, 3], [1, 2]));
*/

// #6
/*
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
Example
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.
Don't forget the space after the closing parentheses!
*/
// FIRST
// function createPhoneNumber(numbers) {
//   return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;
// }

// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
/*
// SECOND
function createPhoneNumber(numbers) {
  numbers = numbers.join("");
  return (
    "(" +
    numbers.substring(0, 3) +
    ") " +
    numbers.substring(3, 6) +
    "-" +
    numbers.substring(6)
  );
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
*/

// #7
/*
Create a function add(n)/Add(n) which returns a function that always adds n to any number

var addOne = add(1);
addOne(3); // 4
var addThree = add(3);
addThree(3); // 6
*/
/*
function add(n) {
  return function (x) {
    return n + x;
  };
}
*/

// #8
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
/*
function duplicateEncode(word) {
  word = word.toLowerCase();
  let result = "";

  for (let i = 0; i < word.length; i++) {
    if (word.indexOf(word[i]) === word.lastIndexOf(word[i])) {
      result += "(";
    } else {
      result += ")";
    }
  }

  return result;
}

console.log(duplicateEncode("recede"));
console.log(duplicateEncode("din"));
*/

// 10.07.2023

// #1
/*
Take a number: 56789. Rotate left, you get 67895.
Keep the first digit in place and rotate left the other digits: 68957.
Keep the first two digits in place and rotate the other ones: 68579.
Keep the first three digits and rotate left the rest: 68597. Now it is over since keeping the first four it remains only one digit which rotated is itself.
You have the following sequence of numbers:
56789 -> 67895 -> 68957 -> 68579 -> 68597
and you must return the greatest: 68957.
Task
Write function max_rot(n) which given a positive integer n returns the maximum number you got doing rotations similar to the above example.
So max_rot (or maxRot or ... depending on the language) is such as:
    max_rot(56789) should return 68957
    max_rot(38458215) should return 85821534
*/
/*
function max_rot(n) {
  // Преобразуем число в строку
  let number = String(n);
  // Создаем массив, первым элементом будет "number"
  let rotations = [number];

  // В цикле перебираем цифры числа "number". Он начинается с 0 и продолжается до предпоследней цифры, так как нет необходимости переворачивать последнюю цифру.
  for (let i = 0; i < number.length - 1; i++) {
    // В каждой итерации строка выполняет поворот, перемещая цифру с индексом "i" в конец числа "number". Это достигается путем создания трех подстрок из "number" (подстроки до цифры, подстроки после цифры, и самой цифры) Затем подстроки объединяются в нужном порядке, чтобы получить повертнутое число
    number = number.slice(0, i) + number.slice(i + 1) + number[i];
    rotations.push(number);
  }

  return Math.max(...rotations);
}

console.log(max_rot(38458215));
*/

// #2
/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).
Note: If the number is a multiple of both 3 and 5, only count it once.
*/
/*
function solution(number) {
  if (number < 0) {
    return 0;
  }
  let count = 0;

  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      count += i;
    }
  }
  console.log(count);
  return count;
}

console.log(solution(100));
*/

// #3
/*
With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them.
Basements (negatives) stay the same as the universal level.
More information here
Examples
1  =>  0 
0  =>  0
5  =>  4
15  =>  13
-3  =>  -3
*/
/*
function getRealFloor(n) {
  if (n === 0 || n === 1) {
    return 0;
  } else if (n < 0) {
    return n;
  } else if (n > 1 && n < 13) {
    return n - 1;
  } else if (n >= 13) {
    return n - 2;
  } else {
    return n;
  }
}

console.log(getRealFloor(15));
*/

// #4
/*
Given three arrays of integers, return the sum of elements that are common in all three arrays.
For example:
common([1,2,3],[5,3,2],[7,3,2]) = 5 because 2 & 3 are common in all 3 arrays
common([1,2,2,3],[5,3,2,2],[7,3,2,2]) = 7 because 2,2 & 3 are common in the 3 arrays
*/
/*
const common = (a, b, c) => {
  [a, b, c] = [a, b, c].map((el) =>
    el.reduce((sum, num) => ((sum[num] = (sum[num] || 0) + 1), sum), {})
  );
  return Object.keys(a).reduce(
    (sum, key) => sum + Math.min(a[key] || 0, b[key] || 0, c[key] || 0) * key,
    0
  );
};

console.log(common([1, 2, 3], [5, 3, 2], [7, 3, 2]));
*/

// 11.07.2023

// #1
/*
Write a function that doubles every second integer in a list, starting from the left.
Example:
For input array/list :
[1,2,3,4]
the function should return :
[1,4,3,8]
*/
/*
function doubleEveryOther(a) {
  return (doubled = a.map((num, index) => {
    if (index % 2 === 1) {
      return num * 2;
    } else {
      return num;
    }
  }));
}

console.log(doubleEveryOther([1, 2, 3, 4]));
*/

// #2
/*
Your colleagues have been good enough(?) to buy you a birthday gift. Even though it is your birthday and not theirs, they have decided to play pass the parcel with it so that everyone has an even chance of winning. There are multiple presents, and you will receive one, but not all are nice... One even explodes and covers you in soil... strange office. To make up for this one present is a dog! Happy days! (do not buy dogs as presents, and if you do, never wrap them).
Depending on the number ofromCodef passes in the game (y), and the present you unwrap (x), return as follows:
x == goodpresent --> return x with num of passes added to each charCode (turn to charCode, add y to each, turn back)
x == crap || x == empty --> return string sorted alphabetically
x == bang --> return string turned to char codes, each code reduced by number of passes and summed to a single figure
x == badpresent --> return 'Take this back!'
x == dog, return 'pass out from excitement y times' (where y is the value given for y).
*/
/*
function present(x, y) {
  if (x === "goodpresent") {
    let convertedStr = "";
    for (let i = 0; i < x.length; i++) {
      const char = x[i];
      const ascii = char.charCodeAt() + y;
      const convertedChar = String.fromCharCode(ascii);
      convertedStr += convertedChar;
    }
    return convertedStr;
  }
  if (x === "empty") {
    return x;
  }

  if (x === "crap") {
    return x.split("").sort().join("");
  }

  if (x === "bang") {
    const charCodes = x.split("").map((char) => char.charCodeAt() - y);
    const sum = charCodes.reduce((acc, val) => acc + val, 0);
    return sum;
  }

  if (x === "badpresent") {
    return "Take this back!";
  }

  if (x === "dog") {
    return `pass out from excitement ${y} times`;
  }
}

console.log(present("goodpresent", 9));
console.log(present("badpresent", 3));
console.log(present("crap", 10));
console.log(present("bang", 6));
console.log(present("dog", 10));
*/

// #3
/*
A trick I learned in elementary school to determine whether or not a number was divisible by three is to add all of the integers in the number together and to divide the resulting sum by three. If there is no remainder from dividing the sum by three, then the original number is divisible by three as well.
Given a series of digits as a string, determine if the number represented by the string is divisible by three.
Example:
"123"      -> true
"8409"     -> true
"100853"   -> false
"33333333" -> true
"7"        -> false
Try to avoid using the % (modulo) operator.
*/
/*
function divisibleByThree(str) {
  let arr = str.split("");
  console.log(arr);
  const arrToNumber = arr.map((strDig) => {
    return Number(strDig);
  });
  const divide = arrToNumber.reduce((acc, curr) => {
    return acc + curr;
  });
  console.log(divide);
  return divide % 3 === 0 ? true : false;
}

console.log(divisibleByThree("123"));
console.log(divisibleByThree("19254"));
console.log(divisibleByThree("88"));
*/

// #4
/*
Given an array of integers (x), and a target (t), you must find out if any two consecutive numbers in the array sum to t. If so, remove the second number.
Example:
x = [1, 2, 3, 4, 5]
t = 3
1+2 = t, so remove 2. No other pairs = t, so rest of array remains:
[1, 3, 4, 5]
Work through the array from left to right.
Return the resulting array.
*/
// function trouble(x, t) {
//   let newArr = [];
//   for (let i = 0; i < x.length; i++) {
//     if (x[i] + x[i + 1] !== t) {
//       newArr.push(x[i]);
//     } else {
//       newArr.push(x[i]);
//       i++;
//     }
//   }
//   return newArr;
// }
/*
function trouble(x, t) {
  for (let i = 0; i < x.length; i++) {
    if (x[i] + x[i + 1] === t) {
      x.splice(i + 1, 1);
      i--;
    }
  }
  return x;
}

console.log(trouble([4, 1, 1, 1, 4], 2));
*/

// #5
/*
The main part of this game is merging identical tiles in a row.
    Implement a function that models the process of merging all of the tile values in a single row.
    This function takes the array line as a parameter and returns a new array with the tile values from line slid towards the front of the array (index 0) and merged.
    A given tile can only merge once.
    Empty grid squares are represented as zeros.
    Your function should work on arrays containing arbitrary number of elements.
Examples
merge([2,0,2,2])  -->  [4,2,0,0]
Another example with repeated merges:
merge([4,4,8,16])  -->  [8,8,16,0]
merge([8,8,16,0])  -->  [16,16,0,0]
merge([16,16,0,0]) -->  [32,0,0,0]
*/
/*
function merge(line) {
  // Создаем новый массив с той же длиной, что и входной массив "line", заполняем его значениями 0
  const result = Array(line.length).fill(0);
  // Объявляем переменную для текущего индекса
  let currentIndex = 0;
  // Начинаем цикл
  for (let i = 0; i < line.length; i++) {
    const num = line[i];
    // Проверяем, не является ли текущий элемент ненулевым
    if (num !== 0) {
      // Проверяем, равно ли значение в массиве "result" с индексом "result[currentIndex]"
      if (result[currentIndex] === 0) {
        // Присваивает текущий элемент "num" в массиве "result" по индексу "currentIndex"
        result[currentIndex] = num;
        // Проверяем, равно ли значение в массиве "result" по индексу "currentIndex"
      } else if (result[currentIndex] === num) {
        // Умножаем
        result[currentIndex] *= 2;
        // Увеличиваем значение на 1 и продолжаем итерироваться
        currentIndex++;
        // Если предыдущие значения не выполнятся, то есть текущий элемент "num" не равен 0 и не равен значению в массиве "result" по индексу "currentIndex"
      } else {
        // Переходим к следующей позиции
        currentIndex++;
        result[currentIndex] = num;
      }
    }
  }
  return result;
}

console.log(merge([2, 0, 2, 2]));
*/

// #6
/*
A researcher is studying cell division in a large number of samples. Counting the cells in each sample is automated, but when she looks at the data, she immediately notices that something is wrong.
The data are arrays of integers corresponding to the number of cells in the sample over time. The first element data[0] is the initial count. The next element data[1] is the cell count at a later time. data[2] is the next count, and so on.
The cells are reproducing, so the elements of the array are supposed to be non-decreasing (there is no cell death), but the automatic cell counter has undercounted. In fact, the researcher has verified that the counter undercounts by 1 at random. The error rate is unknown.
Your task is to create a new non-decreasing array that is minimally different from the data array. For example, if the data = [1, 1, 2, 2, 1, 2, 2, 2, 2] then the returned array should be [1, 1, 2, 2, 2, 2, 2, 2, 2] because data[4] < data[3] is clearly an error.
The first entry of the array is correct, and does not require an adjustment.
The array will never be empty.
*/
/*
function cleanedCounts(data) {
  const result = [data[0]];

  for (let i = 1; i < data.length; i++) {
    if (data[i] < result[i - 1]) {
      result.push(result[i - 1]);
    } else {
      result.push(data[i]);
    }
  }
  return result;
}

console.log(cleanedCounts([5, 5, 6, 5, 5, 5, 5, 6]));
*/

// #7
/*
The number n is Evil if it has an even number of 1's in its binary representation.
The first few Evil numbers: 3, 5, 6, 9, 10, 12, 15, 17, 18, 20
The number n is Odious if it has an odd number of 1's in its binary representation.
The first few Odious numbers: 1, 2, 4, 7, 8, 11, 13, 14, 16, 19
You have to write a function that determine if a number is Evil of Odious, function should return "It's Evil!" in case of evil number and "It's Odious!" in case of odious number.
good luck :)
*/
/*
function evil(n) {
  let binary = n.toString(2).split("");
  let count = 0;
  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === "1") {
      count++;
    }
  }
  return count % 2 === 0 ? "It's Evil!" : "It's Odious!";
}

console.log(evil(1));
console.log(evil(2));
console.log(evil(3));
*/

// #8
/*
Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.
For example, if this array were passed as an argument:
["Telescopes", "Glasses", "Eyes", "Monocles"]
Your function would return the following array:
["Eyes", "Glasses", "Monocles", "Telescopes"]
All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.
*/
/*
function sortByLength(array) {
  return array.sort((a, b) => a.length - b.length);
}

console.log(sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"]));
console.log(sortByLength(["", "Moderately", "Brains", "Pizza"]));
console.log(sortByLength(["Longer", "Longest", "Short"]));
*/

// #9
/*
Given two arrays of integers m and n, test if they contain at least one identical element. Return true if they do; false if not.
Your code must handle any value within the range of a 32-bit integer, and must be capable of handling either array being empty (which is a false result, as there are no duplicated elements).
*/
/*
function duplicateElements(m, n) {
  return m.some((v) => m.includes(v));
}
console.log(duplicateElements([1, 2, 3], [4, 5, 6]));
*/

// #10
/*
Our fruit guy has a bag of fruit (represented as an array of strings) where some fruits are rotten. He wants to replace all the rotten pieces of fruit with fresh ones. For example, given ["apple","rottenBanana","apple"] the replaced array should be ["apple","banana","apple"]. Your task is to implement a method that accepts an array of strings containing fruits should returns an array of strings where all the rotten fruits are replaced by good ones.
Notes
    If the array is null/nil/None or empty you should return empty array ([]).
    The rotten fruit name will be in this camelcase (rottenFruit).
    The returned array should be in lowercase.
*/
/*
function removeRotten(bagOfFruits) {
  if (!Array.isArray(bagOfFruits) || bagOfFruits.length === 0) {
    return [];
  }
  let result = [];
  let rotten = "rotten";
  for (let i = 0; i < bagOfFruits.length; i++) {
    let fruit = bagOfFruits[i];
    if (fruit.includes(rotten)) {
      result.push(fruit.replace(rotten, "").toLowerCase());
    } else {
      result.push(fruit);
    }
  }
  return result;
}

console.log(
  removeRotten(["apple", "rottenBanana", "kiwi", "melone", "orange"])
);
console.log(removeRotten([]));
*/

// #11
/*
Here is Jim's countdown code that he is not able to change any more:
function countdown() {
  var ret = "";
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  for (var number in numbers) {
    if (ret) ret += ", ";
    if (number < 10)
      number = 10 - number;
    else if (number == 10)
      number = "Zero";
    ret += number;
  }
  ret += "!";
  return ret;
}
Write a function fix_countdown() that contains a fix to make countdown() work again.
*/
/*
function fix_countdown() {
  delete Array.prototype.Dammit;
}

console.log(fix_countdown());
*/

// #12
/*
At work I need to keep a timesheet, by noting which project I was working on every 15 minutes. I have an timer that beeps every 15 minutes to prompt me to note down what I was working on at that point, but sometimes when I'm away from my desk or working continuously on one project, I don't note anything down and these get recorded as null.
Task:
Help me populate my timesheet by replacing any null values in the array with the correct project name which is given by surrounding matching values.
Examples:
fill_gaps([1,null,1]) -> [1,1,1]   # Replace nulll values surrounded by matching values
fill_gaps([1,null,null,null,1]) -> [1,1,1,1,1]  # There may be multiple nulls
fill_gaps([1,null,1,2,null,2]) -> [1,1,1,2,2,2]  # There may be multiple replacements required
fill_gaps([1,null,2,null,2,null,1]) -> [1,null,2,2,2,null,1]  # No nesting.
fill_gaps([1,null,2]) -> [1,null,2] # No replacement if ends don't match
fill_gaps([null,1,null]) -> [null,1,null] # No replacement if ends don't match off the ends of the array
fill_gaps(['codewars', null, null, 'codewars', 'real work', null, null, 'real work']) -> ["codewars", "codewars", "codewars", "codewars", "real work", "real work", "real work", "real work"] # Works with strings too
Input:
An array of values some of which will be null
Output:
An array with any consecutive null elements surrounded by equal values replaced by that value.
Note:
Input will always be a valid array.
*/
/*
function fill_gaps(arr) {
  const result = arr.slice();
  for (let i = 1; i < result.length - 1; i++) {
    if (result[i] === null && result[i - 1] === result[i + 1]) {
      result[i] = result[i - 1];
    }
  }
  return result;
}

console.log(fill_gaps([1, null, 1, 2, null, 2]));
console.log(fill_gaps([1, null, 2, null, 2, null, 1]));
console.log(fill_gaps([1, null, null, null, 1]));
console.log(fill_gaps([null, 1, null]));
*/

// #13
/*
Given an array/list [] of integers , Find the product of the k maximal numbers.
Notes
    Array/list size is at least 3.
    Array/list's numbers Will be mixture of positives , negatives and zeros
    Repetition of numbers in the array/list could occur.
Input >> Output Examples
maxProduct ({4, 3, 5}, 2) ==>  return (20)
Explanation:
    Since the size (k) equal 2 , then the subsequence of size 2 whose gives product of maxima is 5 * 4 = 20.
maxProduct ({8, 10 , 9, 7}, 3) ==>  return (720)
Explanation:
    Since the size (k) equal 3 , then the subsequence of size 3 whose gives product of maxima is  8 * 9 * 10 = 720.
maxProduct ({10, 8, 3, 2, 1, 4, 10}, 5) ==> return (9600)
Explanation:
    Since the size (k) equal 5 , then the subsequence of size 5 whose gives product of maxima is  10 * 10 * 8 * 4 * 3 = 9600.
maxProduct ({-4, -27, -15, -6, -1}, 2) ==> return (4)
Explanation:
    Since the size (k) equal 2 , then the subsequence of size 2 whose gives product of maxima is  -4 * -1 = 4.
maxProduct ({10, 3, -1, -27} , 3)  return (-30)
Explanation:
    Since the size (k) equal 3 , then the subsequence of size 3 whose gives product of maxima is 10 * 3 * -1 = -30 .
*/
/*
function maxProduct(numbers, size) {
  let sum = 1;
  let arr = numbers.sort((a, b) => b - a);
  console.log(arr);
  for (let i = 0; i < size; i++) {
    sum *= arr[i];
  }

  return sum;
}

console.log(maxProduct([4, 3, 5], 2));
*/

// 12.07.2023

// #1
/*
A startup office has an ongoing problem with its bin. Due to low budgets, they don't hire cleaners. As a result, the staff are left to voluntarily empty the bin. It has emerged that a voluntary system is not working and the bin is often overflowing. One staff member has suggested creating a rota system based upon the staff seating plan.
Create a function binRota that accepts a 2D array of names. The function will return a single array containing staff names in the order that they should empty the bin.
Adding to the problem, the office has some temporary staff. This means that the seating plan changes every month. Both staff members' names and the number of rows of seats may change. Ensure that the function binRota works when tested with these changes.
Notes:
    All the rows will always be the same length as each other.
    There will be no empty spaces in the seating plan.
    There will be no empty arrays.
    Each row will be at least one seat long.
An example seating plan is as follows:
[ ["Stefan", "Raj",    "Marie"],
  ["Alexa",  "Amy",    "Edward"],
  ["Liz",    "Claire", "Juan"],
  ["Dee",    "Luke",   "Katie"] ]
The rota should start with Stefan and end with Dee, taking the left-right zigzag path as illustrated by the red line:
As an output you would expect in this case:
["Stefan", "Raj", "Marie", "Edward", "Amy", "Alexa", "Liz", "Claire", "Juan", "Katie", "Luke", "Dee"])
*/
function binRota(arr) {
  let result = [];
  let rows = arr.length;
  let cols = arr[0].length;
  for (let i = 0; i < rows; i++) {
    if (i % 2 === 0) {
      // Left to right
      for (let j = 0; j < cols; j++) {
        result.push(arr[i][j]);
      }
    } else {
      // Right to left
      for (let j = cols - 1; j >= 0; j--) {
        result.push(arr[i][j]);
      }
    }
  }
  return result;
}

console.log(
  binRota([
    ["Stefan", "Raj", "Marie"],
    ["Alexa", "Amy", "Edward"],
    ["Liz", "Claire", "Juan"],
    ["Dee", "Luke", "Katie"],
  ])
);
