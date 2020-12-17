import React, {useState} from 'react'
import { animated } from "react-spring";
import Register  from '../../component/Auth/RegisterForm';
import LoginForm from '../../component/Auth/LoginForm';
import { Container } from 'react-bootstrap';


export const DisplayForms = () => {
  const [status, setStatus] = useState()

  return (
      <Container fluid="md">
        <div className="BTN-nav">
          <animated.button 
            className="login"
            onClick={() => setStatus(!status)}
          >Go to {status ? "Register" : "Login" }</animated.button>
          { 
            !status ? 
              <Register status={!status} />
            :
              <LoginForm status={status} />
          }
        </div>
      </Container>
  )
}