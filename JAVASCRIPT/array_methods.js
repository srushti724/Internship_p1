//every methods
const numbers = [2,4,6,8,10];

const ans = numbers.every((number)=>{
    return number % 2 ===0;
})
console.log(ans);

//fill method

const numbers1 = [1,2,3,4,5,76,6,78,9,9,8];

numbers1.fill(0,3,7);

console.log(numbers1);

//filter method


const numbers2 = [1,3,2,6,4,8];

const isEven= function(number){
    return number % 2 === 0;
}

const Even_numbers = numbers.filter(isEven);
console.log(Even_numbers);

//find methods

 const myArray = ["hello","catt" ,"dog","lion"];

 function islength3(string){
           return string.length===3;
 }


 const ans3 = myArray.find(islength3);

 //foreach method

 const numbers5 = [4,2,5,8];

function myfunct(number,index){


    console.log(`index is ${index} and number is ${number}`);
}

for(let i =0;i<numbers.length;i++){

    myfunct(numbers5[i],i);
}
numbers5.forEach(myfunct);

//map method

const numbers6 = [4,3,5,6,5];

const sqr = function (number){
    return number * number;
}

const sqrnumber = numbers6.map(sqr);
console.log(sqrnumber);

//reduce method

const numbers7 = [1,2,3,4,5,10];


const total = numbers7.reduce((accumulator,currentvalue)=>{
       return accumulator + currentvalue;
});

console.log(total);