//Converting callback functions to promise
var delay = function (mis) { return new Promise(function (res, rej) { return setTimeout(rej, mis, 'Uma Mahesh'); }); };
delay(1000).then(function (s) { return console.log('resolved :', s); })["catch"](function (e) { return console.log('rejected :', e); }); //rejected: Welcome
var delay1 = function (mis) { return new Promise(function (res, rej) { return setTimeout(res('Welcome'), mis); }); };
delay1(1000).then(function (s) { return console.log('resolved :', s); })["catch"](function (e) { return console.log('rejected :', e); }); //resolved: Welcome
function iReturnPromiseAfter1Second() {
    return new Promise(function (resolve) {
        setTimeout(function () { return resolve("Hello world!"); }, 1000);
    });
}
Promise.resolve(123)
    .then(function (res) { return iReturnPromiseAfter1Second(); }) // We are returning `Promise<string>`
    .then(function (res) { console.log(res); }); // Hello world!
function firstPromise(name) {
    return new Promise(function (res, rej) {
        var result = name == undefined ? false : true;
        if (result)
            res('Successfully resolved := ' + name);
        else
            rej('Failed' + name);
    });
}
firstPromise('Hi Uma').then(function (res) { return console.log(res); })["catch"](function (er) { return console.log(er); }); //Successfully resolved := Hi Uma
function loadItem(id) {
    console.log('loading item: = ', id);
    return new Promise(function (res) { return setTimeout(function () { return res({ id: id }); }, 1000); });
}
//chaining
var item1, item2;
loadItem(1).then(function (res) { item1 = res; console.log('item1 :=', item1); return loadItem(2); })
    .then(function (res) { item1 = res; console.log('item1 :=', item1); console.log('done'); }); //overall time will be arround 2s
//console.log(item1, item2);
// Parallel
Promise.all([loadItem(1), loadItem(2)]).then(function (res) { item1 = res[0], item2 = res[1]; console.log('done'); console.log(item1, item2); });
