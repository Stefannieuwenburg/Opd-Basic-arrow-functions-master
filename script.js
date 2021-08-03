//Arrow function uitleg!!!
//normal

function sum (a, b){
    return a + b
}
//whit Arrow
let sum2 = (a,b) => a + b

//normal
function isPositive(numbers){
    return number >= 0
}
//whit Arrow
let isPositive2 = numbers => number >= 0
//normal
function randomNumber(){
    return math.random
}
//whit Arrow
let randomNumber2 = () => math.random

//normal
document.addEventListener("click", function(){
    console.log("click")
})
//whit Arrow
document.addEventListener("click",()=>{
    console.log("click")
})


// Opd A ..zet de functie om naar een arrow functie
const ikRockArrowFunctions = function () {
    console.log("Joe, ik rock de arrow functions!");
  };
  
  ikRockArrowFunctions()
  
//opd A
  const ikRockArrowFunctions = () => {
    console.log("Joe, ik rock functions!");
  };
  
  ikRockArrowFunctions()
  
//opd B
const fivePlusSeven = function () {
    return 5 + 7
  };
  
  fivePlusSeven();
  

  const fivePlusSeven = () => 5 + 7;
  fivePlusSeven();
 
  // Opd C
  const myFunction = (a, b) => a + b;
  
  // Opd D
  const addFive = a => a + 5;
  
  
  // Opd E
  const createObject = () => ({ greeting: "hoi" });

 
