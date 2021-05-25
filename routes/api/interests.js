const router = require("express").Router();
const {Interest} = require("../../models")
// Matches with "/api/interests"
router.get("/", async (req, res) => {
    try {
        const request = await Interest.find({}).then (response => response); 
        return res.json({
            message: "Here is the list of interests",
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