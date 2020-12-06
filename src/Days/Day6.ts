import CustomDeclarationForm from "../Tools/CustomDeclarationForm";

const fs = require("fs");
const file = fs.readFileSync("src/Days/Day6.txt");
const values = file.toString().split("\n");

console.log((new CustomDeclarationForm()).countTotalYesAnswersAnyone(values));
console.log((new CustomDeclarationForm()).countTotalYesAnswersEveryone(values));
