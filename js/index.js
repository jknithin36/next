/* Topic - 1 : Variables (let const var)*/
/* 
let 
Varibales declaled with var have block scope
Variables declares with let must be declares before use
canot be reclared in same scope
*/
{
  let x = 23;
  console.log(x);
}

// console.log(x);

// console.log(y);
// let y = 45;

let z = 56;
{
  let z = 25;
  z = 34;
  // let z = 45;
  console.log(z); // first preference is local scope
}

/* Topic 2 -Scope
1. Global Scope - a varibales considered as global if it is declared outside of all functions and blocks
2. Function Scope - a varibale declared inside a function
3. block scope - variables declared with let and const inside of any scope {....} (if, for, while)
4. module scope - later
5. lexical scoe - later
*/

let nickName = "nani";
function greet() {
  return nickName;
}
console.log(greet());
console.log(nickName);

function add(a, b) {
  console.log(a, b);
  return a + b;
}

add(2, 4);

// console.log(a, b);

if (true) {
  let myName = "Nithin";
  console.log(myName);
  var myBrother = "Shiva";
}
console.log(myBrother);
//  var is not block scoped
// console.log(myName);

/*
const 

blocked scoped, cannot be redeclared, cannot be reassigned

Note - It doesn't define a constant value, but it defines a constant reference to a value

Because of this we can NOT:

Reassign a constant value
Reassign a constant array
Reassign a constant object

But we  CAN:

Change the elements of constant array
Change the properties of constant object
*/

const sayHello = "Hello Nithin!";
console.log(sayHello);
// sayHello = "Shiva";
// const sayHello = "Hello Shiva!";
{
  const sayHello = "Hello Shiva";
  console.log(sayHello);
}
console.log(sayHello);

//  Topic 3 - Operator

/*
Arithmetic Operators 
Comparison Operators
Assignment Operators
Logical Opeartors
Bitwise Operators
String Operators
Type Operators
Conditional Operator
*/

// Arithmetic
console.log(1 + 3);
console.log(1 - 3);
console.log(1 * 3);
console.log(5 / 5);
console.log(5 % 5);
console.log(5 ** 5);
// Increment and Decrement
let i = 8;
console.log(i++);
console.log(i);
console.log(i--);
console.log(i);
console.log(++i);
console.log(--i);

// Assignment
let j = 9;
j += 1;
console.log(j);
j -= 1;
console.log(j);
j *= 1;
console.log(j);
j /= 1;
console.log(j);
j %= 1;
console.log(j);

// comparison

console.log(4 == 4);
console.log(4 > 1);
console.log(1 < 4);
console.log(4 >= 4);
console.log(4 <= 4);
console.log(4 != 3);

// logical
console.log(true && true);
console.log(true && false);
console.log(true || true);
console.log(true || false);
console.log(!true);

// string operators (concat and append)

console.log("Hi" + " " + "There!");
let text = "Hello World";
text += "!";
console.log(text);

// type

console.log(typeof "hello");
console.log(typeof 23);
console.log(typeof []);
console.log(typeof {});
console.log([] instanceof Array);
console.log({} instanceof Object);

//  conditional Operator
// condition ? "True" : "false";
let l = true ? "Hello" : "BYE";
console.log(l);

//  Topic 4 - DataTypes
//  String, Number, Boolean , undefined, null, Symbol, BigInt,Object
//  Non - Primitive or Refernce
//  object, array, map, set, regex, function...

console.log("Hello");
console.log(45);
console.log(true);
console.log();
console.log(null);
console.log;
const sym = Symbol("id");
console.log(typeof sym);

//  Functions
//  Block of code designed to perform particular task

// Objects

const obj = {
  name: "Nithin",
  age: 23,
  start: function () {
    return "Started";
  },
  brake() {},
};

console.log(obj.start());

//String

let string = "Hey There!.. I am Nithin";
console.log(string.length);
console.log(string.charAt(0));
console.log(string.charCodeAt(3));
console.log(string.at(0));
console.log(string[0]);

//   Extracting String parts
console.log(string.slice(0, 3));
console.log(string.substring(0, 3));
console.log(string.substr(0, 3));

// Conversion

console.log(string.toUpperCase());
console.log(string.toLowerCase());

// concat

console.log("Hello " + "World!");
let a = "Hello ";
let b = "World!";
console.log(a.concat(b));

//  Remove White Spaces

console.log("hello     World".trim());
console.log("    Name        ".trimStart());

// String padding

let num = "9";
console.log(num.padStart(3, "0"));
//  targetLength , padString

console.log(num.padEnd(4, 0));

// repeat

console.log("helo".repeat(3));

// Replace Content

console.log("Hello Nithin!".replace("Nithin", "shiva"));
console.log("Hello Nithin Nithin!".replace("Nithin", "shiva"));

console.log("Hello Nithin Nithin".replaceAll("Nithin", "Shiva"));

//  Convsersion

console.log("Nithin Shiva".split(" "));

//  search

console.log("Nithin".indexOf("N"));
console.log("Nithin".lastIndexOf("n"));
console.log("Nithin".search("i"));

// search cannot take second starting position
console.log("Nani Nithin".match("Nithin"));
console.log("nani nithin nani nithin".matchAll("nithin"));
console.log("nani".includes("n"));
console.log("nani".startsWith("n"));
console.log("nani".endsWith("i"));

//  Template Literals

let hello = `My name is Nithin`;
console.log(hello);
// Quotes inside the quotes
console.log(`This is Nithin"s era`);
// Multi Line Strings

console.log(`This
  is
  in 
  Nithin`);
// Interpolation (easily interplate variables and expressions)

hello += ` and my age is ${2 + "3"} `;
console.log(hello);

// render html template

//  Numbers

// conversion
const numb = Number(23);
console.log(numb);
console.log(typeof numb);
console.log(parseInt("34"));
console.log(parseFloat("10.00"));
// console.log((34).toString());

// Formatting
console.log(numb.toFixed(5));
console.log(numb.toExponential(23));

// Checking

// Math
// round, floor, trunc, ceil ,abs,  floor, pow, sqrt, min, max,radom

console.log(Math.random() + 5);
console.log(Math.PI);
console.log(Math.max(1, 32));
console.log(Math.min(45, 1));
console.log(Math.pow(4, 2));
console.log(Math.abs(-9.87));
console.log(Math.round(4.1));
console.log(Math.round(4.5));
console.log(Math.floor(4.1));
console.log(Math.floor(4.9));
console.log(Math.trunc(4.1));
console.log(Math.trunc(4.9));
console.log(Math.ceil(4.1));
console.log(Math.ceil(4.9));
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
