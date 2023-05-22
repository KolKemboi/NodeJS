const fs = require("fs");

fs.mkdir("./new folder", () => {
    fs.writeFile("./new folder/text.txt", "this is a doozy", () => {
        fs.readFile("./new folder/text.txt", (err, data) =>{
            if(err){
                console.log(err);
            }
            else{
                console.log(data.toString());
            }
            fs.unlink("./new folder/text.txt", () => {
                console.log("file deleted");
                fs.rmdir("./new folder", () => {
                    console.log("task completed");
                })
            })
        })
    })
})