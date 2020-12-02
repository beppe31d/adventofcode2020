import ValidPasswordCounter from "../Tools/ValidPasswordCounter";

const fs = require("fs");
const file = fs.readFileSync("src/Days/Day2.txt");
const values = file.toString().split("\n");

console.log(ValidPasswordCounter(values));