//Converting callback functions to promise
const delay = (mis: number) => new Promise((res, rej) => setTimeout(rej, mis, 'Uma Mahesh'));
delay(1000).then(s => console.log('resolved :', s)).catch(e => console.log('rejected :', e));//rejected: Welcome

const delay1 = (mis: number) => new Promise((res, rej) => setTimeout(res('Welcome'), mis));
delay1(1000).then(s => console.log('resolved :', s)).catch(e => console.log('rejected :', e));//resolved: Welcome

function iReturnPromiseAfter1Second(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Hello world!"), 1000);
    });
}

Promise.resolve(123)
    // res is inferred to be of type `number`    
    .then((res) => { return iReturnPromiseAfter1Second(); }) // We are returning `Promise<string>`
    // res is inferred to be of type `string`    
    .then((res) => { console.log(res); }); // Hello world!

function firstPromise(name?: string): Promise<string> {
    return new Promise((res, rej) => {
        let result: boolean = name == undefined ? false : true;
        if (result)
            res('Successfully resolved := ' + name);
        else
            rej('Failed' + name);
    });
}

firstPromise('Hi Uma').then(res => console.log(res)).catch(er => console.log(er));//Successfully resolved := Hi Uma

function loadItem(id: number): Promise<{ id: number }> {
    console.log('loading item: = ', id);
    return new Promise(res => setTimeout(() => res({ id: id }), 1000));
}
//chaining
let item1, item2;
loadItem(1).then(res => { item1 = res; console.log('item1 :=', item1); return loadItem(2); })
    .then(res => { item1 = res; console.log('item1 :=', item1); console.log('done'); });//overall time will be arround 2s
//console.log(item1, item2);

// Parallel
Promise.all([loadItem(1), loadItem(2)]).then(res => { [item1, item2] = res; console.log('done'); console.log(item1, item2); });