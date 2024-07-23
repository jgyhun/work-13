import connect from "./module3.js";
const result = connect();
console.log(result);

//여러가지 방법1, 방법2
// import connect, { add,mulltiply, subtract } from "./module4.js";
// console.log(add(4,6));
// console.log(subtract(4,6));
// console.log(mulltiply(4,6));

//여러가지 모듈 방법3
import calculator from './module4.js';
console.log(calculator.add(1, 3));
console.log(calculator.subtract(6, 3));
console.log(calculator.multiply(5, 8));
