const axios = require("axios");
const { response } = require("express");


module.exports = {
    async hourlyData(name) {
        try{
            const URL = `https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_${name}.geojson`
            let res = await axios.get(URL)
            return  res.data.features
        }catch(err){
            console.log(`${err}`)
        }
    },
    async searchFunction(latitude, longitude){
        const URL = `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&latitude=${latitude}&longitude=${longitude}&maxradiuskm=50`
        try {
            let results = await axios.get(URL)
            return results.data.features
        } catch (err) {
            console.log(`${err}`)
        }
    },

        async geocode(location, callback) {
        try{
            const GEO_URL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=${process.env.MAPBOX_API}`;
            let results = await axios.get(GEO_URL)
            const latLong = results.data.features[0].center
            return callback({
                        latitude: latLong[1],
                        longitude: latLong[0]
                    })

        }catch(error){
            console.log(` ${error}`)
        }
	
    },
    isEmpty(obj){
        for(let key in obj){
            if(obj.hasOwnProperty(key)){
                return false
            }
        }
        return true
    }

}






		

