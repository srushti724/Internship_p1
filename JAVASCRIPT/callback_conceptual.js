


// const heading1 =document.querySelector(".heading"); // for else part 
const heading1 =document.querySelector(".heading1");
const heading2 =document.querySelector(".heading2");
const heading3 =document.querySelector(".heading3");
const heading4 =document.querySelector(".heading4");
const heading5 =document.querySelector(".heading5");
const heading6 =document.querySelector(".heading6");
const heading7 =document.querySelector(".heading7");
const heading8 =document.querySelector(".heading8");
const heading9 =document.querySelector(".heading9");
const heading10 =document.querySelector(".heading10");


function changeText(element,text,color,time,onSucess,onFailure){
    setTimeout(()=>{
        if(element){
          element.textContent = text;
          element.style.color = color;
           if(onSucess){
              onSucess();
            }
           
        }else{
            // console.log("your element doesnt exists")
            if(onFailure){
                onFailure();
            }
        }
    },time)
}

// Pyramid of DOOM :
changeText(heading1,"one","violet",3000,()=>{
    changeText(heading2,"two","purple",2000,()=>{
        changeText(heading3,"three","red",1000,()=>{
            changeText(heading4,"four","pink",1000,()=>{
                changeText(heading5,"five","green",2000,()=>{
                    changeText(heading6,"six","blue",2000,()=>{
                        changeText(heading7,"seven","cyan",2000,()=>{
                            changeText(heading8,"eight","#cda562",1000,()=>{
                                changeText(heading9,"nine","#dca652",1000,()=>{
                                    changeText(heading10,"ten","brown",1000,()=>{

                                    },()=>{console.log("There is Some Error in Code.heading10");});
                                },()=>{console.log("There is Some Error in Code.heading9");});
                            },()=>{console.log("There is Some Error in Code.heading8");});
                        },()=>{console.log("There is Some Error in Code.heading7");});
                    },()=>{console.log("There is Some Error in Code.heading6");});
                },()=>{console.log("There is Some Error in Code.heading5");}); 
            },()=>{console.log("There is Some Error in Code.heading4");}); 
        },()=>{console.log("There is Some Error in Code.heading3");});   
    },()=>{console.log("There is Some Error in Code.heading2");});   
},()=>{console.log("There is Some Error in Code.heading1");});

