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
In case of block scope variable is declared inside of the block. whenever we create if else or switch case we declare a block . 
*/

{
      let count =10;
      console.log(count);
}
// if we try to access count outside the block we are goint to get a refrence error. 
//console.log(count)==refrence error 


