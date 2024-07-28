const add=()=>{
    let a = 3
    let b = 4;
    console.log(a+b);
}
// add();
// objects 
const user = {
    name:"jeba",
    age:34,
    welcomeMessage:function(){
        console.log(`${this.name}, welcome to the website`);
        console.log(`${this.name},your age is ${this.age}`);
        console.log(this);
    }
}
// user.welcomeMessage();
user.age=23;
// console.log(user.age);
// console.log(this);

// control flow 
const isloggedIn = true;
// if(isloggedIn){
//     console.log("user can acces");
// }
// else{
//     console.log("user cannot access");
// }
const id = 124;
// if(id){
//     if(id==123){
//         console.log(`welcome ${id} to this page`);
//     }
//     else{
//     console.log("sorry! try again");
//     }
// }
// const emptyObject = {
// }
// if(Object.keys(emptyObject).length==0){
//     console.log("object is empty");
// }
// else{
//     console.log("fale");
// }
// loops
// for(let i = 0;i<4;i++){
//     console.log(`out loop value is ${i}`);
//     for(let j = 0;j<2;j++){
//         console.log(`inner loop value is ${j}`);
//     }
// }

const myArray = ["Jeba","Ansari"];
// console.log(myArray.length);
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
// }
// let i = 0
// while (i<myArray.length) {
//     console.log(myArray[i]);
//     i++;
// }

// for of
// let grretings = "jeba Naaz Ansari"
// for (const i of grretings) {
//     if(i== " ") {
//         continue;}
//     console.log(i);
    
// }

// map stores unique value
// const worldstates = new Map()
// worldstates.set("IN",'INdia');
// worldstates.set("US",'United Sates');

// console.log(worldstates);
// for (const [key,value] of worldstates) {
//     console.log(key,':-',value);
    
// }

// forin loop for objects
const myObjects = {
    name:"jeba",
    age:34
}
for (const key in myObjects) {
   console.log(`${key} shortcut is ${myObjects[key]}`);
}