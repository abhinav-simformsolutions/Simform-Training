console.log("the app goes in here")
function add(num1:number,num2 :number,showResult:boolean,phrase:string){
       showResult?console.log(`${phrase} ${num1+num2}`):console.log("False was passed")
}

const answer= add(7,8,true,"output is:")
console.log(answer)
