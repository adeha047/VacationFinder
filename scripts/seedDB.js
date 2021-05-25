require('dotenv').config()
const mongoose = require("mongoose");
const db = require("../models");

// This part empties the Interests collection and inserts the interests below

mongoose.connect(
  process.env.MONGODB_URI
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

db.Interest.insertMany(interestSeed, (err, docs) => {
  if(err) console.error(err);
  console.log("records were added");
  console.log("Here's the proof!");
  console.log("================");
  console.log(docs);
})

  // This part empties the Locations collection and inserts the locations below

  // const locationsSeed = [
  //   {
  //     location: "Miami, Florida",
  //     interest_id: 1
  //   },
  //   {
  //     location: "Huntington Beach, California",
  //     interest_id: 1
  //   },
  //   {
  //     location: "Bahamas",
  //     interest_id: 1
  //   },
  //   {
  //     location: "Maui, Hawaii",
  //     interest_id: 1
  //   },
  //   {
  //     location: "Dublin, Ireland",
  //     interest_id: 2
  //   },
  //   {
  //     location: "Amsterdam, Netherlands",
  //     interest_id: 2
  //   },
  //   {
  //     location: "Portland, Oregon",
  //     interest_id: 2
  //   },
  //   {
  //     location: "Brussels, Belgium",
  //     interest_id: 2
  //   },
  //   {
  //     location: "Glacier National Park, Montana",
  //     interest_id: 3
  //   },
  //   {
  //     location: "Machu Picchu, Peru",
  //     interest_id: 3
  //   },
  //   {
  //     location: "Grand Canyon, Arizona",
  //     interest_id: 3
  //   },
  //   {
  //     location: "Yosemite National Park, California",
  //     interest_id: 3
  //   },
  //   {
  //     location: "Whistler, Canada",
  //     interest_id: 4
  //   },
  //   {
  //     location: "Aspen, Colorado",
  //     interest_id: 4
  //   },
  //   {
  //     location: "Park City, Utah",
  //     interest_id: 4
  //   },
  //   {
  //     location: "Lake Tahoe, Nevada",
  //     interest_id: 4
  //   },
  //   {
  //     location: "New York City, New York",
  //     interest_id: 5
  //   },
  //   {
  //     location: "Paris, France",
  //     interest_id: 5
  //   },
  //   {
  //     location: "Milan, Italy",
  //     interest_id: 5
  //   },
  //   {
  //     location: "London, United Kingdom",
  //     interest_id: 5
  //   },
  // ];
  
  // db.Locations
  //   .remove({})
  //   .then(() => db.Locations.collection.insertMany(locationsSeed))
  //   .then(data => {
  //     console.log(data.result.n + " records inserted!");
  //     process.exit(0);
  //   })
  //   .catch(err => {
  //     console.error(err);
  //     process.exit(1);
  //   });