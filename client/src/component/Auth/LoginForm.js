import React, {useState} from 'react'
import { Form } from 'react-bootstrap';
import {useSpring, animated} from 'react-spring'
import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { setAlert } from '../../Redux/alert/alert.action'
import { login } from '../../Redux/user/user.actions'

const LoginForm = ({setAlert, status, login, isAuthenticated }) => {
    const statusProps = useSpring({ opacity: status ? 1 : 0, from: { opacity: 0 } });
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const { email, password, } = formData

    const validForm = (email, password) => {
        if(email === ''){
            setAlert('Email Cannot Be Blank', 'danger')
        }
        if (password === ''){
            setAlert('Password Cannot Be Blank', 'danger')
        }
    }

    const handleChange = (evt) => {
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value
        })
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        if(password === ''){
            setAlert('Invalid Form', 'danger')
        }
        login(email, password)
    }
    if (isAuthenticated){
        // console.log(`Is Auth: ${isAuthenticated}`)
        return <Redirect to="/dashboard" />
    }

    return (
        <animated.div style={statusProps}>
             <Form> 
                <Form.Group>
                   <Form.Label className="text-color">Email</Form.Label>
                   <Form.Control 
                        size="sm" 
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
                        type="password"
                        name="password"
                        value={password}
                        onChange={evt => handleChange(evt) }
                    ></Form.Control>
               </Form.Group>
                <input type="submit" className="btn btn-primary" onClick={evt => handleSubmit(evt) } value="Login" />
            </Form>
        </animated.div >
  );
}

LoginForm.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    setAlert: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {setAlert, login})(LoginForm)