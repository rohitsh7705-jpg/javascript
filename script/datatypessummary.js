// primitive

// 7 types  : String , Number, Boolean ,Null, undefined,Symbol,BigInt
/*const score = 100
const scorevalue = 110.3
const isloggedin = false
const outsidetemp =null
let usermail;
const id = Symbol('123')
const anotherid =Symbol('123')

console.log(id ===anotherid)
const BigInt = 23445556666755766765n;

// Reference (Non- Primitive)

// Array ,Objects, Functions ,
const heroes =[" ROhit", "Divya", "Dabba"," My love"]
let  myobj = {
    name: "Divya"

}
const myfunction = function(){
    console.log("hello world")

 }
    */
 // Stack (Primitive) , Heap (Non- Premitive)
 let myyoutubename = "welcome"
 let anothername =  myyoutubename

 anothername= "I love you "
 console.log(myyoutubename);
 console.log(anothername);

 let userone = {
    email : "rohit.sh7705@gmail.com",
    upi : "user@ybl"
    

 }
 let usertwo = userone
 usertwo.email = "rohit.sh2630@gmail.com"
console.log(userone.email);
console.log(usertwo.email);