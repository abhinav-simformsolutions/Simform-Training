// person={
//     name:"Abhinav",
//     age:25,
// }

// person.greet=function(){
//     console.log("hello")
// }

// person.greet

// let id1 = Symbol("id")
// let id2 = Symbol("id")

// id1===id2?console.log("same"):console.log(id1.description)

obj = {};

function A() {
  return obj;
}
function B() {
  return obj;
}

new A() === new B() ? console.log("new") : console.log("old");
