const express = require("express");
const app = express();

// app.get("/", (req, resp) =>{
//     resp.send("<h1>Spawn</h1>")
// })

// Linking index.html file to ExpressJS
app.get("/", (req, resp)=>{
    resp.sendFile(__dirname + "/index.html");
})

app.listen(5000, ()=>{
    console.log("http://localhost:5000")
})