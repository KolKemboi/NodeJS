const fs = require("fs");

const readStream = fs.createReadStream("./essay06.txt", {encoding : "utf8"});
const writeStream = fs.WriteStream("./new.txt");

// readStream.on("data", (chunk,) => {
// 	console.log("__________________________________NEW CHUNK__________________________________________");
// 	console.log(chunk);
// 	writeStream.write("\n\n\n\n\n\n\n\n")
// 	writeStream.write(chunk);
// })

readStream.pipe(writeStream);