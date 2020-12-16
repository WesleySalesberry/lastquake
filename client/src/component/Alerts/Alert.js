import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Alert, Fade } from 'react-bootstrap';

const Alerts = ({ alert }) => {
    return alert !== null && alert.map(alert => (
        
        <Alert 
            key={alert.id} 
            variant={alert.alertType}
            transition={Fade}
            className="d-flex justify-content-center"
            
        >
           {alert.msg}
       </Alert>
    ))

}
  

Alert.protoType = {
    alerts: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    alert: state.alert
})

export default connect(mapStateToProps)(Alerts)

//  alert.map(alert => (
       
//    ))