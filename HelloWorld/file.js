const fs = require('fs');
const os = require('os');
// synchronous file

// fs.writeFileSync("./text.txt", "Hey there ! I'm Using WhatsApp");


//asyncronous File
// fs.writeFile("./text.txt", "Hey there ! I'm Using WhatsApp Beta", (err) => {});


// synchronous return the value means we can hold the value in some variable
// const res = fs.readFileSync("./text.txt", "utf-8");
// console.log(res);

// fs.readFile("./text.txt", "utf-8", (err, res)=> {
//     if(err){
//         console.log("error", err);
//     }
//     else{
//         console.log(res); 
//     }
// })

// synchronours file 
// fs.appendFileSync("./text.txt", new Date().getDate().toLocaleString()); 
// fs.appendFileSync("./text.txt", `${Date.now()} Hey there \n`);

// copy file from text.txt to copy.txt
// fs.cpSync("./text.txt", "./copy.txt");
// fs.cp("./text.txt", "./copy.txt", (err) => {});

// deleting a file -- synchronously
// fs.unlinkSync('./copy.txt');
// fs.unlink('./copy.txt', (err)=> {});


// fs.unlink, fs.cp, fs.appendFile -- all these are asynchronous operation and we can't their value in variable and they accept parameter inside the paranthesis
console.log(os.cpus().length);
