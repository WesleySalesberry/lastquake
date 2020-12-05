import React,{Fragment, useEffect, } from 'react'

import { Navbar } from './component/Navbar/Navbar';
import { Route } from 'react-router-dom';

import { DisplayForms } from './Pages/Auth/DisplayForms';
import { Landing } from './Pages/LandingPage/Landing';


export const App = () => {
 
 
  return (
      <Fragment>
       <Navbar />
        <Route exact path="/forms" component={DisplayForms}/>
        <Route exact path="/" component={Landing} />
      </Fragment>
  );
}


