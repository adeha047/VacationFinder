require('dotenv').config()
const mongoose = require("mongoose");
const db = require("../models");

// This part empties the Interests collection and inserts the interests below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/interestsList"
);

const interestSeed = [
  {
    interest: "Going to the beach",
    interestID: 1
  },
  {
    interest: "Drinking beer",
    interestID: 2
  },
  {
    interest: "Hiking",
    interestID: 3
  },
  {
    interest: "Skiing",
    interestID: 4
  },
  {
    interest: "Shopping",
    interestID: 5
  }
];

db.Interests
  .remove({})
  .then(() => db.Interests.collection.insertMany(interestSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  // This part empties the Locations collection and inserts the locations below

  const locationsSeed = [
    {
      location: "Miami",
      interest_id: 1
    },
    {
      location: "Huntington Beach",
      interest_id: 1
    },
    {
      location: "Bahamas",
      interest_id: 1
    },
    {
      location: "Maui",
      interest_id: 1
    },
    {
      location: "Dublin",
      interest_id: 2
    },
    {
      location: "Amsterdam",
      interest_id: 2
    },
    {
      location: "Portland",
      interest_id: 2
    },
    {
      location: "Brussels",
      interest_id: 2
    },
    {
      location: "Kilimanjaro",
      interest_id: 3
    },
    {
      location: "Kona",
      interest_id: 3
    },
    {
      location: "Grand Canyon",
      interest_id: 3
    },
    {
      location: "Yosemite",
      interest_id: 3
    },
    {
      location: "Whistler",
      interest_id: 4
    },
    {
      location: "Aspen",
      interest_id: 4
    },
    {
      location: "Park City",
      interest_id: 4
    },
    {
      location: "Lake Tahoe",
      interest_id: 4
    },
    {
      location: "New York City",
      interest_id: 5
    },
    {
      location: "Paris",
      interest_id: 5
    },
    {
      location: "Milan",
      interest_id: 5
    },
    {
      location: "London",
      interest_id: 5
    },
  ];
  
  db.Locations
    .remove({})
    .then(() => db.Locations.collection.insertMany(locationsSeed))
    .then(data => {
      console.log(data.result.n + " records inserted!");
      process.exit(0);
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });