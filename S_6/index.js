 //Define or declare a function 
 function printThis(){
      console.log("Printing....")

 }

 print();

 //Function as an Expression

 let printMe= function(){
     console.log('Print Me ');

 }

 printMe();


//Parameters and Arguments 
//The input that you provide to the function is called parameter. 


function sum(a, b){
     const result =a+b;
     //console.log(result);
     return result;

}


let result=sum(10,4);
console.log(result);
//Here a, b given as input to fuction is parameters 
//actual value 10, 5 assigned while calling functions are arguments 

function double(x){
     return 2*x;
}

console.log(double(result));


//Default Parameters 

function calc(a,b=0){
     return (2*(a+b));

}
const resVar=calc(2,7)
console.log(resVar );


//Rest Parameter 
//if we don't know during runtime how many arguments might come during that situation rest parameter is useful....


function calculateThis(x,y,...rest){
     console.log(x,y,rest);
//rest parameter can never be first and in the middle it must be in last followed by three dots... 
}


calculateThis(1,2,3,4,5,6,7,8,9)


//Nested Function 
//When a function is inside another function is called nested function. The function 


function outer(){
     console.log("Outer function");



     return function inner(){
          console.log("Inner");
     }

   

     //inner();//inner function can be called and executed and used only insided of the outer function the scope is limited and inner function has specific purpose to serve inside outer function. 
}

let retFunc= outer();
console.log(retFunc())


//Callback Function 
const toCallBuz=false;
function foo(func){
     console.log("foo");
     if (toCallBuz){

          func();

     }

     

}

foo(function(){
     console.log("buz")
})

//Pure Function 
let greegingMsg=" Hola"
function greeting(name){
     return greegingMsg +name; 
}


console.log(greeting(" tapascript"));

greegingMsg=" Namaste"

console.log(greeting(" tapascript"));

//Higher Order Function 
//Higher order function is a function that takes another function as an argument or return another function. 


function getCamera(camera) {
    camera();
}

getCamera(function() {
    console.log("Sony")
})

function returnFunc(param) {
    return function() {
        if (param === 1) {
            console.log("Hello")
        }

    }
}

const retFun = returnFunc(3);
retFun();

// Arrow Function

let greetMe = (greetingMsg) => {
    //
    //
    return greetingMsg + " great"
}

console.log(greetMe("Hola"));



//IIFE(Immdeiately Invoked Function Expression )

(function(count){
    console.log("IIFE", count)
})(1)


//Call Stack 



//Recursion
//A function is calling itself that is recursion..


function foo(){
     foo();

}



function fetchWater(count){
     console.log("Fetching Water...", count);
     if(count===0){
          console.log("No more water is left to fetch....");
          return;
     }
     fetchWater(count-1)
}
fetchWater(5)