import React, { useEffect } from 'react'
import { Container, Row, Col, Image} from 'react-bootstrap'
import { Loader } from '../Loader/Loader'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { myProfile } from '../../Redux/profile/profile.action'
import { Redirect } from 'react-router'

const ProfileComponent = ({ myProfile, auth:{ isAuthenticated, user, loading}, profile:{profile} }) => {
  useEffect(()=>{
    myProfile()
  },[])

  if(!isAuthenticated){
    return <Redirect to="/"/>
  }

    return loading ?
    (
      <Loader />
    )
    :
    (
        <Container>
          <Row className="justify-content-md-center">
              <Col xs={6} md={4} className="justify-content-sm-center">
                <Image 
                    src="https://source.unsplash.com/random" 
                    thumbnail 
                    className="mb-3"
                    height={20}
                />
              </Col>
          </Row>
          <Row>
            <Col>
                <h3>Welcome {user && user.username}</h3>
                <p>Date Joined: {user && user.date }</p>
            </Col>
          </Row>
          <Row>
            <Col>
            <h4>Bio</h4>
            <p>{profile && profile.bio}</p>
            </Col>
          </Row>
      </Container>

    ) 
}
    

ProfileComponent.propTypes = {
  myProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
})

export default connect(mapStateToProps, { myProfile })(ProfileComponent)
 
