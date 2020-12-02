import ValidPasswordCounter from "../Tools/ValidPasswordCounter";
import PasswordValidator from "../Tools/PasswordValidator";
import PasswordValidatorNew from "../Tools/PasswordValidatorNew";

const fs = require("fs");
const file = fs.readFileSync("src/Days/Day2.txt");
const values = file.toString().split("\n");

console.log(ValidPasswordCounter(values, PasswordValidator));
console.log(ValidPasswordCounter(values, PasswordValidatorNew));
