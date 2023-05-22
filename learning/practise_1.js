const fs = require("fs");



/*
create a dir, in that dir,
create a file, write on it, then, 
"read the file, show its contents, then finally, "
delete both the dir and file
*/

if (!fs.existsSync("./new")){
	fs.mkdir("./new",(err) => {
		if (err) {
			console.log(err)
		}
		console.log("dir created");
	});
}

fs.writeFile("./new/text.txt", "read the file, show its contents, then finally, ", () => {
	console.log("new file created");
});

setTimeout(() => {
	fs.readFile("./new/text.txt", (err, data) => {
		if (err) {
			console.log(err);
		}
		else{
			console.log(data.toString());
		}
	});
}, 1000);

setTimeout(() => {
	fs.unlink("./new/text.txt", (err) =>{
		console.log(err);
	});
	console.log("text deleted");
	
}, 2000);


setTimeout(() => {
	fs.rmdir("./new", (err) =>{
		console.log(err);
	});
	console.log("file deleted");
}, 3000);