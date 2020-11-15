const express = require('express')
const router = express.Router()
const {hourlyData, geocode, searchFunction, isEmpty}= require('../utils/utils')


//@route  GET api/search item
//@desc   Search events
//@access Public
router.get('/api/search/:location', async (req, res) => {
    let searchLocation = req.params.location;
    try {
        let geocode_res = await geocode(searchLocation)
    
        const long = geocode_res[0]
        const lat = geocode_res[1]
        let searchResults = await searchFunction(lat, long)

        isEmpty(searchResults) ? res.send("No Current Information"):res.send(searchResults)
        
    } catch (error) {
        console.log(`Search File: ${error}`)
        res.send(`Server Error: ${error}`)
    }
    
    
})




module.exports = router

// router.get('/api/search/:location', async (req, res) => {
//     const searchLocation = req.params.location;

//     const geocode_res = await geocode(searchLocation, ({ latitude, longitude }) => {
//         searchFunction(latitude, longitude)
//     })

//     console.log(geocode_res)
//     res.send(geocode_res)
    
// })