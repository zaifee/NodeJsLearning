const express = require('express');
const users = require('./MOCK_DATA.json');
const fs = require('fs');

const app = express();

const PORT = 8001;


// middleware plugin 
app.use(express.urlencoded({extended: false}));

//custom middleware 
app.use(( req, res, next) => {
    
    // console.log("Hello from middle ware 1");
    // req.myUserName = "MohdNawaz.dev"
    // res.json("Middleware 1"); 
    fs.appendFile("log.txt", `${Date.now()}: ${req.ip}: ${req.method}: ${req.path}\n`, (err, data) =>{
        next();
    });
   
    
})

app.use(( req, res, next) => {
    console.log("Hello from middle ware 2", req.myUserName);
    // res.end("hey");
   next();
    
})



//for browsers 
app.get('/user', (req, res) => {
    const html = `
     <ul>
        ${users.map( (user) => `<li>${user.first_name}</li>`).join("")}
     </ul>
    
    `;
    res.send(html);
})

app.get('/api/user', (req, res) => {
    // console.log("I'm in get route", req.myUserName);
    res.setHeader("MyName", "MohdNawaz");
    res.json(users);
});

app.get('/api/user/:id', (req, res) => {
    const id = Number(req.params.id);
    const user = users.find( (user) => user.id === id);
    res.json(user)
    
});

// creating a new user
// app.post('/api/user', (req, res) => {
//     return res.json({status: "pending"});
// });

// app.patch('/api/user:id', (req, res) => {
//     //update the user
//     return res.json({status: "pending"});
// })

// app.delete('/api/user:id', (req, res) => {
//     return res.json({ status: "pending"})
// })


// good way to do  
app.route('/api/user/:id', )
.get( (req, res) => {
    const id = Number(req.params.id);
    const user = users.find( (user) => user.id === id);
    return res.json(user);

})
.post( ( req, res) => {
    return res.json({status: "pending"})
})
.delete( ( req, res) => {
    res.json( {status: "pending"})
})

app.post('/api/user',  (req, res) => {
    const body = req.body;
    // id frontEnd se nhi aati to length li use ri
    users.push({...body, id: users.length+1});
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
        return  res.status(201).json({status: "suceess", id: users.length+1});
    })
    
})


app.listen(PORT, () => {console.log(`Served Started on PORT ${PORT}`);
})