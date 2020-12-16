import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import {Route, Redirect} from 'react-router-dom'
import { propTypes } from 'react-bootstrap/esm/Image'

const PrivateRoute = ({ component: Component, user: {isAuthenticated, loading}, ...rest }) => (
    <Route 
        {...rest}
        render={props => !isAuthenticated && !loading ? (<Redirect to='/forms' /> ): (<Component {...props} /> )}
    />
)

PrivateRoute.propTypes = {
    user: PropTypes.object.isRequired,
}

const mapStateToProps = state =>({
    user: state.auth
})

export default connect(mapStateToProps)(PrivateRoute)
