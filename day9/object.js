// let student ={

//     name : "pradeep",
//     age : "24" ,
//     section : "d",
//     demo:function(){
//         console.log("hello invertis");
//     }
// }
// console.log(student)
// console.log(student.name)
// console.log(student.demo())

// blueprint of the object when we need 1000 of 
// the dsta then we easily use by object

// function Person(name,age,salary){

//     this.name=name,
//     this.age=age,
//     this.salary=salary
// }

// let p1 = new Person("Anubhav" , 23 , 10000);
// let p2 = new Person("kumar" , 33 , 20000);

// console.log(p1)
// console.log(p1.name)

// let pen ={

//     color: "red",
//     brand: "cello"
// }

// //add
// pen.price = 10;
// console.log(pen)
// console.log(pen["color"]);

// //update
// pen.price=20;
// console.log(pen)

// delete pen.color;
// console.log(pen)

// //access key values and key value both

// console.log(Object.keys(pen)); //keys
// console.log(Object.values(pen)); //values
// console.log(Object.entries(pen)); //key and values both

//nested object

let student = {

    name: "Ravi",
    age: "24",
    section: ["d" ,"a" ,"b" ,"c"],
    address:{

        state: "uttar Pradesh",
        city:"bhopal"
    }
}
console.log(student.address.state)
console.log(student.address.city)
console.log(student.name)
