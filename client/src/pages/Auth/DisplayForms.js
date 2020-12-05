import React, {useState} from 'react'
import './Styles.css'
import { useSpring, animated } from "react-spring";
import { LoginForm } from '../../Auth/LoginForm'
import { Register } from '../../Auth/RegisterForm'
import { Container } from 'react-bootstrap';

export const DisplayForms = () => {
    const [registrationFormStatus, setRegistartionFormStatus] = useState(false);
    const loginProps = useSpring({ 
            left: registrationFormStatus ? -500 : 0,
        });
    const registerProps = useSpring({
            left: registrationFormStatus ? 0 : 500, 
        });

    const loginBtnProps = useSpring({
            borderBottom: registrationFormStatus 
            ? "solid 0px transparent"
            : "solid 2px #1059FF",  
        });
    const registerBtnProps = useSpring({
            borderBottom: registrationFormStatus
            ? "solid 2px #1059FF"
            : "solid 0px transparent", 
        });

    function registerClicked() {
            setRegistartionFormStatus(true);
        }
    function loginClicked() {
            setRegistartionFormStatus(false);
        }
    return (
      <Container>
        <div className="wrapper">
          <div className="button">
            <animated.button
              onClick={loginClicked}
              id="loginBtn"
              style={loginBtnProps}
            >
              Login
            </animated.button>
            <animated.button
              onClick={registerClicked}
              id="registerBtn"
              style={registerBtnProps}
            >
              Register
            </animated.button>
          </div>
          <div className="form-group">
            <animated.form action="" id="loginform" style={loginProps}>
            <LoginForm />
            </animated.form>
            <animated.form action="" id="registerform" style={registerProps}>
              <Register />
            </animated.form>
          </div>
          <animated.div className="forgot-panel" style={loginProps}>
            <a herf="#">Forgot your password</a>
          </animated.div>
        </div>
    </Container>
  );
}
