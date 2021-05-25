const router = require("express").Router();
const {Location} = require("../../models")
// Matches with "/api/locations"
router.get("/", async (req, res) => {
    try {
        const request = await Location.find({}).then (response => response); 
        return res.json({
            message: "Here is the list of locations",
            status: 200, 
            data: request
         });
    } catch(error) {
       return res.json({
        message: "There was an error on the server!",
        status: 500,
        error
     });
    }
});

  
module.exports = router;