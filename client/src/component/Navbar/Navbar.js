import React, { Fragment } from 'react'
import {Navbar, Nav} from 'react-bootstrap'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { logout } from '../../Redux/user/user.actions'

const NavbarComponent = ({ logout, auth: { isAuthenticated, loading}}) => {
    const authenticatedUser = (
    <Nav>
        <Nav.Item>
            <Nav.Link href="#">Search</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link onClick={logout}>Logout</Nav.Link>
        </Nav.Item>
    </Nav>
    )
     const notAuthenticatedUser = (
    <Nav>
        <Nav.Item>
            <Nav.Link href="/forms">Get an Account</Nav.Link>
        </Nav.Item>
    </Nav>
    )
    return (
    <Navbar  bg="dark" variant="dark">
       <Navbar.Brand href="/" >
           LastQuake
       </Navbar.Brand>
       <Navbar.Collapse className="justify-content-end"></Navbar.Collapse>
       {
           !loading && <Fragment>
               {
                   isAuthenticated ?  authenticatedUser : notAuthenticatedUser 
               }
           </Fragment>
       }

    </Navbar>
    )
}
Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, {logout})(NavbarComponent)




