"use strict";
exports.__esModule = true;
//import { squar, doubles } from './NamedExports';//get named exports
var All = require("./NamedExports"); //Get All from NamedExports file
var NamedExports_1 = require("./NamedExports"); //default export
var DefaultExport_1 = require("./DefaultExport");
var NamedExports_2 = require("./NamedExports"); //get named exports
var NamedExports_3 = require("./NamedExports"); //get named exports
var DefaultExport2_1 = require("./DefaultExport2"); //Multiple default exports
console.log(NamedExports_2.squar(10)); //100
console.log(NamedExports_2.doubles(2)); //2......
console.log(All.squar(10)); //100
console.log(All.doubles(2)); //2......
console.log(new All.DemoClass().display()); //123 Uma Mahesh
console.log(NamedExports_1["default"]()); //Uma Mahesh
console.log(DefaultExport_1["default"]()); //Uma Mahesh
console.log(NamedExports_3.squar(10)); //100
console.log(NamedExports_3.doubles(2)); //2......
DefaultExport2_1["default"].name(); //default function
console.log(DefaultExport2_1["default"].add(10, 20)); //30
console.log(DefaultExport2_1["default"].Retrun()); //10
var emp = new DefaultExport2_1["default"].Employee('Welcome World'); //Welcome World
console.log(emp.getMyName()); //Uma Mahesh
var NamedExports_4 = require("./NamedExports");
console.log(NamedExports_4.counter); // 0
NamedExports_4.inc();
console.log(NamedExports_4.counter); // 1
