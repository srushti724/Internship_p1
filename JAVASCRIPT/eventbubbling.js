
// 1. Event Bubbling / Event Propogation.
// 2. Event Capturing.
// 3. Event Delegation.


const grandparent = document.querySelector(".grandparent");

// ---Event Delegation
grandparent.addEventListener("click",(e)=>{
    console.log(e.target);
})
