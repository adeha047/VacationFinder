const router = require("express").Router();
const userRoutes = require("./user");
const interestRoutes = require("./interests")
const locationRoutes = require("./locations")

// Book routes /api/books*

router.use("/user", userRoutes);

router.use("/interests", interestRoutes);

router.use("/locations", locationRoutes);

module.exports = router;
