import React, {Fragment} from 'react'
import {timeConverter} from '../../Utils/utils'
import './Card.css'
export const Card = ({key, map, title, starttime, updatedtime, mag, felt, tyevent}) => {

    const changeBackground = (mag) => {

       if(mag <= 4.90){

           return "small";

       }else if(mag <= 5.90){

           return "medium";

       }else if(mag <= 6.90){
           return "large"
       }else{
           return "huge"
       }
    }
    return (
        <Fragment>
           <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" key={key}>
               <div className="tile">
                   <div className="wrapper">
                       <div className="header">{title}</div>
                       <div className="banner-img">
                           <img src="http://via.placeholder.com/640x360" alt=""/>
                       </div>
                       <div className="dates">
                           <div className="start">
                               <strong>Started: </strong> {timeConverter(starttime)}
                           </div>
                           <div className="ends">
                               <strong>Updated:</strong> {timeConverter(updatedtime)}
                           </div>
                       </div>
                       <div className="stats">
                           <div className={changeBackground(mag)}>
                               <strong>Magnitude: </strong>{Number.parseFloat(mag).toFixed(2)}
                           </div>
                           <div className={felt === null ? "hide" : ""}>
                               <strong>Felt: </strong>{felt} 
                           </div>
                           
                       </div>
                       <div className="status">
                           <div>
                               <strong>Type of Event: </strong>{tyevent}
                           </div>
                       </div>
                       <div className="footer">
                            <a href={`https://earthquake.usgs.gov/earthquakes/eventpage/${map}`} target="_blank" className="Cbtn Cbtn-primary">More Info</a>
                            <a href={`https://earthquake.usgs.gov/earthquakes/eventpage/${map}/map`} target="_blank" className="Cbtn Cbtn-danger">USGS Map</a>
                        </div>
                   </div>
               </div>
           </div>
        </Fragment>
    )
}

