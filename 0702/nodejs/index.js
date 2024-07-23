const connect = require("./module1");
const caldulator =require("./module2");
const {add , subtract, mulltiply} = require("./module2") 

//
const result =connect();
console.log(connect(result));

//
console.log(caldulator.add(1,3));
console.log(caldulator.subtract(2,3));
console.log(caldulator.mulltiply(3,3));

console.log(add(8,9));
console.log(subtract(7,6));
console.log(mulltiply(2,4));