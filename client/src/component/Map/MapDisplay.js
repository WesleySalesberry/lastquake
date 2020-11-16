import React, {Fragment, useState, useEffect} from 'react'
import { renderToStaticMarkup } from 'react-dom/server';
// import { MapContainer, Marker, TileLayer, Popup, Icon } from 'react-leaflet'
// import {divIcon} from 'leaflet';
import { citySearch } from '../../Utils/api'
import { Loader } from '../Loader/Loader'
import {Map} from './Map'
import './MapDisplay.css'


export const MapDisplay = ({ city }) => {
    // const [userInput, setInput] = useState({
    //     city: city
    // })
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([])
    const [initialCoords, setCoords] = useState({
        lat: null,
        long: null
    })


    
    useEffect(() => {
        async function fetchData(){
            getData(city)

        }
        fetchData()
        
    }, [city])

    const getData = async (city) => {
        try {
            const myData = await citySearch(city)
            setData(myData.data)
            console.log(myData)


            position[0] = myData.data[0].geometry.coordinates[1]
            position[1] = myData.data[0].geometry.coordinates[0]

            setCoords({
                lat: myData.data[0].geometry.coordinates[1].toFixed(3), 
                long: myData.data[0].geometry.coordinates[0].toFixed(3)
            })
            setIsLoading(false)
        } catch (error) {
            console.log(`> Error: ${error}`)
        }
    }

    const position = [initialCoords.lat, initialCoords.long]

    return typeof data === "string" ? `No Current Information for ${city}`: isLoading ? 
            (
                <Fragment>
                    <Loader />
                </Fragment>
            ):
            (
                <Fragment>
                    <Map
                        city={city}
                        position={position}
                        data={data}
                    />
                </Fragment>
            )
}
