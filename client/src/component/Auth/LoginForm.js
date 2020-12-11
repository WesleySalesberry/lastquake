import React, {useState} from 'react'
import { Form } from 'react-bootstrap';
import {useSpring, animated} from 'react-spring'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { login } from '../../Redux/user/user.actions'

const LoginForm = ({status, login, isAuthenticated }) => {
    const statusProps = useSpring({ opacity: status ? 1 : 0, from: { opacity: 0 } });
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const { email, password, } = formData

    const handleChange = (evt) => {
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value
        })
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        login(email, password)
    }

    return (
        <animated.form style={statusProps}>
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
        </animated.form >
  );
}

LoginForm.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
}

const mapStateToProps = state => ({
    isAuthenticated: state.isAuthenticated
})

export default connect(mapStateToProps, {login})(LoginForm)