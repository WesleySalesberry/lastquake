const express = require('express')
const router = express.Router()
const {myData}= require('../utils/utils')


router.get('/api/:name', async (req, res) => {
    let name = req.params.name;
    const data = await myData(name)
    console.log(`${name}: ${data.length}`)

    if(data.length === 0){
        res.send("No Data is Currently Available")
    }
    res.send(data)
})

module.exports = router
