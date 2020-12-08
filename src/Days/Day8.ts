import GameConsole from "../Tools/GameConsole/GameConsole";

const fs = require("fs");
const file = fs.readFileSync("src/Days/Day8.txt");
const values = file.toString().split("\n");

const gameConsole = new GameConsole();
const operations = gameConsole.buildOperations(values);

console.log((new GameConsole()).findInfiniteLoop(operations).accumulator);
console.log((new GameConsole()).fixTheProgram(operations));
