const x = Number(process.argv[2]);
let output = "";

for (let i = 0; i < x; i++) {
  output += "C is fun\n";
}

console.log(Number.isInteger(x) ? output.trim() : "Missing number of occurrences");
