//import { squar, doubles } from './NamedExports';//get name exports
import * as All from './NamedExports';//Get All from NamedExports file
import theDefault from './NamedExports';//default export
import F from './DefaultExport';
import DD, { squar, doubles } from './NamedExports';//get name exports

import { squar as S, doubles as TT } from './NamedExports';//get name exports
import A from './DefaultExport2';//Multiple default exports

console.log(squar(10));//100
console.log(doubles(2));//2......

console.log(All.squar(10));//100
console.log(All.doubles(2));//2......
console.log(new All.DemoClass().display());//123 Uma Mahesh

console.log(theDefault());//Uma Mahesh
console.log(F());//Uma Mahesh

console.log(S(10));//100
console.log(TT(2));//2......

A.name();//default function
console.log(A.add(10, 20));//30
console.log(A.Retrun());//10
let emp = new A.Employee('Welcome World');//Welcome World
console.log(emp.getMyName());//Uma Mahesh