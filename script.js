var input = require("fs").readFileSync("stdin", "utf-8");
console.log(typeof input);
var [x, y] = input.split(" ").map(item => parseInt(item));
console.log(x + y);