// Promises are special objects in javascript used as a tool for
//  managing asynchronous operations

//1.  In JavaScript, A promise promises a result (data/error)

//2.  Every promise has an executer function that gets executed immediately when we create a promise

//3.  Initially, when the promise is created, it is in "pending" state and the data returned by the promise in pending state is "UNDEFINED"

// 4. The state of the promise changes to settled when the promise is either resolved(Data) or rejected(Error message)

let promise1 = new Promise(
    function(resolve, reject) {
        resolve([1,2,3,4,5,6,7,8,9]);
    }
);

console.log(promise1);

let promise2 = new Promise((resolve, reject) => {
    reject("Error Message: ");
});

console.log(promise2);


// Real Time example with promises and XMLHttpRequest

// producing code for promise
let promise = new Promise(function(resolved,rejected) {

    let xhr = new XMLHttpRequest();
    // xhr.open('GET','../data.txt',true);
    xhr.open('GET','../dataAA.txt',true);
    xhr.send();

    xhr.onload = function() {
        if(xhr.statusText === 'OK'){
            resolved(xhr.responseText);
        }else{
            rejected("File Not found or Somwthing wrong");
        }
    }
});

// code for consuming promise data and handling rejected data
promise.then(function(data){
    console.log(data);
}, function(error){
    console.log(error);
});

// to catch only error
promise.catch(function(error){
    console.log(error);
});
