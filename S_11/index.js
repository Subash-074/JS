//What is Closure ?
//closuer is a function that can remember variable from its outer function even after outer function has been executed. 

 //A closure allows a function to access a variable from its outer scope even after the outer scope finishes its execution.

 function outer(){
      let x=10
      
      return function inner(){
           console.log(x); 
      }
      inner();
 }

 const func= outer(); //Here outer function execution is over we used const as variable to execute function outer. 

console.log(func())


//Count Closure 
function outerCount(){
      let count=0;
      return function innerCount(){
            count++;
            console.log(count);
      }
}

const retVal=outerCount();

retVal();//1
retVal();//2
retVal();//3


//Real World Example 

function createBankAccount(initialBalance){
      //let's create a variable which we don't want to expose directly. 
      let balance=initialBalance;
      //Now we will be creating three functionalities, one is checking the balance, another is withdrawing amount and depositing. 

      //While doing all these things one fundamental thing is you are not supposed to expose this balance variable to the consumer of create bank account function. If you have that usecase this is the perfect usecase for closure. 
      //You have to close balance variable into a function that you will be returning from outer function and from inner functions everything else has to happen. 
      

      return function deposit(amount){
            balance+=amount;
            console.log("Deposited", amount, "Current Balance ", balance);


      }

}

const tapaScriptAccount=createBankAccount(100);//outer fuction lifespan is over 

console.log(tapaScriptAccount(300))//closure is going to remember last value and return current balance 400 here 
console.log(tapaScriptAccount(500));//900



//Function factory with closure 

function SubashBankAccount(initial){
      let balance=initial;

      return {
            deposit:(amount)=>{
                  balance=balance+amount;
                  console.log("Deposited", amount, "Current Balance ", balance);
            },

            withdraw:(amount)=>{
                  if(amount>balance){
                        "Insufficient Fund "
                  }else{
                        balance-=amount;
                        console.log("Withdrawn", amount, "Current Balance", balance);
                  }
                  
            },
            checkBalance: ()=>console.log("Current Balance", balance),

      }




}

const Subashaccinfo=SubashBankAccount(100);

console.log(Subashaccinfo)

//if you do console.log(SubashBankAccount.deposit(300); this will result in error because it is declared with const already. )

//Closure in action although SubashBankAccount is already gone because of closure we are able to access and use inner functions and value of outer function variable which is balance variable and its last value while declaring with const which is 100 is saved by closure feature of JavaScript 

console.log(Subashaccinfo.deposit(300));//400
console.log(Subashaccinfo.withdraw(50));//350
console.log(Subashaccinfo.withdraw(20));//330



//Where we should be careful?
//If we are dealing with big data for this situation 


function dealingWithBigData() {
    let bigData = new Array(10000000).fill("*")

    return function() {
        console.log(bigData[3])
    }
}

const variable12 = dealingWithBigData();

console.log(variable12())//Here we are using variable12 with refrencing from bigData variable with the help of closure concept however since array is so big and if it is used with refrence then garbage collector will not clear up the space and memory will always be used each time we use variable12 in these type of situation use of closure is not recommended. 


//Advantages of closure
// 1. You can keep the variables private without exposing them.
// 2. You can stop variable pollution.
// 3. You can create a function factory.
// 4. You can keep a variable alive between multiple calls.


function timer() {
    let secs = 0;

    return function() {
        secs++;
        console.log("elaspsed seconds ", secs)
    }
}

const timerInstance = timer();
timerInstance(); // 1
timerInstance(); // 2
timerInstance(); // 3


//Closure in Event Handler 
function setupButton() {
    let clickCount = 0;

    document.getElementById("myButton").addEventListener("click", function() {
        clickCount++;
        console.log(`Button clicked ${clickCount} times`);
    });
}

setupButton();