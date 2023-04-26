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
