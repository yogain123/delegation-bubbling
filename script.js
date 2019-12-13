document.querySelector("#grandparent").addEventListener('click',()=>{
    console.log("Grand Parent Clicked");
},false)   // 3rd para is useCapture = false | false

document.querySelector("#parentt").addEventListener('click',()=>{
    console.log("Parentt Clicked");
},true)

document.querySelector("#child").addEventListener('click',()=>{
    console.log("Child Clicked");
},true)


//when true ==> capturing mode 
// when false ==> bubbling mode

/**
 * Result when child div clicked
 * parentt clicked
 * child clicked
 * Grand Parent Clicked
 */