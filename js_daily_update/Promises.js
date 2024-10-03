 // Q and bluebird are two libraries used in js with bluebird we use functionlity like ftech,catch,finally etc.
// Promises has two states (resolve and reject)
// reject is concerned with .then
// how to run js file in terminal give command-> node filename.js
// to store Promise in variable is not neccessary
// if we pass any parametere in resolve then we can get in .then function as an argument
const PromiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task is completed');
        resolve();
    },1000)
})

PromiseOne.then(function(){
    console.log("Promise Consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task 2');
        resolve();
    },1000)
    
}).then(function(){
    console.log('async task 2 gets resolved');
})

const PromisiThird = new Promise(function(resolve,reject){
    resolve({username:'Jeba',lastName:'Ansari'});

})
PromisiThird.then(function(user){
    console.log('Yes completes third promises');
    console.log(user);
});

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let erorr = true;
    if(!erorr){
        resolve({username:'Jeba',lastName:'Ansari'});

    }
    else{
        reject('Code got blocked');
    }
    },1000)
})
 promiseFour.then((user)=>{
        console.log(user);
        return user.username;    
}).then((username)=>{
    console.log(username);
    
}).catch((erorr)=>{
    console.log('sorry cant work');
}).finally(()=>{
    console.log('i am always executed');
});
