const express = require("express");
const mongoose = require("mongoose");
const Book = require("./books");
const app = express();
app.use(express.json());

//MONGO DB CONNECTION
mongoose.connect("mongodb://127.0.0.1:27017/lmsdb")
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));

// Add Student (POST method)
app.post("/books", async (req, res) => {
const books = new Book(req.body);
const result = await books.save();
res.send(result);
});

// Get Books (GET method)
app.get("/books", async (req, res) => {
const books = await books.find();
res.send(books);
});


// Update Book (PUT method)
app.put("/books/:id", async (req, res) => {
const book = await Book.findByIdAndUpdate(
req.params.id,
req.body,
{ new: true }
);
res.send(book);
});

// Delete Book (DELETE method)
app.delete("/books/:id", async (req, res) => {
const book = await Book.findByIdAndDelete(req.params.id);
res.send(book);
});


// CREATING LOCAL HOST SERVER

app.listen(5000,()=>{
console.log("http://localhost:5000/")  
});