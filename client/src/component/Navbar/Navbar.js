import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'
import {Nav} from 'react-bootstrap'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { logout } from '../../Redux/user/user.actions'



// import DropdownButton from 'react-bootstrap/DropdownButton';
// import Dropdown from 'react-bootstrap/Dropdown'

const Navbar = ({ logout, isAuthenticated, loading}) => {
    return (
    <Nav className="bg-dark">
           <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/forms">Get an Account</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link onClick={logout}>Logout</Nav.Link>
        </Nav.Item>
    </Nav>
    )
}
Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, {logout})(Navbar)




