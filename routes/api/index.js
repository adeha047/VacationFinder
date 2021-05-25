const router = require("express").Router();
const bookRoutes = require("./books");
const userRoutes = require("./user");
const flightRoutes = require("./flights")
const interestRoutes = require("./interests")

// Book routes /api/books*
router.use("/books", bookRoutes);
// User routes /api/user*
router.use("/user", userRoutes);

router.use("/flights", flightRoutes);

router.use("/interests", interestRoutes);

router.use("/locations", interestRoutes);

module.exports = router;
