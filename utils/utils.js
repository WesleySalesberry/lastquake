const axios = require("axios");



module.exports = {
     async myData(name) {
        try{
            const URL = `https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_${name}.geojson`
            let res = await axios.get(URL)
            return  res.data.features
        }catch(err){
            console.log(`${err}`)
        }
    },
}

