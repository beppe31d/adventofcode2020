import BinaryBoarding from "../Tools/BinaryBoarding";

const fs = require("fs");
const file = fs.readFileSync("src/Days/Day5.txt");
const values = file.toString().split("\n");

console.log((new BinaryBoarding()).highestSeatId(values));
console.log((new BinaryBoarding()).findMySeat(values));
