# Intro_To_Array
---
## Aaray Methods in JS

* **Methods :**<br>

1. **isArray() :** <br> - JavaScript Array.isArray()<br>
-The isArray() method returns true if an object is an array, otherwise false .<br>
-**Why we use isArray in JavaScript?**<br>
isArray() method determines whether the value passed to thisfunction is an array or not. This function returns true ifthe argument passed is an array else it returns false <br>
*-example :* <br>let fruits = ["apple","mango","grapes"];<br>
console.log(typeof fruits);<br>
console.log(Array.isArray(fruits));


* Array is mutable

2. **push() :** <br>
-The push() method adds new items to the end of an array.<br>
-The push() method changes the length of the array.<br> 
-The push() method returns the new length<br>
*-exapmle :*<br>
fruits.push("banana");<br>
console.log(fruits);

3. **pop() :** <br>
-The pop() method removes the last element from an array andreturns that value to the caller.<br> 
-If you call pop() on an empty array, it returns undefined .<br> 
-Array.prototype.shift()has similar behavior to pop() , but applied to the firstelement in an array.<br> 
-The pop() method is a mutating method.<br>
*-exapmle :*<br>
let poppedelement=fruits.pop();<br>
console.log(fruits);<br>
console.log(poppedelement);

4. **shift() :**<br>
 -The shift() function lets you remove an item from the start of an array. <br>
*-example :*<br>
let shiftedele = fruits.shift();<br>
console.log(fruits);<br>
console.log(shiftedele);

1. **unshift() :**<br> -The the unshift() function adds one or more items to the
 start of an array. <br>-*example :* <br>fruits.unshift("banana");<br>
fruits.unshift("myfruit");<br>
console.log(fruits);

   

   
 