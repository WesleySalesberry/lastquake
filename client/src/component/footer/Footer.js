import React from 'react'
import { Nav } from 'react-bootstrap'

export const FooterComponent = () => {
    return (
    <Nav className="bg-dark" sticky="bottom">
           <Nav.Item>
            <Nav.Link href="!#">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="!#">LinkedIn</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="!#">Github</Nav.Link>
        </Nav.Item>
    </Nav>

    )
}
