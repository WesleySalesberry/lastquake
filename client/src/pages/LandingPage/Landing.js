import React, {Fragment, useState } from 'react'

import { MapDisplay } from '../../component/Map/MapDisplay'

import { option_2 } from './Opitions'

import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'

import { currentData } from '../../Utils/api'

import './Landing.css'


export const Landing = () => {
    const [ city, setCity ] = useState('')

    console.log(city)

    const handleSelect = (evt) =>{
        console.log(evt)
        setCity(evt)
    }

    return (
        <Fragment>
            <main role="main">
                <section className="jumbotron text-center bg-color">
                    <div className="container">
                        <h1>Last<span className="main_text_color">Quake</span></h1>
                        <p className="lead text-muted">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, odio? Quasi, in voluptas! Ad laboriosam tempora quaerat aperiam eligendi, unde minus esse dignissimos, nemo vero cumque autem qui quos perferendis nihil maxime maiores inventore odit?
                        </p>
                        <p>
                            <a className="btn btn-secondary my2">Sign Up</a>
                            <a className="btn btn-secondary my2">Register</a>
                        </p>
                    </div>
                </section>
                <div className="container">
                    <DropdownButton
                        title="Time Frame"
                        id="dropdown-menu-align-end"
                        onSelect={handleSelect}
                     >
                            {
                                option_2.map(item => (
                                    <div key={item.id}>
                                        <Dropdown.Item eventKey={item.value}>{item.name}</Dropdown.Item>
                                        <Dropdown.Divider />
                                     </div>
                                ))
                            }
                
                    </DropdownButton> 
                        </div>
            </main>
            {
                city === "" ? <h1>Select a Time Frame</h1> : <MapDisplay zoom={4} option={city} func={currentData}/>
            }
             
        </Fragment>
        
    )
}

/*
    alpide
    los angeles
    oakland
    ring of fire
    san andreas fault
    Cape Mendicino
 */
