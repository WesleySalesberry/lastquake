import React,{Fragment, useEffect, } from 'react'

import NavbarComponent from './component/Navbar/Navbar';
import { Route, Switch } from 'react-router-dom';

import { DisplayForms } from './Pages/Auth/DisplayForms';
import { Landing } from './Pages/LandingPage/Landing';

import { setAuthToken } from './Utils/api'
import { loaduser } from './Redux/user/user.actions';
import {store} from './Redux/store'

import { FooterComponent } from './component/footer/Footer';
import Alerts from './component/Alerts/Alert';
import { Dashboard } from './Pages/Dashboard/Dashboard';

import PrivateRoute from './component/Routeing/PrivateRoute';


 if(localStorage.token){
        setAuthToken(localStorage.token)
    }

export const App = () => {
  
  useEffect(() => {
    store.dispatch(loaduser())
  }, [])

  return (
      <Fragment>
       <NavbarComponent />
       <Alerts /> 
       <Switch>
          <Route exact path="/forms" component={DisplayForms}/>
          <Route exact path="/" component={Landing} />
          <PrivateRoute exact path="/dashboard" component={Dashboard}/>
        </Switch>
      </Fragment>
  );
}


