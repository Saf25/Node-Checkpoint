const fs = require("fs");
const filename = process.argv[2];
file = fs.readFile(filename);
c = file.toString();
const number = c.split("\n").length - 1;
console.log(number);
