import Xmas from '../Tools/Xmas'

const fs = require("fs");
const file = fs.readFileSync("src/Days/Day9.txt");
const values: Array<number> = file.toString().split("\n").map((value: string) => parseInt(value));

const xmas = new Xmas();
const numberToFix = xmas.findInvalidNumbers(values, 25)[0]

console.log(numberToFix);
console.log(xmas.findFixNumbers(values, numberToFix));
