import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Alert } from 'react-bootstrap';

const Alert = ({ alerts }) =>  alerts !== null && alerts.length > 0 &&
   alerts.map(alert => (
       <Alert key={alert.id} variant={alert.alertType}>
           {alert.msg}
       </Alert>
   ))
   console.log(alerts.id)

Alert.protoType = {
    alerts: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    alerts: state.alertReducer
})

export default connect(mapStateToProps)(Alert)