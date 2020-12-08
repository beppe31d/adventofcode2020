import HandyHaversacks from "../Tools/HandyHaversacks";

const fs = require("fs");
const file = fs.readFileSync("src/Days/Day7.txt");
const values = file.toString().split("\n");

console.log((new HandyHaversacks()).countBagsWithShinyGold(values));
