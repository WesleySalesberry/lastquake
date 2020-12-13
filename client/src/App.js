import React,{Fragment, useEffect, } from 'react'

import Navbar from './component/Navbar/Navbar';
import { Route } from 'react-router-dom';

import { DisplayForms } from './Pages/Auth/DisplayForms';
import { Landing } from './Pages/LandingPage/Landing';

import { setAuthToken } from './Utils/api'
import { loaduser } from './Redux/user/user.actions';
import {store} from './Redux/store'
import { Alert } from 'react-bootstrap';
import { FooterComponent } from './component/footer/Footer';
import { Dashboard } from './Pages/Dashboard/Dashboard';


 if(localStorage.token){
        setAuthToken(localStorage.token)
    }

export const App = () => {
  
  useEffect(() => {
    store.dispatch(loaduser())
  }, [])

  return (
      <Fragment>
       <Navbar />
       <Alert />
        <Route exact path="/forms" component={DisplayForms}/>
        <Route exact path="/" component={Landing} />
        <Route exact path="/dashboard" component={Dashboard}/>
      </Fragment>
  );
}


