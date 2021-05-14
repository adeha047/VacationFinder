const router = require("express").Router();
const flightsController = require("../../controllers/flightsController.js");

// Matches with "/api/flights"
router.route("/")
  .get(function (req, res) {
      flightsController.getflights().then(response => {
          res.send(response.data)
      })

  })


module.exports = router;