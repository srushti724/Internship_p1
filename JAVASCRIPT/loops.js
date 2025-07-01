//do while
let total = 0;
let num = 2;

let i=1;
do{
  total= total + i;
  i++; 
}
while(i<=num)

console.log(total);

//for
for(let j=0;j<=9;j++){
    if(j==5){
        break;
    }
    console.log(j);
}


for(let j=0;j<=9;j++){
    if(j==5){
        continue; 
    }
    console.log(j);
}

//while

let total1 = 0;

let i1=0;
while(i<=8){

 total1= total1 + i;
 i++;
}
console.log(total1);