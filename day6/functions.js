// function Dec(){

//     console.log("Function decleration")
// }
// Dec()

// function sum(a,b){

//     console.log(a+b)
// }
// sum(10,20)

// function expression

// let Exp = function(){
//     console.log("Function Expression")
// }
// Exp()

//arrow function

// let arr = () =>{
//     console.log("arrow function")
// }
// arr()

//IIFE
// (function(){
//     console.log("IIFE")

// })();

// HOF function 

// function HOf(fun){

//     console.log("HOF")
//     fun()
// }

// function Call(){

//     console.log("callback")
// }
// HOf(Call)


function parent(){

    console.log("Parent Function")

let child1 = () =>{
    console.log("Nested")

}
let child2 = () =>{
    console.log("Functio")

}

child1()
child2()
}
parent()
