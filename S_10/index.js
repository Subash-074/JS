//What is Scope?
/* Javascript variables behave based on where they are declared. That's exactly what scope means. Scope means where a variable in Javascript. Weather a variable is abailable in global area which is global scope, within the function is function scope and within a block inside {} is block scope depending on where js variable is exis. */

/*
There are 4 type of scopes in Javascript
Global Scope 
Function scope
Block Scope 
Module Scope 
*/


//Global Scope 
/*A variable that is declared outside of any function or block has a global scope. And that particular variable can be accessed anywhere. 
*/
let name='Subash';
//var name='Subash';

//accessing inside function
function greeting(){
      console.log("Hello",name);
}
greeting();
//accessing outside
console.log(name);

//accessing in block
{
      console.log("Inside the block", name);
}




/*
Here in the above mentioned code we have declared a variable with let, when we go to the console and type window.name there will be ''  only but if we declare with var name is going to be added as a part of window object. So the difference is Var in global scope gets added to window object but let will not be added. let and const are blocked scope that is the reason why they don't get attached to window object wihch we will discuss in later point of time. 



*/




//Function Scope 
/* A function scope  in which a variable is declared inside a function and are only accible within that function. 

Here there is a basic mistake that beginners of javascript make. They think that irrespective of where they declare variable using var that variable is accessible everywhere once declared in any place which is not true. 


Coming inside a function scope either it is const, var or let it is explictly accessible within the function only. 


*/

function todo(){
      var task="Learning 40 days of JS.";
      console.log(task);

}

todo();

// console.log(task);//error



//The Block Scope 
/*
In case of block scope variable is declared using let and const inside of the block which is accessible inside the block except for var it is accessible outside as well without any error . whenever we create if else or switch case we declare a block . 
*/

{
      let count =10;
      console.log(count);
}
// if we try to access count outside the block we are goint to get a refrence error. 
//console.log(count)==refrence error 
//but if we declare variable count using var instead of let we won't encounter refrence error. 



//in summary
/* if variable is declared....

inside Global Scope, Var, let and const are accessible everywhere, 

inside Function scope== var, let and const are accessible inside function only

inside blocked scope ==let and const are accessible only inside blocked scope wherease var can be accessed outside as well. 
*/



//Scope Chain 
/*
IN scope chain js first search in the nearest scope, if variable is not available it goes one more level outside in this way this will reach in global scope.

In many cases we will have function inside functions and variable of first function might be used in third function inside that function here this scope chain concepts comes in where js will go outside each step in search of variable value within the scope chain... 

*/


// Scope Chain

let globalVar = "I am a Global Variable";

function outer() {
    let outerVar = "I am an Outer Variable";

    function inner() {
        let innerVar = "I am an Inner Variable";

        console.log(innerVar); // "I am an Inner Variable"
        console.log(outerVar); // "I am an Outer Variable"
        console.log(globalVar); // "I am a Global Variable"
    }

    inner();
}

outer();

//console.log(outerVar); // Reference Error



var count = 10;

function outer() {
    // var count = 20;

    function inner() {
        //var count = 30;
        console.log(count); // 10
    }
    inner();
    console.log(count); // 10
}

outer();
console.log(count); // 10


//Variable Shadowing 
/*
Variable shadowing is a situation that happens when a variable in inner scope has same name as outer scope and then it will result in hiding outer scope variable in inner scope. 

js will priorities the variable in nearest scope and ignore variable far from its scope. 



*/

let message = "I am doing great"

function situation() {
    let message = "I am not doing great"
    console.log(message); // I am not doing great
}

situation();
console.log(message); // I am doing great