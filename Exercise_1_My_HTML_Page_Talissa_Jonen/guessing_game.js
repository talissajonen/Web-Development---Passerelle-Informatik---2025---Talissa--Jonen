console.info('Guessing Game');

let answer = '';
const correctAnswer = 'argentina';


while(answer.toLowerCase() !== correctAnswer){

    answer = prompt("Which country consumes the most erva mate?");
    

    if(answer.toLowerCase() !== correctAnswer){
        alert("Wrong. Try again.");
    }
}

alert("Correct! ");
console.info('Game finished');