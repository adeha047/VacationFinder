require('dotenv').config()
const mongoose = require("mongoose");
const db = require("../models");

// This part empties the Interests collection and inserts the interests below

mongoose.connect(
  process.env.MONGODB_URI
);


  // This part empties the Locations collection and inserts the locations below

  const locationSeed = [
    {
      location: "Miami",
      interestID: 1
    },
    {
      location: "Huntington Beach",
      interestID: 1
    },
    {
      location: "Bahamas",
      interestID: 1
    },
    {
      location: "Maui",
      interestID: 1
    },
    {
      location: "Dublin",
      interestID: 2
    },
    {
      location: "Amsterdam",
      interestID: 2
    },
    {
      location: "Portland",
      interestID: 2
    },
    {
      location: "Brussels",
      interestID: 2
    },
    {
      location: "Kilimanjaro",
      interestID: 3
    },
    {
      location: "Kona",
      interestID: 3
    },
    {
      location: "Grand Canyon",
      interestID: 3
    },
    {
      location: "Yosemite",
      interestID: 3
    },
    {
      location: "Whistler",
      interestID: 4
    },
    {
      location: "Aspen",
      interestID: 4
    },
    {
      location: "Park City",
      interestID: 4
    },
    {
      location: "Lake Tahoe",
      interestID: 4
    },
    {
      location: "New York City",
      interestID: 5
    },
    {
      location: "Paris",
      interestID: 5
    },
    {
      location: "Milan",
      interestID: 5
    },
    {
      location: "London",
      interestID: 5
    },
  ];
  
  db.Location.insertMany(locationSeed, (err, docs) => {
    if(err) console.error(err);
    console.log("records were added");
    console.log("Here's the proof!");
    console.log("================");
    console.log(docs);
  })