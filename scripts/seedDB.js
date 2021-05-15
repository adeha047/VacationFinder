const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Interests collection and inserts the interests below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/interests"
);

const Interests = [
  {
    interest: "Going to the Beach"
  },
  {
    interest: "Drinking Beer"
  },
  {
    interest: "Hiking"
  }
];

db.Interests
  .remove({})
  .then(() => db.Interests.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
