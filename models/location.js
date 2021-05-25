const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const locationSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const Location = mongoose.model("Location", locationSchema);

module.exports = Location;
