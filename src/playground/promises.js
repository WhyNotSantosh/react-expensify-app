const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve("Resolved");
        reject("Rejected"); 
    }, 3000);
   
});

console.log('before');

promise.then((data) => {
  console.log(data);
}).catch((err) => {
    console.log(err);
});

console.log('after')