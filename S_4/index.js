console.log("Day 4")

let catchingBus=true;

if(catchingBus){
      console.log("I will Reach home on time. ")

}
else{
      console.log("I will be late to reach. ")
}

let age;

if (age>=18){
      console.log("You are eligible to vote")
}else {
      console.log("You are not eligible to vote. ")
}


//Multiple if else conditions 

//let's build a grading system 

/*
if score greater than 90 grade a
if score greater than 80 grade b 
'''''                 70 grade c 



*/

let score=76;

if (score>=90){
      console.log("Grade A")
}

else if (score>=80){
      console.log("Grade B")
}

else if (score>=70){
      console.log("Grade C")
}


else if (score < 60){
      console.log("Grade D")
}


//when to use if  branching and when to use if else branching 

let x=0;
if (x===0){
      console.log(0)
}
if (x>=0)
{console.log("Greater than 0")}
if (x<=0){
      console.log("Less than 0")
}

//in this case all three console.log will get printed 


//Now if we use else if instead 
let xx=0;
if (xx===0){
      console.log(0)
}
if (xx>=0)
{console.log("Greater than 0")}
if (xx<=0){
      console.log("Less than 0")
}
//output will be 0 or first satisfied block because if first condition in else if satisfied execution get stop first condition only will get implemented. 


//Nesting 

const condition= true
const innerCodntion=true

if(condition){
      console.log("Outer if ")
      if(innerCodntion){
            console.log("Inner if ")
      } else{
            console.log("Inner else ")
      }
} else{ 
      console.log("Outer else")
}



//Switch Case 
/*When there are too many conditions if else might not be right choice for you .
in such condition you should choose switch case. 

*/
let position = 4;

switch (position) {
    case 1:
        console.log("Print 1");
        break;
    case 2:
        console.log("Print 2");
        break;
    case 3:
        console.log("Print 3");
        break;
    case 4:
        console.log("Print 4");
        break;

    default:
        console.log("Nothing is matched");
}

let day = 51;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid Day Number")
}
//case can have any value as well. 
let name = "Google"

switch(name) {
    case "tapaScript":
        console.log("Teaching 40 days of Js")
        break;
    case "google":
        console.log("Giving answer to all searches");
        break;
    default:
        console.log("You are neither google, nor tapaScript!")
}
//case can have any value as well. 
const city = "Bangalore";
switch (city) {
  case "Bangalore":
  case "Kolkata":
  case "Agra":
  case "Jaipur":
    console.log( "This is in India");
    break;
  case "New York":
  default:
    console.log("It is in USA");
}


//Ternary operator 