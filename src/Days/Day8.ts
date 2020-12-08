import GameConsole from "../Tools/GameConsole/GameConsole";

const fs = require("fs");
const file = fs.readFileSync("src/Days/Day8.txt");
const values = file.toString().split("\n");

console.log((new GameConsole()).findInfiniteLoop(values));
