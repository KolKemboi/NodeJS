const {names, ages} = require("./main.js");

console.log(names);
console.log(ages);

const os = require("os");

console.log(os.platform(), os.homedir());

console.log(os.cpus());