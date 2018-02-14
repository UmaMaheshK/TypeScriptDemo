//Using Promises
let result = new Promise((resolved, rejected) => { resolved('Hi Uma Mahesh'); });
result.then(res => console.log(res));//Hi Uma Mahesh
result.catch(err => console.log(err));
//chaing
result.then(res => console.log(res)).catch(err => console.log(err));//Hi Uma Mahesh
let prom = new Promise((res, rej) => rej(new Error('Error message')));
prom.then(res => console.log('success message :=', res))
    .catch(err => console.log('Error Ms :=', err.message));//Error Ms:= Error message


//Parallel control flow

let task1 = new Promise((res, rej) => setTimeout(res, 1000, 'One'));
let task2 = new Promise((res, rej) => setTimeout(res, 2000, 'Two'));
//wait for If any one is completed
Promise.race([task1, task2]).then(res => console.log(res)).catch(rej => console.log(rej));//One
//wait for all is completed
Promise.all([task1, task2]).then(res => console.log(res)).catch(rej => console.log(rej));//['One','Two']

// Create a resolved promise
Promise.resolve(1)
    .then(res => { console.log('First Promise :=', res); return 2; })//First Promise :=1
    .then(res => { console.log('Second Promise :=', res); return Promise.resolve(3); })//Second Promise :=2
    .then(res => { console.log('Third Promise :=', res); return Promise.resolve(4); })//Third Promise :=3
    .then(res => { console.log('Final Promise :=', res); })//Final Promise :=4
    .catch(rej => console.log(rej));//not reached

// Create a rejected promise
Promise.reject(new Error('something bad happened'))
    .then(res => { console.log('First Promise :=', res); return 2; })
    .then(res => { console.log('Second Promise :=', res); return Promise.resolve(3); })
    .then(res => { console.log('Third Promise :=', res); return Promise.resolve(4); })
    .then(res => { console.log('Final Promise :=', res); })
    .catch(rej => console.log(rej.message));//something bad happened

//Catch return new promise

Promise.reject(new Error('something bad happened'))
    .then((res) => { console.log(res); return 456; }) // not called
    .catch((err) => { console.log(err.message); return 123; }) // something bad happened
    .then((res) => { console.log(res); }); // 123

//then throw error
Promise.resolve(123)
    .then((res) => { throw new Error('something bad happened'); return 456; }) // throw synchronous error
    .then((res) => { console.log(res); }) // never called
    .catch((err) => { console.log(err.message); return 123; }); // something bad happened

Promise.resolve(123)
    .then((res) => { throw new Error('something bad happened'); return 456; }) // throw a synchronous error
    .catch((err) => { console.log('first catch: ' + err.message); return 123; }) // something bad happened
    .then((res) => { console.log(res); return Promise.resolve(789); }) // 123
    .catch((err) => { console.log('second catch: ' + err.message); }); // never called

Promise.resolve(123)
    .then((res) => { return 456; })
    .catch((err) => { console.log("HERE"); });// never called

Promise.resolve(123)
    .then((res) => { return true; })// res is inferred to be of type `number`
    .then((res) => { });   // res is inferred to be of type `boolean`
