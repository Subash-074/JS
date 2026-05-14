console.log("Hi how are you doing ?");
let x=4+5;
console.log(x);

//Arithmetic Operators 
console.log("Arithmetic Operator ")
let a=12;
let b=5;
let f_name="Subash"
let l_name="Sapkota"

console.log(f_name+l_name)//this is not good practice. 

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a**b);
console.log(a%b);

let count=5;
console.log(count++);
console.log(count--);



//Assignment Operators 
console.log("Assignment Operators ")
x+=5;
x-=3;
x/=4;
x*=2;

//Comparison operator 

console.log(0==false);
console.log(3=='3');
console.log(3!='3');

console.log(null==null);
console.log(undefined==undefined);
//NaN=Not a Number 

let obj1={'name':'tapascript'}
let obj2={'name':'tapascript'}

console.log(obj1===obj2);
console.log(obj1!==obj2);

4 > 3
2 > 1
1 > 7
2 >= 2

4 < 3
2 < 7
3 <= 9

// Logical operators
console.log("**** Logical operators ****")
// && || ?? !
// op1 && op2
console.log(false && false); // false
console.log(true && false); // false
console.log(true && true); // true
console.log(false && true); // false

console.log("Cow" && "Horse"); // "Horse"

4 > 5 && 4 === 6

console.log(false || false); // false
console.log(true || false); // true
console.log(true || true); // true
console.log(false || true); // true

console.log("Cow" || "Horse"); // "Cow"

console.log(!false);

// Bitwise operators
console.log("**** Bitwise operators ****");

// 10 in decimal
// 10 in 32 bits representation of 0, 1

// & | ^ ~ << >>

15 & 9 
1111 & 1001

// Grouiping
console.log("**** Grouping ****")

let p = 1;
let q = 2;
let r = 3;

console.log(p + q * r) // 1 + 2 * 3 = 1 + 6 = 7
p + (q * r) // 7

(p + q) * r // (1 + 2) * 3 = 3 * 3 = 9



// typeof
console.log("**** typeof ****")


typeof "tapas"; // "string"
typeof false; // "boolean"

let size = 100;
typeof size; // "number"

const numbers = [1,2,3,4]
typeof numbers; // "object"

typeof null; // "object"


// instanceof
console.log("**** instanceof ****")

// object instanceof objectType
