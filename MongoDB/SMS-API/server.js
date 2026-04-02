const express = require("express");
const mongoose = require("mongoose");
const Student = require("./student");
const app = express();
app.use(express.json());
//Linking frontend with the server
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.redirect("/students");
});

app.get("/students", (req, res) => {
    res.sendFile(__dirname + "/public/student.html");
});

//MONGO DB CONNECTION
mongoose.connect("mongodb://127.0.0.1:27017/studentdb")
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));

// Add Student (POST method)
app.post("/api/students", async (req, res) => {
const student = new Student(req.body);
const result = await student.save();
res.send(result);
});

// Get Students (GET method)
app.get("/api/students", async (req, res) => {
const students = await Student.find();
res.send(students);
});


// Update Student (PUT method)
app.put("/api/students/:id", async (req, res) => {
const student = await Student.findByIdAndUpdate(
req.params.id,
req.body,
{ new: true }
);
res.send(student);
});

// Delete Student (DELETE method)
app.delete("/api/students/:id", async (req, res) => {
const student = await Student.findByIdAndDelete(req.params.id);
res.send(student);
});


// CREATING LOCAL HOST SERVER

app.listen(3000,()=>{
console.log("http://localhost:3000/")  
});