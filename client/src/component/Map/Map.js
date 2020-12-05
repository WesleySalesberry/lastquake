import React,{Fragment} from 'react'
import { renderToStaticMarkup } from 'react-dom/server';
import { MapContainer, Marker, TileLayer, Popup, Icon } from 'react-leaflet'
import {divIcon} from 'leaflet';
import {Container} from 'react-bootstrap'
import {changeColor} from '../../Utils/utils'



export const Map = ({ data, position, zoom }) => {

    const markerIcon = divIcon({
        className: "icon",
        html: renderToStaticMarkup(<i className={"fas fa-map-pin"}></i>)

    })
    
    return (
        <Container>
            <MapContainer center={position} zoom={zoom} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {
                    data.map(item => (
                        <Marker
                            key={item.id}
                            position={[item.geometry.coordinates[1], item.geometry.coordinates[0] ]}
                            icon={markerIcon}
                            className={changeColor(item.properties.mag)}
                        >
                            <Popup 
                                className="popup"
                            >
                                <div>
                                    <p>Location: {item.properties.place}</p>
                                    <p>Magnitude: {item.properties.mag.toFixed(2)}</p>
                                </div>
                            </Popup>
                        </Marker>
                        
                        
                    ))
                }
            </MapContainer>
        </Container>
    )
}
