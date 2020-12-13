import React, {useState } from 'react'
import { MapDisplay } from '../../component/Map/MapDisplay'
import { option_2 } from './Opitions'
import {Container, Row, Jumbotron, DropdownButton, Dropdown} from 'react-bootstrap'
import { currentData } from '../../Utils/api'
import './Landing.css'
import { FooterComponent } from '../../component/footer/Footer'

export const Landing = () => {
    const [ time, setTime ] = useState('')
    const handleSelect = (evt) =>{
        console.log(evt)
        setTime(evt)
    }

    return (
        <Container>
                    <Jumbotron className="bg-color text-color">
                        <h1 className="header text-center">Welcome To LastQuake</h1>
                        <p className="lead text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, optio? </p>
                    </Jumbotron>
                <Row className="justify-content-md-center">
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
                </Row>
            {
                time === "" ? <Row className="justify-content-md-center text-color"><h1>Select a Time Frame</h1></Row> : <MapDisplay zoom={4} option={time} func={currentData}/>
            }
        </Container>
        
    )
}

