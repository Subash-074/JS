//TDZ = an area where you can not access a variable untill it is initialized 

//RefrenceError 

{
      //==name variable's TDZ started here 
      //
      console.log(name);//RefrenceError 

      //
      console.log(address);
      let address="kathmandu";
      console.log(address); //no refrence error 
      //
      //
      let name="tapaScript";
      console.log(name);//Here no refrence error 
      //=== neme variable TDZ ends here 

      //
      //
      //

}


//functional hosting
chase();

function chase(){
      console.log("Tom chases Jerry!");
      caught();
      
}

function caught(){
      console.log("Tom caught Jerry");
}
