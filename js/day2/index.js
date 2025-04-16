console.log("Day 2");
// Topic 1 - Arrays
// Collection of items stored in a single variable arranged in specific order and can be accessed using an index

const arr = ["Kirkland", "GreatValue", "Member's Mark"];
console.log(arr);
const arr1 = new Array("Hello", "World", "Today");
console.log(arr1);
// Accessing Array Elements
// using index number
console.log(arr[1]);
console.log(arr[0]);
console.log(arr[2]);
// changing the arrays
arr1[3] = "is";
console.log(arr1);
arr1[4] = "Tuesday";
console.log(arr1);
// converting to string
console.log(arr1.toString());
// accessing the full array
console.log(arr);
// Arrays are objects
console.log(typeof arr);
// Array elements can be objects too
arr1[5] = { Name: "nithin" };
console.log(arr1);
// Array Properties and Methods
console.log(arr.length);
console.log([3, 5, 6, 7, 8, 9, 1, 2].sort());
// looping

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
// lopping using for each
arr.forEach((i) => {
  console.log(i);
});

//  Adding Array Elements
// push
arr1.push("23");
console.log(arr1);

// objects vs arrays - arrays are numbered indexes where as objects are named indexes

//  array methods
/*
basic - length, pop, push, shift, unshift
access - at
conversion - string , join
sorting - sort, 
concat - concat, 
// update - copyWithin
// flat - flat
*/

console.log(arr.at(2));

// join - used to convert to string
console.log(arr.join(" , "));
// pop and push - remover and add elemet at th end
const arr2 = [1, 2, 3, 4, 5];
arr2.push(6);
console.log(arr2);
arr2.pop();
console.log(arr2);

//  shift and unshift - but at the begining

arr2.unshift(0);
console.log(arr2);
arr2.shift();
console.log(arr2);
//  concat

const arr3 = [1, 2];
const arr4 = [3, 4];
console.log(arr3.concat(arr4));

// copyWithin

const arr5 = [1, 2, 5, 4, 3];
console.log(arr5.copyWithin(2, 4));
const arr6 = [1, 2, [3, 4], [5, 6], [7, [8]]];
console.log(arr6.flat(2));

// splice and slice

const newArray = ["apple", "Banana", "Carrot"];
newArray.splice(0, 0, "cashews", "Raisins");
console.log(newArray);
// first parameter - from where ( defines the position)
// second parameter - how many elements should be removed

// tospliced

const newsplicedarray = newArray.toSpliced(1, 1);
console.log(newArray);
console.log(newsplicedarray);

// Data Structure
const students = ["nithin", "shiva", "chintu", "Abhinav", "Abhi"];

// Algorithm
function findStudent(arr, studentName) {
  return arr
    .map((student) => student.toLowerCase())
    .includes(studentName.toLowerCase())
    ? "He is There"
    : "Not found";
}

console.log(findStudent(students, "nithin"));

//o(n)

const groceriesList = ["onion", "milk", "eggs", "cashews", "bottles"];

function groceriesListSearch(item) {
  for (let i = 0; i < groceriesList.length; i++) {
    if (groceriesList[i] === item) {
      console.log(`found ${item}`);
    }
  }
}
groceriesListSearch("bottles");
