import TobogganTrajectory from "../Tools/TobogganTrajectory";

const fs = require("fs");
const file = fs.readFileSync("src/Days/Day3.txt");
const values = file.toString().split("\n");

console.log((new TobogganTrajectory()).countTrees(values, 0, 3));
