import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'
import {Nav} from 'react-bootstrap'



// import DropdownButton from 'react-bootstrap/DropdownButton';
// import Dropdown from 'react-bootstrap/Dropdown'

export const Navbar = () => {
    return (
    <Nav className="bg-dark">
           <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/forms">Get an Account</Nav.Link>
        </Nav.Item>
    </Nav>
    )
}



