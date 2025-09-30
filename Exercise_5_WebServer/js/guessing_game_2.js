let limit = 10;
let random = Math.floor(Math.random() * limit) + 1; 
let tried = 0;
let trysNbr = 3;
do {

    let userGuess = prompt("What is the magic number?"); 
    console.log(computerRandom,userGuess); 
    if(userGuess == random) {
        alert("Nice!"); 
        break; 
    } else { 
        if (userGuess < random) { 
            alert("Too low"); 
        } else if (userGuess > limit || userGuess < 1) {
            alert("Not in the limit! I asked between 1 and 10"); 
        }else {
            alert("Too high"); 
         }

        }
        tried++; 
    } while(tried < trysNbr);

if (tried === trysNbr) {
    alert("Game over! The magic number was " + random);
}