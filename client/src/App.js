import React,{Fragment} from 'react'

import { Navbar } from './component/Navbar/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import { Landing } from './pages/LandingPage/Landing';





function App() {


  return (
    
    <BrowserRouter>
      <Fragment>
        <Navbar />
        <Route exact path="/" component={Landing} />
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
