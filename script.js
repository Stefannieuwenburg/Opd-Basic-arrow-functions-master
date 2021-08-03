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


// zet de functie om naar een arrow functie
const ikRockArrowFunctions = function () {
    console.log("Joe, ik rock de arrow functions!");
  };
  
  ikRockArrowFunctions()
  
//whit Arrow
  const ikRockArrowFunctions = () => {
    console.log("Joe, ik rock functions!");
  };
  
  ikRockArrowFunctions()
  

const fivePlusSeven = function () {
    return 5 + 7
  };
  
  fivePlusSeven();
  

  const fivePlusSeven = () => 5 + 7;
  fivePlusSeven();
 
  // Opdracht
  const myFunction = (a, b) => a + b;
  
  // Opdracht  
  const addFive = a => a + 5;
  
  
  // Opdracht 
  const createObject = () => ({ greeting: "hoi" });

 
