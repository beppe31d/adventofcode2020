import ExpenseReportFixer from '../Tools/ExpenseReportFixer'

const fs = require("fs");
const file = fs.readFileSync("src/Days/Day1.txt");
const values = file.toString().split("\n").map((value: string) => parseInt(value));

const expenseReportFixer = new ExpenseReportFixer();

console.log(expenseReportFixer.multiplyNumbersSumTo2020(values));