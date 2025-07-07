function linearSearch(arr,target){
      
      for(let i=0;i<arr.length; i++){
          if(arr[i]===target){
              return i;
          }
      }
      return -1;
  }
  const arr = [1,2,3,4,5,6,7,8,9,10];
  const res = linearSearch(arr,10);
  console.log(res);
  


//arrow function
const addition = ()=>{
    return 2+4;
  }
  const result = addition();
  console.log(result);

  const additionofThree = (num1,num2,num3)=>{
        return num1 + num2+num3
    
     }
    const sumofThree = additionofThree(10,20,30); 
     console.log(sumofThree);

//callback function

function func2(name){
    
    console.log("inside my function 2.");
    console.log(`my name is ${name}`);

}

function func1(callback){
   
    console.log("hello there code is been executed")

    
    callback("kiara");
}

func1(func2);

//default parameter

function addtwo(a,b){
    return a+b;
}

//const ans = addtwo(4,5);
//console.log(ans); 

const ans = addtwo(4);
console.log(ans); 

//function return function 
function func(){
   
    function hello(){
        return "hello world";
    }


    // function returning function
    return hello;
}

const ans1 = func();

console.log(ans1());

//function inside function 

const func3 = () => {

    // declaring function inside function
     const function1 = () =>{
        console.log("Inside Function1");
     }
         
     // declaring function inside function
     const addition = (num1,num2) =>{
        return num1+num2;
     }
     console.log(addition(5,3));
    }
    func3(); 

// Rest Parameter
const addAll = (...numbers) =>{
    
    let total = 0;
   
    for(let num of numbers){

        total = total + num;
    }

    return total;
    
}
const ans4 = addAll(1,2,3,4,5,6,7,8,9,10);
console.log(ans4);
