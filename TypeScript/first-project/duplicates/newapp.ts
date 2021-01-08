// var object: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role:[number ,string] //tupple
// } = {
//   name: "Abhinav",
//   age: 21,
//   hobbies: ["Sports", "Reading"],
//   role:[2 ,"Admin"]
// };

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

var object: {
  name: "Abhinav";
  age: 21;
  hobbies: ["Sports", "Reading"];
  role: Role.ADMIN;
};

console.log(object.name);

object.hobbies.forEach((hobby) => {
  console.log(hobby);
});
