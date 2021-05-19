const router = require("express").Router();
const flightsController = require("../../controllers/flightsController.js");

// Matches with "/api/flights"
router.route("/")
  .get(function (req, res) {
      flightsController.getflights("New York").then(response => {
        console.log(response)  
        res.json(response);
          
      })

  })


module.exports = router;