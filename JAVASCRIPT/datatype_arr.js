// Primitive Type :
let num1 = 8;
let num2 = num1;
console.log("value of num1 is",num1);
console.log("value of num2 is",num2);

num1++;

console.log("after incrementing");

console.log("value of num1 is",num1);
console.log("value of num2 is",num2);

// reference Type :

// Array
let  arr1 = ["Cars","Mobile"];
let arr2 = arr1;

console.log("array1",arr1);
console.log("array2",arr2);
arr1.push("appliences");

console.log("after pushing new element");

console.log("array1",arr1);
console.log("array2",arr2);