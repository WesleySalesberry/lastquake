import React, {useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { animated } from "react-spring";
import ProfileComponent from './ProfileComponent';
import UpdateProfile from './UpdateProfile';

import { connect } from 'react-redux'
import { deleteAccount } from '../../Redux/profile/profile.action'

const DisplayProfile = ({ deleteAccount }) => {
    const [status, setStatus] = useState()

    const handleDelete = evt => {
      evt.preventDefault()
      deleteAccount()

    }

    return (
       <Container fluid className="mt-3">
        <Row className="BTN-nav justify-content-md-center">
          <Col md={{ span: 3, offset: 3 }}>
          <animated.button 
            className="login"
            onClick={() => setStatus(!status)}
          >Go to {status ? "profile" : "update profile" }</animated.button>
          </Col>
          <Col md={{ span: 3, offset: 3 }}>
            <input 
              type="submit" 
              onClick={evt => handleDelete(evt) }
              className="delete-BTN"
              value="Delete Account"
            />
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col>
             {
              status ? 
                <UpdateProfile />
                :
                <ProfileComponent />
          }
          </Col>
        </Row>
      </Container>
    )
}

export default connect(null, { deleteAccount })(DisplayProfile)
