console.log("Javascript This keyword in depth")
 
//What is "this"?
console.log("thi is the global", this);//window

//In global executino contex, 'this refers to the global object window'

//this inside an object method
// Implicit Binding 
const employee={
      firstName:"Subash",
      lastName:"Sapkota",

//declaring object method
      returnThis: function(){
            return this;  //this employee object
      },

      getFullName:function(){
            return `${this.firstName} ${this.lastName}`;
            //this gives access to first and last name here 
      }

}

console.log("Employee Id ", employee.id);
console.log("this insidde the employee object", employee.returnThis());
console.log("Constructed Full Name using this", employee.getFullName());


//Dynamically adding a method that uses this 

const tom ={name: "Tom", age:7};
const jerry={name:'jerry', age:3};

//This function adds a logMessage method to any passed object 
function greetMe(obj){
      obj.logMessage=function(){
            console.log(`${this.name} is ${this.age} years old!`);

      }
      console.log(obj);
}

greetMe(tom);
tom.logMessage();

greetMe(jerry);
jerry.logMessage();

//  this keyword insider a regular function( non- arrow, non method )


function sayName(){
      console.log("this inside a function", this);

}

sayName();//logs window(or global)




//Nested function -eah gets itw own 'this'(global/undefined)

function outer(a){
      console.log("this inside an outer function", this);//global

      return function inner(b){
            console.log("this inside and inner function", this);//also global
      }
}

const outerResult=outer(5);
outerResult(3);




// this insie arrow function - Lexical Binding
//Arrow function do not have their own this.They inherit this from the surroundeing scope 
const getFood = () => this;
console.log("this inside the arrow function defined in global scope", getFood);

getFood();


const food = {
    name: "mango",
    color: "yellow",
    getDesc: function() {
        return () => `${this.name} is ${this.color}`;
    }
}
const descFunc = food.getDesc();
console.log(descFunc()); // "mango is yellow"

//Explicit Binding -call, apply, bind 


//call()- Invoke a function with a specific this value 





function greeting(){
      console.log(`HEllo, ${this.name}belongs to ${this.address}`);
}

const user={
      name:"Subash",
      address:"All of you!",

};


greeting.call(user);

//Well user is declared with const which means it do not become part of window object, however we have used call() method which gives access to user object using this keyword 



const likes = function(hobby1, hobby2) {
    console.log(this.name + ' likes ' + hobby1 + ' , ' + hobby2+'.');
}



const person={
      name:"Subash",

}

likes.call(person, "Teaching", "Mathematics ")



//apply()

const hobbiesTOApply=["Sleeping", "Eating"];

likes.apply(person, hobbiesTOApply)


//bind()

const newHobbies=function(hobby1, hobby2){
      console.log(this.name+' likes '+ hobby1+ ' ,'+hobby2+'.');

}

const officer={
      name:'Bob',
};


const newf=newHobbies.bind(officer, 'Dancing', 'Singing');


newf();
//new binding -Constructor calls


const Cartoon = function(name, animal) {
    this.name = name;
    this.animal = animal;
    this.log = function() {
        console.log(this.name + ' is a ' + this.animal);
    }
};

const tomCartoon = new Cartoon("Tom", "Cat");
tomCartoon.log();

const jerryCartoon = new Cartoon("Jerry", "Mouse");
jerryCartoon.log();