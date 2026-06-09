/*

Javascript Objects
There will be situation in programming where you have to handle complex data that is when you need to know something beyond just the primitive type like boolean structure.
Objects are nothing but the key value pair. It can be identified using key value pair.
Objects can be created in multiple ways. 


*/
//create objects with literal syntax 
let user={
      name:"Subash",
      age:21,

}
//Accessing Objects 
console.log(user.name);

//once this particular has been created can we add more properties to this object.


console.log(user);
 
//Adding new property to the object
user.isSeniorCitizen=false;
console.log(user.age);




//Key with special characters 
/*There are occassions in object where you have to give double quotations around the keys in Javascript object key value pair. Js by default treats keys without double quotations as string but in special cases quotation mark is cumpolsory.*/
//
let studinfo={
      name:"Sagar",
      age:20,
      agefordel:12,
      "isCR":true,

};

console.log(studinfo["isCR"]);



//Modifying Existing Property Value
user.isSeniorCitizen=true;
studinfo["movielover"]=true;
studinfo.age=18;
console.log(studinfo.age); 




//Deleting a Key From Object

delete studinfo["movielover"];

delete studinfo.agefordel;


//Accessing Dynamic Key Value 
//in real world programming some of this inputs might come dynamically or it might be user input already existing in code and you want to access it. 
 
const someKey="age";

console.log(user.age);//21

console.log(user[someKey]);//dynamic access //21


//What if we have to create an object whose key is dynamically computed?

let car=prompt("Which is your fav car?");

let favCars={
      [car]:5
}
console.log(favCars);





//Constructor Function To Create Objects 
//The name of the constructor function must sart with a capital letter. 

function Car(name, model){
     this.name=name;
     this.model=model;


}


const bmwCar=new Car("BMW", "X1");
console.log(bmwCar);

const audiCar=new Car("Audi", "A8");
console.log(audiCar);

console.log(bmwCar instanceof Car);




//Using Object Constructor 
const person=new Object()

person.name="Subash";
person.college="thws";
person.major="applied maths";







//Using Factory Function 
// Factory function can produce different type of functionality based on the user input 

function createUser(name, age){
      return{
            name, //you don't need to do like name:name this is shorthand feature. this is done when key name and parameters are same.
            age, 
      }
}

const user1=createUser("bimala",22)
const user2=createUser("Aswin", 25)

console.log(user1)
console.log(user2)

//Object Methods 
//we have only created primitive values which is number, string , booleans and all this things, 
//Now we will be dealing with non-primitive which are object, array and function 

//let's create an object whose value can be one function, whose value can be another object ,also also whose value can be an array.









//Nested Objects
//The "in " operator 
//The for...in loop 
//Object.keys() method 
//Object Refrences 
//B.R.E.A.K
//Object.assign()
//Shallow Copy vs Deep Copy
//Convert and object to an array 
//Concert Map or Array ro object 
//Immutability with freeze()
//Immutability with seal()
//The hasOwn() method 
//What is Object Destructuring?
//Create a new Variable
//Aliases
//Nested Object Destructuring 
//Destructuring to Function Parameter 
//Destructure a Function Return Value 
//Destructuring in Loops 
