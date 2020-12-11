import React, {Fragment, useState, useEffect} from 'react'
import { renderToStaticMarkup } from 'react-dom/server';
// import { MapContainer, Marker, TileLayer, Popup, Icon } from 'react-leaflet'
// import {divIcon} from 'leaflet';
import { Loader } from '../Loader/Loader'
import {Map} from './Map'
import './MapDisplay.css'


export const MapDisplay = ({ zoom, option, func}) => {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([])
    const [initialCoords, setCoords] = useState({
        lat: null,
        long: null
    })

    useEffect(() => {
        async function fetchData(){
            getData(option)
        }
        fetchData()
        
    }, [option])


    const getData = async (option) => {
        try {
            
             //const myData = await citySearch(city)
             const myData = await func(option)
             setData(myData.data)
             console.log(myData.data.properties)

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

    return typeof data === "string" ? `No Current Information for ${option}`: isLoading ? 
            (
                <Fragment>
                    <Loader />
                </Fragment>
            ):
            (
                <Fragment>
                    <Map
                        position={position}
                        data={data}
                        zoom={zoom}
                    />
                </Fragment>
            )
}
