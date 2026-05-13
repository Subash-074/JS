// Variable is a container 
// syntax to declare variable 
// let/const storage_name=valule

//value assignments, pass by value 
// let fruit="mango";
//let vegetable="carrot"
//so if fruit =vegetable then value of fruit will be carrot no change in vegetable its value also remain carrot this phenomenon is pass by value this happens in primitive data type 


//naming convention 
//The name must have digits 
//The name can have $ and _
//The first character must not be a digit. 
//No reserved keywords. 
//

//Variables: Variables are used to store data in JavaScript 
//Var=function-scoped, can be redeclared not recommended 
//let: block scoped, can be reassigned 
//const: block scoped, cannot be reassigned 






console.log("Day 2")
let address="Banglore";
console.log(address);
address="USA";
console.log(address);


//There are two types of data types: 
// One is primitive data types and another is non primitive data types 

//Primitive data types are the basic data types that exists in the programming language those are the very basic data types that you will be using 

/*
String== text values 
number= numeric values 
boolean== true false 
undefined = a variable declared but not assigned(let x )
null= represents nothing (y=null;)
BigInt== Large numbers(BigInt123456789)
"Symbol"==unique identifiers(Symbol("ID"))


Non-Primitive data types:
object== collection of key value pair 
array== ordered list of values 
function== code that can be executed 







*/
/*
source code
Tokenizing 
parsing 

Abstract Syntax Tree 




*/

let student={
      name:"Subash",
      age:21,
      isEnrolled:true,


};
console.log(student.name);


let arr=[1,2,3,4,5];
console.log(arr);
arr=10;
console.log(arr);
let a=10;
let b=a;
b=20;
console.log(a);