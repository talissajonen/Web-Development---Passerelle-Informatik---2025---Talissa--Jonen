 var myName = "Talissa"; 
        let myNewName = "Talissa new"; 
        console.log("Hello Passerelle"); 
     //   console.log(myName);
    //    console.log(myNewName); 
    try { 
        if (true) {
        let myScopedVariable = "Im in a scope"; 
        var myGlobalVariable = "I am global"; 
        console.log(myName, myNewName); 
        console.log("myScopedVariable declared inside a block", myScopedVariable); 
        } 
    }   catch(error) {
        console.info('I caught the error'); 
    }
    console.log(myGlobalVariable); 
