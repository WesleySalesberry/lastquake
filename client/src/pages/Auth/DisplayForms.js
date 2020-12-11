import React, {useState} from 'react'
import './Styles.css'
import { animated } from "react-spring";
import Register  from '../../component/Auth/RegisterForm';
import LoginForm from '../../component/Auth/LoginForm';


export const DisplayForms = () => {
  const [status, setStatus] = useState()

  return (
      <div className="container">
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
      </div>
  )
}

  // <div className="BTN-nav">
  //         <animated.button 
  //           className="login"
  //           style={loginBTN}
  //           onClick={handleLoginClick}
  //         >
  //           Login
  //         </animated.button>
  //         <animated.button 
  //           className="register"
  //           style={registerBTN}
  //           onClick={handleRegisterClick}
  //         >
  //          Register
  //         </animated.button>
  //       </div>





  // {
  //           status ? 
  //             transitions.map(({item, props, key}) => {
  //               return  <animated.form><Register
  //                        key={key}
  //                        style={props}
  //                      />
  //                       </animated.form>
  //             })
  //           :
  //              transitions.map(({item, props, key}) => {
  //               return  <animated.form><LoginForm
  //                        key={key}
  //                        style={props}
  //                      />
  //                       </animated.form>
  //             })

  //         }