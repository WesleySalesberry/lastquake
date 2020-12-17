import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { Container, Form } from 'react-bootstrap'

import { upDateProfile } from '../../Redux/profile/profile.action'
import { connect } from 'react-redux'
import { setAlert } from '../../Redux/alert/alert.action'

const UpdateProfile = ({ setAlert, upDateProfile }) => {
    const [update, setUpDate] = useState({
        bio: ''
    })
    const [ redirect, hasRedirected ] = useState(false)

    const { bio } = update

    const handleChange = evt => {
        setUpDate({
            ...update,
            [evt.target.name]: evt.target.value
        })
    }


    const handleSubmit = (evt) => {
        evt.preventDefault()
        hasRedirected(true)
        if(redirect){
            console.log('running')
            setAlert('Bio update Successful', 'success')
        }
        upDateProfile(update)
    }

    return (
        <Container fluid="sm" className="mt-3">
            <Form>
                <Form.Group>
                    <Form.Label>Up Date Your Bio</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        row={2} 
                        name="bio"
                        value={bio}
                        onChange={evt => handleChange(evt) }
                    />
                </Form.Group>
                 <input type="submit" className="btn btn-primary" onClick={evt => handleSubmit(evt) } value="Update" /> 
            </Form> 
        </Container>
    )
}

UpdateProfile.propTypes = {
    setAlert: PropTypes.func.isRequired,
}

export default connect(null, {setAlert, upDateProfile})(UpdateProfile)

