const express = require('express')
const router = express.Router()
const {hourlyData, geocode}= require('../utils/utils')

//@route API api/hourly data
//@desc  Data from past events
//@access Public
router.get('/api/:name', async (req, res) => {
    let name = req.params.name;
    const data = await hourlyData(name)
    
    res.send(data)
})

module.exports = router
