const mongoose = require('mongoose');
const BookSchema = new mongoose.Schema({
    title :String,
    author : String,
    publishing_date: String,
    price: Number
});
module.exports = mongoose.model("Book", BookSchema);