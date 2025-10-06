function greet() {
    return console.log('myComplexModule');
}

const saySomething=(words) =>{
    console.log('myComplexModule says hello');
}

module.exports = {
    greet, 
    saySomething
}; 
