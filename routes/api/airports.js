const router = require("express").Router();
const flightsController = require("../../controllers/airportsController.js");

// Matches with "/api/flights"
router.route("/")
  .get(function (req, res) {
      flightsController.getairports().then(response => {
          res.send(response.data);
      })

  })


module.exports = router;