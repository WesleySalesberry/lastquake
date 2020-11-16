import React,{Fragment} from 'react'
import { renderToStaticMarkup } from 'react-dom/server';
import { MapContainer, Marker, TileLayer, Popup, Icon } from 'react-leaflet'
import {divIcon} from 'leaflet';



export const Map = ({city, data, position}) => {
    const markerIcon = divIcon({
        className: "icon",
        html: renderToStaticMarkup(<i className="fas fa-map-pin"></i>)

    })
    console.log(typeof city)
    return (
        <Fragment>
             <div>
                 <h4>Currently searching area around { city }</h4>
             </div>
            <MapContainer center={position} zoom={9} scrollWheelZoom={false}>
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
