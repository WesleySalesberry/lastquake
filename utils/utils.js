const axios = require("axios");

/*
TODO: when done building change to MongoDB
NEDB used for testing
*/
const Datastore = require('nedb');

const database = new Datastore('test.db');

database.loadDatabase();

module.exports = Datastore



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
        addData(item){
            database.insert(item)
    }
}

