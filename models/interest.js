const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const interestSchema = new Schema({
    interest: { type: String, required: true },
    interestID: { type: String, required: true }
});

const Interest = mongoose.model("Interest", interestSchema);

module.exports = Interest;
