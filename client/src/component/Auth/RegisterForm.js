import React, {useState} from 'react'
import { Form, Alert } from 'react-bootstrap';
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
        name: '',
        email: '',
        password: '',
        passwordConfirmation: '',
    })
    const { name, email, password, passwordConfirmation } = formData

    const checkPassword = (pass1, pass2) => {
       return pass1 === pass2 ? false : true
    }

    const handleChange = evt => {
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value
        })
    }

    const handleSubmit = evt => {
        evt.preventDefault();
        register({name, email, password, passwordConfirmation})
        }
   
    return (
        <animated.form style={statusProps}>
             <Form> 
               <Form.Group>
                   <Form.Label className="text-color">UserName</Form.Label>
                   <Form.Control 
                        size="sm" 
                        autoComplete="on"
                        type="text"
                        name="name"
                        value={name}
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
    </animated.form>
    )
}

Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    isAuthenticated: state.isAuthenticated
})



export default connect(mapStateToProps, {setAlert, register})(Register)
