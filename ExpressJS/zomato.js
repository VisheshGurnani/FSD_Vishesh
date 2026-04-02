const express = require("express");
const path = require("path");

const app = express();

// Serve all static frontend files
app.use(express.static(path.join(__dirname, "zomato")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "zomato", "zomato.html"));
});

app.listen(2000, () => {
    console.log("Server running at http://localhost:2000/");
});
