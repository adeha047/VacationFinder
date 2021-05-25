const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const locationSchema = new Schema({
    interest: { type: String, required: true },
    interestID: { type: String, required: true }
});

const Interest = mongoose.model("Location", locationSchema);

module.exports = Location;
