//importing express 
const express = require("express");

//Create express app/website
const app = express();

//Routing the homepage HTTP
app.get('/', (req, resp) => {
    resp.send("Hello User. Welcome to spawn.")
});

//Creating the address 
app.listen(5000,()=>{
    console.log("http://localhost:5000/")
});


