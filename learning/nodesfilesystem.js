//reading files, writting files, dirs, deleting file

/*
const fs = require("fs");

fs.readFile("./essay06.txt", (err, data) => {
	if (err){
		console.log(err);
	}
	console.log(data.toString());
})
*/

const fs = require("fs");

fs.writeFile("./new.txt", "hello", () => {
	console.log("file written");
});


setTimeout(() => {
	fs.readFile("./new.txt", (err, data) => {
	if (err){
		console.log(err);
	}
	console.log(data.toString());
});

}, 1000);




if (!fs.existsSync("./assets")) {
	fs.mkdir("./assets", (err) => {
	if (err) {
		console.log(err);
	}
	console.log("created");
});
}
else{
	fs.rmdir("./assets", (err) => {
		if (err) {
			console.log(err);
		}
	});
}



setTimeout(() => {
	if (fs.existsSync("./new.txt")) {
	fs.unlink("./new.txt", (err) => {
		if (err) {
			console.log(err);
		}
		console.log("deleted");
	});
}
}, 4000);