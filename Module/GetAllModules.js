// Promise.all(
//     ['./NamedExports', './NamedExports2', './DefaultExport', './DefaultExport2']
//         .map(x => import(x)))
//     .then(([module1, module2, module3]) => {
//         // Use module1, module2, module3
//     });
var iterable = ['a', 'b'];
var iterator = iterable[Symbol.iterator]();
console.log(iterator.next());
