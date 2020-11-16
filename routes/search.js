const express = require('express')
const router = express.Router()
const {hourlyData, geocode, searchFunction, isEmpty}= require('../utils/utils')


//@route  GET api/search item
//@desc   Search events
//@access Public
router.get('/api/search/:location', async (req, res) => {
    const searchLocation = req.params.location;

    const geocode_res = await geocode(searchLocation, ({ latitude, longitude }) => {
        return searchFunction(latitude, longitude)
    })

    isEmpty(geocode_res) ? res.send("No Current Information"):res.send(geocode_res)
    
})

module.exports = router


