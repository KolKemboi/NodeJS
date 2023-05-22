const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    //set header

    res.setHeader("content-Type", "text/html");

    let path = "./html/"
    switch(req.url){
        case "/":
            path += "index.html";
            res.statusCode = 200;
            break;
        
        case "/about":
            path += "about.html";
            res.statusCode = 200;
            break;
        case "/about-me":
            res.statusCode = 301;
            res.setHeader("Location", "/about")
            break;
            
        default:
            path += "404page.html";
            res.statusCode = 400;
            break;
    }
    fs.readFile(path, (err, data) => {
        if (err){
            console.log(err);
            res.end();
        }else{
            //res.write(data);
            res.end(data);
        }
    });
});

server.listen(3000, "localhost", () =>{
    console.log("now_listening");
});