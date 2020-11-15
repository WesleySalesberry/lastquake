import React, {Fragment, useState, useEffect} from 'react'
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet'
import {api} from '../../Utils/api'

import { changeColor } from '../../Utils/utils'

import { Loader } from '../Loader/Loader'

import './MapDisplay.css'

export const MapDisplay = () => {
    const [userInput, setInput] = useState({
        city: 'oakland'
    })
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([])
    const [initialCoords, setCoords] = useState({
        lat: null,
        long: null
    })
    
    useEffect(() => {
        async function fetchData(){
            getData(userInput.city)
            
        }
        fetchData()
        
    }, [])

    const getData = async (city) => {
        try {
            const myData = await api.get(`/search/${city}`)
            setData(myData.data)

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

    console.log(data)

    const position = [initialCoords.lat, initialCoords.long]

    return isLoading ? 
    (
        <Fragment>
            <h1>Loading</h1>
        </Fragment>
    ):
    (
        <Fragment>
            <div className="container">
                <h1>Hello</h1>
            </div>
            <MapContainer center={position} zoom={10} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {
                    data.map(item => (
                        <Marker
                            key={item.id}
                            position={[item.geometry.coordinates[1], item.geometry.coordinates[0] ]}
                            className={changeColor(item.properties.mag)}
                        >
                            <Popup >
                                <div>
                                    <p>{item.properties.place}</p>
                                </div>
                            </Popup>
                        </Marker>
                        
                        
                    ))
                }
            </MapContainer>
        </Fragment>
    )
}
