const http = require('http');
// task1: make a server which will listen on port 8000
// task2: we have to log the user specification in log file with date
const fs = require('fs');
const url = require('url');

const myServer = http.createServer((req, res) => {
    if(req.url === '/favicon.ico') return res.end();
    const log = `${Date.now()}: ${req.method} ${req.url}: New User req\n`;

    const myurl = url.parse(req.url, true);
    // console.log(myurl);
    

    fs.appendFile("logo.txt", log, (err, data)=>{
        switch(myurl.pathname){
            case '/': res.end("<h1>Home Page par ho aap.</h1>");
            break
            case '/contact':
                 const userName = myurl.query.myname
                 res.end(`Hi, ${userName}`);
            break;
            case '/search': 
            const mySearch = myurl.query.search_query;
            res.end(`Here are your results for search `, mySearch);
            // case '/change':
            //     const yourName = myurl.query.name;
            //     res.end(`Hey ${yourName}`);
            //     break;
            case '/signup':
                if(req.method === "GET"){
                    res.end("This is a signup form");
                }
                else if(req.method === "POST"){
                    //we will put the data into db
                    res.end("Data entered Successfully.");
                }
                break; //ishe miss karne se error aata hai
            default:
                res.end("Error!.. Try the useful url")
        }
    })
    // console.log("Hey ! I'm a new user..");
    // res.end("hello from Mohd Nawaz Server")
});

myServer.listen(8000, ()=> {console.log("Starting Server");
})