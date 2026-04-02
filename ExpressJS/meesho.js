const express = require("express");
const path = require("path");

const app = express();

// Serve all static frontend files
app.use(express.static(path.join(__dirname, "meesho")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "meesho", "meesho.html"));
});

app.listen(1000, () => {
    console.log("Server running at http://localhost:1000/");
});
