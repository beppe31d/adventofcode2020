import PassportValidator from "../Tools/PassportValidator";

const fs = require("fs");
const file = fs.readFileSync("src/Days/Day4.txt");
const values = file.toString().split("\n");

console.log((new PassportValidator()).countValidPassport(values));
console.log((new PassportValidator()).countValidPassportWithFilters(values));
