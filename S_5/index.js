console.log("Day 5")
//The for loop 
//Syntax:
//for (initialization;condition;update){  code }


for (let count=1; count<=5; count++){console.log("Iteration/loop", count)}

//Addition of even numbers between 1 to 100
let sum=0;
for (let i=1; i<=100; i++){
      if(i%2===0){
            sum+=i;

      }
}
console.log("The sum is ", sum);





let language="JavaScript";

for (let i=0; i<language.length;i++){
      console.log(language.charAt(i));

}


//Nested loop 

for(let i=1; i<=3; i++){
      for (let j=1; j<=3; j++){
            console.log("Row", i, "col", j)
      }
}


//Break and Continue 
for(let i=1; i<=5; i++){
      if (i===3)break;
      console.log(i)

}
//continue 
for (let i=1; i<=5; i++) {
    if (i===3) continue;
    console.log(i)
}



//Multiple counter for single loop 
for (let i=1, j=10; i<=10 &&j>=1;i++, j--){
      console.log(i, j);
}




for (a=1; a<=5; a++){
      console.log("*".repeat(a));
}


let rows = 5;

for (let i = 1; i <= rows; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern += "* ";
    }
    console.log(pattern);
}



//while loop 
let counter =1;
while(counter<=5){
      console.log(counter);
      counter++;

}

//Do-While Loop 
let num=1;
do{
      console.log(num);
      num++;

}while (num<=5)


//Infinite loop 




