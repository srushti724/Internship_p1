//creating array

let arr = [1,2,3,4,5];
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

//String Array
let names = ["Srushti","vedant","akshu","piyush"];

 console.log(names);
 console.log(names[0]);
 console.log(names[1]);
 console.log(names[2]);

//array destruction 

const strarr = ["animal","birds"];

let var1= strarr[0];      
let var2= strarr[1];

console.log(var1);
console.log(var2);

//array methods

// 1.isArray method

let Cars = ["mercesdes","audi","BMW"];

console.log(typeof Cars);
console.log(Array.isArray(Cars));

//push 
Cars.push("mahindra");
console.log(Cars);

//pop
Cars.pop("BMW");
console.log(Cars);

// unshift

Cars.unshift("mahindra");
Cars.unshift("porche");
console.log(Cars);

//shift

let shiftedele = Cars.shift();
console.log(Cars);
console.log(shiftedele);

// for loop in array

let fruits=["apple","mango","orange"];
console.log(fruits);

let fruitsUpper = [];
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i].toUpperCase());
    fruitsUpper.push(fruits[i].toUpperCase());
}

console.log(fruitsUpper);

//while loop in array

const fruits1=["apple","mango","orange"];

let i=0;
while(i<fruits1.length){
    console.log(fruits1[i].toUpperCase);
    i++;
}

console.log(fruits1);


