const express = require('express')
const router = express.Router()
const addData = require('../utils/utils')

router.post('/api', (req, res) => {
    const data = req.body
    data.timestamp = timestamp
    addData(data)
    console.log(data)
    res.json(data)
})


module.exports = router