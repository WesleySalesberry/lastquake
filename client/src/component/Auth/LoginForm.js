import React, {useState} from 'react'
import { Button, InputGroup, Container, Form, Alert } from 'react-bootstrap';
import {useSpring, animated} from 'react-spring'

export const LoginForm = ({status}) => {
    const statusProps = useSpring({ opacity: status ? 1 : 0, from: { opacity: 0 } });
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    const { username, password, } = formData

    const handleChange = (evt) => {
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value
        })
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        console.log(formData)
    }

    return (
        <animated.form style={statusProps}>
             <Form> 
                <Form.Group>
                   <Form.Label className="text-color">UserName</Form.Label>
                   <Form.Control 
                        size="sm" 
                        type="text"
                        name="username"
                        value={username}
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
