import React,{Fragment} from 'react'

import { Navbar } from './component/Navbar/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';



import { CardDisplay } from './component/Display/CardDisplay';
import { Landing } from './pages/Landing';



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
