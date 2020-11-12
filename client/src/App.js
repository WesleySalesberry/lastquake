import React from 'react'

import { Navbar } from './component/Navbar/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';



import { CardDisplay } from './component/Display/CardDisplay';
import { Card } from './component/Card/Card';

function App() {


  return (
    
    <BrowserRouter>
      <Navbar/>
      <CardDisplay name={"hour"} />
     
    </BrowserRouter>
  );
}

export default App;
