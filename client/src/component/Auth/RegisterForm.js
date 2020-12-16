import React, {useState} from 'react'
import { Redirect } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import {useSpring, animated} from 'react-spring'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setAlert } from '../../Redux/alert/alert.action'
import { register } from '../../Redux/user/user.actions'

import './formStyle.css';


const Register = ({status, setAlert, register, isAuthenticated}) => {
    const statusProps = useSpring(
        { opacity: status ? 1 : 0, 
        from: { opacity: 0 } 
    });


    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        passwordConfirmation: '',
    })
    const { username, email, password, passwordConfirmation } = formData

    const handleChange = evt => {
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value
        })
    }

    const handleSubmit = evt => {
        evt.preventDefault();
        if(password !== passwordConfirmation){
            setAlert('Passwords do not match', 'danger')
        }
        register({username, email, password, passwordConfirmation})
        }
    

     if (isAuthenticated){
        return <Redirect to="/dashboard" />
    }
   
    return (
        <animated.div style={statusProps}>
             <Form> 
               <Form.Group>
                   <Form.Label className="text-color">UserName</Form.Label>
                   <Form.Control 
                        size="sm" 
                        autoComplete="on"
                        type="text"
                        name="username"
                        value={username}
                        onChange={evt => handleChange(evt) }
                    ></Form.Control>
               </Form.Group>
               <Form.Group>
                   <Form.Label className="text-color">Email</Form.Label>
                   <Form.Control 
                        size="sm" 
                        autoComplete="on"
                        type="email"
                         name="email"
                        value={email}
                        onChange={evt => handleChange(evt) }
                    ></Form.Control>
               </Form.Group>
               <Form.Group>
                   <Form.Label className="text-color">Password</Form.Label>
                   <Form.Control 
                        size="sm"
                        autoComplete="on"
                        type="password"
                        name="password"
                        value={password}
                        onChange={evt => handleChange(evt) }
                    ></Form.Control>
               </Form.Group>
               <Form.Group>
                   <Form.Label className="text-color">Password</Form.Label>
                   <Form.Control 
                        size="sm"
                        autoComplete="on"
                        type="password"
                        name="passwordConfirmation"
                        value={passwordConfirmation}
                        onChange={evt => handleChange(evt) }
                    ></Form.Control>
               </Form.Group>
              <input type="submit" className="btn btn-primary" onClick={evt => handleSubmit(evt) } value="Register" />
            </Form>
    </animated.div>
    )
}

Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})



export default connect(mapStateToProps, {setAlert, register})(Register)
