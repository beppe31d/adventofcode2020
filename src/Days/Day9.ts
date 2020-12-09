import Xmas from '../Tools/Xmas'

const fs = require("fs");
const file = fs.readFileSync("src/Days/Day9.txt");
const values: Array<number> = file.toString().split("\n").map((value: string) => parseInt(value));

const xmas = new Xmas();

console.log(xmas.findInvalidNumbers(values, 25));
