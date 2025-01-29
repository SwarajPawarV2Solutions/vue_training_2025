//                  Promises

// promise -  I will bring groceries.

// 1. promise is currently in pending State

// 2. fulfilled ->  I  bought groceries.

// 3. Rejected State -> I did not bought groceries.

// 4. settled (Promise finished)


// Creating promise

let myPromise = new Promise(function(resolve , reject){

    const a = 3
    const b = 4

    setTimeout(()=> {
        if(a===b){
            resolve('the values are equal')
        }
        else{
            reject('the values are not equal')
        }
    }, 2000)
})


// Pending State
//console.log(myPromise);


//fulfilled - then method

// Consuming your promise
myPromise.then(function(result){
    console.log(result);
    
}) // Fulfilled State

myPromise.catch(function(FailedResult){
    console.log(FailedResult);
    
}) // Rejected State

// Your promise will get settled

