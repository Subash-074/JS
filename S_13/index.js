console.log("Javascript This keyword in depth")
 
//What is "this"?
console.log("thi is the global", this);//window

//In global executino contex, 'this refers to the global object window'

//this inside an object method-Implicit Binding 
const employee={
      firstName:"Subash",
      lastName:"Sapkota",


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



