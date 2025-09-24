let num = 99;
console.log(num);
console.info(typeof num);



num = false;
console.log(num);
console.info(typeof num);
num = "0";
console.log(num);
console.info(typeof num);



let bool = false;
console.info("type of bool", typeof bool);
bool = 0;
console.log("typeof bool", typeof bool);




let str = "hello";
console.log("typeof str", typeof str);



let arr = [99, "1", true, 3];
console.log(arr);
console.info("typeof arr", typeof arr);
arr[1] = 88;
console.log(arr);
console.log("arr 0", arr[0], "arr 1", arr[1]);




let obj = {
    name: "Pikachu",
    age: 8
}

console.info("Type of object", typeof obj);
console.log("obg.age", obj.age);
console.info("type obj.age", typeof obj.age);
console.log("obj.name", obj.name);
console.info("typeof obj.name", typeof obj.name);

console.log(obj.name, obj.age);
console.log(obj); 



const num2 = 0; 
// num = "0"; 
// num = 1; 
console.log(num2); 

const bool2 = false; 
// bool = true; 
console.log(bool2); 

const str2 = "hello";
// str = "hello";
console.log(str2); 

const arr2 = [0,1,2,3]; 
console.log(arr2); 
// arr = ["a", "b","c","d"]; -- forbidden to replace the array 
// console.log(arr); 
arr2[0]=99; // changing arr is permitted
arr2[1]= "yo"; 
// arr = [true,false]; 
console.log(arr2); 

const obj2 = {
    age: 8
}; 
console.log(obj); 
obj.age = 99; 
console.log(obj); 

// console.info("typeof nulissimus", typeof nulissimus);
// nulissimus.property = 0; 
// console.log(nulissimus); 
