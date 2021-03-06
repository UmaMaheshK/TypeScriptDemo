var iterable = ['a', 'b'];
var iterator = iterable[Symbol.iterator]();
console.log(iterator.next());
// async function* createAsyncIterable(syncIterable) {
//     for (const elem of syncIterable) {
//         yield elem;
//     }
//}
// const asyncIterable = createAsyncIterable(['a', 'b']);
// const asyncIterator = asyncIterable[Symbol.asyncIterator]();
// asyncIterator.next()
// .then(iterResult1 => {
//     console.log(iterResult1); // { value: 'a', done: false }
//     return asyncIterator.next();
// })
// .then(iterResult2 => {
//     console.log(iterResult2); // { value: 'b', done: false }
//     return asyncIterator.next();
// })
// .then(iterResult3 => {
//     console.log(iterResult3); // { value: undefined, done: true }
// });
